import {Link,useLocation,Routes,Route, Navigate} from "react-router-dom"
import About from "../../components/About"
import Users from "../../components/Users"
import Home from "../../components/Home"
import {useEffect} from "react"


const layoutRoutes = () => {

    const {pathname} = useLocation()

   
   useEffect(() => {
    
   
     return () => {
       console.log(pathname)
     }
   }, [])
   

  return (
    <>
    <h2>lazyLayout Pages</h2>
    <ul>
        <li>
            <Link to={`about`}> about</Link>         
        </li>
        <li>
            <Link to={`user`}> users</Link>         
        </li>
        <li>
            <Link to={"home"}>home </Link>         
        </li>
    </ul>

    <div>
      <Routes>
        <Route path={`/about`} element={<About/>}/>
        <Route path={`/user`} element={<Users/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/*" element={<Navigate to="/layout/about"/>}/>
      </Routes>
    </div>
    </>
  )
}

export default layoutRoutes