(() => {
  const mobileMenubtn = document.querySelector('.mobile-menu__btn');
  const mobileMenu = document.querySelector('.mobile-menu');

  mobileMenubtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    mobileMenubtn.classList.toggle('is-open');
    mobileMenu.classList.toggle('is-open');
    document.body.classList.toggle('modal-open');
  }
})();
