export function toggle() {
  const menuIcon = document.querySelector('.hamburger-container');
  const mobileMenu = document.querySelector('.navigation');
  const icon = document.querySelector('.navigation-icon');
  const mobileLink = document.querySelectorAll('.mobile-link');

  menuIcon.addEventListener('click', function() {
    mobileMenu.classList.toggle('open');
    icon.classList.toggle('toggled');
  });
  
  mobileLink.forEach(el => el.addEventListener('click', function() {
    mobileMenu.classList.remove('open');
    icon.classList.remove('toggled');
  }));
}
