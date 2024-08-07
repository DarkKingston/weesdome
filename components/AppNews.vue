<script>
import AppNewestItem from "./item/AppNewestItem.vue";
import {onMounted, ref} from "vue";
import Swiper from "swiper";
export default {
  components: { AppNewestItem },
  setup() {

    onMounted(() => {
      new Swiper(".services_swiper", {
        direction: "horizontal",
        slidesPerView: 3,
        spaceBetween: 12,
        breakpoints: {
          1040:{
            slidesPerView: 3,
          },
          815:{
            slidesPerView: 2.4,
          },
          700:{
            slidesPerView: 2.1,
          },
          580:{
            slidesPerView: 1.9,
          },
          445:{
            slidesPerView: 1.4,
          },
          400:{
            slidesPerView: 1.2
          },
          230:{
            slidesPerView: 1.1
          }
        }
      });
    });
    return {  };
  },
};
</script>

<template>
  <section class="popular">
    <div class="container">
      <div class="popular_title fz-20 fw-700 mb-0">Новости</div>
      <div class="no_overflow">
        <div class="services_swiper">
          <div class="swiper-wrapper">

            <div class="swiper-slide">
              <div class="news_slide_wrapper">
                <div class="news_slide_img">
                  <NuxtImg src="/images/news1.png"/>
                </div>
                <div class="news_slide_container">
                  <div class="news_slide_title fz-15 fw-400">
                    Таиланд пересматривает закон о налоге на недвижимость
                  </div>
                  <div class="news_slide_box">
                    <div class="news_slide_date fz-14 fw-400">
                      23 июня 2024 г.
                    </div>
                    <div class="news_slide_btn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="10" viewBox="0 0 18 10" fill="none">
                        <path d="M13.8 1L17 5M17 5L13.8 9M17 5H1" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>
