import dotenv from "dotenv"

dotenv.config()

export const config = {
    port: 3000,
    redis: {
        url:
            process.env.REDIS_HOST ||
            "redis://default:OC1uZvJCou3Y02LO2zzNnT9JtfjHMZzE@redis-14519.c326.us-east-1-3.ec2.redns.redis-cloud.com:14519",
    },
    questionCycle: {
        defaultDurationDays: 7,
        defaultStartHour: 19, // 7 PM
        defaultStartMinute: 0,
    },
}
