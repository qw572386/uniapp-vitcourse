import Vue from 'vue'
import App from './App'
import http from './utils/request.js'
import store from './store'

Vue.config.productionTip = false

App.mpType = 'app'

Vue.use(http)
// Vue.prototype.$store = store
const app = new Vue({
	...App,
	store
})
app.$mount()
