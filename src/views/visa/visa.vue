<template>
	<div class="visa">
		<div class="_header">
			<my-header></my-header>
		</div>
		
		<div class="banner">
			<img src="/img/visa/focus1.jpg" alt="">
			<div class="input_box">
				<input type="text" placeholder="输入要办理签证的国家或地区名称"><router-link to="" class="toSearch"><i></i></router-link>
				<ul>
					<li>美国</li>
					<li>台湾</li>
					<li>日本</li>
					<li>英国</li>
					<li>泰国</li>
					<li>新加坡</li>
					<li>马来西亚</li>
					<li>更多</li>
				</ul>
			</div>
		</div>
		<div class="content">
			<!-- 马蜂窝推荐 -->
			<div class="recommend">
				<div class="title_box">
					<span class="title">马蜂窝推荐</span>
					<span class="more">更多</span>
				</div>
				<div class="row">
					<ul>
						<li v-for="i of 4">
							<div class="pic">
								<div class="shadow"></div>
								<img src="/img/visa/日本签证推荐.jpeg" alt="">
								<div class="city">
									<span>日本</span>
									<i></i>
									<span>上海送签</span>
								</div>
							</div>
							<div class="text">
								<span>日本</span><p><span class="price">$228</span>起</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<!-- 热门国家/地区 -->
			<div class="hot_place">
				<div class="title_box">
					<span class="title">热门国家/地区</span>
					<span class="more">更多</span>
				</div>
				<div class="flag row">
					<ul>
						<li v-for="i of 12">
							<div class="left">
								<img src="/img/destination/country/flag/加拿大国旗.jpeg" alt="">
							</div>
							<div class="right">
								<p>加拿大</p>
								<p><span class="price">￥980</span>起</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<!-- 本周热卖 -->
			<div class="hot_sale">
				<div class="title_box">
					<span class="title">本周热卖</span>
					<span class="more change"><i></i>换一换</span>
				</div>
				<div class="product row">
					<ul>
						<li v-for="i of 4">
							<div class="pic">
								<img src="/img/visa/日本签证缩略图2.gif" alt="">
								<div class="place"><i></i>日本</div>
							</div>
							<div class="text">
								<p>
									北京送签+日本单次旅游签证（拒签全退+顺丰包回邮+简化资料+客服秒回+日本签证+东京大阪自由行+北海道滑雪泡温泉）
								</p>
								<p><span class="price">￥278</span>起</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<!-- 办理流程 -->
			<div class="process_box">
				<div class="title_box">
					<span class="title">办理流程</span>
					<span class="more change"><i></i></span>
				</div>
				<div class="process row">
					<ul>
						<li>
							<span class="icon_1"></span>
							<p>1.选择签证</p>
						</li>
						<li>
							<span class="icon_2"></span>
							<p>2.确认订单</p>
						</li>
						<li>
							<span class="icon_3"></span>
							<p>3.支付费用</p>
						</li>
						<li>
							<span class="icon_4"></span>
							<p>4.坐等商家邮件</p>
						</li>
						<li>
							<span class="icon_5"></span>
							<p>5.递交材料</p>
						</li>
						<li>
							<span class="icon_6"></span>
							<p>6.出签领取</p>
						</li>
						
					</ul>
				</div>
				
			</div>
			
		</div>
		<div class="top_bottom">
			<router-link to="">
				<img src="/img/visa/banner-alliance3.jpg" alt="">
			</router-link>
		</div>
		<div class="_footer">
			<my-footer></my-footer>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		mounted(){
			document.title='全球签证办理，马蜂窝自由行出境签证办理平台'
		}
	}
</script>

