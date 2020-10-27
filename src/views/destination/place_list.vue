<template>
	<div class="place_list">
		<div class="_my_header">
			<my-header></my-header>
		</div>
		<div class="banner">
			<img src="/img/place_list/banner.jpeg" alt="">
			<div class="input_box">
				<p>Don't fear the unknown</p>
				<div>
					<input type="text" placeholder="我想去..." @keydown.13="goPlace(place)" v-model="place"><router-link to="" @click.native="goPlace(place)"><i></i></router-link>
				</div>
				<ul>
					<li>成都</li>
					<li>婺源</li>
					<li>厦门</li>
					<li>武汉</li>
					<li>重庆</li>
				</ul>
			</div>
			<div class="show-info">
				<h2>神仙海岛的三款热门玩法，去普吉一定不能错过</h2>
				<p>关于泰国普吉岛，这个多面风情的岛屿，常年位于境外旅游热搜榜前列，第一次去的人，容易被它的热带海岛风情和高性价比吸引到想再二刷；第N次去的人，更是因为每次都能发现普吉的新玩法，让人想再多宠幸一遍。</p>
			</div>
			<div class="show-ft">
				<i></i>
				<a href="">22</a>
				<a href=""><i></i>分享</a>
			</div>
		</div>
		<div class="content">
			<!-- 热门目的地 -->
			<div>
				<div class="hot">
					<div class="hot_top">
						<p class="title">热门目的地</p>
						<ul class="nav" @mousemove="selectType($event)">
							<li :class="{active:place_type=='国内'}" data-type='国内'>国内</li>
							<li :class="{active:place_type=='港澳台'}" data-type='港澳台'>港澳台</li>
							<li :class="{active:place_type=='日本'}" data-type='日本'>日本</li>
							<li :class="{active:place_type=='东南亚'}" data-type='东南亚'>东南亚</li>
							<li :class="{active:place_type=='南亚 西亚'}" data-type='南亚 西亚'>南亚 西亚</li>
							<li :class="{active:place_type=='欧洲 美洲'}" data-type='欧洲 美洲'>欧洲 美洲</li>
							<li :class="{active:place_type=='澳洲 非洲'}" data-type='澳洲 非洲'>澳洲 非洲</li>
						</ul>
					</div>
					<div class="hot_body">
						<div v-show="place_type=='国内'">
							<dl>
								<dt>直辖市</dt>
								<dd v-for="(t,i) of `北京 上海 重庆 天津`.split(` `)">{{t}}</dd>
							</dl>
							
							<dl>
								<dt>云南</dt>
								<dd v-for="(t,i) of `丽江 大理 昆明 香格里拉 泸沽湖 双廊 西双版纳 束河 腾冲 雨崩`.split(` `)">{{t}}</dd>
							</dl>
							
							<dl>
								<dt>四川</dt>
								<dd v-for="(t,i) of `成都 九寨沟 稻城 色达 若尔盖 都江堰 亚丁 阿坝 峨眉山 牛背山`.split(` `)">{{t}}</dd>
							</dl>
							
							<dl>
								<dt>浙江</dt>
								<dd v-for="(t,i) of `杭州 乌镇 西塘 千岛湖 普陀山 东极岛 南浔`.split(` `)">{{t}}</dd>
							</dl>
							
							<dl>
								<dt>海南 福建</dt>
								<dd v-for="(t,i) of `三亚 蜈支洲岛 海口 厦门 鼓浪屿 武夷山 泉州`.split(` `)" @click="goPlace(t)">{{t}}</dd>
							</dl>
							
							<dl>
								<dt>江苏</dt>
								<dd v-for="(t,i) of `南京 苏州 无锡 扬州 周庄 常州 连云港 同里`.split(` `)">{{t}}</dd>
							</dl>
							
							<dl>
								<dt>广东 广西</dt>
								<dd v-for="(t,i) of `广州 深圳 珠海 汕头 桂林 阳朔 北海 黄姚古镇 涠洲岛 龙脊梯田`.split(` `)">{{t}}</dd>
							</dl>
							
							<dl>
								<dt>西藏 贵州</dt>
								<dd v-for="(t,i) of `拉萨 林芝 阿里 黔东南 荔波 镇远 西江 黄果树`.split(` `)">{{t}}</dd>
							</dl>
							
							<dl>
								<dt>西北</dt>
								<dd v-for="(t,i) of `西安 青海湖 西宁 祁连 敦煌 兰州 甘南 张掖 嘉峪关 新疆`.split(` `)">{{t}}</dd>
							</dl>
							
							<dl>
								<dt>山东 山西</dt>
								<dd v-for="(t,i) of `青岛 泰山 日照 威海 烟台 长岛 蓬莱 平遥 大同 五台山 壶口瀑布`.split(` `)">{{t}}</dd>
							</dl>
							
							<dl>
								<dt>湖南 湖北</dt>
								<dd v-for="(t,i) of `张家界 凤凰 郴州 武汉 恩施 神农架`.split(` `)">{{t}}</dd>
							</dl>
							
							<dl>
								<dt>安徽 江西</dt>
								<dd v-for="(t,i) of `黄山 宏村 婺源 景德镇 庐山 三清山 南昌`.split(` `)">{{t}}</dd>
							</dl>
							
							<dl>
								<dt>河北 河南</dt>
								<dd v-for="(t,i) of `北戴河 秦皇岛 承德 张北 少林寺 洛阳 龙门石窟`.split(` `)">{{t}}</dd>
							</dl>
							
							<dl>
								<dt>内蒙古 东北</dt>
								<dd v-for="(t,i) of `呼伦贝尔 阿尔山 海拉尔 哈尔滨 漠河 雪乡 大连 丹东 盘锦`.split(` `)">{{t}}</dd>
							</dl>
						</div>
						<div v-show="place_type=='港澳台'">
							<dl>
								<dt>台湾</dt>
								<dd v-for="(t,i) of `台北 垦丁 花莲 高雄 台中 九份 南投 阿里山`.split(` `)">{{t}}</dd>
							</dl>
							<dl>
								<dt>香港 澳门</dt>
								<dd v-for="(t,i) of ``.split(` `)">{{t}}</dd>
							</dl>
						</div>
						<div v-show="place_type=='日本'">
							<dl>
								<dt>日本</dt>
								<dd v-for="(t,i) of `东京 大阪 京都 冲绳 北海道 箱根 札幌 奈良 名古屋 福冈 神户 那霸 函馆 小樽 镰仓`.split(` `)" @click="goPlace(t)">{{t}}</dd>	
							</dl>
							
						</div>
						<div v-show="place_type=='东南亚'">
							<dl>
								<dt>泰国</dt>
								<dd v-for="(t,i) of `普吉岛 清迈 曼谷 苏梅岛 甲米 芭提雅 象岛`.split(` `)">{{t}}</dd>
							</dl>
							<dl>
								<dt>新加坡 印尼</dt>
								<dd v-for="(t,i) of `新加坡 巴厘岛 民丹岛`.split(` `)">{{t}}</dd>
							</dl>
							<dl>
								<dt>马来西亚</dt>
								<dd v-for="(t,i) of `沙巴 仙本那 吉隆坡 兰卡威`.split(` `)">{{t}}</dd>
							</dl>
							<dl>
								<dt>越南</dt>
								<dd v-for="(t,i) of `芽庄 岘港 美奈 大叻 河内 胡志明市`.split(` `)">{{t}}</dd>
							</dl>
							<dl>
								<dt>柬埔寨 缅甸</dt>
								<dd v-for="(t,i) of `吴哥窟 暹粒 金边 仰光 蒲甘 曼德勒`.split(` `)">{{t}}</dd>
							</dl>
							<dl>
								<dt>菲律宾 文莱</dt>
								<dd v-for="(t,i) of `长滩岛 杜马盖地 薄荷岛 宿雾 文莱`.split(` `)">{{t}}</dd>
							</dl>
							
						</div>
						<div v-show="place_type=='南亚 西亚'">
							<dl>
								<dt>马尔代夫</dt>
								<dd v-for="(t,i) of `马累 阿雅达岛 薇拉瓦鲁岛 宁静岛`.split(` `)">{{t}}</dd>
							</dl>
							<dl>
								<dt>阿联酋 伊朗</dt>
								<dd v-for="(t,i) of `迪拜 阿布扎比 德黑兰 伊斯法罕 设拉子`.split(` `)">{{t}}</dd>
							</dl>
							<dl>
								<dt>斯里兰卡</dt>
								<dd v-for="(t,i) of `科伦坡 康提 努沃勒埃利耶 尼甘布`.split(` `)">{{t}}</dd>
							</dl>
							<dl>
								<dt>尼泊尔</dt>
								<dd v-for="(t,i) of `加德满都 博卡拉 巴德岗`.split(` `)">{{t}}</dd>
							</dl>
							<dl>
								<dt>印度</dt>
								<dd v-for="(t,i) of `新德里 孟买 阿格拉 斋普尔 瓦拉纳西`.split(` `)">{{t}}</dd>
							</dl>
						
							
							
							
							
						
						</div>
						<div v-show="place_type=='欧洲 美洲'">
							<dl>
								<dt>美国</dt>
								<dd v-for="(t,i) of `洛杉矶 旧金山 纽约 塞班岛 夏威夷 关岛 西雅图 华盛顿 波士顿 奥兰多 迈阿密 芝加哥 阿拉斯加`.split(` `)">{{t}}</dd>
							</dl>
							<dl>
								<dt>英国</dt>
								<dd v-for="(t,i) of `伦敦 爱丁堡 剑桥 牛津 约克 都柏林`.split(` `)">{{t}}</dd>
							</dl>
							<dl>
								<dt>意大利</dt>
								<dd v-for="(t,i) of `罗马 威尼斯 佛罗伦萨 米兰 五渔村`.split(` `)">{{t}}</dd>
							</dl>
							<dl>
								<dt>德国 奥地利</dt>
								<dd v-for="(t,i) of `慕尼黑 法兰克福 柏林 科隆 福森 维也纳 哈尔施塔特 萨尔茨堡`.split(` `)">{{t}}</dd>
							</dl>
							<dl>
								<dt>希腊 土耳其</dt>
								<dd v-for="(t,i) of `圣托里尼 雅典 伊斯坦布尔 棉花堡 卡帕多奇亚`.split(` `)">{{t}}</dd>
							</dl>
							
						</div>
						<div v-show="place_type=='澳洲 非洲'">
							<dl>
								<dt>澳大利亚</dt>
								<dd v-for="(t,i) of `悉尼 墨尔本 凯恩斯 大堡礁 黄金海岸 布里斯班`.split(` `)">{{t}}</dd>
							</dl>
							<dl>
								<dt>新西兰</dt>
								<dd v-for="(t,i) of `悉尼 墨尔本 凯恩斯 大堡礁 黄金海岸 布里斯班`.split(` `)">{{t}}</dd>
							</dl>
							<dl>
								<dt>埃及</dt>
								<dd v-for="(t,i) of `开罗 卢克索 阿斯旺 红海 亚历山大`.split(` `)">{{t}}</dd>
							</dl>
							<dl>
								<dt>摩洛哥</dt>
								<dd v-for="(t,i) of `马拉喀什 卡萨布兰卡 非斯 舍夫沙万`.split(` `)">{{t}}</dd>
							</dl>
						</div>
					</div>
				</div>
			</div>
			<div>
				<div class="season">
					<p class="title">当季推荐</p>
					<ul @mousemove="selectMonth($event)">
						<li v-for="i of 12" :class="{active:i==place_month}" :data-month="i">{{i}}月</li>
					</ul>
					<div class="box" v-for="(obj,i) in month_content" :key="i" v-show="i+1==place_month">
						<div v-for="(v,key,j) in obj" :class="{bg:j<3}">
							<img :src="v" @click="goPlace(key)">
							<p v-show="j<6">{{key}}</p>
							<p v-show="j==6" class="more">更多<i></i></p>
						</div>
					</div>
				</div>
			</div>
			<div>
				<div class="theme">
					<p class="title">主题精选</p>
					<ul  @mousemove="selectTheme($event)">
						<li :class="{active:place_theme=='0'}" data-theme="0">全年适宜</li>
						<li :class="{active:place_theme=='1'}" data-theme="1">季节</li>
						<li :class="{active:place_theme=='2'}" data-theme="2">出行方式</li>
						<li :class="{active:place_theme=='3'}" data-theme="3">节假日</li>
					</ul>
					<div class="box" v-for="(obj,j) of theme_content" :key='j' v-show="j==Number(place_theme)">
						<div v-for="(v,key,i) of obj" v-show="i<=11">
							<img :src="v" alt="">
							<p v-show="i<11">{{key}}</p>
							<p v-show="i==11" class="more">更多<i></i></p>
						</div>
					</div>
					
				</div>
			</div>
			
			
			<div>
				<div class="all">
					<div class="row-list" data-cs-p="全球目的地">
					    <h2 class="hd">全球目的地<span>（按拼音首字母排序）</span><a class="btn-add" href="/mdd/add.html" target="_blank" title="添加目的地"><i>+</i>添加目的地</a></h2>
					
					    <div class="bd">
					        <dl class="item">
					            <dt class="sub-title">亚洲</dt>
					            <dd class="clearfix">
					                <ul class="col">
					                    <li class="letter">A</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/11698.html" target="_blank">阿富汗 <span class="en">Afghanistan</span></a></li>
					                    <li><a href="/travel-scenic-spot/mafengwo/11213.html" target="_blank">阿联酋 <span class="en">United Arab Emirates</span></a>
					                    </li>
					                    <li><a href="/travel-scenic-spot/mafengwo/16674.html" target="_blank">阿曼 <span class="en">Sultanate of Oman</span></a></li>
					                    <li><a href="/travel-scenic-spot/mafengwo/31369.html" target="_blank">阿塞拜疆 <span class="en">Azerbaijan</span></a></li>
					                    <li class="letter">B</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/11697.html" target="_blank">巴基斯坦 <span class="en">Pakistan</span></a>
					                    </li>
					                    <li><a href="/travel-scenic-spot/mafengwo/32105.html" target="_blank">巴勒斯坦 <span class="en">Palestine</span></a>
					                    </li>
					                    <li><a href="/travel-scenic-spot/mafengwo/15519.html" target="_blank">巴林 <span class="en">Bahrain</span></a>
					                    </li>
					                    
					                                    
					                    
					                    <li class="letter">C</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/11780.html" target="_blank">朝鲜 <span class="en">North Korea</span></a>
					                    </li>
					                    <li class="letter">D</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/29700.html" target="_blank">东帝汶 <span class="en">East Timor</span></a>
					                    </li>
					                    <li class="letter">F</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/10067.html" target="_blank">菲律宾 <span class="en">Philippines</span></a><i class="icon-label"></i></li>
					                    <li class="letter">G</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/10234.html" target="_blank">格鲁吉亚 <span class="en">Georgia</span></a></li>
					                    <li class="letter">H</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/17393.html" target="_blank">哈萨克斯坦 <span class="en">The Republic of Kazakhstan</span></a>
					                    </li>
					                    <li><a href="/travel-scenic-spot/mafengwo/10184.html" target="_blank">韩国 <span class="en">Korea</span></a><i class="icon-label"></i></li>
					                    <li class="letter">J</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/57194.html" target="_blank">吉尔吉斯斯坦 <span class="en">Kyrgyzstan</span></a></li>
					                    <li><a href="/travel-scenic-spot/mafengwo/10070.html" target="_blank">柬埔寨 <span class="en">Cambodia</span></a><i class="icon-label"></i></li>
					                </ul>
					                <ul class="col">
					                    <li class="letter">K</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/12035.html" target="_blank">卡塔尔 <span class="en">The State of Qatar</span></a>
					                    </li>
					                    <li><a href="/travel-scenic-spot/mafengwo/21762.html" target="_blank">科威特 <span class="en">The State of Kuwait</span></a>
					                    </li>
					                    <li class="letter">L</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/10820.html" target="_blank">老挝 <span class="en">Laos</span></a><i class="icon-label"></i></li>
					                    <li><a href="/travel-scenic-spot/mafengwo/12028.html" target="_blank">黎巴嫩 <span class="en">Lebanon</span></a></li>
					                    <li class="letter">M</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/10101.html" target="_blank">马尔代夫 <span class="en">Maldives</span></a><i class="icon-label"></i></li>
					                    <li><a href="/travel-scenic-spot/mafengwo/10097.html" target="_blank">马来西亚 <span class="en">Malaysia</span></a><i class="icon-label"></i></li>
					                    <li><a href="/travel-scenic-spot/mafengwo/14293.html" target="_blank">蒙古 <span class="en">Mongolia</span></a></li>
					                    <li><a href="/travel-scenic-spot/mafengwo/14783.html" target="_blank">孟加拉国 <span class="en">Bangladesh</span></a></li>
					                    <li><a href="/travel-scenic-spot/mafengwo/10179.html" target="_blank">缅甸 <span class="en">Myanmar</span></a><i class="icon-label"></i></li>
					                    <li class="letter">N</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/10069.html" target="_blank">尼泊尔 <span class="en">Nepal</span></a><i class="icon-label"></i></li>
					                    <li class="letter">R</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/10183.html" target="_blank">日本 <span class="en">Japan</span></a><i class="icon-label"></i></li>
					                    <li class="letter">S</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/11765.html" target="_blank">沙特阿拉伯 <span class="en">Saudi Arabia</span></a></li>
					                    <li><a href="/travel-scenic-spot/mafengwo/11058.html" target="_blank">斯里兰卡 <span class="en">Sri Lanka</span></a>
					                    </li>
					                    <li class="letter">T</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/24254.html" target="_blank">塔吉克斯坦 <span class="en">Tajikistan</span></a></li>
					                    <li><a href="/travel-scenic-spot/mafengwo/10083.html" target="_blank">泰国 <span class="en">Thailand</span></a><i class="icon-label"></i></li>
					                </ul>
					                <ul class="col">
					                    <li><a href="/travel-scenic-spot/mafengwo/35250.html" target="_blank">土库曼斯坦 <span class="en">Turkmenistan</span></a></li>
					                    <li class="letter">W</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/10753.html" target="_blank">文莱 <span class="en">Brunei Darussalam</span></a></li>
					                    <li><a href="/travel-scenic-spot/mafengwo/48878.html" target="_blank">乌兹别克斯坦 <span class="en">The Republic of Uzbekistan</span></a>
					                    </li>
					                    <li class="letter">X</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/10754.html" target="_blank">新加坡 <span class="en">Singapore</span></a><i class="icon-label"></i></li>
					                    <li><a href="/travel-scenic-spot/mafengwo/11217.html" target="_blank">叙利亚 <span class="en">The Syrian Arab Republic</span></a>
					                    </li>
					                    <li class="letter">Y</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/32160.html" target="_blank">亚美尼亚 <span class="en">The Republic of Armenia</span></a>
					                    </li>
					                    <li><a href="/travel-scenic-spot/mafengwo/21498.html" target="_blank">也门 <span class="en">The Republic of Yemen</span></a>
					                    </li>
					                    <li><a href="/travel-scenic-spot/mafengwo/28466.html" target="_blank">伊拉克 <span class="en">Iraq</span></a>
					                    </li>
					                    <li><a href="/travel-scenic-spot/mafengwo/11699.html" target="_blank">伊朗 <span class="en">Iran</span></a>
					                    </li>
					                    <li><a href="/travel-scenic-spot/mafengwo/10605.html" target="_blank">以色列 <span class="en">Israel</span></a>
					                    </li>
					                    <li><a href="/travel-scenic-spot/mafengwo/10182.html" target="_blank">印度 <span class="en">India</span></a><i class="icon-label"></i></li>
					                    <li><a href="/travel-scenic-spot/mafengwo/10181.html" target="_blank">印度尼西亚 <span class="en">Indonesia</span></a><i class="icon-label"></i></li>
					                    <li><a href="/travel-scenic-spot/mafengwo/11221.html" target="_blank">约旦 <span class="en">Jordan</span></a>
					                    </li>
					                    <li><a href="/travel-scenic-spot/mafengwo/10180.html" target="_blank">越南 <span class="en">Vietnam</span></a><i class="icon-label"></i></li>
					                    <li class="letter">Z</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/21536.html" target="_blank">中国 <span class="en">China</span></a> <img class="domestic" style="width: 34px;margin-left: 20px;cursor: pointer" src="http://css.mafengwo.net/images/mdd/place/flag.jpg">
					                    </li>
					                </ul>
					            </dd>
					        </dl>
					        <dl class="item">
					            <dt class="sub-title">北美洲</dt>
					            <dd class="clearfix">
					                <ul class="col">
					                    <li class="letter">A</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/57151.html" target="_blank">安提瓜和巴布达 <span class="en">Antigua and Barbuda</span></a>
					                    </li>
					                    <li class="letter">B</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/57152.html" target="_blank">巴巴多斯 <span class="en">Barbados</span></a>
					                    </li>
					                    <li><a href="/travel-scenic-spot/mafengwo/11943.html" target="_blank">巴哈马 <span class="en">Bahamas</span></a></li>
					                    <li><a href="/travel-scenic-spot/mafengwo/25229.html" target="_blank">巴拿马 <span class="en">Panama</span></a>
					                    </li>
					                    
					                                    
					                    
					                    <li class="letter">D</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/25756.html" target="_blank">多米尼加 <span class="en">Dominican Republic</span></a>
					                    </li>
					                    <li><a href="/travel-scenic-spot/mafengwo/57153.html" target="_blank">多米尼克 <span class="en">Dominica</span></a>
					                    </li>
					                    <li class="letter">G</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/24412.html" target="_blank">哥斯达黎加 <span class="en">Costa Rica</span></a></li>
					                </ul>
					                <ul class="col">
					                    <li><a href="/travel-scenic-spot/mafengwo/57154.html" target="_blank">格林纳达 <span class="en">Grenada</span></a></li>
					                    <li><a href="/travel-scenic-spot/mafengwo/11684.html" target="_blank">古巴 <span class="en">Cuba</span></a><i class="icon-label"></i></li>
					                    <li class="letter">H</li>
					                    
					                                    
					                    
					                    
					                                    
					                    
					                    <li class="letter">J</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/10177.html" target="_blank">加拿大 <span class="en">Canada</span></a><i class="icon-label"></i></li>
					                    <li class="letter">M</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/10062.html" target="_blank">美国 <span class="en">United States of America</span></a>
					                        
					                        <a class="texas" style="margin-left: 0" href="/travel-scenic-spot/mafengwo/31459.html" target="_blank">德克萨斯</a>
					                    </li>
					                    <li><a href="/travel-scenic-spot/mafengwo/11656.html" target="_blank">墨西哥 <span class="en">The United Mexican States</span></a><i class="icon-label"></i></li>
					                    <li class="letter">N</li>
					                    
					                                    
					                    
					                </ul>
					                <ul class="col">
					                    <li class="letter">S</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/57156.html" target="_blank">萨尔瓦多 <span class="en">El Salvador</span></a></li>
					                    
					                                    
					                    
					                    
					                                    
					                    
					                                    
					                    
					                    <li class="letter">T</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/57160.html" target="_blank">特立尼达和多巴哥 <span class="en">Trinidad and Tobago</span></a>
					                    </li>
					                    <li class="letter">W</li>
					                    
					                                    
					                    
					                    <li class="letter">Y</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/12030.html" target="_blank">牙买加 <span class="en">Jamaica</span></a></li>
					                </ul>
					            </dd>
					        </dl>
					        <dl class="item">
					            <dt class="sub-title">南美洲</dt>
					            <dd class="clearfix">
					                <ul class="col">
					                    <li class="letter">A</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/10159.html" target="_blank">阿根廷 <span class="en">Argentina</span></a><i class="icon-label"></i></li>
					                    <li class="letter">B</li>
					                    
					                                    
					                    <li><a href="/travel-scenic-spot/mafengwo/10160.html" target="_blank">巴西 <span class="en">Brazil</span></a><i class="icon-label"></i></li>
					                    <li><a href="/travel-scenic-spot/mafengwo/11005.html" target="_blank">秘鲁 <span class="en">The Republic of Peru</span></a>
					                    </li>
					                </ul>
					                <ul class="col">
					                    <li><a href="/travel-scenic-spot/mafengwo/13484.html" target="_blank">玻利维亚 <span class="en">Bolivia</span></a><i class="icon-label"></i></li>
					                    <li class="letter">E</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/18225.html" target="_blank">厄瓜多尔 <span class="en">Ecuador</span></a></li>
					                    <li class="letter">G</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/10955.html" target="_blank">哥伦比亚 <span class="en">Colombia</span></a><i class="icon-label"></i></li>
					                    <li><a href="/travel-scenic-spot/mafengwo/57187.html" target="_blank">圭亚那 <span class="en">Guyana</span></a>
					                    </li>
					                </ul>
					                <ul class="col">
					                    <li class="letter">S</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/36914.html" target="_blank">苏里南 <span class="en">The Republic of Suriname</span></a>
					                    </li>
					                    <li class="letter">W</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/15757.html" target="_blank">委内瑞拉 <span class="en">Bolivarian Republic of Venezuela</span></a>
					                    </li>
					                    <li><a href="/travel-scenic-spot/mafengwo/12104.html" target="_blank">乌拉圭 <span class="en">The Oriental Republic of Uruguay</span></a>
					                    </li>
					                    <li class="letter">Z</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/10992.html" target="_blank">智利 <span class="en">Republic of Chile</span></a><i class="icon-label"></i></li>
					                </ul>
					            </dd>
					        </dl>
					        <dl class="item">
					            <dt class="sub-title">欧洲</dt>
					            <dd class="clearfix">
					                <ul class="col">
					                    <li class="letter">A</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/24844.html" target="_blank">阿尔巴尼亚 <span class="en">The Republic of Albania</span></a>
					                    </li>
					                    <li><a href="/travel-scenic-spot/mafengwo/11131.html" target="_blank">爱尔兰 <span class="en">Ireland</span></a><i class="icon-label"></i></li>
					                    <li><a href="/travel-scenic-spot/mafengwo/11631.html" target="_blank">爱沙尼亚 <span class="en">The Republic of Estonia</span></a>
					                    </li>
					                    <li><a href="/travel-scenic-spot/mafengwo/19744.html" target="_blank">安道尔 <span class="en">Andorra</span></a></li>
					                    <li><a href="/travel-scenic-spot/mafengwo/10175.html" target="_blank">奥地利 <span class="en">Austria</span></a><i class="icon-label"></i></li>
					                    <li class="letter">B</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/28072.html" target="_blank">白俄罗斯 <span class="en">Belarus</span></a></li>
					                    <li><a href="/travel-scenic-spot/mafengwo/38605.html" target="_blank">保加利亚 <span class="en">The Republic of Bulgaria</span></a>
					                    </li>
					                    <li><a href="/travel-scenic-spot/mafengwo/11105.html" target="_blank">比利时 <span class="en">Belgium</span></a><i class="icon-label"></i></li>
					                    <li><a href="/travel-scenic-spot/mafengwo/10549.html" target="_blank">冰岛 <span class="en">Iceland</span></a><i class="icon-label"></i></li>
					                    <li><a href="/travel-scenic-spot/mafengwo/11570.html" target="_blank">波黑 <span class="en">Bosnia and Herzegovina</span></a>
					                    </li>
					                    <li><a href="/travel-scenic-spot/mafengwo/11147.html" target="_blank">波兰 <span class="en">Poland</span></a><i class="icon-label"></i></li>
					                    <li class="letter">D</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/11157.html" target="_blank">丹麦 <span class="en">Denmark</span></a><i class="icon-label"></i></li>
					                    <li><a href="/travel-scenic-spot/mafengwo/10176.html" target="_blank">德国 <span class="en">Germany</span></a><i class="icon-label"></i></li>
					                    <li class="letter">E</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/10300.html" target="_blank">俄罗斯 <span class="en">Russia</span></a><i class="icon-label"></i></li>
					                    <li class="letter">F</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/10171.html" target="_blank">法国 <span class="en">France</span></a><i class="icon-label"></i></li>
					                    
					                                    
					                    
					                </ul>
					                <ul class="col">
					                    <li><a href="/travel-scenic-spot/mafengwo/10448.html" target="_blank">芬兰 <span class="en">Finland</span></a><i class="icon-label"></i></li>
					                    <li class="letter">H</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/11099.html" target="_blank">荷兰 <span class="en">Holland</span></a><i class="icon-label"></i></li>
					                    <li><a href="/travel-scenic-spot/mafengwo/57192.html" target="_blank">黑山 <span class="en">Montenegro</span></a>
					                    </li>
					                    <li class="letter">J</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/10174.html" target="_blank">捷克 <span class="en">Czech</span></a><i class="icon-label"></i></li>
					                    <li class="letter">K</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/57193.html" target="_blank">科索沃 <span class="en">The Republic of Kosovo</span></a>
					                    </li>
					                    <li><a href="/travel-scenic-spot/mafengwo/11853.html" target="_blank">克罗地亚 <span class="en">Croatia</span></a></li>
					                    <li class="letter">L</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/18897.html" target="_blank">拉脱维亚 <span class="en">Latvia</span></a></li>
					                    <li><a href="/travel-scenic-spot/mafengwo/18942.html" target="_blank">立陶宛 <span class="en">Lithuania</span></a>
					                    </li>
					                    <li><a href="/travel-scenic-spot/mafengwo/11097.html" target="_blank">列支敦士登 <span class="en">Liechtenstein</span></a></li>
					                    <li><a href="/travel-scenic-spot/mafengwo/11098.html" target="_blank">卢森堡 <span class="en">The Grand Duchy of Luxembourg</span></a>
					                    </li>
					                    <li><a href="/travel-scenic-spot/mafengwo/30071.html" target="_blank">罗马尼亚 <span class="en">Romania</span></a></li>
					                    <li class="letter">M</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/16501.html" target="_blank">马耳他 <span class="en">Malta</span></a>
					                    </li>
					                    <li><a href="/travel-scenic-spot/mafengwo/38921.html" target="_blank">马其顿 <span class="en">Macedonia</span></a>
					                    </li>
					                    <li><a href="/travel-scenic-spot/mafengwo/24945.html" target="_blank">摩尔多瓦 <span class="en">The Republicof Moldova</span></a>
					                    </li>
					                    <li><a href="/travel-scenic-spot/mafengwo/11140.html" target="_blank">摩纳哥 <span class="en">The Principality of Monaco</span></a>
					                    </li>
					                    <li class="letter">N</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/11160.html" target="_blank">挪威 <span class="en">Norway</span></a><i class="icon-label"></i></li>
					                </ul>
					                <ul class="col">
					                    <li><a href="/travel-scenic-spot/mafengwo/10172.html" target="_blank">葡萄牙 <span class="en">Portugal</span></a><i class="icon-label"></i></li>
					                    <li class="letter">R</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/10214.html" target="_blank">瑞典 <span class="en">The Kingdom of Sweden</span></a><i class="icon-label"></i></li>
					                    <li><a href="/travel-scenic-spot/mafengwo/10169.html" target="_blank">瑞士 <span class="en">Switzerland</span></a><i class="icon-label"></i></li>
					                    <li class="letter">S</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/26909.html" target="_blank">塞尔维亚 <span class="en">The Republic of Serbia</span></a>
					                    </li>
					                    <li><a href="/travel-scenic-spot/mafengwo/16648.html" target="_blank">塞浦路斯 <span class="en">Cyprus</span></a></li>
					                    <li><a href="/travel-scenic-spot/mafengwo/15077.html" target="_blank">圣马力诺 <span class="en">The Republic of San Marino</span></a>
					                    </li>
					                    <li><a href="/travel-scenic-spot/mafengwo/11153.html" target="_blank">斯洛伐克 <span class="en">Slovakia</span></a>
					                    </li>
					                    <li><a href="/travel-scenic-spot/mafengwo/11852.html" target="_blank">斯洛文尼亚 <span class="en">The Republic of Slovenia</span></a>
					                    </li>
					                    <li class="letter">T</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/10053.html" target="_blank">土耳其 <span class="en">Turkey</span></a><i class="icon-label"></i></li>
					                    <li class="letter">W</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/15693.html" target="_blank">乌克兰 <span class="en">Ukraine</span></a></li>
					                    <li class="letter">X</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/10173.html" target="_blank">西班牙 <span class="en">Spain</span></a><i class="icon-label"></i></li>
					                    <li><a href="/travel-scenic-spot/mafengwo/10168.html" target="_blank">希腊 <span class="en">Greece</span></a><i class="icon-label"></i></li>
					                    <li><a href="/travel-scenic-spot/mafengwo/11094.html" target="_blank">匈牙利 <span class="en">Hungary</span></a><i class="icon-label"></i></li>
					                    <li class="letter">Y</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/10051.html" target="_blank">意大利 <span class="en">Italy</span></a><i class="icon-label"></i></li>
					                    <li><a href="/travel-scenic-spot/mafengwo/10122.html" target="_blank">英国 <span class="en">United Kingdom</span></a><i class="icon-label"></i></li>
					                </ul>
					            </dd>
					        </dl>
					        <dl class="item">
					            <dt class="sub-title">非洲</dt>
					            <dd class="clearfix">
					                <ul class="col">
					                    <li class="letter">A</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/12032.html" target="_blank">阿尔及利亚 <span class="en">People's Democratic Republic of Algeria</span></a>
					                    </li>
					                    <li><a href="/travel-scenic-spot/mafengwo/10178.html" target="_blank">埃及 <span class="en">Egypt</span></a>
					                    </li>
					                    <li><a href="/travel-scenic-spot/mafengwo/12858.html" target="_blank">埃塞俄比亚 <span class="en">Ethiopia</span></a>
					                    </li>
					                    <li><a href="/travel-scenic-spot/mafengwo/22047.html" target="_blank">安哥拉 <span class="en">The Republic of Angola</span></a>
					                    </li>
					                    <li class="letter">B</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/57170.html" target="_blank">贝宁 <span class="en">Benin</span></a>
					                    </li>
					                    <li><a href="/travel-scenic-spot/mafengwo/15534.html" target="_blank">博茨瓦纳 <span class="en">Botswana</span></a>
					                    </li>
					                    <li><a href="/travel-scenic-spot/mafengwo/56531.html" target="_blank">布基纳法索 <span class="en">Burkina Faso</span></a></li>
					                    <li><a href="/travel-scenic-spot/mafengwo/57171.html" target="_blank">布隆迪 <span class="en">Burundi</span></a></li>
					                    <li class="letter">C</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/57172.html" target="_blank">赤道几内亚 <span class="en">Equatorial Guinea</span></a>
					                    </li>
					                    <li class="letter">D</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/17958.html" target="_blank">多哥 <span class="en">Togo</span></a>
					                    </li>
					                    <li class="letter">E</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/19760.html" target="_blank">厄立特里亚 <span class="en">The State of Eritrea</span></a>
					                    </li>
					                    <li class="letter">F</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/57173.html" target="_blank">佛得角 <span class="en">Cape Verde</span></a>
					                    </li>
					                    <li class="letter">G</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/57174.html" target="_blank">冈比亚 <span class="en">Gambia</span></a>
					                    </li>
					                    <li><a href="/travel-scenic-spot/mafengwo/12031.html" target="_blank">刚果 <span class="en">The Republic of Congo</span></a>
					                    </li>
					                    <li><a href="/travel-scenic-spot/mafengwo/57175.html" target="_blank">刚果民主共和国 <span class="en">Democratic Republic of the Congo</span></a>
					                    </li>
					                    <li class="letter">J</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/57176.html" target="_blank">吉布提 <span class="en">Djibouti</span></a></li>
					                    <li><a href="/travel-scenic-spot/mafengwo/32815.html" target="_blank">几内亚 <span class="en">The Republic of Guinea</span></a>
					                    </li>
					                    <li><a href="/travel-scenic-spot/mafengwo/57177.html" target="_blank">几内亚比绍 <span class="en">Guinea-Bissau</span></a></li>
					                    <li><a href="/travel-scenic-spot/mafengwo/11706.html" target="_blank">加纳 <span class="en">Ghana</span></a>
					                    </li>
					                </ul>
					                <ul class="col">
					                    <li><a href="/travel-scenic-spot/mafengwo/57178.html" target="_blank">加蓬 <span class="en">Gabon</span></a>
					                    </li>
					                    <li><a href="/travel-scenic-spot/mafengwo/11752.html" target="_blank">津巴布韦 <span class="en">Zimbabwe</span></a>
					                    </li>
					                    <li class="letter">K</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/27636.html" target="_blank">喀麦隆 <span class="en">Cameroon</span></a></li>
					                    <li><a href="/travel-scenic-spot/mafengwo/57179.html" target="_blank">科摩罗 <span class="en">Comoros</span></a></li>
					                    <li><a href="/travel-scenic-spot/mafengwo/13122.html" target="_blank">科特迪瓦 <span class="en">Ivory Coast</span></a></li>
					                    <li><a href="/travel-scenic-spot/mafengwo/10029.html" target="_blank">肯尼亚 <span class="en">Kenya</span></a><i class="icon-label"></i></li>
					                    <li class="letter">L</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/57180.html" target="_blank">莱索托 <span class="en">Lesotho</span></a></li>
					                    <li><a href="/travel-scenic-spot/mafengwo/57181.html" target="_blank">利比里亚 <span class="en">Liberia</span></a></li>
					                    <li><a href="/travel-scenic-spot/mafengwo/16746.html" target="_blank">利比亚 <span class="en">State of Libya</span></a></li>
					                    <li><a href="/travel-scenic-spot/mafengwo/22478.html" target="_blank">留尼旺 <span class="en">Réunion</span></a></li>
					                    <li><a href="/travel-scenic-spot/mafengwo/57182.html" target="_blank">卢旺达 <span class="en">Rwanda</span></a>
					                    </li>
					                    <li class="letter">M</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/17439.html" target="_blank">马达加斯加 <span class="en">Madagascar</span></a><i class="icon-label"></i></li>
					                    <li><a href="/travel-scenic-spot/mafengwo/29615.html" target="_blank">马拉维 <span class="en">The Republic of Malawi</span></a>
					                    </li>
					                    <li><a href="/travel-scenic-spot/mafengwo/12036.html" target="_blank">马里 <span class="en">The Republic of Mali</span></a>
					                    </li>
					                    <li><a href="/travel-scenic-spot/mafengwo/11761.html" target="_blank">毛里求斯 <span class="en">Mauritius</span></a><i class="icon-label"></i></li>
					                    <li><a href="/travel-scenic-spot/mafengwo/18450.html" target="_blank">毛里塔尼亚 <span class="en">The Islamic Republic of Mauritania</span></a>
					                    </li>
					                    <li><a href="/travel-scenic-spot/mafengwo/12033.html" target="_blank">摩洛哥 <span class="en">Morocco</span></a><i class="icon-label"></i></li>
					                    <li><a href="/travel-scenic-spot/mafengwo/11753.html" target="_blank">莫桑比克 <span class="en">Mozambique</span></a></li>
					                    <li class="letter">N</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/10762.html" target="_blank">纳米比亚 <span class="en">Namibia</span></a></li>
					                </ul>
					                <ul class="col">
					                    <li><a href="/travel-scenic-spot/mafengwo/10455.html" target="_blank">南非 <span class="en">South Africa</span></a></li>
					                    <li><a href="/travel-scenic-spot/mafengwo/19955.html" target="_blank">南苏丹 <span class="en">Republic of South Sudan</span></a>
					                    </li>
					                    <li><a href="/travel-scenic-spot/mafengwo/12027.html" target="_blank">尼日尔 <span class="en">Niger</span></a>
					                    </li>
					                    <li><a href="/travel-scenic-spot/mafengwo/21111.html" target="_blank">尼日利亚 <span class="en">Federal Republic of Nigeria</span></a>
					                    </li>
					                    <li class="letter">S</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/57183.html" target="_blank">塞拉利昂 <span class="en">Sierra leone</span></a></li>
					                    <li><a href="/travel-scenic-spot/mafengwo/12026.html" target="_blank">塞内加尔 <span class="en">Senegal</span></a></li>
					                    <li><a href="/travel-scenic-spot/mafengwo/16827.html" target="_blank">塞舌尔 <span class="en">Seychelles</span></a><i class="icon-label"></i></li>
					                    <li><a href="/travel-scenic-spot/mafengwo/32925.html" target="_blank">圣多美和普林西比 <span class="en">Sao Tome and Principe</span></a>
					                    </li>
					                    
					                                    
					                    
					                    <li><a href="/travel-scenic-spot/mafengwo/15123.html" target="_blank">苏丹 <span class="en">Sudan</span></a>
					                    </li>
					                    <li><a href="/travel-scenic-spot/mafengwo/57185.html" target="_blank">索马里 <span class="en">Somalia</span></a></li>
					                    <li class="letter">T</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/10818.html" target="_blank">坦桑尼亚 <span class="en">The United Republic of Tanzania</span></a>
					                    </li>
					                    <li><a href="/travel-scenic-spot/mafengwo/11604.html" target="_blank">突尼斯 <span class="en">Tunisia</span></a></li>
					                    <li class="letter">W</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/12034.html" target="_blank">乌干达 <span class="en">Uganda</span></a>
					                    </li>
					                    <li class="letter">X</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/57186.html" target="_blank">西撒哈拉 <span class="en">Western Sahara</span></a></li>
					                    <li class="letter">Z</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/11751.html" target="_blank">赞比亚 <span class="en">Zambia</span></a>
					                    </li>
					                    <li><a href="/travel-scenic-spot/mafengwo/28359.html" target="_blank">乍得 <span class="en">Chad</span></a>
					                    </li>
					                    <li><a href="/travel-scenic-spot/mafengwo/10689.html" target="_blank">中非 <span class="en">The Central African Republic</span></a>
					                    </li>
					                </ul>
					            </dd>
					        </dl>
					        <dl class="item">
					            <dt class="sub-title">大洋洲</dt>
					            <dd class="clearfix">
					                <ul class="col">
					                    <li class="letter">A</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/10202.html" target="_blank">澳大利亚 <span class="en">Australia</span></a><i class="icon-label"></i></li>
					                    <li class="letter">B</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/12647.html" target="_blank">巴布亚新几内亚 <span class="en">Papua New Guinea</span></a>
					                    </li>
					                    <li class="letter">D</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/10344.html" target="_blank">大溪地 <span class="en">Tahiti</span></a><i class="icon-label"></i></li>
					                    <li class="letter">F</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/11044.html" target="_blank">斐济 <span class="en">Fiji</span></a><i class="icon-label"></i></li>
					                    
					                    <!-- <li class="letter">J</li> -->
					                    
					                                    
					                    
					                </ul>
					                <ul class="col">
										<li class="letter">G</li>
										<li><a href="/travel-scenic-spot/mafengwo/19016.html" target="_blank">关岛 <span class="en">Guam</span></a>
										</li>
					                    <li class="letter">K</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/57167.html" target="_blank">库克群岛 <span class="en">Cook Islands</span></a></li>
					                    <li class="letter">M</li>
					                    
					                                    
					                    
					                    <li><a href="/travel-scenic-spot/mafengwo/57163.html" target="_blank">密克罗尼西亚联邦 <span class="en">Micronesia</span></a></li>
					                    <!--li class="letter">N</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/57166.html" target="_blank">瑙鲁 <span class="en">Nauru</span></a>
					                    </li>
					                    <li><a href="/travel-scenic-spot/mafengwo/57168.html" target="_blank">纽埃 <span class="en">Niue</span></a>
					                    </li-->
					                    <!-- <li class="letter">P</li> -->
					                    
					                                    
					                </ul>
					                <ul class="col">
					                    <li class="letter">S</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/54998.html" target="_blank">萨摩亚 <span class="en">Samoa</span></a>
					                    </li>
					                    
					                                    
					                    <li class="letter">T</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/17753.html" target="_blank">汤加 <span class="en">The Kingdom of Tonga</span></a>
					                    </li>
					                    
					                                    
					                    
					                    <li class="letter">W</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/52088.html" target="_blank">瓦努阿图 <span class="en">Republic of Vanuatu</span></a>
					                    </li>
					                    <li class="letter">X</li>
					                    <li><a href="/travel-scenic-spot/mafengwo/10544.html" target="_blank">新西兰 <span class="en">New Zealand</span></a><i class="icon-label"></i></li>
					                </ul>
					            </dd>
					        </dl>
					    </div>
					</div>
				</div>
			</div>
			
			
		</div>
		<div>
			<my-footer></my-footer>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				place:'',
				place_type:'国内',
				place_month:1,
				place_theme:'0',
				month_content:[{
					香港:"/img/place_list/y-0-0.jpeg",
					三亚:"/img/place_list/y-0-1.jpeg",
					清迈:"/img/place_list/y-0-2.jpeg",
					广州:"/img/place_list/y-0-3.jpeg",
					新加坡:"/img/place_list/y-0-4.jpeg",
					哈尔滨:"/img/place_list/y-0-5.jpeg",
					更多:"/img/place_list/y-0-6.jpeg",
				},{
					普吉岛:"/img/place_list/y-1-0.png",
					南京:"/img/place_list/y-1-1.jpeg",
					昆明:"/img/place_list/y-1-2.jpeg",
					芽庄:"/img/place_list/y-1-3.jpeg",
					新西兰:"/img/place_list/y-1-4.jpeg",
					长滩岛:"/img/place_list/y-1-5.jpeg",
					更多:"/img/place_list/y-1-6.jpeg",
				},{
					日本:"/img/place_list/y-2-0.jpeg",
					西安:"/img/place_list/y-2-1.jpeg",
					重庆:"/img/place_list/y-2-2.jpeg",
					大阪:"/img/place_list/y-2-3.jpeg",
					杭州:"/img/place_list/y-2-4.jpeg",
					台北:"/img/place_list/y-2-5.jpeg",
					更多:"/img/place_list/y-2-6.png",
				},{
					云南:"/img/place_list/y-3-0.jpeg",
					曼谷:"/img/place_list/y-3-1.jpeg",
					大理:"/img/place_list/y-3-2.png",
					东京:"/img/place_list/y-3-3.jpeg",
					澳门:"/img/place_list/y-3-4.jpeg",
					新疆:"/img/place_list/y-3-5.png",
					更多:"/img/place_list/y-3-6.png",
				},{
					厦门:"/img/place_list/y-4-0.jpeg",
					美国:"/img/place_list/y-4-1.jpeg",
					青岛:"/img/place_list/y-4-2.jpeg",
					张家界:"/img/place_list/y-4-3.png",
					拉萨:"/img/place_list/y-4-4.png",
					九寨沟:"/img/place_list/y-4-5.png",
					更多:"/img/place_list/y-4-6.jpeg",
				},{
					台湾:"/img/place_list/y-5-0.jpeg",
					青海:"/img/place_list/y-5-1.jpeg",
					黑龙江:"/img/place_list/y-5-2.jpeg",
					吉隆坡:"/img/place_list/y-5-3.png",
					北海道:"/img/place_list/y-5-4.jpeg",
					青海湖:"/img/place_list/y-5-5.jpeg",
					更多:"/img/place_list/y-5-6.jpeg",
				},{
					西藏:"/img/place_list/y-6-0.png",
					内蒙古:"/img/place_list/y-6-1.jpeg",
					大连:"/img/place_list/y-6-2.jpeg",
					意大利:"/img/place_list/y-6-3.jpeg",
					亚庇:"/img/place_list/y-6-4.jpeg",
					凤凰古城:"/img/place_list/y-6-5.jpeg",
					更多:"/img/place_list/y-6-6.jpeg",
				},{
					香港:"/img/place_list/y-0-0.jpeg",
					三亚:"/img/place_list/y-0-1.jpeg",
					清迈:"/img/place_list/y-0-2.jpeg",
					广州:"/img/place_list/y-0-3.jpeg",
					新加坡:"/img/place_list/y-0-4.jpeg",
					哈尔滨:"/img/place_list/y-0-5.jpeg",
					更多:"/img/place_list/y-0-6.jpeg",
				},{
					普吉岛:"/img/place_list/y-1-0.png",
					南京:"/img/place_list/y-1-1.jpeg",
					昆明:"/img/place_list/y-1-2.jpeg",
					芽庄:"/img/place_list/y-1-3.jpeg",
					新西兰:"/img/place_list/y-1-4.jpeg",
					长滩岛:"/img/place_list/y-1-5.jpeg",
					更多:"/img/place_list/y-1-6.jpeg",
				},{
					日本:"/img/place_list/y-2-0.jpeg",
					西安:"/img/place_list/y-2-1.jpeg",
					重庆:"/img/place_list/y-2-2.jpeg",
					大阪:"/img/place_list/y-2-3.jpeg",
					杭州:"/img/place_list/y-2-4.jpeg",
					台北:"/img/place_list/y-2-5.jpeg",
					更多:"/img/place_list/y-2-6.png",
				},{
					云南:"/img/place_list/y-3-0.jpeg",
					曼谷:"/img/place_list/y-3-1.jpeg",
					大理:"/img/place_list/y-3-2.png",
					东京:"/img/place_list/y-3-3.jpeg",
					澳门:"/img/place_list/y-3-4.jpeg",
					新疆:"/img/place_list/y-3-5.png",
					更多:"/img/place_list/y-3-6.png",
				},{
					厦门:"/img/place_list/y-4-0.jpeg",
					美国:"/img/place_list/y-4-1.jpeg",
					青岛:"/img/place_list/y-4-2.jpeg",
					张家界:"/img/place_list/y-4-3.png",
					拉萨:"/img/place_list/y-4-4.png",
					九寨沟:"/img/place_list/y-4-5.png",
					更多:"/img/place_list/y-4-6.jpeg",
				}],
				theme_content:[{
					免签:"/img/place_list/T-0-0.jpeg",
					人文历史:"/img/place_list/T-0-1.jpeg",
					拍片圣地:"/img/place_list/T-0-2.jpeg",
					自然风景:"/img/place_list/T-0-3.jpeg",
					小众:"/img/place_list/T-0-4.jpeg",
					登山:"/img/place_list/T-0-5.jpeg",
					潜水:"/img/place_list/T-0-6.jpeg",
					古镇:"/img/place_list/T-0-7.jpeg",
					动物:"/img/place_list/T-0-8.jpeg",
					逃离雾霾:"/img/place_list/T-0-9.jpeg",
					购物:"/img/place_list/T-0-10.jpeg",
					美食:"/img/place_list/T-0-11.jpeg",
				},{
					草原:"/img/place_list/T-1-0.jpeg",
					星空:"/img/place_list/T-1-1.jpeg",
					赏花:"/img/place_list/T-1-2.jpeg",
					雪景:"/img/place_list/T-1-3.jpeg",
					海岛:"/img/place_list/T-1-4.jpeg",
					极限运动:"/img/place_list/T-1-5.jpeg",
					滑雪:"/img/place_list/T-1-6.jpeg",
					温泉:"/img/place_list/T-1-7.jpeg",
					当地节庆:"/img/place_list/T-1-8.jpeg",
					温暖地点:"/img/place_list/T-1-9.jpeg",
					避暑:"/img/place_list/T-1-10.jpeg",
					极光:"/img/place_list/T-1-11.jpeg",
				},{
					徒步:"/img/place_list/T-2-0.jpeg",
					自驾:"/img/place_list/T-2-1.jpeg",
					游轮:"/img/place_list/T-2-2.jpeg",
					骑行:"/img/place_list/T-2-3.jpeg",
					蜜月:"/img/place_list/T-2-4.jpeg",
					亲子游:"/img/place_list/T-2-5.jpeg",
					带父母:"/img/place_list/T-2-6.jpeg",
					一个人:"/img/place_list/T-2-7.jpeg",
					好朋友:"/img/place_list/T-2-8.jpeg",
				},{
					元旦:"/img/place_list/T-3-0.jpeg",
					春节:"/img/place_list/T-3-1.jpeg",
					清明:"/img/place_list/T-3-2.jpeg",
					五一:"/img/place_list/T-3-3.jpeg",
					端午:"/img/place_list/T-3-4.jpeg",
					中秋:"/img/place_list/T-3-5.jpeg",
					国庆:"/img/place_list/T-3-6.jpeg",
					寒假:"/img/place_list/T-3-7.jpeg",
					暑假:"/img/place_list/T-3-8.jpeg",
				}]
			}
		},
		methods:{
			selectType(e){
				if(e.target.dataset.type!=undefined){
					this.place_type=e.target.dataset.type
				}
			},
			selectMonth(e){
				if(e.target.dataset.month!=undefined){
					this.place_month=e.target.dataset.month
				}
			},
			selectTheme(e){
				if(e.target.dataset.theme!=undefined){
					this.place_theme=e.target.dataset.theme
				}
			},
			goPlace(place){
				this.axios.get('/lvyou//place_list',{
					params:{
						place:place
					}
				}).then(result=>{
					let place=result.data[0].place
					this.$router.push('/mdd_details/'+place)
				})
			}
		},
		mounted(){
			document.title="目的地旅游攻略 - 马蜂窝"
		}
		
	}
