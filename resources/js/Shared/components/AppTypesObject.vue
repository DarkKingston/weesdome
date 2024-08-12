<script>
import { ref } from "vue";
import { dragscroll } from "vue-dragscroll";
export default {
  directives: {
    dragscroll,
  },
  setup() {
    const isActive = ref(0);

    function toggleTab(key) {
      isActive.value = key;
    }

    return {
      isActive,
      toggleTab,
    };
  },
};
</script>

<template>
  <div class="container">
    <div class="tabs d-flex align-center mt-14" v-dragscroll>
      <div
        class="tabs_item fz-12 fw-700"
        @click="toggleTab(0)"
        :class="{ active: isActive == 0 }"
      >
        Все
      </div>
      <div
        class="tabs_item fz-12 fw-700"
        @click="toggleTab(1)"
        :class="{ active: isActive == 1 }"
      >
        Кондо
      </div>
      <div
        class="tabs_item fz-12 fw-700"
        @click="toggleTab(2)"
        :class="{ active: isActive == 2 }"
      >
        Виллы
      </div>
      <div
        class="tabs_item fz-12 fw-700"
        @click="toggleTab(3)"
        :class="{ active: isActive == 3 }"
      >
        Таунхаус
      </div>
      <div
        class="tabs_item fz-12 fw-700"
        @click="toggleTab(4)"
        :class="{ active: isActive == 4 }"
      >
        Дома
      </div>
      <div
        class="tabs_item fz-12 fw-700"
        @click="toggleTab(5)"
        :class="{ active: isActive == 5 }"
      >
        Коттеджи
      </div>
      <div
        class="tabs_item fz-12 fw-700"
        @click="toggleTab(6)"
        :class="{ active: isActive == 6 }"
      >
        Виллы
      </div>
      <div
        class="tabs_item fz-12 fw-700"
        @click="toggleTab(7)"
        :class="{ active: isActive == 7 }"
      >
        Гостиницы
      </div>
      <div
        class="tabs_item fz-12 fw-700"
        @click="toggleTab(8)"
        :class="{ active: isActive == 8 }"
      >
        Участки
      </div>
      <div
        class="tabs_item fz-12 fw-700"
        @click="toggleTab(9)"
        :class="{ active: isActive == 9 }"
      >
        Офис
      </div>
    </div>
  </div>
</template>

<style scoped>
.tabs {
  position: relative;
  gap: 2px;
  overflow: hidden;
}
.tabs_item {
  display: flex;
  padding: 14px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 58px;
  background: var(--color-grey);
  color: var(--color-gray);
  cursor: pointer;
}
.tabs_item.active {
  background: var(--color-main);
  color: var(--color-white);
}
</style>
