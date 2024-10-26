import dotenv from "dotenv"

dotenv.config()

export const config = {
    port: 3000,
    redis: {
        uri: process.env.REDIS_URI || "localhost",
    },
    questionCycle: {
        defaultDurationDays: 7,
        defaultStartHour: 19, // 7 PM
        defaultStartMinute: 0,
    },
}
