import "./Style.css";
import { homeButton } from "./home";
import { aboutButton } from "./about";
import { contactButton } from "./contact";

document.addEventListener("DOMContentLoaded", () =>{
     const app = document.getElementById("content");

     homeButton();
     aboutButton();
     contactButton();

})

 


