export function aboutButton(){
    const aboutButton=document.getElementById('about');
    aboutButton.addEventListener("click",() =>{
        const contentDiv=document.getElementById('content');
        contentDiv.innerHTML='';


        const homeButtonContent=document.createElement('div');
        const heading=document.createElement('h2');
        heading.textContent='Welcome To Our About';
        const Explanation=document.createElement('p');
        Explanation.textContent='Haan Working about';
        homeButtonContent.appendChild(heading);
        homeButtonContent.appendChild(Explanation);
        
        contentDiv.appendChild(homeButtonContent);
})
};