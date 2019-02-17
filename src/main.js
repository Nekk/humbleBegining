import Vue from 'vue'
import Vuetify from 'vuetify'
// import VueRouter from 'VueRouter'
import App from './App.vue'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
// import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(Vuetify,{
  iconfont: 'md' || 'fa'
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
