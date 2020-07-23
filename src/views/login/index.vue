<template>
  <div>
    <div class="ty">
      <!-- 直接使用animated中的动画class名，注意：必须使用animated这个class名，否则动画会无效 -->
      <div class="animate__animated animate__jello">这是一个登陆页面</div>
      <div class="box">box</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {},
};
</script>

<style lang="scss" scoped>
.box {
  width: 200px;
  height: 200px;
  background: rebeccapurple;
  display: inline-block;
  margin: 0 0.5rem;
  animation: bounce; 
  animation-duration: 2s; 
}
</style>