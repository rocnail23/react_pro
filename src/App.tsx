import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import logo from "./../public/vite.svg";
import primaryRouter from './router/router';
import {Suspense} from "react"

export const Navigation = () => {
  return (
    <Suspense>
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
          {primaryRouter.map(route => (
            <li>
            <NavLink
              to={route.path}
              className={({ isActive }) => (isActive ? "nav-active" : "")}
            >
              {route.name}
            </NavLink>
          </li>
          ))}   
          </ul>
        </nav>


        <Routes>
      
          {primaryRouter.map(route => (
            <Route key={route.path} path={route.relativePath} Component={route.component}/>
          ))}
       
        </Routes>
      </div>
    </Router>
    </Suspense>
  );
};

export default Navigation;
