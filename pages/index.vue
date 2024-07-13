<script>
import AppPopular from "~/components/AppPopular.vue";
import SearchBar from "~/components/AppSeachBar.vue";
import AppTypesObject from "~/components/AppTypesObject.vue";
import AppNewObject from "~/components/AppNewObject.vue";
export default {
  components: { SearchBar, AppTypesObject, AppPopular, AppNewObject },
};
</script>

<template>
  <div class="main_wrapper">
    <SearchBar />
    <AppTypesObject />
    <AppPopular />
    <div class="line"></div>
    <AppNewObject />
  </div>
</template>
