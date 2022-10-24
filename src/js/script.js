'use strict'

// FAQ accordion

let openBtns = document.querySelectorAll('#open-info-btn');
let infoBlocks = document.querySelectorAll('#info-block');

for (let i = 0; i < openBtns.length; i++) {
  let openBtn = openBtns[i];
  let infoBlock = infoBlocks[i];
  openBtn.onclick = () => {
    if (infoBlock.classList.contains('max-h-0')) {
      infoBlock.classList.remove('max-h-0');
      infoBlock.classList.add('max-h-[600px]');
      openBtn.classList.add('rotate-180');
    } else {
      infoBlock.classList.remove('max-h-[600px]');
      infoBlock.classList.add('max-h-0');
      openBtn.classList.remove('rotate-180');
    }
  }
};

// SWIPER 

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});


// Call me popup

const callMeBtns = document.querySelectorAll('#callme-btn');

for (let i = 0; i < callMeBtns.length; i++) {
  const callMeBtn = callMeBtns[i];

  callMeBtn.addEventListener('click', () => {
    document.getElementById('overlay').classList.add('overlay');
    document.getElementById('callme-form').classList.remove('hidden');
    document.getElementById('callme-form').classList.add('popup');
  });
}

// Questions popup

const questionBtns = document.querySelectorAll('#question-btn');

for (let i = 0; i < callMeBtns.length; i++) {
  const questionMeBtn = questionBtns[i];

  questionMeBtn.addEventListener('click', () => {
    document.getElementById('overlay').classList.add('overlay');
    document.getElementById('questions-form').classList.remove('hidden');
    document.getElementById('questions-form').classList.add('popup');
  });
}

// Close popup btn

const popupClsBtns = document.querySelectorAll('#popup-close');

for (let i = 0; i < callMeBtns.length; i++) {
  const popupClsBtn = popupClsBtns[i];

  popupClsBtn.addEventListener('click', () => {
    document.getElementById('overlay').classList.remove('overlay');
    document.getElementById('questions-form').classList.remove('popup');
    document.getElementById('callme-form').classList.remove('popup');
    document.getElementById('questions-form').classList.add('hidden');
    document.getElementById('callme-form').classList.add('hidden');
  });
};

document.getElementById('overlay').addEventListener('click', () => {
  document.getElementById('overlay').classList.remove('overlay');
  document.getElementById('questions-form').classList.remove('popup');
  document.getElementById('callme-form').classList.remove('popup');
  document.getElementById('questions-form').classList.add('hidden');
  document.getElementById('callme-form').classList.add('hidden');
});
