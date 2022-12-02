import coffeeImg from '../assets/Coffee.png'
import frappeImg from '../assets/Frappe.png'
import frappucinoImg from '../assets/Frappucino.png'
import kapengBarakoImg from '../assets/Kapeng-Barako.png'
export function openMenu(){
    const welcomeContainer = document.createElement('div');
    const welcomeHeader = document.createElement('h1');
    const welcomeSubtext = document.createElement('div');
    
    welcomeHeader.textContent = "Welcome"
    welcomeSubtext.textContent = "Take a look at our delicious menu!"
    
    welcomeContainer.classList.add('menu-welcome-container');
    welcomeSubtext.classList.add('menu-welcome-subtext');

    welcomeContainer.appendChild(welcomeHeader);
    welcomeContainer.appendChild(welcomeSubtext);
    
    return welcomeContainer;
}

export function createMenuItems(){
    const itemContainer = document.createElement('div');

    const item1 = document.createElement('div');
    const item2 = document.createElement('div');
    const item3 = document.createElement('div');
    const item4 = document.createElement('div');

    const item1Name = document.createElement('div');
    const item2Name = document.createElement('div');
    const item3Name = document.createElement('div');
    const item4Name = document.createElement('div');

    const item1Img = document.createElement('img');
    const item2Img = document.createElement('img');
    const item3Img = document.createElement('img');
    const item4Img = document.createElement('img');

    const item1Price = document.createElement('div');
    const item2Price = document.createElement('div');
    const item3Price = document.createElement('div');
    const item4Price = document.createElement('div');

    item1.appendChild(item1Price);
    item1.appendChild(item1Img);
    item1.appendChild(item1Name);
    item1Name.textContent = "Coffee";
    item1Price.textContent = "PHP 50";
    item1Img.src = coffeeImg;

    item2.appendChild(item2Price);
    item2.appendChild(item2Img);
    item2.appendChild(item2Name);
    item2Name.textContent = "Kapeng Barako";
    item2Price.textContent = "PHP 40";
    item2Img.src = kapengBarakoImg;

    item3.appendChild(item3Price);
    item3.appendChild(item3Img);
    item3.appendChild(item3Name);
    item3Name.textContent = "Frappe";
    item3Price.textContent = "PHP 150";
    item3Img.src = frappeImg;

    item4.appendChild(item4Price);
    item4.appendChild(item4Img);
    item4.appendChild(item4Name);
    item4Name.textContent = "Frappucino";
    item4Price.textContent = "PHP 200";
    item4Img.src = frappucinoImg;

    itemContainer.classList.add('menu-item-container');
    item1.classList.add('menu-items');
    item2.classList.add('menu-items');
    item3.classList.add('menu-items');
    item4.classList.add('menu-items');
    item1Price.classList.add('item-price');
    item2Price.classList.add('item-price');
    item3Price.classList.add('item-price');
    item4Price.classList.add('item-price');
    item1Img.classList.add('item-img');
    item2Img.classList.add('item-img');
    item3Img.classList.add('item-img');
    item4Img.classList.add('item-img');
    item1Name.classList.add('item-name');
    item2Name.classList.add('item-name');
    item3Name.classList.add('item-name');
    item4Name.classList.add('item-name');
    
    itemContainer.appendChild(item1);
    itemContainer.appendChild(item2);
    itemContainer.appendChild(item3);
    itemContainer.appendChild(item4);

    return itemContainer;
}

