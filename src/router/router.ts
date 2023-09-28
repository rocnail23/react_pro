import {lazy} from "react"
import NoLazy from "../components/NoLazy"

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
        component: NoLazy,
        name: "noLazy",
        path: "/",
        relativePath:"/"
        
    },

    {
        component: primaryLayout,
        name: "layout",
        path: "/layout",
        relativePath: "/Layout/*"
    }
   

] 

export default primaryRouter