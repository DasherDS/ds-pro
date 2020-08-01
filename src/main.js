import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import 'nprogress.css/nprogress.css';
import '../src/style/index.scss'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import animated from "animate.css"
import 'lib-flexible/flexible.js'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(animated)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
