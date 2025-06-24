import "../css/button.css"
const Button = ({index, handleClick, button_icon, button_name, setCurrentCertification, setCurrentIndex}) => {

return (
  <a
  href="#"
  className="nav-icon"
  onClick={(e) => {
    e.preventDefault();
    handleClick(index, button_name,  setCurrentCertification, setCurrentIndex);
  }}
>
  <img src={button_icon} alt={button_name} />
</a>)

};



export default Button;