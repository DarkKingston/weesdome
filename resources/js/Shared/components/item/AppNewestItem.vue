<script>
import { Link } from '@inertiajs/vue3'
export default {
    components:{
       Link
    },
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
    <Link :href="'/object/' + id" class="popular_item">
      <div class="newest_img">
        <img :src="image" />
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
        <div class="newest_box d-flex align-center justify-between">
          <div class="newest_title fz-15 fw-400">
            {{ text }}
          </div>
          <div class="newest_price fz-14 fw-600">
            1000000
            <span class="tt fw-400">thb</span>
          </div>
        </div>
        <div class="newest_params d-flex align-center justify-between">
          <div class="newest_params_wrapper d-flex align-center">
            <div class="newest_param_item fz-15 d-flex align-center">
            <span
            ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                class="d-flex align-center"
            >
                <path
                    d="M10 4H4.55556C4.143 4 3.74733 4.16389 3.45561 4.45561C3.16389 4.74733 3 5.143 3 5.55556V16.4444C3 16.857 3.16389 17.2527 3.45561 17.5444C3.74733 17.8361 4.143 18 4.55556 18H15.4444C15.857 18 16.2527 17.8361 16.5444 17.5444C16.8361 17.2527 17 16.857 17 16.4444V11M11.5556 13.3333H7.66667M7.66667 13.3333V9.44444M7.66667 13.3333L17 4M13.1111 4H17M17 4V7.88889"
                    stroke="#222222"
                    stroke-opacity="0.5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                /></svg
            ></span>
              46м²
            </div>
            <div class="newest_param_item fz-15 d-flex align-center">
            <span
            ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                class="d-flex align-center"
            >
                <path
                    d="M1 4V18M1 7.5H17.2C17.6774 7.5 18.1352 7.68437 18.4728 8.01256C18.8104 8.34075 19 8.78587 19 9.25V18M1 15.375H19M4.6 7.5V15.375"
                    stroke="#222222"
                    stroke-opacity="0.5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                /></svg
            ></span>
              x2
            </div>
            <div class="newest_param_item fz-15 d-flex align-center">
            <span
            ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                class="d-flex align-center"
            >
                <path
                    d="M7.3 4.66667L5.05 2.44444C4.8192 2.18728 4.49678 2.02806 4.15 2C3.4147 2 2.8 2.60711 2.8 3.33333V14.4444C2.8 14.9159 2.98964 15.3681 3.32721 15.7015C3.66477 16.0349 4.12261 16.2222 4.6 16.2222H15.4C15.8774 16.2222 16.3352 16.0349 16.6728 15.7015C17.0104 15.3681 17.2 14.9159 17.2 14.4444V10M8.2 3.77778L6.4 5.55556M1 10H19M5.5 16.2222V18M14.5 16.2222V18"
                    stroke="#222222"
                    stroke-opacity="0.5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                /></svg
            ></span>
              x2
            </div>
          </div>
          <div class="newest_more">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="10"
                viewBox="0 0 18 10"
                fill="none"
            >
              <path
                  d="M13.8 1L17 5M17 5L13.8 9M17 5H1"
                  stroke="#222222"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
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
