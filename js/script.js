const reponsivenav = document.querySelector(".reponsivenav");
const nav = document.querySelector(".nav");
reponsivenav.addEventListener("click", () => nav.classList.toggle("active"));

document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.querySelector('.cta-button');

    if (startButton) {
        startButton.addEventListener('mouseover', function() {
            startButton.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
        });

        startButton.addEventListener('mouseout', function() {
            startButton.style.boxShadow = 'none';
        });
    }
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { 
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
});
