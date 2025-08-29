// Mobile Menu Toggle
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("show");
  }
  
  // Auto Year in Footer
  document.getElementById("year").textContent = new Date().getFullYear();
  