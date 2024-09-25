let slideIndex = 0;
showSlides(slideIndex);

// Fonction pour avancer ou reculer les diapositives
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Fonction pour afficher la diapositive courante
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n >= slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length - 1 }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

// Fonction pour faire défiler automatiquement
setInterval(function() {
    slideIndex++;
    showSlides(slideIndex);
}, 5000); // Changement automatique toutes les 5 secondes
