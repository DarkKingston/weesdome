<script>
import AppNewestItem from "./item/AppNewestItem.vue";
import { ref } from "vue";
import { dragscroll } from "vue-dragscroll";
export default {
  components: { AppNewestItem },
  directives: {
    dragscroll,
  },
  setup() {
    const catalog = ref([
      {
        id: 1,
        image: "images/object_1.png",
        text: "Layan Verde",
        count: 37,
      },
      {
        id: 2,
        image: "images/object_2.png",
        text: "Atrium Andaman City",
        count: 37,
      },
      {
        id: 3,
        image: "images/object_3.png",
        text: "Ayana heights seaview residence",
        count: 37,
      },
      {
        id: 4,
        image: "images/object_1.png",
        text: "Sunshine Beach Resort & Residences",
        count: 37,
      },
      {
        id: 5,
        image: "images/object_2.png",
        text: "Layan Verde",
        count: 37,
      },
      {
        id: 6,
        image: "images/object_3.png",
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
      <div class="popular_title fz-20 fw-700">Свежие объекты</div>
      <div class="popular_wrapper d-flex align-start mt-14" v-dragscroll>
        <AppNewestItem
          v-for="(item, key) in catalog"
          :id="item.id"
          :image="item.image"
          :text="item.text"
          :count="item.count"
          :key="key"
        />
      </div>
    </div>
  </section>
</template>
