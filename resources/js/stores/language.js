import { defineStore } from 'pinia'
import { langContent } from '../language.js';
export const useLanguage = defineStore('lang', {
    state: () => ({
        lang: 'RU',
        langContent: langContent['RU']
    }),
    actions: {
        changeLanguage(newLang) {
            this.lang = newLang;
        },
        changeLanguageContent(newLangContent) {
            this.langContent = newLangContent;
        }
    }
});
