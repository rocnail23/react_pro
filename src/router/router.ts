import {lazy} from "react"
import NoLazy from "../components/NoLazy"
import { RegisterPage } from "../formik/pages/RegisterPage"
import { FormikPage } from "../formik/pages/FormikPage"
import FormikYupPage from "../formik/pages/FormikYupPage"
import FormikComponent from "../formik/pages/FormikComponent"
import FormikAbstracted from "../formik/pages/FormikAbstracted"

type element = () => JSX.Element

type Router = {
relativePath?: string
 path: string,
 name: string,
 children?:[]
 component:  React.LazyExoticComponent<() => JSX.Element> | element
}

const primaryLayout = lazy(() => import("../lazy.01/layout/layoutRoutes"))


const primaryRouter:Router[] = [
    {
        component: RegisterPage,
        name: "noLazy",
        path: "/",
        relativePath:"/"
        
    },

    {
        component: FormikPage,
        name: "layout",
        path: "/layout",
        relativePath: "/Layout/*"
    },
    {
        component: FormikYupPage,
        name: "yup",
        path: "/yup",
        relativePath: "/yup/*"
    },
    {
        component: FormikComponent,
        name: "formikComponent",
        path: "/component",
        relativePath: "/component/*"
    },
    {
        component: FormikAbstracted,
        name: "formikAbstrated",
        path: "/abstracted",
        relativePath: "/abstracted/*"
    }
   

] 

export default primaryRouter