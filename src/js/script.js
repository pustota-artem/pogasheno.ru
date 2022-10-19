'use strict'

// SLIDER

// const slider = document.getElementById('slider');
// const btnLeft = document.getElementById('btn-left');
// const btnRight = document.getElementById('btn-right');
// const slide1 = document.getElementById('slide1');
// const slide2 = document.getElementById('slide2');


// btnLeft.addEventListener('click', () => {
//     slide1.classList.add('left-0', 'ease-in-out', 'duration-300');
//     slide1.classList.remove('left-[-50%]', 'ease-in-out', 'duration-500');
//     slide2.classList.add('left-0', 'ease-in-out', 'duration-500');
//     slide2.classList.remove('left-[-50%]', 'ease-in-out', 'duration-500');
//     btnLeft.classList.remove('bg-gray-300');
//     btnLeft.classList.add('bg-[#dd7c7c]');
//     btnRight.classList.remove('bg-[#dd7c7c]');
//     btnRight.classList.add('bg-gray-300');

// });

// btnRight.addEventListener('click', () => {
//     // slide1.classList.remove('left-0', 'ease-in-out', 'duration-500');
//     slide1.classList.add('left-[-50%]', 'ease-in-out', 'duration-500'); // уводит левый слайд влево 
//     // slide2.classList.remove('left-0', 'ease-in-out', 'duration-500'); 
//     slide2.classList.add('left-[-50%]', 'ease-in-out', 'duration-300'); // правый слайд в центр
//     // кнопки
//     btnLeft.classList.add('bg-gray-300');
//     btnLeft.classList.remove('bg-[#dd7c7c]');
//     btnRight.classList.add('bg-[#dd7c7c]');
//     btnRight.classList.remove('bg-gray-300');

// })

// FAQ


// const openBtn = document.getElementById('open-info-btn');



// let infoBlock = document.getElementById('info-block');

// openBtn.addEventListener('click', function () {
//     if (infoBlock.classList.contains('max-h-0')) {
//         infoBlock.classList.remove('max-h-0');
//         infoBlock.classList.add('max-h-40');
//         openBtn.classList.add('rotate-180');
//     } else {
//         infoBlock.classList.remove('max-h-40');
//         infoBlock.classList.add('max-h-0');
//         openBtn.classList.remove('rotate-180');
//     }
// });

let openBtns = document.querySelectorAll('#open-info-btn');
let infoBlocks = document.querySelectorAll('#info-block');

for (let i = 0; i < openBtns.length; i++) {
    let openBtn = openBtns[i];
    let infoBlock = infoBlocks[i];
    openBtn.onclick = () => {
        if (infoBlock.classList.contains('max-h-0')) {
            infoBlock.classList.remove('max-h-0');
            infoBlock.classList.add('max-h-[500px]');
            openBtn.classList.add('rotate-180');
        } else {
            infoBlock.classList.remove('max-h-[500px]');
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