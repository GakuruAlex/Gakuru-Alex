import { NavLink } from "react-router-dom"
import "./NavBar.css"

const NavBar = () =>{
return (
    <>
    <nav className="navbar">
<ul>
    <li><NavLink to="/Gakuru-Alex/">Home</NavLink></li>
    <li><NavLink>Certifications</NavLink></li>
    <li><NavLink>Projects</NavLink></li>
    <li><NavLink>Labs</NavLink></li>
    <li><NavLink>About</NavLink></li>

</ul>
    </nav>

    </>
)
}

export default NavBar