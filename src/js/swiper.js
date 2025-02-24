import Swiper from 'swiper';
import { Navigation, Pagination } from '../../node_modules/swiper/modules';
import '../../node_modules/swiper/swiper.css';
import genres from './schema';
Swiper.use([Navigation]);
let swiper;
const genreRadios = document.querySelectorAll('input[name="genre"]');
const swiperContainer = document.querySelector('.swiper-wrapper');

document.addEventListener('DOMContentLoaded', () => {
  swiper = new Swiper('#videoslider', {
    slidesPerView: 1,
    observer: true,
    observeParents: true,
    spaceBetween: 50,
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1280: {
        slidesPerView: 2,
        spaceBetween: 50,
        centeredSlides: false,
      },
    },
  });
});

function renderSlides(genre) {
  swiperContainer.innerHTML = ''; // Очистка контейнера

  const res = genres[genre]
    .map(
      url => `
      <div class="swiper-slide">
        <iframe
          width="560"
          height="315"
          src="${url}"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    `
    )
    .join('');

  swiperContainer.innerHTML = res;
  swiper.destroy(
    (swiper = new Swiper('.swiper', {
      slidesPerView: 1,
      observer: true,
      observeParents: true,
      spaceBetween: 50,
      centeredSlides: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        1280: {
          slidesPerView: 2,
          spaceBetween: 50,
          centeredSlides: false,
        },
      },
    }))
  );
}

genreRadios.forEach(radio => {
  radio.addEventListener('change', event => {
    renderSlides(event.target.value);
  });
});
