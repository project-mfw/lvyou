<template>
	<div class="search-box">
		<ul>
			<li v-for="(item,index) in lis" :key="index" @click="select(index)" ><i :class="{active:item.isChecked}" data-searchBox-Radio></i>{{item.label}}</li>
		</ul>
		<!-- 根据单选框的选择显示不同的文本框 -->
		<!-- 文本框1 -->
		<div class="input_1" v-if="li==0|li==2|li==3" >
			<input type="text" placeholder="搜目的地/攻略/酒店/旅行特价" v-model="place" @keyup.32="showTips" @keyup.13="togo">
			<router-link :to="`/search/${place}`" class="btn"><i></i></router-link>
		</div>
		
		<!-- 文本框2 -->
		<div class="input_2" v-else-if="li==1">
			<input class="input-a" type="text" placeholder="请输入国家、地区、城市名称" v-model="place">
			<!-- 入住时间选择 -->
			<div class="start-date">
				<input type="text" placeholder="未定"  v-model="startDate.toLocaleDateString().split('/').join('-')" @focus="showCalendar($event)" data-name="start"><i class="sp1"></i>
				<div class="_calendar" v-show="checkedDate=='start'">
					<calendar ref="calendar_1"></calendar>
				</div>
			</div>
			<!-- 退房时间选择 -->
			<div class="end-date">
				<input class="input-c" type="text" placeholder="未定" v-model="endDate.toLocaleDateString().split('/').join('-')" data-name="end" @focus="showCalendar($event)"><i class="sp2"></i>
				<div class="_calendar" v-show="checkedDate=='end'" >
					<calendar ref="calendar_2"></calendar>
				</div>
			</div>
			<router-link to="" class="btn"><i></i></router-link>
		</div>
		
		<!-- 文本框3 -->
		<div class="input_3" v-else>
			<input type="text" :placeholder="default_fromCity" v-model="fromCity">
			<img src="/img\sprites\wKgEaVy1QDmAJy1YAAAC0ZrtOdM370.png" @click="Exchange">
			<input type="text" :placeholder="default_toCity" v-model="toCity">
			<div class="start-date">
				<input type="text" :placeholder="nowDate" class="input-c"><i></i>
			</div>
			<router-link to="" class="btn"><i></i></router-link>
		</div>
		<!-- 根据不同搜索输入显示提示框 -->
		<div class="tips_box" v-show="isShowTips">
			<ul>
				<li v-for="(t,i) of TipsInfo" :key="i" @mouseenter="changeColor(i,t)" :class="{active:t.isActive}">
					<router-link to=""><p>{{t.title}}</p><span>{{t.subTitle}}</span><span class="">{{t.from}}</span></router-link>
				</li>
				
			</ul>
		</div>
		<!--  -->
	</div>
</template>

