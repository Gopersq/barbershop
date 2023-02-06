const slider = document.querySelector('#slider');
const sliderItems = Array.from(slider.children);
const btnPrew = document.querySelector('#btnPrew');
const btnNext = document.querySelector('#btnNext');

sliderItems.forEach( (slide, index) => {

   if (index !== 0) slide.classList.add('hidden');

   slide.dataset.index = index;
   sliderItems[0].dataset.active = '';

});

btnNext.addEventListener('click', function() {

   showNextSlide('next');

});

btnPrew.addEventListener('click', function() {

   showNextSlide();

});

function showNextSlide(direction) {

   const currentSlide = slider.querySelector('[data-active]');
   const currentSlideIndex = +currentSlide.dataset.index;

   currentSlide.classList.add('hidden');
   currentSlide.removeAttribute('data-active');

   let nextSlideIndex = direction === 'next' ? currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1 : currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;

   const nextSlide = slider.querySelector(`[data-index ='${nextSlideIndex}']`);
   nextSlide.classList.remove('hidden');
   nextSlide.dataset.active = '';
};