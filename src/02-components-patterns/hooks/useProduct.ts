import { useEffect, useState,useRef } from "react"
import { OnChangeArgs, Product } from "../interfaces/interfaces"

interface UseProduct {
    onChange?: (args: OnChangeArgs) => void,
    product: Product,
    value?:number
}

export const useProduct = ( { onChange,product,value = 0}:UseProduct) => {


    const [state, setState] = useState(value)

    const isControlled = useRef(!!onChange)

    const increaseBy = (value: number) => {
        
        if(isControlled){
            return onChange!({count:value,product})
        }

        const newValue = Math.max(state + value,0)
        setState(newValue )
        onChange && onChange({product,count:newValue})
    }
    console.log(value)

    useEffect(() => {
        setState(value)
    },[value])

    return {
        state,
        increaseBy
    }

}