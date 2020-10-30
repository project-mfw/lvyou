<template>
	<div class="destination_nav">
		<div class="location-1"></div>
		<div class="nav_box">
			<ul class="nav">
				<li class="overview"><router-link :to="{name:'mddOverview',params:{placeId:this.$parent.placeId},query:{place:this.$parent.place}}"><i class="navbar-overview"></i>概况</router-link></li>
				<li class="icon"><router-link to=""><i class="navbar-icon"></i>行程路线</router-link></li>
				<li class="scenic"><router-link :to="{name:'jd',query:{place:this.$parent.place},params:{placeId:this.$parent.placeId}}"><i class="navbar-scenic"></i>景点</router-link></li>
				<li class="hotels"><router-link :to="{name:'hotel_two',query:{place:place},params:{id:11}}"><i class="navbar-hotels"></i>酒店</router-link></li>
				<li class="local"  @mouseenter="enter($event)" @mouseleave="leave($event)" data-name="play">
					<router-link to="">
						<i class="navbar-local"></i>
						当地玩乐
						<em class="drop_corner"></em>
					</router-link>
					<div class="drop_menu" v-show="dropMenu=='play'">
						<ul>
							<li><router-link to="">旅游服务</router-link></li>
							<li><router-link to="">景点门票</router-link></li>
							<li><router-link to="">当地体验</router-link></li>
							<li><router-link to="">一日游</router-link></li>
							<li><router-link to="">多日游</router-link></li>
							<li><router-link to="">交通卡票</router-link></li>
							<li><router-link to="">当地定制</router-link></li>
							<li><router-link to="">演出展览</router-link></li>
							<li><router-link to="">接送机</router-link></li>
							<li><router-link to="">包车/拼车</router-link></li>
							<li><router-link to="">WIFI</router-link></li>
							<li><router-link to="">电话卡</router-link></li>
						</ul>
					</div>
				</li>
				
				<li class="sales" @mouseenter="enter($event)" @mouseleave="leave($event)" data-name="vacation">
					<router-link to="">
						<i class="navbar-sales"></i>旅游度假<em class="drop_corner"></em>
					</router-link>
					<div class="drop_menu" v-show="dropMenu=='vacation'">
						<ul>
							<li><router-link to="">自由行</router-link></li>
							<li><router-link to="">跟团游</router-link></li>
							<li><router-link to="">签证</router-link></li>
							<li><router-link to="">邮轮</router-link></li>
							<li><router-link to="">特价机票</router-link></li>
							<li><router-link to="">自由行定制</router-link></li>
							<li><router-link to="">私家团</router-link></li>
							<li><router-link to="">半自助游</router-link></li>
						</ul>
					</div>
				</li>
				
				
				<li class="community" @mouseenter="enter($event)" @mouseleave="leave($event)" data-name="home"><router-link to="">
					<i class="navbar-community"></i>社区<em class="drop_corner"></em></router-link>
					<div class="drop_menu" v-show="dropMenu=='home'">
						<ul>
							<li><router-link to="">游记</router-link></li>
							<li><router-link to="">行程</router-link></li>
							<li><router-link to="">攻略</router-link></li>
							<li><router-link to="">问答</router-link></li>
							
						</ul>
					</div>
				</li>
				
				<li class="food" @mouseenter="enter($event)" @mouseleave="leave($event)" data-name="food"><router-link to="">
					<i class="navbar-food"></i>餐饮<em class="drop_corner"></em></router-link>
					<div class="drop_menu" v-show="dropMenu=='food'">
						<ul>
							<li><router-link to="">餐饮</router-link></li>
							<li><router-link to="">购物</router-link></li>
							<li><router-link to="">娱乐</router-link></li>
						</ul>
					</div>
				</li>
				
				
				<li class="maps"><router-link :to="{name:'map',params:{id:4},query:{place:place}}"><i class="navbar-maps"></i>地图</router-link></li>
			</ul>
		</div>
	</div>
</template>

