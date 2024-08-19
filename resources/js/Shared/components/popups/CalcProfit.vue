<script>
import { ref } from 'vue';
export default {
    setup(){
        const activeTypeApartment = ref(0);
        const activeTypeOwner = ref(0);
        const activeTypePay = ref(0);
        const activeTypeYears = ref(0);

        function selectType(type, event){
            if(event == 'object'){
                activeTypeApartment.value = type;
            }
            if(event == 'owner'){
                activeTypeOwner.value = type;
            }
            if(event == 'pay'){
                activeTypePay.value = type;
            }
            if(event == 'years'){
                activeTypeYears.value = type;
            }
        }

        return{
            activeTypeApartment,
            activeTypeOwner,
            activeTypePay,
            activeTypeYears,
            selectType
        }
    }
}
</script>

<template>
    <div class="popup_wrapper">
        <div class="popup_header d-flex align-center justify-between">
            <div class="popup_title fz-24 fw-700 d-flex align-center">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <g clip-path="url(#clip0_150_1399)">
                        <path d="M3 0C1.34375 0 0 1.34375 0 3V11C0 12.6562 1.34375 14 3 14H11C12.6562 14 14 12.6562 14 11V3C14 1.34375 12.6562 0 11 0H3ZM21 0C19.3438 0 18 1.34375 18 3V11C18 12.6562 19.3438 14 21 14H29C30.6562 14 32 12.6562 32 11V3C32 1.34375 30.6562 0 29 0H21ZM0 21V29C0 30.6562 1.34375 32 3 32H11C12.6562 32 14 30.6562 14 29V21C14 19.3438 12.6562 18 11 18H3C1.34375 18 0 19.3438 0 21ZM26 4V6H28C28.55 6 29 6.45 29 7C29 7.55 28.55 8 28 8H26V10C26 10.55 25.55 11 25 11C24.45 11 24 10.55 24 10V8H22C21.45 8 21 7.55 21 7C21 6.45 21.45 6 22 6H24V4C24 3.45 24.45 3 25 3C25.55 3 26 3.45 26 4ZM4 6H10C10.55 6 11 6.45 11 7C11 7.55 10.55 8 10 8H4C3.45 8 3 7.55 3 7C3 6.45 3.45 6 4 6ZM5.20625 21.7938L7 23.5875L8.79375 21.7938C9.18125 21.4062 9.81875 21.4062 10.2063 21.7938C10.5938 22.1813 10.5938 22.8187 10.2063 23.2062L8.4125 25L10.2063 26.7938C10.5938 27.1813 10.5938 27.8187 10.2063 28.2062C9.81875 28.5938 9.18125 28.5938 8.79375 28.2062L7 26.4125L5.20625 28.2062C4.81875 28.5938 4.18125 28.5938 3.79375 28.2062C3.40625 27.8187 3.40625 27.1813 3.79375 26.7938L5.5875 25L3.79375 23.2062C3.40625 22.8187 3.40625 22.1813 3.79375 21.7938C4.18125 21.4062 4.81875 21.4062 5.20625 21.7938Z" fill="#71A2A3"/>
                        <path d="M18 21C18 19.3438 19.3438 18 21 18H29C30.6562 18 32 19.3438 32 21V29C32 30.6562 30.6562 32 29 32H21C19.3438 32 18 30.6562 18 29V21ZM21 23C21 23.55 21.45 24 22 24H28C28.55 24 29 23.55 29 23C29 22.45 28.55 22 28 22H22C21.45 22 21 22.45 21 23ZM21 27C21 27.55 21.45 28 22 28H28C28.55 28 29 27.55 29 27C29 26.45 28.55 26 28 26H22C21.45 26 21 26.45 21 27Z" fill="#222222"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_150_1399">
                          <rect width="32" height="32" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                </span>
                Калькулятор доходности
            </div>
            <div class="popup_close">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M13 1L1 13M1 1L13 13" stroke="#222222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>

        <div class="popup_main">
            <div class="popup_main_box">
                <div class="popup_main_title tt fz-12 fw-700">
                    Тип недвижимости
                </div>
                <div class="popup_main_form">
                    <div class="popup_type_contact">
                        <div class="popup_type" @click="selectType(0, 'object')" :class="{active: activeTypeApartment == 0}">Первичка</div>
                        <div class="popup_type" @click="selectType(1, 'object')" :class="{active: activeTypeApartment == 1}">Вторичка</div>
                    </div>
                </div>
            </div>
            <div class="popup_main_box">
                <div class="popup_main_title d-flex align-center tt fz-12 fw-700">
                    Площадь <span class="ml-4 popup_hint fz-16 fw-500" v-tippy.top="'Площадь'">?</span>
                </div>
                <div class="popup_main_form">
                    <div class="popup_main_input">
                        <input class="fz-16 fw-400" type="text" placeholder="120">
                        <div class="popup_metrics fz-16 fw-500">
                            m²
                        </div>
                    </div>
                </div>
            </div>
            <div class="popup_main_box">
                <div class="popup_main_title  d-flex align-center tt fz-12 fw-700">
                    Стоимость за 1 кв. м <span class="ml-4 popup_hint fz-16 fw-500" v-tippy.top="'Стоимость за 1 кв. м'">?</span>
                </div>
                <div class="popup_main_form">
                    <div class="popup_main_input">
                        <input class="fz-16 fw-400" type="text" placeholder="10000">
                        <div class="popup_metrics fz-16 fw-500">
                           THB
                        </div>
                    </div>
                </div>
            </div>
            <div class="popup_main_box">
                <div class="popup_main_title tt fz-12 fw-700">
                    Собственность
                </div>
                <div class="popup_main_form">
                    <div class="popup_type_contact">
                        <div class="popup_type" @click="selectType(0, 'owner')" :class="{active: activeTypeOwner == 0}">Лизхолд</div>
                        <div class="popup_type" @click="selectType(1, 'owner')" :class="{active: activeTypeOwner == 1}">Фрихолд</div>
                    </div>
                </div>
            </div>
            <div class="popup_main_box">
                <div class="popup_main_title d-flex align-center tt fz-12 fw-700">
                    Налог с прибыли <span class="ml-4 popup_hint fz-16 fw-500" v-tippy.top="'Налог с прибыли'">?</span>
                </div>
                <div class="popup_main_form">
                    <div class="popup_main_input">
                        <input class="fz-16 fw-400" type="text" placeholder="5">
                        <div class="popup_metrics fz-16 fw-500">
                            %
                        </div>
                    </div>
                </div>
            </div>
            <div class="popup_main_box">
                <div class="popup_main_title tt fz-12 fw-700">
                    Мебель
                </div>
                <div class="popup_main_form">
                    <div class="popup_type_contact">
                        <div class="popup_type" @click="selectType(0, 'pay')" :class="{active: activeTypePay == 0}">Бесплатно</div>
                        <div class="popup_type" @click="selectType(1, 'pay')" :class="{active: activeTypePay == 1}">Платно</div>
                    </div>
                </div>
            </div>
            <div class="popup_main_box">
                <div class="popup_main_title d-flex align-center tt fz-12 fw-700">
                    Налог за регистрацию <span class="ml-4 popup_hint fz-16 fw-500" v-tippy.top="'Налог за регистрацию'">?</span>
                </div>
                <div class="popup_main_form">
                    <div class="popup_main_input">
                        <input class="fz-16 fw-400" type="text" placeholder="1.1">
                        <div class="popup_metrics fz-16 fw-500">
                            %
                        </div>
                    </div>
                </div>
            </div>
            <div class="popup_main_box">
                <div class="popup_main_title tt fz-12 fw-700">
                    Количество лет владения
                </div>
                <div class="popup_main_form">
                    <div class="popup_type_contact">
                        <div class="popup_type" @click="selectType(0, 'years')" :class="{active: activeTypeYears == 0}">До 5 лет</div>
                        <div class="popup_type" @click="selectType(1, 'years')" :class="{active: activeTypeYears == 1}">От 5 и выше</div>
                    </div>
                </div>
            </div>
            <div class="popup_main_box">
                <div class="popup_main_title d-flex align-center tt fz-12 fw-700">
                    Обслуживание территории <span class="ml-4 popup_hint fz-16 fw-500" v-tippy.top="'Обслуживание территории'">?</span>
                </div>
                <div class="popup_main_form">
                    <div class="popup_main_input">
                        <input class="fz-16 fw-400" type="text" placeholder="1,000">
                        <div class="popup_metrics fz-16 fw-500">
                            THB
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="popup_footer">
            <div class="popup_send fz-16 fw-600">
                Применить
            </div>
        </div>
    </div>
</template>
