<template>
	<div class="search_result">
		<!-- 搜索结果页头 -->
		<div class="header">
			<div class="logo-input">
				<router-link to="/"></router-link>
				<input class="search_input" type="text" v-model="place" @keyup.13="search" :placeholder="place" >
				<router-link to="" class="search_button" @click="search"><i></i></router-link>
			</div>
			<div class="_login_info">
				<login-info></login-info>
			</div>
		</div>
		<!-- 导航栏 -->
		<div class="nav">
			<ul @click="checkNav($event)">
				<li :class="{active:checkedNav=='all'}" data-type="all">全部</li>
				<li :class="{active:checkedNav=='shopping'}" data-type="shopping">商品</li>
				<li :class="{active:checkedNav=='notes'}" data-type="notes">游记</li>
				<li :class="{active:checkedNav=='gonglue'}" data-type="gonglue">攻略</li>
				<li :class="{active:checkedNav=='QA'}" data-type="QA">问答</li>
				<li :class="{active:checkedNav=='JD'}" data-type="JD">景点</li>
				<li :class="{active:checkedNav=='hotel'}" data-type="hotel">酒店</li>
				<li :class="{active:checkedNav=='user'}" data-type="user">用户</li>
			</ul>
		</div>
		<!-- 页面主体 -->
		<div class="content">
			<!-- 引入页面主要内容板块组件 -->
			<div class="_sr-main" v-show="checkedNav=='all'">
				<sr-main ref="srMain"></sr-main>
			</div>
			<div class="_sr-main" v-show="checkedNav=='shopping'">
				<!-- 商品组件预留位置 -->
				<shopping ref="shopping"></shopping>
			</div>
			<div class="_sr-main _travelnotes" v-show="checkedNav=='notes'">
				<!-- 游记组件预留位置 -->
				<travel-notes ref="travelNotes"></travel-notes>
			</div>
			
			<!-- 右侧边栏 -->
			<div class="sidebar">
				<!-- 景点推荐 -->
				<div class="header_link flex_row wrap clear_border">
					<span>附近热门景点</span>
					<router-link to="">全部景点>></router-link>
				</div>
				<div class="flex_row wrap hot-jd-list">
					<router-link to="" v-for="(t,i) of scenicSpot" :key="i" v-show="i<8"><img :src="t.pic" ><p class="subtitle">{{place}}-{{t.name}}</p></router-link>
					
				</div>
				<div class="hr"></div>
				<!-- 酒店推荐 -->
				<div class="header_link flex_row wrap clear_border">
					<span><h5 style="font-weight: 400;font-size:15px">推荐酒店</h5></span>
					<router-link to="">更多酒店>></router-link>
				</div>
				<div class="sidebar_hotel">
					<ul>
						<li class="flex_row" v-for="(t,i) of hotel" :key="i" v-if="i<5"><div class="flex_row"><span>{{i+1}}</span><router-link to="">{{t.name}}</router-link></div><h4 class="seg_price">￥{{t.price}}</h4></li>
						
					</ul>
				</div>
				<div class="hr"></div>
				<div class="header_link flex_row wrap clear_border" v-show="checkedNav!='shopping'">
					<span>旅行商城</span>
					<router-link to="">更多旅行商城产品>></router-link>
				</div>
				<div class="_shopping" v-show="checkedNav!='shopping'">
					<shopping ref="shopping_sub"></shopping>
				</div>
				
			</div>
		</div>
		
		
		<my-footer></my-footer>
	</div>
</template>

