<script>
import {onMounted,} from "vue";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import AppObject from "../Shared/components/AppObject.vue";
import {Link, Head} from "@inertiajs/vue3";

export default {
    components: {
        AppObject,
        Link,
        Head
    },
    props: {
        id: Number,
        object: Object
    },
    setup() {
        onMounted(() => {
            new Swiper(".news_swiper", {
                direction: "horizontal",
                slidesPerView: 3,
                spaceBetween: 8,
                breakpoints: {
                    1040: {
                        slidesPerView: 4,
                    },
                    815: {
                        slidesPerView: 3.4,
                    },
                    700: {
                        slidesPerView: 3.1,
                    },
                    580: {
                        slidesPerView: 2.9,
                    },
                    445: {
                        slidesPerView: 2.4,
                    },
                    400: {
                        slidesPerView: 2.3
                    },
                    230: {
                        slidesPerView: 2.2
                    }
                }
            });
        });
        return {
        };
    },
};
</script>

<template>
    <Head :title="object.title"/>
    <div class="main_wrapper_with_breadcrumbs">
        <div class="breadcrumbs d-flex align-center">
            <Link href="/" class="breadcrumbs_item fz-14 fw-600">Главная</Link>
            <div class="breadcrumbs_delimiter">/</div>
            <div class="breadcrumbs_item fz-14 fw-600">Новость</div>
            <div class="breadcrumbs_delimiter">/</div>
            <div class="breadcrumbs_item fz-14 fw-600">{{object.title}}</div>
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
                                        <rect width="17.5" height="20" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </Link>
                        <div class="catalog_title fz-24 fw-700">{{ object.title }}</div>
                    </div>
                </div>
            </div>
            <div class="container_without_space">
                <div class="news_content">
                    <div class="news_date fz-14 fw-400">
                        24 июня 2024 г.
                    </div>
                    <div class="news_date_subtitle fz-18 fw-400">
                        Власти хотят стимулировать <br> зарубежные инвестиции.
                    </div>
                    <div class="news_img">
                        <img src="/assets/images/news_detail.png" alt="">
                    </div>
                    <div class="news_content_info">
                        Что случилось
                        Правительство Таиланда объявило о новых мерах, направленных на стимулирование экономики и привлечение иностранных инвестиций в сектор недвижимости. 
                        Министерству внутренних дел поручено разработать и реализовать подробные планы реализации новых правил. Ожидается, что парламент рассмотрит необходимые изменения в законодательстве.
                        Ключевые изменения
                        Продление срока действия прав собственности. Срок действия прав собственности на землю по Закону о правах собственности 2019 года может быть увеличен до 99 лет. Сейчас договор заключается на 30 лет с правом двукратного продления (до 90 лет).
                        Увеличение иностранной собственности на кондоминиумы. Разрешённый процент иностранной собственности на кондоминиумы будет увеличен с 49% до 75%. Сейчас застройщик может продать иностранцам в полную собственность не более 49% жилой площади в кондоминиуме
                        Ожидаемые преимущества
                        Представители бизнеса. Ассоциации недвижимости приветствовали новые меры, заявив, что они принесут пользу как тайским, так и иностранным инвесторам.
                        Некоторые эксперты. Выразили озабоченность тем, что увеличение иностранной собственности на кондоминиумы может привести к росту цен и сделать жильё менее доступным для тайцев.
                        В целом новые меры правительства Таиланда направлены на стимулирование экономики и привлечение иностранных инвестиций в сектор недвижимости.
                        Ожидается, что эти изменения окажут значительное влияние на рынок недвижимости страны.
                    </div>
                </div>
            </div>
            <div class="container_without_space">
                <div class="read_also">
                    <div class="read_also_content fz-16 fw-400">
                        Читайте также: <Link href="/" class="read_news fw-700">Процедура приобретения недвижимости в Таиланде</Link>
                    </div>
                </div>
            </div>
            <div class="container_without_space">
                <div class="line"></div>
            </div>
            <div class="container">
                <div class="news_swiper">
                    <div class="swiper-wrapper">

                        <div class="swiper-slide">
                            <div class="news_slide_wrapper">
                                <div class="news_slide_img">
                                    <img src="/assets/images/news1.png"/>
                                </div>
                                <div class="news_slide_container">
                                    <div class="news_slide_title fz-15 fw-400">
                                        Таиланд пересматривает закон о налоге на недвижимость
                                    </div>
                                    <div class="news_slide_box">
                                        <div class="news_slide_date fz-14 fw-400">
                                            23 июня 2024 г.
                                        </div>
                                        <Link href="/news/1" class="news_slide_btn">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="10"
                                                 viewBox="0 0 18 10" fill="none">
                                                <path d="M13.8 1L17 5M17 5L13.8 9M17 5H1" stroke="#222222"
                                                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="swiper-slide">
                            <div class="news_slide_wrapper">
                                <div class="news_slide_img">
                                    <img src="/assets/images/news2.png"/>
                                </div>
                                <div class="news_slide_container">
                                    <div class="news_slide_title fz-15 fw-400">
                                        Таиланд анонсировал меры по привлечению иностранных талантов
                                    </div>
                                    <div class="news_slide_box">
                                        <div class="news_slide_date fz-14 fw-400">
                                            21 июня 2024 г.
                                        </div>
                                        <Link href="/news/2" class="news_slide_btn">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="10"
                                                 viewBox="0 0 18 10" fill="none">
                                                <path d="M13.8 1L17 5M17 5L13.8 9M17 5H1" stroke="#222222"
                                                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="swiper-slide">
                            <div class="news_slide_wrapper">
                                <div class="news_slide_img">
                                    <img src="/assets/images/news3.png"/>
                                </div>
                                <div class="news_slide_container">
                                    <div class="news_slide_title fz-15 fw-400">
                                        В Таиланде стали продавать меньше недвижимости. Это может помочь иностранцам
                                    </div>
                                    <div class="news_slide_box">
                                        <div class="news_slide_date fz-14 fw-400">
                                            16 июня 2024 г.
                                        </div>
                                        <Link href="/news/3" class="news_slide_btn">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="10"
                                                 viewBox="0 0 18 10" fill="none">
                                                <path d="M13.8 1L17 5M17 5L13.8 9M17 5H1" stroke="#222222"
                                                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="swiper-slide">
                            <div class="news_slide_wrapper">
                                <div class="news_slide_img">
                                    <img src="/assets/images/news4.png"/>
                                </div>
                                <div class="news_slide_container">
                                    <div class="news_slide_title fz-15 fw-400">
                                        Таиланд распахивает двери! Беспрецедентные визовые послабления для цифровых кочевников, студентов и пенсионеров
                                    </div>
                                    <div class="news_slide_box">
                                        <div class="news_slide_date fz-14 fw-400">
                                            10 июня 2024 г.
                                        </div>
                                        <Link href="/news/4" class="news_slide_btn">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="10"
                                                 viewBox="0 0 18 10" fill="none">
                                                <path d="M13.8 1L17 5M17 5L13.8 9M17 5H1" stroke="#222222"
                                                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="container_without_space">
                <div class="line"></div>
            </div>
            <AppObject title="Свежие объекты" swiper="swiper_newes_objects"/>

        </div>
    </div>
</template>
