<template>
	<div class="destination_details_box">
		<div>
			<my-header></my-header>
		</div>
		<!-- 以上是页头 -->
		<div class="destination_details">
			
			<div class="dark">
				<div class="city_top">
					<!-- 引用面包屑导航栏组件 -->
					<div>
						<mdd-crumbNav ref="mddCrumbNav"></mdd-crumbNav>
					</div>
					<div>
						<p>{{place}}</p>
						<router-link to="">(<span>782459</span>张图片)</router-link>
						<p>{{place_en}}</p>
					</div>
					<!-- 引用目的地选项卡组件 -->
					<div class="_destination_nav">
						<destination-nav ref="destinationNav"></destination-nav>
					</div>
					<!-- 收藏 去过 -->
					<div class="action">
						<ul>
							<li><router-link to=""><i></i>收藏</router-link></li>
							<li><router-link to=""><i></i>去过</router-link></li>
						</ul>
					</div>
					
					
				</div>
			</div>
			<div class="container">
				<!-- 自由行线路推荐 -->
				<div class="free_line">
					<div class="warpper">
						<p class="title">{{place}}{{line.length}}条经典线路</p>
						<div>
							<div v-for="(t,i) of line" :key="i">
								<p><span>{{i+1}}</span>{{t.title}}</p>
								<img :src="t.pic" >
								<dl>
									<dt>
										<router-link to="">
											<span>{{t.proportion}}</span>初次访问东京的峰峰会选择这条线路
										</router-link>
									</dt>
									<dd v-html="t.d1"></dd>
									<dd v-html="t.d2"></dd>
									<!-- <dd v-html="t.d2">
										<router-link to="">查看></router-link>
									</dd> -->
								</dl>
							</div>
							
						</div>
						<div class="more_line">
							<i><div></div><div></div></i><router-link to=""><p>查看全部<span>{{line.length}}</span>条经典线路></p></router-link>
						</div>
					</div>
				</div>
				<!-- 酒店住宿攻略 必游景点排队 必吃美食排行 -->
				<div class="dark">
					<div class="warpper feature">
						<!-- 酒店住宿攻略 -->
						<div>
							<router-link to="" class="title">酒店住宿攻略<i></i></router-link>
							<dl v-for="(t,i) of hotel_place" :key="i" v-show="i<2">
								<dt><span>{{i+1}}</span>{{t.place}}</dt>
								<dd>
									<router-link to="">
										<div class="photo" v-show="i==0"><img :src="t.pic" ></div>
										<div>
											<h4><em>{{t.PC}}%</em>的游客选择住在这里</h4>
											<p>有<span>{{t.hotelAdd}}</span>家酒店。{{t.introduce}}</p>
										</div>
									</router-link>
								</dd>
							</dl>
							
							<div class="more"><router-link to="">{{hotel_place.length+102}}家酒店<i></i></router-link></div>
						</div>
						<!-- 必玩景点排行 -->
						<div>
							<router-link to="" class="title">必游景点排行<i></i></router-link>
							<dl v-for="(t,i) of jd" :key="i" v-if="i<2">
								<dt><span>{{i+1}}</span>{{t.name}}</dt>
								<dd>
									<router-link :to="{name:'jd_details',path:'/jd_details',params:{id:t.id}}"> 
										
										<div class="photo"  v-if="i==0"><img :src="t.pic" ></div>
										<div v-if="i<2">	
											<span class="user">
											<img :src="t.user_pic" class="user_photo">
											{{t.user}}
											</span>	
									
											<p v-html="t.content"></p>
										</div>
										
									</router-link>
								</dd>
							</dl>
							
							<div class="more"><router-link to="">{{jd.length}}个景点<i></i></router-link></div>
						</div>
						<!-- 必吃美食排行 -->
						<div>
							<router-link to="" class="title">必吃美食排行<i></i></router-link>
							<dl v-for="(t,i) of food" :key="i" v-show="i<2">
								<dt><span>{{i+1}}</span>{{t.name}}</dt>
								<dd>
									<router-link to="">
											<div class="photo" v-show="i==0">
												<img :src="t.pic" >
											</div>
											<div>
												<p class="food">{{t.introduce}}</p>
											</div>
									</router-link>
								</dd>
							</dl>
							
							<div class="more"><router-link to="">{{food.length+122}}个餐厅<i></i></router-link></div>
						</div>
					</div>
				</div>
				<!-- 自由行攻略 -->
				
				<div class="warpper">
					<p class="title">自由行攻略</p>
					<div>
						<div v-for="(t,i) of strategy" :key="i">
							<router-link to=""><img :src="t.pic"></router-link>
							<router-link to="">{{t.title}}</router-link>
							<p>{{t.Unit_title1}}</p>
							<p>{{t.Unit_title2}}</p>
							<div class="more">
								<router-link to="">查看详情<i></i></router-link>
							</div>
						</div>
						
					</div>
					<div>
						<router-link to="" class="button">查看全部</router-link>
					</div>
				</div>
				
				<!-- 酒店精选 -->
				<div class="dark">
					<div class="warpper">
						<p class="title">酒店精选<span>来的游客 大多会关注：</span><span class="change" @click="changeHotel"><i></i>换一换</span></p>
						
						<div class="hotel">
							<router-link to="" v-for="(t,i) of hotel" :key="i" v-show="hotelNum<=i && i<hotelNum+3">
								<div>
									<h2>{{t.type}}</h2>
									<p>{{t.introduce}}</p>
								</div>
								<img :src="t.pic" >
							</router-link>
						</div>
						<div class="btn_center">
							<router-link to="" class="button">查看该地区全部酒店</router-link>
						</div>
						
					</div>
				</div>
				
				
				<!-- 旅行商城 -->
				<div>
					<div class="warpper">
						<div>
							<p class="title">旅行商城</p>
							<ul>
								<li><router-link to="" class="active">机+酒</router-link></li>
								<li><router-link to="">机票</router-link></li>
								<li><router-link to="">半自助游</router-link></li>
								<li><router-link to="">邮轮</router-link></li>
								<li><router-link to="">景点门票</router-link></li>
								<li><router-link to="">一日游/多日游</router-link></li>
								<li><router-link to="">交通用车</router-link></li>
								<li><router-link to="">WiFi/电话卡</router-link></li>
								<li><router-link to="">当地玩乐</router-link></li>
								<li><router-link to="">签证</router-link></li>
							</ul>
						</div>
						<!-- 商城产品块 -->
						<div class="shopping">
							<div v-for="(t,i) of shopping" :key="i" v-show="i<4">
								<router-link to="">
									<div class="pic">
										<img :src="t.pic" >
									</div>
									<div class="text">
										<p>{{t.subtitle}}</p>
										<p><span>¥{{t.price}}</span>起</p>
									</div>
									
								</router-link>
								<router-link to="">新品上线</router-link>
							</div>
							
							
						</div>
						<div class="btn_center">
							<router-link to="">{{place}}还有170个机+酒产品>></router-link>
						</div>
					</div>
				</div>
				
				<!-- 东京问答 -->
				<div class="dark">
					<div class="warpper ">
						<div class="answer">
							<div>
								<div>
									<div><router-link to="">{{place}}问答</router-link>所有人帮助所有人</div>
									<router-link to="">查看所有问答>></router-link>
								</div>
								<div>
									<dl v-for="(t,i) of Q_A" :key="i">
										<dt><i></i><img :src="t.Q_pic" ><router-link to=""><span>{{t.Q_user}}</span></router-link><router-link to="">{{t.Q}}</router-link></dt>
										<dd><i></i><img :src="t.A_pic" ><router-link to=""><span>{{t.A_user}}</span></router-link><span class="best_answer">最佳答案</span><router-link to="">{{t.A}}</router-link></dd>
									</dl>
									
									
								</div>
							</div>
							<img src="/img/others/目的地指路人招募.jpg" >
						</div>
					</div>
				</div>
				<!-- 攻略下载 -->
				<div class="">
					<div class="warpper pdfpics">
						<div><p>攻略下载</p></div>
						<div>
							<div v-for="(t,i) of mfwStrategy" :key="i" v-if="mfwStrategy.length!=''">
								<img :src="t.pic" >
								<div>
									<dl>
										<dt>{{t.title}}</dt>
										<dd>{{t.content}}</dd>
										<span>
											更新时间：{{t.dateTime.split(".")[0].split("T").join(" ")}}
											下载人数：{{t.download}}
										</span>
									</dl>
								</div>
								<div>
									<router-link to="">下载PDF版本</router-link>
									<span>{{t.PDFsize}}</span>
									<router-link to="">下载JPG版本</router-link>
									<span>{{t.JPGsize}}</span>
								</div>
							</div>
							
						</div>
					</div>
				</div>
				<!-- 精选游记 -->
				<div class="dark">
					<div class="warpper tn">
						<div><router-link to="">{{place}}游记</router-link><router-link to="">{{place}}推荐行程</router-link></div>
						<div>
							<travel-notes ref="travelNotes"></travel-notes>
						</div>
					</div>
				</div>
				<!-- 城市地图缩略 -->
				<div class="maps">
					<div class="warpper btn_center">
						<router-link :to="{name:'map',params:{id:placeId},query:{place:place}}">{{place}}共有6683个去处，111654个美食和1583个住宿</router-link>
					</div>
				</div>
				<!-- 东京周边目的地 -->
				<div class="dark">
					<div class="warpper">
						<p class="">{{place}}周边目的地</p>
						<ul>
							<li v-for="(t,i) of subPlace" :key="i" v-if="subPlace.length!=''">
								<router-link to="">
									<img :src="t.pic">
									<dl>
										<dt><router-link to="">
											<strong>{{t.place}}</strong>
											<br>
											<b>{{t.been}}</b>人去过
										</router-link></dt>
										<dd>
											<router-link to="">{{t.include.split("|")[0]}}</router-link>
											<router-link to="">{{t.include.split("|")[1]}}</router-link>
											<router-link to="">{{t.include.split("|")[2]}}</router-link>
										</dd>
									</dl>
								</router-link>
							</li>
						</ul>
					</div>
				</div>
			</div>
			
		</div>
		<!-- 以上是页脚 -->
		<div>
			<my-footer></my-footer>
		</div>
		<back-top></back-top>
	</div>
