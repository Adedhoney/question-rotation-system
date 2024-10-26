import { Request, Response } from "express"
import { QuestionService } from "./service"

export class QuestionController {
    constructor(
        private readonly questionService: QuestionService
    ) {}

    async getCurrentQuestion(
        req: Request,
        res: Response
    ): Promise<void> {
        try {
            const { userId } = req.params
            const question =
                await this.questionService.getCurrentQuestion(
                    Number(userId)
                )
            res.json(question)
        } catch (error) {
            res.status(500).json({
                error: (error as Error).message,
            })
        }
    }
}
