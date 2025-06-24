import csharp from "../assets/Foundational_CSharp.png" 
import sc_900 from "../assets/sc-900.png"
import cybersecurity_essentials from "../assets/essentials_in_cybersecurity.png"
import software_development_essentials from "../assets/software_development_essentials.png"
import web_technologies_cert from "../assets/web_technologies_cert.png"
const certificates = [
  {     p_key : 0,
        course: "Foundational C# with Microsoft",
        school: "Microsoft and freeCodeCamp",
        skills: [
            "Object Oriented Programming", "C#", "Debugging C# apps", "Using control structures"
        ],
        credential_link: "https://freecodecamp.org/certification/alexgakuru/foundational-c-sharp-with-microsoft",
        image_url: csharp
        },

   {
        p_key: 1,
        credential_link: "https://www.linkedin.com/learning/certificates/bb11927dbaeade946311b1a057747d864d1abadb0811b8d27227cef5552b0769?trk=share_certificate",
        course: "Career Essentials in Cybersecurity",
        school: "Microsoft and Linkedin",
        image_url: cybersecurity_essentials,
        skills: [
            "Understanding the Cybersecurity Threat Landscape",
            "Cybersecurity Terminology",
            "Core Cybersecurity Concepts",
            "Microsoft Security Copilot"
        ]
    },
     { p_key: 2,
        course: "Career Essentials in Software Development",
        school: "Microsoft and Linkedin",
        credential_link: "https://www.linkedin.com/learning/certificates/0a77de711e14c431fa8add9e3ca384b5a0252aa34e76beb3fa5e261692f0890b?trk=share_certificate",
        image_url: software_development_essentials,
        skills: [
            "Programming", "Software Development"
        ]

    },

   {    p_key: 3,
        course: "Microsoft Security, Compliance and Identity Fundamentals",
        school: "Microsoft",
        credential_link: "https://learn.microsoft.com/api/credentials/share/en-us/AlexGakuru-5788/84B4BFF580DFEE11?sharingId=BA9117F72F5AB5B5",
        image_url: sc_900,
        skills: [
             "concepts of security, compliance, and identity",
              "capabilities of Microsoft Entra",
              "capabilities of Microsoft security solutions",
              "capabilities of Microsoft compliance solutions"
            ]
        },
     { p_key: 4,
        course: "Software Engineering",
        school: "Moringa School",
        credential_link: "#",
        image_url: web_technologies_cert,
        skills: [
            "React.js", "RESTful API development", "Active Record", "MVC Architecture", "JSON data handling"
        ]
    }
 


]

export default certificates;