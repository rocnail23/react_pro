import "../styles/styles.css";
import { useFormik } from "formik";
import * as yup from "yup"




export const FormikYupPage = () => {


   

    const { handleChange,values,handleSubmit,errors,touched,handleBlur,getFieldProps} = useFormik({
        initialValues:{
            firstName: "",
            lastName:"",
            email: ""
        },
        onSubmit: value => {
            console.log(value)
        },
       validationSchema: yup.object().shape({
        firstName: yup.string()
                              .required("required!")
                              .max(15,"max 15 characters"),
       lastName: yup.string()
                              .required("required!")
                              .max(15,"max 15 characters") , 
       email: yup.string()
                              .email("email invalid")       
                              .required("required!")
                                                                
       })
    })

    console.log(getFieldProps("email"))

  return (
    <div>
      <h1>formik exercise</h1>
      <form onSubmit={handleSubmit} >
        <input
          type="text"
          placeholder="first name"
          {...getFieldProps("firstName")}
        />
        {errors.firstName && touched.firstName && <span>firstname is required</span>}
        <input
          type="text"
          placeholder="last Name"
          {...getFieldProps("lastName")}
        />
        {errors.lastName && touched.lastName && <span>lastname is required</span>}
        <input
          type="email"
          placeholder="email"
          {...getFieldProps("email")}
        />

 {errors.email && touched.email && <span>email is required</span>}
       <button>enviar</button>
      </form>
    </div>
  );
};

export default FormikYupPage