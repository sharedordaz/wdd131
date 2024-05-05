// Get the hamburger button and navigation links
const hamburgerButton = document.querySelector('.hamburguer');
const navLinks = document.querySelectorAll('.linkHidden');

// Toggle navigation links when hamburger button is clicked
hamburgerButton.addEventListener('click', () => {
    navLinks.forEach(link => {
        link.classList.toggle('linkShow'); // Toggle the "show" classa
        hamburgerButton.classList.toggle('activeBurger');
    });
});

const myAudio = document.querySelector("audio"); // Replace "myAudio" with your actual audio element ID
myAudio.muted = false;
