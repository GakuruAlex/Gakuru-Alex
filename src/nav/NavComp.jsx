import './NavComp.css'
const NavComp =(props) =>{
    return (
        <div className={props.classname}>
        <li>
            <a href={props.link_rel}>  <img src={props.icon} alt={props.alt_name} />{props.name}</a>
        </li>
        </div>
    )
}

export default NavComp