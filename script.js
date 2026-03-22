
// Typing Animation
const typingElement = document.getElementById("typing");
if (typingElement) {
    const text = "Welcome to CodeQuickHub 👋";
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            typingElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, 70);
        }
    }

    typeEffect();
}

// Live Clock
function updateClock() {
    const now = new Date();
    const clock = document.getElementById("clock");
    if (clock) {
        clock.innerText = now.toLocaleTimeString();
    }
}
setInterval(updateClock, 1000);
updateClock();



// --------------------------------------------------- Popup ---------------------------------------------------

const contactBtn = document.getElementById("contactBtn");
const contactPopup = document.getElementById("contactPopup");
const closePopup = document.getElementById("closePopup");

// Open popup
contactBtn.onclick = () => {
    contactPopup.style.display = "flex";
};

// Close popup (X button)
closePopup.onclick = () => {
    contactPopup.style.display = "none";
};

// Close when clicking outside
window.onclick = (e) => {
    if (e.target === contactPopup) {
        contactPopup.style.display = "none";
    }
};

// submission
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thank you! Your message has been sent.");
        contactPopup.style.display = "none";
        contactForm.reset();
    });
}