let currentIndex = 0;

function moveSlide(direction) {
    const sliderContainer = document.querySelector('.slider-container');
    const slides = document.querySelectorAll('.slider-container img');
    const totalSlides = slides.length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1; // Jump directly to the last image
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0; // Jump directly to the first image
    }

    const offset = -currentIndex * 100;
    sliderContainer.style.transform = `translateX(${offset}%)`;
    sliderContainer.style.transition = 'transform 0.5s ease'; // Smooth slide effect
}
