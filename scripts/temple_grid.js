import { temples } from "./temples_array.js";

let galleryContainer = document.querySelector(".gallery");

function createNewCard(name, location, date, area, imageUrl) {
    let card = document.createElement("div");
    let cardName = document.createElement("h1")
    cardName.textContent = name;

    let list = document.createElement("ul")
    list.className = "cardList";

    let cardLocation = document.createElement("li")
    cardLocation.textContent = `Location: ${location}`;
    let cardDate = document.createElement("li")
    cardDate.textContent = `Dedication date: ${date}`;
    let cardArea = document.createElement("li")
    cardArea.textContent = `Area: ${area}`;
    let image = document.createElement("img")
    image.src = imageUrl;
    image.alt = name;

    list.append(cardLocation, cardDate, cardArea);
    card.append(cardName, image, list);
    return card;
}

//let dummyCard = createNewCard("Temple Name", "Mexico City", "Dummy Date", "area", "images/temples/placeholder.png" );

//galleryContainer.append(dummyCard);

temples.forEach(element => {
    let newCard = createNewCard(element.name, element.location, element.dedicated, element.area, element.imageUrl);
    galleryContainer.append(newCard);
});