<script>
	       
	export default{
		name:"SearchBox",
		data(){
		    return {
				// 主要的目的地
				place:"",
				// 开始日期和结束日期
				startDate:new Date(),
				endDate:new Date(new Date().getTime()+24*60*60*1000),
				checkedDate:"",
				pattern:"",
				// 出发的城市和抵达的城市
				fromCity:"",
				toCity:"",
				nowDate:"",
				default_fromCity:"出发城市",
				default_toCity:"抵达城市",
				// 是否显示提示框
				isShowTips:false,
				// 提示框中请求过来的数据
				TipsInfo:[
						{title:"东京 Tokyo",subTitle:"2020年最新自由行攻略",from:"日本城市",isActive:false},
						{title:"东京迪士尼 Tokyo Di...",subTitle:"2020年最新自由行攻略",from:"日本",isActive:false},
						{title:"东京酒店住宿攻略",subTitle:"1584家酒店",from:"酒店攻略",isActive:false},
						{title:"东京3日线路",subTitle:"60%的蜂蜂会选择这条线路",from:"玩法线路攻略",isActive:false},
						{title:"去东京旅行的21245个问题",subTitle:"",from:"东京问答",isActive:false},
						{title:"东京陵",subTitle:"",from:"辽阳景点"},
						{title:"东京小子 Tokio",subTitle:"",from:"伦敦景点",isActive:false},
						{title:"东京城",subTitle:"",from:"辽阳景点",isActive:false},
					],
				//输入框防抖定时器
				timer:"",
				// 单选框
		        li:0,
		        lis:[
		            {
		                index:0,
		                isChecked:true,
		                label:"全部"
		            },
		            {
		                index:1,
		                isChecked:false,
		                label:"酒店"
		            },
		            {
		                index:2,
		                isChecked:false,
		                label:"目的地"
		            },
		            {
		                index:3,
		                isChecked:false,
		                label:"去旅行"
		            },
		            {
		                index:4,
		                isChecked:false,
		                label:"机票"
		            },
		        ]
		    }
			
			
		},
		methods:{
			// 弹出日历组件
			showCalendar(e){
				this.checkedDate=""
				this.checkedDate=e.target.dataset.name;
				if(this.checkedDate=="start"){
					this.$refs.calendar_1.pattern=e.target.dataset.name;
				}else if(this.checkedDate=="end"){
					this.$refs.calendar_2.pattern=e.target.dataset.name;
				}
			},
			
			closeCalendar(e){
				console.log(e.target.className)
				if(e.target.className!="_calendar"){
					this.checkedDate=""
				}
			},
			// 搜索跳转
			togo(){
				if(this.place!=""){
					this.$router.push(`/search/${this.place}`)
				}
			},
			// 是否显示提示框内容
			showTips(){
				if(this.place=="东京"||this.place=="北京"){
					this.isShowTips=true
				}
			},
			// 出发城市和到达城市文本框内容交换事件
			Exchange(){
				let str=this.fromCity;
				this.fromCity=this.toCity;
				this.toCity=str;
				str=this.default_fromCity;
				this.default_fromCity=this.default_toCity;
				this.default_toCity=str;
			},
			// 根据输入内容提示框的鼠标进入事件
			changeColor(i,t){
				for(let obj of this.TipsInfo){
					obj.isActive=false
				}
				t.isActive=true
			},
			//通过传参方式，获得触发事件的i标签的父元素li在lis中下标index
			select(index){
				// 遍历lis执行操作
				let lis;
				this.lis.forEach((elem,i,arr)=>{
					// 每当i标签上的点击事件触发时，先让所有i标签上active样式为false
					arr[i].isChecked=false;
				})
				// 然后只让触发事件的i标签上的active样式为true
				this.lis[index].isChecked=true;
				this.li=index;
			},
			// 获得当前本地时间
			getDate(){
				this.nowDate=new Date().toLocaleDateString();
			}
		},
		watch:{
			place(){
				clearTimeout(this.timer)
				this.timer=setTimeout(()=>{
					// 模拟发出请求，根据输入的关键字模糊查询到服务器端的信息。打开相关内容提示框，显示部分响应信息
					if(this.place=="东京"||this.place=="北京"){
						this.isShowTips=true
					}
				},1000)
				// 如果搜索框内容为空则关闭提示框
				if(this.place==""){
					this.isShowTips=false
				}
			},
			// 用watch监听日历模式的变化，实时将选择的模式传递给对应的日历组件过去
			pattern(){
				if(this.pattern=="start"){
					this.$refs.calendar_1.pattern=this.pattern
				}else if(this.pattern=="end"){
					this.$refs.calendar_2.pattern=this.pattern
				}
				
			},
			// 当父组件选择的日期变化的时候将新值传给日历组件中,这样两个日历组件之间的日期时间就互通了
			startDate(){
				this.$refs.calendar_1.start=this.startDate
				this.$refs.calendar_2.start=this.startDate
			},
			endDate(){
				this.$refs.calendar_1.end=this.endDate
				this.$refs.calendar_2.end=this.endDate
			}
		},
		
		mounted(){
			this.getDate()
		}
	}
</script>

