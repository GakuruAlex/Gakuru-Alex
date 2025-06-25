import { NavLink } from "react-router-dom";
import "../css/navbar.css"
const NavBar = () =>{
    return (
                <nav className="nav_bar">
            <ul className="navcert">
            <li className="navlink"><NavLink to="/Gakuru-Alex/projects" >Projects</NavLink></li>
           <li className="navlink"><NavLink to="/Gakuru-Alex/labs">Labs</NavLink></li>
            <li className="navlink"><NavLink to="/Gakuru-Alex/about">About</NavLink></li>

                </ul>
            </nav>
    )
}

export default NavBar;