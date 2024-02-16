// Toggle class active
const navbar = document.querySelector(".navbar");
// Ketika hamburger menu diklik
document.querySelector('#hamburger-menu').onclick = () => {
  navbar.classList.toggle('active');
};

// Klik luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove('active');
  }
});
