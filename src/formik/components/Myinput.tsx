import {useField} from "formik"

interface Props {
    label: string,
    name: string,
    type: "text" | "email" | "password",
    [x:string]: string
}


const Myinput = ({label,...props}:Props) => {

    const [field,meta] = useField(props)
    console.log(field)
  return (
    <div>
        <label>
        {label}
            <input {...field}  />
           
        </label>

        {meta.error && meta.touched && <span>{meta.error}</span>}
    </div>
  )
}

export default Myinput