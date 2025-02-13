document.addEventListener('partialsLoaded', () => {
  const mobileMenubtn = document.querySelector('.mobile-menu__btn');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (mobileMenubtn && mobileMenu) {
    mobileMenubtn.addEventListener('click', toggleMenu);
  }

  function toggleMenu() {
    mobileMenubtn.classList.toggle('is-open');
    mobileMenu.classList.toggle('is-open');
    document.body.classList.toggle('modal-open');
  }
});
