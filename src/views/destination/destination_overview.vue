<template>
	<div class="destination_overview do">
		<div>
			<my-header></my-header>
		</div>
		<!-- 以上是页头 -->
		<!-- 引入目的地面包屑导航栏组件 -->
		<div class="_mdd_crumbNav" ref="mdd_crumbNav">
			<mdd-crumbNav ref="mddCrumbNav"></mdd-crumbNav>
		</div>
		<!-- 引入目的地导航栏组件 -->
		<div class="_destination_nav" ref="destinationNav">
			<destination-nav></destination-nav>
		</div>
		<div>
			<div class="container">
				<ul class="side-nav" @click="selectBaike($event)">
					<li v-for="(t,i) of baike" :key="i" ><router-link to="" :class="{active:index==i}" :data-num="i">{{t.title}}</router-link></li>
					
				</ul>
				<!-- 正文显示区域 -->
				<div class="content-box">
					<div class="title">
						{{content_title}}
						<!-- {{baike[index].title}} -->
						<router-link to=""><i></i>有用</router-link>
						<span><i></i>{{read_user}}</span>
					</div>
					<div class="anchor">
						<ul class="box">
							<li  v-for="(t,i) of content_subtitle" :key="i"><router-link to="">{{t}}</router-link></li>
							
						</ul>
					</div>
					<div class="content" v-html="content">
						<!-- <div>
							<h2>京都速览　Kyoto</h2>
							<img src="/img/destination/country/city/kyoto.jpeg"><span>图：京都街道。 by 刘顺儿妞</span>
							<div class="tips">
								<span>小贴士</span>
								<p>前线速报:: 受到9月初登陆日本的21号台风影响，京都部分古迹在台风中受损严重，目前因修葺，对游客部分开放或者暂停开放。受到影响的景点包括下鸭神社、东寺、二条城、醍醐寺、伏见稻荷大社、清水寺、岚山、地主神社等。请前往京都的旅行者关注景点开放情况，我们将持续关注前线情况。</p>
								<p>日本急救电话：+81 119，中国大阪总领馆电话：+81 6 6445 9427</p>
							</div>
							<p>
								京都位于日本关西地区，自平安王朝到明治维新这千年间来一直担任日本的首都，是日本文化与大和之魂的真正所在。
							</p>
							
							<p>恐怕再也没有哪座城市像京都一样拥有如此众多幽静的古刹与神社，惊人的古建密度让她成为世界上最富文化气息的城市之一。但京都又有入世的一面，无论在花见小路与盛装的艺伎擦肩而过，或是观看一场歌舞伎表演，都能让你体会京都的世俗风情。</p>
							<p>但京都并不缺少现代都市应有的活力，街头大量的书店、咖啡店、茶屋和特色小铺都能让你感受到她的年轻与朝气。如果有幸在诸多节庆之际造访京都，请务必加入到街头庆祝的人群中，感受这座千年古都的脉搏。</p>
							
						</div>
						<div>
							<h2>最佳旅行时间</h2>
							<p>3-4、9-11月是京都的最佳旅行时间。但京都四季分明，感受季节的流转是京都一大魅力所在。</p>
							<h4>3-4月：</h4>
							<p>此时恰逢京都的春季，气候温和舒适，雨水较少。2月下旬-3月中旬是梅花季，3月底-4月中旬是最为热闹的樱花季。</p>
							<h4>9-11月：</h4>
							<p>京都的秋季晴朗舒爽。9月能赏菊、赏彼岸花，10月中下旬有著名的时代祭。红叶则从11月中旬开始渐入佳境，一直持续到12月初。</p>
							<h4>5-8月：</h4>
							<p>夏季的京都因为三面环山的地形而较为闷热，气候与中国东南地区盛夏时节类似。6-7月是漫长的梅雨时期，出行时雨具必不可少。京都7月中下旬有衹园祭。8月中旬有盂兰盆节和大文字五山送火，是一年中最为盛大的活动。</p>
							<h4>12-次年2月</h4>
							<p>京都的冬天与12月份的长三角地区相似，比较阴湿，要注意防寒防潮。12月底到1月初跨年的气氛浓厚，还适逢商店打折。如果运气好赶上雪后的京都，更是美不胜收。</p>
							<p>值得注意的是，赏樱、赏枫时期和5月黄金周期间，京都往往人满为患，酒店价格水涨船高一房难求。而且热门季节出行可能无法体会到古都本有的静谧，错峰出游经常会有惊喜。</p>
						</div>
						<div>
							<h2>消费水平</h2>
							<p>京都是一个生活消费便宜，旅游消费水平高的城市。</p>
							<p><span>餐饮：</span>京都有许多上档次的传统餐馆，如果想体会精致的美食，每餐人均预算在230元左右，怀石料理和河豚等还会更加昂贵。</p>
							<p><span>住宿：</span>京都的住宿是关西地区最为昂贵的，交通便利的地段酒店在每晚460元以上，热门旅游季节还会上涨。</p>
							<p><span>交通：</span>京都交通比国内一线城市贵不少。一日公交车券价格约为29元，单程地铁票价约12元起。</p>
							<p>此外，京都大部分景点都收取门票，古建筑和园林一般约为29元。如果想节约开支的话，住宿可以远离市中心或者考虑住大阪，餐饮选择路边的乌冬店、小型居酒屋或者连锁餐厅，出行可以考虑租自行车，或者多依靠1日券出行。</p>
							<p>（以上为人民币价格）</p>
							<p><span>小费：</span>日本没有单独给小费的习惯。需要支付服务费的餐厅，会直接将服务费算入账单总额，无须另外给服务员个人小费。</p>
						</div> -->
						
					</div>
					<div class="user-view">
						<h3>以下蜂蜂刚刚浏览了这篇攻略：</h3>
						<ul>
							<li v-for="i of 20" :key="i"><router-link to=""><img :src="`/img/user/id_${50+i}.jpeg`"></router-link></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<!-- 以上是页脚 -->
		<div>
			<my-footer></my-footer>
			<back-top></back-top>
		</div>
	</div>
