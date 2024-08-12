
<script>
import AppNewestItem from "./item/AppNewestItem.vue";
import {onMounted} from "vue";
import Swiper from "swiper";
export default {
  components: { AppNewestItem },
  setup() {

    onMounted(() => {
      new Swiper(".step_swiper", {
        direction: "horizontal",
        slidesPerView: 3,
        spaceBetween: 8,
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
  <section class="steps">
    <div class="container">
      <div class="popular_title fz-20 fw-700 mb-0">Этапы нашей работы</div>
      <div class="subtitle fz-16 fw-400">Полное сопровождение</div>
      <div class="no_overflow">
        <div class="step_swiper">
          <div class="swiper-wrapper">

            <div class="swiper-slide">
              <div class="step_slide_wrapper">

                <div class="step_counter fz-20 fw-400">
                  1
                </div>

                <div class="step_slide_title fz-20 fw-700">
                  Консультация
                </div>

                <div class="step_slide_subtitle fz-15 fw-400">
                  Мы созваниваемся в zoom или можем написать телеграм, задаем Вам перечень вопросов в результате чего определяем потребности
                </div>

              </div>
            </div>

            <div class="swiper-slide">
              <div class="step_slide_wrapper">

                <div class="step_counter fz-20 fw-400">
                  2
                </div>

                <div class="step_slide_title fz-20 fw-700">
                  Консультация
                </div>

                <div class="step_slide_subtitle fz-15 fw-400">
                  Мы созваниваемся в zoom или можем написать телеграм, задаем Вам перечень вопросов в результате чего определяем потребности
                </div>

              </div>
            </div>

            <div class="swiper-slide">
              <div class="step_slide_wrapper">

                <div class="step_counter fz-20 fw-400">
                  3
                </div>

                <div class="step_slide_title fz-20 fw-700">
                  Консультация
                </div>

                <div class="step_slide_subtitle fz-15 fw-400">
                  Мы созваниваемся в zoom или можем написать телеграм, задаем Вам перечень вопросов в результате чего определяем потребности
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>
