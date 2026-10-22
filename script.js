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