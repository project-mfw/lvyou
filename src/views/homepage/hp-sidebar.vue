<template>
	<!-- 侧边栏 -->
	<div class="sidebar">
		<router-link to=""><img src="/img/sprites/index-link.png" ></router-link>
		
		
		<div class="sidebar_item">
			<div class="sidebar_item_hd">
				<router-link to="">旅行家专栏</router-link>
				<router-link to="">专栏首页</router-link>
			</div>
			
			<div class="item" :class="{transtion:IsTranstion}">
				<div v-for="(t,i) of result" :key="i">
					<router-link to=""><img :src="t.pic" ></router-link>
					<router-link to=""><p>{{t.title}}</p></router-link>
					
					<p>{{t.content}}</p>
				</div>
				
			</div>
			<ul class="index" @click="selectPic($event)">
				<li v-for="i of 5" :class="{active:i-1==liIndex}" :data-num="i-1"></li>
			</ul>
		</div>
		
		
		<div class="sidebar_item">
			<div class="sidebar_item_hd">
				<router-link to="">旅游攻略推荐</router-link>
				<router-link to="">更多</router-link>
			</div>
			<div>
				<router-link to=""><img src="/img/homepage/侧边栏旅游攻略推荐图.jpeg" ></router-link>
				<router-link to=""><p>贵州旅游攻略☾贵州旅游攻略✈大...</p></router-link>
			</div>
		</div>
		
		
		<div class="sidebar_item">
			<div class="sidebar_item_hd">
				<router-link to="">最新活动</router-link>
				<router-link to="">查看全部></router-link>
			</div>
			<div>
				<router-link to=""><img src="/img/homepage/侧边栏最新活动图.jpeg" ></router-link>
				<router-link to=""><p>马蜂窝拍卖行</p></router-link>
				<p>每周二:拍精美实物奖品!</p>
			</div>
		</div>
		
		
		<div class="sidebar_item">
			<div class="sidebar_item_hd">
				<router-link to="">未知旅行实验室</router-link>
				<router-link to="">查看更多></router-link>
			</div>
			<div>
				<router-link to=""><img src="/img/homepage/侧边栏位置旅行实验室.png" ></router-link>
			</div>
		</div>
		
		
		<div class="sidebar_item">
			<div class="sidebar_item_hd">
				<router-link to="">加入马蜂窝</router-link>
				<router-link to="">了解详情></router-link>
			</div>
			<div>
				<router-link to=""><img src="/img/homepage/侧边栏加入马蜂窝.jpeg" ></router-link>
			</div>
		</div>
		<div class="sidebar_item">
			<div class="sidebar_item_hd">
				<router-link to="">马蜂窝旅游网最新资讯</router-link>
			</div>
			<ul>
				<li>04月07日<router-link to="">马蜂窝“云旅游”直播的攻与守</router-link></li>
				<li>04月07日<router-link to="">马蜂窝“云旅游”直播的攻与守</router-link></li>
				<li>04月07日<router-link to="">马蜂窝“云旅游”直播的攻与守</router-link></li>
				<li>04月07日<router-link to="">马蜂窝“云旅游”直播的攻与守</router-link></li>
				<li>04月07日<router-link to="">马蜂窝“云旅游”直播的攻与守</router-link></li>
				<li>04月07日<router-link to="">马蜂窝“云旅游”直播的攻与守</router-link></li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				index:0,
				liIndex:0,
				timer:null,
				IsTranstion:true,
				result:[{
					pic:"/img/homepage/banner_1.jpeg",
					title:"夏木尼，小王子的玫瑰城市",
					content:"夏木尼（Chamounix）是法国勃朗峰脚下最著名的小城，《小王子》里的玫瑰城市，世界登山运动的发源地。"
				},
				{
					pic:"/img/homepage/banner_02.jpeg",
					title:"暹粒油淋鱼",
					content:"默默等待，鱼上桌，迅速夹一口塞在嘴里——我就像个戒烟多日的老烟枪终于抽上了烟，心里的空洞瞬间被填满了。"
				},
				{
					pic:"/img/homepage/banner_03.jpeg",
					title:"西安：旧长安的画皮",
					content:"西安这座曾经的13朝古都，在今天更像旧长安的画皮，城墙完整绵延，一切就像一张唐画的影印本。"
				},
				{
					pic:"/img/homepage/banner_04.jpeg",
					title:"漫山岛",
					content:"漫山岛在第二条路上，满眼都是天赋，却偏爱挥霍青山绿水，用自己的方式过小日子，即便强行拖它起来，也得不到结果。"
				},
				{
					pic:"/img/homepage/banner_05.jpeg",
					title:"胡日尔镇的美术馆",
					content:"我最终从胡日尔的美术馆里带走了一幅画，画的是冬日的萨满岩，是日落时分。"
				},
				{
					pic:"/img/homepage/banner_1.jpeg",
					title:"夏木尼，小王子的玫瑰城市",
					content:"夏木尼（Chamounix）是法国勃朗峰脚下最著名的小城，《小王子》里的玫瑰城市，世界登山运动的发源地。"
				}]
			}
		},
		methods:{
			selectPic(e){
				this.index=Number(e.target.dataset.num)
				this.changePic(this.index)
			},
			// 轮播图滚动事件
			// 前往第几张图片，i表示图片的下标
			changePic(i){
				let item=document.getElementsByClassName("item")[0]
				if(document.getElementsByClassName('item')[0]==undefined){
					return
				}
				let itemChild=document.querySelectorAll('.item>div')[0]
				if(itemChild==undefined){
					
					clearInterval(this.timer)
					return
				}
				let itemWidth=itemChild.scrollWidth
				item.style.right=`${itemWidth*i}px`
				if(i==5 || i==6){
					this.liIndex=0
				}else{
					this.liIndex=i
				}
				if(this.index==6){
					this.IsTranstion=false;
					item.style.right="0px"
					this.index=0
				}
			}
		},
		
		mounted(){
			this.timer=setInterval(()=>{
				if(this.index==1){
					this.IsTranstion=true
				}
				this.changePic(this.index)
				this.index++
			},2000)
		},
		
		
		
		
	}
