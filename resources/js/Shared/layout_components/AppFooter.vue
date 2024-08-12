<script>
import { Link } from '@inertiajs/vue3'
export default {
    components:{
        Link
    }
};
</script>

<template>
    <footer class="footer">
        <div class="container">
            <div class="footer_wrapper">
                <Link href="/" class="footer_logo">
                    <img src="/assets/images/footer_logo.svg" alt="" />
                </Link>
                <div class="footer_subtitle fz-16 fw-300">
                    Live Your Dream
                </div>
                <div class="footer_contact fz-16 fw-400 tac">
                    44/34 Moo 1, Thep Krassatri Rd., Si Sunthon
                    Thalang Distrikt, Phuket 83110
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss"></style>