<style scoped>
	@media screen and (min-width:1300px) {
		.content{
			width: 1000px;
		}
		.recommend ul li{
			flex:0 0 24%
		}
		.hot_place .flag ul>li{
			flex:0 0 24%
		}
		.hot_sale .product ul li{
			flex:0 0 24%
		}
		.hot_place .flag ul>li{
			height: 97px;
		}
	}
	@media screen and (max-width:1300px) {
		.content{
			width: 1000px;
		}
		.recommend ul li{
			flex:0 0 24%
		}
		.hot_place .flag ul>li{
			flex:0 0 24%
		}
		.hot_sale .product ul li{
			flex:0 0 24%
		}
		.hot_place .flag ul>li{
			height: 97px;
		}
	}
	@media screen and (max-width:992px) {
		.content{
			width: 800px;
		}
		.recommend ul li{
			flex:0 0 32%
		}
		.hot_place .flag ul>li{
			flex:0 0 24%
		}
		.hot_sale .product ul li{
			flex:0 0 32%
		}
		.hot_place .flag ul>li{
			height: 97px;
		}
	}
	@media screen and (max-width:768px) {
		.content{
			width: 700px;
		}
		.recommend ul li{
			flex:0 0 49%
		}
		.hot_place .flag ul>li{
			flex:0 0 32%
		}
		.hot_sale .product ul li{
			flex:0 0 49%
		}
		.hot_place .flag ul>li{
			height: 97px;
		}
	}
	@media screen and (max-width:480px) {
		.content{
			width: 400px;
		}
		.recommend ul li{
			flex:0 0 100%
		}
		.hot_place .flag ul>li{
			flex:0 0 49%
		}
		.hot_sale .product ul li{
			flex:0 0 100%
		}
		.hot_place .flag ul>li{
			height: 135px;
		}
	}
	@media screen and (max-width:0px) {
		.content{
			width: 400px;
		}
		.recommend ul li{
			flex:0 0 100%
		}
		.hot_place .flag ul>li{
			flex:0 0 49%
		}
		.hot_sale .product ul li{
			flex:0 0 100%
		}
		.hot_place .flag ul>li{
			height: 135px;
		}
	}
	img{
		border-radius: 3px;
	}
	.top_bottom{
		position: absolute;
		left: 0;right: 0;bottom: 520px;
		margin: auto;
		height: 165px;
	}
	.top_bottom a{
		width: 100%;height: 100%;
	}
	.top_bottom img{
		width: 100%;height: 100%;
		object-fit: cover;
	}
	.process_box{
		padding-bottom: 190px;
	}
	.process_box ul{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.process{
		padding-top: 20px;
	}
	.process_box ul>li{
		width: 165px;
		text-align: center;
		font-size: 14px;
		padding-top: 25px;
	}
	.process_box ul>li span{
		width: 37px;
		height: 37px;
		background: url(/img/sprites/icon_sprites.png) no-repeat 0 0;
		display: inline-block;
	}
	.icon_1{
		
	}
	.icon_2{
		background-position: -40px 0 !important;
		width: 39px;
	}
	.icon_3{
		background-position: -40px 0 !important;
		width: 39px;
	}
	.icon_4{
		background-position: -80px 0 !important;
		width: 39px;
	}
	.icon_5{
		background-position: -120px 0 !important;
		width: 39px;
	}
	.icon_6{
		background-position: -160px 0 !important;
		width: 39px;
	}
	
	.hot_sale .product ul{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		cursor: pointer;
	}
	.hot_sale .product ul li:hover .text p:first-child{
		height:100px;
	}
	.hot_sale .product ul li:hover .text{
		height: 140px;
	}
	.hot_sale .product ul li{
		position: relative;
		height: 230px;
	}
	.hot_sale .product .pic{
		position: absolute;
		top: 0;
		width: 100%;
	}
	
	.hot_sale .product .pic img{
		width: 100%;height: 100%;
		object-fit: cover;
	}
	.hot_sale .product .pic .place{
		width: 100%;
		height: 34px;
		line-height: 34px;
		color: #fff;
		font-size: 18px;
		position: absolute;
		left: 0;
		bottom: 3px;
		background: rgba(0,0,0,0.5);
	}
	.hot_sale .product .pic .place i{
		width: 16px;
		height: 21px;
		background: url(/img/sprites/address.png);
		display: inline-block;
		vertical-align: text-bottom;
		margin: 0 5px 0 10px;
	}
	.hot_sale .product .text{
		position: absolute;
		left: 0;right: 0;bottom: 0;
		margin: auto;
		border: 1px solid #f1f1f1;
		border-top: 0;
		padding: 0 8px 5px 8px;
		height: 91px;
		overflow: hidden;
		transition: height .2s ease-in-out .1s;
		background-color: #fff;
	}
	.hot_sale .product .text p:first-child{
		position: absolute;
		bottom: 40px;
		z-index: 20;
		font-size: 14px;
		color: #000;
		line-height: 22px;
		font-weight: normal;
		padding: 6px 0;
		height: 50px;
		background: #fff;
		overflow: hidden;
		transition: height .2s ease-in-out .1s;
		
	}
	.hot_sale .product .text p:nth-child(2){
		position: absolute;
		bottom: 8px;
	}
	.hot_place .flag ul{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.hot_place .flag::after{
		content: "";
		display: block;
		clear: both;
	}
	.hot_place .flag .left{
		float: left;
		width: 100px;
		height: 67px;
		overflow: hidden;
	}
	.hot_place .flag .left img{
		width: 100%;height: 100%;
		object-fit: cover;
	}
	.hot_place .flag .right{
		float: left;
		height: 67px;
		padding-left: 5px;
	}
	.hot_place .flag .right p:first-child{
		color: #000;
		font-size: 16px;
	}
	.hot_place .flag .right p:nth-child(2){
		color: #959595;
		padding-top: 10px;
	}
	.hot_place .flag ul>li{
		background-color: #fff;
		border: 1px solid #fff;
		padding: 10px;
		overflow: hidden;
	}
	
	.recommend ul{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.recommend ul li{
		margin-bottom: 10px;
	}
	.recommend ul li .text{
		height: 44px;
		padding: 0 9px;
		background-color: #fff;
		line-height: 44px;
		font-size: 20px;
		overflow: hidden;
		border: 1px solid #f1f1f1;
		border-top: 0;
		color: #999;
	}
	.recommend ul li .text>span:first-child{
		color: #000;
		float: left;
	}
	.recommend ul li .text>p{
		float: right;
		font-size: 0.875rem;
	}
	.recommend .pic{
		width: 100%;
		height: 100%;
		overflow: hidden;
		position: relative;
	}
	.recommend .pic .shadow{
		position: absolute;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,.25);
	}
	.recommend .pic .city{
		position: absolute;
		z-index: 10;
		top: 0;bottom: 0;left: 0;right: 0;
		margin: auto;
		width: 136px;height: 105px;
	}
	.recommend .pic .city span{
		display: inline-block;
		width: 100%;
		padding: 10px 20px;
		text-align: center;
		color: #fff;
		font-size: 24px;
	}
	
	.recommend .pic .city i{
		width: 100%;
		height: 3px;
		background-color: #fff;
		border-radius: 2px;
		display: block;
		position: relative;
	}
	.recommend .pic .city i::before{
		content: "";
		width: 3px;
		height: 3px;
		background-color: #fff;
		border-radius: 50%;
		position: absolute;
		left: -7px;
		top: 0;
	}
	.recommend .pic .city i::after{
		content: "";
		width: 3px;
		height: 3px;
		background-color: #fff;
		border-radius: 50%;
		position: absolute;
		right: -7px;
		top: 0;
	}
	.recommend .pic img{
		width: 100%;height: 100%;
		object-fit: cover;
	}
	/* banner */
	.banner{
		position:relative;
		box-sizing: content-box;
	}
	.banner .input_box{
		position: absolute;
		z-index: 2;
		left: 50%;
		top: 50%;
		margin: -70px 0 0 -280px;
		width: 540px;
		padding: 15px 10px;
		background-color: #000;
		background-color: rgba(0,0,0,.4);
		border-radius: 4px;
	}
	.input_box input{
		float: left;
		width: 440px;
		height: 46px;
		margin: 0 6px 0 0;
		padding: 0 20px;
		background-color: #fff;
		border: 0 none;
		line-height: 46px;
		font-size: 14px;
		color: #000;
		border-radius: 4px;
	}
	.input_box .toSearch{
		float: left;
		width: 50px;
		height: 46px;
		background-color: #ff9d00;
		border-radius: 4px;
		text-align: center;
	}
	.input_box .toSearch i{
		display: inline-block;
		margin-top: 11px;
		width: 24px;
		height: 24px;
		background: url(/img/sprites/header-sprites9.png) no-repeat 0 -110px;
		overflow: hidden;
		vertical-align: top;
	}
	.toSearch:after{
		content: "";
		display: block;
		clear: both;
	}
	.input_box ul{
		display: block;
		clear: both;
		padding-top: 10px;
		/* display: flex; */
	}
	.input_box ul:after{
		content: "";
		display: block;
		clear: both;
	}
	.input_box ul>li{
		float: left;
		margin-right: 10px;
		color: #fff;
		cursor: pointer;
	}
	.title_box{
		height: 52px;
		line-height: 52px;
		border-bottom: 1px solid #e8e8e8;
		overflow: hidden;
	}
	.title_box .title{
		float: left;
		height: 100%;
		font-size: 24px;
		line-height: 52px;
	}
	.title_box .more{
		float: right;
		font-size: 10px;
		color: #666666;
		line-height: 74px;
		cursor: pointer;
	}
	.row{
		padding: 20px 0 27px;
	}
	.price{
		color: #ff9d00;
		font-size: 22px;
		font-style: normal;
	}
	.visa{
		position: relative;
	}
	.content{
		position: relative;
		margin: 0 auto;
	}
</style>
