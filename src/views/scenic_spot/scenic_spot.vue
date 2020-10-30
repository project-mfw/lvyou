<template>
	<div>
		<div>
			<img src="../../../public"
			<my-header></my-header>
		</div>
		<!-- 以上为页头 -->
		<div class="container">
			<div class="top_box">
				<div class="_<mddCrumbNav">
					<mdd-crumbNav ref="mddCrumbNav"></mdd-crumbNav>
				</div>
				<div class="destinationNav">
					<destination-nav></destination-nav>
				</div>
			</div>
			<!-- 景点概况 -->
			<div class="row">
			
				<div class="wrapper sc-summary">
					<h2 class="title">景点概况</h2>
					<p>{{summary}}</p>
					<router-link to="">展开全部</router-link>
				</div>
			</div>
			<!-- 必游景点TOP5 -->
			<div class="row">
				<div class="wrapper top_5">
					<h2 class="title">必游景点TOP5</h2>
					<div class="box-top5">
						<div class="item"  v-for="(t,i) of jdList" :key="i" v-show="i<5">
							<div class="text middle">
								<dl class="middle">
									<dt><span class="num">{{i+1}}</span><router-link :to="`/jd_details/${t.id}`">{{t.name}}</router-link><router-link to="" class="more">{{t.comment}}条点评</router-link></dt>
									<dd v-html="t.content"></dd>
									<div class="links">
										<span>这里还包含景点：</span>
										<router-link to="" v-for="(a,j) of InsideJD[i]">{{a.name}}</router-link>
									</div>
								</dl>
							</div>
							<div class="pic">
								<div class="large"><img :src="t.pic" ></div>
								<div><img :src="t.pics.split('|')[1]"></div>
								<div><img :src="t.pics.split('|')[0]" ></div>
							</div>
						</div>
						
						
					</div>
				</div>
			</div>
			<!-- 热门景点 -->
			<div class="row">
				<div class="wrapper hot" >
					<h2 class="title">热门景点</h2>
					<div class="hot-pic">
						<div class="hot-pic-big">
							<router-link to="">
								<img :src="jdList[0].pic" >
								<p>{{jdList[0].name}}</p>
							</router-link>
						</div>
						<div>
							<router-link to="">
								<img :src="jdList[1].pic" >
								<p>{{jdList[1].name}}</p>
							</router-link>
							<router-link to="">
								<img :src="jdList[2].pic">
								<p>{{jdList[2].name}}</p>
							</router-link>
						</div>
						<div>
							<router-link to=""><img :src="jdList[3].pic" ><p>{{jdList[3].name}}</p></router-link>
							<router-link to=""><img :src="jdList[4].pic"><p>{{jdList[4].name}}</p></router-link>
						</div>
						<div>
							<router-link to=""><img :src="jdList[5].pic" ><p>{{jdList[5].name}}</p></router-link>
							<router-link to=""><img :src="jdList[6].pic" ><p>{{jdList[6].name}}</p></router-link>
						</div>
						<div class="hot-pic-big"><router-link to=""><img :src="jdList[7].pic"><p>{{jdList[7].name}}</p></router-link></div>
						<div>
							<router-link to=""><img :src="jdList[8].pic"><p>{{jdList[8].name}}</p></router-link>
							<router-link to=""><img :src="jdList[9].pic"><p>{{jdList[9].name}}</p></router-link>
						</div>
					</div>
				</div>
			</div>
			
			<!-- 目的地全部景点 -->
			<div class="row">
				<div class="wrapper all-sc">
					<h2 class="title">{{place}}全部景点<span><i></i><router-link to=""></router-link></span></h2>
					<ul class="b-nav" @click="checkLabel($event)">
						<li><router-link to="" :class="{active:checkedLable=='all'}" data-type="all">全部景点</router-link></li>
						<li><router-link to="" v-for="(t,i) of label" :key="i" :class="{active:checkedLable==t}" :data-type="t">{{t}}</router-link></li>
						
					</ul>
					<div class="all-sc-pic">
						<router-link :to="`/jd_details/${t.id}`" v-for="(t,i) of label_JD" :key="i" v-if="i<15"><img :src="t.pic"><p>{{t.name}}</p></router-link>
					</div>
				</div>
			</div>
			<!-- 查看目的地景点地图 -->
			<div class="row">
				<div class="wrapper">
					
					
					<div class="map">
						<router-link :to="{name:'map',params:{id:placeId},query:{place:place}}">
							<img src="/img/destination/traffic/东京地图简化版.jpeg" alt="">
							<span>查看{{place}}景点地图</span>
						</router-link>
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
	import mdd_crumbNav from '../../components/destination/mdd_crumbNav.vue'
	import destination_nav from '../../components/destination/destination_nav.vue'
	export default{
		data(){
			return{
				place:this.$route.params.place,
				placeId:"",
				summary:"",
				jdList:[{pic:"",name:"",pics:"|"},{pic:"",name:"",pics:"|"},{pic:"",name:"",pics:"|"},{pic:"",name:"",pics:"|"},{pic:"",name:"",pics:"|"},{pic:"",name:"",pics:"|"},{pic:"",name:"",pics:"|"},{pic:"",name:"",pics:"|"},{pic:"",name:"",pics:"|"},{pic:"",name:"",pics:"|"},{pic:"",name:"",pics:"|"},{pic:"",name:"",pics:"|"},{pic:"",name:"",pics:"|"},{pic:"",name:"",pics:"|"},{pic:"",name:"",pics:"|"},{pic:"",name:"",pics:"|"},{pic:"",name:"",pics:"|"},{pic:"",name:"",pics:"|"}],
				InsideJD:[],
				// 通过标签查询到景点数据
				// 总共的标签名
				label:[],
				checkedLable:"all",
				label_JD:[[],[],[],[],[]]
			}
		},
		methods:{
			//选择标签名字筛选景点
			checkLabel(e){
				// console.log(e.target.dataset.type)
				let label=e.target.dataset.type;
				this.checkedLable=label;
				if(label=="all"){
					this.axios.get('/lvyou/jd_list',{
						params:{
							id:this.placeId
						}
					}).then(result=>{
						this.label_JD=result.data
					})
				}else{
					this.axios.get('/lvyou/jd_list_label',{
						params:{
							label:label
						}
					}).then(result=>{
						
						this.label_JD=result.data
					})
				}
				
			},
			getFamilyID(place){
				this.axios.get('/lvyou/place_list',{
					params:{
						place:place
					}
				}).then(result=>{
					this.placeId=result.data[0].id;
					this.summary=result.data[0].summary;
					
					
					
				})
			},
			getJD(placeId){
				this.axios.get('/lvyou/jd_list',{
					params:{
						id:placeId
					}
				}).then(result=>{
					this.jdList=result.data
					this.label_JD=this.jdList
				})
			},
			getInsideJD(i,length){
				if(i<length){
					this.axios.get('/lvyou/jd_list',{
						params:{
							jdId:this.jdList[i].id
						}
					}).then(result=>{
						i++
						this.InsideJD.splice(i,1,result.data)
						this.getInsideJD(i,length)
					})
					
				}
			}
		
		},
		mounted(){
			this.getFamilyID(this.place)
		},
		watch:{
			placeId(){
				this.getJD(this.placeId)
				this.$refs.mddCrumbNav.placeId=this.placeId
			},
			jdList(){
				// 获取景点数据后，对标签进行出重操作
				let label=[]
				for(let obj of this.jdList){
					label.push(obj.label)
				}
				label.sort()
				for(let i=0;i<label.length;i++){
					if(label[i]!==label[i+1]){
						this.label.push(label[i])
					}
				}
				this.pics=this.jdList[0].pics;
				// 获取景点数据后再调用函数获得景点的内部景点数据
				this.getInsideJD(0,5)
				
			},
		},
		
		components:{
			'mdd-crumbNav':mdd_crumbNav,
			'destination-nav':destination_nav
		}
		
		
	}
