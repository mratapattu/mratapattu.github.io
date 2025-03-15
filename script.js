let currentIndices = {};

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".slider").forEach((slider, index) => {
        currentIndices[index] = 0;
    });
});

function moveSlide(direction, sliderIndex) {
    const sliderContainers = document.querySelectorAll('.slider-container');
    const sliderContainer = sliderContainers[sliderIndex];
    const slides = sliderContainer.querySelectorAll('img');
    const totalSlides = slides.length;

    currentIndices[sliderIndex] += direction;

    if (currentIndices[sliderIndex] < 0) {
        currentIndices[sliderIndex] = totalSlides - 1; // Jump directly to the last image
    } else if (currentIndices[sliderIndex] >= totalSlides) {
        currentIndices[sliderIndex] = 0; // Jump directly to the first image
    }

    const offset = -currentIndices[sliderIndex] * 100;
    sliderContainer.style.transform = `translateX(${offset}%)`;
    sliderContainer.style.transition = 'transform 0.5s ease'; // Smooth slide effect
}
