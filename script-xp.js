
let treeB = document.getElementById("tree-back");
let treeF = document.getElementById("tree-front");
let starsB = document.getElementById("starsBottom");
let header =document.querySelector("header");
let title = document.getElementById("title");
let moon = document.getElementById("moon");
let stars = document.getElementById("stars");
let leaves = document.querySelectorAll(".leaves");

window.addEventListener("scroll", function() {
  
  let value = window.scrollY;
  if (leaves !== null){
    leaves.forEach(leaf => {
      leaf.style.left = -0.15*value +'px';
      leaf.style.top = 0.25*value+'px';
    });
  }
  if (moon !== null){
    moon.style.top = value * 0.5 + "px";
    moon.style.opacity = 1 - value * 0.001;
  }
  if (stars !== null){
    stars.style.left = 0.25* value + "px";
    stars.style.opacity = 1 - value * 0.005;
  }
  title.style.marginLeft = value * 4 + "px";
  title.style.opacity = 1 - value * 0.003;
  treeB.style.top = value * 0.25 + "px";
  treeB.style.opacity = 1 - value * 0.0015;
  header.style.opacity = 1 - value * 0.025;
});

//slider
// bottom

window.addEventListener('scroll', reveal);

function reveal(){
  let reveals = document.querySelectorAll('.reveal');

  for (let i=0; i<reveals.length; i++){
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    let revealPoint = 0.1*windowHeight;

    if (revealTop < windowHeight - revealPoint){
      reveals[i].classList.add('revealing');
    }
    else{
      reveals[i].classList.remove('revealing');
    }

  }

}
// // Run on page load


