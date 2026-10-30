// MOBILE NAVBAR
const menuButton = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", isOpen);
    menuButton.textContent = isOpen ? "×" : "☰";
});

// CLOSE MENU AFTER CLICKING A LINK
navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");

        menuButton.setAttribute("aria-expanded", "false");
        menuButton.textContent = "☰";
    });
});

// SCROLL ANIMATION
const observer = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");

                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);

// APPLY ANIMATION TO ALL REVEAL ELEMENTS
document.querySelectorAll(".reveal").forEach(function (element) {
    observer.observe(element);
});
const changingText = document.getElementById("changing-text");

const words = [
  "brands memorable.",
  "brand identities.",
  "brand presentations.",
  "social media.",
  "creative campaigns.",
  "digital experiences."
];

let index = 0;

setInterval(() => {
  changingText.classList.add("fade-out");

  setTimeout(() => {
    index = (index + 1) % words.length;
    changingText.textContent = words[index];

    changingText.classList.remove("fade-out");
  }, 300);

}, 1000);