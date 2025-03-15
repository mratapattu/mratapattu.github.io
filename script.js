let currentIndices = {};

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".slider").forEach((slider, index) => {
        currentIndices[index] = 0;
    });
});

function moveSlide(direction, sliderIndex = 0) { // Default to first slider if not provided
    const sliderContainers = document.querySelectorAll('.slider-container');

    if (!sliderContainers[sliderIndex]) {
        console.warn(`Slider index ${sliderIndex} does not exist.`);
        return;
    }

    const sliderContainer = sliderContainers[sliderIndex];
    const slides = sliderContainer.querySelectorAll('img');
    const totalSlides = slides.length;

    currentIndices[sliderIndex] += direction;

    if (currentIndices[sliderIndex] < 0) {
        currentIndices[sliderIndex] = totalSlides - 1; // Jump to last image
    } else if (currentIndices[sliderIndex] >= totalSlides) {
        currentIndices[sliderIndex] = 0; // Jump to first image
    }

    const offset = -currentIndices[sliderIndex] * 100;
    sliderContainer.style.transform = `translateX(${offset}%)`;
    sliderContainer.style.transition = 'transform 0.5s ease'; // Smooth slide effect
}
