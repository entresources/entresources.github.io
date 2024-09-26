let slideIndex = 0; // Initialiser l'index de la diapositive
const slides = document.getElementsByClassName("mySlides"); // Déclare slides globalement

showSlides(); // Appeler la fonction au chargement

function showSlides() {
    // Réinitialiser l'affichage de toutes les diapositives
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("fade"); // Retirer la classe fade
        slides[i].style.display = "none"; // Masquer toutes les diapositives
    }
    
    slideIndex++; // Incrémenter l'index de la diapositive

    // Réinitialiser l'index si nécessaire
    if (slideIndex > slides.length) { 
        slideIndex = 1; 
    } 
    
    // Afficher la diapositive courante avec le fondu
    slides[slideIndex - 1].classList.add("fade");
    slides[slideIndex - 1].style.display = "block"; // Afficher la diapositive actuelle

    setTimeout(showSlides, 5000); // Changer de diapositive toutes les 5 secondes
}

// Fonction pour avancer/reculer dans le diaporama
function plusSlides(n) {
    slideIndex += n; // Modifier l'index
    if (slideIndex > slides.length) { 
        slideIndex = 1; 
    }
    if (slideIndex < 1) { 
        slideIndex = slides.length; 
    }
    
    showSlidesManual(slideIndex); // Afficher la diapositive manuellement
}

function showSlidesManual(index) {
    // Réinitialiser l'affichage de toutes les diapositives
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("fade"); // Retirer la classe fade
        slides[i].style.display = "none"; // Masquer toutes les diapositives
    }
    
    // Afficher la diapositive courante avec le fondu
    slides[index - 1].classList.add("fade");
    slides[index - 1].style.display = "block"; // Afficher la diapositive actuelle
}
