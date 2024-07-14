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
    <div class="line"></div>
    <AppNewObject />
    <div class="line"></div>
    <AppCheaperObject />
    <div class="line"></div>
    <AppExpensiveObject />
  </div>
</template>
