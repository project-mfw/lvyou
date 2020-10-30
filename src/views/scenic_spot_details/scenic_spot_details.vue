<template>
	<div>
		<div>
			<my-header></my-header>
		</div>
		<!-- 以上为页头 -->
		<div class="container">
			<!-- 景点详情页头部 -->
			<div class="row sd-top">
				<div class="wrapper">
					<div>
						<mdd-crumbNav ref="mddCrumbNav"></mdd-crumbNav>
					</div>
					<div class="sd-title">
						<p>{{JD.name}}</p>
						<span>{{JD.name_en}}</span>
					</div>
					<div class="sd-nav-comment">
						<router-link to="" class="active">概况</router-link>
						<a @click="toComment('#sd-comment')">蜂蜂点评<span>({{JD_comment}}条)</span></a>
						<router-link to="" class="big-btn" @click.native="openComment">我要点评</router-link>
					</div>
				</div>
			</div>
			<!-- 景点图片 -->
			<div class="row sd-pic">
				<router-link to="">
					<div class="box-pic wrapper">
						<div class="big-pic">
							<img :src="JD.pic" alt="">
						</div>
						<div>
							<img :src="pics[0]" alt="">
						</div>
						<div>
							<img :src="pics[1]" alt="">
						</div>
						
						<span>46192张图片</span>
					</div>
				</router-link>
			</div>
			<!-- 景点政策 -->
			<div class="row sd-details">
				<div class="wrapper">
					<div class="sd-desc" v-html="JD.content"></div>
					<ul>
						<li class="tel">
							<dl>
								<dt>电话</dt>
								<dd>{{JD.tel}}</dd>
							</dl>
						</li>
						<li>
							<dl>
								<dt>网址</dt>
								<dd><a :href="JD.url" target="_blank">{{JD.url}}</a></dd>
							</dl>
						</li>
						<li>
							<dl>
								<dt>用时参考</dt>
								<dd>{{JD.time}}</dd>
							</dl>
						</li>
					</ul>
					<dl>
						<dt>交通</dt>
						<dd>{{JD.traffic}}</dd>
					</dl>
					<dl>
						<dt>门票</dt>
						<dd v-html="JD.ticket">{{JD.ticket}}</dd>
					</dl>
					<dl>
						<dt>开放时间</dt>
						<dd v-html="JD.opening"></dd>
					</dl>
					<div>*信息更新时间：{{JD.update_date.split('T')[0]}}&nbsp;&nbsp;&nbsp;&nbsp;感谢<router-link to="">{{JD.update_user}}</router-link>等蜂蜂参与了编辑</div>
				</div>
				
			</div>
			<!-- 景点地图 -->
			<div class="row">
				<div class="wrapper sd-position">
					<div class="sd-title">
						景点位置
						<span>{{JD.address}}</span>
					</div>
					<div class="sd-map">
						<div class="map" id="jdListMap">
							
						</div>
						<div class="includeJDList">
							<div>附近景点</div>
							<ul @mousemove="toPoint($event)">
								<li v-for="(t,i) of JD_include" :data-num="i">{{t.name}}</li>
							</ul>
						</div>
						<div class="traffic">
							<div>附近交通</div>
							<ul>
								<li @mouseenter="getPoint(139.883711,35.636131)">JR舞滨站</li>
							</ul>
						</div>
					</div>
				</div>
				
			</div>
			<!-- 相关产品 -->
			<div class="row sd-product">
				<div class="wrapper">
					<div class="sd-title">
						热门优惠
					</div>
					<table class="box-product">
						<thead>
							<tr>
								<th class="type">类型</th>
								<th class="pro"></th>
								<th class="price">价格</th>
								<th class="action"></th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(t,i) of shopping" :key="i" v-if="i<3">
								<td class="type">{{t.type}}</td>
								<td>
									<router-link to="" class="pro">{{t.subtitle}}</router-link>
								</td>
								<td>￥{{t.price}}起</td>
								<td><router-link to="" class="btn">预订</router-link></td>
							</tr>
							
							
						</tbody>
							
					</table>
				</div>
			</div>
			<!-- 内部景点-->
			<div class="row sd-inside" v-if="JD_include.length!=''">
				<div class="wrapper">
					<div class="sd-title">
						内部景点
					</div>
					<ul class="box">
						<li v-for="(t,i) of JD_include" :key="i">
							<router-link :to="`/jd_details/${t.id}`">
								<span class="span-num">{{i+1}}</span>
								<img :src="t.pic" >
								<div class="text">
									<h3>{{t.name}}</h3>
									<p><span>{{t.been}}</span>人去过</p>
									
								</div>
							</router-link>
						</li>
						
						
						
					</ul>
				</div>
			</div>
			<!-- 用户评论-->
			<div class="row sd-comment" id="sd-comment">
				<div class="wrapper">
					<comment ref="comment"></comment>	
				</div>
			</div>
			<!-- 附近热门美食 -->
			<div class="row sd-food sd-pic">
				<div class="wrapper" >
					<dl>
						<dt class="sd-title">附近热门美食</dt>
						<dd class="clear-left" v-for="(t,i) of 3" :key="i">
							<router-link to="">
								<img src="/img/destination/food/寿司.jpeg" >
								<div class="text">
									<p>人形町今半</p>
									<span><span class="user-star"></span><span>5分</span></span>
									<span><span>7</span>条点评</span>
									<p>距此548米</p>
								</div>
							</router-link>
						</dd>
						
					</dl>
				</div>
			</div>
		</div>
		<div class="addComment" v-if="isOpenComment">
			<div class="addCommentBox">
				<span class="close" @click="closeComment"></span>
				<div class="title">{{JD.name}}<span><i class="red">*</i>为必填选项</span></div>
				<div class="addStar">
					<div class="left"><i class="red">*</i>总体评价</div>
					<div class="right">
						<div>
							<div class="sub" :class="{star_1:star==1,star_2:star==2,star_3:star==3,star_4:star==4,star_5:star==5}"></div>
							<div class="is">
								<router-link to="" v-for="i of 5" class="star" :data-star="i" @click.native="selectStar(i)"></router-link>
							</div>
						</div>
						{{starText}}
					</div>
				</div>
				<div class="input_box">
					<div class="left"><i class="red">*</i>内容</div>
					<div class="right">
						<textarea name="" id="" class="input" placeholder="100字+3图,有机会评为优质点评!" v-model="addCommentContent"></textarea>
						<p>内容不超过10000个字，已输入{{contentNum}}个字</p>
					</div>
				</div>
				<div class="pic">
					<div class="left">上传图片</div>
					<div class="right">
						<router-link to="" class="addPic"><i></i></router-link>
						<p>图片不超过20张</p>
					</div>
				</div>
				<div class="submit_box">
					<div class="right">
						<router-link to="" @click.native="addComment">提交</router-link>
					</div>
				</div>
			</div>
		</div>
		<!-- 以下为页脚 -->
		<div>
			<my-footer></my-footer>
		</div>
	</div>
