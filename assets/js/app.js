// Scroll to top function
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: "smooth",
	});
});

// Nav hamburger selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

// Show buger-menu function
burger.addEventListener('click', () =>{
	ul.classList.toggle('show');
});

// Hide burger-menu function
// Select nav links
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) => 
	link.addEventListener("click", () => {
		ur.classList.remove("show");
	}));