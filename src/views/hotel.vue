<template>
  <div class="hotel" >
      <div class="main flex">
			<!-- 第一部分 -->
			<div class="one">
				<div class="titel">订酒店</div>
				<label class="include"><input class="search" type="text" placeholder="出行目的地" v-model="search" @click="select" value="search">
				<div class="select_country border" v-show="bottom">
					<ul>
						<li>
							<h3>中国</h3>
							<div class="flex">
								<a id="sanya" @click="san($event)">三亚</a>
								<a id="bei" @click="san($event)">北京</a>
								<a>台北</a>
								<router-link to="">香港</router-link>
								<router-link to="">垦丁</router-link>
								<router-link to="">花莲</router-link>
								<router-link to="">重庆</router-link>
								<router-link to="">杭州</router-link>
								<router-link to="">厦门</router-link>
								<router-link to="">上海</router-link>
								<router-link to="">大理</router-link>
								<router-link to="">成都</router-link>
							</div>
						</li>
						<li>
							<h3>亚洲</h3>
							<div class="flex">
								<a  id="jing" @click="san($event)">东京</a>
								<a>京都</a>
								<router-link to="">大阪</router-link>
								<router-link to="">曼谷</router-link>
								<router-link to="">清迈</router-link>
								<router-link to="">花莲</router-link>
								<router-link to="">普吉岛</router-link>
								<router-link to="">吉隆坡</router-link>
								<router-link to="">芭提雅</router-link>
								<router-link to="">新加坡</router-link>
								<router-link to="">苏梅岛</router-link>
								<router-link to="">首尔</router-link>
							</div>
						</li>
						<li>
							<h3>欧洲</h3>
							<div class="flex">
								<router-link to="">巴黎</router-link>
								<router-link to="">伦敦</router-link>
								<router-link to="">罗马</router-link>
								<router-link to="">佛罗伦萨</router-link>
								<router-link to="">巴塞罗那</router-link>
								<router-link to="">阿姆斯特丹</router-link>
								<router-link to="">慕尼黑</router-link>
								<router-link to="">柏林</router-link>
								<router-link to="">斯德哥尔摩</router-link>
								<router-link to="">圣托里尼</router-link>
								<router-link to="">布拉格</router-link>
								<router-link to="">维也纳</router-link>
							</div>
							
						</li>
						<li>
							<h3>北美</h3>
							<div class="flex">
								<router-link to="">纽约</router-link>
								<router-link to="">洛杉矶</router-link>
								<router-link to="">拉斯维加斯</router-link>
								<router-link to="">旧金山</router-link>
								<router-link to="">塞班岛</router-link>
								<router-link to="">黄石国家公园</router-link>
								<router-link to="">重庆</router-link>
								<router-link to="">杭州</router-link>
								<router-link to="">厦门</router-link>
								<router-link to="">上海</router-link>
								<router-link to="">大理</router-link>
								<router-link to="">成都</router-link>
							</div>
						</li>
						<li>
							<h3>大洋洲</h3>
							<div class="flex">
								<router-link to="">墨尔本</router-link>
								<router-link to="">悉尼</router-link>
								<router-link to="">大洋路</router-link>
								<router-link to="">黄金海岸</router-link>
								<router-link to="">皇后岛</router-link>
								<router-link to="">基督城</router-link>
								<router-link to="">重庆</router-link>
								<router-link to="">杭州</router-link>
								<router-link to="">厦门</router-link>
								<router-link to="">上海</router-link>
								<router-link to="">大理</router-link>
								<router-link to="">成都</router-link>
							</div>
						</li>
					</ul>

				</div></label>
				<div class="go">
					<input class="start_time" type="text" placeholder="出发日期" @click="showCalendar($event)" data-name="start" v-model="startDate.toLocaleDateString().split('/').join('-')">
					<div class="_calendar" v-show="checkedDate=='start'">
						<calendar ref="calendar_1"></calendar>
					</div>
					<i class="rq"></i>
					
				</div>
				
			<div class="back">
				<input class="leave_time" type="text" placeholder="离店日期" @click="showCalendar($event)" @blur="change" data-name="end" v-model="endDate.toLocaleDateString().split('/').join('-')">
				<i class="rq"></i>
				<div class="_calendar" v-show="checkedDate=='end'">
						<calendar ref="calendar_2"></calendar>
				</div>
			</div>
				
				<label class="search_number" @click="number">
					<input class="number" type="text" placeholder="人数未定" v-model="ren">
					<i class="littel_ren"></i>
					<div class="select_number" v-show="numbers">
						<div class="number_one">
							<p>每间</p>
							<div class="border cart_one">
								
								<span id="span">{{shu[1]}}成人</span>
								<span class="number_bottom"><i @click="seven"></i></span>
								<ul class="seven" v-show="seven_left">
									<li @click="num(id)" id="yi">{{shu[0]}}</li>
									<li @click="num(id)" id="er">{{shu[1]}}</li>
									<li @click="num(id)" id="san">{{shu[2]}}</li>
									<li @click="num(id)" id="si">{{shu[3]}}</li>
									<li @click="num(id)" id="wu">{{shu[4]}}</li>
									<li @click="num(id)" id="liu">{{shu[5]}}</li>
									<li @click="num(id)" id="qi">{{shu[6]}}</li>
								</ul>
							</div>
							<div class="border cart_two">
								
								<span id="spans">{{shus[1]}}成人</span>
								<span class="number_bottom"><i @click="four"></i></span>
								<ul class="seven" v-show="seven_right">
									<li  @click="nums(id)" id="yii">{{shus[0]}}</li>
									<li  @click="nums(id)" id="err">{{shus[1]}}</li>
									<li  @click="nums(id)" id="sann">{{shus[2]}}</li>
									<li  @click="nums(id)" id="sii">{{shus[3]}}</li>
									
								</ul>

							</div>
						</div>
						
						
						<div class="number_two">
						<span>请优先选择日期，以便查询实时价格。</span>
						<a class="border" @click="sure">确认</a>
						</div>
					</div>
				</label>
				<div class="btn"  type="button">
					<i class="sq"></i>
				</div>
				</div>

				
			<!-- 第二部分 -->
			<div class="two">
				
					<ul class="flex1">
						<li class="flex">
							<i class="zs"></i>
							<div>
							<h2>住宿攻略</h2>
							<p>区域攻略到特色主题，应有尽有</p>
							</div>
						</li>
						<li class="flex">
							<i class="zx"></i>
							<div>
							<h2>专享价格</h2>
							<p>多平台价格对比，天天专享特惠</p>
							</div>
						</li>
						<li class="flex">
							<i class="dp"></i>
							<div>
							<h2>真实点评</h2>
							<p>超过100万真实用户点评和游记</p>
							</div>
						</li>
					</ul>
			</div>
						<!-- 第三阶段 -->
			<div class="three flex">
					<div class="title2">主题住宿</div>
					<a @click="zhuti ('1')" id="1">亲子之选</a>
					<a @click="zhuti('2')" id="2">超值酒店</a>
					<a @click="zhuti('3')" id="3">吃货根据地</a>
					<a @click="zhuti('4')" id="4">迪士尼乐园</a>
					<a @click="zhuti('5')" id="5">目的地特色</a>
					<a @click="zhuti('6')" id="6">浪漫花海</a>
					<ul class="t_img flex" v-show="one"  v-for="(p,index) in theme_details" :key="index">
						<router-link :to="`/hotel_two/${p.id}`" class="imgzt11">
						<div>
						<div class="yy" >
							<img :src="p.img">
							<span>{{p.city}}</span>
							<p>{{p.country}}</p>
						</div>
						</div>
						</router-link>
						</ul>	
					


			</div>
						<!-- 第三阶段 -->
			<div class="four flex1">
					<div class="title2">特价酒店</div>
					<a @click="tejia ('1')" id="1" class="nav">曼谷</a>
					<a @click="tejia ('2')" id="2" class="nav">台北</a>
					<a @click="tejia ('3')" id="3" class="nav">东京</a>
					<a @click="tejia ('4')" id="4" class="nav">香港</a>
					<a @click="tejia ('5')" id="5" class="nav">首尔</a>
					<a @click="tejia ('6')" id="6" class="nav">新加坡</a>
					
						<a class="imgzt21" v-for="(p,index) in special_details" :key="index">
							<div class="shadow">
								<span>{{p.score}}</span>
								<div>
								<p>{{p.hotel_name}}</p>
								<p>{{p.hotel_uname}}</p>
								</div>
							</div>
							<img :src="p.img">	
						</a>
						
			</div>
	    </div>
  </div>
