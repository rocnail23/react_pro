import "../styles/styles.css";
import { Form, ErrorMessage,Field,Formik } from "formik";
import * as yup from "yup"
import Myinput from "../components/Myinput";
import { MyCheckBox } from "../components/MyCheckBox";
import { MySelect } from "../components/MySelect";




export const FormikAbstracted = () => {

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

            <Myinput   name="firstName" label="firstName" type="text"/>
            <Myinput   name="lastName" label="LastName" type="text"/>
            <Myinput   name="email" label="email" type="email"/>
           
            <MyCheckBox name="terms" label="terms" type="checkbox"/>
            <label>
            <Field name="terms" type="checkbox" />
            terminos y condiciones
            </label>
            <ErrorMessage name="terms" component="span"/>

            <MySelect name="profession" type="select" label="profession">

              <option value="">selecciona algo</option>
              <option value="itJr">it Jr</option>
              <option value="itSr">it Sr</option>
            </MySelect>
            <ErrorMessage name="profession" component="span"/>

            <button>enviar</button>
            
          </Form>
          )}

      </Formik>

      
    </div>
  );
};

export default FormikAbstracted