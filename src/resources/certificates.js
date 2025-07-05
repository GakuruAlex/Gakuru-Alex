import csharp from "../assets/Foundational_CSharp.png" 
import sc_900 from "../assets/sc-900.png"
import cybersecurity_essentials from "../assets/essentials_in_cybersecurity.png"
import software_development_essentials from "../assets/software_development_essentials.png"
import web_technologies_cert from "../assets/web_technologies_cert.png"
const certificates = [
  {     id: 0,
        name: "Foundational C# with Microsoft",
        details: "Microsoft and freeCodeCamp",
        skills: [
            "Object Oriented Programming", "C#", "Debugging C# apps", "Using control structures"
        ],
        verify_url: "https://freecodecamp.org/certification/alexgakuru/foundational-c-sharp-with-microsoft",
        image_urls: [csharp]
        },

   {
        id: 1,
        verify_url: "https://www.linkedin.com/learning/certificates/bb11927dbaeade946311b1a057747d864d1abadb0811b8d27227cef5552b0769?trk=share_certificate",
        name: "Career Essentials in Cybersecurity",
        details: "Microsoft and Linkedin",
        image_urls: [cybersecurity_essentials],
        skills: [
            "Understanding the Cybersecurity Threat Landscape",
            "Cybersecurity Terminology",
            "Core Cybersecurity Concepts",
            "Microsoft Security Copilot"
        ]
    },
     { id: 2,
        name: "Career Essentials in Software Development",
        details: "Microsoft and Linkedin",
        verify_url: "https://www.linkedin.com/learning/certificates/0a77de711e14c431fa8add9e3ca384b5a0252aa34e76beb3fa5e261692f0890b?trk=share_certificate",
        image_urls: [software_development_essentials],
        skills: [
            "Programming", "Software Development"
        ]

    },

   {    id: 3,
        name: "Microsoft Security, Compliance and Identity Fundamentals",
        details: "Microsoft",
        verify_url: "https://learn.microsoft.com/api/credentials/share/en-us/AlexGakuru-5788/84B4BFF580DFEE11?sharingId=BA9117F72F5AB5B5",
        image_urls: [sc_900],
        skills: [
             "concepts of security, compliance, and identity",
              "capabilities of Microsoft Entra",
              "capabilities of Microsoft security solutions",
              "capabilities of Microsoft compliance solutions"
            ]
        },
     { id: 4,
        name: "Software Engineering",
        details: "Moringa School",
        verify_url: "#",
        image_urls: [web_technologies_cert],
        skills: [
            "React.js", "RESTful API development", "Active Record", "MVC Architecture", "JSON data handling"
        ]
    }
 


]

export default certificates;