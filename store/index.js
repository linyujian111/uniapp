import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home.js' // 引入modules文件夹中的js文件
import about from './modules/about.js'

Vue.use(Vuex)

export default new Vuex.Store({ // export
    modules: {
        home,
        about
    },
	state: {
	    num: 0,
		name:'nihao',
		name1:'nha22'
	},
})