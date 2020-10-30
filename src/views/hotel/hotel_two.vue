<template>
	<div class="hotel_two">
		
		<!-- 页头 -->
		<div class="header flex border">
			<my-header></my-header>
		</div>
		<!-- 网页主要内容 -->
			<!-- 搜索区域 -->
			<div class="top-nav flex">
				<ul>
					<div class="here"><a >您在这里：</a></div>
					<div class="country_hotel">
						<a @mouseenter="go" @mouseleave="out">酒店<i class="biao">&nbsp;</i></a><span>></span>
						<div v-show="hotel" class="countrys">
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
					<div class="ding"><router-link :to="`/hotel_two/${p.id+1}`" target="_blank">{{p.yuding}}</router-link></div>
				</ul>
			</div>
			<div class="one flex">
				<input class="search border" type="text" @keydown.13="country" v-model="kw" ref="countrys" >
				<i class="jing"></i>
				<div class="go">
				<input class="start_time border" type="text" @click="showCalendar($event)" data-name="start" v-model="startDate.toLocaleDateString().split('/').join('-')">
				<div class="_calendar" v-show="checkedDate=='start'">
						<calendar ref="calendar_1"></calendar>
				</div>
				<i class="rt"></i>
				
				</div>
				<div class="back">
				<input class="leave_time border" type="text"  @click="showCalendar($event)" @blur="change" data-name="end" v-model="endDate.toLocaleDateString().split('/').join('-')">
				<div class="_calendar" v-show="checkedDate=='end'">
						<calendar ref="calendar_2"></calendar>
				</div>
				<i class="rt"></i>
				
				</div>
				<label class="search_number" >
				<input class="number border" type="text" placeholder="人数未定">
				<i class="ren"></i>
			
				</label>
				<button class="btn" type="button">查看价格</button>
			</div>
			<!-- 搜索下面的内容 -->
			<div class="top_middle">
				<div class="area flex">

					<!-- 	区域 -->
					<dl class="area1 flex">
						<dt>区域:</dt>
						<dd class="flex s_area">
							<div class="display flex">
								<a >全部</a>
								<a>海棠湾</a>
								<a>三亚湾</a>
								<a>大东海</a>
								<a>三亚市区</a>
								<a>蜈支洲岛</a>
								<a>三亚凤凰国际机场</a> </div>
							<div class="none" v-show="none">
								<a>陵水、万宁</a>
								<a>南山旅游区</a>
								<a>南田温泉</a>
								<a>崖州湾</a>
								<a>保亭七仙岭旅游度假区</a>
								<a>其他</a>
							</div>

							<a class="se" @click="se">
								<i class="md"></i>
								<span>{{msg}}</span>
							</a>
						</dd>
					</dl>


					<!-- 	攻略 -->
					<dl class="area2">
						<dt>攻略:</dt>
						<dd>
							<p>{{p.gonglue_a}}</p>
							<p>{{p.gonglue_b}}</p>
							<p>{{p.gonglue_c}}</p>
							<p>{{p.gonglue_d}}</p>
						</dd>
					</dl>
					<!-- 	评级 -->

					<dl class="star flex">

						<dt>均价: <i @mouseenter="enter" @mouseleave="leave"></i></dt>
						<!-- 隐藏部分 -->
						<div class="ja" v-show="ja">等级均价由平日价格计算得出，节假日价格会有上浮。</div>

						<dd>
							<i class="crown1"></i>
							￥306</dd>
						<dd>
							<i class="crown2"></i>
							￥420</dd>
						<dd>
							<i class="crown3"></i>
							￥943</dd>
						<dd></dd>
					</dl>
				</div>
				
				<div id="container flex border"><little_map></little_map></div>
			</div>
			<!-- 	中间部分 -->
			<div class="bottom-top flex">
				<div class="bottom-one">
					<ul class=" ul flex">
						<a class="first">全部</a>
						<a >网红酒店</a>
						<a >人均300起睡好房</a>
						<a >购物天堂</a>
						<a >亲子酒店</a>
						<a>周边度假</a>
						<a>网红民俗客栈</a>
						<a>背包客选择</a>
					</ul>
				</div>
				<div class="bottom-two flex">
					<div class="two-1 border">
						<div class="two-11 flex">
							价格<p>￥0-{{price}}</p>
						</div>
						<input type="range" v-model="range">
					</div>
					<div class="two-2 border">
						<div class="two-22">
							<p>住宿等级</p>
							<div>不限</div>
						</div>
					</div>
					<div class="two-2 border">
						<div class="two22">
							<p>住宿类型</p>
							<div>不限</div>
						</div>
					</div>
					<div class="two-2 border">
						<div class="two-22">
							<p>设施</p>
							<div>不限</div>
						</div>
					</div>
					<div class="two-2 border">
						<div class="two-22">
							<p>品牌</p>
							<div>不限</div>
						</div>
					</div>
					<div class="two-6 border">
						<div class="two-66">
							<p>与指定地点距离</p>
							<div>选择地点</div>
						</div>
					</div>
				</div>
			</div>
			<div class="bottom-middle border_t flex">
				<div class="b-one flex">
					<div class="b-left flex">
						<div class="b-o1">
							<span>{{this.all_hotel.length}}家酒店</span>
						</div>
						<div class="b-o2  flex">
							<span>有房</span>
							<input type="range">
							<span>全部酒店</span>
						</div>
						<div class="b-o3 flex">
							<input type="checkbox">
							<span>临地铁</span>
						</div>
						<div class="b-o4 flex">
							<input type="checkbox">
							<span>收藏</span>
						</div>
						<div class="b-o5">
							<i class="fdj"></i>
							
							<input type="" placeholder="搜索关键词" v-model="kw"  @keyup.13="search" @click="focus">
							<span id="cha" v-show="cha" @click="diss">×</span>
							
						</div>
					</div>
					<div class="b-right flex">
						<a @click="sums">综合排序</a>
						<a>销量</a>
						<a>价格</a>
						<div style="position:relatvie,margin-left:-10px">
						<i class="p" @click="orderby" ref="p"></i>
						<i class="p2" @click="orderdes" ref="p2"></i>
						</div>
					</div>
				</div>
				<div>
				<div class="b-main" v-show="main">
					<div class="b-m1 flex border_t" v-for="(p,index) in all_hotel" :key="index">
						<router-link class="hotel-img" :to="`/hotel_detail/${p.id}`">
							<img class="hotel-img-1" v-lazy="p.img">
						</router-link>
						<div class="describe flex">
							<div class="des-left">
								<div class="flex2" @click="detail_page">
									<router-link to="`/hotel_detail/${p.id}`">{{p.hotel_name}}<i class="bird"></i></router-link>
									<span>{{p.hotel_uname}}</span>
								</div>
								<router-link :to="`/hotel_detail/${p.id}`">
								<ul class="instduce">																		
									<li class="flex2">
										<em class="em">{{p.estimate}}</em>
										<a>蜂蜂评价</a>
									</li>
									<li class="flex2">
										<em class="em">{{p.notes_number}}</em>
										<a>游记提及</a>
									</li>
								</ul>
								</router-link>
								<div class="location">
									<span>
										<i class="dz"></i>
										地址: {{p.adress}}</span>
								</div>
							</div>
							<div class="des-right">
								<div class="collect">
									<a href="">
										<i class="s_x"></i>
										收藏</a>
								</div>								
								<div class="platom_price flex">
									<span>
										<i class="yx"></i>
										<i class="wx1"></i>
										<i class="zfb1"></i>
									</span>
									<router-link :to="`/hotel_detail/${p.id}`">{{p.price_a}}起</router-link>
								</div>
								<div class="platom_price flex">
									<img class="m_img" src="/img/hotel_two/main2.png">
									<span>{{p.price_b}}起</span>
								</div>
								<div class="platom_price flex">
									<img class="m_img" src="/img/hotel_two/main1.png">
									<span>{{p.price_c}}起</span>
								</div>
								<div class="platom_price flex">
									<span>携程</span>
									<span>{{p.price_d}}起</span>
								</div>
								<div class="platom_price flex">
									<span>有鱼订房</span>
									<span>{{p.price_e}}起</span>
								</div>
							</div>
						</div>			
					</div>
					<!-- 分页 -->
				<div class="page">
					<ul>
						<li><button>首页</button></li>
						<li><button v-for="(p,index) in pagecount" :key="index" @click="nextpage(index)" id="0" ref="btn">{{p}}</button></li>
						<li><button @click="next" :disabled="isdisable" ref="button">后一页</button></li>
						<li><button>末页</button></li>
					</ul>
				</div>				
				</div>
					<!-- 返回顶部选项卡 -->
		<!-- <div class="card border">
			<div @mousemove="b_top" @mouseout="g_top" v-show="ding"><a @click="backTop"><i id="top" v-show="top"></i><span v-show="back">返回顶部</span></a></div>
			<div @mousemove="k_top" @mouseout="u_top"><a><i id="kui" v-show="kui"></i><span v-show="yijian">意见反馈</span></a></div>
			<div><a href=""><i id="platom"></i></a></div>
		</div>	 -->						
			</div>
				<!--查找条件隐藏部分  -->
			<div  class="cancel" v-show="hidden">
			<div class="hidden">
			<p>没有符合以下条件的酒店</p>
			<div>关键字：{{this.kw}}<i @click="cancel">×</i></div>
			</div>
			<a>马蜂窝酒店平台合作伙伴</a>
		</div>
		</div>
		<div class="_footer">
			<my-footer></my-footer>
		</div>
	</div>	