<style>
	.search-box{
		width: 39.5rem;
		padding: 0.9375rem;
		background: rgba(0, 0, 0, 0.6);
		border-radius: .25rem;
	}
	.search-box>ul{
		display: flex;
		align-items: center;
		margin-bottom: 0.4375rem;
	}
	.search-box>ul>li{
		position: relative;
		height: 1.625rem;
		margin-left: 1.25rem;
		color: #fff;
		line-height: 1.625rem;
		cursor: pointer;
	}
	.search-box>ul>li>i{
		float: left;
		margin-top:5px;
		width: 1rem;height: 1rem;
		background: url(/img/sprites/header-sprites13.png) no-repeat -60px -110px;
		margin-right: 0.3125rem;
		
	}
	.search-box [data-searchBox-Radio].active{
		background: url(/img/sprites/header-sprites13.png) no-repeat -60px -140px;
	}
	
	/* 搜索区域文本框样式 */
	.search-box .input_1,.search-box .input_2,.search-box .input_3{
		position: relative;
		display: flex;
		align-items: center;
	}
	.search-box .input_1 input,.search-box .input_2 input,.search-box .input_3 input{
		height: 2.875rem;
		background: #fff;
		font-size: 16px;
		line-height: 2.875rem;
		cursor: text;
	}
	
	.search-box .input_1 input{
		width: 91%;
		padding: 0 0.625rem 0 1.25rem;
		border-radius: 4px;
	}
	.search-box .input_2 .input-a{
		width: 16rem;
		padding: 0 1.3125rem;
		margin-right: 6px;
		font-size: 1rem;
		border-radius: 0.25rem 0 0 0.25rem;
	}
	.search-box .input_2 .input-c{
		border-radius: 0 .25rem .25rem 0;
		margin: 0 0 0 3px;
	}
	.search-box .input_2 input:not(.input-a){
		width: 8.75rem;
		padding: 0 0.625rem;
	}
	
	.search-box .input_3 input{
		width: 205px;
		margin-right: 0.125rem;
		padding:0 1.3125rem;
	}
	.search-box .input_3>input:first-child{
		border-radius: 0.25rem 0 0 0.25rem;
	}
	.search-box .input_3 .input-c{
		width: 8.75rem;
		padding: 0 0.625rem;
		border-radius: 0 0.25rem 0.25rem 0;
	}
	.start-date,.end-date{
		position: relative;
		display: inline-block;
	}
	.search-box ._calendar{
		position: absolute;
		z-index: 999999;
		width: 526px;height: 268px;
		margin-top: 1px;
	}
	
	.start-date>i,.end-date>i {
		position: absolute;
		top: 0.9375rem;right: 0.625rem;
		z-index: 1;
		width: 1rem;
		height: 1rem;
		background: url(/img/sprites/header-sprites13.png) no-repeat 0 -140px;
		overflow: hidden;


		
	}
	.search-box .input_3 img{
		position: absolute;
		left: 12.0625rem;
		width: 1.625rem;
		cursor: pointer;

	}
	/* 搜索区域文本框按钮样式 */
	
	.search-box .btn{
		position: relative;
		margin: auto;
		width: 3.125rem;height: 2.875rem;
		background: #ff9d00;
		margin-left: 0.375rem;
		border-radius: 4px;
		text-align: center;vertical-align: middle;
	}
	.search-box .btn:hover{
		background: #ff8a00;
	}
	.search-box .btn>i{
		position: absolute;
		top: 0;right: 0;bottom: 0;left: 0;
		margin: auto;
		width: 1.5rem;height: 1.5rem;
		background: url(/img/sprites/header-sprites13.png) no-repeat 0px -110px;
	}
	/* 搜索框输入内容后的推荐框样式 */
	.search-box .tips_box{
		position: absolute;
		left: 0;right: 0;top: 98px;
		z-index: 2000;
		width: 37.625rem;
		margin:auto;
		background: #FFFFFF;
		box-shadow: 0 0 3px rgba(0,0,0,.3);
		border-radius: 0.25rem;
		overflow: hidden;
	}
	.search-box .tips_box li{
		height: 2.25rem;
		padding: 0.4375rem 1.25rem;
	}
	.search-box .tips_box li.active{
		background: #FFEBD3;
	}
	
	.tips_box li>a{
		width: 100%;
	}
	.search-box .tips_box>ul>li p{
		display: inline-block;
		margin-right: 0.1875rem;
		font-size: 1rem;
		color: #111;
	}
	.search-box .tips_box>ul>li span{
		font-size: 0.75rem;
		color: #999999;
		line-height: 1.5rem;
	}
	.search-box .tips_box>ul>li span:last-child{
		float: right;
	}
</style>
