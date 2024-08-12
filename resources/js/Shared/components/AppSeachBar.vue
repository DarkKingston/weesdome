<script setup>
import { ref } from "vue";

const isInputActive = ref(false);

function handleFocus() {
  isInputActive.value = true;
}

function handleBlur(event) {
  if (!event.target.value) {
    isInputActive.value = false;
  }
}

function handleInput(event) {
  if (event.target.value) {
    isInputActive.value = true;
  }
}
</script>

<template>
  <div class="container">
    <div class="search-bar transition" :class="{active: isInputActive}">
      <div class="search-input">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M6.5 2.71714e-07C7.70042 -0.000346761 8.87748 0.331734 9.90071 0.95943C10.9239 1.58713 11.7534 2.48592 12.297 3.55616C12.8407 4.62641 13.0774 5.8263 12.9808 7.02283C12.8843 8.21936 12.4582 9.36578 11.75 10.335L15.705 14.295L14.295 15.705L10.335 11.75C9.22252 12.5647 7.87887 13.0026 6.5 13C4.77609 13 3.12279 12.3152 1.90381 11.0962C0.684819 9.87721 0 8.22391 0 6.5C0 4.77609 0.684819 3.12279 1.90381 1.90381C3.12279 0.68482 4.77609 2.71714e-07 6.5 2.71714e-07ZM6.5 2C5.90905 2 5.32389 2.1164 4.77792 2.34254C4.23196 2.56869 3.73588 2.90016 3.31802 3.31802C2.90016 3.73588 2.56869 4.23196 2.34254 4.77793C2.1164 5.32389 2 5.90905 2 6.5C2 7.09095 2.1164 7.67611 2.34254 8.22208C2.56869 8.76804 2.90016 9.26412 3.31802 9.68198C3.73588 10.0998 4.23196 10.4313 4.77792 10.6575C5.32389 10.8836 5.90905 11 6.5 11C7.69347 11 8.83807 10.5259 9.68198 9.68198C10.5259 8.83807 11 7.69347 11 6.5C11 5.30653 10.5259 4.16193 9.68198 3.31802C8.83807 2.47411 7.69347 2 6.5 2Z"
            fill="#222222"
          />
        </svg>
        <input
          type="text"
          class="search"
          @focus="handleFocus"
          @blur="handleBlur"
          @input="handleInput"
        />
        <div class="search-text" v-if="!isInputActive">
          <div class="fz-14 fw-600">Найти дом мечты</div>
          <div class="sub-text fz-12">От 100,000$ · Все районы Пхукета</div>
        </div>
      </div>
      <div class="filter-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            d="M3 6C3.62065 5.99968 4.22613 6.19186 4.73298 6.55006C5.23984 6.90826 5.62312 7.41484 5.83 8H12V10H5.83C5.64669 10.5185 5.32439 10.9766 4.89833 11.3243C4.47226 11.672 3.95882 11.8959 3.41412 11.9715C2.86941 12.0471 2.3144 11.9716 1.80973 11.7531C1.30506 11.5346 0.870157 11.1816 0.552537 10.7327C0.234918 10.2838 0.046807 9.75616 0.00876117 9.20755C-0.0292846 8.65894 0.0841984 8.11042 0.336809 7.62194C0.58942 7.13347 0.971439 6.72382 1.44112 6.43778C1.9108 6.15173 2.45007 6.00029 3 6ZM3 8C2.73478 8 2.48043 8.10536 2.29289 8.29289C2.10536 8.48043 2 8.73478 2 9C2 9.26522 2.10536 9.51957 2.29289 9.70711C2.48043 9.89464 2.73478 10 3 10C3.26522 10 3.51957 9.89464 3.70711 9.70711C3.89464 9.51957 4 9.26522 4 9C4 8.73478 3.89464 8.48043 3.70711 8.29289C3.51957 8.10536 3.26522 8 3 8ZM9 4.12473e-07C9.54993 0.000288763 10.0892 0.151731 10.5589 0.437777C11.0286 0.723824 11.4106 1.13347 11.6632 1.62195C11.9158 2.11042 12.0293 2.65894 11.9912 3.20755C11.9532 3.75616 11.7651 4.28376 11.4475 4.73269C11.1298 5.18162 10.6949 5.53462 10.1903 5.75309C9.6856 5.97157 9.13059 6.04712 8.58588 5.9715C8.04118 5.89588 7.52774 5.67198 7.10167 5.32429C6.67561 4.9766 6.35331 4.51848 6.17 4H0V2H6.17C6.37688 1.41484 6.76016 0.908257 7.26702 0.550056C7.77387 0.191856 8.37935 -0.00032496 9 4.12473e-07ZM9 2C8.73478 2 8.48043 2.10536 8.29289 2.29289C8.10536 2.48043 8 2.73478 8 3C8 3.26522 8.10536 3.51957 8.29289 3.70711C8.48043 3.89464 8.73478 4 9 4C9.26522 4 9.51957 3.89464 9.70711 3.70711C9.89464 3.51957 10 3.26522 10 3C10 2.73478 9.89464 2.48043 9.70711 2.29289C9.51957 2.10536 9.26522 2 9 2Z"
            fill="#222222"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped>
.search {
  height: 36px;
  width: 100%;
  border: none;
  background: transparent;
  padding-left: 20px;
  z-index: 2;
  outline: none;
}
.search-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-grey);
  padding: 10px 10px 10px 20px;
  min-height: 56px;
  border-radius: 1000px;
  position: relative;
}

.search-input {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
}

.icon {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

.search-text {
  display: flex;
  flex-direction: column;
  position: absolute;
  color: var(--color-granit);
  left: 54px;
  top: 50%;
  transform: translateY(-50%);
}

.sub-text {
  color: var(--color-gray);
}

.filter-button {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-white);
  min-width: 36px;
  height: 36px;
  margin-left: 10px;
  border-radius: 25px;
  border: 1px solid var(--color-border-grey);
  cursor: pointer;
}

</style>
