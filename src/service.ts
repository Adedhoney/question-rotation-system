import { RedisClientType } from "redis"
import {
    assignQuestions,
    getCurrentCycle,
    getNewQuestions,
    getRegions,
    getUser,
    updateCurrentCycle,
} from "repository"
import { Question } from "models"

export class QuestionService {
    constructor(private readonly redis: RedisClientType) {}

    private getQuestionKey(region: string): string {
        return `current_question:${region}`
    }

    async getCurrentQuestion(
        userId: number
    ): Promise<Question> {
        // get User
        const user = getUser(userId)
        if (!user) {
            throw new Error("User not found")
        }
        // Try cache first
        const cacheKey = await this.getQuestionKey(
            user.region
        )
        const cachedQuestion = await this.redis.get(
            cacheKey
        )

        if (cachedQuestion) {
            return JSON.parse(cachedQuestion)
        }

        // Get from database if not in cache
        const cycle = getCurrentCycle()
        const question = getNewQuestions(
            cycle.lastQuestion,
            1
        )[0]

        // Cache with exact TTL to match cycle end

        await this.redis.set(
            cacheKey,
            JSON.stringify(question)
        )

        return question
    }

    async rotateQuestions(): Promise<void> {
        const pipeline = this.redis.multi()
        // Get all regions

        const currentCycle = getCurrentCycle()
        const nextCycleNumber = currentCycle.number + 1
        const regions = getRegions()
        const questions = getNewQuestions(
            currentCycle.lastQuestion,
            regions.length
        )
        let lastAssignedQuestion = currentCycle.lastQuestion

        for (let i = 0; 1 < regions.length; i++) {
            const nextQuestion = questions[i]
            lastAssignedQuestion = nextQuestion.id

            if (!nextQuestion) {
                // Maintains the last question if you run out of questions
                continue
            }

            pipeline.set(
                // doesn't expire. Will stay in the cache until the next cycle
                this.getQuestionKey(regions[i].name),
                JSON.stringify(nextQuestion)
            )

            questions[i].cycle = nextCycleNumber
            questions[i].region = regions[i].name
        }

        assignQuestions(questions)
        updateCurrentCycle(lastAssignedQuestion)
    }
}
