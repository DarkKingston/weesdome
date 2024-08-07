<script>
import AppPopular from "~/components/AppPopular.vue";
import SearchBar from "~/components/AppSeachBar.vue";
import AppTypesObject from "~/components/AppTypesObject.vue";
import AppNewObject from "~/components/AppNewObject.vue";
import AppCheaperObject from "~/components/AppCheaperObject.vue";
import AppExpensiveObject from "~/components/AppExpensiveObject.vue";
import AppStepWork from "~/components/AppStepWork.vue";
import AppWhyInvest from "~/components/AppWhyInvest.vue";
import AppOurPartners from "~/components/AppOurPartners.vue";
import AppTypesSell from "~/components/AppTypesSell.vue";
import AppConsult from "~/components/AppConsult.vue";
import AppNews from "~/components/AppNews.vue";
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
    AppNews
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
  </div>
</template>
