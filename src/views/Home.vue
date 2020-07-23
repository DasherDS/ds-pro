<template>
  <div class="home" @click="jump">
    首页
  </div>
</template>

<script>
export default{
  methods:{
    jump(){
      this.$router.push({
        name:"Login"
      })
    }
  }
} 
</script>
