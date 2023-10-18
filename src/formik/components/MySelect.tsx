import { useField } from 'formik';

interface Props {
    label: string,
    name: string,
    [x:string]: any
}

export const MySelect = ({label, ...props}:Props) => {
    const [field,meta] = useField(props)
    console.log(field)
  return (
    <div>
        <label>
        {label}
            <select {...field} {...props}/>
           
        </label>

        {meta.error && meta.touched && <span>{meta.error}</span>}
    </div>
  )
}

