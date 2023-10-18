import { ChangeEvent, useState } from "react"



export const useForm = <T>(InitialValues:T) => {


    const [form , setForm] = useState(InitialValues)

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        })

        }

        return {
            handleChange,
            form,
            ...form
        }
}