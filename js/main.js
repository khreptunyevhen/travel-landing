// Slider testimonials
const swiperForTestimonials = new Swiper('.swiper-testimonials', {
  loop: true,
  navigation: {
    nextEl: '.testimonials-button-next',
    prevEl: '.swiper-button-prev',
  }
});

// Burger menu
const iconMenu = document.querySelector('.header__icon');
const menuBody = document.querySelector('.header__menu');

if(iconMenu) {
  iconMenu.addEventListener('click', function (e) {
    document.body.classList.toggle('lock');
    iconMenu.classList.toggle('active');
    menuBody.classList.toggle('active');
  });
}

// Scroll on click
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');

if(menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;

    if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const goToSection = document.querySelector(menuLink.dataset.goto);
      const goToSectionValue = goToSection.getBoundingClientRect().top + scrollY - document.querySelector('.header').offsetHeight;

      window.scrollTo({
        top: goToSectionValue,
        behavior: "smooth"
      });
      e.preventDefault();
    }

    if(iconMenu.classList.contains('active')) {
      document.body.classList.remove('lock');
      iconMenu.classList.remove('active');
      menuBody.classList.remove('active');
    }
  }  
}