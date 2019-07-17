<template>
  <div>
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/HeadNav.vue";
import Footer from "@/components/Footer.vue";

export default {
  data() {
    return {};
  },
  components: {
    Header,
    Footer
  }
};
</script>

<style></style>
