<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view />
    </transition>
    <el-backtop class="backtop">🗼</el-backtop>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      transitionName: ""
    };
  },
  mounted() {},
  watch: {
    $route(to, from) {
      // console.log(to, from);
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if (to.meta.index > from.meta.index) {
        this.transitionName = "fold-left";
      } else {
        this.transitionName = "fold-right";
      }
    }
  }
};
</script>
<style lang="scss">
#app {
  min-width: 540px;
  font-size: 14px;
  .backtop{
    position: fixed;
  }
}
* {
  // font-family: "等线";
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul,
li {
  list-style: none;
}
a {
  text-decoration: none;
}
.fold-left-enter-active {
  animation-name: fold-left-in;
  animation-duration: 0.3s;
}
.fold-left-leave-active {
  animation-name: fold-left-out;
  animation-duration: 0.3s;
}
.fold-right-enter-active {
  animation-name: fold-right-in;
  animation-duration: 0.3s;
}
.fold-right-leave-active {
  animation-name: fold-right-out;
  animation-duration: 0.3s;
}
@keyframes fold-left-in {
  0% {
    transform: translate3d(100%, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fold-left-out {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-100%, 0, 0);
  }
}
@keyframes fold-right-in {
  0% {
    transform: translate3d(100%, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fold-right-out {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-100%, 0, 0);
  }
}
</style>