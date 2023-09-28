import { useState } from "react"


export const useProduct = () => {


    const [state, setState] = useState(0)

    const increaseBy = (value: number) => {
        setState(values => Math.max(values+value, 0))
    }


    return {
        state,
        increaseBy
    }

}