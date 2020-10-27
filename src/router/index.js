import Vue from 'vue'
import VueRouter from 'vue-router'
import homepage from '../views/homepage/homepage.vue'
import login from '../views/homepage/login.vue'
import regist from '../views/homepage/regist.vue'
import search from '../views/search_result/search_result.vue'
import scenicSpot from '../views/scenic_spot/scenic_spot.vue'
import scenicSpot_details from '../views/scenic_spot_details/scenic_spot_details.vue'
import destination_details from '../views/destination/destination_details.vue'
import destination_overview from '../views/destination/destination_overview.vue'
import visa from '../views/visa/visa.vue'
// ================================================================================
import  hotel from '../views/hotel/hotel.vue'
import  hotel_detail from '../views/hotel/hotel_detail'
import hotel_order  from  '../views/hotel/hotel_order'
import hotel_pay from '../views/hotel/hotel_pay'
// ================================================================================

// 测试
import calendar from '../components/calendar.vue'
import shopping from '../views/search_result/shopping.vue'
import comment from '../views/comment.vue'
import jd_map from '../views/scenic_spot/JD_map.vue'
import place_list from '../views/destination/place_list.vue'
// =======
Vue.use(VueRouter)

const routes = [
	// 测试
	{
		path:'/rili',
		component:calendar
	},
	{
		path:'/shopping',
		component:shopping
	},
	{
		path:'/comment',
		component:comment
	},
	
	// 首页路由配置
  {
    path: '/',
    component: homepage
  },
  {
	  path:'/login',
	  name:'login',
	  component:login,
	  props:true,
  },
  {
  	  path:'/regist',
	  name:'regist',
  	  component:regist,
	  props:true,
  },
  
  
  // 地图查询
  {
  	path:'/map/:id',
	name:'map',
  	component:jd_map,
	props:true,
	
  },
  // 搜索结果页路由配置
  {
	path:"/search/:place",
	name:'search',
	component:search,
	props:true
  },
  
  // 景点列表页路由配置
  {
	path:'/jd/:place',
	component:scenicSpot,
	props:true
  },
  // 景点详情页路由配置
  {
	path:'/jd_details/:id',
	name:'jd_details',
	component:scenicSpot_details,
	props:true
  },
  // 目的地列表页配置
  {
  	path:'/place_list',
  	component:place_list
  },
  // 目的地详情页路由配置
  {
	path:'/mdd_details/:place',
	component:destination_details,
	props:true
  },
  // 目的地概况页路由配置
  {
	path:'/mdd_overview/:placeId',
	name:"mddOverview",
	component:destination_overview,
	props:true
  },
  {
	  path:'/visa',
	  component:visa
  },
  
  // 以下为酒店的路由
  // ==================================================================
  {
    path: '/hotel',
    name: 'hotel',
    component: hotel,
    meta:{
      title:'酒店预订'
    }
    
  },
  {
    path: '/hotel_two/:id',
    name: 'hotel_two',
    // component: hotel_two
    //打包时的分段名
    component:()=> import(/*webpackChunkName:'hotel_two'*/ '../views/hotel/hotel_two.vue'),
	props:true
  },
  {
    path: '/hotel_detail/:id',
    name: 'hotel_detail',
    component: hotel_detail
  },
  {
    path:'/hotel_order/:id',
    name:'hotel_order',
    component:hotel_order
  },
  {
    path:'/hotel_pay/:id',
    name:'hotel_pay',
    component:hotel_pay
  },
  // ===========================================================
  // { //这里是懒加载，暂时不要问，明天讲
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode:'hash',
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
