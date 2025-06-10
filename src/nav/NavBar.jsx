import NavComp from "./NavComp.jsx"
import home_icon from '../icons/home.svg'
import certificate_icon from '../icons/certificate.svg'
import contact_icon from '../icons/contact.svg'
import labs_icon from '../icons/labs.svg'
import projects_icon from '../icons/projects.svg'
import './NavBar.css'
const NavBar = ({navigate_to, current_page})=> {
    const left = "left_nav";
    const right = "right_nav"
    return(
        <div className="nav_bar">
            <NavComp 
            classname = {left}
            icon = {home_icon}
            alt_name = "home"
            name = "Home"
            page_key = "Home"
            is_Active ={current_page === 'Home'}
            navigate_to = {navigate_to}
            />

            <NavComp 
            classname = {left}
            icon = {projects_icon}
            alt_name = "Projects"
            name = "Projects"
            page_key = "Projects"
            is_Active ={current_page === 'Projects'}
            navigate_to = {navigate_to}
            />
            <NavComp 
            classname = {left}
            icon = {certificate_icon}
            alt_name = "Certifications"
            name = "Certifications"
            link_rel = "Certifications"
            page_key = "Certifications"
            is_Active ={current_page === 'Certifications'}
            navigate_to = {navigate_to}
            />
            <NavComp 
            classname = {right}
            icon = {labs_icon}
            alt_name = "Labs"
            name = "Labs"
            page_key = "Labs"
            is_Active ={current_page === 'Labs'}
            navigate_to = {navigate_to}
            />
            <NavComp 
            classname = {right}
            icon = {contact_icon}
            alt_name = "Contact"
            name = "Contact"
            page_key = "Contact"
            is_Active ={current_page === 'Contact'}
            navigate_to = {navigate_to}
            />
        </div>
    )
}

export default NavBar