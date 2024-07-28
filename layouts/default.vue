<script lang="ts">
export default {
  setup() {

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