<script>
	// 添加滚动条滚动事件
	window.addEventListener("scroll",function(){
		// 添加判断，防止切换到其它页面时寻找不到元素报错
		if(document.getElementsByClassName("location-1").length!=0){
			// 先获得想要操作的元素
			let nav=document.getElementsByClassName("location-1")[0]
			// 然后获得滚动条距离页面顶部的距离
			let scrollTop=document.body.scrollTop||document.documentElement.scrollTop
			// 计算出元素距离文档显示区顶部的距离
			let toTop=nav.offsetTop-scrollTop
			if(toTop<=0){
				// 元素距离文档显示区顶部的距离为0时，为元素添加固定样式class
				nav.nextElementSibling.classList.add("fixed")
			}else{
				// 元素距离文档显示区顶部的距离不为0时，移除元素已有的固定样式class
				nav.nextElementSibling.classList.remove("fixed")
			}
		}
	})
	export default{
		data(){
			return {
				place:"",
				placeId:"",
				dropMenu:""
			}
		},
		methods:{
			enter(e){
				this.dropMenu=e.target.dataset.name;
			},
			leave(e){
				this.dropMenu=""
			},
			getPlaceId(place){
				this.axios.get('/lvyou/place_list',{
					params:{
						place:place
					}
				}).then(result =>{
					this.placeId=result.data[0].id
				})
				
			},
			
		},
		mounted() {
			this.place=this.$route.query.place
		},
		watch:{
			place(){
				this.getPlaceId(this.place)
			}
		}
	}
</script>

<style scoped>
	
	.destination_nav{
		width: 100%;
	}
	
	.destination_nav .nav{
		width: 62.5rem;
		margin: 0 auto;
	}
	.destination_nav .fixed{
		position:fixed;
		z-index: 9999;
		top: 0;right: 0;left: 0;
		background: #fff;
		box-shadow: 0 0 3px rgba(0,0,0,.4)
	}
	.destination_nav a{
		color: #666;
		line-height: 2rem;
		
	}
	
	.destination_nav li{
		
		display: inline-block;
		border-bottom: 0.1875rem solid transparent;
	}
	.destination_nav .nav>li>a{
		display: flex;
		align-items: center;
		padding: 1.25rem 1.25rem 1.0625rem 0;
	}
	
	.destination_nav ul>li>a>i{
		width: 2.25rem;height: 2.25rem;
		background: url(/img/sprites/icon-place-nav6.png) no-repeat ;
		margin-right: 0.375rem;
	}
	/* 导航栏下拉提示三角 */
	.destination_nav .drop_corner{
		display: inline-block;
		margin-left: 0.3125rem;
		margin-top: 0.25rem;
		width: 0;
		height: 0;
		border-color: transparent #666 #666 transparent;
		border-style: dashed solid solid dashed;
		overflow: hidden;
	}
	/* 导航栏下拉菜单 */
	.destination_nav .drop_menu{
		position: absolute;
		z-index: 999;
		margin-top: 3px;
		padding: 30px;
		border: 1px solid #e5e5e5;
		background-color: rgba(255,255,255,.95);
		line-height: 2.5rem;
	}
	.destination_nav .drop_menu ul{
		box-sizing: content-box;
		width: 185px;
	}
	.destination_nav .drop_menu li>a{
		width: 90px;
		font-size: 1rem;
		line-height: 2.5rem;
	}
	.destination_nav .drop_menu a:hover{
		color: #FF9D00;
	}
	/* 精灵图定位 */
	.navbar-overview{background-position: 0 0 !important;}
	.navbar-icon{background-position: 0 -40px !important;}
	.navbar-scenic{background-position: 0 -320px !important;}
	.navbar-hotels{background-position: 0 -120px !important;}
	.navbar-local{background-position: 0 -200px !important;}
	.navbar-sales{background-position: 0 -160px !important;}
	.navbar-community{background-position: 0 -240px !important;}
	.navbar-food{background-position: 0 -360px !important;}
	.navbar-maps{background-position: 0 -400px !important;}
	/* 鼠标悬停到不同的li上显示不同颜色的底部边框 */
	.overview:hover{border-bottom: 0.1875rem solid #aea181;}
	.icon:hover{border-bottom: 0.1875rem solid #666fea;}
	.scenic:hover{border-bottom: 0.1875rem solid #5ccd62;}
	.hotels:hover{border-bottom: 0.1875rem solid #0a89e4;}
	.local:hover{border-bottom: 0.1875rem solid #bada25;}
	.sales:hover{border-bottom: 0.1875rem solid #e7788e;}
	.community:hover{border-bottom: 0.1875rem solid #ff9d00;}
	.food:hover{border-bottom: 0.1875rem solid #f07d6c;}
	.maps:hover{border-bottom: 0.1875rem solid #63c799;}
	
	
</style>
