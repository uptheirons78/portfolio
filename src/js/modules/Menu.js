export function toggle() {
  const menuIcon = document.querySelector('.hamburger-container');
  const mobileMenu = document.querySelector('.navigation');
  const icon = document.querySelector('.navigation-icon');

  menuIcon.addEventListener('click', function() {
    mobileMenu.classList.toggle('open');
    icon.classList.toggle('toggled');
  });
}
