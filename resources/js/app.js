import { createSSRApp, h} from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress'
import Layout from './Shared/Layout.vue'
import { createPinia } from 'pinia'
import vClickOutside from "click-outside-vue3"
import FontAwesomeIcon from './plugins/font-awesome';
import 'swiper/swiper-bundle.css';
import '/resources/css/style.css';
import VueTippy from 'vue-tippy'
import 'tippy.js/dist/tippy.css'
import VCalendar from 'v-calendar';
import 'v-calendar/dist/style.css';

InertiaProgress.init()
const pinia = createPinia();
createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.vue', { eager: true });
        let page = pages[`./Pages/${name}.vue`];
        page.default.layout = page.default.layout || Layout;
        return page;
    },
    setup({ el, App, props, plugin }) {
        createSSRApp({ render: () => h(App, props) })
            .use(plugin)
            .use(VueTippy,
                {
                    directive: 'tippy', // => v-tippy
                }
            )
            .use(VCalendar, {})
            .use(pinia)
            .use(vClickOutside)
            .component('font-awesome-icon', FontAwesomeIcon)
            .mixin({ methods: {route: window.route}})
            .mount(el)
    },
    progress:{
        delay: 250,
        color: '#7843E9',
        includeCSS: true,
        showSpinner: false
    }
})
