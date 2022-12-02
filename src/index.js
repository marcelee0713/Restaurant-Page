import "./styles/style.scss"
import { openMenu, createMenuItems } from './scripts/menu'
import { openStore, storeBackground } from './scripts/store'
import { openAbout, aboutHeader } from "./scripts/about"

const menuNav = document.getElementById('menu-nav');
const storeNav = document.getElementById('store-nav');
const aboutNav = document.getElementById('about-nav');
const content = document.getElementById('content');

//default module
content.appendChild(openMenu());
content.appendChild(createMenuItems());

menuNav.addEventListener('click', menu);
storeNav.addEventListener('click', store);
aboutNav.addEventListener('click', about)

function menu() {
    clearOutContainer(content);
    content.appendChild(openMenu());
    content.appendChild(createMenuItems());
}

function store() {
    clearOutContainer(content);
    content.appendChild(openStore());
    content.appendChild(storeBackground());
}

function about(){
    clearOutContainer(content);
    content.appendChild(aboutHeader());
    content.appendChild(openAbout());
}

function clearOutContainer(element){
    while(element.firstChild){
        element.removeChild(element.firstChild)
    }
}