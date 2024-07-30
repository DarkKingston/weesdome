<script>
import AppPopular from "~/components/AppPopular.vue";
import SearchBar from "~/components/AppSeachBar.vue";
import AppTypesObject from "~/components/AppTypesObject.vue";
import AppNewObject from "~/components/AppNewObject.vue";
import AppCheaperObject from "~/components/AppCheaperObject.vue";
import AppExpensiveObject from "~/components/AppExpensiveObject.vue";
export default {
  components: {
    SearchBar,
    AppTypesObject,
    AppPopular,
    AppNewObject,
    AppCheaperObject,
    AppExpensiveObject,
  },
};
</script>

<template>
  <div class="main_wrapper">
    <SearchBar />
    <AppTypesObject />
    <AppPopular />
    <div class="container_without_space">
      <div class="line"></div>
    </div>
    <AppNewObject />
    <div class="container_without_space">
      <div class="line"></div>
    </div>
    <AppCheaperObject />
    <div class="container_without_space">
      <div class="line"></div>
    </div>
    <AppExpensiveObject />
    <div class="container_without_space">
      <div class="line"></div>
    </div>
    <AppOurServices/>
  </div>
</template>
