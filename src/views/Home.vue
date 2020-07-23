<template>
  <div class="main-content">
    <transition name="fade">
      <div v-show="istabnav" class="main-content-tabnav"></div>
    </transition>

    <div class="main-content-top"></div>
    <div class="main-content-mid"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clientWidth: null,
      clientHeight: null,
      scoll: "",
      istabnav: false
    };
  },
  methods: {
    menu() {
      this.scoll =
        document.documentElement.scrollTop || document.body.scrollTop;
      this.scoll >= 300 ? (this.istabnav = true) : (this.istabnav = false);
    }
  },
  mounted() {
    this.clientWidth = document.body.clientWidth;
    this.clientHeight = document.body.clientHeight;
    window.onresize = () => {
      return () => {
        this.clientHeight = document.body.clientHeight;
        this.clientWidth = document.body.clientWidth;
      };
    };
    window.addEventListener("scroll", this.menu);
  }
};
</script>

<style lang="scss" scoped>
.fade-enter {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 1s;
}
.fade-leave-active {
  opacity: 0;
}
.main-content {
  width: 100%;
  height: 100vh;
  position: relative;
  &-tabnav {
    position: fixed;
    top: 0;
    left: 0;
    height: 100px;
    width: 100vw;
    z-index: 999;
    background-color: #ccc;
  }
  &-top {
    width: 100%;
    height: 100vh;
    background: url("../assets/imgs/bgimg.jpg");
    background-repeat: no-repeat;
    background-size: 100%;
    // filter: blur(10px);
  }
  &-mid {
    height: 400px;
  }
}
</style>
