export function contactButton(){
    const contactButton=document.getElementById('contact');
    contactButton.addEventListener("click",() =>{
        const contentDiv=document.getElementById('content');
        contentDiv.innerHTML='';


        const homeButtonContent=document.createElement('div');
        const heading=document.createElement('h2');
        heading.textContent='Welcome To Our Contact';
        const Explanation=document.createElement('p');
        Explanation.textContent='Haan Working Contact';
        homeButtonContent.appendChild(heading);
        homeButtonContent.appendChild(Explanation);
        
        contentDiv.appendChild(homeButtonContent);
})
};