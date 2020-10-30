<template>
	<div class="banner">
		<router-link :to="pics[banner_index].url">
			<div class="banner_pic">
				<li v-show="banner_index==i" v-for="(t,i) of pics" :key="i" class="lie" @mouseenter="clearTimer" @mouseleave="clearTimer"><img :src="t.src" class="banner_pic"></li>
			</div>
			
		</router-link>
		
		
		<router-link :to="pics[banner_index].url" class="title">
			<p class="date"><span>25</span>/Aug.2020</p>
			<p>{{pics[banner_index].title}}</p>
		</router-link>
			
		
		<div class="_search-box">
			<search-box></search-box>
		</div>
		
		<p class="from">图片来自于<router-link to="">{{pics[banner_index].destination}}</router-link>，次目的地共收藏了<router-link to="">{{pics[banner_index].count}}</router-link>张<router-link to="">{{pics[banner_index].destination}}</router-link>图片。本片由<router-link to="">{{pics[banner_index].author}}</router-link>荣耀出品！</p>
		
		
		
		
		<ul class="sm-pics">
			<li v-for="(t,i) of pics" :key="i" @click="switchPic(i)"  >
					<img :src="t.src" data-banner-pics :class="{active:t.isChecked}">
			</li>
			<router-link to="" data-llzm="历历在目"></router-link>
		</ul>
	</div>
</template>

<script>
	import searchBox from "./searchBox.vue"
	export default{
		data(){
			return {
				banner_index:0,
				timer:null,
				pics:[{
						src:"/img/homepage/Banner_01.png",
						url:"",
						title:"【挪威】我喊你一身欧诺拉，你敢应我吗？",
						date:"25.Aug.2020",
						author:"libin",
						destination:"挪威",
						count:125646,
						isChecked:true
					},
					{
						src:"/img/homepage/Banner_02.png",
						url:"",
						title:"【時光日誌】但愿呼唤我的名为旅人，日本的红叶狩之旅（东京、京都和富士山）",
						date:"26.Sep.2020",
						author:"時光日誌",
						destination:"日本",
						count:8512856,
						isChecked:false
					},
					{
						src:"/img/homepage/Banner_03.png",
						url:"",
						title:"这场旅行，起因是块烧饼！| 仙灵缙云，烟火人间",
						date:"23.sep.2020",
						author:"libin",
						destination:"缙云",
						count:45646,
						isChecked:false
					},
					{
						src:"/img/homepage/Banner_04.jpg",
						url:"",
						title:"从波西米亚到奥匈帝国，那画面太美我不敢看（漫游布拉格、维也纳、布达佩斯）",
						date:"30.Oct.2020",
						author:"行走的丁满",
						destination:"布拉格",
						count:137614,
						isChecked:false
					},
					{
						src:"/img/homepage/Banner_05.png",
						url:"",
						title:"美哉！新疆！最美的风景在中国（LALA国庆自驾，塞里木湖、那拉提、巴音布鲁克、吐鲁番）",
						date:"20.Sep.2020",
						author:"libin",
						destination:"新疆",
						count:365646,
						isChecked:false
					}]
				
			}
		},
		methods:{
			// 右侧小图手动选择展示的大图
			switchPic(i){
				// 设置点击事件将下标传入
				this.banner_index=i;
				for(let t of this.pics){
					t.isChecked=false
				}
				this.pics[i].isChecked=true;
			},
			// 当鼠标移入/移出轮播图的时候执行的函数
			clearTimer(){
				// 调用之后会先做判断,实现一个函数同时实现打开和关闭的操作
				if(this.timer!=null){
					// 如果定时器已启动则关闭定时器
					clearInterval(this.timer)
					this.timer=null
				}else{
					// 如果定时器未启动则打开定时器
					this.setTimer()
				}
			},
			// 定义的设置定时器的函数
			setTimer(){
				this.timer=setInterval(()=>{
					let nextIndex=this.banner_index+1;
					if(nextIndex==this.pics.length){
						nextIndex=0
					}
					this.switchPic(nextIndex);
				},5000)
			}
		},
		// 初始化页面之后自动调用定时器函数
		mounted(){
			this.setTimer()
		},
		components:{
			"search-box":searchBox
		},
	}
</script>

<style scoped>
	.banner{
		position: relative;
		min-width: 1000px;
		min-height: 400px;
		height:30vw;
		margin-bottom: 1.25rem;
		cursor: pointer;
	}
	
	.lie{
		position: absolute;
		top: 0;bottom: 0;left: 0;right: 0;
		margin: auto;
		animation: fadeIn 1s ease;
	}
	/* 设置淡入淡出动画效果 */
	@keyframes fadeIn{
		0% {
		  opacity: .75; /*初始状态 透明度为0.5*/
		}
		100% {
		  opacity: 1; /*结尾状态 透明度为0*/
		}
	}
	
	.banner_pic{
		width: 100%;height: 100%;
		/* height: 39.6875rem; */
	}
	.banner .title{
		position: absolute;
		left: 0;right: 0;top: 1.5625rem;
		margin: auto;
		width: 62.5rem;
		z-index: 2;
	}
	.banner .title p{
		font-size: 1.625rem;
     	color: #FFFFFF;
		text-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
		white-space: nowrap;
		line-height: 2.1875rem;
		
	}
	.banner .title p .date{
		font-size: 1.5rem;
	}
	/* 给引入的搜索框组件设置样式 */
	._search-box{
		position: absolute;
		bottom: 2.8125rem;left: 0;right: 0;
		margin: auto;
		width: 39.5rem;
	}
	.banner .date>span{font-size: 2.375rem !important;}
	/* 轮播图左侧小图列表 */
	.sm-pics{
		display: flex;
		flex-direction: column;
		position: absolute;
		top: 50%;right: 2.5rem;
		margin-top: -200px;
	}
	.banner .sm-pics li{
		float: left;
		width: 6.875rem;height: 3.875rem;
		margin-bottom: 10px;
	}
	/* 当前列表中图片被选中的时候的样式 */
	.banner [data-banner-pics].active{
		border: 0.125rem solid #ff9d00 !important;
	}
	.banner .sm-pics img{
		width: 6.875rem;height: 3.875rem;
		line-height: 0;
		/* border: 0.125rem solid transparent; */

	}
	.banner [data-llzm="历历在目"]{
		display: block;
		height: 2.1875rem;
		background: url(/img/sprites/index-sprites9.png) no-repeat -3.75rem -3.125rem;

	}
	.banner .from{
		display: inline-block !important;
		position: absolute;
		left: 0;right: 0;bottom: 20px;
		margin: auto;
		display: flex;
		align-items: center;
		width: 39.375rem;
		color: #fff;
		text-shadow: 1px 1px 0 rgba(0,0,0,.4);
		min-width: 39.375rem;
		text-align: left;
		white-space: nowrap;
	}
	.banner .from>a{
		display: inline-block;
	}
</style>
