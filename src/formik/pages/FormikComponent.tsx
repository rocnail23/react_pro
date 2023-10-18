import "../styles/styles.css";
import { useFormik,Form, ErrorMessage,Field,Formik } from "formik";
import * as yup from "yup"




export const FormikComponent = () => {

  return (
    <div>
      <h1>formik exercise</h1>
      <Formik 
       initialValues={{
        firstName: "",
        lastName:"",
        email: "",
        terms:false,
        profession:""}}
        onSubmit={values => console.log(values)}
        validationSchema={yup.object().shape({
          firstName: yup.string()
                                .required("required!")
                                .max(15,"max 15 characters"),
         lastName: yup.string()
                                .required("required!")
                                .max(15,"max 15 characters") , 
         email: yup.string()
                                .email("email invalid")       
                                .required("required!"),
         terms: yup.boolean()
                             .oneOf([true], "debes aceptar"),
         profession: yup.string()
                                .required()                                         
                                                                  
         })}>

          {() => (
            <Form>

            <Field name="firstName" type="text"/>
            <ErrorMessage name="firstName" component="span" />

            <Field name="lastName" type="text"/>
            <ErrorMessage name="lastName" component="span" />

            <Field name="email" type="email"/>
            <ErrorMessage name="email" component="span" />

            <label>
            <Field name="terms" type="checkbox" />
            terminos y condiciones
            </label>
            <ErrorMessage name="terms" component="span"/>

            <Field name="profession" as="select" >

              <option value="">selecciona algo</option>
              <option value="itJr">it Jr</option>
              <option value="itSr">it Sr</option>
            </Field>
            <ErrorMessage name="profession" component="span"/>

            <button>enviar</button>
            
          </Form>
          )}

      </Formik>

      
    </div>
  );
};

export default FormikComponent