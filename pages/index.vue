<script>
import AppPopular from "~/components/AppPopular.vue";
import SearchBar from "~/components/AppSeachBar.vue";
import AppTypesObject from "~/components/AppTypesObject.vue";
export default {
  components: { SearchBar, AppTypesObject, AppPopular },
};
</script>

<template>
  <div class="main_wrapper">
    <SearchBar />
    <AppTypesObject />
    <AppPopular />
  </div>
</template>