</template>

<script>
	
	import destination_nav from "../../components/destination/destination_nav.vue"
	import mdd_crumbNav from '../../components/destination/mdd_crumbNav.vue'
	import travelNotes from '../homepage/travelNotes.vue'
	export default{
		data(){
			return {
				place:"",
				place_en:"",
				placeId:"",
				// 保存请求的景点信息
				jd:[],
				// 保存请求到商品信息
				shopping:[],
				// 保存请求到攻略信息
				strategy:[],
				mfwStrategy:[],
				// 保存请求到酒店分类信息
				hotel:[],
				hotelNum:0,
				hotel_place:[],
				// 保存请求到的美食信息
				food:[],
				// 保存请求到的问答信息
				Q_A:[],
				// 保存请求到线路信息
				line:[],
				// 保存请求到下级城市信息
				subPlace:[],
			}
			
		},
		methods:{
			changeHotel(){
				this.hotelNum+=3
				if(this.hotel.length==this.hotelNum){
					this.hotelNum=0
				}
			}
		},
		mounted(){
			
			this.axios.get('/lvyou/place_list',{
				params:{
					place:this.$route.params.place
				}
			}).then(result=>{
				this.place=result.data[0].place;
				this.place_en=result.data[0].place_en
				this.placeId=result.data[0].id;
				// 将服务器响应过来的数据同步给子组件
				this.$refs.travelNotes.place=this.place;
				this.$refs.travelNotes.placeId=this.placeId;
				this.$refs.mddCrumbNav.place=this.place;
				this.$refs.destinationNav.place=this.place;
				let id=result.data[0].id
				// 向服务器请求产品数据
				this.axios.get('/lvyou/shopping',{
					params:{
						id:id
					}
				}).then(result=>{
					this.shopping=result.data;
				})
			})
			
		},
		watch:{
			placeId(){
				this.$refs.mddCrumbNav.placeId=this.placeId
				// 向服务器请求景点信息
				this.axios.get('/lvyou/jd_list',{
					params:{
						id:this.placeId
					}
				}).then(result=>{
					this.jd=result.data
					for(let i=0;i<2;i++){
						this.axios.get('/lvyou/comment',{
							params:{
								placeId:result.data[i].id,
								typeId:1,
								page:1,
								pageSize:1,
								star:5
							}
						}).then(result=>{
							this.jd[i].user=result.data.result[0].user
							this.jd[i].user_pic=result.data.result[0].user_pic
							this.jd[i].content=result.data.result[0].content
							
						})
					}
					
				})
				
				// 向服务器请求酒店分类信息
				this.axios.get('/lvyou/hotel_type',{
					params:{
						id:this.placeId
					}
				}).then(result=>{
					this.hotel=result.data;
				})
				this.axios.get('/lvyou/hotel_place',{
					params:{
						id:this.placeId
					}
				}).then(result=>{
					this.hotel_place=result.data;
				})
				// 向服务器请求美食信息
				this.axios.get('/lvyou/food_list',{
					params:{
						id:this.placeId
					}
				}).then(result=>{
					this.food=result.data
				})
				// 向服务器请求攻略信息
				this.axios.get('/lvyou/gl_list',{
					params:{
						id:this.placeId
					}
				}).then(result=>{
					this.strategy=result.data;
				})
				this.axios.get('/lvyou/mfw_gl_list',{
					params:{
						id:this.placeId
					}
				}).then(result=>{
					this.mfwStrategy=result.data;
				})
				// 向服务器请求问答信息
				this.axios.get('/lvyou/qa_list',{
					params:{
						id:this.placeId
					}
				}).then(result=>{
					this.Q_A=result.data;
				})
				// 向服务请求线路信息
				this.axios.get('/lvyou/line_list',{
					params:{
						id:this.placeId
					}
				}).then(result=>{
					this.line=result.data;
				})
				// 向服务器请求目的地的下级城市/国家的信息
				this.axios.get('/lvyou/place_include',{
					params:{
						id:this.placeId
					}
				}).then(result=>{
					this.subPlace=result.data;
				})
				document.title=`2020${this.place}旅游攻略，东京自由行攻略，马蜂窝${this.place}出游攻略游记 - 马蜂窝`
				
				
				
			}
		},
		
		components:{
			"destination-nav":destination_nav,
			'mdd-crumbNav':mdd_crumbNav,
			'travel-notes':travelNotes
		}
	}
