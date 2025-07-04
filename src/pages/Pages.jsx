import Profile from "./Profile";
import NavBar from "../components/NavBar";
const Pages = ({resources, pageName})=>{
return (
    <div className="main-component">
        <div className='profile-${pageName}'>
            <Profile/>
        </div>
        <div className="content-component">
            <NavBar/>
            <div className='${pageName}-container'></div>

        </div>
    </div>
)
}
export default Pages;