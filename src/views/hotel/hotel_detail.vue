<template>
	<div class="details">
			<div class="pop-box" v-show="box">
				<div class="inside">
					<div class="box-nav">
						<a href="">全部(225)</a>
						<a href="">外观(6)</a>
						<a href="">内景(27)</a>
						<a href="">房间(149)</a>
						<a href="">环境(36)</a>
						<a href="">餐厅(7)</a>
						<a href="">用户图片(118)</a>
					</div>
					<div>
						<a class="cut" @click="cut"><i></i></a>
					</div>
					<div class="photo_left">
						<img :src="this.arrs[0]" class="my-big" alt="1" ref="imgs" data-big="/img/hotel_detail/b2.jpeg">
						<div class="cover">
							<a  class="left"></a>
							<a class="right"></a>
						</div>
					</div>
					<div>
						<a href="javascript:;" class="btn-up" @click="btn_up"><i></i></a>
					</div>
					<div>
						<a href="javascript:;" class="btn-down" @click="btn_down"><i></i></a>

					</div>
					<div class="photo_right" @click="right($event)">
						<ul>
							<li v-show="first">
								<img :src="p.s_img_one" data-target="/img/hotel_detail/bg2.jpeg" class="my-small" data-number="one">
							</li>
							<li>
								<img :src="p.s_img_two" data-target="/img/hotel_detail/bg3.jpeg" class="my-small" data-number="two">
							</li>
							<li>
								<img :src="p.s_img_three" data-target="/img/hotel_detail/bg4.jpeg" class="my-small">
							</li>
							<li>
								<img :src="p.s_img_four" data-target="/img/hotel_detail/bg5.jpeg" class="my-small">
							</li>
							<li>
								<img :src="p.s_img_five" data-target="/img/hotel_detail/bg6.jpeg" class="my-small">
							</li>
							<li v-show="last">
								<img :src="p.s_img_six" data-target="/img/hotel_detail/bg7.jpeg" class="my-small">
							</li>
						</ul>
					</div>
				</div>

			</div>
			<!-- 房型简要说明 -->
			<div class="heigh" v-show="heigh">
				<div class="heigh_detail">
					<div class="flex">
						<span>高级房详情</span>
						<a class="tuo" @click="close"><i class="quan"></i></a>
					</div>
					<strong>房间数：</strong><span>58间</span><strong>面积：</strong><span>42平方米</span><strong>楼层：</strong><span>6-8层</span><strong>是否有窗：</strong><span>有窗</span>
					<strong>能否加床：加床</strong><span>：RMB 298</span><strong>床型：</strong><span>1张1.8米大床 或 2张1.2米单人床</span>
					<strong>无烟信息：该房可无烟处理宽带：</strong>
					<span>全部房间：支持免费有线和无线宽带上网</span>
				</div>
			</div>		
			<!-- 	网页头部 -->
			<div class="">
				<my-header></my-header>
			</div>
			<!-- 导航栏 -->	
			<!-- 搜索区域 -->
			<div class="top-nav">
				<ul>
					<div class="here"><a >您在这里：</a></div>
					<div class="country_hotel">
						<a @mouseenter="go" @mouseleave="out">酒店<i class="biao"></i></a><span>></span>
						<div v-show="hotel">
							<p><a>周边国家和地区</a></p>
							<p><a>朝鲜</a><span>North Korea</span></p>
							<p><a>韩国</a><span>Korea</span></p>
							<p><a>蒙古</a><span>Mongolia</span></p>
							<p><a>日本</a><span>Japan</span></p>
							<p><a>俄罗斯</a><span>Russia</span></p>
							<p><a>老挝</a><span>Laos</span></p>
						</div>
					</div>
					<div class="china">
						<a @mouseenter="inner" @mouseleave="outside">{{p.country}}<i class="biaoo"></i></a><span>></span>
						<div v-show="china">
							<p><a>中国其他城市</a></p>
							<p><a>北京</a><span>Beijing</span></p>
							<p><a>西安</a><span>xi'an</span></p>
							<p><a>深圳</a><span>Shenzhen</span></p>
							<p><a>广州</a><span>guangzhou</span></p>
							<p><a>重庆</a><span>ChongQing</span></p>
						</div>
					</div>
					<div class="cityy"><a>{{p.city}}</a><span>></span></div>
					<div class="ding"><a>{{p.yuding}}</a></div>
				</ul>
			</div>						
				<!-- 	酒店头部以及主要图片 -->
				<div class="hotel-header">
					<div class="chinese-title">
						<h1>{{p.hotel_name}}<i class="bird"></i></h1>
					</div>
					<div class="en-title">
						<span>{{p.hotel_uname}}</span>
					</div>
					<div class="location">
						<span>{{p.adress}}</span>
						<a href="">
							<i class="s_dt"></i>
							<img src="" alt="">查看地图</a>
					</div>
					<!-- 酒店主要图片 -->
					<div class="hotel1hotel_detail flex">
						<div class="left_img" @click="left_img">
							<img class="big_img" :src="p.b_img">
							<div class="float_text flex">
								<p>{{p.f_text}}</p>
							</div>
						</div>
						<ul class="right_img flex1" @click="big_window">
							<li>
								<img :src="p.s_img_one">
							</li>
							<li>
								<img :src="p.s_img_two">
							</li>
							<li>
								<img :src="p.s_img_three">
							</li>
							<li>
								<img :src="p.s_img_four">
							</li>
							<li>
								<img :src="p.s_img_five">
							</li>
							<li>
								<img :src="p.s_img_six">
							</li>
							
						</ul>
					</div>
				</div>			
				<!-- 图片下面导航栏 -->
				<div class="middle_nav flex">
					<div class="middle flex">
						<ul class="left_nav clearfix flex">
							<a href="#room_choose">预定</a>
							<a href="#lue">攻略</a>
							<a href="#ditu">位置</a>
							<a href="#ping">点评</a>
						</ul>
						<div class="right_nav flex">
							<i class="wjx"></i>
							<a href="">收藏</a>
						</div>
					</div>
				</div>
				<div class="totall" v-for="(p,index) in hotel_detail" :key="index">	
					<div class="banner"><img src="/img/banner.png" style="width:100%,margin:40px 0"></div>										
						<div class="middle_search flex">
							<div class="go">
								
								<input class="start_time border" type="text" @focus="showCalendar($event)" data-name="start" v-model="startDate.toLocaleDateString().split('/').join('-')">
								<div class="_calendar" v-show="checkedDate=='start'">
									<calendar ref="calendar_1"></calendar>
								</div>
								<i class="rt"></i>
							</div>
							<div class="s_img"></div>
							<div class="back">
								<input class="leave_time border" type="text" @focus="showCalendar($event)" data-name="end" v-model="endDate.toLocaleDateString().split('/').join('-')">
								<div class="_calendar" v-show="checkedDate=='end'">
									<calendar ref="calendar_2"></calendar>
								</div>
								<i class="rt"></i>
							</div>
							<input class="number border" type="text" placeholder="1成人"><i class="ren"></i>
							<button class="btn" type="button" @click="prices" ref="button">查看价格</button>
						</div>
						<!-- 	中间价格选择 -->					
							<div class="room_detail border" id="room_choose">
								<div>房型</div>
								<div>人数上限</div>
								<div>相关政策</div>
								<div>价格</div>
								<div>预订房间数</div>
							</div>
							<!-- 房间具体信息 -->
							<div class="hotel_room ">
								<div class="room_left">
									<div class="room_type" @click="room_type">
										<i class="point"></i>
										<span>{{p.room_type_a}}</span>
										<a>查看详情</a>
									</div>
								</div>
								<div class="flex5 room_right">
									<div class="room_desc flex4 border5">
										<div class="user_number">
											<i class="t_ren"></i>
											<span>{{p.people_a}}</span>
										</div>
										<ul>
											<li>{{p.limit_a}}</li>
											<li>{{p.limit_b}}</li>
											<li>{{p.limit_c}}</li>
											<li>{{p.limit_d}}</li>
											<li class="xianzhi">入住限制
												<i class="ruzhu"></i>
												<span class="zeng">2020年1月24日入住赠送价值298元除夕夜单人海鲜火锅自助晚餐1次，使用时间：1月24日17：00-19：00，需提前预约餐位，预约电话：0898-31528888转餐饮部。</span>
											</li>
										</ul>
										<div class="room_price">
											<strong>{{p.price_a}}</strong>
											<i>(已含税)</i>
										</div>
										<div class="yuding flex1">
											<div class="kuang border" @click="kuang">
												<span  ref="number">1</span>
												<span></span>
												<span><i class="kuang_number" @click="numbers"></i></span>
											</div>
											<router-link :to="`/hotel_order/${p.id}`">预定</router-link>
											<span class="surplus">剩余8间</span>
											<!-- 隐藏房间数部分 -->
											<ul class="border select_roomnum" v-show="select_num">
												<li  @click="times($event)" id="1">1</li>
												<li  @click="times($event)" id="2">2</li>
												<li  @click="times($event)" id="3">3</li>
												<li  @click="times($event)" id="4">4</li>
												<li  @click="times($event)" id="5">5</li>
												<li  @click="times($event)" id="6">6</li>
												<li  @click="times($event)" id="7">7</li>
												<li  @click="times($event)" id="8">8</li>
											</ul>
										</div>
									</div>
									<div class="room_desc flex4 border4">
										<div class="user_number">
											<i class="t_ren"></i>
											<span>{{p.people_b}}</span>
										</div>
										<ul>
											<li>{{p.limit_f}}</li>
											<li>{{p.limit_g}}</li>
											<li>{{p.limit_h}}</li>
											<li>{{p.limit_k}}</li>
											<li class="xianzhi">入住限制
												<i class="ruzhu"></i>
												<span class="zeng">2020年1月24日入住赠送价值298元除夕夜单人海鲜火锅自助晚餐1次，使用时间：1月24日17：00-19：00，需提前预约餐位，预约电话：0898-31528888转餐饮部。</span>
											</li>
										</ul>
										<div class="room_price">
											<strong>￥560</strong>
											<i>(已含税)</i>
										</div>
										<div class="yuding flex1">
											<div class="kuang border">
												<span>1</span>
												<span></span>
												<span><i class="kuang_number"></i></span>
											</div>
											<router-link to="/hotel_order">预定</router-link>
											<span class="surplus">剩余8间</span>
										</div>
									</div>
								</div>
							</div>
							<div class="hotel_room border">
								<div class="room_left">
									<div class="room_type" @click="room_type">
										<i class="point"></i>
										<span>{{p.room_type_b}}</span>
										<a>查看详情</a>
									</div>
								</div>
								<div class="flex5 room_right">
									<div class="room_desc flex4 border5">
										<div class="user_number">
											<i class="t_ren"></i>
											<span>{{p.people_c}}</span>
										</div>
										<ul>
											<li>{{p.limit_a}}</li>
											<li>{{p.limit_b}}</li>
											<li>{{p.limit_c}}</li>
											<li>{{p.limit_d}}</li>
										</ul>
										<div class="room_price">
											<strong>{{p.price_c}}</strong>
											<i>(已含税)</i>
										</div>
										<div class="yuding flex1">
											<div class="kuang border">
												<span>1</span>
												<span></span>
												<span><i class="kuang_number" ></i></span>
											</div>
											<router-link to="/hotel_order">预定</router-link>
											<span class="surplus">剩余8间</span>
										</div>
									</div>
									<div class="room_desc flex4 border4">
										<div class="user_number">
											<i class="t_ren"></i>
											<span>{{p.people_d}}</span>
										</div>
										<ul>
											<li>{{p.limit_a}}</li>
											<li>{{p.limit_b}}</li>
											<li>{{p.limit_c}}</li>
											<li>{{p.limit_d}}</li>

										</ul>
										<div class="room_price">
											<strong>￥489</strong>
											<i>(已含税)</i>
										</div>
										<div class="yuding flex1">
											<div class="kuang border">
												<span>1</span>
												<span></span>
												<span><i class="kuang_number"></i></span>
											</div>
											<router-link :to="`/hotel_order?${p.id}`">预定</router-link>
											<span class="surplus">剩余8间</span>
										</div>
									</div>
								</div>
							</div>
							<!-- 信息区域 -->							
								<div class="flex info_first border4" id="lue">
									<dl class="flex">
										<dt>基本信息</dt>
										<dd>
											<span>入住时间:</span>
											<strong>{{p.go_time}}</strong>
										</dd>
										<dd>
											<span>离店时间:</span>
											<strong>{{p.start_time}}</strong>
										</dd>
										<dd>
											<span>建成于:</span>
											<span>{{p.buld}}</span>
										</dd>
										<dd>
											<span>翻修于: </span>
											<strong>{{p.over}}</strong>
										</dd>
										<dd>
											<span>酒店规模:</span>
											<strong>{{p.ranger}}</strong>
										</dd>
									</dl>
								</div>
								<div class="info_two">
									<dl class="flex4">
										<dt>酒店设施</dt>
										<ul class="border5">
											<li>
												<p>酒吧</p>
												<p>足浴</p>
												<p>台球</p>
												<p>礼品廊</p>
											</li>
											<li>
												<p>咖啡厅</p>
												<p>室外游泳池</p>
												<p>桌球室</p>
												<p>多功能厅</p>
											</li>
											<li>
												<p>中餐厅</p>
												<p>高尔夫球场</p>
												<p>西餐厅</p>
												<p>公共区域监控</p>
											</li>
											<li>
												<p>理发美容室</p>
												<p>健身房</p>
												<p>无障碍客房</p>
												<p>传真/复印</p>
											</li>
											<li>
												<p>商务中心</p>
												<p>卡拉OK厅</p>
												<p>会议设施</p>
												<p>休息区</p>
											</li>
										</ul>
									</dl>
								</div>
								<div class="info_three">
									<dl class="flex4">
										<dt>房间设施</dt>
										<ul class="border5">
											<li>
												<p>浴衣</p>
												<p>宽带上网</p>
												<p>叫醒服务</p>
												<p>咖啡壶／茶具</p>
												<p>洗浴间电话</p>
											</li>
											<li>
												<p>保险箱</p>
												<p>无烟房</p>
												<p>淋浴设施</p>
												<p>衣柜/衣橱</p>
												<p>手动窗帘</p>
											</li>
											<li>
												<p>24小时热水</p>
												<p>小冰箱／迷你吧</p>
												<p>电视</p>
												<p>拖鞋</p>
												<p>书桌</p>
											</li>
											<li>
												<p>国内长途电话</p>
												<p>雨伞租借服务</p>
												<p>空调</p>
												<p>毯子或被子</p>
												<p>电话</p>
											</li>
											<li>
												<p>叫醒服务</p>
												<p>国际长途电话</p>
												<p>免费洗漱用品</p>
												<p>免费报纸</p>
												<p>化妆镜</p>
											</li>
										</ul>
									</dl>
								</div>
								<div class="info_four border4">
									<dl class="flex4">
										<dt>酒店服务</dt>
										<ul>
											<li>
												<p>取款服务</p>
												<p>婚宴服务</p>
												<p>熨衣服务</p>
												<p>信用卡结算</p>
											</li>
											<li>
												<p>SPA</p>
												<p>客房服务</p>
												<p>淋浴设施</p>
												<p>叫车服务</p>

											</li>
											<li>
												<p>24小时前台服务</p>
												<p>婴儿/儿童看护</p>
												<p>干洗服务</p>
												<p>多国语言工作人员</p>
											</li>
											<li>
												<p>洗衣服务</p>
												<p>租车服务</p>
												<p>酒店禁烟</p>
												<p>24小时大堂经理</p>
											</li>
											<li>
												<p>外币兑换服务</p>
												<p>按摩保健</p>
												<p>礼宾服务</p>
												<p>行李服务</p>
											</li>
										</ul>
									</dl>

								</div>
								<div class="info_five border4">
									<a href="">马蜂窝酒店平台合作伙伴</a>
								</div>
								<div class="info_six border4">
									<dl class="flex">
										<dt>{{p.special}}</dt>
										<ul>
											<li>{{p.gonglue}}</li>
										</ul>
									</dl>
								</div>
								<!-- 	地图区域 --> 								
								<div class="bottom  flex" id="ditu">
									<div class="bottom_map border">	
										<maps></maps>									
									</div>
									<div class="map_right flex2">
										<ul style="width:290px" class="flex3">
											<a class="interest" @click="place" :class="places">景点</a>
											<a class="traffic" @click="jiaotong" :class="traffics">交通</a>
										</ul>
										<div class="distince flex">
											<ul class="distince_detail" v-show="interest">
												<li>
													<a>{{p.place_a}}</a>
													
													<span><i></i><i></i><i></i></span>
													<span>{{p.distance_a}}</span>
												</li>
												<li>
													<a>亚龙湾</a>
													<span><i></i><i></i><i></i><i></i><i></i><i></i></span>
													<span>10.8公里</span>
												</li>
												<li>
													<a>蜈支洲岛旅游风景区</a>
													<span><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></span>
													<span>27公里</span>
												</li>
												<li>
													<a>南山文化旅游区</a>
													<span><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></span>
													<span>34.7公里</span>
												</li>
												<li>
													<a>呀诺达雨林文化旅游区</a>
													<span><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></span>
													<span>28.6公里</span>
												</li>
												<li>
													<a>三亚湾</a>
													<span><i></i><i></i><i></i><i></i><i></i><i></i></span>
													<span>12.1公里</span>
												</li>
												<li>
													<a>大东海旅游区</a>
													<span><i></i></span>
													<span>0.6公里</span>
												</li>
												<li>
													<a>南山海上观音</a>
													<span><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></span>
													<span>34.3公里</span>
												</li>
												<li>
													<a>亚龙湾热带天堂森林公园</a>
													<span><i></i><i></i><i></i><i></i><i></i><i></i><i></i></span>
													<span>13.6公里</span>
												</li>
												<li>
													<a>春园海鲜广场</a>
													<span><i></i><i></i><i></i><i></i><i></i></span>
													<span>4.8公里</span>
												</li>
											</ul>
											<ul class="traffic_detail" style="display:none" v-show="traffic">
												<li>
													<a>三亚凤凰国际机场</a>
													<span><i></i><i></i><i></i><i></i><i></i><i></i><i></i></span>
													<span>15.4公里</span>
												</li>
												<li>
													<a>三亚凤凰国际机场</a>
													<span><i></i><i></i><i></i><i></i><i></i><i></i></span>
													<span>15.1公里</span>
												</li>
												<li>
													<a>三亚火车站</a>
													<span><i></i><i></i><i></i><i></i><i></i><i></i></span>
													<span>9.1公里</span>
												</li>
											</ul>
										</div>
									</div>
								</div>
								<!-- 	</div> -->
								<!-- 用户评价区域 -->
								<div class="hotel_comment"  id="ping">
									<h3>200条真实用户评论</h3>
								</div>
								<!-- 评价详情 -->
								<div class="border4 comment_top">

									<a>{{p.assess}}</a>
									<a>{{p.notes}}</a>

								</div>
								<div class="commenthotel_detail border5">
									<div class="left_user flex1">
										<a class="user_tx"></a>
										<div class="left_l">
											<a>{{p.h_uname_a}}</a>
											<p>{{p.level_a}}</p>
										</div>
									</div>
									<div class="rigth_commen">
										<div class="text">{{p.note_text_a}}</div>
										<div>
											<img :src="p.note_p_a">
											<img :src="p.note_p_b">
											<img :src="p.note_p_c">
											<img :src="p.note_p_d">
											<img :src="p.note_p_e">

										</div>
										<div class="tu">
											<i class="c_x"></i>
											<span>{{p.note_time_a}}</span>
											<i class="zd"></i>
											<span>此条点评来自游记</span>
											<span class="from">{{p.note_w_a}}</span>
										</div>
									</div>


								</div>


								<div class="commenthotel_detail border5">
									<div class="left_user flex1">
										<a class="user_tx2"></a>
										<div class="left_l">
											<a href="">{{p.h_uname_b}}</a>
											<p>{{p.level_b}}</p>
										</div>
									</div>
									<div class="rigth_commen">
										<div class="text">{{p.note_text_b}}</div>
										<div>
											<img :src="p.note_p_g">
											<img :src="p.note_p_h">
											<img :src="p.note_p_i">
											<img :src="p.note_p_k">
											<img :src="p.note_p_l">
											<img :src="p.note_p_m">
										</div>
										<div class="tu">
											<i class="c_x"></i>
											<span>{{p.note_time_b}}</span>
											<i class="zd"></i>
											<span>此条点评来自游记</span>
											<span class="from">{{p.note_w_b}}</span>
										</div>
									</div>


								</div>

								<div class="comment_detail">
									<div class="left_user flex1">
										<a class="user_tx2"></a>
										<div class="left_l">
											<a href="">{{p.h_uname_c}}</a>
											<p>{{p.level_c}}</p>
										</div>
									</div>
									<div class="rigth_commen">
										<div class="text">{{p.note_text_c}}</div>
										<div>
											<img :src="p.note_p_q">
											<img :src="p.note_p_s">
											<img :src="p.note_p_w">
											<img :src="p.note_p_x">
											<img :src="p.note_p_y">

										</div>
										<div class="tu">
											<i class="c_x"></i>
											<span>{{p.note_time_c}}</span>
											<i class="zd"></i>
											<span>此条点评来自游记</span>
											<span class="from">{{p.note_w_c}}</span>
										</div>
									</div>
								</div>							
					</div>
					<my-footer></my-footer>
				</div>								
