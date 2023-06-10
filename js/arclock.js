// ========== Scroll Sections Active Link ==========
let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav div");
let iconSticky = document.querySelectorAll(".header .navbar div .icon");

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.children[0].classList.remove("active");
        links.children[1].classList.remove("active");
        document
          .querySelector(`header nav a[href='#${id}']`)
          .classList.add("active");
        document
          .querySelector(`header nav a[href='#${id}'].icon`)
          .classList.add("active");
      });
    }
  });
  // ========== Sticky Navbar ==========

  let header = document.querySelector(".header");
  let iconTop = document.querySelector(".footer-iconTop");
  let linkSticky = document.querySelectorAll(".header .navbar div a");
  let iconSticky = document.querySelectorAll(".header .navbar div .icon");

  iconTop.classList.toggle("sticky", window.scrollY > 200);
  header.classList.toggle("sticky", window.scrollY > 200);

  linkSticky.forEach((a) => {
    a.classList.toggle("sticky", window.scrollY > 200);
  });
  iconSticky.forEach((a) => {
    a.classList.toggle("sticky", window.scrollY > 200);
  });
};

// ========== Swiper Valuable Testimonial ==========
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// ========== Dark & Light Mode ==========
let darkModeIcon = document.querySelector(".darkMode-icon");
let home = document.querySelector(".home");
let Services = document.querySelector(".services");

darkModeIcon.onclick = () => {
  darkModeIcon.children[0].classList.toggle("fa-moon");
  darkModeIcon.children[0].classList.toggle("fa-sun");
  document.body.classList.toggle("light-mode");

  if (document.body.classList == "light-mode") {
    home.style.backgroundImage = "url(image/home.jpg)";
    Services.style.backgroundImage = "url(image/home.jpg)";
  } else {
    home.style.backgroundImage = "url(image/homedark.jpg)";
    Services.style.backgroundImage = "url(image/homedark.jpg)";
  }
};

// ========== ScrollReveal ==========
ScrollReveal({
  reset: true,
  distance: "100px",
  duration: 1000,
  delay: 150,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content > h1, .about-img", { origin: "left" });
// ScrollReveal().reveal(".home-content p, .about-countent", { origin: "right" });