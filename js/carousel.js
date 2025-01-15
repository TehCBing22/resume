const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nav = document.querySelector('.navigation-list');
const navLinks = Array.from(nav.children);

const slideSize =slides[0].getBoundingClientRect();
const slideWidth = slideSize.width;

window.addEventListener('load', updateCarouselHeight);

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth*index +'px';
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide,targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left +')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
    console.log(track.style.left);
};

nav.addEventListener('click', (e) => {
    const targetEl = e.target.closest('li');
    if(!targetEl) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentEl = nav.querySelector('.current-slide');
    const targetIndex = navLinks.findIndex(el => el == targetEl);
    const targetSlide = slides[targetIndex];
    moveToSlide(track,currentSlide,targetSlide);
    // update carousel height due to slide change
    updateCarouselHeight();
});

const acd = document.querySelectorAll('.roles');
// update carousel height due to accordian
acd.forEach(label => {
    label.addEventListener('click', (event) => {
        updateCarouselHeight();
    });
});


function updateCarouselHeight() {
    const trackContainer = document.querySelector('.carousel__track-container');
    const currentSlide = document.querySelector('.carousel__slide.current-slide');

    if (currentSlide) {
        // Get the height of the current slide
        const slideHeight = currentSlide.getBoundingClientRect().height;
        // Set the track container's height to match
        trackContainer.style.height = `${slideHeight}px`;
    }
}

// // Run on page load


