import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import bus from './bus.js'
import axios from "axios"
import moment from 'moment'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload)
// 引入组件模块=========================================================
import MyHeader from "./components/MyHeader"
import MyFooter from './components/MyFooter'

// 引用登录信息框组件
import loginInfo from './components/login_info.vue'
// 引入返回顶部按钮组组件
import backTop from './components/backTop.vue'
// 引入页面日历组件
import calendar from './components/calendar.vue'
// =====================================================================================
Vue.prototype.bus=bus;
// 将axios模块添加到vue的原型对象中，提供给所有new Vue子对象使用
Vue.prototype.axios=axios;
Vue.prototype.moment=moment;
// 将页头创建成为全局组件
Vue.component("my-header",MyHeader)
// 将页脚创建成为全局组件
Vue.component("my-footer",MyFooter)
// 将登陆信息框创建为全局组件
Vue.component("login-info",loginInfo)
// 将返回顶部按钮组创建为全局组件
Vue.component("back-top",backTop)
// 将日历创建为全局组件
Vue.component('calendar',calendar)
// axios.defaults.baseURL="http://xzserver.applinzi.com";
// axios.defaults.baseURL="http://localhost:5050/lvyou"
//客户端使用http代理跨域。baseURL不要写真实的服务器地址，而应该写http代替提供的接口地址的别名，比如:/lvyou
axios.defaults.baseURL="/lvyou";

Vue.config.productionTip = false
// 解决路由器跳转之后页面不会到顶部
router.beforeEach((to, from, next) => {    
    // chrome
    document.body.scrollTop = 0
    // firefox
    document.documentElement.scrollTop = 0
    // safari
    window.pageYOffset = 0
    next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
