import CardLong from "@/components/CardLong.vue";
import CardClass from "@/components/CardClass.vue";
import CardProject from "@/components/CardProject.vue";
import CardSm from "@/components/CardSm.vue";

const components = {
  install(Vue) {
    Vue.component("v-card-long", CardLong);
    Vue.component("v-card-class", CardClass);
    Vue.component("v-card-project", CardProject);
    Vue.component("v-card-sm", CardSm);
  }
};
export default components;
