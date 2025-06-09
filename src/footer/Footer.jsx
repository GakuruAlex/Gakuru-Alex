import Socials from './Socials.jsx'
import twitter_icon from '../icons/twitter.svg'
import github_icon from '../icons/github.svg'
import linkedin_icon from '../icons/linkedin.svg'
import './Footer.css'

const Footer = () =>{
    return (
        <ul className='footer'>
           <li > <Socials social_link = "https://linkedin.com/in/alexgakuru"
                social_icon = {linkedin_icon}
                social_name = "LinkedIn"/>
           </li>
           <li >  <Socials social_link = "https://github.com/GakuruAlex"
                social_icon = {github_icon}
                social_name = "Github"/> 
           </li>
           
        </ul>
    )
}

export default Footer