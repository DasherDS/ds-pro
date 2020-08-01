<template>
  <div>
      123
      <button @click="btn">带年纪</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  methods:{
    btn(){
      this.getdata()
    },
    getdata(){
      let key ='fa978cdfc5f1485582db21fc7453b5a6';
      let city = '汤阴'
     axios.get(`https://restapi.amap.com/v3/weather/weatherInfo?key=${key}&city=${city}`)
     .then(res => {
       console.log(res)
     })
     .catch(err => {
       console.error(err); 
     })
    }
  }
}
</script>

<style>

</style>