import { FIRST_USER, RESET } from "../types";


const InputNumRed = (state = {}, action) => {
    switch (action.type) {
        case FIRST_USER: {
            if (Number(action.num) === Number(action.randomNum)) {
                return {
                    title: "Поздравляем вы отгодали число",
                    description: "Играть заново",
                    completed: true
                }
            } else {
                return {
                    title: "Вы не отгодали число",
                    description:
                        Number(action.num) > Number(action.randomNum)
                            ? "Не правильно берите ниже"
                            : "Не правильно берите выше",
                    completed: false
                }
            }
        }
         case RESET: {
            return{
                title: "",
                description: "",
                completed: false
            }
         }

        default:
            return state

    }
}
export default InputNumRed