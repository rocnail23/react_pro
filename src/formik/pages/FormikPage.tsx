import "../styles/styles.css";
import { useFormik,FormikErrors } from "formik";


interface FormValues {
    firstName: string,
    lastName: string,
    email:string
}

const validate = (values: FormValues) => {

    let errors: FormikErrors<FormValues> = {}

    if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }

    if(!values.firstName){
        errors.firstName = "Required";
    }else if (values.firstName.length >= 15){
        errors.firstName = "debe ser menor a 15 caracteres"
    }

    if(!values.lastName){
        errors.lastName = "Required";
    }else if (values.lastName.length >= 15){
        errors.lastName = "debe ser menor a 15 caracteres"
    }

    return errors
  }



export const FormikPage = () => {


   

    const { handleChange,values,handleSubmit,errors,touched,handleBlur} = useFormik({
        initialValues:{
            firstName: "",
            lastName:"",
            email: ""
        },
        onSubmit: value => {
            console.log(value)
        },
        validate
    })


  return (
    <div>
      <h1>formik exercise</h1>
      <form onSubmit={handleSubmit} >
        <input
          type="text"
          placeholder="first name"
          name="firstName"
          onChange={handleChange}
          value={values.firstName}
          onBlur={handleBlur}
        />
        {errors.firstName && touched.firstName && <span>firstname is required</span>}
        <input
          type="text"
          placeholder="last Name"
          name="lastName"
          onChange={handleChange}
          value={values.lastName}
          onBlur={handleBlur}
        />
        {errors.lastName && touched.lastName && <span>lastname is required</span>}
        <input
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
          value={values.email}
          onBlur={handleBlur}
        />

 {errors.email && touched.email && <span>email is required</span>}
       <button>enviar</button>
      </form>
    </div>
  );
};

export default FormikPage