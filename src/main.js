import Vue from 'vue'
import App from './App.vue'

import GoogleAnalytics from 'vue-analytics'
Vue.use(GoogleAnalytics, {
  // Replace this with your GA tracking code
  id: 'UA-11212699-10'
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
