
let treeB = document.getElementById("tree-back");
let treeF = document.getElementById("tree-front");
let starsB = document.getElementById("starsBottom");
let header = document.querySelector("header");
let title = document.getElementById("title");
let moon = document.getElementById("moon");
let stars = document.getElementById("stars");
let leaves = document.querySelectorAll(".leaves");

window.addEventListener("scroll", function () {

  let value = window.scrollY;
  if (leaves !== null) {
    leaves.forEach(leaf => {
      leaf.style.left = -0.15 * value + 'px';
      leaf.style.top = 0.25 * value + 'px';
    });
  }
  if (moon !== null) {
    moon.style.top = value * 0.5 + "px";
    moon.style.opacity = 1 - value * 0.001;
  }
  if (stars !== null) {
    stars.style.left = 0.25 * value + "px";
    stars.style.opacity = 1 - value * 0.005;
  }
  title.style.marginLeft = value * 4 + "px";
  title.style.opacity = 1 - value * 0.003;
  treeB.style.top = value * 0.25 + "px";
  treeB.style.opacity = 1 - value * 0.0015;
  header.style.opacity = 1 - value * 0.025;
});

// bottom
//slider
let slider = document.querySelector(".slider");
let li = document.querySelectorAll(".navigation ul li");
let index_value = 0;
let left_position = 0;

// for responsive slider size
let resize_ob = new ResizeObserver(function(item) {
	slider.style.width = li[0].clientWidth + "px";
  get_left_position();
  slider.style.left = left_position + "px";
  left_position = 0;
});

li.forEach((item, index) => {
  item.onclick = function sliderReposition() {
    
    slider.style.width = item.clientWidth + "px";
    index_value = index;
    get_left_position();
    slider.style.left = left_position + "px";
    left_position = 0;
  }
  resize_ob.observe(item);
})

function get_left_position() {
  for (let i = 0; i < index_value; i++) {
    const element = li[i];
    left_position += element.clientWidth;
  }
}

// carousel                
let track = document.querySelector('.carousel__track');
let slides = Array.from(track.children);
const nav = document.querySelector('.navigation-list');
const navLinks = Array.from(nav.children);
// for dynamic window size
let slideSize = slides[0].getBoundingClientRect();
let slideWidth = slideSize.width;
let currentSlide = slides[0];
let targetSlide = slides[0];

// for responsive slides
window.onresize = function () {
  slideSize = slides[0].getBoundingClientRect();
  slideWidth = slideSize.width;
  slides.forEach(setSlidePosition);
  moveToSlide(track, currentSlide, targetSlide);
  updateCarouselHeight()
};


window.addEventListener('load', updateCarouselHeight);

const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
};

nav.addEventListener('click', (e) => {
  const targetEl = e.target.closest('li');
  if (!targetEl) return;

  currentSlide = track.querySelector('.current-slide');
  const targetIndex = navLinks.findIndex(el => el == targetEl);
  targetSlide = slides[targetIndex];
  moveToSlide(track, currentSlide, targetSlide);
  // update carousel height due to slide change
  updateCarouselHeight();
});

const acd = document.querySelectorAll('.roles');
// update carousel height due to accordian
acd.forEach(label => {
  label.addEventListener('click', () => {
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

// for animation
window.addEventListener('scroll', reveal);

function reveal() {
  let reveals = document.querySelectorAll('.reveal');

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    let revealPoint = 0.1 * windowHeight;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('revealing');
    }
    else {
      reveals[i].classList.remove('revealing');
    }

  }

}
// // Run on page load


