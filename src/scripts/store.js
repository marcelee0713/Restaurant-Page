import background from '../assets/store-background.jpg'
export function openStore() {
    const storeContainer = document.createElement('div');

    const visitContainer = document.createElement('div');
    const visitHeaderText = document.createElement('h1');
    const visitInformation = document.createElement('div');
    const visit1 = document.createElement('div');
    const visit1Icon = document.createElement('i');
    const visit1Info = document.createElement('span');
    const visit2 = document.createElement('div');
    const visit2Icon = document.createElement('i');
    const visit2Info = document.createElement('span');
    const visit3 = document.createElement('div');
    const visit3Icon = document.createElement('i');
    const visit3Info = document.createElement('span');

    const addNoteContainer = document.createElement('div');
    const addNoteHeaderText = document.createElement('h1');
    const addNoteInformation = document.createElement('div');
    const notes1 = document.createElement('div');
    const notes2 = document.createElement('div');
    const notes3 = document.createElement('div');

    storeContainer.classList.add('store-container');

    storeContainer.appendChild(visitContainer);
    visitContainer.appendChild(visitHeaderText);
    visitContainer.appendChild(visitInformation);
    visitContainer.classList.add('visit-container');
    visitInformation.classList.add('visit-information');
    visitInformation.appendChild(visit1);
    visitInformation.appendChild(visit2);
    visitInformation.appendChild(visit3);
    visit1.appendChild(visit1Icon)
    visit1.appendChild(visit1Info)
    visit2.appendChild(visit2Icon)
    visit2.appendChild(visit2Info)
    visit3.appendChild(visit3Icon)
    visit3.appendChild(visit3Info)
    visitHeaderText.textContent = "Visit our store!";
    visit1Icon.classList.add('fa-solid');
    visit1Icon.classList.add('fa-location-dot');
    visit1Info.textContent = "Infront of UP, Dagupan City, Pangasinan"
    visit2Icon.classList.add('fa-solid');
    visit2Icon.classList.add('fa-phone');
    visit2Info.textContent = "09235167361"
    visit3Icon.classList.add('fa-solid');
    visit3Icon.classList.add('fa-envelope');
    visit3Info.textContent = "mankapetayo@email.com"

    storeContainer.appendChild(addNoteContainer);
    addNoteContainer.appendChild(addNoteHeaderText);
    addNoteContainer.appendChild(addNoteInformation);
    addNoteContainer.classList.add('addnote-container');
    addNoteInformation.classList.add('addnote-information');
    addNoteInformation.appendChild(notes1);
    addNoteInformation.appendChild(notes2);
    addNoteInformation.appendChild(notes3);
    addNoteHeaderText.textContent = "Additional Notes!"
    notes1.textContent = "We are open until 6 a.m. to 10 p.m."
    notes2.textContent = "We are pet-friendly and eco-friendly."
    notes3.textContent = "Free wi-fi and board games to play with!"

    return storeContainer;
}

export function storeBackground() {
    const storeBackground = document.createElement('img');
    storeBackground.src = background;
    return storeBackground;
}