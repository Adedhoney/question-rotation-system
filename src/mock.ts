import { Question } from "models"

export default {
    questions: [
        {
            id: 0,
            question: "What is the first cycle?",
            cycle: 1,
            region: "USA",
        },
        {
            id: 1,
            question:
                "What is the circumference of the moon?",
            cycle: null,
            region: null,
        },
        {
            id: 2,
            question:
                "Who is the current president of the United Nations General Assembly?",
            cycle: null,
            region: null,
        },
        {
            id: 3,
            question:
                "What is the speed of light in a vacuum?",
            cycle: null,
            region: null,
        },
        {
            id: 4,
            question: "Name the largest mammal on Earth.",
            cycle: null,
            region: null,
        },
        {
            id: 5,
            question:
                "What year was the first moon landing?",
            cycle: null,
            region: null,
        },
        {
            id: 6,
            question: "Define photosynthesis.",
            cycle: null,
            region: null,
        },
        {
            id: 7,
            question: "What is the capital city of Japan?",
            cycle: null,
            region: null,
        },
        {
            id: 8,
            question:
                "How many bones are in the human body?",
            cycle: null,
            region: null,
        },
        {
            id: 9,
            question:
                "Who wrote the novel 'Pride and Prejudice'?",
            cycle: null,
            region: null,
        },
        {
            id: 10,
            question:
                "What is the atomic number of hydrogen?",
            cycle: null,
            region: null,
        },
        {
            id: 11,
            question:
                "Name the smallest continent by land area.",
            cycle: null,
            region: null,
        },
        {
            id: 12,
            question:
                "In which country is the Great Barrier Reef located?",
            cycle: null,
            region: null,
        },
        {
            id: 13,
            question:
                "What is the primary language spoken in Brazil?",
            cycle: null,
            region: null,
        },
        {
            id: 14,
            question: "Who painted the Mona Lisa?",
            cycle: null,
            region: null,
        },
        {
            id: 15,
            question:
                "What is the boiling point of water in Celsius?",
            cycle: null,
            region: null,
        },
    ] as Question[],
    regions: [
        {
            id: 1,
            name: "Nigeria",
        },
        {
            id: 2,
            name: "USA",
        },
    ],
    currentCycle: {
        number: 0,
        lastQuestion: 0,
        period: 7, //number of days
        time: 19, //time of the day
    },
    Users: [
        {
            id: 1,
            name: "Adeyemi",
            region: "USA",
        },
        {
            id: 2,
            name: "Adedoyin",
            region: "Nigeria",
        },
        {
            id: 3,
            name: "Brian",
            region: "USA",
        },
        {
            id: 4,
            name: "Luke",
            region: "Nigeria",
        },
    ],
}
