import Vue from 'vue'
import App from './App.vue'
import router from './router'
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
}).$mount('#app')