</template>

<script>
	import destination_nav from "../../components/destination/destination_nav.vue"
	import mdd_crumbNav from '../../components/destination/mdd_crumbNav.vue'
	export default{
		data(){
			return {
				// 城市或国家的名称
				place:"",
				placeId:"",
				// 阅读的人数
				read_user:"",
				// 文章标题
				baike:[],
				content:"",
				content_title:"",
				content_subtitle:"",
				// 选择阅读的文章
				index:0,
				// 文章的内容
				// 文章内的小标题
			}
		},
		methods:{
			
			getSubTitle(str){
				let regExp=/<h2>[0-9a-zA-Z\u4e00-\u9fa5\s]*<\/h2>/ig;
				let arr=str.match(regExp);
				if(arr!=null){
					for(let i=0;i<arr.length;i++){
						let regExp=/<\/?h2>/ig;
						arr[i]=arr[i].replace(regExp,"")
					}
					this.content_subtitle=arr;
				}
				
			},
			// 向服务器发送请求，获得目的地百科
			getPlaceBaike(placeId){
				this.axios.get('/lvyou/place_baike',{
					params:{
						place_id:placeId
					}
				}).then(result=>{
					this.baike=result.data
					this.content_title=this.baike[this.index].title
					this.content=this.baike[this.index].content
					this.read_user=this.baike[this.index].read_user
					this.getSubTitle(result.data[0].content)
				})
			},
			// 点击选择百科
			selectBaike(e){
				if(typeof(Number(e.target.dataset.num))!=NaN&&e.target.dataset.num!=undefined){
					
					this.index=e.target.dataset.num
				}
			}
		},
		mounted(){
			this.place=this.$refs.mddCrumbNav.city
			this.placeId=this.$route.params.placeId;
		},
		watch:{
			placeId(){
				this.$refs.mddCrumbNav.placeId=this.placeId;
				this.getPlaceBaike(this.placeId)
			},
			place(){
				document.title=`【${this.place}概况】${this.place}概况 - 马蜂窝`
			},
			index(){
				this.content_title=this.baike[this.index].title
				this.content=""
				this.content=this.baike[this.index].content
				this.content_subtitle=""
				this.read_user=this.baike[this.index].read_user
				
				if(this.baike[this.index].content!=null){
					let num=this.index
					let str=this.baike[this.index].content
					this.getSubTitle(str)
				}
			}
		},
		components:{
			"destination-nav":destination_nav,
			'mdd-crumbNav':mdd_crumbNav
		}
	}
</script>

