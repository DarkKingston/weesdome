<script>
export default {
  props: {
    image: String,
    text: String,
    count: Number,
  },
};
</script>

<template>
  <div class="popular_item">
    <div class="newest_img">
      <NuxtImg :src="image" />
      <div class="newest_favorite">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 21C17.25 17.4525 22.5 13.5 22.5 8.24997C22.502 7.55998 22.3675 6.8764 22.1044 6.23854C21.8413 5.60069 21.4546 5.02115 20.9667 4.53325C20.4788 4.04534 19.8993 3.65871 19.2614 3.39557C18.6236 3.13243 17.94 2.99799 17.25 2.99997C15.9 2.99997 14.565 3.50997 13.5375 4.53747L12 6.07497L10.4625 4.53747C9.976 4.04811 9.39754 3.65977 8.76041 3.39477C8.12328 3.12977 7.44005 2.99335 6.75 2.99335C6.05996 2.99335 5.37673 3.12977 4.7396 3.39477C4.10247 3.65977 3.52401 4.04811 3.0375 4.53747C2.54934 5.02452 2.16222 5.60322 1.89837 6.24033C1.63452 6.87743 1.49914 7.56039 1.5 8.24997C1.5 13.5 6.75 17.4525 12 21Z"
            fill="#222222"
            fill-opacity="0.5"
            stroke="white"
            stroke-width="1.5"
          />
        </svg>
      </div>
    </div>
    <div class="newest_content">
      <div class="newest_box d-flex align-center">
        <div class="newest_title fz-15 fw-400">
          {{ text }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.popular_img {
  height: 152px;
  min-width: 152px;
  min-height: 152px;
  width: 168px;
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
