<template>
    <div class="homepage_box">
		
        <my-header></my-header>
		<!-- 引用轮播图功能组件（含输入框组件）-->
		<div class="_banner">
			<my-banner ref="banner-hp"></my-banner>
		</div>
		
		<!-- 首页正文 -->
		<div class="homepage">
			<!-- 引用返回顶部按钮组件 -->
			<!-- 首页导航栏 -->
			<div class="nav">
				<router-link to="" class="sales"><div>自由行</div><div>旅行就要更自在</div></router-link>
				<router-link to="" class="group"><div>跟团游</div><div>行程透明省心游</div></router-link>
				<router-link to="" class="localdeals"><div>当地游</div><div>最地道的玩法体验</div></router-link>
				<router-link to="" class="flight"><div>机票</div><div>特惠一折起</div></router-link>
				<router-link to="" class="hotel"><div>订酒店</div><div>一键全网比价</div></router-link>
				<router-link to="" class="visa"><div>签证</div><div>出签率高服务佳</div></router-link>
				<router-link to="" class="ship"><div>邮轮</div><div>移动的海上城堡</div></router-link>
			</div>
			
			<!-- 引用侧边栏板块页面组件 -->
			<div class="_sidebar">
				<sidebar></sidebar>
			</div>
			<!-- 引用游记板块页面组件 -->
			<div class="_travelnotes">
				<div class="" style="margin-bottom: 30px;cursor: pointer;">
					
					<img src="/img/homepage/CoUBXl-JBtiANpNTAACx0_9nzf0180.png" alt="">
				</div>
				<travel-notes ref="travelNotes"></travel-notes>
			
			</div>
		</div>
		<!-- 引用公共页脚组件 -->
        <my-footer></my-footer>
		<back-top></back-top>
    </div>
</template>
<script>
	// 引入banner模块
	import banner from "../../components/homepage/banner.vue"
	// 引入travelNotes模块
	import travelNotes from "../../views/homepage/travelNotes.vue"
	// 引入sidebar模块
	import sidebar from "../../views/homepage/hp-sidebar.vue"
	export default {
		methods:{
			
		},
		mounted() {
			document.title="旅游攻略，自由行，自助游攻略，旅游社交分享网站 - 马蜂窝"
		},
		components:{
			"my-banner":banner,
			"travel-notes":travelNotes,
			"sidebar":sidebar
		}
	}
	
	
	if(document.getElementsByClassName("_banner").length!=0){
		console.log(0)
		setInterval(()=>{
			let banner=document.getElementsByClassName("_banner");
			let width=banner.offsetWidth;
			console.log(width)
			banner.style.height=width*0.4;	
		},0)
		
	}
</script>
<style scoped>
@charset "UTF-8";


.flex {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-around;
  flex-wrap: wrap;
  flex-shrink: 0; }

a {
  text-decoration: none;
  color: #333333;
  display: block; }
  a .theme_bg_color {
    background-color: #ff9d00; }
  a .theme_font_color {
    color: #ff9d00; }
  a .nav_a:focus {
    color: #fff;
    background: #ff9d00; }

ul, ol, li, dl, dd, dt {
  margin: 0;
  padding: 0;
  list-style: none; }


i {
  display: block; }

.banner {
  position: relative; }
  .banner > a:first-child {
    float: left;
    z-index: -9999; }
    .banner > a:first-child img {
      width: 100%; }
  .banner > a:nth-child(2) {
    position: absolute;
    top: 25px;
    right: 0;
    left: 0;
    margin: auto;
    width: 62.5rem;
    height: 3.75rem; }
    .banner > a:nth-child(2) p {
      font-size: 1.25rem;
      color: #FFFFFF;
      text-shadow: 0 1px 3px rgba(0, 0, 0, 0.9); }
      .banner > a:nth-child(2) p span {
        font-size: 1.875rem; }
  
.homepage_box{
	position: relative;
}
.homepage {
	position: relative;
	width: 62.5rem;
	margin: 0 auto; 
}
.homepage:after{
	content:"";
	display: block;
	clear: both;
	
}
  .homepage .nav {
    width: 100%;
    margin-bottom: 1.1875rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    flex-shrink: 0; }
	.homepage .nav a {
		width: 8.5rem;
		height: 3.5625rem;
		border: 1px solid #e5e5e5;
		background: url(/img/sprites/wKgE2l0HSGuAOI1tAAChEE0vNA4603.png) no-repeat 59px 0;
		background-size: 104px auto;
		padding: 0.5rem 0 0 0.4375rem;
		flex-shrink: 0;
	}
	.homepage .nav a.sales{background-position-y: -651px;}
	.homepage .nav a.group{background-position-y: -24px;}
	.homepage .nav a.localdeals{background-position-y: -129px;}
	.homepage .nav a.flight{background-position-y: -441px;}
	.homepage .nav a.hotel{background-position-y: -546px;}
	.homepage .nav a.visa{background-position-y: -335px;}
	.homepage .nav a.ship{background-position-y: -233px;}

	.homepage .nav a > div:first-child {
		display: inline;
		height: 1.9375rem;
		padding-bottom: 20px;
		line-height: 1.5625rem;
		font-size: 16px;
		font-weight: 600; }
		.homepage .nav a > div:first-child:hover {
		background: url(/img/sprites/下划线.png) no-repeat 0px 15px;
		background-size: 100%; }
	.homepage .nav a > div:last-child {
		font-size: 12px;
		color: #9d9d9d;
		line-height: 20px;
	}
  .homepage ._sidebar {
		float: left;
		width: 16.25rem;
	}
	.homepage ._travelnotes{
		float: right;
		width:43.75rem
	}
    
    

</style>

