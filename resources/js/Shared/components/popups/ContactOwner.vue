<script>
import { ref } from 'vue';
export default {
    setup(){
        const activeTypeContact = ref(0);

        function selectType(type){
            activeTypeContact.value = type;
        }

        return{
            activeTypeContact,
            selectType
        }
    }
}
</script>

<template>
    <div class="popup_wrapper">
        <div class="popup_header d-flex align-center justify-between">
            <div class="popup_title fz-24 fw-700">
                Связь с собственником
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
                    ФИО
                </div>
                <div class="popup_main_form">
                    <div class="popup_main_input"><input class="fz-16 fw-400" type="text" placeholder="Фамилия"></div>
                    <div class="popup_main_input"><input class="fz-16 fw-400" type="text" placeholder="Имя"></div>
                    <div class="popup_main_input"><input class="fz-16 fw-400" type="text" placeholder="Отчество"></div>
                </div>
            </div>
            <div class="popup_main_box">
                <div class="popup_main_title tt fz-12 fw-700">
                    Электронная почта
                </div>
                <div class="popup_main_form">
                    <div class="popup_main_input"><input class="fz-16 fw-400" type="text" placeholder="weesdome@global.com"></div>
                </div>
            </div>
            <div class="popup_main_box">
                <div class="popup_main_title tt fz-12 fw-700">
                    Тип связи
                </div>
                <div class="popup_main_form">
                    <div class="popup_type_contact">
                        <div class="popup_type" @click="selectType(0)" :class="{active: activeTypeContact == 0}">Telegram</div>
                        <div class="popup_type" @click="selectType(1)" :class="{active: activeTypeContact == 1}">Instagram</div>
                        <div class="popup_type" @click="selectType(2)" :class="{active: activeTypeContact == 2}">Сообщения</div>
                    </div>
                </div>
            </div>
            <div class="popup_main_box">
                <div class="popup_main_title tt fz-12 fw-700">
                    Профиль для связи
                </div>
                <div class="popup_main_form" v-if="activeTypeContact != 2">
                    <div class="popup_main_input"><input class="fz-16 fw-400" type="text" placeholder="@профиль"></div>
                </div>
                <div class="popup_main_form" v-else>
                    <div class="popup_main_input"><input class="fz-16 fw-400" type="text" placeholder="Сообщение"></div>
                </div>
            </div>
        </div>

        <div class="popup_footer">
            <div class="popup_send fz-16 fw-600">
                Оставить заявку
            </div>
        </div>
    </div>
</template>
