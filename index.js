const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".drawer-menu");
const navLink = document.querySelector(".drawer-link");
const navBar = document.querySelector(".drawer");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu(event) {
    event.preventDefault();
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

window.onscroll = () => {
  if (window.scrollY > 20) {
    navBar.classList.add('drawer-active');
  } else {
    navBar.classList.remove('drawer-active');
  }
}

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}