</script>

<style scoped>
	.row{
		border-bottom:1px solid #E4E4E4
	}
	.row:not(:nth-child(2n)){
		background: #FAFAFA;
	}
	
	.wrapper{
		width: 62.5rem;
		margin: 0 auto;
		padding: 2.5rem 0;
	}
	
	.title{
		margin-bottom: 1.5625rem;
		color: #333333;
		font-weight:normal;
		font-size: 1.25rem;
	 }
	 /* 引入的头组件 */
	.top_box{
		width: 62.5rem;
		margin: 0 auto;
	}
	 /* 景点概况 */
	.sc-summary{
		position: relative
	}
	.sc-summary p{
		position: relative;
		/* height: 48px; */
		font-size: 1rem;
		color: #666666;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		
	}
	.sc-summary a{
		position: absolute;
		right: 5px;bottom: 10px;
	}
	/* 必游景点TOP5 */
	.num{
		float: left;
		width: 1.25rem;height: 1.25rem;
		margin-right: 1.125rem;
		background: #FF9D00;
		border-radius: 0.125rem;
		color: #fff;
		text-align: center;
		line-height: 1.25rem;
	}
	.num+a{
		font-size: 18px;
		line-height: 1.25rem;
	}
	.num+a:hover{
		text-decoration: underline;
	}
	.box-top5 .more{
		float: right;
		font-size: 0.75rem;
		line-height: 1.25rem;
	}
	
	.middle{
		display: table;
	}
	.text dl{
		display: table-cell;
		vertical-align: middle;
		
	}
	.text dt{
		margin-bottom: 1.5625rem;
	}
	.text dd{
		height: 65px;
		margin-bottom: 0.75rem;
		font-size: 1rem;
		color: #666666;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		
		overflow: hidden;
	}
	.links{
		line-height: 1.5rem;
	}
	.links a{
		display: inline-block;
		margin-right: 8px;
	}
	.links span{
		color: #999999;
	}
	.top_5{
		
	}
	.box-top5 .item{
		box-sizing: content-box;
		height: 16.875rem;
		padding-top: 1.875rem;
		margin-top: 1.875rem;
		border-top: 1px solid #E4E4E4;
	}
	.box-top5 .item:first-child{
		margin-top: 0;
		padding-top: 0;
		border: 0;
	}
	.item .text{
		float: left;
		width: 24.0625rem;
		height: 100%;
	}
	.item img{
		width: 100%;
		height: 100%;
	}
	.item .pic{
		float: right;
		width: 35.9375rem;
		height: 100%;
	}
	.pic>.large{
		float: left;
		width: 23.75rem;height: 16.875rem;
		margin:0 0.625rem 0.625rem 0;
	}
	.pic>div:not(.large){
		float:right;
		width: 11.5625rem;height: 8.125rem;
		margin-bottom: 0.625rem;
	}
	/* 热门景点 */
	.hot-pic:after{
		content: "";
		display: block;
		clear: both;
	}
	.hot-pic{
		margin-right: -20px;
	}
	.hot-pic:after{
		content: "";
		display: block;
		
	}
	.hot-pic img{
		width: 100%;height: 100%;
		object-fit: cover;
	}
	.hot-pic div{
		position: relative;
		float: left;
		width: 15.125rem;height: 20rem;
		margin: 0 15px 15px 0;
	}
	.hot-pic>div:not(.hot-pic-big)>a{
		position: relative;
		height: 9.6875rem;
		margin-bottom: 7px;
		line-height: 25px;
		overflow: hidden;
	}
	.hot-pic-big{
		width: 30.3125rem !important;height: 20rem !important;
	}
	.hot-pic-big>a{
		width: 100%;height: 100%;
		overflow: hidden;
	}
	.hot-pic-big>a>img{
		width: 100%;height: 100%;
		object-fit: cover;
	}
	.hot-pic-big p{
		font-size: 1.25rem !important;
	}
	.hot-pic>div p{
		position: absolute;
		bottom: 0;
		z-index: 1;
		display: block;
		padding: 0 0.875rem 0.625rem;
		font-size: 16px;
		color: #FFFFFF;
		text-shadow: 0 0 0.2rem #000000;
		text-decoration: none;
	}
	/* 全部景点 */
	.b-nav a{
		float: left;
		margin-bottom:0.9375rem;
		padding: 0 1.25rem;
		color: #333333;
		line-height: 30px;
	}
	.active{
		background: #FF9D00;
		color: #FFFFFF !important;
	}
	.all-sc-pic{
		clear: both;
		margin-right: -1.25rem;
	}
	.all-sc-pic:after{
		content: "";
		display: block;
		clear: both;
	}
	.all-sc-pic>a{
		float: left;
		display: block;
		width: 192px;
		margin: 0 0.625rem 0.9375rem 0;
	}
	.all-sc-pic>a>img{
		width: 100%;height: 130px;
		object-fit: cover;
	}
	.all-sc-pic>a>p{
		display: block;
		width: 100%;
		margin-top: -3px;
		height: 2.6875rem;
		border: 1px solid #eee;
		color: #333333;
		text-align: center;
		line-height: 2.6875rem;
	}
	/* 查看目的地地图 */
	.map{
		position: relative;
		height: 15.375rem;
		background: #DDDDDD;
		text-align: center;
	}
	.map a{
		height: 100%;
		display: block;
	}
	.map span{
		position: absolute;
		width: 204px;height: 62px;
		top: 0;bottom: 0;left: 0;right: 0;
		margin: auto;
		padding: 0.9375rem 1.75rem;
		border: 0.125rem solid #FFAA00;
		background-color: rgba(255,255,255,.85);
		border-radius: 0.125rem;
		color: #FF9D00;
		font-size: 1.125rem;
		
	}
	.map img{
		width: 100%;height: 100%;
		object-fit: cover;
	}
</style>