</template>
<style scoped>
	* {
		margin: 0;
		padding: 0;
		box-sizing: content-box;
	}
	input{
		display: inline;
	}
	a{
		display:inline;
	}
	  ._calendar{
		position:absolute;
		width:526px;height: 240px;
	}
	.go,.back{
		position: relative;
		width:14%;
		
	}
	.start_time,.leave_time{
		width:100%;
		margin-left:-8px;
		height: 36px;
    	border-radius: 5px;
    	color: #999;
		padding-left: 10px;
		cursor:pointer;
	}
	.card{
		width:43px;
		height:129px;
		position: fixed;
		right: 0;
		bottom: 20px;
		height: auto;
		margin-right:350px;
		
	}
	.card div{
		height:43px;
		
		border-bottom: 1px solid #d7d7d7;
		position: relative;
	}
	.card div a span{
		width:43px;
		height:43px;
		color:#fff;
		text-align: center;
		padding:5px;
		line-height:43px;
	}
	.card>div:not(:nth-child(3)):hover{
		background: #aaa;
		
	}
	.card>div:nth-child(3):hover{
		background:#ff9d00;
		
	}
	#top{
		width:21px;
		height:15px;
		background:url(/img/i/card.png) -60px -164px no-repeat;
		display:inline-block;
		position:absolute;
		top:10px;
		left:12px;
	}
	#kui{
		width:21px;
		height:30px;
		background:url(/img/i/card.png) -88px -165px no-repeat;
		display:inline-block;
		position:absolute;
		top:13px;
		left:12px;
		color:#fff;
	}
	#platom{
		width:21px;
		height:30px;
		background:url(/img/i/card.png) -120px -165px no-repeat;
		display:inline-block;
		position:absolute;
		top:13px;
		left:13px;
	}
	.hotel_two {
		font-size: 14px;
		color: #666;
		font-family: Arial, "Lucida Grande", "Microsoft Yahei", "Hiragino Sans GB", "Hiragino Sans GB W3", SimSun, "PingFang SC", STHeiti;
	}

	a {
		color: #666;
		text-decoration: none;
	}

	input {
		display: inline;
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

	.border_t {
		border-bottom: 1px solid #eaeaea;
	}

	i {
		display: inline-block;
		vertical-align: middle;
	}

	input {
		border-color: transparent;
	}

	.header {
		height: 60px;
	}

	/* .main2 {
		width: 1000px;
		margin: 0 auto;
		box-sizing: border-box;
	} */

	.top-nav {
		 width: 1000px;
    	margin: 0 auto;
		/* width: 100%; */
		height: 30px;
		margin-top: 10px;
		font-size: 12px;

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
		font-family:"Hiragino Sans GB","Hiragino Sans GB W3",'字体';
		margin-top:-5px;
	}
	.china {
		position: relative;
		width:95px;		
	}
	.country_hotel{
		position: relative;
		width:60px;	
	}
	.biao{
		border-top: 4px solid #ff7000;
    	border-left: 4px dashed transparent;
    	border-right: 4px dashed transparent;
		margin: 8px 0 0.5px 4px;
		position:absolute;
		bottom:5px;
		left:27px;
	}
	.biaoo{
		border-top: 4px solid #ff7000;
    	border-left: 4px dashed transparent;
    	border-right: 4px dashed transparent;
		margin: 8px 0 0.5px 4px;
		position:absolute;
		bottom:5px;
		left:50px;
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
	.countrys span{
		color:#666;
	}
	.countrys p:hover{
		background-color:#ff7000;
		cursor: pointer;
		color:#ff9d00;
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

	.one {
		width: 800px;
		padding-right:200px;				
		position: relative;
		margin:10px  auto 30px auto;
		cursor:pointer;
	}

	
	.number {
		width:100%;
		height: 36px;
		border-radius: 5px;
		color: #999;
		padding-left:10px;
		margin-left:-8px;
		cursor:pointer;
	}

	.s_img {
		width: 30px;
		height: 35px;
		position: absolute;
		top: 2px;
		left: 281px;
		background: url(/img/hotel/date.png) 134px 7px;
	}

	.s_img {
		background-size: 100px 100px;
	}

	.start_time:focus,
	.leave_time:hover,
	.number:hover,
	.search:hover {
		box-shadow: 0 0 1px 1px #FF9D00;
		border:0;
	}

	.search {
		width: 18%;
		height: 36px;
		border-radius: 4px;
		padding-left: 10px;
		cursor:pointer;
	}

	.jing {
		width: 20px;
		height: 18px;
		background: url(/img/i/i.png)-70px -200px no-repeat;
		margin: 10px 10px 10px -50px;
	}

	.rt {
		width: 16px;
		height: 16px;
		background: url(/img/i/i.png) -190px 0 no-repeat;
		margin: 10px 10px 10px -50px;
		position: absolute;
		top:0px;
		right:0px;
	}
	.search_number{
		position: relative;
		width:14%;
	}
	.ren {
		position: absolute;
		right: 5px;
		top: 0;bottom: 0;
		margin: auto;
		width: 15px;
		height: 17px;
		background: url(/img/i/i.png) -70px -140px no-repeat;
	}

	.btn {
		background-color: #FF9D00;
		color: #fff;
		width: 120px;
		height: 36px;
		border-radius: 3px;
		border: 0;
		padding-right: 10px;
		margin-right: 125px;
	}

	.area>.area1 {
		width: 90%;
		/* height:112PX; */
	}

	.area>.area1>dt {
		width: 10%;
	}

	.area>.area1>dd {
		width: 90%;
	}

	.s_area div a {
		text-decoration: none;
		cursor:pointer;
		text-align: center;
		margin-bottom: 5PX;
		width: 12.5%;
	}

	.display,
	.none {
		width: 100%;
	}

	.none {
		/* display:none; */
		width: 100%;
	}

	.none>a {
		margin-bottom: 5PX;
		width: 12.5%;
		margin-left: 20px;
	}

	/* .se i{
		background: url(../img/hotel/i/i.png) no-repeat -220px 0px ;
	} */
	.se {
		width: 25%;
		margin-top: 10px;
	}

	.display :first-child {
		width: 10%;
	}

	.display :last-child {
		width: 21%;
	}

	.none a:first-child {
		width: 15%;
	}

	.none a:nth-child(5) {
		width: 25%;
	}

	.none :nth-child(6) {
		width: 10%;
	}

	.md {
		width: 15px;
		height: 15px;
		background: url(/img/i/i.png) -220px -15px;
		margin-right: 5px;
		/* transform:rotate(180deg); */
	}

	.area>.area2 {
		width: 90%;
		height: 105px;
		display: flex;
		align-items: center;
		margin-top:10px;

	}

	.area>.area2>dt {
		width: 10%;
	}

	.area>.area2>dd {
		width: 90%;
	}

	.area>.area2>dt {
		margin-top: -58px;
	}
	.area2 p{
		line-height:25px;
	}
	.area>.star {
		width: 90%;
		height: 30px;
		margin-top: 40px;
		margin-bottom: 30px;
		position: relative;
	}

	.ja {
		width: 300px;
		background: rgba(27, 27, 27, 0.8);
		z-index: 2;
		color: #fff;
		font-size: 12px;
		padding: 10px;
		border-radius: 3px;
		position: absolute;
		top: -45px;
		right: 310px;


	}

	.area>.star>dt {
		width: 10%;
	}

	.star dt i {
		width: 18px;
		height: 18px;
		background: url(/img/i/i.png) no-repeat -132px -220px;
		display: inline-block;
	}

	.area>.star>dd {
		width: 20%;
	}

	.crown1 {
		width: 40px;
		height: 16px;
		background: url(/img/i/i.png)-150px -230px no-repeat;
	}

	.crown2 {
		width: 55px;
		height: 16px;
		background: url(/img/i/i.png)-150px -230px no-repeat;
	}

	.crown3 {
		width: 70px;
		height: 16px;
		background: url(/img/i/i.png)-150px -230px no-repeat;
	}

	.top_middle {
		width: 1000px;
    	margin: 0 auto;
		height: 292px;
		display:flex;
	}

	.area {
		width: 70%;
	}

	#container {
		width:340PX;
		height:220PX;
		border:1PX solid #FFF;
	}

	.bottom-top {
	 width: 1000px;
	margin: 0 auto;
	


	}

	.bottom-one {
		width: 1000px;
		height: 40px;
		margin:11px auto 1px auto;
	}

	.bottom-one>ul {
		width: 80%;
		height: 40px;
		line-height: 40px;
	}

	.bottom-one>ul>a {
		display: block;
		text-align: center;
		background: #f4f4f4;
		width: 10%;
		border-radius: 2px;		
	}
	.bottom-one>ul a:hover{
		background:#fff6eb;
		cursor:pointer;
	}
	.bottom-one>ul>a:nth-child(3){
		width:15%;
	}
	.bottom-one>ul>a:nth-child(7){
		width:15%;
	}
	.bottom-one>ul>a:focus {
		background-color: #FFB200;
		color: #fff;
	}

	.bottom-two {
		width: 100%;
		height: 70px;
		padding-bottom:20px;
	}

	.bottom-two>.two-1 {
		width: 26.8%;
		border-right: 0;
		padding: 10px 9px;
	}

	.bottom-two>.two-1>input {
		width: 90%;
		margin: 0 20px;
	}

	.two-2 {
		width: 11%;
		padding: 10px 5px;
		border-right: 0;


	}

	.two-6 {
		width: 21.6%;
		padding: 10px 5px;
	}

	.two-22 {
		width: 90px;
		height: 18px;
	}

	.two-22>div {
		margin-top: 10px;
		font-size: 12px;
	}

	.bottom-middle {
		    width: 1000px;
    margin: 0 auto;
		/* width: 100%; */
		
		padding: 10px 0;
		text-align: center;


	}

	.b-one {
		width: 100%;
		height: 30px;
	}

	.b-left {
		width: 60%;
		height: 30px;
		align-self: center;
	}
	.b-right {
		width: 18%;		
	}
	.b-right a{
		cursor:pointer;
	}
	.p {
		width: 7px;
		height: 7px;
		background: url(/img/i/i.png)-130px -200px no-repeat;
		cursor:pointer;
	}
	.p2{
		width: 7px;
		height: 7px;
		background: url(/img/i/i.png)-130px -207px no-repeat;
		position: relative;	
		top:5px;
		right:7px;
		cursor:pointer;
	}
	.b-o1 {
		width: 79px;
	}

	.b-o2 {
		width: 127px;
	}

	.b-o2>input {
		width: 24px;

	}

	.b-o3 {
		width: 78px;
	}

	.b-o3>input {
		width: 30px;
		height: 20px;

	}

	.b-o4>input {
		width: 20px;
		height: 20px;
		border-bottom: 1px solid #999;
	}

	.b-o4 {
		width: 60px;


	}

.b-o5{
	position: relative;
}

	.b-o5>input {
		width: 100px;
		height: 20px;
		border-bottom: 2px solid #dce0e0;
	}
.b-o5 span{
	position: absolute;
	right:5px;
	top:5px;
	color:#d7d7d7;
	width:15px;
	height: 15px;
}
	.fdj {
		width: 20px;
		height: 18px;
		background: url(/img/i/i.png)-70px -200px no-repeat;
	}

	.b-main {
		width: 1000px;
		margin-top: 20px;
	}

	.b-m1 {
		width: 100%;
		height: 241px;
		padding: 25px 0;
		position: relative;
	}

	.hotel-img {
		width: 33%;

	}

	.hotel-img-1 {
		width: 100%;
		height: 240px;
		border-radius: 6px;

	}

	.describe {
		width: 65%;
		margin-left: 10px;
		text-align: left;
	}

	.des-left {
		width: 49%;
		padding-top: 5px;
	}

	.bird {
		width: 24px;
		height: 24px;
		background: url(/img/i/i.png) -280px 0 no-repeat;
		margin-left: 10px;
	}

	.des-right {
		width: 46%;
		color: #333;
	}

	.collect {
		margin-left: 250px;
		margin-bottom: 30px;
	}

	.collect a {
		color: #ff8a00;
	}

	.s_x {
		width: 16px;
		height: 16px;
		background: url(/img/i/i.png)-130px -50px no-repeat;
	}

	.des-right>a {
		margin-left: 269px;
	}

	.circle {
		width: 65px;
		height: 67px;
		border: 0;
		background: 0 0 no-repeat;
		/* background:url(/img/i/i.png)0 0 no-repeat; */
	}

	.circle>a {
		text-align: center;
		margin: 35px -40px;
	}

	.instduce {
		margin-top: 10px;
		margin-bottom: 10px;
		display: flex;
	}
	.instduce li{
		margin:0 5px;
	}

	.em {
		font-style: normal;
		font-size: 14px;
		color: #FF8A00;
		margin-top: 15px;
		margin-left: 15px;
		margin-right: 15px;
	}

	.location {
		margin-top: 25px;
	}

	.dz {
		width: 15px;
		height: 15px;
		background: url(/img/i/i.png) -130px 0 no-repeat;
	}

	.m_img {
		width: 100px;
		height: 20px;
		vertical-align: middle;
	}

	.platom_price {
		height: 38px;
		border-bottom: 1px solid #eee;
		line-height: 38px;


	}

	.yx {
		width: 100px;
		height: 20px;
		background: url(/img/i/platom.png);
		background-size: 100px;
	}

	.wx1 {
		width: 14px;
		height: 14px;
		background: url(/img/i/i.png)-250px 0;
	}

	.zfb1 {
		width: 14px;
		height: 14px;
		background: url(/img/i/i.png)-250px -15px;
		margin-left: 5px;
	}

	.page {
		padding: 20px 5px;
		line-height: 24px;
		float: right;
	
		font-size: 12px;
		color: #999;
	}
	.page ul {
		display: flex;
		flex-direction: row;

		justify-content: flex-end;
	}
	.page ul li {
		margin: 0 2px;
		vertical-align: middle;
		color: #666;
		cursor: pointer;
		margin: 0 5px;
	}
	.page ul li button {
		display: inline-block;
		padding: 0 7px;
		border-radius: 5px;
		background: #ff9d00;
	
		outline:none;
		border:0;
		margin:0 3px;
		color:#fff;
		line-height:20px;
	}
	.page ul>li>:not(:first-child){
		background: transparent;
		color:#666;
	}
	.page ul>li:nth-child(2)>button:not(:first-child):hover{
		background: #e5e5e5;
	}
	#cha{
		cursor: pointer;
	}	
	.page ul>li:nth-child(2)>a:not(first-child) :hover {
		background: hsl(0, 3%, 82%);
	}
	 .hidden{
		 margin:50px 200px;
		
	}
	.hidden p{
		margin-bottom: 15px;
    	font-size: 24px;
    	color: #666;
	}
	
	.hidden div{
		width:160px;
	    padding: 0 10px;
		margin: 10px 5px 0 210px;
		border: 1px solid #ff9d00;
		border-radius: 4px;
		line-height: 38px;
		font-size: 14px;
		text-align: left;
		color: #ff9d00;
		position: relative;
	}
	.hidden div:hover{
		background: #ff9d00;
		color: #fff;
	}
	.hidden i{
		position: absolute;;
		right:10px;
	}
	.cancel{
		width:1000px;
	}
	.cancel a{
		   color:#666;
		   font-weight: bold;
		   text-align: left;
		   display:block;
	}
</style>
<script>
import calendar from '../../components/calendar'
import little_map from '../../components/little_map.vue'
	export default {
		data() {
			return {
				ja: false,
				hotel: false,
				china: false,
				none: false,
				msg: "展开共13个区域",
				ding:true,
				top:true,
				back:false,
				kui:true,
				yijian:false,
				all_hotel: [],
				page: 1,
				offset: 1,
				pagecount:'',
				// id: "",
				id:this.$route.params.id,
				p:{},
				isdisable:false,
				kw:'',
				place:"三亚",
				results:[],
				cha:false,
				result:[],
				main:true,
				hidden:false,
				price:2000,
				range:"",
				// =======日历========
				startDate:new Date(),
				endDate:new Date(new Date().getTime()+24*60*60*1000),
				checkedDate:"",
				pattern:"",	
													
			}
		},
		watch:{
			range(){
				this.price=this.range*40
			},
			
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
		
		mounted() {
			this.getdata()
			// console.log(this.$route.query)
			// this.id=this.$route.parmas.id

			this.kw=this.$route.query.place
		},
		watch:{
			// kw(){
			// 	this.getcountry()
			// }
		},
		methods: {
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
			
			change(e){
				if(this.checkedDate=="end"){
					this.checkedDate=end
				}
			},						
			country(){
				if(this.kw!=''){
					this.getcountry()
				}				
			},
			//页头查找城市
			getcountry(){				
					this.axios.get(`/hotel/search/${this.kw}`).then(res=>{										
					this.results=res.data;
					let fid									
					this.results.forEach(ele=>{
						fid=ele.fid;
					})
					if(fid==this.id){																						
						this.all_hotel=this.results	
						location.reload()																																	
					}else{
						//跳转对应页面
						this.id=fid
						if(this.id==undefined){
							console.log("id未定义")
						}else{
							this.$router.push(`/hotel_two/${this.id}`)	
						}
						// this.$router.push({path:'/hotel_two',name:'hotel_two',params:{id:this.id}})	

					
					}			
				})
			},		
			cancel(){
				this.getdata()
				this.main=true
				this.hidden=false
				this.kw=''				
			},
			orderby(){
				this.orderdata()
			},
			orderdes(){
				this.desdata()
			},
			//关键词查找
			forsearch(){
				this.axios.get(`/hotel/search/${this.kw}`).then(res=>{										
					this.results=res.data;
					console.log(this.results)
					let fid									
					this.results.forEach(ele=>{
						fid=ele.fid;
						console.log(fid)
						let type=ele.type
						console.log(type)
					})
					if(fid==this.id){																						
						this.all_hotel=this.results	
						console.log(this.all_hotel)
										
																							
					}else{
						this.main=false
						this.hidden=true
					}			
				})				
			},
			search(){				
				if(this.kw!=''){
					this.forsearch()
					this.main=true
					this.hidden=false	
				
																	
				}							
			},
			diss(){
				console.log(`我执行了`)
				let input=document.querySelector('.b-o5 input')				
				if(input.value!=''){
					this.getdata()
					this.kw=''
					this.main=true;
					this.hidden=false									
				}			
			},	
			focus(){							
				if(this.kw=''){
					this.cha=false
				}else{
					this.cha=true					
				}
			},
			getdata(){
				this.id=this.$route.params.id;
				this.axios.get(`/hotel/all_hotel?id=${this.id}&page=${this.page}`).then(res => {
				this.all_hotel = res.data.results;
				this.pagecount = res.data.pagecount							
				this.p=this.all_hotel[0]
				let str=this.all_hotel[0].yuding;				
				this.getplace(str)									
			})												
			},
			//综合排序
			sums(){
				this.getdata()
			},
			//降序
			orderdata(){
				this.id=this.$route.params.id;			
				this.axios.get(`/hotel/all_hotel?id=${this.id}&page=${this.page}`).then(res => {
				this.all_hotel = res.data.results;
				this.pagecount = res.data.pagecount							
				this.p=this.all_hotel[0]								
				let order=res.data.results;				
    			order.forEach(ele => {
				let a=ele.price_a												
				});			
				order.sort((a,b)=>{
					return a.price_a-b.price_a
				})										  
			})												
			},
			//升序
			desdata(){
				this.id=this.$route.params.id;
				this.axios.get(`/hotel/all_hotel?id=${this.id}&page=${this.page}`).then(res => {
					console.log(res.data.results)
					this.all_hotel = res.data.results;
					this.pagecount = res.data.pagecount							
					this.p=this.all_hotel[0]								
					let order=res.data.results;				
					order.forEach(ele => {
					let a=ele.price_a											
					});			
					order.sort((a,b)=>{
						return b.price_a-a.price_a
					})
				})
			},
			getplace(str){			
				this.place=str.slice(0,2)
				document.title=`${this.place}酒店预订，${this.place}酒店价格查询，${this.place}酒店推荐--马蜂窝`				
			},
			//分页点击事件
			nextpage(index) {											
				 this.getdata()
				this.page=index+1
			},
			next(page){
				this.getdata()
				if(this.page<this.pagecount){
					this.page++;								
				}else{
					this.isdisable=true;				
				this.$refs.button.style.backgroundColor="gray";
				}
			},						
		b_top(){
			this.top=false;
			this.back=true;			
		},
		g_top(){
			this.top=true;
			this.back=false
		},
		k_top(){
			this.kui=false;
			this.yijian=true
		},
		u_top(){
			this.yijian=true;
			this.kui=false
		},
		//返回顶部
	    backTop() {
				let top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
			// 实现滚动效果
				const timeTop = setInterval(() => {
				document.body.scrollTop = document.documentElement.scrollTop = top -= 35
					if ( top<35) {
						clearInterval(timeTop)
							this.ding=false;
					}else{
						this.ding=true;
					}			
				}, 10)
			
			},

			
				// pageset()
			
			enter() {
				this.ja = true
			},
			leave() {
				this.ja = false
			},

			detail_page() {
				window.open("http://localhost:8080/hotel_detail")
			},
			go() {
				this.hotel = true;
			},
			out() {
				this.hotel =false;
			},
			inner() {
				this.china = true;
			},
			outside() {
				this.china = false
			},
			se() {
				this.none=!this.none;
				this.msg = "收起共13个区域"
			}
		},
	
			components:{
			"calendar":calendar,
			"little_map":little_map
		}
	}
</script>
