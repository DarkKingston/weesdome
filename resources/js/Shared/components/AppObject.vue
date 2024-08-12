<script>
import AppNewestItem from "./item/AppNewestItem.vue";
import { ref, onMounted } from "vue";
import Swiper from "swiper";
import {Navigation} from "swiper/modules";
export default {
  components: { AppNewestItem, Navigation },
  props: {
    title: String,
    swiper: String
  },
  setup(props) {
    const catalog = ref([
      {
        id: 1,
        image: "/assets/images/object_1.png",
        text: "Layan Verde",
        count: 37,
      },
      {
        id: 2,
        image: "/assets/images/object_2.png",
        text: "Atrium Andaman City",
        count: 37,
      },
      {
        id: 3,
        image: "/assets/images/object_3.png",
        text: "Ayana heights seaview residence",
        count: 37,
      },
      {
        id: 4,
        image: "/assets/images/object_1.png",
        text: "Sunshine Beach Resort & Residences",
        count: 37,
      },
      {
        id: 5,
        image: "/assets/images/object_2.png",
        text: "Layan Verde",
        count: 37,
      },
      {
        id: 6,
        image: "/assets/images/object_3.png",
        text: "Layan Verde",
        count: 37,
      },
    ]);

    function initSwiper(){
      new Swiper(`.${props.swiper}`, {
        direction: "horizontal",
        modules: [Navigation],
        slidesPerView: 3,
        spaceBetween: 12,
        navigation: {
          nextEl: `.${props.swiper}_catalog_next`,
          prevEl: `.${props.swiper}_catalog_prev`,
        },
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
    }

    onMounted(() => {
      initSwiper();
    });

    return { catalog };
  },
};
</script>

<template>
  <section class="popular">
    <div class="container">
      <div class="popular_title fz-20 fw-700">{{ title }}</div>
      <div class="popular_wrapper d-flex align-start mt-14">
        <div :class="swiper">
          <div class="prev" :class="`${swiper}_catalog_prev`">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="10" viewBox="0 0 18 10" fill="none">
              <path d="M4.2 1L1 5M1 5L4.2 9M1 5H17" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="swiper-wrapper">
            <AppNewestItem
                v-for="(item, key) in catalog"
                :id="item.id"
                :image="item.image"
                :text="item.text"
                :count="item.count"
                :key="key"
            />
          </div>
          <div class="next" :class="`${swiper}_catalog_prev`">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="10" viewBox="0 0 18 10" fill="none">
              <path d="M13.8 1L17 5M17 5L13.8 9M17 5H1" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
