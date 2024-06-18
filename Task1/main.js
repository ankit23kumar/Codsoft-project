// Select the menu button and navigation slider elements
const menubtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".slider-navigation");

// Add event listener for the menu button
menubtn.addEventListener("click", () => {
  menubtn.classList.toggle("active");
  navigation.classList.toggle("active");
});

// Select the navigation buttons, slides, and content elements
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".img-slide");
const contents = document.querySelectorAll(".homepage-content");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

let currentSlide = 0;

// Function to navigate the slider
const sliderNav = function(manual) {
  // Remove 'active' class from all buttons, slides, and contents
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  contents.forEach((content) => {
    content.classList.remove("active");
  });

  // Add 'active' class to the selected button, slide, and content
  btns[manual].classList.add("active");
  slides[manual].classList.add("active");
  contents[manual].classList.add("active");

  currentSlide = manual;
};

// Auto slide functionality
const autoSlide = () => {
  currentSlide = (currentSlide + 1) % slides.length;
  sliderNav(currentSlide);
};

// Add event listener to each button to trigger the slider navigation
btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    sliderNav(i);
  });
});

// Add event listeners for arrow buttons
leftArrow.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  sliderNav(currentSlide);
});

rightArrow.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  sliderNav(currentSlide);
});

// Set interval for auto sliding
setInterval(autoSlide, 5000);
