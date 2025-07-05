import "../css/profile.css"
import { NavLink } from "react-router-dom"
import ProfilePic from "../assets/profile-pic.png"
import LinkedinLogo from "../assets/linkedin_logo_icon.svg"
import GithubLogo from "../assets/github_icon.svg"
import TwitterLogo from "../assets/twitter_icon.svg"
const Profile = () => {
    return (
        <>
        <div className="profile">
            <div className="profile-top">
            <nav className="nav-bar">
                <ul>
            <li className="nav-link"><NavLink to="/" >AlexGakuru</NavLink></li>
           <li className="nav-link"><NavLink to="/certifications">Certifications</NavLink></li>
                </ul>
            </nav>
            <div className="profile-pic">
            <img src={ProfilePic} alt="Avatar" />
            </div>
            
                <h2 className="tag-line">Alex Gakuru</h2>
                <h3 className="tag-line">Software Security Specialist</h3>
            
            </div>
            <div className="contact">
                <h3 className="contact-heading">Connect with me</h3>
                <a href="https://linkedin.com/in/alexgakuru" className="icon-link" target="_blank"><span>Linked</span><img src={LinkedinLogo} alt="linkedin link" /></a>
                <a href="https://github.com/GakuruAlex" className="icon-link" target="_blabk"><span>GitHub</span><img src={GithubLogo} alt="GitHub link" /></a>
                <a href="https://X.com/GakuruAlex" className="icon-link" target="_blank"><span>Twitter</span><img src={TwitterLogo} alt="X link" /></a>
            </div>

        </div>
        </>
    )
}

export default Profile