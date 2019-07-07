import Vue from 'vue'
import supervjs from 'superv-js'
import Acp from './Acp'
import routes from './app/routes'

let config
try {
  config = JSON.parse(document.getElementById('config').innerHTML)
} catch (e) {
  config.apiUrl = '/sv-api'
}

Vue.config.productionTip = false
Vue.use(supervjs, {
  config: {
    name: process.env.VUE_APP_NAME,
    apiUrl: config.apiUrl,
    baseUrl: config.baseUrl,
  },
  routes,
  modules: [],
})

new Vue({
  el: '#app',
  name: 'root',
  data() {
    return {
      layouts: { default: Acp },
    }
  },
  mixins: [require('superv-js').LayoutMixin],
})
