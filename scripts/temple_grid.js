import { temples } from "./temples_array.js";

const galleryContainer = document.querySelector(".gallery");
const navLinks = document.querySelectorAll(".navbar .linkHidden");

function createNewCard(name, location, date, area, imageUrl) {
    let card = document.createElement("div");
    card.className = "cardIteration";
    let cardName = document.createElement("h4")
    cardName.textContent = name;

    let list = document.createElement("ul")
    list.className = "cardList";

    let cardLocation = document.createElement("li")
    cardLocation.textContent = `Location: ${location}`;
    let cardDate = document.createElement("li")
    cardDate.textContent = `Dedication date: ${date}`;
    let cardArea = document.createElement("li")
    cardArea.textContent = `Area: ${area} sq ft`;
    let image = document.createElement("img")
    image.src = imageUrl;
    image.alt = name;
    image.loading = "lazy";
    image.style.width = '400px';
    image.style.height = '200px';

    list.append(cardLocation, cardDate, cardArea);
    card.append(cardName, image, list);
    return card;
}

function filterTemples(filterType) {
    let filteredTemples = [];
    
    switch(filterType) {
        case 'Old':
            filteredTemples = temples.filter(temple => {
                const year = parseInt(temple.dedicated.split(',')[0]);
                return year < 1900;
            });
            break;
        case 'New':
            filteredTemples = temples.filter(temple => {
                const year = parseInt(temple.dedicated.split(',')[0]);
                return year > 2000;
            });
            break;
        case 'Large':
            filteredTemples = temples.filter(temple => temple.area > 90000);
            break;
        case 'Small':
            filteredTemples = temples.filter(temple => temple.area < 10000);
            break;
        default: // 'Home'
            filteredTemples = temples;
    }
    
    renderTemples(filteredTemples);
}

function renderTemples(templesArray) {
    galleryContainer.innerHTML = ''; // Clear current content
    
    if (templesArray.length === 0) {
        galleryContainer.innerHTML = '<p class="no-results">No temples match the current filter.</p>';
        return;
    }
    
    templesArray.forEach(element => {
        let newCard = createNewCard(
            element.templeName, 
            element.location, 
            element.dedicated, 
            element.area, 
            element.imageUrl
        );
        galleryContainer.append(newCard);
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const filterType = e.target.textContent;
        filterTemples(filterType);
        
        navLinks.forEach(lnk => lnk.classList.remove('active'));
        e.target.classList.add('active');
    });
});

filterTemples('Home');