import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css';
import Element from 'element-ui'
Vue.use(Element)
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
}).$mount('#app')
<style>
  
</style>