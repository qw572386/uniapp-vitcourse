import Vue from 'vue'
import App from './App'
import http from './utils/request.js'

Vue.config.productionTip = false

App.mpType = 'app'

Vue.use(http)

const app = new Vue({
    ...App
})
app.$mount()
