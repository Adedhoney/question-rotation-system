export interface Question {
    id: number // also functions as question nnumber
    question: string //question content
    cycle: number | null // cycle number it is assigned. Null before assignment
    region: string | null // region it is assigned. Null before assignment
}

export interface Region {
    id: number
    name: string // name of region
}

export interface Cycle {
    lastQuestion: number // questionId
    period: number // number of days in the cyle. Defaults to 7 days
    time: number // time to change the cycle in 24hr time
}

export interface User {
    id: number
    name: string
    region: number // name of region
}
