<script>
import AppPopular from "../Shared/components/AppPopular.vue";
import SearchBar from "../Shared/components/AppSeachBar.vue";
import AppTypesObject from "../Shared/components/AppTypesObject.vue";
import AppNewObject from "../Shared/components/AppNewObject.vue";
import AppCheaperObject from "../Shared/components/AppCheaperObject.vue";
import AppExpensiveObject from "../Shared/components/AppExpensiveObject.vue";
import AppStepWork from "../Shared/components/AppStepWork.vue";
import AppWhyInvest from "../Shared/components/AppWhyInvest.vue";
import AppOurPartners from "../Shared/components/AppOurPartners.vue";
import AppTypesSell from "../Shared/components/AppTypesSell.vue";
import AppOurServices from "../Shared/components/AppOurServices.vue";
import AppConsult from "../Shared/components/AppConsult.vue";
import AppNews from "../Shared/components/AppNews.vue";
import CalcProfit from "../Shared/components/popups/CalcProfit.vue";
import ContactOwner from "../Shared/components/popups/ContactOwner.vue";
export default {
    components: {
        SearchBar,
        AppTypesObject,
        AppPopular,
        AppWhyInvest,
        AppTypesSell,
        AppOurPartners,
        AppNewObject,
        AppStepWork,
        AppCheaperObject,
        AppExpensiveObject,
        AppConsult,
        AppNews,
        CalcProfit,
        ContactOwner,
        AppOurServices
    },
};
</script>

<template>
    <div class="main_wrapper">
        <AppTypesSell/>
        <SearchBar />
        <AppTypesObject />
        <AppPopular />
        <div class="container_without_space">
            <div class="line"></div>
        </div>
        <AppNewObject />
        <div class="container_without_space">
            <div class="line"></div>
        </div>
        <AppCheaperObject />
        <div class="container_without_space">
            <div class="line"></div>
        </div>
        <AppExpensiveObject />
        <div class="container_without_space">
            <div class="line"></div>
        </div>
        <AppOurServices/>
        <AppStepWork />
        <AppWhyInvest/>
        <AppOurPartners/>
        <AppConsult/>
        <div class="container_without_space">
            <div class="line"></div>
        </div>
        <AppNews/>

        <div class="popup">
            <div class="popup_container">
                <ContactOwner/>
            </div>
        </div>
        <div class="popup">
            <div class="popup_container">
                <CalcProfit/>
            </div>
        </div>
    </div>
</template>
