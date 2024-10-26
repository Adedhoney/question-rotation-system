import express from "express"
import { createClient, RedisClientType } from "redis"
import cron from "node-cron"
import { config } from "./config"
import { QuestionService } from "./service"
import { QuestionController } from "./controller"

const app = express()

// Redis connection
const redis: RedisClientType = createClient({
    url: config.redis.url,
    socket: {
        tls: true,
    },
})
const questionService = new QuestionService(redis)

const questionController = new QuestionController(
    questionService
)

app.get("/api/user/:userId/question", (req, res) =>
    questionController.getCurrentQuestion(req, res)
)

questionService.rotateQuestions() //to set initial questions

// Cron Job runs everyday
// Question rotation by default runs every Monday at 7 PM SGT by default
cron.schedule(
    "0 19 * * 1",
    () => {
        questionService.rotateQuestions()
    },
    {
        timezone: "Asia/Singapore",
    }
)

app.use(
    (
        err: Error,
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) => {
        console.error(err.stack)
        res.status(500).json({
            error: "Something went wrong!",
        })
    }
)

export default app