</template>
<style scoped>
    ._calendar{
		position:absolute;
		width:526px;height: 240px;
	}
    	*{margin: 0;padding: 0;box-sizing: border-box;}
	p{
		margin:0 !important;
		
	}
	.border{
		border: 1px solid #999;
	}
	a{
		display:block;
	text-decoration: none;
	}
	.flex{
		display:flex;flex-wrap: wrap;
	}
	.flex1{
		display:flex;justify-content: space-between;flex-wrap:wrap;
	}
	i{
		display:inline-block;
	}

	.search:focus{
		border-color: #ff9d00;
		outline:none;
	}
	.select_country{
		width:730px;
		height:370px;
		padding:25px 10px 0 10px;
		border-radius:5px;
		z-index: 10;
		position: absolute;
		background: #fff;
		top: 45px;
		/* display:none; */

	}
	.select_country ul li div a{
		width:106px;
		height:19px;
		margin-bottom:15px;
		font-size:14px;
		color:#666;
	}
	.select_country ul li div a:hover{
		color:#ff9d00;
	}
	.select_country ul{
		list-style:none;
	}
	.select_country ul li h3{
		float: left;
		width:70px;
		height:19px;
		padding-left:10px;
		font-size:14px;
		color: #666;
	}
	.include{
		position: relative;
		margin-right:10px;
	}
	
	.main{width:1000px;border: 1px solid transparent; margin: 0 auto;color: #999;}
	.one{width:100%;
		display:flex;flex-wrap:wrap;
		outline:0;
	}
	.go,.back{
		width:20%; 
		position:relative;
		margin-top:-7px;
		margin-right:8px;
	}
	.start_time,.leave_time{
		width:100%;
		height:45px;
		border-radius:5px;
		color: #999;
		padding-left: 10px;
		margin-top:8px;
	
	}
	.seaech_number{
		width:20%;
		position: relative;
		
		
	}
	.number{
		width:100%;
		height:45px;
		border-radius:5px;
		color: #999;
		padding-left:8px;
	}
	.select_number{
		width:480px;
		height:139px;
		padding: 0 15px;
		border: 1px solid #999;
		border-radius: 5px;
		background: #fff;
		position: absolute;;
		z-index: 10;
		right:280px;
		top:173px;
		font-size:12px;
		color: #666;
		/* display:none; */
	}
	/* .number:focus+.littel_ren+.select_number{
		display:block;
	} */
	.number_one{
		margin:20px 0;
		width:100%;
		height:30px;
		line-height:28px;
	
		
	}
	.number_one div{
		margin-right:10px;
		
	}
	
	.number_one p{
		width:60px;
		height:28px;
	}
	
	.number_one>:not(first-child){
		float:left;
		padding:0 8px;
		width:90px;
		height:28px;
		border-radius:5px;
		
	}
	.cart_one,.cart_two{
		position: relative;
	}
	.number_bottom{
		margin-left:10px;
		border-left:1px solid #6666;
	}
	.number_bottom i{
		background:url(/img/i/i.png) -110px -205px;
		width:10px;
		height:10px;
		display:inline-block;
		position:absolute;
		top:10px;
		left:70px;
	}
	.seven{
		width:80px;
		padding:0px 15px;
		list-style:none;
		border:1px solid #e5e5e5;
		background:#fff;
		transition:all .2s;
		display:block;
		
	}

	.seven li:hover{
		background:rgba(0,0,0,0.1) ;
	}
	.number_two{
		width:100%;
		height:30px;
		padding:20px 0;
		border-top:1px solid #999;
		line-height:28px;
	}
	.number_two span{
		color:red;
		float:left;
	}
	.number_two a{
		width:70px;
		height:28px;
		line-height:20px;
		padding:2px 20px;
		float:left;
		margin-left:174px;
		border-radius:4px;
		background:#ffb200;
		color: #fff;
		border:0;	
	}
	.titel{
		font-size:24px;
		line-height: 30px;
		padding-top:60px;
		margin-bottom:30px;
		width: 100%;
	}	
	.include{
		width:30%;	
	}
	.main input{
		outline:none;
	}
	.main input:focus{
			border-color: #ff9d00;
		outline:none;
	}
	.search{
		width:100%;
		height:45px;
		border-radius:4px;
		font-size:14px;
		padding-left: 10px;
		outline:none;
		border-color: #666;
	}
	.rq{
		width:16px;
		height:16px;
		background:url(/img/i/i.png) -190px 0 no-repeat;
		
		position: absolute;
		top:20px;
		left:165px;
	}
	.littel_ren{
		width:20px;
		height:20px;
		background:url(/img/i/i.png) -70px -140px no-repeat;
		margin:0px -2px -5px -30px;
	}
	.btn{
		background-color:orange;
		width:46px;
		height:46px;
		line-height:46px;
		border-radius:5px;
		float: right;
		border: 0;
		margin-left:8px;
		text-align: center;
	}
	.sq{
		width:25px;
		height:25px;
		background: url(/img/i/1.png) 0 -160px no-repeat;
		margin:5px 15px;
	}
	.two{
		width:100%;
		margin-top:30px;
		}
	.zs{
		width:35px;
		height:43px;
		background:url(/img/i/hotel-i.png) 0px 0px no-repeat;
		margin-right:15px;
		margin-left:10px;
	}
	.zx{
		width:45px;
		height:45px;
		background:url(/img/i/hotel-i.png) -40px 0px no-repeat;
		margin-right:15px;
		margin-left:55px;
	}
	.dp{
		width:50px;
		height:50px;
		background:url(/img/i/hotel-i.png) -85px 0px no-repeat;
		margin-right:15px;
		margin-left:70px;
	}
	.two>ul>li{
		width:33.33%;
		list-style:none;
		font-weight:normal;
		color:#666;
		height:90px;
		margin-top:40px;
	
	}
	
		h2{
			font-size:18px;
			width: 196px;
			height: 18px;
			font-weight: normal;
			margin-bottom: 10px;
		}
			.two p{
				font-size:14px;
				margin-top:10px;
				width: 196px;
				height: 19px;
			}
			
	
		.t_img span{
			color: #fff;
			font-weight:bold;
			font-size:20px;
			z-index:3;
			display:block;
			position:absolute;
			top:90px;
			left:50px;
			margin-left:60px;padding-left: 10px;
		}
		.t_img .imgzt11,.imgzt12,.imgzt13,.imgzt14,.imgzt15,.imgzt16{
			 background-size:318px 240px;
			 width: 318px;
			 height:240px;
			 margin-top:10px;
			 margin-bottom:10px;
			 
		}
		.t_img p{
			position:absolute;
			top:120px;
			left:125px;
			font-weight:bold;
			color:#fff;
			z-index:3;
			font-size:16px;
			text-shadow:2px 2px 2px rgba(0,0,0,0.8);
			background-image:45deg,rgba(0,0,0,0.4) transparent 40%;
			
		}

		.yy{
				
				background:#000;
				width:318px;
				height:240px;
				z-index:0;
				
		}
		.yy img{
				background:#000;
				width:318px;
				height:240px;
				background-size: 100%;
				z-index:5;
		}
				
			
			.yy:hover{
				transform:translateZ(100px) scale(1);
				transition: opacity ease-in 1s;
			}
			.title2{
				margin: 100px 0 25px 0;
				text-align:center;
				font-size: 24px;
				line-height: 30px;
				color:black;
				width: 100%;
			}
			.three a{
				width: 16.66%;
				height: 50px;
				line-height: 50px;
				font-size:18px;
				color: #666;
				margin-top: 10px;
				border-bottom:1px solid #e4e4e4;
				text-align: center;
			}
			
			.imgzt11{
				background:#000;
				position:relative;
				background-size:318px 240px;
				margin-right:7px;
				margin-left:7px;
				}
		
			.shadow{
				background:rgba(0,0,0,0.3);
				width:100%;
				height:100%;
				z-index:1;
				margin-top:-190px;
				margin-left:-10px;
			}
			.four{
				width: 100%;
			}
			.four .imgzt21,.imgzt22,.imgzt23,.imgzt24,.imgzt25,.imgzt26,.imgzt27,.imgzt28{
				width:24%;
				height:240px;
				position:relative;
				margin:4px;
				background-size:290px 240px;

			}
			.four a img{
				width:100%;
				height:240px;
			}
			.four span{
				width:55px;
				height:25px;
				background-color:rgba(0,0,0,0.5);
				position:absolute;
				top:10px;
				left:10px;
				color:#fff;
				text-align:center;
				
				border-radius:3px;
			}
		
			.four a div{
				color:#fff;
				position:absolute;
				top:190px;
				left:10px;
				
				
			}
			.four a div p{
				font-size:13px;
				width:225px;
			}
	
			.four .nav{
				width:16.66%;
				height:50px;
				margin-bottom:15px;
				border-bottom:1px solid #e4e4e4;
				text-align: center;
				color:#666;
				font-size:18px;
			}
		
	.three>a:hover,.four>.nav:hover{
		border-bottom:2px solid orangered;
	}	
		
		
</style>
<script>
import calendar from '../components/calendar.vue'
    export default{
		data(){
			return{
				bottom:false,
				one:true,
				two:false,
				seven_left:false,
				seven_right:false,
				theme:[],
				theme_details:[],
				special:[],
				special_details:[],
				page:1,
				pages:1,
				id:this.$route.params.id,
				search:'',
				numbers:false,
				shu:[1,2,3,,5,6,7],
				shus:[1,2,3,4],
				ren:'',
				// =======日历========
				startDate:new Date(),
				endDate:new Date(new Date().getTime()+24*60*60*1000),
				checkedDate:"",
				pattern:"",
			}
		},
		
		mounted(){
			document.title="马蜂窝酒店预订，网上酒店预订，国内外酒店价格查询平台"
			this.zhuti(this.page)			
			 this.tejia(this.pages)
			
	

		},
		watch:{
			checkedDate(){
				console.log('我改变了，现在是'+this.checkedDate)
			},
			pattern(){
				if(this.pattern=="start"){
					this.$refs.calendar_1.pattern=this.pattern
				}else if(this.pattern=="end"){
					this.$refs.calendar_2.pattern=this.pattern
				}
				
			},
			// 当父组件的日期变化时将新值传入给子组件
			startDate(){
				this.$refs.calendar_1.start=this.startDate
				this.$refs.calendar_2.start=this.startDate
			},
			endDate(){
				this.$refs.calendar_1.end=this.endDate
				this.$refs.calendar_2.end=this.endDate
			}
		},
		methods:{
			// 弹出日历组件
			showCalendar(e){
				console.log(111)
				this.checkedDate=""
				this.checkedDate=e.target.dataset.name;
				console.log(this.checkedDate)
				if(this.checkedDate=="start"){
					this.$refs.calendar_1.pattern=e.target.dataset.name;
				}else if(this.checkedDate=="end"){
					this.$refs.calendar_2.pattern=e.target.dataset.name;
				}
			},
			
			change(e){
				if(this.checkedDate=="end"){
					this.checkedDate=end
				}
			},
		zhuti(id){
					
		 this.axios.get('/theme_details?page='+this.page).then(res=>{
				this.theme_details=res.data.results;											
				console.log(this.theme_details)
				this.page=Number(id)
				console.log(this.page)
				
			});	
			
			
			
		},
		tejia(id){
			//配置特价酒店详情
		this.axios.get('/special_details?pages='+this.pages).then(res=>{
			this.special_details=res.data.results;
			console.log(this.special_details)
			this.pages=Number(id)
			console.log(this.pages)		
		})				
		},							
			select(){											
				this.bottom=!this.bottom											
				},			
			san(event){	
				let span=event.currentTarget;
				console.log(span)	
				this.search=span.innerHTML									
				// let jing=document.getElementById('jing')
				// let sanya=document.getElementById('sanya')							
				// this.search=jing.innerHTML;
				// this.search=sanya.innerHTML;
				console.log(this.search)			
				// this.$router.push(`/hotel_two/${p.id}`)			
			},
			
			qinzi(){
				this.one=true
				this.two=false
			},
			dsn(){
				this.two=true
				this.one=false
			},
			number(){
				this.numbers=!this.numbers
				
			},
			num(id){
				let span=document.getElementById('span')
				let li=document.querySelector('.seven li')
				console.log(li)
				span.innerHTML=li.innerHTML+'成人';
				this.ren=span.innerHTML;

			},
			seven(){
				this.seven_left=true
				this.seven_right=false
				let input=document.getElementsByClassName('number')[0]
				console.log(input)
				let li=document.getElementsByTagName('li')[0]
				
			},
			nums(id){
				let spans=document.getElementById('spans')
				let li=document.querySelector('.seven li')
				spans.innerHTML=li.innerHTML+'成人'
			},
			four(){
				this.seven_right=true
				this.seven_left=false
			},
			sure(){
				this.seven_left=false;
				this.seven_right=false;
				this.numbers=false;
			}
			
		},
		components:{
			"calendar":calendar
		}
	 }
</script>