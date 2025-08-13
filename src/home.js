export function homeButton(){
    const homeButton=document.getElementById('home');
    homeButton.addEventListener("click",() =>{
        const contentDiv=document.getElementById('content');
        contentDiv.innerHTML='';


        const homeButtonContent=document.createElement('div');
        const heading=document.createElement('h2');
        heading.textContent='Welcome To Our Restaurant';
        const Explanation=document.createElement('p');
        Explanation.textContent='Haan Working';
        homeButtonContent.appendChild(heading);
        homeButtonContent.appendChild(Explanation);
        
        contentDiv.appendChild(homeButtonContent);
})
};