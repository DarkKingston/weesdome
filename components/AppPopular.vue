<script>
import AppPopularItem from "./item/AppPopularItem.vue";
import { ref } from "vue";
import { dragscroll } from "vue-dragscroll";
export default {
  components: { AppPopularItem },
  directives: {
    dragscroll,
  },
  setup() {
    const catalog = ref([
      {
        image: "images/catalog_1.png",
        text: "Layan Verde",
        count: 37,
      },
      {
        image: "images/catalog_2.png",
        text: "Atrium Andaman City",
        count: 37,
      },
      {
        image: "images/catalog_3.png",
        text: "Ayana heights seaview residence",
        count: 37,
      },
      {
        image: "images/catalog_4.png",
        text: "Sunshine Beach Resort & Residences",
        count: 37,
      },
      {
        image: "images/catalog_5.png",
        text: "Layan Verde",
        count: 37,
      },
      {
        image: "images/catalog_6.png",
        text: "Layan Verde",
        count: 37,
      },
    ]);

    return { catalog };
  },
};
</script>

<template>
  <section class="popular">
    <div class="container">
      <div class="popular_title fz-20 fw-700">Популярные проекты</div>
    </div>
    <div class="popular_wrapper d-flex align-start mt-14" v-dragscroll>
      <AppPopularItem
        v-for="(item, key) in catalog"
        :image="item.image"
        :text="item.text"
        :count="item.count"
        :key="key"
      />
    </div>
  </section>
</template>
