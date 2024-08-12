import { createInertiaApp } from '@inertiajs/vue3';
import createServer from '@inertiajs/vue3/server';
import { renderToString } from '@vue/server-renderer';
import { createSSRApp, h } from 'vue';
import vClickOutside from "click-outside-vue3";
import FontAwesomeIcon from "./plugins/font-awesome";
import Layout from './Shared/Layout.vue';
import { createPinia } from 'pinia';
import 'swiper/swiper-bundle.css';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';

// Инициализация прогресс-бара только на клиенте
if (typeof window !== 'undefined') {
    const { InertiaProgress } = require('@inertiajs/progress');

    InertiaProgress.init({
        delay: 250,
        color: '#7843E9',
        includeCSS: true,
        showSpinner: false,
    });
}

const pinia = createPinia();

createServer(page =>
    createInertiaApp({
        page,
        render: renderToString,
        resolve: name => {
            const pages = import.meta.glob('./Pages/**/*.vue', { eager: true });
            let page = pages[`./Pages/${name}.vue`];
            page.default.layout = page.default.layout || Layout;
            return page;
        },
        setup({ App, props, plugin }) {
            return createSSRApp({
                render: () => h(App, props),
            })
                .use(plugin)
                .use(pinia)
                .use(vClickOutside)
                .component('font-awesome-icon', FontAwesomeIcon)
                .use(ZiggyVue, {
                    ...page.props.ziggy,
                    location: new URL(page.props.ziggy.location),
                });
        },
    }),
);
