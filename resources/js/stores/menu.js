import { defineStore } from 'pinia'

export const useMenu = defineStore('menu', {
    state: () => ({
        menu: false,
    }),
    actions: {
        toggleMenu(newLang) {
            this.lang = newLang;
        },
    }
});
