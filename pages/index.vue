<script lang="ts">
import SearchBar from "~/components/AppSeachBar.vue";
import AppTypesObjectVue from "~/components/AppTypesObject.vue";
export default {
  components: { SearchBar, AppTypesObjectVue },
};
</script>

<template>
  <div class="main_wrapper">
    <SearchBar />
    <AppTypesObjectVue />
  </div>
</template>
