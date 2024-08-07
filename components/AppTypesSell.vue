<script>
import { ref } from "vue";
export default {
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
    <div class="tabs d-flex align-center mt-14">
      <div
          class="tabs_item transition fz-12 fw-700"
          @click="toggleTab(0)"
          :class="{ active: isActive == 0 }"
      >
        Покупка
      </div>
      <div
          class="tabs_item transition fz-12 fw-700"
          @click="toggleTab(1)"
          :class="{ active: isActive == 1 }"
      >
        Аренда
      </div>
    </div>
  </div>
</template>

<style scoped>
.tabs {
  position: relative;
  gap: 2px;
  overflow: hidden;
  margin-bottom: 16px;
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
  width: calc(100% / 2);
}
.tabs_item.active {
  background: var(--color-main);
  color: var(--color-white);
}
</style>
