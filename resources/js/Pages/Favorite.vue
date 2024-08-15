<script>
import { Link } from '@inertiajs/vue3';
import AppObject from "../Shared/components/AppObject.vue";
export default {
    components: {
        Link,
        AppObject
    },
    setup() {


        return{

        }
    }
};
</script>

<template>
    <div class="main_wrapper_with_breadcrumbs">
        <div class="breadcrumbs d-flex align-center">
            <Link href="/" class="breadcrumbs_item fz-14 fw-600">Главная</Link>
            <div class="breadcrumbs_delimiter">/</div>
            <div class="breadcrumbs_item fz-14 fw-600">Новости</div>
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
                        <div class="catalog_title fz-24 fw-700">Понравилось</div>
                    </div>
                </div>
            </div>
           <div class="container news_wrapper">
               <Link :href="'/object/' + 1" class="popular_item">
                   <div class="newest_img">
                       <img src="/assets/images/object_1.png" />
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
               <Link :href="'/object/' + 2" class="popular_item">
                   <div class="newest_img">
                       <img src="/assets/images/object_2.png" />
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
               <Link :href="'/object/' + 3" class="popular_item">
                   <div class="newest_img">
                       <img src="/assets/images/object_3.png" />
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
               <Link :href="'/object/' + 4" class="popular_item">
                   <div class="newest_img">
                       <img src="/assets/images/object_1.png" />
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
               <Link :href="'/object/' + 5" class="popular_item">
                   <div class="newest_img">
                       <img src="/assets/images/object_2.png" />
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
            <div class="container_without_space">
                <div class="line"></div>
            </div>
            <AppObject title="На основе ваших пожеланий" swiper="prefer_rooms"/>
            <div class="container_without_space">
                <div class="line"></div>
            </div>
            <AppObject title="Похожие предложения" swiper="seems_rooms"/>
        </div>
    </div>
</template>
