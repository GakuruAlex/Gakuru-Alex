import './LeftNavComp.css'
import './RightNavComp.css'
const NavComp =(props) =>{
     const handleClick = (e) => {
        e.preventDefault(); // Prevent the browser from reloading the page
        props.navigate_to(props.page_key);
    };
    return (
        <div className={props.classname}>
        <li>
            <a href={props.page_key} onClick={handleClick}>  <img src={props.icon} alt={props.alt_name} />{props.name}</a>
        </li>
        </div>
    )
}

export default NavComp