</template>
<style scoped>
	* {
		margin: 0;
		padding: 0;
		box-sizing: content-box;
	}
	._calendar{
		position:absolute;
		width:526px;height: 240px;
	}
	.details {
		font-size: 12px;
		color: #666;
		box-sizing: border-box;
		font-family: Arial, "Lucida Grande", "Microsoft Yahei", "Hiragino Sans GB", "Hiragino Sans GB W3", SimSun, "PingFang SC", STHeiti;
	}

	a {
		color: #666;
		text-decoration: none;
		display: block;
	}

	input {
		outline: 0;
		border-color: #999999;
		box-shadow: #DDDDDD;
	}

	.flex {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.flex1 {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}

	.flex2 {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		align-items: flex-start;
	}

	.flex3 {
		display: flex;
		justify-content: space-around;
	}

	.flex4 {
		display: flex;
		flex-wrap: wrap;
	}

	.flex5 {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	ul,
	li {
		list-style: none;
	}

	.border {
		border: 1px solid #D7D7D7;
	}

	.border2 {
		border: 2px solid #D7D7D7;
	}

	.border3 {
		border: 1px dotted #D7D7D7;
	}

	.border4 {
		border-bottom: 1px solid #D7D7D7;
	}

	.border5 {
		border-bottom: 1px dashed #D7D7D7;
	}

	.pop-box {
		width: 100%;
		height: 100%;
		position: fixed;
		z-index: 2;
		background: rgba(0, 0, 0, .75);
		color: #fff;
		/* display:none; */

	}

	.inside {
		margin: 0 auto;
		width: 1000px;
		height: 552px;
		margin-top: 30px;
	}

	.box-nav {
		width: 640px;
		float: left;
		margin-left: 82px;
	}

	.box-nav a {
		float: left;
		margin-right: 20px;
		margin-top: 5px;
		color: #fff;
		margin-top: 5px;


	}

	.box-nav a:hover {
		color: #ff9d00;
	}

	.cut i {
		width: 30px;
		height: 30px;
		background: url(/img/i/hotel.png) no-repeat 0px -70px;
		display: inline-block;
		position: relative;
		left: 215px;
		top: 5px;
	}

	.photo_left {
		width: 680px;
		height: 470px;
		margin-top: 12px;
		margin-left: 80px;
		position: relative;
		overflow: hidden;
		float: left;
	}

	.my-big {
		width: 680px;
		height: 470px;
		vertical-align: middle;
	}

	.cover {
		width: 100%;
		height: 100%;
		z-index: 1;
		position: relative;
		top: -100%;
		left: 0;
	}

	.left {
		width: 49%;
		height: 100%;
		float: left;

	}

	.left i {
		background: url(/img/i/hotel.png) no-repeat 35px 0px;
		display: inline-block;
		width: 70px;
		height: 60px;
		margin-top: 210px;
		margin-left: -20px;

	}

	.right {
		width: 49%;
		height: 100%;
		float: right;
	}

	.right i {
		background: url(/img/i/hotel.png) no-repeat -30px 0px;
		display: inline-block;
		width: 70px;
		height: 60px;
		margin-top: 210px;
		margin-left: 280px;

	}

	.btn-up i {
		width: 55px;
		height: 30px;
		background: url(/img/i/hotel.png) no-repeat -143px 0px;
		display: inline-block;
		position: relative;
		top: -30px;
		left: 60px;
	}

	.btn-down i {
		width: 55px;
		height: 30px;
		background: url(/img/i/hotel.png) no-repeat -143px -70px;
		display: inline-block;
		position: relative;
		bottom: -450px;
		left: 60px;
	}

	.photo_right {
		width: 120px;
		height: 470px;
		float: left;
		margin-left: 30px;
		margin-top: -53px;
		position: relative;
	}

	.photo_right ul li img {
		width: 120px;
		height: 85px;
		margin-bottom: 7px;
		transition: all 0.6s;
	}

	.photo_right ul li img:hover {
		transform: scale(1.2);
	}

	.heigh {
		width: 100%;
		height: 100%;
		position: fixed;
		z-index: 20;
		background: rgba(0, 0, 0, .75);
		color: #fff;

		/* display:none; */

	}

	.heigh_detail {
		background: #fff;
		width: 508px;
		height: 150px;
		margin: 0 auto;
		margin-top: 180px;
		padding: 20px 17px 10px 17px;

	}

	.heigh_detail>div:first-child {

		line-height: 30px;
		color: #333;
		margin-bottom: 30px;

	}

	.heigh_detail>div>span {
		font-size: 16px;
	}

	.tuo {
		background: url(/img/i/i2.png) no-repeat 0px -280px;
		display: inline-block;
		width: 36px;
		height: 26px;
		margin-right: -16px;

	}

	.quan:hover {
		transform: rotate(360deg);
	}

	.quan {
		background: url(/img/i/i2.png) no-repeat -40px -280px;
		overflow: hidden;
		width: 22px;
		height: 22px;
		margin: 2px;
		display: inline-block;
		transition: 1s ease-in-out 0s;

		cursor: pointer;
	}

	.heigh_detail :not(first-child) {
		color: #666;
		font-size: 12px;
		line-height: 30px;
	}

	.header {
		height: 60px;
	}

	.totall {
		margin: 0 auto;
		width: 1000px;
		padding: 40px 0;
	}
	.banner{
		width:1000px;
		height:120px;
		margin:0 auto;
	}
	.banner img{
		display: block;
		width:100%;
		height:120px;

	}
	.top-nav {
		width: 1000px;
		height: 30px;
		/* margin-top: 10px; */
		font-size: 12px;
		margin:10px auto 0 auto;

	}

	.top-nav a {
		color: #333;
		line-height:20px;
		height:20px;
		position: relative;
	}

	.top-nav ul>div {
		float: left;
		line-height:20px;
	}
	.top-nav ul>div>span {
		margin-left:20px;
	}
	.china {
		position: relative;
		width:60px;	
		cursor:pointer;
	}
	.china a{
		float: left;
	}
	.cityy{
		width:50px;
		cursor:pointer;
	}
	.top-nav .cityy span{
		margin-left:7px;
	}
	.cityy a{
		float: left;
	}
	.country_hotel{
		position: relative;
		width:60px;	
		cursor:pointer;
	}
	.country_hotel a{
		float: left;
	}
	.biao{
		border-top: 4px solid #ff7000;
    	border-left: 4px dashed transparent;
    	border-right: 4px dashed transparent;
		margin: 8px 0 0 4px;
		position:absolute;
		bottom:8px;
		left:23px;
	}
	.biaoo{
		border-top: 4px solid #ff7000;
    	border-left: 4px dashed transparent;
    	border-right: 4px dashed transparent;
		margin: 8px 0 0 4px;
		position:absolute;
		bottom:8px;
		left:25px;
	}
	.ding a {
		color: #FF9D00;
	}

	.china div {
		z-index: 20;
		width: 110px;
		font-size: 12px;
		padding: 10px;
		background: #fff;
		border: 1px solid #e5e5e5;
		line-height: 25px;
		color: black;
	}

	.country_hotel div {
		z-index: 20;
		width: 110px;
		font-size: 12px;
		padding: 10px;
		background: #fff;
		border: 1px solid #e5e5e5;
		line-height: 25px;
		color: black;

	}

	.china div p a {
		margin-right: 5px;
	}

	.country_hotel div p a {
		margin-right: 5px;
	}

	.country_hotel,
	.china div p span {
		color: #666;
	}

	.country_hotel div {
		position: absolute;
		top: 20px;
		left: -10px;
	}

	.china div {
		position: absolute;
		top: 20px;
		left: 0px;

	}

	.chinese-title h1 {
		height: 30px;
		color: #333;
		font-weight: normal;
		font-size: 25px;
	

	}

	.bird {
		width: 24px;
		height: 24px;
		background: url(/img/i/i.png) -280px 0 no-repeat;
		margin-left: 10px;
		display: inline-block;
	}

	.en-title {
		height: 24px;
		line-height: 24px;
		margin-top: 5px;
		color: #666;
		font-size: 14px;
	}

	.location {
		font-size: 12px;
		height: 24px;
	}

	.location span {
		color: #666;
	}

	.s_dt {
		width: 15px;
		height: 15px;
		background: url(/img/i/i.png) -130px 0px no-repeat;
		display: inline-block;
		vertical-align: middle;
	}

	.location span {
		float: left;
	}

	.location>a {
		color: #ff9d00;
		width: 73px;
		float: left;
		margin-left: 10px;
	}

	.hotel-header {
		margin: 0 auto;
		width: 1000px;
	}

	.big_img {
		width: 680px;
		height: 380px;
		border-radius: 4px;
		cursor: pointer;
	}

	.left_img {
		position: relative;
	}

	.float_text {
		width: 140px;
		height: 50px;
		background: rgba(0, 0, 0, .75);
		position: absolute;
		top: 12px;
		right: 12px;
		line-height: 20px;
		padding: 0 15px;


	}

	.float_text>p {

		font-size: 16px;
		color: #fff;
		margin: 10px;
		font-weight: bold;
		font-size: 24px;
		line-height: 25px;
	}

	.right_img {
		width: 320px;
		height: 380px;
	}

	.right_img>li>img {
		width: 150px;
		height: 120px;
		border-radius: 4px;
		cursor: pointer;

	}

	.middle_nav {
		width: 100%;
		height: 50px;
		border-bottom: 1px solid #999;
		box-shadow: 0 2px 4px rgba(0, 0, 0, .1);


	}

	.middle {
		margin: 0 auto;
		width: 1000px;
		color: #333;
	}

	.left_nav>a {
		font-size: 16px;
		width: 32px;
		height: 50px;
		line-height: 50px;
		padding: 0 30px;
		height: 50px;
	}

	.left_nav :last-child {
		width: 64px;
	}

	.clearfix:after {
		content: '';
		clear: both;
		height: 0;
		display: block;
		overflow: hidden;
	}

	.right_nav>a {
		width: 56px;
		height: 50px;
		line-height: 50px;
		margin-left: 45px;
		display: inline-block;
	}

	.wjx {
		width: 30px;
		height: 30px;
		background: url(/img/i/i.png) no-repeat -95px -30px;
		display: inline-block;
		margin-top: 13px;
		margin-right: -35px;
		vertical-align: middle;
	}

	

	.middle_search {
		height: 36px;
		margin-bottom: 20px;
		margin: 0 auto;
    	width: 1000px;
    	padding:40px 0 15px 0;

	}
	.rt {
		width: 16px;
		height: 16px;
		position: absolute;
		top: 0;
		right: 0;
		background: url(/img/i/i.png) -190px 0 no-repeat;
		margin: 10px 10px 10px -50px;
	}

	.ren {
		width: 15px;
		height: 17px;
		background: url(/img/i/i.png) -70px -140px no-repeat;
		margin: 10px 10px 10px -50px;
	}
	.go,.back{
		width:130px;
		position: relative;
		cursor:pointer;
	}
	.start_time,.leave_time{
		width: 100%;
    	height: 36px;
    	border-radius: 5px;
    	color: #999;
		padding-left:10px;
		cursor:pointer;
	}
	.number {
		width: 14%;
		height: 36px;
		border-radius: 5px;
		color: #999;
		margin-left:0px;
		padding-left:10px;
		cursor:pointer;
	}
	.leave_time{
		margin-left:-5px;
	
	}
	.start_time:focus,
	.start_time:hover,
	.leave_time:hover,
	.number:hover,
	.search:hover {
		box-shadow: 0 0 1px 1px #FF9D00;
		border:0;
	}
	.comment_detail::after{
		content: '';
		display: block;
		clear: both;
	}
	.btn {
		background-color: #FF9D00;
		color: #fff;
		width: 120px;
		height: 36px;
		border-radius: 3px;
		border: 0;	
		margin-right: 420px;
		cursor:pointer;
		outline:0;
	}

	.room_detail>div {
		width: 220px;

		padding: 0 15px;
		float: left;
	}

	.room_detail :nth-child(2) {
		width: 110px;
	}

	.room_detail :nth-child(3) {
		width: 230px;
	}

	.room_detail :nth-child(4) {
		width: 130px;
	}

	.room_detail :last-child {
		width: 145px;
	}

	.room_detail {
		height: 46px;
		line-height: 46px;

		color: #333;
		background-color: #f4f4f4;
		border-top-left-radius: 4px;
		border-top-right-radius: 4px;

	}

	.hotel_room {
		height: 355px;
		width: 99.7%;
		/* float:left; */
		display: flex;
		border-left: 1px solid #d7d7d7;
		border-right: 1px solid #d7d7d7;

	}

	.room_left {
		width: 251px;
		height: 355px;
		border-right: 1px solid #d7d7d7;
	}

	.room_left a {
		text-align: right;
		margin-top: 30px;
	}

	.room_right {
		color: #666;
	}

	.room_type {
		width: 220px;
		height: 67px;
		padding: 15px;
		/* position: relative; */
	}

	.room_type span {
		margin-left: 10px;
	}

	.point {
		/* position: absolute; */
		margin: 4px 5px 5px 0;
		border-left: 4px solid #ffa800;
		border-top: 4px dashed transparent;
		border-bottom: 4px dashed transparent;
		left: 16px;
		top: 18px;

	}

	.user_number {
		width: 110px;
		height: 30px;
		padding: 0 15px;
	}

	.ruzhu {

		display: inline-block;
		width: 13px;
		height: 13px;
		background: url(/img/i/i.png) no-repeat -135px -220px;

	}

	.ruzhu:hover+span {
		display: block;
		transition: all 1s ease-in-out;
	}

	.xianzhi {
		/* position: relative; */
	}

	.zeng {
		z-index: 2;
		display: none;
		/* display: block; */
		position: absolute;
		top: -75px;
		left: -100px;
		width: 295px;
		height: 50px;
		background: rgba(0, 0, 0, 1.65);
		color: #fff;
		font-size: 12px;
		padding: 10px;
	}

	.t_ren {
		width: 19px;
		height: 16px;
		background: url(/img/i/i.png) -90px -140px no-repeat;
		display: inline-block;
		vertical-align: middle;
	}

	.room_desc {
		width: 746px;
		height: 117px;
		padding: 30px 0;
	}

	.room_desc input {
		width: 42px;
		height: 26px;
		padding: 0 10px;
	}

	.room_desc ul {
		width: 230px;
		height: 120px;
		padding: 0 15px;

	}

	.room_desc>ul:nth-child(2) li:nth-child(2) {
		color: #f35035;
	}

	.room_desc>ul:nth-child(2) li:nth-child(4) {
		color: #19e219;
	}

	.room_desc ul li {
		height: 24px;


		list-style: disc;
	}


	.room_desc a {
		width: 28px;
		height: 24px;
		line-height: 24px;
		padding: 2px 22px;
		background-color: #ffb200;
		color: #fff;
	}

	.room_price {
		width: 130px;
		height: 26px;
		padding: 0 15px;
		font-size: 20px;
		color: #ffb200;
	}

	.room_price :nth-child(2) {
		font-size: 12px;
	}

	.yuding {
		width: 145px;
		height: 48px;
		padding: 0 15px;
		position: relative;

	}

	/* .yuding span{
			margin-right:85px;
		} */
	.kuang {
		width: 42px;
		height: 16px;
		padding: 5px 8px;


		position: relative;
	}

	.kuang>span:nth-child(1) {
		width: 16px;
		margin: 10px 0;
		vertical-align: middle;
		text-align: center;

	}

	.kuang>span:nth-child(2) {
		height: 10px;
		width: 2px;
		color: #666;
		border-right: 1px solid #d7d7d7;
		margin-left: 15px;
	}

	.kuang .kuang_number {
		background: url(/img/i/i.png) no-repeat -117px -206px;
		width: 13px;
		height: 10px;
		display: inline-block;
		position: absolute;
		top: 10px;
		left: 35px;

		vertical-align: middle;
	}

	.surplus {
		position: absolute;
		top: 28px;
		left: 20px;
	}

	.room_desc .select_roomnum {
		width: 28px;
		padding: 0 15px;
		height: 200px;
		z-index: 2;
		background: #fff;
		position: absolute;
		top: 29px;
		left: 18px;
		border-top: 0 none;

	}

	.room_desc .select_roomnum li {
		list-style: none;
		color: #666;
		text-align: left;

		line-height: 30px;
	}

	.title_left {
		width: 235px;
	}

	.title_middle {
		width: 400px;
		margin-left: 115px;
	}

	.title_right {
		width: 110px;
		padding-right: 20px;
	}

	.platfom {
		padding: 15px;
		height: 40px;
		line-height: 40px;
	}

	.platfom i {
		color: #FF4500;
		width: 10px;
		height: 13px;
	}

	.platfom .left {
		width: 235px;
		height: 30px;
	}

	.platfom .middle_room {
		width: 400px;
		height: 30px;
		margin-left: 150px;
	}

	.platfom .right {
		width: 140px;
		height: 30px;
		margin-right: 20px;
	}

	.platfom .right_price {
		width: 118px;
		height: 43px;
	}

	.platfom>div>img {
		width: 100px;
		height: 20px;
	}

	.right_price :first-child {
		color: #ff8a00;
		font-size: 20px;
		font-weight: bold;
	}

	.bottom {
		padding: 70px 0;
	}

	.bottom_map {
		width: 680px;
		height: 380px;
	}

	.map_right {
		padding: 0 10px;
	}

	.interest {		
		color: #ff8a00;
		font-size: 16px;
		width: 50%;
		height: 35px;
		text-align: center;
	}
	.interests{
		border-bottom: 3px solid #ff9d00;
	}
	.traffics{
		border-bottom: 3px solid #ff9d00;
	}
	.traffic {
		font-size: 16px;
		width: 50%;
		height: 35px;
		text-align: center;
	}

	.interest_border {
		border-bottom: 3px solid #ff9d00;

	}

	.traffic_border {
		border-bottom: 3px solid #ff9d00;
		display: hidden;

	}

	.traffic:hover {
		color: #ff8a00;
		border-bottom: 3px solid #ff9d00;
	}

	.bottom>ul>a {
		width: 155px;
		height: 35px;
		text-align: center;
		display: block;
	}

	.distince_detail {
		width: 293px;
		height: 345px;
		border-top: 1px solid #d7d7d7;
		overflow-y: scroll;
		font-size: 14px;
		color: #666;
	}

	.traffic_detail {
		width: 293px;
		height: 345px;
		border-top: 1px solid #d7d7d7;

	}

	/* .hotel_info {
		color: #666;
	} */

	 .distince_detail li {
		padding: 10px 10px;
		border-bottom: 1px dashed #cecece;
		width: 263px;
		height: 46px;
	}

 .distince_detail li>span:nth-child(2) {
		width: 140px;
		height: 7px;
		float: left;
		display: inline;
		margin: 15px 0 0 1px;
	}

 .distince_detail li>span:nth-child(2) i {
		float: left;
		margin-left: -1px;
		width: 12px;
		height: 6px;
		border: 1px solid #999;
		border-top: 0 none;
	}

 .distince_detail li>span:nth-child(3) {

		float: right;


	}

	 .traffic_detail li {
		padding: 10px 10px;
		border-bottom: 1px dashed #cecece;
		width: 263px;
		height: 46px;
	}

	 .traffic_detail li>span:nth-child(2) {
		width: 140px;
		height: 7px;
		float: left;
		display: inline;
		margin: 15px 0 0 1px;
	}

	.traffic_detail li>span:nth-child(2) i {
		float: left;
		margin-left: -1px;
		width: 12px;
		height: 6px;
		border: 1px solid #999;
		border-top: 0 none;
	}

	 .traffic_detail li>span:nth-child(3) {

		float: right;


	}
	dl	dt{
		width: 155px;
		float: left;
		font-size: 16px;
	}
	 dl dt p{
		margin-bottom: 12px;
		font-size: 14px;
	}
	dl ul li{
			float: right;
		width: 165px;
	}
	dl ul li p{
		margin-bottom: 12px;
		font-size: 14px;
	}
	.info_six li {

		width: 843px;
		line-height: 25px;
	}

	.info_first {
		height: 25px;
		padding: 20px 0;
		font-size: 14px;
	}

	.info_first>dl>dt {
		width: 150px;
		font-size:16px;
	}

	.info_first>dl>dd {
		width: 165px;
	}

	.info_two {
		padding-top: 20px;
	}

	.info_three {
		padding-top: 20px;
	}

	.info_four {
		padding-top: 20px;
	}

	.hotel_hidden {
		width: 77px;
		margin-left: 155px;
	}

	.info_five {
		padding: 20px 0;
		font-weight: bold;
	}

	.info_six {
		padding: 10px 0;
		line-height: 20px;
	}
	.hotel_comment h3 {
		margin-bottom: 20px;
		font-size: 24px;
		text-align: center;
		font-weight: normal;
		color: #333;
	}

	.hotel_comment dl {
		height: 90px;
		margin-bottom: 15px;
		padding: 0 15px;
	}

	.hotel_comment dl dt span {
		font-size: 48px;
		color: #ff8a00;
	}

	.hotel_comment dl dd span {
		font-size: 18px;

	}

	.hotel_comment dd {
		width: 100px;
		height: 90px;
		text-align: center;
		margin: 0 15px;
	}

	.comment_top>a {
		font-size: 14px;
	}

	.comment_top>a:first-child {
		height: 40px;
		line-height: 40px;
		width: 120px;
		padding: 0 15px;
		border-bottom: 3px solid #ff9d00;
		font-weight: bold;
	}

	.comment_top>a:last-child {
		height: 40px;
		line-height: 40px;
		width: 120px;
		padding: 0 15px;
		float: left;
		margin-top: -45px;
		margin-left: 180px;
		color: #333;
	}

	.comment_top>a:last-child:hover {
		font-weight: bold;
	}

	.commenthotel_detail {
		height: 500px;
		margin-top: 20px;
		margin-bottom: 30px;
	}

	.left_user {
		width: 150px;
		height: 63px;
		margin: 0;
		float: left;
	}

	.user_tx {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background: url(/img/hotel_detail/u1.jpeg)-20px -10px;
	}

	.user_tx2 {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background: url(/img/hotel_detail/u2.png)-23px -25px no-repeat;
		background-size: 190%;
	}

	.left_l {
		width: 56px;
		margin-left: -20px;
	}

	.left_l a {
		margin-bottom: 10px;
		color: #ffa800;
		font-size: 14px;
	}

	.left_l p {
		color: #f35035;
		font-weight: bold;
		font-size: 12px;
	}

	.rigth_commen {
		float: left;
		width: 770px;
	}

	.text {
		margin-bottom: 20px;
		line-height: 25px;
		font-size: 14px;
		color: #666;
	}

	.rigth_commen img {
		width: 250px;		
		margin-bottom: 4px;
		margin-right: 4px;
	}

	.c_x {
		width: 105px;
		height: 20px;
		background: url(/img/i/i.png)-70px -108px no-repeat;
		display: inline-block;
		margin-right: 10px;
		vertical-align: middle;
		line-height: 20px;
	}

	.zd {
		width: 16px;
		height: 16px;
		background: url(/img/i/i.png)-220px -141px no-repeat;
		display: inline-block;
		margin-left: 10px;
		margin-right: 10px;
		vertical-align: middle;
	}

	.from {
		color: #ff7000;
		font-size: 12px;
		margin-left: 2px;
	}

	.tu {
		margin-top: 10px;
	}

	.tu>span:nth-child(2) {
		color: #666;
		font-size: 12px;
	}

	.tu>span:nth-child(4) {
		color: #666;
		font-size: 12px;
	}
</style>
<script>
// 引入酒店地图组件
import map from '../../components/map.vue'
	export default {
		data() {
			return {
				first:true,
				last:false,
				box: false,
				heigh: false,
				traffic: false,
				interest: true,
				traffics: false,
				interests: true,
				hotel: false,
				china: false,			
				select_roomnum: false,
				
				hotel_detail: [],
				p:{},
				id:this.$route.params.id,
				places:'三亚',
				// =======日历========
				startDate:new Date(),
				endDate:new Date(new Date().getTime()+24*60*60*1000),
				checkedDate:"",
				pattern:"",
				arrs:[],
				select_num:false
			}
		},
		
		
		mounted() {	
			this.getdata()
				this.getbig()
			//酒店详情页接口
		
		},
		
		//清楚定时器
		beforeDestroy(){
			clearInterval(this.timer)
		},
		methods: {
			numbers(){
				this.select_num=!this.select_num
			},
			times(event){
				let number=this.$refs.number;
				let li=event.currentTarget
				number[0].innerText=li.innerText
				this.select_num=false

			},
			///////////////////////////////
			getbig(){
					this.id = this.$route.params.id;
			this.axios.get(`/hotel/hotel_detail?id=${this.id}`).then(res => {
				this.hotel_detail = res.data;
				 this.p=this.hotel_detail[0]
				 let a=this.p.b_img_one
				let b=this.p.b_img_two
				let c=this.p.b_img_three
				 let d=this.p.b_img_four
				let e=this.p.b_img_five
				let f=this.p.b_img_six
				 this.arrs.push(a,b,c,d,e,f)

				 for(let i=1;i<=this.arrs.length;i++){
					 var big = document.getElementsByClassName("my-big")[0]
					 if(i<=this.arrs.length){
						 i++
					 }
				 }						
			})
			},
			//隐藏轮播图
			btn_down(){
				this.first=false;
				this.last=true
			},
			btn_up(){
				this.first=true;
				this.last=false
			},		
			getdata(){
					this.id = this.$route.params.id;
			this.axios.get(`/hotel/hotel_detail?id=${this.id}`).then(res => {
				this.hotel_detail = res.data;
				 this.p=this.hotel_detail[0]								
				 let str=this.hotel_detail[0].hotel_name
				 this.places=str
			document.title=`${this.places}预订`


			})
			},
			//封装价格查询刷新
			getprice(){
				this.timer=setInterval(()=>{
					this.id = this.$route.params.id;
					this.axios.get(`/hotel/hotel_detail?id=${this.id}`).then(res => {
						this.hotel_detail = res.data;						
					})
				},10000)
			},
			prices(){													
				this.getprice()											
			},				
			// 日历
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
			// ================================================
			go() {
				this.hotel = true;
			},
			out() {
				this.hotel = false;
			},
			inner() {
				this.china = true;
			},
			outside() {
				this.china = false
			},			
			cut() {
				this.box = !this.box;
			},
			//酒店轮播图片的隐藏部分
			big_window() {
				this.box = !this.box;
			},
			left_img(){
				this.box = !this.box;
			},
			//右边轮播小图
			right(e) {
				this.getdata()
				let img=this.hotel_detail[0]
				if (e.target.nodeName == "IMG") {
					var big = document.getElementsByClassName("my-big")[0]
					big.setAttribute("src", e.target.getAttribute("data-target"))
				}				
			},			
			room_type() {
				this.heigh = true
			},
			close() {
				this.heigh = !this.heigh
			},
			//地图右边介绍
			place() {
				this.interest = true
				this.traffic = false
				this.interests=true
			},
			jiaotong() {
				this.traffic = true
				this.interest = false
				this.traffics=true
			},
			kuang() {
				this.select_roomnum=!this.select_roomnum
			},
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
			components:{
				"maps":map
			}
		
	}
</script>
