import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import store from './store'
import App from './App.vue'
import i18n from '@/utils/i18n';
import MescrollUni from "@/pages/mescroll-uni/mescroll-uni.vue"; //上拉加载和下拉刷新

Vue.prototype.$i18nMsg = i18n.messages[i18n.locale]

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.component('mescroll-uni', MescrollUni)
Vue.config.productionTip = false

const app = new Vue({
	...App,
	i18n,
	store
})
app.$mount()
