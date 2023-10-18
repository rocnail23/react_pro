import { ChangeEvent, FormEvent, useState } from "react"
import "../styles/styles.css"
import { useForm } from "../hooks/useForm"

export const RegisterPage = () => {

 

   const {handleChange,form} = useForm({
    name: "jose",
    email: "jdanielrojas16@gmail.com",
    password: "123456",
    password2: "123456",
})

   const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(form)
   }

  return (
    <div>
        <h1>Register Page</h1>
        <form onSubmit={handleSubmit}>

            <input type="text"
            placeholder="name"
            name="name"
            onChange={handleChange} />

            <input type="email"
            placeholder="email"
            name="email"
            onChange={handleChange} />

            <input type="password"
            placeholder="password"
            name="password"
            onChange={handleChange} />

            <input type="paswword"
            placeholder="repeat password"
            name="password2"
            onChange={handleChange} />

            <button>enviar</button>


        </form>
    </div>
  )
}
