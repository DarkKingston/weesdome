<script>
export default {
  props: {
    id: Number,
    image: String,
    text: String,
    count: Number,
  },
};
</script>

<template>
  <div class="swiper-slide">
    <NuxtLink :to="'/catalog/' + id" class="popular_item">
      <div class="popular_img">
        <NuxtImg :src="image" />
        <div class="popular_count fz-12 fw-600">{{ count }} объектов</div>
      </div>
      <div class="popular_item_title fz-16">{{ text }}</div>
    </NuxtLink>
  </div>
</template>

<style scoped>
.popular_img {
  max-width: 190px;
  max-height: 190px;
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 29px;
  overflow: hidden;
  background-repeat: no-repeat;
}
.popular_item_title {
  margin-top: 5px;
  max-width: 155px;
}
.popular_img img {
  object-fit: cover;
  object-position: top center;
}

.popular_count {
  color: var(--color-main);
  border-radius: 58px;
  background: var(--color-grey);
  display: flex;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 17px;
  right: 9px;
}
</style>
