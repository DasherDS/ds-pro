<template>
  <div class="main">
    <header class="main-header"></header>
    <section class="main-content">123456</section>
    <footer class="main-footer"></footer>
  </div>
</template>

<script>
export default {
  name: "DasherIndex",
  mounted() {
    if (this.$store.state.user.token == undefined) {
      this.$router.push({ name: "Home" });
      this.$message({
        message: "请您先登录,之后才能进入主页!",
        duration: 3 * 1000
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  &-header {
    position: sticky;
    top: 0;
    width: 100%;
    height: 100px;
    background-color: rgb(66, 112, 211);
  }
  &-content {
    margin: 0 auto;
    width: 1200px;
    height: 500px;
    background-color: rgba(204, 204, 204, 0.678);
  }
  &-footer {
    width: 100%;
    height: 300px;
    background-color: rgba(116, 150, 223, 0.479);
  }
}
</style>