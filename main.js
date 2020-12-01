import Vue from 'vue'
import App from './App'

// import Notify from './wxcomponents/vant/dist/notify/index';
import { myHttp } from 'api/api.js'
import uView from "uview-ui";
import store from './store'


Vue.prototype.$myHttp = myHttp

//引入vuex

Vue.prototype.$store = store

// 引入uview-ui框架

Vue.use(uView);





// Vue.prototype.$notify = Notify

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
