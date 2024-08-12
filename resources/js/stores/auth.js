import { defineStore } from 'pinia';
import { getCookie } from "../services/cookie.js";

export const useAuthStore = defineStore('auth', {
    state: () => ({
        /**
         * @todo de modificat in prod
         */
        // isAuthenticated: !!getCookie('userID'),
        isAuthenticated: true,
    }),
    actions: {
        login() {
            // Логика авторизации
            this.isAuthenticated = true;
        },
        logout() {
            // Логика выхода
            this.isAuthenticated = false;
        }
    }
});
