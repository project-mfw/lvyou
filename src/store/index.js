import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	// 用户是否已登录
	isLogin:"",
	// 登录的用户的用户名
	nickName:"",
	pic:"",
	level:""
  },
  mutations: {
	  nickName(state,payload){
		  state.nickName=payload.nickname
		  state.pic=payload.pic
		  state.level=payload.level
	  }
  },
  actions: {
  },
  modules: {
  }
})
