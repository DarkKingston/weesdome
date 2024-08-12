<script>
import AppPopularItem from "./item/AppPopularItem.vue";
import { ref, onMounted } from "vue";
import Swiper from "swiper";
import {Navigation} from "swiper/modules";
export default {
  components: { AppPopularItem },
  setup() {
    const catalog = ref([
      {
        id: 9,
        image: "/assets/images/catalog_1.png",
        text: "Layan Verde",
        count: 37,
      },
      {
        id: 8,
        image: "/assets/images/catalog_2.png",
        text: "Atrium Andaman City",
        count: 37,
      },
      {
        id: 11,
        image: "/assets/images/catalog_3.png",
        text: "Ayana heights seaview residence",
        count: 37,
      },
      {
        id: 21,
        image: "/assets/images/catalog_4.png",
        text: "Sunshine Beach Resort & Residences",
        count: 37,
      },
      {
        id: 45,
        image: "/assets/images/catalog_5.png",
        text: "Layan Verde",
        count: 37,
      },
      {
        id: 9,
        image: "/assets/images/catalog_6.png",
        text: "Layan Verde",
        count: 37,
      },
    ]);
    onMounted(() => {
      new Swiper(".popular_objects", {
        modules:[Navigation],
        direction: "horizontal",
        slidesPerView: 6,
        spaceBetween: 12,
        navigation: {
          nextEl: '.popular_next',
          prevEl: '.popular_prev',
        },
        breakpoints: {
          1040:{
            slidesPerView: 6,
          },
          815:{
            slidesPerView: 5,
          },
          700:{
            slidesPerView: 4,
          },
          580:{
            slidesPerView: 3,
          },
          445:{
            slidesPerView: 2.6,
          },
          360:{
            slidesPerView: 2.4,
          },
          230:{
            slidesPerView: 2.2
          }
        }
      });
    })
    return { catalog };
  },
};
</script>

<template>
  <section class="popular">
    <div class="container">
      <div class="popular_title fz-20 fw-700">Популярные проекты</div>
      <div class="no_overflow">

        <div class="prev popular_prev">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="10" viewBox="0 0 18 10" fill="none">
            <path d="M4.2 1L1 5M1 5L4.2 9M1 5H17" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      <div class="popular_wrapper popular_objects d-flex align-start mt-14">

        <div class="swiper-wrapper">
          <AppPopularItem
              v-for="(item, key) in catalog"
              :id="item.id"
              :image="item.image"
              :text="item.text"
              :count="item.count"
              :key="key"
          />
        </div>
      </div>
        <div class="next popular_next">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="10" viewBox="0 0 18 10" fill="none">
            <path d="M13.8 1L17 5M17 5L13.8 9M17 5H1" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>

      </div>
    </div>
  </section>
</template>
