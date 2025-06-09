import NavComp from "./NavComp.jsx"
import home_icon from '../icons/home.svg'
import certificate_icon from '../icons/certificate.svg'
import contact_icon from '../icons/contact.svg'
import labs_icon from '../icons/labs.svg'
import projects_icon from '../icons/projects.svg'
import './NavBar.css'
const NavBar = ()=> {
    return(
        <div className="nav_bar">
            <NavComp 
            classname = "right_nav"
            icon = {home_icon}
            alt_name = "home"
            name = "Home"
            link_rel = "#"
            />

            <NavComp 
            classname = "right_nav"
            icon = {projects_icon}
            alt_name = "Projects"
            name = "Projects"
            link_rel = "#"
            />
            <NavComp 
            classname = "right_nav"
            icon = {certificate_icon}
            alt_name = "Certifications"
            name = "Certifications"
            link_rel = "#"
            />
        </div>
    )
}

export default NavBar