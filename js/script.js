const reponsivenav = document.querySelector(".reponsivenav");
const nav = document.querySelector(".nav");

// Alterna a classe 'active' na navegação quando o botão de menu é clicado
reponsivenav.addEventListener("click", () => nav.classList.toggle("active"));

document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.querySelector('.cta-button');

    // Adiciona efeitos de sombra ao passar o mouse sobre o botão
    if (startButton) {
        startButton.addEventListener('mouseover', function() {
            startButton.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
        });

        startButton.addEventListener('mouseout', function() {
            startButton.style.boxShadow = 'none';
        });
    }
});
