import { Question } from "models"
import data from "./mock"

export const getNewQuestions = (
    lastAssignedQuestion: number,
    amount: number
) => {
    const newQuestions = data.questions.filter(
        (question) => {
            if (
                question.id > lastAssignedQuestion &&
                question.id <= lastAssignedQuestion + amount
            ) {
                return true
            }
            return false
        }
    )
    return newQuestions
}

export const getRegions = () => {
    return data.regions
}

export const getCurrentCycle = () => {
    return data.currentCycle
}

export const getUser = (id: number) => {
    return data.Users.map((user) => {
        if (user.id === id) return user
    })[0]
}

export const assignQuestions = (questions: Question[]) => {
    //database logic to update question with region and cycle number at the same time

    for (const question of questions) {
        data.questions[question.id] = question
    }
}

export const updateCurrentCycle = (
    lastAssignedQuestion: number
) => {
    //database logic to increase current cycle number by 1 and update lastassigned number

    data.currentCycle.number++
    data.currentCycle.lastQuestion = lastAssignedQuestion
}
