<script>
import { onMounted } from "vue";
import Swiper from "swiper";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import AppObject from "../Shared/components/AppObject.vue";
import { Fancybox } from "@fancyapps/ui";
import { Link } from '@inertiajs/vue3';
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default {
  components: {
    AppObject,
    Fancybox,
    Link
  },
  setup() {

    function initSwiper(){
      new Swiper(".catalog_swiper", {
        modules: [Pagination],
        direction: "horizontal",
        slidesPerView: 1,
        pagination: {
          el: ".catalog_pagination",
          type: "fraction",
          clickable: true,
        },
      });
    }

    function initFancy(){
      Fancybox.bind("[data-fancybox='gallery']", {
      });
      Fancybox.bind("[data-fancybox='gallery_mob']", {
      });
    }

    function openGallery(){
      Fancybox.fromSelector('[data-fancybox="gallery"]');
    }

    onMounted(() => {
      initSwiper();
      initFancy();
    });

    return{
      openGallery
    }
  }
};
</script>

<template>
  <div class="main_wrapper_with_breadcrumbs">
    <div class="breadcrumbs d-flex align-center">
      <Link href="/" class="breadcrumbs_item fz-14 fw-600">Главная</Link>
      <div class="breadcrumbs_delimiter">/</div>
      <div class="breadcrumbs_item fz-14 fw-600">Виллы</div>
      <div class="breadcrumbs_delimiter">/</div>
      <div class="breadcrumbs_item fz-14 fw-600">PROXIMA Phuket Villas</div>
    </div>
    <div class="main_wrapper">
      <div class="container">
        <div class="catalog_actions d-flex align-center justify-between">
          <div class="catalog_actions_box d-flex align-center">
            <Link href="/" class="catalog_back">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
              >
                <g clip-path="url(#clip0_2029_519)">
                  <path
                    d="M0.289062 10.6797C0.105469 10.5 0 10.2578 0 10C0 9.74219 0.105469 9.50001 0.289062 9.32032L7.16406 2.75782C7.53906 2.39844 8.13281 2.41407 8.48828 2.78907C8.84375 3.16407 8.83203 3.75782 8.45703 4.11329L3.27734 9.06251H16.5625C17.082 9.06251 17.5 9.48047 17.5 10C17.5 10.5195 17.082 10.9375 16.5625 10.9375H3.27734L8.46094 15.8828C8.83594 16.2422 8.84766 16.832 8.49219 17.207C8.13672 17.582 7.54297 17.5938 7.16797 17.2383L0.292969 10.6758L0.289062 10.6797Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2029_519">
                    <rect width="17.5" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Link>
            <div class="catalog_title fz-24 fw-700">Тип А-1/2</div>
          </div>
          <div class="catalog_actions_box d-flex align-center">
            <div class="catalog_share">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="22"
                viewBox="0 0 20 22"
                fill="none"
              >
                <path
                  d="M6.59 12.51L13.42 16.49M13.41 5.51L6.59 9.49M19 4C19 5.65685 17.6569 7 16 7C14.3431 7 13 5.65685 13 4C13 2.34315 14.3431 1 16 1C17.6569 1 19 2.34315 19 4ZM7 11C7 12.6569 5.65685 14 4 14C2.34315 14 1 12.6569 1 11C1 9.34315 2.34315 8 4 8C5.65685 8 7 9.34315 7 11ZM19 18C19 19.6569 17.6569 21 16 21C14.3431 21 13 19.6569 13 18C13 16.3431 14.3431 15 16 15C17.6569 15 19 16.3431 19 18Z"
                  stroke="#222222"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div class="catalog_heart d-flex align-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M19 14C20.49 12.54 22 10.79 22 8.5C22 7.04131 21.4205 5.64236 20.3891 4.61091C19.3576 3.57946 17.9587 3 16.5 3C14.74 3 13.5 3.5 12 5C10.5 3.5 9.26 3 7.5 3C6.04131 3 4.64236 3.57946 3.61091 4.61091C2.57946 5.64236 2 7.04131 2 8.5C2 10.8 3.5 12.55 5 14L12 21L19 14Z"
                  fill="#FF005C"
                  stroke="#FF005C"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              19
            </div>
          </div>
        </div>
      </div>

      <div class="container_without_space">

        <div class="catalog_gallery">
          <a class="catalog_gallery_big" href="/assets/images/desktop/object_big.png" data-fancybox="gallery">
            <img src="/assets/images/desktop/object_big.png"/>
          </a>
          <div class="catalog_gallery_box">
            <a class="catalog_gallery_item" href="/assets/images/object_1.png" data-fancybox="gallery">
              <img src="/assets/images/object_1.png"/>
            </a>
            <a class="catalog_gallery_item" href="/assets/images/object_2.png" data-fancybox="gallery">
              <img src="/assets/images/object_2.png"/>
            </a>
            <a class="catalog_gallery_item" href="/assets/images/object_1.png" data-fancybox="gallery">
              <img src="/assets/images/object_1.png"/>
            </a>
            <a class="catalog_gallery_item" href="/assets/images/object_3.png" data-fancybox="gallery">
              <img src="/assets/images/object_3.png"/>
            </a>
          </div>
          <div class="btn_white btn_view_all fz-16 fw-500" @click="openGallery">
            Показать все фото
          </div>
        </div>

        <div class="catalog_swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <a href="/assets/images/object_1.png" data-fancybox="gallery_mob">
                <img src="/assets/images/object_1.png" />
              </a>
            </div>
            <div class="swiper-slide">
              <a href="/assets/images/object_2.png" data-fancybox="gallery_mob">
                <img src="/assets/images/object_2.png" />
              </a>
            </div>
            <div class="swiper-slide">
              <a href="/assets/images/object_3.png" data-fancybox="gallery_mob">
                <img src="/assets/images/object_3.png" />
              </a>
            </div>
          </div>
          <div class="swiper-pagination catalog_pagination fz-14 fw-600"></div>
        </div>
      </div>

      <div class="container_without_space">
        <div class="catalog_object">
          <div class="catalog_object_title fz-20 fw-700">
            Бангато (Пхукет, Таиланд)
          </div>
          <div class="catalog_tags">
            <div class="catalog_tags_item">Вилла</div>
            <div class="catalog_tags_delimiter">•</div>
            <div class="catalog_tags_item">Бассейн</div>
            <div class="catalog_tags_delimiter">•</div>
            <div class="catalog_tags_item">Выход к пляжу</div>
            <div class="catalog_tags_delimiter">•</div>
            <div class="catalog_tags_item">Океан</div>
            <div class="catalog_tags_delimiter">•</div>
            <div class="catalog_tags_item">Всё включено</div>
            <div class="catalog_tags_delimiter">•</div>
            <div class="catalog_tags_item">Завтрак</div>
            <div class="catalog_tags_delimiter">•</div>
            <div class="catalog_tags_item">Обслуживание номеров</div>
          </div>
        </div>

        <div class="catalog_about">
          <div class="catalog_about_account d-flex align-center">
            <div class="catalog_account_img">
              <img src="/assets/catalog_account.png" />
            </div>
            <div class="catalog_account_info">
              <div class="catalog_account_info_name fz-16 fw-700">Metrics</div>
              <div class="catalog_account_info_subtitle fz-14 fw-400">
                7 лет в сфере
              </div>
            </div>
          </div>
          <div class="catalog_about_descr fz-12 fw-400">
            Расположение нашей виллы тихое, и вы можете наслаждаться прекрасным
            видом на горы с балкона главной спальни.Вы можете насладиться
            естественным прохладным бризом на берегу моря.Семейное барбекю у
            частного бассейнаМного места для приготовления пищи с достаточным
            количеством еды для целой семьи. Кухня также оборудована духовкой,
            где вы сможете приготовить вкусный ужин для своей семьи и друзей в
            любое время.Район имеет круглосуточную охрану, и вы можете найти их,
            независимо от ваших проблем. Это обеспечивает вам удобство и
            безопасность вашей поездки.
          </div>
        </div>

        <div class="catalog_same">
          <div class="catalog_same_title fz-20 fw-700">Объекты</div>
          <div class="catalog_same_row">
            <div class="catalog_same_row_title fz-16 fw-400">Трехкомнатные</div>
            <div class="catalog_same_row_wrapper d-flex align-center">
              <div class="catalog_same_row_item fz-12 fw-700">Тип А-1</div>
              <div class="catalog_same_row_item fz-12 fw-700">Тип А-2</div>
              <div class="catalog_same_row_item fz-12 fw-700">Тип А-3</div>
            </div>
          </div>
          <div class="catalog_same_row">
            <div class="catalog_same_row_title fz-16 fw-400">Пентхаусы</div>
            <div class="catalog_same_row_wrapper d-flex align-center">
              <div class="catalog_same_row_item fz-12 fw-700">Тип В-1</div>
              <div class="catalog_same_row_item fz-12 fw-700">Тип В-2</div>
            </div>
          </div>
        </div>
      </div>

      <div class="container_without_space">
        <div class="line"></div>
      </div>
      <AppObject title="Трехкомнатные" swiper="three_rooms"/>
      <div class="container_without_space">
        <div class="line"></div>
      </div>
      <AppObject title="Пентхаусы" swiper="penthouse"/>
    </div>
  </div>
</template>
