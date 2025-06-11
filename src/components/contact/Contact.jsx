import './Contact.css'
import AlexImage from './alex gakuru.png'
import LoadFontAwesome from './Fonts'
const Contact = ()=> {
   
    return (
        <>
        <h2>Contact</h2>
    <div className="card">
  <img src={AlexImage} alt="Alex" />
  <h1>Alex Gakuru</h1>
  <p className="title">Computer Scientist</p>
  
  
  <a href="mailto:gakurualexgicimo@gmail.com" target='_blank'><i className="fa fa-envelope"></i></a>
  <a href="https://www.linkedin.com/in/alexgakuru" target='_blank'><i className="fa fa-linkedin"></i></a>
  <a href="https://github.com/GakuruAlex" target='_blank'><i className="fa fa-github"></i></a>
  
</div>
</>
    )
}

export default Contact