// Typing animation
const professions = [
    "Backend Developer",
    "Problem Solver",
    "Tech Enthusiast"
];

let i = 0;
let j = 0;
let current = "";

function typeEffect() {
    const target = document.querySelector(".multiple-text");

    if (!target) return;

    current = professions[i];

    target.textContent = current.slice(0, j++);

    if (j > current.length) {
        j = 0;
        i = (i + 1) % professions.length;
        setTimeout(typeEffect, 2000);
    } else {
        setTimeout(typeEffect, 120);
    }
}

typeEffect();


// Smooth scroll for nav links
document.querySelectorAll('header nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: "smooth"
            });
        }
    });
});


// Highlight active nav link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.addEventListener("scroll", () => {
    let scrollPos = window.scrollY;

    sections.forEach(sec => {
        const id = sec.getAttribute("id");

        if (
            scrollPos >= sec.offsetTop - 150 &&
            scrollPos < sec.offsetTop + sec.offsetHeight - 150
        ) {
            navLinks.forEach(link => link.classList.remove("active"));

            const activeLink = document.querySelector(
                `header nav a[href="#${id}"]`
            );

            if (activeLink) activeLink.classList.add("active");
        }
    });
});