<script>
	import main from './sr_main.vue'
	import travelNotes from '../homepage/travelNotes.vue'
	import shopping from './shopping.vue'
	export default{
		// 获取前一个页面传递过来的希望搜索到的目的地信息
		data(){
			return {
				place:"",
				placeId:"",
				been:"",
				pic:"",
				scenicSpot:"",
				shopping:"",
				hotel:[],
				// 选项卡中被选择的选项卡
				checkedNav:"all"
			}
		},
		methods:{
			// 页头搜索框查询
			search(){
				this.$router.push(`/search/${this.place}`)
			},
			// 页头导航栏选项卡选择
			checkNav(e){
				this.checkedNav=e.target.dataset.type;
			}
		},
		watch:{
			placeId(){
				// 请求酒店信息
				this.axios.get('/lvyou/hotel',{
					params:{
						placeId:this.placeId
					}
				}).then(result=>{
					this.hotel=result.data
				})
			}
		},
		mounted(){
			
			// 将地址传递过来的参数请求到服务器，查询对应的目的地信息。
			this.axios.get(`/lvyou/place_list`,{
				params:{
					place:this.$route.params.place
				}
			}).then(result=>{
				// 将服务器响应过来的目的地信息放入data变量中，并将目的地的id传给引用的各个子组件
				this.place=result.data[0].place;
				this.placeId=result.data[0].id;
				this.pic=result.data[0].pic;
				this.been=result.data[0].been;
				
				// 将查询到目的地名称，id同步给子组件
				this.$refs.srMain.place=this.place
				this.$refs.srMain.placeId=this.placeId
				this.$refs.travelNotes.placeId=this.placeId
				this.$refs.shopping.placeId=this.placeId
				this.$refs.shopping_sub.placeId=this.placeId
				this.$refs.srMain.pic=this.pic
				this.$refs.srMain.been=this.been
			})
		},
		
		components:{
			"sr-main":main,
			"travel-notes":travelNotes,
			"shopping":shopping
		}
	}
</script>

