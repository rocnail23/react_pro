import { useField } from 'formik';

interface Props {
    name:string,
    label: string,
    type: "checkbox" 
    [x:string]:string
}

export const MyCheckBox = ({label,...props}:Props) => {

    const [field,meta] = useField(props)

  return (
   <>
    <label>
    {label}
        <input {...field} {...props}  />
       
    </label>

    {meta.error && meta.touched && <span>{meta.error}</span>}
    </>
  )
}
