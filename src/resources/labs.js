import AzureFunc1 from "../assets/azure_functions.png";
import AzureFunc2 from "../assets/azure_functions_b.png";
import crAPI1 from "../assets/crAPI.png";
import crAPI2 from "../assets/crAPI_b.png";
import OWASP1 from "../assets/owasp_10_c.png";
import OWASP2 from "../assets/owasp_10_d.png";
import TryHackMe from "../assets/tryhackme.png";


const labs = [
{
    "id": 0,
    "name": "Azure Functions",
    "skills": ["Serverless architecture", "Event driven programming", "API development", "Azure services integration", "Automation"],
    "details": "Azure Functions is a serverless computing service provided by Microsoft Azure that lets you run small pieces of code—called 'functions'—without having to manage infrastructure",
    "verify_url": "",
    "image_urls": [AzureFunc1, AzureFunc2]
},
{
    "id": 1,
    "name": "OWASP Top 10",
    "skills": ["Web Application Security Awereness", "Authentication & Authorization", "Velnerability Scanning and Penetration Testing", "Web Application Testing"],
    "details":"OWASP Top 10 (2021), highlights the most critical security risks to web applications, based on real-world data and expert consensus:",
    "verify_url": "",
    "image_urls": [OWASP1, OWASP2]

},
{
    "id": 2,
    "name": "crAPI",
    "skills": ["API Security Testing", "OWASP API Top 10", "Secure API Design", "Vulnerability Identification", "Exploitation Techniques"],
    "details": "Completely Ridiculous API, is a deliberately vulnerable API application created by OWASP to help developers and security professionals learn and practice API security by exploiting real-world vulnerabilities.",
    "verify_url": "",
    "image_urls": [crAPI1, crAPI2]
},
]

export default labs; 