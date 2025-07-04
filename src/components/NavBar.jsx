import { NavLink } from "react-router-dom";
import "../css/navbar.css"
const NavBar = () =>{
    return (
                <nav className="nav_bar">
            <ul className="navcert">
            <li className="navlink"><NavLink to="/projects" >Projects</NavLink></li>
           <li className="navlink"><NavLink to="/labs">Labs</NavLink></li>
            <li className="navlink"><NavLink to="/about">About</NavLink></li>

                </ul>
            </nav>
    )
}

export default NavBar;