<script lang="ts">
export default {
  setup() {
    console.log(6556);
    return {};
  },
};
</script>

<template>
  <section class="content">
    <AppHeader />
    <main class="main">
      <slot></slot>
    </main>
    <AppFooter />
  </section>
</template>

<style lang="sass"></style>