<style scoped>
	.search_result a{
		color: #333333;
	}
	/* .search_result img{
		width: 100%;
	} */
	/* 页头样式 */
	.search_result .header{
		display: flex;
		justify-content: space-between;
		width: 100%;
		background: #3c3c3c;
		padding: 15px 0;
	}
	.search_result .header ._login_info{
		width: 13.125rem;
		margin-right: 40px;
	}
	.search_result .header ._login_info>.login_info>.login_info_on>a.msg{
		color: #fff !important;
	}
	/* logo+搜索输入框样式 */
	.search_result .logo-input{
		display: flex;
		align-items: center;
	}
	.search_result .logo-input>a:first-child{
		
		width: 82px;height: 1.5rem;
		background: url(/img/sprites/s-logo2.png) no-repeat 0 0;
		background-size: 82px;
		margin:0 20px;
	}
	.search_result .logo-input>a:nth-child(3){
		
		width: 2.5rem;height: 2.25rem;
		
		margin-left: 0.3125rem;
		border-radius: 4px;
		background: #FFAA00;
	}
	.search_result .logo-input>a:nth-child(3)>i{
		display: block;
		width: 1.5rem;height: 1.5rem;
		margin:0.375rem auto;
		background: url(../../../public/img/sprites/header-sprites13.png) no-repeat 0 -110px;
	}
	.search_result .search_input{
		width: 34.75rem;height:2.25rem;
		border: 0;
		outline: 0;
		border-radius: 0.25rem;
		padding: 0 10px 0 20px;
		line-height: 2.25rem;
		font-size: 0.875rem;
	}
	
	/* 导航栏样式 */
	.search_result .nav{
		width: 100%;height: 3.125rem;
		padding: 0.625rem 0 0 7.8125rem;
		background: #fafafa;
	}
	.search_result .nav ul{
		float: left;
		height: 2.25rem;
	}
	.search_result .nav ul li{
		display: table-cell;
		height: 2.5rem;
		padding: 0 16px;
		vertical-align: middle;
		border-bottom:3px solid transparent ;
		cursor: pointer;
	}
	
	.search_result .nav li.active{
		border-bottom:3px solid #FFAA00 ;
	}
	.search_result .nav li>a{
		margin-right: 0.625rem;
	}
	/* 正文样式 */
	.search_result .content{
		width: 77rem;
		padding: 1.25rem 0 1.25rem 7.8125rem;
	}
	.search_result .content::after{
		content:'';
		display: block;
		clear: both;
	}
	.search_result ._sr-main{
		float: left;
		width: 40rem;
	}
	/* 侧边栏样式 */
	.hr{
		width: 100%;
		margin: 15px 0;
		padding: 0;
		border-top: 1px solid #e5e5e5;
		height: 0;
		clear: both;
	}
	.seg_price{
		color: #ff7000 !important;
		font-size: 16px;
		font-weight: 400;
		float: right;
	}
	.header_link{
		width: 100%;
		border-bottom: 1px solid #e5e5e5;
		padding-bottom: 5px;
		margin: 1.25rem auto 0.625rem;
		justify-content: space-between;
	}
	.header_link a{
		font-size: 0.8125rem;
	}
	.header_link span:first-child{
		color: #333333;
		font-size: 1.25rem;
		font-weight: 700;
	}
	.search_result .sidebar{
		float: right;
		width: 26.375rem;
		padding: 15px;
		box-shadow: 0 0 7px rgba(0,0,0,.07);
	}
	/* 附近热门景点 */
	.search_result .sidebar .hot-jd-list img{
		width: 5.625rem;height: 5.625rem;
		object-fit: cover;
	}
	.search_result .sidebar .hot-jd-list .subtitle{
		width: 5.625rem;height: 2.5rem;
		text-align: center;
		font-size: 0.8125rem
	}
	/* 酒店套餐样式 */
	.search_result .sidebar_hotel span{
		width: 14px;height: 14px;
		display:block;
		color: #fff;
		font-size: 12px;
		text-align: center;
		line-height: 0.875rem;
		margin:0 5px 0 0;
		border-radius: 2px;
		background: #1493E3;
	}
	.search_result .sidebar_hotel ul li>div{
		display: flex;
	}
	/* 旅行商城目录 */
	._shopping{
		height: 625px;
		overflow: hidden;
	}
	.search_result .shopping_catalog{
		padding: 0.75rem 0;
	}
	.search_result .shopping_catalog li{
		display: inline-block;
		width: 33%;
		line-height: 1.5rem;
	}		
	.search_result .shopping_catalog li>a{
		color: #1493e3;
	}
	/* 旅行商城样式 */
	.shopping li{
		margin-bottom: 5px;
	}
	.shopping{
	}
	.product{
		display: flex;
		height: 110px;
	}
	.shopping img{
		width: 100%;height:100%;
		object-fit: cover;
	}
	.shopping .left a{
		width: 100%;height:100%;
	}
	.shopping .left{
		
		width:90px; height: 90px;
		margin-top: 10px;
	}
	.shopping .right{
		width: 11.875rem;height: 100px !important;
		margin-left: 10px;
		margin-top: 5px;
	}
	.shopping .right>div:first-child{
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 90%;
		line-height: 1.25rem;
		
	}
	.shopping .right>div:first-child>a>h4{
		width: 90px;
		text-overflow: ellipsis;
		white-space: pre;
		overflow:hidden;
	}
	.shopping .right :first-child>a:last-child{
		font-size: 1rem;
		color: #FF7000;
		font-weight: bold;
	}
	.shopping .right>a:nth-child(2){
		width: 100%;
		font-size: 0.8125rem;
		color: #666666;
		line-height: 1.25rem;
		display: -webkit-box;
		-webkit-box-orient: vertical; 
		text-overflow: ellipsis; 
		-webkit-line-clamp: 3;
		overflow : hidden;
	}
	.shopping .right>a:nth-child(2):hover{
		color: #FF9D00;
		text-decoration: underline;
	}
	.shopping .right>span{
		align-self: flex-start;
		font-size: 0.75rem;
		color: #999999;
	}
</style>
