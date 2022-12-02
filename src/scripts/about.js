export function openAbout() {
    const aboutUsContainer = document.createElement('div');
    const aboutUsSubText = document.createElement('p');
    const aboutUsOtherSubText = document.createElement('p');

    aboutUsContainer.classList.add('aboutus-container');

    aboutUsContainer.appendChild(aboutUsSubText);
    aboutUsContainer.appendChild(aboutUsOtherSubText);

    aboutUsSubText.textContent = `First off, our brand name 
    is inspired by the Pangasinense word is a dialect from my 
    province. Our coffee beans are Arabica and we get it from Benguet, 
    Baguio and Batangas. We sell roughly 200-300 cups per day, it’s already 
    decent for a small Coffee Shop. But, we are still doing our best to make 
    our shop one of the most biggest coffee shop.`

    aboutUsOtherSubText.textContent = `Lastly, we made a questionnaire that 
    it’ll be given whenever a customer comes to our shop. So that it will 
    help them know what type of coffee is the best for them and what are the 
    suggestions and criticism that we will get. If you have any questions, 
    ask anything. It will absolutely help us and appreciated.`

    return aboutUsContainer;
}

export function aboutHeader() {
    const aboutUsHeader = document.createElement('h1');
    aboutUsHeader.classList.add("about-header-text")
    aboutUsHeader.style.alignSelf = "center";
    aboutUsHeader.textContent = "About us"
    return aboutUsHeader; 
}