</script>

<style lang="scss" scoped>
	*{margin: 0;padding: 0;box-sizing: border-box;}
	body{
		font-size: 14px;
		font-family: Arial,"Lucida Grande","Microsoft Yahei","Hiragino Sans GB","Hiragino Sans GB W3",SimSun,"PingFang SC",STHeiti;
		_font-family: Tahoma,Arial,Helvetica,STHeiti;
		color: #666;
		font-size: 0.875rem;
	}
	@mixin flex($a,$b,$c,$d,$e){
		display:flex;
		flex-direction: $a;
		justify-content: $b;
		align-items: $c;
		flex-wrap: $d;
		flex-shrink: $e;
	}
	@mixin core($a,$b,$c,$d,$e){
		top: $a;right: $b;bottom: $c;left: $d;margin:$e;
	}
	.flex{
		@include flex(column,space-between,space-around,wrap,0);
	}
	$theme_color:#ff9d00;
	a{
		text-decoration: none;
		color: #333333;
		display: block;
		.theme_bg_color{
			background-color: $theme_color;
		}
		.theme_font_color{
			color: $theme_color;
		}
		.nav_a{
			&:focus{
				color: #fff;
				background: $theme_color;
			}
		}
	}
	ul,ol,li,dl,dd,dt{
		margin: 0;padding: 0;list-style: none;
	}
	input{
		border: 0;outline: 0;
	}
	i{display: block;};
	.price{
		font-size: 1.375rem;
		color: $theme_color;
		>span{font-size: 0.875rem;color: #999;}
	}
	.more{
		margin-top: 0.9375rem;
		padding-top: 0.9375rem;
		border-top: 1px dashed #ebebeb;
		font-size: 0.875rem;
		line-height: 0.875rem;
		text-align: center;
		>a{
			position: relative;
			display: inline !important;
			padding-right: 0.9375rem;
			color: $theme_color;
			@include flex(n,space-between,center,n,0)
			>i{
				position:absolute;
				top: 0.1875rem;
				display: inline-block;
				width: 0.8125rem;height: 0.8125rem;
				background: url(/img/sprites/place-sprite8.png) no-repeat -2.8125rem 0;
			}
		}
	}
	p{
		display: block;
	}
	div{
		// border: 1px solid #333333;
	}
	// =======================================
	.destination_details_box{
		position: relative;
	}
	.destination_details{
		position: relative;
	}
	// 城市概览页通用导航栏
	.button{
		display: inline-block;
		height: 2.625rem;
		padding: 0 2.625rem;
		border:1px solid $theme_color;
		background: #FFFFFF;
		color: $theme_color;
		line-height: 2.625rem;
		border-radius: 0.25rem;
		@include core(0,0,0,0,auto);
		&:hover{
			background: $theme_color;
			color: #FFFFFF;
		}
	}
	.btn_center{
		margin-top: 1.5625rem;
		text-align: center;
	}
	.dark{
		border: 1px solid #e4e4e4;
		background:#fafafa;
	}
	.city_top{
		position:relative;
		width: 62.5rem;
		margin: auto;
		._destination_nav{
			width: 100%;
			background: #fafafa;
			
		}
		>div:first-child{
			
			
		}
		>div:nth-child(2){
			// display: flex;
			// align-items: flex-end;
			margin-bottom: 1.25rem;
			>p:first-child{
				display: inline;
				font-size: 2.5rem;
				margin-right:0.9375rem;
				color: #000000;
			}
			>a{
				display: inline;
				color: #999999;
				&:hover{
					text-decoration:underline;
				}
				>span{
					color:$theme_color;
				}
			}
			>p:nth-child(3){
				font-size:1.25rem;
				color: #999999;
			}
			
		}
		.action{
			position:absolute;
			top: 2.1875rem;right: 0rem;
			width: 12.25rem;height:1.875rem;
			>ul{
				@include flex(n,n,center,n,0)
				>li{
					>a{
						margin-left:1.5625rem;
						@include flex(n,n,center,n,0)
						>i{
							width:1.875rem;height: 1.875rem;
							background: url(/img/sprites/poiV3-sprite6.png) no-repeat -14.375rem 0;
							margin-right:10px;
						}
					}
				}
			}
		}
	}
	
	// 主页部分
	.container{
		.warpper{
			width: 62.5rem;
			margin: 0 auto;
			padding:2.5rem 0;
			.title{
				margin-bottom: 2.1875rem;
				font-size: 1.625rem;
				color:#333333;
			}
		}
		
		// 东京13条经典线路
		.free_line{
			>div{
				>div:nth-child(2){
					@include flex(n,space-between,n,n,0);
					>div{
						width:30.625rem;height: 23.125rem;
						border: 1px solid #e6e6e6;
						box-shadow: 0 0 3px rgba(224,224,224,.75);
						>p:first-child{
							font-size: 1.25rem;
							margin:0.9375rem 1.25rem;
							>span{
								position: relative;
								display: inline-block;
								width: 1.375rem;height: 1.5rem;
								background: $theme_color;
								margin-right: 0.9375rem;
								color: #FFFFFF;
								text-align: center;
								line-height: 1.5rem;
								&:after{
									content: "";
									position: absolute;
									left: 0;
									bottom: -7px;
									border-left: 0.6875rem solid $theme_color;
									border-right: 0.6875rem solid $theme_color;
									border-bottom: 0.4375rem dashed transparent;
								}
							}
						}
						>dl{
							padding: 0 1.25rem;
							>dt{
								margin: 0.625rem 0;
								font-size: 1rem;
								>a{
									@include flex(n,n,center,n,0)
									span{
										margin-right: 0.75rem;
										font-size: 1.75rem;
										color: $theme_color;
										white-space: nowrap;
										overflow: hidden;
										text-overflow: ellipsis;
									}
								}
							}
							dd{
								position: relative;
								padding-bottom: 0.9375rem;
								a{
									width: 25rem;height: 1.5rem;
									line-height: 1.5rem;
									white-space: nowrap;
									overflow: hidden;
									text-overflow: ellipsis;
									i{
										display: inline-block;
										width: 0.875rem;height: 0.625rem;
										margin: 0 10px;
										background: url(/img/sprites/line-details-sprites2.png) no-repeat -5rem 0;
									};
								}
								>a:last-child{
									width: 10%;
									position: absolute;
									display: inline !important;
									right: 0px;
									bottom: 0;
								}
							}
						}
					}
				}
				.more_line{
					display: flex;
					align-items: center;
					justify-content: flex-end;
					padding-top: 1.875rem;
					>i{
						display: inline-block;
						width: 1.5625rem;height: 1.5625rem;
						margin-right: 10px;
						background: #fff;
						border: 1px solid #909090;
						border-radius: 0.0625rem;
						>div:first-child{
							height: 0.875rem;
							background-color: #7fc8ed;
						}
						>div:nth-child(2){
							height: 0.3125rem;
							background: #FF9D00;
						}
					}
					p{
						display: inline-block;
						font-size: 1.125rem;
						color: #333333;
						>span{
							font-size: 1.5rem;
							color: #FF9D00;
						}
					}
				}
			}
		}
		// 酒店住宿攻略 必游景点排队 必吃美食排行
		>div:nth-child(2){
			.feature{
				@include flex(n,space-between,n,n,0);
				>div{
					width: 18.75rem;
					>a{
						display: inline;
						position: relative;
						margin-bottom: 0.625rem;
						padding-right: 1.25rem;
						>i{
							position: absolute;
							top: 6px;
							right: 0;
							width: 0.8125rem;height: 0.8125rem;
							display: inline-block;
							background: url(/img/sprites/place-sprite8.png) no-repeat -1.875rem 0;
						}
					}
					dl{
						margin-top: 1.25rem;
						padding: 2px;
						&:hover{
							background: #fff !important;
						}
					}
					dt{
						margin-bottom:0.625rem;
						padding-bottom: 0.25rem;
						font-size: 1.125rem;
						color: #000000;
						text-overflow: ellipsis;
						overflow: hidden;
						@include flex(n,n,center,n,0)
						span{
							display: inline-block;
							width: 1.25rem;height: 1.25rem;
							background: $theme_color;
							margin-right:0.625rem;
							font-size: 1rem;
							color: #FFFFFF !important;
							text-align: center;
							line-height: 1.25rem;
							border-radius: 0.1875rem;
						}
						
					}
					dd{
						div{
								&:last-child{
									height: 95px;
								}
							}
					
						.user{
							display: inline-block;
							font-size: 1rem;
							color: #333333;
							margin-bottom: 0.1875rem;
							
							.user_photo{
								width: 24px;
								height: 24px;
								border-radius: 50%;
								float: left;
								margin: 0 10px 0 0;
								&:after{
									content: "";
									display: block;
									clear: both;
								}
							}
						}
						p{
							max-height: 4.9375rem;
							font-size: 1rem;
							line-height: 1.25rem;
							display: -webkit-box;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 3;
							overflow: hidden;
						}
						.food{
							-webkit-line-clamp: 4;
						}
						h4{
							margin-bottom: 0.5rem;
							font-size: 1rem;
							color: #000000;	
							font-weight: normal;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
							
						}
						
						.photo>img{
							width: 18.5rem;height: 9.75rem;
							margin-bottom: 0.9375rem;
							object-fit: cover;
						}
						
						em{
							margin-right: 0.625rem;
							font-size: 1.375rem;
							font-style: normal;
							color: $theme_color;
						}
						span{
							color: $theme_color;
						}
					}
				}
			}
			
		}
		// 自由行攻略
		>div:nth-child(3){
			>div:nth-child(2){
				@include flex(n,space-between,n,n,0);
				>div{
					width: 19.375rem;height: 19rem;
					>a:first-child{
						height: 10.625rem;
						margin-bottom: 0.625rem;
					}
					>a:nth-child(2){
						width: 100%;
						margin-bottom: 0.3125rem;
						font-size: 1.125rem;
						color: #000000;
						white-space:nowrap;
						text-overflow: ellipsis;
						overflow: hidden;
					}
					>p{
						line-height: 1.25rem;
						white-space:nowrap;
						text-overflow: ellipsis;
						overflow: hidden;
						
						&:before{
							content: "";
							display:inline-block ;
							margin-right: 0.75rem;
							width: 3px;height: 0.625rem;
							background: $theme_color;
							
						}
					}
					
				}
			}
			>div:last-child{
				height: 2.625rem;
				margin-top: 1.5625rem;
				text-align: center;
			}
		}
		// 酒店精选
		>div:nth-child(4){
			>div{
				>p{
					>span{
						margin-left: 0.9375rem;
						font-size: 0.9375rem;
						font-weight: normal;
						color: #666666;
					}
					.change{
						display: flex;
						align-items: center;
						float: right;
						
						height: 35px;
						font-size: 0.75rem;
						color: #999999;
						cursor: pointer;
						i{
							width: 0.875rem;height: 0.875rem;
							margin-right: 0.25rem;
							background: url(/img/sprites/change.png) no-repeat ;
						}
					}
				}
				.hotel{
					@include flex(n,space-between,center,n,0)
					>a{
						position:relative;
						width: 19.375rem;height: 19.4375rem;
						text-align: center;
						>img{
							position: absolute;
							right: 0;
							width: 100%;height: 100%;
							object-fit: cover;
						}
						>div{
							z-index: 1;
							position: absolute;
							width: 19.375rem;height: 19.4375rem;
							background: rgba(0,0,0,0.25);
							text-shadow: #000 0 1px 0;
							>h2{
								display: inline-block;
								margin-top: 3.75rem;
								padding: 0.75rem 0.3125rem;
								border-top: 2px solid #FFFFFF;
								border-bottom: 2px solid #FFFFFF;
								font-size: 1.375rem;
								color: #FFFFFF;
							}
							>p{
								width: 230px;height: 4.125rem;
								font-size: 14px;
								color: #FFF;
								line-height: 22px;
								margin: 45px auto 0 auto;
								padding: 0;
								text-align: left;
								text-shadow: #000 0 1px 0;
								display: -webkit-box;
								-webkit-box-orient: vertical;
								-webkit-line-clamp: 3;
								overflow: hidden;
							}
						}
						
					}
				}
			}
		}
			
			
		// 旅行商城
		>div:nth-child(5){
			>div{
				>div:first-child{
					margin-bottom: 0.9375rem;
					padding: 0.625rem 0;
					border-bottom: 1px solid #E4E4E4;
					@include flex(n,n,center,n,0)
					>p{
						width:8.75rem;margin-bottom:0;
						font-size:1.5rem;
						line-height: 1.875rem;
					}
					>ul{
						@include flex(n,n,center,n,0)
						>li{
							>a{
								margin-right:0.3125rem;
								padding: 0 0.3125rem;
								font-size: 1rem;
								line-height: 1.875rem;
								
							}
							.active{
								background: #FF9D00;
								color: #fff;
							}
							
						}
					}
				}
				>div:nth-child(2){
					@include flex(n,space-between,center,n,0)
					>div{
						position:relative;
						width: 14.875rem;
						>a:first-child{
							position: relative;
							height: 14.625rem;
							&:hover .text{
								
								height: 8.75rem;
								background: #f9f9f9;
								transition: height .2s linear;
								
							}
							&:hover .text p:first-child{
								height: 77px;
								transition: all .2s linear;
							}
							.pic{
								width: 14.875rem;height: 8.375rem;
								>img{
									width: 100%;height: 100%;
								}
							}
							.text{
								position: absolute;
								bottom: 0;
								width: 100%;
								height: 6.25rem;
								border:1px solid #f1f1f1;
								padding: 0.3125rem 0.625rem 1.125rem;
							}
							p:first-child{
								position: absolute;
								bottom: 37px;
								height: 38px;
								margin-bottom: 0.9375rem;
								color: #000000;
								line-height: 20px;
								overflow: hidden;
							}
							p:last-child{
								position: absolute;
								bottom: 18px;
								color: $theme_color;
								span{
									font-size: 1.375rem;
									font-weight: bold;
								}
							}
						}
						>a:last-child{
							position:absolute;
							bottom: 10px;
							right: 5px;
							font-size: 0.75rem;
							color: #666666;
						}
					}
				}
				>div:last-child{
					>a{
						display: inline-block;
						font-size: 1rem;
						color: $theme_color;
						&:hover{
							text-decoration: underline;
						}
					}
				}
			}
		}
		// 东京问答
		.answer{
			&:after{
				content: "";
				display: block;
				clear: both;
			}
			>div:first-child{
				float: left;
				width: 42.5rem;
				>div:first-child{
					&:after{
						content: "";
						display: block;
						clear: both;
					}
					>div:first-child{
						float:left;
						margin-bottom: 2.1875rem;
						padding-left: 5px;
						font-size: 18px;
						color: #a8a8a8;
						@include flex(n,n,center,n,0)
						
						a{
							float: left;
							margin-right: 0.3125rem;
							font-size: 1.5rem;
							font-weight: normal;
							color:#643718;
						}
					}
					>a{
						float: right;
						height: 1.5rem;
						line-height: 1.5rem;
					}
				}
				>div:nth-child(2){
					>dl{
						margin-bottom: 1.25rem;
						padding-bottom:0.3125rem;
						border-bottom: 1px dashed #ddd;
						a{
							vertical-align: top;
							margin-right: 0.625rem;
							&:hover{
								text-decoration: underline;
							}
						}
						dt{
							font-size: 1rem;
							color: #643718;
							@include flex(n,n,center,n,0)
							i{
								width: 1.875rem;height: 1.875rem;
								margin-right: 5px;
								background: url(/img/sprites/place-sprite8.png) no-repeat -3.75rem 0;
							}
							img{
								width: 2rem;height: 2rem;
								margin-right: 0.1875rem;
								border-radius: 50%;
							}
							span{
								font-size: 0.75rem;
								margin-top: 2px;
								margin-right: 0.625rem;
							}
							
						}
						dd{
							
							margin-top: 1.25rem;
							@include flex(n,n,n,n,0)
							i{
								width: 1.875rem;height: 1.875rem;
								margin-right: 5px;
								background: url(/img/sprites/place-sprite8.png) no-repeat -3.75rem -1.875rem;
							}
							img{
								width: 2rem;height: 2rem;
								margin-right: 0.1875rem;
								border-radius: 50%;
							}
							>span{
								font-size: 0.75rem;
								margin-left: 2px;
								margin-right: 0.625rem;
							}
							.best_answer{
								margin-right:0.625rem;
								color:#92bf48;
								font-size:0.875rem
							}
							a:last-child{
								width: 72%;
								margin: 0;
								color:#666666;
								display: -webkit-box;
								-webkit-box-orient: vertical;
								-webkit-line-clamp: 2;
								overflow: hidden;
							}
						}
					}
				}
			}
			>img{
				float: right;
			}
		}
		// 攻略下载
		.pdfpics{
			>div:first-child{
				margin-bottom: 2.5rem;
				font-size: 1.625rem;
				color: #333333;
				text-align: center;
			}
			>div:last-child{
				@include flex(n,space-between,center,n,0)
				>div{
					width:30rem;height: 13rem;
					@include flex(n,n,center,n,0);
					img{
						width: 8.75rem;height: 12.5rem;
					}
					>div:nth-child(2){
						width:11.25rem;height: 13.5rem;
						margin-left: 1.25rem;
						dt{
							margin-bottom: 0.3125rem;
							font-size: 1.375rem;
							color: #643718;
							line-height: 1.875rem;
						}
						dd{
							height: 8.75rem;
							margin: 0.3125rem 0;
							color: #643718;
							line-height:1.5rem;
							display: -webkit-box;    
							-webkit-box-orient: vertical;    
							-webkit-line-clamp: 6;    
							overflow: hidden;
							// text-overflow: ellipsis;
						}
						span{
							font-size: 0.75rem;
							color: #ff7800;
						}
					}
					>div:nth-child(3){
						margin-left: 0.625rem;
						line-height: 1.25rem;
						a{
							width: 7.5rem;height: 3.625rem;
							margin-bottom: 0.625rem;
							border-radius: 0.3125rem;
							color: #FFFFFF;
							font-size: 1rem;
							text-align: center;
							clear: both;
							line-height: 3.625rem;
							&:first-child{background: #92bf48;}
							&:nth-child(3){background: #54b4e6;}
						}
						span{
							margin-bottom: 0.625rem;
							float: right;
							font-size: 0.75rem;
							color: #666666;
						}
					}
				}
			}
		}
		// 精选游记
		.tn{
			>div:first-child{
				margin-bottom: 1.50rem;
				@include flex(n,n,center,n,0)
				font-size:1.125rem;
				>a:last-child{
					margin-left: 1.75rem;
					font-size: 1rem;
					color: #666666;
				}
			}
		
		}
		// 缩略地图
		.maps{
			padding: 2.5rem 0;
			>div:first-child{
				height: 14.375rem;
				padding: 0 !important;
				background: url(/img/destination/traffic/东京地图简化版.jpeg) ;
				>a{
					display: inline-block;
					margin-top: 5.9375rem;
					padding: 0.9375rem 1.75rem;
					border: 2px solid $theme_color;
					background: #FFFFFF;
					line-height: 1.75rem;
					font-size: 1.125rem;
					color: $theme_color;
				}
			}
		}
		// 东京周边目的地
		>div:last-child{
			>div{
				>p{
					margin-bottom: 35px;
					text-align: left;
					font-size: 26px;
					color: #333;
					font-weight: normal;
					line-height: 30px;
				}
				>ul{
					display: flex;
					justify-content: space-between;
					flex-wrap: wrap;
					>li{
						flex:(0 0 32%);
						margin-bottom: 20px;
						&:hover{
							dl > dt > a > strong{
								color: #FF9D00 !important;
							}
							box-shadow: 0 0 5px rgba(224,224,224,.75);;
						}
						dl{
							height: 9.125rem;
							margin-top: -7px;
							padding: 0.625rem 1.25rem;
							border: 1px solid #E4E4E4;
							>dt{
								padding: 0.3125rem 0 0.75rem;
								border-bottom: 1px solid #E4E4E4;
								>a{
									display: block !important;
									text-align: center;
									color: #999999;
									>strong{font-size: 1.5rem;font-weight: normal;color: #333333;}
									>b{color: $theme_color;}
								}
							}
							>dd{
								margin-top: 0.9375rem;
								display: flex;
								align-items: center;
								justify-content: center;
								>a{
									color: #666666;	
									
									&:not(:last-child)::after{
										content: "|";
										margin: 0 0.625rem;
										font-size: 0.625rem;
										color: #dadada;
									}
									
								}
								
							}
						}
					}
				}
			}
		}
		
	
	}
</style>
