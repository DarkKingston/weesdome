<script>
import { Link } from '@inertiajs/vue3';

export default {
    components: {
        Link
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
                        <div class="catalog_title fz-24 fw-700">Новости</div>
                    </div>
                </div>
            </div>
           <div class="container news_wrapper">
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
                           <Link href="/news/5" class="news_slide_btn">
                               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="10"
                                    viewBox="0 0 18 10" fill="none">
                                   <path d="M13.8 1L17 5M17 5L13.8 9M17 5H1" stroke="#222222"
                                         stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                               </svg>
                           </Link>
                       </div>
                   </div>
               </div>
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
                           <Link href="/news/6" class="news_slide_btn">
                               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="10"
                                    viewBox="0 0 18 10" fill="none">
                                   <path d="M13.8 1L17 5M17 5L13.8 9M17 5H1" stroke="#222222"
                                         stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                               </svg>
                           </Link>
                       </div>
                   </div>
               </div>
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
                           <Link href="/news/7" class="news_slide_btn">
                               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="10"
                                    viewBox="0 0 18 10" fill="none">
                                   <path d="M13.8 1L17 5M17 5L13.8 9M17 5H1" stroke="#222222"
                                         stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                               </svg>
                           </Link>
                       </div>
                   </div>
               </div>
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
                           <Link href="/news/8" class="news_slide_btn">
                               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="10"
                                    viewBox="0 0 18 10" fill="none">
                                   <path d="M13.8 1L17 5M17 5L13.8 9M17 5H1" stroke="#222222"
                                         stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                               </svg>
                           </Link>
                       </div>
                   </div>
               </div>
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
                           <Link href="/news/9" class="news_slide_btn">
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
</template>
