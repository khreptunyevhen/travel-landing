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

// Modals

const modalBtns = document.querySelectorAll('.button');
const modals = document.querySelectorAll('.modal');
const body = document.body;

function openModal (modal) {
  modal.classList.add('active-modal');
  body.classList.add('lock');
}

function closeModal (e) {
  if(e.target.classList.contains('modal-form__close') || e.target.closest('.modal-form__close') || e.target.classList.contains('modal__bg')) {
    e.target.closest('.modal').classList.remove('active-modal');
  }
  body.classList.remove('lock');
}

modalBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    let data = e.target.dataset.modalOpen;

    modals.forEach(modal => {
      if(modal.dataset.modal == data) {
        openModal(modal);
      }
    });
  });
});

modals.forEach(modal => {
  modal.addEventListener('click', e => 
  closeModal(e));
});

window.addEventListener('keydown', e => {
  modals.forEach(modal => {
    if(e.key == "Escape" && modal.classList.contains('active-modal')) {
      modal.classList.remove('active-modal');
      body.classList.remove('lock');
    }
  });
});

// console.log(data);



