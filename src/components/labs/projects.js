import OwaspImage from './owasp_top.png'
import AuthImage from './user_authentication.png'
import AzureFunctions from './azure_functions.png'
const projects = [
  {
    name: "Implement Azure Functions",
    description: "In this lab we learnt how to create a simple Azure function that echoes text that is entered and sent to the function by using HTTP POST commands, execute an Azure function by setting it to execute on a fixed schedule and connect an Azure function to other Azure resources",
    image_link: AzureFunctions,
  },
  {
    name: "OWASP Security Lab",
    description: "An in-depth exploration of OWASP vulnerabilities and security practices.",
    image_link: OwaspImage,
  },
  {
    name: "Implement User Authentication and Authorization",
    description: "In this lab we learnt how to register a single-tenant Azure AD application and how to create an Azure AD user account. We also went through how you can implement a single-tenant web app and test it in a single-tenant Microsoft Entra environment",
    image_link: AuthImage,
  },
];

export default projects;