</script>

<style scoped>
	.sidebar{
		width: 100%;
	}
	.sidebar > a:first-child {
		width: 100%;
		height: 1.9375rem;
		margin-top: 5px;
		margin-bottom: 1.875rem;
	}
	.sidebar > a:first-child img {
	    width: 13.625rem;
	    height: 1.9375rem;
	}
	.sidebar .sidebar_item {
		position: relative;
		margin-bottom: 1.875rem;
		overflow: hidden;
	}
	.sidebar .sidebar_item .sidebar_item_hd {
	    width: 16.25rem;
	    height: 2.1875rem;
	    margin-bottom: 0.75rem;
	    display: flex;
	    flex-direction: n;
	    justify-content: space-between;
	    align-items: center;
	    flex-wrap: n;
	    flex-shrink: 0;
	}
	.item{
		width: 1560px;
		/* width: 1300px; */
		/* right: 260px; */
		position:relative;
		z-index: 999;
		display: flex;
	}
	.transtion{
		transition: all 0.5s linear;
	}
	.item>div{
		width: 260px;
	}
	.index{
		position: absolute;
		right: 14px;
		top: 168px;
		z-index: 9999;
	}
	.index>li.active{
		background-color: #FF7900;
	}
	.index li{
		float: left;
		display: inline;
		margin-left: 3px;
		width: 15px;
		height: 8px;
		background-color: #fff;
		border-radius: 4px;
		cursor: pointer;
		overflow: hidden;
	}
	.sidebar .sidebar_item .sidebar_item_hd > a:first-child{
		font-size: 18px;
		color: #333333; 
	}
	.sidebar .sidebar_item .sidebar_item_hd > a:nth-child(2) {
		 display: inline-block;
		 font-size: 12px;
		 color: #999999; 
	}
	
		.sidebar .sidebar_item > div:nth-child(2){
			overflow: hidden;
		}
	   .sidebar .sidebar_item > div:nth-child(2) img {
	    width: 100%; }
	   .sidebar .sidebar_item > div:nth-child(2)  a:nth-child(2) {
	    margin: 10px 0 5px 0;
	    font-size: 16px;
	    color: #333333; }
	     .sidebar .sidebar_item > div:nth-child(2) a:nth-child(2):hover {
	      color: #ff9d00;
	      text-decoration: underline; }
	 .sidebar > div:last-child > ul > li {
	  height: 1.875rem;
	  font-size: 0.75rem;
	  color: #666666; }
	   .sidebar > div:last-child > ul > li a {
	    display: inline;
	    margin-left: 0.3125rem;
	    line-height: 1.875rem; }
	     .sidebar > div:last-child > ul > li a:hover {
	      text-decoration: underline; }
	 ._travelnotes {
		float: right;
		width: 43.75rem;
	}
</style>
