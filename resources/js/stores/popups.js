import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useStatePopupUsers = defineStore('statePopupUsers', () => {
    const statePopupUsers = ref(true)

    function $activePopup(){
        statePopupUsers.value = true;
    }
    function $inactivePopup(){
        statePopupUsers.value = false;
    }

    return { statePopupUsers, $activePopup, $inactivePopup }
})