</script>

<style scoped>
	._my_header{
		width: 100%;
		position: absolute;
		z-index: 20;
		background: #fff;
	}
	/* banner */
	.banner{
		position: relative;
		width: 100%;height: 40vw;
		min-width: 1300px;
	}
	.banner img{
		width: 100%;height: 100%;
		object-fit: cover;
	}
	.show-info{
		position: absolute;
		top: 0;
		bottom: 0;
		right: 50px;
		margin: auto;
		z-index: 1;
		padding-right: 30px;
		border-right: 7px solid #fff;
		width: 587px;
		height: 285px;
		text-shadow: 0 2px 3px rgba(0,0,0,.5);
		color: #fff;
		font-size: 16px;
		line-height: 1.8;
		white-space: normal;
		text-align: left;
		/* margin-right: 100px; */
	}
	.show-info h2{
		font-weight: normal;
		line-height: 68px;
		font-size:50px;
	}
	.show-info h2:hover{
		color: #FF9D00;
	}
	.show-info p{
		top: 130px;
		right: 140px;
		font-size: 18px;
	}
	.show-ft{
		position: absolute;
		display: flex;
		align-items: center;
		right: 40px;
		bottom: 20px;
		font-size: 12px;
	}
	.show-ft>i{
		float: left;
		margin-left: 15px;
		display: inline-block;
		width: 25px;
		height: 25px;
		background: url(/img/sprites/place-sprites3.png) no-repeat 0 0;
		overflow: hidden;
	}
	.show-ft>a:nth-child(2){
		display: inline-block;
		width: 25px;
		height: 25px;
		margin-left: 15px;
		color: #fff;
		line-height: 32px;
		text-align: center;
		background: url(/img/sprites/place-sprites3.png) no-repeat -60px 0;
		overflow: hidden;
	}
	.show-ft>a:nth-child(3){
		display: inline-block;
		width: 78px;
		height: 23px;
		margin-left: 15px;
		border: 1px solid #fff;
		border-radius: 3px;
		color: #fff;
		text-align: center;
		line-height: 23px;
	}
	.show-ft>a:nth-child(3) i{
		display: inline-block;
		margin-right: 5px;
		width: 13px;
		height: 14px;
		background: url(/img/sprites/place-sprites3.png) no-repeat 0 -30px;
		vertical-align: middle;
	}
	.input_box{
		position: absolute;
		z-index: 2;
		left: 50%;
		top: 50%;
		margin: -71px 0 0 -500px;
		width: 400px;
		padding: 15px;
		background-color: #000;
		background-color: rgba(0,0,0,.4);
		border-radius: 4px;
	}
	.input_box div::after{
		content: "";
		display: block;
		clear: both;
	}
	.input_box p{
		font-size: 20px;
		color: #fff;
		margin-bottom: 15px;
		font-weight: normal;
		line-height: 1;
		font-family: "Microsoft Yahei";
	}
	.input_box input{
		float: left;
		width: 308px;
		height: 46px;
		margin: 0 6px 0 0;
		padding: 0 20px;
		background-color: #fff;
		border: 0 none;
		line-height: 46px;
		font-size: 18px;
		color: #111;
		border-radius: 4px;
	}
	.input_box a{
		float: left;
		width: 45px;
		height: 46px;
		background-color: #ff9d00;
		border-radius: 4px;
		text-align: center;
	}
	.input_box a>i{
		display: inline-block;
		margin-top: 11px;
		width: 24px;
		height: 24px;
		background: url(/img/sprites/header-sprites9.png) no-repeat 0 -110px;
		overflow: hidden;
		vertical-align: top;
	}
	.input_box ul{
		clear: both;
		font-size: 14px;
		margin-top: 15px;
		line-height: 16px;
	}
	.input_box li{
		display: inline-block;
		margin-right: 10px;
		color: #fff;
	}
	/* 主题分类 */
	.theme>.box{
		margin-right: -15px;
	}
	.theme>.box>div{
		float: left;
		display: inline;
		margin: 10px 15px 10px 0;
		width: 238px;
		height: 220px;
		position: relative;
		background-color: #f2f2f2;
		font-size: 20px;
	}
	/* 季节分类 */
	.season .box>div{
		float: left;
		display: inline;
		margin: 10px 15px 10px 0;
		width: 238px;
		height: 220px;
		position: relative;
		background-color: #f2f2f2;
		font-size: 20px;
	}
	.season .box{
		margin-right: -15px;
	}
	
	.season .box::after{
		content: "";
		display: block;
		clear: both;
	}
	
	.season .box>div.bg{
		width: 323px;
	}
	.box>div>p{
		color: #fff;
		position: absolute;
		left: 0;
		bottom: 0;
		right: 0;
		padding: 12px 20px 0;
		height: 57px;
		line-height: 38px;
		font-weight: normal;
	}
	.box>div>p.more{
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		width: 100%;height: 100%;
		padding: 0;
		text-align: center;
		background-color: rgba(0,0,0,.5);
		line-height: 220px;
	}
	.box>div>p.more>i{
		display: inline-block;
		margin-left: 5px;
		width: 12px;
		height: 12px;
		border-bottom: 2px solid #fff;
		border-right: 2px solid #fff;
		-webkit-transform: rotate(-45deg);
		transform: rotate(-45deg);
		vertical-align: 1px;
	}
	.box div img{
		width: 100%;height: 100%;
		object-fit: cover;
		cursor: pointer;
	}
	.content >div> div{
		position: relative;
		width: 62.5rem;
		margin: 0 auto;
	}
	/* .season .box>div>img{
		width: 100%;height: 100%;
		object-fit: cover;
	} */
	
	.content >div{
		padding: 50px 0;
		border-bottom: 1px solid #e4e4e4;
	}
	.content >div:nth-child( even){
		background-color: #fafafa !important;
	}
	.content >div::after{
		content: "";
		display: block;
		clear: both;
	}
	.content > div div:not(.all)>ul{
		margin:0 auto;
		text-align: center;
		font-size: 18px;
		color: #eee;
		line-height: 22px;
	}
	.content > div div:not(.all)>ul>li{
		position: relative;
		color: #333;
		display: inline-block;
		margin: 0 25px;
		margin-bottom: 25px;
		vertical-align: top;
		cursor: pointer;
	}
	.content>div div:not(.all)>ul>li.active{
		padding-bottom: 12px;
		color: #ff9d00;
		border-bottom: 3px solid #ff9d00;
	}
	.content > div div:not(.all)>ul>li:not(:last-child):after{
		content: "|";
		position: absolute;
		top: -1px;
		right: -25px;
		font-size: 18px;
		color: #eee;
		
	}
	.title{
		margin-bottom: 30px;
		font-size: 26px;
		font-weight: normal;
		color: #333;
		line-height: 26px;
		text-align: center;
	}
	.hot_body dl{
		
	}
	.hot_body dl{
		float: left;
		width: 470px;height: 70px;
		padding: 14px 0 20px 100px;
		margin-left: 30px;
		border-bottom: 1px dashed #eee;
	}
	.hot_body:after{
		content: "";
		display: block;
		clear: both;
	}
	.hot_body dt{
		float: left;
		font-size: 16px;
		color: #333;
		margin-left: -100px;
		font-size: 16px;
		text-decoration: underline;
	}
	.hot_body dd{
		float: left;
		margin-right: 10px;
		color: #666;
		cursor: pointer;
	}
	.row-list{
		box-sizing: content-box;
	}
	.row-list .hd{
		margin-bottom: 25px;
		font-size: 32px;
		line-height: 30px;
		font-weight: normal;
	}
	.row-list .hd span{
		font-size: 14px;
		color: #a8a8a8;
	}
	.row-list .btn-add{
		display: inline-block;
		margin-left: 20px;
		font-size: 14px;
		color: #ff9d00;
	}
	.row-list .btn-add i{
		float: left;
		margin-right: 5px;
		font-weight: bold;
		font-style: normal;
		font-size: 18px;
		vertical-align: middle;
	}
	.row-list dl{
		margin-bottom: 50px;
	}
	.row-list dt{
		margin-bottom: 15px;
		font-size: 20px;
		line-height: 22px;
	}
	.row-list dd{
		margin-left: -22px;
	}
	.row-list dd::after{
		content: "";
		display: block;
		clear: both;
	}
	.row-list dd a{
		font-size: 14px;
		color: #666
	}
	.row-list ul{
		float: left;
		width: 312px;
		padding-left: 30px;
		display: inline;
		margin-left: 22px;
		line-height: 30px;
		font-size: 14px;
	}
	.row-list .letter{
		float: left;
		margin-left: -30px;
		width: 30px;
		overflow: hidden;
		padding: 0;
		display: inline;
		font-size: 20px;
		font-family: Centaur,Times New Roman;
		text-transform: uppercase;
	}
	.row-list .icon-label {
	    position: absolute;
	    margin: 8px 0 0 5px;
	    *margin-top: 2px;
	    width: 32px;
	    height: 14px;
	    background: url(/img/sprites/plaInd-sprite3.png) no-repeat -555px 0;
	    overflow: hidden;
	    font-size: 14px;
	    color: #fff;
	    font-style: italic;
	    font-weight: bold;
	    line-height: 100px;
	    overflow: hidden;
	    vertical-align: top;
	}
</style>
