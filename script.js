document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-menu a").forEach(link => {
        link.addEventListener("click", (e) => {
            document.querySelectorAll(".nav-menu a").forEach(el => el.classList.remove("active"));
            link.classList.add("active");
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        });
    });

    // Hero Image Slider
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    const slideInterval = 5000; // 5 seconds

    // Initialize first slide
    slides[0].classList.add('active');

    function nextSlide() {
        // Remove active class from current slide
        slides[currentSlide].classList.remove('active');
        // Calculate next slide index
        currentSlide = (currentSlide + 1) % slides.length;
        // Add active class to next slide
        slides[currentSlide].classList.add('active');
    }

    // Start automatic slideshow
    let slideTimer = setInterval(nextSlide, slideInterval);

    // Optional: Pause on hover
    const heroContainer = document.querySelector('.hero-container');
    heroContainer.addEventListener('mouseenter', () => {
        clearInterval(slideTimer);
    });

    heroContainer.addEventListener('mouseleave', () => {
        slideTimer = setInterval(nextSlide, slideInterval);
    });
});