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
      <div class="popular_title fz-20 fw-700 mb-0">Наши услуги</div>
      <div class="subtitle fz-16 fw-400">Чем мы можем быть вам полезны</div>
      <div class="no_overflow">
        <div class="services_swiper">
          <div class="swiper-wrapper">

            <div class="swiper-slide">
              <div class="services_slide_wrapper services_active">

                <div class="service_slide_title fz-20 fw-700">
                  Подбор апартаментов
                </div>

                <div class="service_slide_subtitle fz-15 fw-500">
                  Наш 15 летний опыт гарантирует лучший подбор аппартаментов в Тайланде
                </div>

                <div class="service_slide_img">
                  <NuxtImg src="/images/services.png" />
                </div>

                <div class="service_slide_btn fz-16 fw-600 transition">
                  Получить консультацию
                </div>

              </div>
            </div>

            <div class="swiper-slide">
              <div class="services_slide_wrapper">

                <div class="service_slide_title fz-20 fw-700">
                  Аренда
                </div>

                <div class="service_slide_subtitle fz-15 fw-500">
                  С нашей помощью можно быстро и выгодно арендовать объекты недвижимости в Тайланде
                </div>

                <div class="service_slide_img">
                  <NuxtImg src="/images/services2.png" />
                </div>

                <div class="service_slide_btn fz-16 fw-600 transition">
                  Получить консультацию
                </div>

              </div>
            </div>

            <div class="swiper-slide">
              <div class="services_slide_wrapper">

                <div class="service_slide_title fz-20 fw-700">
                  Инвестиции
                </div>

                <div class="service_slide_subtitle fz-15 fw-500">
                  Получайте высокий пассивный доход, ежегодно, благодаря выгодной инвестиции в недвижимость в Тайланде (от 7% гарантированной доходности)
                </div>

                <div class="service_slide_img">
                  <NuxtImg src="/images/services3.png" />
                </div>

                <div class="service_slide_btn fz-16 fw-600 transition">
                  Получить консультацию
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>
