
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function openDemo() {
  document.getElementById("demoModal").classList.remove("hidden");
}

function closeDemo() {
  document.getElementById("demoModal").classList.add("hidden");
}
