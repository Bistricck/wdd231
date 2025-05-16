const menuButton = document.getElementById('menu');
const navLinks = document.getElementById('nav-links');

menuButton.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
