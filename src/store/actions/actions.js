import { FIRST_USER, RESET } from "../types";


export const inputNum = (num, randomNum) => ({
    type: FIRST_USER,
    num,
    randomNum,
    completed: false
})

export const resetNum = () =>({
    type: RESET
})