const screenSize = window.matchMedia('(max-width: 767px)');
const navMenuListItems = document.querySelectorAll('nav > *');
const header = document.querySelector('header');

function toggleMenu() {
  if (screenSize.matches) {
    header.classList.toggle('drawer');
    navMenuListItems.forEach((element) => element.classList.toggle('hide'));
  }
}

navMenuListItems.forEach((element) => element.addEventListener('click', toggleMenu));
