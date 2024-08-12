
<script>
import AppNewestItem from "./item/AppNewestItem.vue";
import {onMounted} from "vue";
import Swiper from "swiper";
export default {
  components: { AppNewestItem },
  setup() {

    onMounted(() => {
      new Swiper(".invest_swiper", {
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
  <div class="container_without_space">
    <section class="invest">
      <div class="invest_wrapper">
        <div class="invest_title fz-28 fw-700 tac">Почему стоит инвестировать в недвижимость в Таиланде?</div>
        <div class="invest_subtitle fz-16 fw-700 mt-8 tac"><strong>Недвижимость</strong> — самый безопасный актив</div>
        <div class="no_overflow">
          <div class="invest_swiper">
            <div class="swiper-wrapper">

              <div class="swiper-slide">
                <div class="invest_slide_wrapper">

                  <div class="invest_img">
                    <img src="/assets/images/invest1.png"/>
                  </div>

                  <div class="step_slide_title fz-20 fw-700">
                    Доход на сдачу в аренду от 10%
                  </div>

                  <div class="step_slide_subtitle fz-15 fw-400">
                    Перепродажа <strong>от 30%</strong> годовых если заходить на пресейле
                  </div>

                </div>
              </div>

              <div class="swiper-slide">
                <div class="invest_slide_wrapper">

                  <div class="invest_img">
                    <img src="/assets/images/invest2.png"/>
                  </div>

                  <div class="step_slide_title fz-20 fw-700">
                    Доход на сдачу в аренду от 10%
                  </div>

                  <div class="step_slide_subtitle fz-15 fw-400">
                    <strong>Сезон круглый год</strong> — это значит, что аренда в спросе всегда
                  </div>

                </div>
              </div>

              <div class="swiper-slide">
                <div class="invest_slide_wrapper">

                  <div class="invest_img">
                    <img src="/assets/images/invest3.png"/>
                  </div>

                  <div class="step_slide_title fz-20 fw-700">
                    Доход на сдачу в аренду от 10%
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
  </div>
</template>
