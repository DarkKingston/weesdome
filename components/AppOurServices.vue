<script>
import AppNewestItem from "./item/AppNewestItem.vue";
import {onMounted, ref} from "vue";
import { dragscroll } from "vue-dragscroll";
import Swiper from "swiper";
import {Navigation} from "swiper/modules";
export default {
  components: { AppNewestItem },
  setup() {

    onMounted(() => {

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
              <div class="services_slide_wrapper">

                <div class="service_slide_title">

                </div>

                <div class="service_slide_subtitle">

                </div>

                <div class="service_slide_img">
                  <NuxtImg src="/images/service_1.png" />
                </div>

                <div class="service_slide_btn">

                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>
