import chefImage from "./assets/chef.jpg";
export function homeButton(){
    const homeButton=document.getElementById('home');
    homeButton.addEventListener("click",() =>{
        const contentDiv=document.getElementById('content');
        contentDiv.innerHTML='';

         const heroSection = document.createElement('section');
         heroSection.classList.add('hero-section');
         heroSection.style.backgroundImage = `url("${chefImage}")`;
         heroSection.style.backgroundSize = 'cover';
         heroSection.style.backgroundPosition = 'center';


          const heroContent = document.createElement('div');
          heroContent.classList.add('hero-content');


          const mainHeading = document.createElement('h1');
          mainHeading.textContent = 'Welcome to The Saffron & Sage';
          heroContent.appendChild(mainHeading);


           const sloganParagraph = document.createElement('p');
           sloganParagraph.textContent = 'Where Culinary Art Meets Unforgettable Experiences.';
           heroContent.appendChild(sloganParagraph);

            const ctaButton = document.createElement('button');
            ctaButton.textContent = 'Explore Our Menu';
            ctaButton.classList.add('cta-button');
            ctaButton.addEventListener('click', () => {
        alert('Navigating to Menu!'); 
    });
    heroContent.appendChild(ctaButton);
    heroSection.appendChild(heroContent);


    const aboutSnippetSection = document.createElement('section');
    aboutSnippetSection.classList.add('about-snippet-section');

    const aboutHeading = document.createElement('h2');
    aboutHeading.textContent = 'Our Passion, Your Plate';
    aboutSnippetSection.appendChild(aboutHeading);

    const aboutText = document.createElement('p');
    aboutText.innerHTML = `At The Saffron & Sage, we believe in the magic of flavors.
        Our chef-driven menu blends time-honored Indian traditions with innovative  Modern European techniques,
        resulting in dishes that are both comforting and exciting. We source our ingredients locally
        whenever possible, ensuring freshness and supporting our community.`;
    aboutSnippetSection.appendChild(aboutText);

    const learnMoreButton = document.createElement('button');
    learnMoreButton.textContent = 'Learn More About Us';
    learnMoreButton.classList.add('secondary-button'); 
    learnMoreButton.addEventListener('click', () => {
        alert('Navigating to About Page!'); 
    });
    aboutSnippetSection.appendChild(learnMoreButton);

    
    const highlightsSection = document.createElement('section');
    highlightsSection.classList.add('highlights-section');

    const highlightsHeading = document.createElement('h2');
    highlightsHeading.textContent = 'Why Dine With Us?';
    highlightsSection.appendChild(highlightsHeading);

    const highlightList = document.createElement('ul');
    highlightList.innerHTML = `
        <li><span>✨</span> Fresh, Locally Sourced Ingredients</li>
        <li><span>👨‍🍳</span> Award-Winning Culinary Team</li>
        <li><span>🥂</span> Exquisite Wine & Cocktail Selection</li>
        <li><span>🌸</span> Charming & Cozy Ambiance</li>
        <li><span>🍽️</span> Private Dining & Events</li>
    `;
    highlightsSection.appendChild(highlightList);



    const infoSection = document.createElement('section');
    infoSection.classList.add('info-section');

    const hoursLocationWrapper = document.createElement('div');
    hoursLocationWrapper.classList.add('hours-location-wrapper');

    const hoursDiv = document.createElement('div');
    hoursDiv.classList.add('info-block');
    const hoursHeading = document.createElement('h3');
    hoursHeading.textContent = 'Our Hours';
    const hoursList = document.createElement('ul');
    hoursList.innerHTML = `
        <li>Monday - Friday: 11:00 AM - 10:00 PM</li>
        <li>Saturday: 10:00 AM - 11:00 PM</li>
        <li>Sunday: 10:00 AM - 9:00 PM</li>
    `;
    hoursDiv.appendChild(hoursHeading);
    hoursDiv.appendChild(hoursList);
    hoursLocationWrapper.appendChild(hoursDiv);

    const locationDiv = document.createElement('div');
    locationDiv.classList.add('info-block');
    const locationHeading = document.createElement('h3');
    locationHeading.textContent = 'Find Us';
    const addressP = document.createElement('p');
    addressP.innerHTML = '123 Gourmet Lane<br>Foodie City, FC 54321';
    const mapLink = document.createElement('a');
    mapLink.href = 'https://maps.google.com/?q=123+Gourmet+Lane,+Foodie+City'; // Replace with actual map link
    mapLink.textContent = 'Get Directions';
    mapLink.target = '_blank'; 
    locationDiv.appendChild(locationHeading);
    locationDiv.appendChild(addressP);
    locationDiv.appendChild(mapLink);
    hoursLocationWrapper.appendChild(locationDiv);

    infoSection.appendChild(hoursLocationWrapper);



    const testimonialSection = document.createElement('section');
    testimonialSection.classList.add('testimonial-section');
    const quote = document.createElement('blockquote');
    quote.textContent = '"Absolutely divine! The Saffron and Pistachio Kulfi was a symphony of flavors. A must-visit!"';
    const author = document.createElement('p');
    author.textContent = '- A Happy Diner';
    author.classList.add('author');
    testimonialSection.appendChild(quote);
    testimonialSection.appendChild(author);
    
           
           heroSection.appendChild(heroContent);
           contentDiv.appendChild(heroSection);
           contentDiv.appendChild(aboutSnippetSection);
           contentDiv.appendChild(highlightsSection);
           contentDiv.appendChild(infoSection);
           contentDiv.appendChild(testimonialSection);
           

           return contentDiv;


        
})
};