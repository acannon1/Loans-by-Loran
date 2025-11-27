document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");

  if (toggle) {
    toggle.addEventListener("click", () => {
      header.classList.toggle("nav-open");
    });
  }

  // Update copyright year
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});
