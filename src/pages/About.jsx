import "../css/about.css"
import Profile from "./Profile";
import NavBar from "../components/NavBar";
const About = () => {
    return (
        <div className="about">
        <Profile />
        <div className="details">
        <NavBar />
              <h2>About me</h2>
        <p>
Hi, I’m Alex—a full-stack developer with a focus on React, Django, and secure API design. I’m passionate about building responsive, accessible web applications that blend technical precision with thoughtful design.

I’ve earned certifications in SC-900 and foundational C#, and I’ve tackled real-world challenges like deploying React apps with Vite, integrating Django APIs, and securing endpoints against OWASP vulnerabilities like BOLA.

I believe in learning by doing, and I’m always exploring new tools—from Azure Event Grid to creative UI/UX in Figma. When I’m not coding, I’m probably diving into a TryHackMe lab or refining my portfolio to better tell my story.

Thanks for stopping by—feel free to explore my projects or reach out if you’d like to collaborate!
        </p>
        </div>
      

        </div>
    )
}
export default About;