</template>

<script>
	import mddCrumbNav from '../../components/destination/mdd_crumbNav.vue'
	import comment from '../comment.vue'
	export default{
		data(){
			return{
				placeId:"",
				shopping:[],
				// 景点数据
				JD:{update_date:""},
				pics:[],
				JD_include:[],
				JD_comment:"123",
				JD_pointX:"",
				JD_pointY:"",
				pointX:[],
				pointY:[],
				pointNum:"",
				mapTimer:null,
				// 添加评论
				star:1,
				starText:"点击星星打分",
				addCommentContent:"",
				contentNum:0,
				// 是否打开输入面板
				isOpenComment:false,
			}
		},
		methods:{
			// 打开/关闭添加评论输入面板
			openComment(){
				this.isOpenComment=true
			},
			closeComment(){
				this.isOpenComment=false
			},
			selectStar(i){
				console.log(i)
				this.star=i
				// console.log(e.target.dataset.star)
			},
			// 将填写好的评论添加到服务器
			addComment(){
				// 需要提交到服务器的变量有place_id、type_id、user、user_pic、level、content、date、star
				if(this.addCommentContent==""){
					return
				}
				let user=this.$store.state.nickName
				let user_pic=this.$store.state.pic
				let level=this.$store.state.level
				let date=this.moment().format().split('T')[0]+' '+new Date().toTimeString().split(' ')[0]
				this.axios.post('/lvyou/commentAdd',
					`place_id=${this.placeId}&type_id=${1}&user=${user}&user_pic=${user_pic}&level=${level}&content=${this.addCommentContent}&date=${date}&star=${this.star}`
				).then(result=>{
					if(result.data==1){
						this.isOpenComment=false
					}
				})
			},
			// 获得景点
			getJD(placeId){
				this.axios.get('/lvyou/jd_details',{
					params:{
						id:placeId
					}
				}).then(result=>{
					this.JD=result.data[0]
					document.title=result.data[0].name+'攻略_门票_地址'
					this.pics=this.JD.pics.split("|")
					this.JD_pointX=Number(result.data[0].point.split(',')[0])
					this.JD_pointY=Number(result.data[0].point.split(',')[1])
					this.getPoint(this.JD_pointX,this.JD_pointY)
					this.$refs.mddCrumbNav.placeId=result.data[0].family_id
					this.getShopping(result.data[0].family_id)
				})
			},
			getIncludeJD(jdId){
				this.axios.get('/lvyou/jd_list',{
					params:{
						jdId:jdId
					}
				}).then(result=>{
					this.JD_include=result.data;
					let arr=[]
					for(let i=0;i<result.data.length;i++){
						let numx=Number(result.data[i].point.split(',')[0])
						let numy=Number(result.data[i].point.split(',')[1])
						this.pointX.splice(i,1,numx)
						this.pointY.splice(i,1,numy)
					}
				})
			},
			getShopping(placeId){
				this.axios.get('/lvyou/shopping',{
					params:{
						id:placeId
					}
				}).then(result=>{
					this.shopping=result.data
					
					
				})
			},
			//跳转至评论去
			toComment(idName){
				document.querySelector(idName).scrollIntoView(true);
			},
			// 跳转到坐标
			toPoint(e){
				clearTimeout(this.mapTimer)
				this.mapTimer=setTimeout(()=>{
					if(this.pointNum!=Number(e.target.dataset.num)&&e.target.dataset.num!=undefined){
						if(e.target.dataset.num!=NaN){
							this.pointNum=Number(e.target.dataset.num);
							
							let x=this.pointX[this.pointNum]
							let y=this.pointY[this.pointNum]
							this.getPoint(x,y)
						}
					}
				},0)
				
			},
			
			getPoint(x,y){
				let mapDiv=document.getElementById("jdListMap")
				let map=new BMap.Map(mapDiv)
				let point=new BMap.Point(x,y);
				map.enableDragging()
				map.enableScrollWheelZoom()
				map.centerAndZoom(point,20)
				let iconSize=new BMap.Size(19,25)
				let icon=new BMap.Icon('/img/sprites/marker_red_sprite.png',iconSize)
				let mk=new BMap.Marker(point)
				map.addOverlay(mk);
			},
		},
		watch:{
			placeId(){
				this.getJD(this.placeId)
				this.getIncludeJD(this.placeId)
			},
			addCommentContent(){
				this.contentNum=this.addCommentContent.length;
			},
			star(){
				if(this.star==1){
					this.starText="不建议"
				}
				if(this.star==2){
					this.starText="有待改善"
				}
				if(this.star==3){
					this.starText="还可以"
				}
				if(this.star==4){
					this.starText="值得一去"
				}
				if(this.star==5){
					this.starText="强烈推荐"
				}
			}
		},
		mounted(){
			this.placeId=this.$route.params.id
			this.$refs.comment.placeId=this.placeId
			this.getShopping(this.place);
		},
		components:{
			'mdd-crumbNav':mddCrumbNav,
			'comment':comment
		}
	}
