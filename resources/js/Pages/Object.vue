<script>
import {onMounted, ref} from "vue";
import Swiper from "swiper";
import {Pagination} from "swiper/modules";
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
        title: String
    },
    setup() {
        const range = ref({
            start: new Date(),
            end: new Date(),
        });
        const disabledDates = ref([
            {
                start: null,
                end: new Date(new Date().setDate(new Date().getDate() - 1)),
            },
        ]);
        const attrs = ref([]);


        onMounted(() => {
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
        });

        return {
            range,
            attrs,
            disabledDates,
        };
    },
};
</script>

<template>
    <Head :title="title"/>
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
                                        <rect width="17.5" height="20" fill="white"/>
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
                <div class="catalog_swiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <img src="/assets/images/object_1.png"/>
                        </div>
                        <div class="swiper-slide">
                            <img src="/assets/images/object_2.png"/>
                        </div>
                        <div class="swiper-slide">
                            <img src="/assets/images/object_3.png"/>
                        </div>
                    </div>
                    <div class="swiper-pagination catalog_pagination fz-14 fw-600"></div>
                </div>
            </div>

            <div class="container_without_space">
                <div class="catalog_object">
                    <div
                        class="catalog_object_title fz-20 fw-700 d-flex align-center justify-between"
                    >
                        Бангато (Пхукет, Таиланд)
                        <div class="fz-16 fw-600 nowrap">
                            10,000,000
                            <span class="tt fz-16 fw-400">THB</span>
                        </div>
                    </div>
                </div>

                <div class="catalog_about">
                    <div class="catalog_about_account d-flex align-center">
                        <div class="catalog_account_img">
                            <img src="/assets/catalog_account.png"/>
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

                <div class="catalog_preference">
                    <div class="catalog_preference_item">
                        <div class="catalog_preference_img" style="margin-right: 8px">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M17.8 19.2L16 11L19.5 7.5C21 6 21.5 4 21 3C20 2.5 18 3 16.5 4.5L13 8L4.8 6.2C4.3 6.1 3.9 6.3 3.7 6.7L3.4 7.2C3.2 7.7 3.3 8.2 3.7 8.5L9 12L7 15H4L3 16L6 18L8 21L9 20V17L12 15L15.5 20.3C15.8 20.7 16.3 20.8 16.8 20.6L17.3 20.4C17.7 20.1 17.9 19.7 17.8 19.2Z"
                                    stroke="#222222"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </div>
                        <div class="catalog_preference_content">
                            <div class="catalog_preference_title fz-20 fw-500">Аэропорт</div>
                            <div class="catalog_preference_subtitle fz-14 fw-400">
                                Дорога от аэропорта занимает 20 минут
                            </div>
                        </div>
                    </div>
                    <div class="catalog_preference_item">
                        <div class="catalog_preference_img" style="margin-right: 8px">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M4 3V9.3C4 10.29 4.8 11.1 5.77778 11.1H9.33333C9.80483 11.1 10.257 10.9104 10.5904 10.5728C10.9238 10.2352 11.1111 9.77739 11.1111 9.3V3M7.55556 3V21M20 14.7V3C18.8213 3 17.6908 3.47411 16.8573 4.31802C16.0238 5.16193 15.5556 6.30653 15.5556 7.5V12.9C15.5556 13.89 16.3556 14.7 17.3333 14.7H20ZM20 14.7V21"
                                    stroke="#222222"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </div>
                        <div class="catalog_preference_content">
                            <div class="catalog_preference_title fz-20 fw-500">Питание</div>
                            <div class="catalog_preference_subtitle fz-14 fw-400">
                                Бесплатный завтрак из обширного меню
                            </div>
                        </div>
                    </div>
                    <div class="catalog_preference_item">
                        <div class="catalog_preference_img" style="margin-right: 8px">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M13 3.99995H16C16.5304 3.99995 17.0391 4.21067 17.4142 4.58574C17.7893 4.96081 18 5.46952 18 5.99995V20M2 20H5M5 20L11.758 21.689C11.9054 21.7257 12.0592 21.7284 12.2078 21.6968C12.3564 21.6653 12.4958 21.6003 12.6155 21.5068C12.7352 21.4133 12.8321 21.2938 12.8987 21.1573C12.9653 21.0207 13 20.8708 13 20.719V4.56195C12.9998 4.25813 12.9304 3.95735 12.797 3.68437C12.6637 3.41138 12.4699 3.17237 12.2303 2.98547C11.9908 2.79857 11.7118 2.66869 11.4146 2.60571C11.1174 2.54272 10.8098 2.54828 10.515 2.62195L6.515 3.62195C6.08232 3.73011 5.69821 3.97978 5.42371 4.33128C5.1492 4.68279 5.00007 5.11596 5 5.56195V20ZM13 20H22M10 12V12.01"
                                    stroke="#222222"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </div>
                        <div class="catalog_preference_content">
                            <div class="catalog_preference_title fz-20 fw-500">Прибытие</div>
                            <div class="catalog_preference_subtitle fz-14 fw-400">
                                Вы заселитесь самостоятельно, ключи в мини-сейфе
                            </div>
                        </div>
                    </div>
                    <div class="catalog_preference_item">
                        <div class="catalog_preference_img" style="margin-right: 8px">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M22 21H21C19.549 21 18.278 20.141 18 19C17.722 20.141 16.451 21 15 21C13.549 21 12.278 20.141 12 19C11.722 20.141 10.451 21 9 21C7.549 21 6.278 20.141 6 19C5.722 20.141 4.451 21 3 21H2M19 3L18.735 3.088C17.415 3.528 16.755 3.748 16.378 4.272C16.001 4.796 16 5.492 16 6.883V17M11 3L10.735 3.088C9.415 3.528 8.755 3.748 8.378 4.272C8.001 4.796 8 5.492 8 6.883V17M8 7H16M8 11H16M8 15H16"
                                    stroke="#222222"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </div>
                        <div class="catalog_preference_content">
                            <div class="catalog_preference_title fz-20 fw-500">Бассейн</div>
                            <div class="catalog_preference_subtitle fz-14 fw-400">
                                Круглосуточный доступ к личному бассейну
                            </div>
                        </div>
                    </div>
                    <div class="catalog_preference_item">
                        <div class="catalog_preference_img" style="margin-right: 8px">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M9 12L11 14L15 9.99996M20 13C20 18 16.5 20.5 12.34 21.95C12.1222 22.0238 11.8855 22.0202 11.67 21.94C7.5 20.5 4 18 4 13V5.99996C4 5.73474 4.10536 5.48039 4.29289 5.29285C4.48043 5.10532 4.73478 4.99996 5 4.99996C7 4.99996 9.5 3.79996 11.24 2.27996C11.4519 2.09896 11.7214 1.99951 12 1.99951C12.2786 1.99951 12.5481 2.09896 12.76 2.27996C14.51 3.80996 17 4.99996 19 4.99996C19.2652 4.99996 19.5196 5.10532 19.7071 5.29285C19.8946 5.48039 20 5.73474 20 5.99996V13Z"
                                    stroke="#222222"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </div>
                        <div class="catalog_preference_content">
                            <div class="catalog_preference_title fz-20 fw-500">
                                Безопасность
                            </div>
                            <div class="catalog_preference_subtitle fz-14 fw-400">
                                Закрытая территория, круглосуточная охрана
                            </div>
                        </div>
                    </div>
                    <div class="catalog_preference_item">
                        <div class="catalog_preference_img" style="margin-right: 8px">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M21 20.9999H20.3077C19.5732 20.9999 18.8689 20.7072 18.3496 20.1862C17.8302 19.6652 17.5385 18.9586 17.5385 18.2218C17.5385 18.9586 17.2467 19.6652 16.7274 20.1862C16.208 20.7072 15.5037 20.9999 14.7692 20.9999C14.0348 20.9999 13.3304 20.7072 12.8111 20.1862C12.2918 19.6652 12 18.9586 12 18.2218C12 18.9586 11.7082 19.6652 11.1889 20.1862C10.6696 20.7072 9.96522 20.9999 9.23077 20.9999C8.49632 20.9999 7.79196 20.7072 7.27263 20.1862C6.7533 19.6652 6.46154 18.9586 6.46154 18.2218C6.46154 18.9586 6.16978 19.6652 5.65045 20.1862C5.13112 20.7072 4.42675 20.9999 3.69231 20.9999H3M16.1538 15.4437C15.4407 14.5739 14.5444 13.8734 13.5294 13.3925C12.5143 12.9115 11.4057 12.6621 10.2831 12.6621C9.16049 12.6621 8.05184 12.9115 7.03677 13.3925C6.02171 13.8734 5.12542 14.5739 4.41231 15.4437"
                                    stroke="#222222"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M11.3078 12.7353C11.3909 9.59603 12.3463 6.7346 14.4232 5.70671M10.2832 3.06753C11.1808 2.89023 12.1119 3.06511 12.8847 3.55614C13.6576 4.04716 14.2132 4.8169 14.437 5.70671"
                                    stroke="#222222"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M19.4905 6.2211C18.8533 5.53078 17.9867 5.09762 17.0536 5.00299C16.1204 4.90835 15.185 5.15875 14.4229 5.70715"
                                    stroke="#222222"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M9.3418 7.19327C9.88436 6.39138 10.6886 5.80429 11.616 5.53302C12.5435 5.26175 13.5362 5.32327 14.4233 5.707C15.3132 5.92532 16.0836 6.48205 16.5719 7.2596C17.0602 8.03716 17.2281 8.97466 17.0403 9.87412"
                                    stroke="#222222"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </div>
                        <div class="catalog_preference_content">
                            <div class="catalog_preference_title fz-20 fw-500">Пляж</div>
                            <div class="catalog_preference_subtitle fz-14 fw-400">
                                Собственный выход на пляж
                            </div>
                        </div>
                    </div>
                    <div class="catalog_preference_item">
                        <div class="catalog_preference_img" style="margin-right: 8px">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M4 13C3.46957 13 2.96086 13.2107 2.58579 13.5858C2.21071 13.9609 2 14.4696 2 15V16C2 16.2652 2.10536 16.5196 2.29289 16.7071C2.48043 16.8946 2.73478 17 3 17H21C21.2652 17 21.5196 16.8946 21.7071 16.7071C21.8946 16.5196 22 16.2652 22 16V15C22 14.4696 21.7893 13.9609 21.4142 13.5858C21.0391 13.2107 20.5304 13 20 13M4 13H20M4 13C4 10.8783 4.84285 8.84344 6.34315 7.34315C7.84344 5.84285 9.87827 5 12 5M20 13C20 10.8783 19.1571 8.84344 17.6569 7.34315C16.1566 5.84285 14.1217 5 12 5M12 5V2M10 2H14"
                                    stroke="#222222"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </div>
                        <div class="catalog_preference_content">
                            <div class="catalog_preference_title fz-20 fw-500">
                                Обслуживание номеров
                            </div>
                            <div class="catalog_preference_subtitle fz-14 fw-400">
                                Включает доставку еды и напитков в номер, а также услуги по
                                уборке
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container_without_space">
                <div class="line"></div>
            </div>
            <AppObject title="Планировка" swiper="swiper_plan"/>
            <div class="container_without_space">
                <div class="line"></div>
            </div>
            <AppObject title="Где вы будете спать" swiper="swiper_sleep"/>

            <div class="container_without_space">
                <div class="line"></div>
                <div class="catalog_comfort">
                    <div class="catalog_comfort_title fz-20 fw-700">Удобства</div>
                    <div class="catalog_comfort_wrapper">
                        <div class="catalog_comfort_item">
                            <div class="catalog_comfort_img">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M12 4H5.77778C5.30628 4 4.8541 4.1873 4.5207 4.5207C4.1873 4.8541 4 5.30628 4 5.77778V18.2222C4 18.6937 4.1873 19.1459 4.5207 19.4793C4.8541 19.8127 5.30628 20 5.77778 20H18.2222C18.6937 20 19.1459 19.8127 19.4793 19.4793C19.8127 19.1459 20 18.6937 20 18.2222V12M13.7778 14.6667H9.33333M9.33333 14.6667V10.2222M9.33333 14.6667L20 4M15.5556 4H20M20 4V8.44444"
                                        stroke="#222222"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </div>
                            <div class="catalog_comfort_title fz-15 fw-500">320 м²</div>
                        </div>
                        <div class="catalog_comfort_item">
                            <div class="catalog_comfort_img">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M12 19.9999H12.01M2 8.8199C4.75011 6.36013 8.31034 5.00024 12 5.00024C15.6897 5.00024 19.2499 6.36013 22 8.8199M5 12.8589C6.86929 11.0266 9.38247 10.0003 12 10.0003C14.6175 10.0003 17.1307 11.0266 19 12.8589M8.5 16.4289C9.43464 15.5128 10.6912 14.9996 12 14.9996C13.3088 14.9996 14.5654 15.5128 15.5 16.4289"
                                        stroke="#222222"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </div>
                            <div class="catalog_comfort_title fz-15 fw-500">Wi-Fi</div>
                        </div>
                        <div class="catalog_comfort_item">
                            <div class="catalog_comfort_img">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M2 4V20M2 8H20C20.5304 8 21.0391 8.21071 21.4142 8.58579C21.7893 8.96086 22 9.46957 22 10V20M2 17H22M6 8V17"
                                        stroke="#222222"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </div>
                            <div class="catalog_comfort_title fz-15 fw-500">3 спальни</div>
                        </div>
                        <div class="catalog_comfort_item">
                            <div class="catalog_comfort_img">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M7 21H17M4 3H20C21.1046 3 22 3.89543 22 5V15C22 16.1046 21.1046 17 20 17H4C2.89543 17 2 16.1046 2 15V5C2 3.89543 2.89543 3 4 3Z"
                                        stroke="#222222"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </div>
                            <div class="catalog_comfort_title fz-15 fw-500">Телевизор</div>
                        </div>
                        <div class="catalog_comfort_item">
                            <div class="catalog_comfort_img">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M9 6L6.5 3.5C6.24356 3.21069 5.88531 3.03157 5.5 3C4.683 3 4 3.683 4 4.5V17C4 17.5304 4.21071 18.0391 4.58579 18.4142C4.96086 18.7893 5.46957 19 6 19H18C18.5304 19 19.0391 18.7893 19.4142 18.4142C19.7893 18.0391 20 17.5304 20 17V12M10 5L8 7M2 12H22M7 19V21M17 19V21"
                                        stroke="#222222"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </div>
                            <div class="catalog_comfort_title fz-15 fw-500">3 ванны</div>
                        </div>
                        <div class="catalog_comfort_item">
                            <div class="catalog_comfort_img">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M3 6H6M17 6H17.01M12 18C14.7614 18 17 15.7614 17 13C17 10.2386 14.7614 8 12 8M12 18C9.23858 18 7 15.7614 7 13C7 10.2386 9.23858 8 12 8M12 18C12.663 18 13.2989 17.7366 13.7678 17.2678C14.2366 16.7989 14.5 16.163 14.5 15.5C14.5 14.837 14.2366 14.2011 13.7678 13.7322C13.2989 13.2634 12.663 13 12 13C11.337 13 10.7011 12.7366 10.2322 12.2678C9.76339 11.7989 9.5 11.163 9.5 10.5C9.5 9.83696 9.76339 9.20107 10.2322 8.73223C10.7011 8.26339 11.337 8 12 8M5 2H19C20.1046 2 21 2.89543 21 4V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V4C3 2.89543 3.89543 2 5 2Z"
                                        stroke="#222222"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </div>
                            <div class="catalog_comfort_title fz-15 fw-500">
                                Стиральная машина
                            </div>
                        </div>
                        <div class="catalog_comfort_item">
                            <div class="catalog_comfort_img">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M4 3V9.3C4 10.29 4.8 11.1 5.77778 11.1H9.33333C9.80483 11.1 10.257 10.9104 10.5904 10.5728C10.9238 10.2352 11.1111 9.77739 11.1111 9.3V3M7.55556 3V21M20 14.7V3C18.8213 3 17.6908 3.47411 16.8573 4.31802C16.0238 5.16193 15.5556 6.30653 15.5556 7.5V12.9C15.5556 13.89 16.3556 14.7 17.3333 14.7H20ZM20 14.7V21"
                                        stroke="#222222"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </div>
                            <div class="catalog_comfort_title fz-15 fw-500">Кухня</div>
                        </div>
                        <div class="catalog_comfort_item">
                            <div class="catalog_comfort_img">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M22 21H21C19.549 21 18.278 20.141 18 19C17.722 20.141 16.451 21 15 21C13.549 21 12.278 20.141 12 19C11.722 20.141 10.451 21 9 21C7.549 21 6.278 20.141 6 19C5.722 20.141 4.451 21 3 21H2M19 3L18.735 3.088C17.415 3.528 16.755 3.748 16.378 4.272C16.001 4.796 16 5.492 16 6.883V17M11 3L10.735 3.088C9.415 3.528 8.755 3.748 8.378 4.272C8.001 4.796 8 5.492 8 6.883V17M8 7H16M8 11H16M8 15H16"
                                        stroke="#222222"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </div>
                            <div class="catalog_comfort_title fz-15 fw-500">Бассейн</div>
                        </div>
                        <div class="catalog_comfort_item">
                            <div class="catalog_comfort_img">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M9 17V7H13C13.7956 7 14.5587 7.31607 15.1213 7.87868C15.6839 8.44129 16 9.20435 16 10C16 10.7956 15.6839 11.5587 15.1213 12.1213C14.5587 12.6839 13.7956 13 13 13H9M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z"
                                        stroke="#222222"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </div>
                            <div class="catalog_comfort_title fz-15 fw-500">Парковка</div>
                        </div>
                    </div>
                    <div class="catalog_comfort_btn fz-16 fw-500">
                        Показать все удобства
                    </div>
                </div>

                <div class="container_without_space">
                    <div class="line"></div>
                </div>

                <div class="object_calendar">
                    <VDatePicker
                        v-model.range="range"
                        mode="date"
                        locale="ru-RU"
                        :attributes="attrs"
                        :disabled-dates="disabledDates"
                        :columns="2"
                        style="width: 100%"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
