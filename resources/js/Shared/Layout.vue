<script>
import AppHeader from './layout_components/AppHeader.vue';
import AppFooter from './layout_components/AppFooter.vue';
export default {
    components: {
        AppHeader,
        AppFooter
    },
    setup() {

        return {};
    },
};
</script>

<template>
    <section className="content">
        <AppHeader/>
        <main className="main">
            <slot></slot>
        </main>
        <AppFooter/>
    </section>
</template>

