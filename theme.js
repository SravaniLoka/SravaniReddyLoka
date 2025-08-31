// theme.js
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("theme-toggle");
  const body = document.body;

  // --- Dark/Light Mode Toggle ---
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    toggleBtn.textContent = "☀️";
  }

  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
      toggleBtn.textContent = "☀️";
      localStorage.setItem("theme", "dark");
    } else {
      toggleBtn.textContent = "🌙";
      localStorage.setItem("theme", "light");
    }
  });

  // --- Stacked Cards Shuffle ---
  const stack = document.querySelector(".card-stack");
  if (stack) {
    stack.addEventListener("click", () => {
      const firstCard = stack.firstElementChild;
      stack.appendChild(firstCard); // move top card to back
    });
  }
});
 
document.addEventListener("scroll", () => {
  let scrollX = window.scrollX; // horizontal scroll position
  let sections = document.querySelectorAll("section");

  sections.forEach((sec, i) => {
    let offset = sec.offsetLeft;     // section start
    let width = sec.offsetWidth;     // section width
    if (scrollX >= offset && scrollX < offset + width) {
      console.log("Currently on section:", i + 1);
    }
  });
});

