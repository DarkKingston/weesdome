<script>
import { Link } from '@inertiajs/vue3'
export default {
    components:{
        Link
    }
};
</script>

<template>
    <header class="header">
        <div class="container">
            <div class="header_wrapper">
                <Link href="/" class="header_logo">
                    <img src="/assets/logo.svg" alt="" />
                </Link>
                <div class="header_actions d-flex align-center">
                    <div class="header_actions_heart header_action_box">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="20"
                            viewBox="0 0 24 20"
                            fill="none"
                        >
                            <path
                                d="M12 19.0066C17.25 15.4591 22.5 11.5066 22.5 6.25662C22.502 5.56663 22.3675 4.88305 22.1044 4.2452C21.8413 3.60734 21.4546 3.0278 20.9667 2.5399C20.4788 2.052 19.8993 1.66536 19.2614 1.40222C18.6236 1.13909 17.94 1.00464 17.25 1.00662C15.9 1.00662 14.565 1.51662 13.5375 2.54412L12 4.08162L10.4625 2.54412C9.976 2.05477 9.39754 1.66642 8.76041 1.40142C8.12328 1.13642 7.44005 1 6.75 1C6.05996 1 5.37673 1.13642 4.7396 1.40142C4.10247 1.66642 3.52401 2.05477 3.0375 2.54412C2.54934 3.03118 2.16222 3.60988 1.89837 4.24698C1.63452 4.88409 1.49914 5.56704 1.5 6.25662C1.5 11.5066 6.75 15.4591 12 19.0066Z"
                                stroke="white"
                                stroke-width="1.5"
                            />
                        </svg>
                    </div>
                    <div class="header_actions_personal header_action_box">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="15"
                            viewBox="0 0 16 15"
                            fill="none"
                        >
                            <rect y="1" width="16" height="2" rx="1" fill="white" />
                            <rect y="7" width="16" height="2" rx="1" fill="white" />
                            <rect y="13" width="10" height="2" rx="1" fill="white" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss"></style>