</script>

<style scoped>
	/* 添加评论样式 */
	.addComment .addStar .right>div{
		position: relative;
		float: left;
		display: inline-block;
		width: 132px;height: 23px;
		padding-right: 10px;
		overflow: hidden;
		background: url(/img/sprites/path-sprite16.png) no-repeat -300px 0;
		vertical-align: middle;
	}
	.addComment .addStar .right>div>.is{
		position: absolute;
		z-index: 1;
		width: 132px;height: 23px;
		background: transparent;
	}
	.addComment .addStar .right>div>.sub{
		position: absolute;
		z-index: 1;
		top: 0;bottom: 0;
		width: 132px;
		margin: auto;
		margin-left: -130px;
		background: url(/img/sprites/path-sprite16.png) no-repeat -300px -30px;
		overflow: hidden;
	}
	.star_5{margin-left: 0px!important;}
	.star_4{margin-left: -26px!important;}
	.star_3{margin-left: -52px!important;}
	.star_2{margin-left: -78px!important;}
	.star_1{margin-left: -104px!important;}
	.addComment .addStar .right{
		color: #999;
		line-height: 24px;
	}
	.addComment .addStar .right>div a{
		float: left;
		width: 23px;
		height: 23px;
		margin-right: 3px;
		cursor: pointer;
	}
	.addComment .submit_box a{
		float: left;
		margin-right: 20px;
		width: 130px;
		height: 36px;
		background-color: #ffa800;
		line-height: 36px;
		font-size: 16px;
		color: #fff;
		text-align: center;
		border-radius: 2px;
	}
	.addComment .pic{
		margin-bottom: 25px;
	}
	.addComment .pic a{
		position: relative;
		display: block;
		width: 120px;height: 120px;
		margin: 0 10px 10px 0;
		background: url(/img/sprites/path-sprite16.png) no-repeat 0 -120px;
	}
	.addComment .pic a i{
		position: absolute;
		left: 50%;
		top: 50%;
		margin: -22px 0 0 -22px;
		width: 44px;
		height: 44px;
		background: url(/img/sprites/path-sprite16.png) no-repeat -150px -120px;
	}
	
	.addComment .pic{
		
	}
	.addComment{
		position:fixed;
		top: 0;bottom: 0;
		width: 100%;height: 100%;
		margin: auto;
		background:rgba(0,0,0,.75);
	}
	.addComment .close{
		outline: none;
		position: absolute;
		z-index: 50;
		top: 7px;
		right: 6px;
		width: 12px;
		height: 12px;
		background: url(/img/sprites/popup_close_15d2283.gif) no-repeat;
		border: 0;
		cursor: pointer;
	}
	.addComment .addCommentBox{
		    position: absolute;
			top: 0;bottom: 0;left: 0;right: 0;
			margin: auto;
		    opacity: 1;
			width: 930px;height: 530px;
			padding: 35px 40px 40px;
		    background: rgb(255, 255, 255);
			border-radius: 3px;
			box-shadow: 0 0 3px rgba(0,0,0,0.3)
		    
	}
	.addCommentBox>div:after{
		content: "";
		display: block;
		clear: both;
	}
	.addCommentBox .left{
		float: left;
		width: 13%;
		padding-right: 14px;
		font-size: 14px;
		line-height: 20px;
		text-align: right;
	}
	.addCommentBox .right{
		float: right;
		width: 87%;
	}
	.addComment .red{
		color: red;
		margin-right: 2px;
	}
	.addCommentBox>.title{
		font-size: 22px;
		font-weight: 400;
		color: #444;
		margin-bottom: 24px;
	}
	.addCommentBox .addStar{
		margin-bottom: 20px;
		line-height: 24px;
	}
	.addCommentBox>.title>span{
		margin-bottom: 24px;
		padding-left: 10px;
		font-size: 14px;
		font-weight: 400;
		color: #666;
	}
	.addCommentBox .input_box{
		margin-bottom: 15px;
	}
	.addCommentBox .input{
		width: 100%;height: 86px;
		margin-bottom: 3px;
		border: 1px solid #efefef;
		background-color: #efefef;
		padding: 12px 14px;
		color: rgb(102,102,102);
		font-size: 12px;
		line-height: 20px;
		overflow: auto;
		resize: none;
		outline: none;
	}
	.addCommentBox .input:focus{
		background: #fff;
		border-color: #FFA800;
	}
	.row{
		border-bottom: 1px solid #EEEEEE;
		padding: 1.875rem 0;
	}
	.wrapper{
		position: relative;
		width: 62.5rem;
		margin: 0 auto;
	}
	/* 景点详情页头 */
	.sd-top .sd-nav{
		padding: 0.9375rem 0;
		font-size: 0.75rem;
	}
	.sd-top .sd-tite{
		margin-bottom: 1.25rem;
	}
	.sd-top .sd-title p{
		font-size: 1.875rem;
		color: #333333;
	}
	.sd-top .sd-title span{
		font-size: 1rem;
		color: #999999;
	}
	.sd-nav-comment{
		height: 1.875rem;
		border-top: 0.0625rem solid #EEEEEE;
		font-size: 1rem;
		color: #333333;
	}
	.sd-nav-comment>a:not(.big-btn){
		float: left;
		display:block;
		height: 3.75rem;
		padding: 0 1.25rem;
		border-bottom: 0.125rem solid transparent;
		font-size: 1rem;
		color: #333333;
		line-height: 3.75rem;
		cursor: pointer;
	}
	.sd-nav-comment .active{
		border-bottom: 0.125rem solid #FF9D00 !important;
		background: transparent !important;
		color: #FF9D00 !important;
	}
	.sd-nav-comment span{
		font-size: 0.75rem;
		color: #999999;
	}
	.big-btn{
		float: right;
		display: inline-block;
		margin-top: 13px;
		padding: 0 1.875rem;
		background: #FF9D00;
		border-radius: 0.1875rem;
		color: #FFFFFF;
		font-size: 0.875rem;
		line-height: 2.1875rem;
	}
	/* 景点图片 */
	.sd-pic{
		background: #fafafa;
		border: 0.0625rem solid #EEEEEE;
		text-align: center;
	}
	
	.box-pic:after{
		content: "";
		display: block;
		clear: both;
	}
	.box-pic .big-pic{
		float: left;
		width: 43.125rem;height: 23.125rem;
	}
	.box-pic div:not(.big-pic){
		float: right;
		width: 19.0625rem;height: 11.4375rem;
		margin-bottom: 4px;
	}
	.box-pic div>img{
		width: 100%;height: 100%;
		object-fit: cover;
	}
	
	.box-pic span{
		position: absolute;
		left: 1.25rem;bottom: 0.9375rem;
		padding:0 0.75rem;
		background: rgba(0,0,0,.7);
		color: #FFFFFF;
		border-radius: 0.625rem;
	}
	/* 景点信息、政策、价格 */
	.sd-desc{
		padding-bottom: 1.5625rem;
		margin-bottom: 1.5625rem;
		border-bottom: 0.0625rem solid #E5E5E5;
		font-size: 1rem;
		color: #333333;
		line-height: 1.5rem;
	}
	.sd-desc+ul{
		margin-bottom: 1.5625rem;
	}
	.sd-desc+ul:after{
		content: "";
		display: block;
		clear: both;
	}
	.sd-desc+ul>li{
		float: left;
		width: 21.5625rem;
		padding: 0.1875rem 1.875rem 0;
		border-left: 1px solid #EEEEEE;
	}
	.tel{
		width: 19.375rem !important;
		border: 0 !important;
		padding-left: 0 !important;
	}
	.sd-details dl{
		margin-bottom: 1.25rem;
	}
	.sd-details dt{
		color: #333333;
	}
	.sd-desc~div{
		color: #999999;
		font-size: 0.833333rem;
		line-height: 1.5rem;
	}
	/* 景点地图 */
	
	.sd-title{
		margin-bottom: 1.25rem;
		font-size: 1.25rem;
		color: #333333;
	}
	.sd-title>span{
		display: block;
		margin-top: 0.3125rem;
		font-size: 0.875rem;
		color: #999999;
	}
	.sd-map>div{
		float: left;
		width:14.25rem;height: 16.875rem;
		margin-left: 1.25rem;
		border: 1px solid #eee
	}
	.sd-map:after{
		content: "";
		display: block;
		clear: both;
	}
	.sd-map .map{
		width: 31.25rem !important;
		margin: 0 !important;
	}
	.sd-map>div>div{
		text-align: center;
		line-height: 48px;
		border-bottom: 1px solid #eee;
		font-size: 16px;
		color: #333;
		background-color: #f8f8f8;
	}
	.sd-map ul{
		padding: 0 20px;
		height: 219px;
		overflow: auto;
	}
	.sd-map ul>li{
		padding: 15px 0;
		line-height: 24px;
		font-size: 14px;
		border-bottom: 1px dashed #eee;
		cursor: pointer;
	}
	.sd-map ul>li:hover{
		text-decoration: underline;
	}
	/* 相关产品 */
	.box-product{
		width: 100%;
		border: 0.0625rem solid #EEEEEE;
		border-collapse: collapse;
	}
	.box-product th{
		background:#FAFAFA;
		padding: 0.625rem;
		color: #333333;
	}
	.box-product th,td{
		padding: 0.9375rem 0.625rem;
		border-bottom: 1px dashed #f1f1f1;
		text-align: left;
	}
	.box-product th{
		padding: 0.625rem;
	}
	.box-product .type{
		box-sizing: content-box !important;
		width: 4.6875rem;
		padding-left: 3.125rem !important;
	}
	.box-product .pro{
		width: 33.125rem;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
	.box-product .price{
		width: 9.375rem;
	}
	.box-product tbody td:nth-child(3){
		color:#ff9d00;
	}
	.box-product .btn{
		display: inline-block;
		padding: 0 1.25rem;
		background: #FF9D00;
		color: #FFFFFF;
		line-height: 1.5625rem;
		border-radius: 0.25rem;
	}
	/* 内部景点 */
	.sd-inside .box{
		
		margin: -1.25rem -1.25rem 0 0;
		
	}
	.sd-inside .box:after{
		content: "";
		display: block;
		clear: both;
	}
	.sd-inside .box>li{
		position: relative;
		float: left;
		margin: 1.25rem 1.25rem 0 0;
	}
	.span-num{
		position: absolute;
		top: 0;left: 0;
		width: 2.5rem;height: 1.875rem;
		background: #FF9D00;
		font-size: 1.25rem;
		color:#FFFFFF;
		text-align: center;
		line-height: 1.875rem;
	}
	.sd-inside .text{
		margin-top: -0.4375rem;
		padding: 0.75rem 0.625rem;
		border: 0.0625rem solid #efefef;
	}
	.sd-inside .text:after{
		content: "";
		display: block;
		clear:both;
		
	}
	.sd-inside .text>h3{
		float: left;
		color: #333;
	}
	.sd-inside .text>p{
		float: right;
		color: #666;
		font-size: 13.333333%;
	}
	.sd-inside .text span{
		color: #FF9D00 ;
	}
	
	/* 附近热门美食 */
	.sd-food:after{
		content: "";
		display: block;
		clear: both;
	}
	
	.sd-food dd{
		float: left;
		width: 320px;height: 300px;
	}
	.sd-food dd:not(:nth-child(2)){
		
		margin-left: 1.25rem;
	}
	.sd-food dd a{
		width: 100%;
	}
	.sd-food dd a img{
		width: 100%;
	}
	.sd-food .text{
		padding: 0.9375rem 1.25rem;
		margin-top: -7px;
		border: 0.0625rem solid #EEEEEE;
		color: #333333;
		text-align: left;
	}
	.sd-food .text>p:first-child{
		display: block;
		margin-bottom: 0.3125rem;
		font-size: 1rem;
		overflow: hidden;
	}
	.sd-food .text>p:last-child{
		display: block;
		margin-top: 0.3125rem;
		color: #666666;
		overflow: hidden;
	}
	.sd-food .text>span{
		
		color: #999999;
	}
	.sd-food .text>span:nth-child(3){
		float: right;
	}
	.sd-food .text>span>span{
		color: #FF9D00 !important;
	}
	
	/* 附近热门酒店 */
	.sd-hotel dt{
		font-size: 1.25rem;
		color: #333333;
		line-height: 2.625rem;
	}
	.sd-hotel dd{
		font-size: 1rem;
		line-height: 1.625rem;
	}
	.sd-hotel dd span{
		color: #FF9D00;
	}
</style>
