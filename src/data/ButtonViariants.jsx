import { nanoid } from "nanoid"

const variants = [
    {
        id: nanoid(),
        name: 'Good',
        type: 'good'
    },

    {
        id: nanoid(),
        name: 'Neutral',
        type: 'neutral'
    },

    {
        id: nanoid(),
        name: 'Bad',
        type: 'bad'
    }
]

export default variants;