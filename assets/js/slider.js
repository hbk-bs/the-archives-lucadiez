const slides = document.querySelectorAll(".slide");
const dotsContainer = document.querySelector(".dots-container");
let currentIndex = 0;

// Dots erstellen
slides.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active"); // Der erste Dot ist aktiv
    dot.addEventListener("click", () => showSlide(i)); // Klick-Event für manuelles Wechseln
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function showSlide(index) {
    // Entferne die "active"-Klasse vom aktuellen Bild und Punkt
    slides[currentIndex].classList.remove("active");
    dots[currentIndex].classList.remove("active");

    // Setze die "active"-Klasse für das neue Bild und den entsprechenden Punkt
    slides[index].classList.add("active");
    dots[index].classList.add("active");

    // Aktualisiere den aktuellen Index
    currentIndex = index;
}

function nextSlide() {
    let newIndex = (currentIndex + 1) % slides.length; // Erhöhe den Index und sorge für Endlosschleife
    showSlide(newIndex);
}

// Automatischer Wechsel alle 4 Sekunden
setInterval(nextSlide, 5000);