<style>
	.do{
		position: relative;
	}
	.do .container{
		position: relative;
		width: 62.5rem;
		margin: 0 auto;
		font-size: 0.875rem;
		line-height: 1.25rem;
		
	}
	.do .container:after{
		content:"";
		display: block;
		clear: both;
	}
	.do p{
		display: block;
	}
	.do ._destination_nav{
		width: 62.5rem;
		margin: 0 auto 0.625rem;
		border-bottom: 1px solid #ededed;
	}
	.do ._mdd_crumbNav{
		width: 62.5rem;
		margin: 0 auto;
	}
	/* 侧边栏样式 */
	.do .side-nav{
		float: left;
		margin-bottom: 100px;
	}
	.do .side-nav li{
		display: block;
		width: 250px;
		padding: 1.25rem 0.625rem;
		border-bottom: 0.0625rem solid #F1F1F1;
		font-size: 1.125rem;
	}
	.do .side-nav li:last-child{
		border: 0 !important;
	}
	.do .side-nav li>a{
		padding-left: 1.25rem;
		line-height: 1.25rem;
		color: #333333;
		border-left: 0.125rem solid transparent;
	}
	.do .side-nav .active{
		border-left: 0.125rem solid #FF9D00;
		color: #FF9D00;
	}
	/* 正文显示区域 */
	.do .content-box{
		float: right;
		width: 43.125rem;
	}
	.do .content-box .title{
		width: 100%;
		height: 3.125rem;
		margin-bottom: 1.875rem;
		font-size: 24px;
		color: #333333;
		line-height: 3.125rem;
	}
	.do .tips{
		background: #fff3df;
		margin-top: 1.25rem;
		padding: 0.9375rem 1.25rem;
	}
	.do .tips span{
		
		color: #ff9d00;
		/* line-height: 1.25rem; */
	}
	.do .tips p{
		color: #4b4335;
	}
	.do .content-box .title:after{
		content: "";
		display: block;
		clear: both;
		width: 1.5rem;height: 0.1875rem;
		background: #666666;
	}
	.do .content-box .title>span,.content-box .title>a{
		display: flex;
		align-items: center;
		float: right;
		margin-left: 1.25rem;
		font-size: 0.75rem;
		color: #999999;
		vertical-align: middle;
	}
	
	.do .content-box .title>span>i{
		display: block;
		width: 1.125rem;height: 0.875rem;
		margin-right: 0.3125rem;
		background: url(/img/sprites/place-wiki-icon.png) no-repeat -1.875rem 0;
	}
	.do .content-box .title>a>i{
		display: block;
		width: 1.25rem;height: 1.375rem;
		margin:-4px 0.5rem 0 0;
		background: url(/img/sprites/place-wiki-icon.png) no-repeat 0 0;
	}
	.do .anchor .box:after{
		content: "";
		display: block;
		clear: both;
		margin-bottom: 1.25rem;
	}
	.do .anchor .box>li{
		float: left;
	}
	.do .anchor .box>li>a{
		padding:0 0.9375rem;
		color: #333333;
		border-left: 0.0625rem solid #DDDDDD;
		line-height: 0.875rem;
	}
	.do .anchor>.box>li:first-child>a{
		padding:0 15px 0 0;
		border: 0;
	}
	/* 正文内容 */
	.do .content>div{
		padding-left: 1.25rem;
		margin-bottom: 3.125rem;
		border-left: 0.125rem solid #EEEEEE;
	}
	.do .content>div>h2{
		display: block;
		height: 29px;
		padding-left: 1.25rem;
		margin-left: -1.375rem;
		border-left: 0.125rem solid #FF9D00 !important;
		font-size: 1.125rem;
		font-weight: normal;
		line-height: 1.75rem;
		color: #333333;
		
	}
	.do .content>div>h4{
		font-weight: bold;
	}
	.do .content>div>p{
		margin:0.9375rem 0;
		color: #666666;
	}
	.do .content>div>div{
		margin: 1.25rem 0;
	}
	.do .content>div>div>img{
		width: 100%;
	}
	
	.do .content>div>img+span{
		font-size: 0.75rem;
		color: #999999;
	}
	.do .content>div>p>span{
		color: #FF9D00;
	}
	.do .content>div>table{
		border-collapse: collapse;
	}
	
	.do .content>div>table tr{
		border: 1px solid #E4E4E4;
	}
	.do .content>div>table>thead td{
		padding: 20px 15px;
		background: #61c5ff;
		color: #fff;
	}
	.do .content>div>table>tbody>tr>td:first-child{
		color: #FF9D00;
	}
	.do .content>div>table td{
		padding: 20px 15px;
		color: #333333;
		text-align: center;
	}
	.do .content>div>span{
		display: block;
		margin: 10px 0;
		color: #FF9D00;
	}
	.do .content img{
		width: 660px;height: 500px;
		margin-top: 10px;
	}
	/* 用户浏览记录 */
	.do .user-view{
		margin: 20px 0;
	}
	.do .user-view>h3{
		margin: 1.25rem 0;
		font-size: 1rem;
		color: #333333;
		font-weight: normal;
	}
	.do .user-view>ul{
		display: flex;
		flex-wrap: wrap;
	}
	.do .user-view>ul>li{
		width: 1.5rem;height: 1.5rem;
		margin: 0 0.625rem 0.625rem 0;
	}
	.do .user-view img{
		width: 100%;
		border-radius: 50%;
	}
</style>
