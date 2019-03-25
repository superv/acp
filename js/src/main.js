import Vue from 'vue'
import SuperVJS from 'superv-js'
import SuperV from './SuperV'

let config
try {
  config = JSON.parse(document.getElementById('config').innerHTML)
} catch (e) {
  config.apiUrl = '/sv-api'
}

Vue.config.productionTip = false
Vue.use(SuperVJS, {
    config: {
      name: process.env.VUE_APP_NAME,
      apiUrl: config.apiUrl,
      baseUrl: config.baseUrl
    },
    modules: []
  }
)

new Vue({
  el: '#app',
  name: 'root',
  data() {
    return {
      layouts: { default: SuperV }
    }
  },
  mixins: [require('superv-js').LayoutMixin]
})