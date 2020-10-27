<template>
    <div class="footer">
			<div id="info" class="">
				<dl>
					<dt class="dt">马蜂窝旅游网</dt>
					<dd>中国年轻一代用的更多的旅游网站</dd>
					<dd>上亿旅行者共同打造的<span>"旅行神器"</span></dd>
					<dd><span>60,000</span>多个全球旅游目的地</dd>
					<dd><span>600,000</span>个细分目的地新玩法</dd>
					<dd><span>760,000,000</span>次攻略下载</dd>
					<dd><span>38,000</span>家旅游产品供应商</dd>
				</dl>
				<dl>
					<dt class="dt">关于我们</dt>
					<dd><router-link to="">关于马蜂窝</router-link><router-link to="" class="m_l_10">联系我们</router-link></dd>
					<dd><router-link to="">隐私政策</router-link><router-link to="" class="m_l_10">商标声明</router-link></dd>
					<dd><router-link to="">服务协议</router-link></dd>
					<dd><router-link to="">商城平台服务协议</router-link></dd>
					<dd><router-link to="">网络信息侵权通知指引</router-link></dd>
					<dd><router-link to="">马蜂窝旅游网服务监督员</router-link></dd>
					<dd><router-link to="">网站地图</router-link><router-link to=""></router-link><span class="m_l_10">加入马蜂窝</span></dd>
				</dl>
				<dl class="">
					<dt class="dt text_center">旅行服务</dt>
					<dd>
						<ul id="dt_ul">
							<li><router-link to="">旅游攻略</router-link></li>
							<li><router-link to="">酒店预订</router-link></li>
							<li><router-link to="">旅游特价</router-link></li>
							<li><router-link to="">国际租车</router-link></li>
							<li><router-link to="">旅游问答</router-link></li>
							<li><router-link to="">旅游保险</router-link></li>
							<li><router-link to="">旅游指南</router-link></li>
							<li><router-link to="">订火车票</router-link></li>
							<li><router-link to="">旅游资讯</router-link></li>
							<li><router-link to="">APP下载</router-link></li>
							<li><router-link to="">旅游商城全球商家入驻</router-link></li>
						</ul>
					</dd>
				</dl>
				<dl id="RQ_code" class="flex_row space-between">
					<dd><img src="../../public/img/sprites/wKgBZ1t_4sSAVJ6uAAAlzJ0PZgU881.png" ><p>马蜂窝APP<br>扫描立即下载</p></dd>
					<dd><img src="../../public/img/sprites/qr_mfw4.gif" ><p>马蜂窝旅游<br>订阅号</p></dd>
					<dd><img src="../../public/img/sprites/qr_tejia4.png" ><p>马蜂窝良品<br>官方服务号</p></dd>
				</dl>
				<dl class="ft_social">
					<dt>旅游之前，先上马蜂窝</dt>
					<dd>
						<ul>
							<router-link to=""><li id="pic_1" class="ft_social_pic"></li></router-link>
							<router-link to=""><li id="pic_2" class="ft_social_pic"></li></router-link>
							<router-link to=""><li id="pic_3" class="ft_social_pic"></li></router-link>
						</ul>
					</dd>
				</dl>
			</div>
			<div class="center">
				<p>© 2020 Mafengwo.cn<img src="../../public/img/sprites/police_record.png" class="emblem"><router-link to="" class="m_l_10">京ICP备11015476号</router-link><router-link to="" class="m_l_10">京公网安备11010502013401号</router-link><router-link to="" class="m_l_10">京ICP证110318号</router-link> 违法和不良信息举报电话: 010-83416877 举报邮箱: mfwjubao@mafengwo.com<br>
				<router-link to="">网络出版服务许可证</router-link><router-link to="" class="m_l_10">增值电信业务经营许可证</router-link><router-link to="" class="m_l_10">营业执照</router-link><router-link to="" class="m_l_10">广播电视节目制作经营许可证</router-link><router-link to="" class="m_l_10">网络文化许可证</router-link><router-link to="" class="m_l_10">网上有害信息举报专区</router-link> <router-link to="" class="m_l_10">帮助中心</router-link><br>
				马蜂窝客服：国内 <span class="theme_color">4006-345-678 </span>海外 <span class="theme_color">+86-10-8341-6888</span></p>
			</div>
			<div class="flex_row align_items">
				<li><router-link to=""></router-link></li>
				<!-- <img src="../../public/img/sprites/wKgEaVzlS8yAX2c6AAAblEJMLps615.png" > -->
				<img src="../../public/img/sprites/wKgEaVzlS06AVwj0AAAa_HtuzSo207.png" >
				<img src="../../public/img/sprites/wKgEaVzlS8yAX2c6AAAblEJMLps615.png" >
			</div>
	</div>
</template>
<style scoped>
.footer{
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
    background: #3c3c3c;
	color: #c2c2c2;
	
}
.footer p{
	display: block;
}
.footer>div:first-child{
	width:1105px;
	padding: 40px 8px 40px;
	border-bottom: 1px solid #575a5b;
}
.footer>div:first-child dl{
	margin-right: 68px;
}
.dt{
	width: 135px;
	height: 30px;
	/* text-align: center; */
	font-size: 14px !important;
	overflow: hidden;
}
#dt_ul{width: 170px;}
#dt_ul li{
	width: 85px;
	float: left;
}
#dt_ul>li:last-child{width: 100%;}
#info{
	display: flex;
	flex-wrap: wrap;
	
}
#info dl dd span{color: #ff9d00;}
#info dl dd,a {
    margin-bottom: 3px;
    font-size: 12px;
}
.m_l_10{margin-left: 10px;}
#RQ_code{
	width: 360px;
	margin:20px 0;
	text-align: center;
}
#RQ_code img{
	width: 94px;height: 90px;
	padding-top:10px;
}
.ft_social{
	width: 100%;
	margin: 0 !important;
	text-align: center;
}
.ft_social dt{
	font-size: 16px;
	margin: 25px 0 15px 0;
}
.ft_social dd ul a{
	margin:0 5px;
}
.ft_social_pic{
	display: inline-block;
	width: 28px;
	height: 28px;
	overflow: hidden;
}
#pic_1{background:  url(../../public/img/sprites/mfw-footer-sprite7.png) no-repeat 0% 0%;}
#pic_2{background:  url(../../public/img/sprites/mfw-footer-sprite7.png) no-repeat 25% 0%;}
#pic_3{background:  url(../../public/img/sprites/mfw-footer-sprite7.png) no-repeat 50% 0%;}

#info~div{
	margin-top: 10px;
}
.emblem{
	width: 12px;height: 12px;
	margin-left:10px;
}
#info~div>p{
	line-height: 25px;
}

#info~div~div>img{
	margin:0 6px 25px;
	/* margin-bottom: 25px; */
}
#info~div~div>li>a:first-child{
	display: block;
	width: 120px;height: 47px;
	/* border: 1px solid #1493E3; */
	background: transparent url(../../public/img/sprites/mfw-footer-sprite7.png) no-repeat -9.5% 78.1%;
	background-size: 150%;
}
</style>
