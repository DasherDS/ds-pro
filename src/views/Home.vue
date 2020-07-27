<template>
  <div class="main-content">
    <div class="main-content-nav">
      <NavTabs />
    </div>
    <div class="main-content-top"></div>
    <div class="main-content-mid"></div>
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";
export default {
  components: {
    NavTabs
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
.main-content {
  &-nav {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
  }
  &-top {
    width: 100%;
    height: 100vh;
    background: url("../assets/imgs/bgimg2.jpg");
    background-repeat: no-repeat;
    background-size: 100%;
    // filter: blur(10px);
  }
  &-mid {
    height: 300px;
  }
}
</style>
