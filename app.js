
const navslide = () => {
 
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navlinks = document.querySelector('.nav-links li');

burger.addEventListener('click', () => {
  burger.classList.toggle('nav-ctive');
});

navlinks.foreach((link,index) => {link.style.animation = "navlinkfade 0.5s ease forwards ${index / 7}s";

console.log(index / 5 + 0.2);})

}
navslide();



















