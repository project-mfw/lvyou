<template>
	<div class="sr_main">
		<!-- 城市大图 -->
		<router-link :to="`/mdd_details/${place}`">
			<div class="info">
			<p>{{place}}</p>
			<p><span>{{been}}</span>人感兴趣</p>
			</div>
			<!-- <div><img src="/img/destination/Attractions/japan_tokyo.jpeg"></div> -->
			<div><img :src="this.$parent.pic"></div>
		</router-link>
		
		<!-- 城市热门景点推荐 -->
		<div class="header_link flex_row">
			<span>{{place}}热门景点</span>
			<router-link :to="`/jd/${place}`">查看更多相关景点>></router-link>
		</div>
		<div class="flex_row content wrap hot_jd_list">
			<router-link :to="`/jd_details/${t.id}`" v-for="(t,i) of scenicSpot" :key="i" v-show="i<8">
				<div><img :src="t.pic"></div>
				<p class="title">{{t.name}}</p>
				<p class="subtitle">{{t.comment}}评论</p>
			</router-link>
			
		</div>
		<!-- 城市娱乐项目推荐 -->
		<div class="header_link flex_row">
			<span>{{place}}最好玩</span>
		</div>
		<div class="search_play flex_row content wrap ">
			<router-link to="" v-for="(t,i) of play" :key="i" v-show="i<6"><div><img :src="t.pic" ></div><p class="subtitle">{{t.title}}</p><span class="span">{{t.subtitle}}</span></router-link>
			
		</div>
		<!-- 游记推荐 -->
		<div class="flex_row wrap">
			<div class="header_link flex_row">
			<span>精选游记</span>
			<router-link to="">查看更多相关游记>></router-link>
			</div>
			<!-- 游记1 -->
			<div class="search_note flex_row" v-for="(t,i) of notes" :class="{clear_border:isClearBoder(i)}" :key='i' >
				<div class="left"><router-link to=""><img :src="t.pic" ></router-link></div>
				<div class="flex_column right">
					<span>{{t.title}}</span>
					<router-link to=""><span>{{t.content}}</span></router-link>
					<div><span>日本-{{place}} / {{t.date.split("T")[0]}}</span>&nbsp;·&nbsp;<span>{{t.reading}}浏览</span></div>
				</div>
			</div>
			
		</div>
		
		<!-- 自由行产品推荐 -->
		<div class="header_link flex_row ">
			<span><a name="热门产品"></a>热门产品</span>
			<router-link to="">查看更多相关产品>></router-link>
		</div>
		<div class="search_free">
			<ul class="flex_row wrap">
				<li class="flex_row flex_two wrap" v-for="(t,i) of shopping" :key="i" v-show="i<4">
					<div class="left"><img :src="t.pic" ></div>
					<div class="right flex_column wrap">
						<div class="product_title" >
							<router-link to=""><h5>{{t.title}}</h5></router-link><router-link to="" class="seg_price">￥{{t.price}}</router-link>
						</div>
						<router-link to="">{{t.subtitle}}</router-link>
						<span>已售{{t.sold}}</span>
					</div>
				</li>
				
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				// 保存用父组件中传递过来的目的地
				place:"",
				been:"",
				// 保存用父组件中传递过来的目的地id
				placeId:"",
				// 保存服务器响应过来的景点数据
				scenicSpot:[],
				// 保存服务器响应过来的娱乐数据
				play:[],
				// 保存服务器响应过来的游记数据
				notes:[],
				// 保存服务器响应过来的产品数据
				shopping:[],
				search_note_index:""
			}
		},
		methods:{
			isClearBoder(i){
				if(i<5){
					return false
				}else{
					return true
				}
			},
			show(){
			}
		},
		mounted() {
			
		},
		watch:{
			placeId(){
				
				// 向服务器请求景点数据
				this.axios.get('/lvyou/jd_list',{
					params:{
						id:this.placeId
					}
				}).then(result=>{
					this.scenicSpot=result.data;
					this.$parent.scenicSpot=result.data;
				})
				// 向服务器请求娱乐项目数据
				this.axios.get('/lvyou/play',{
					params:{
						id:this.placeId
					}
				}).then(result=>{
					this.play=result.data;
				})
				// 向服务器请求游记数据
				this.axios.get('/lvyou/travel_notes',{
					params:{
						placeId:this.placeId,
						page:1,
						pageSize:6,
						collate:"id"
					}
				}).then(result=>{
					this.notes=result.data.result;
				})
				// 向服务器请求产品数据
				this.axios.get('/lvyou/shopping',{
					params:{
						id:this.placeId
					}
				}).then(result=>{
					this.shopping=result.data;
					this.$parent.shopping=result.data;
				})
			}
		}
		
	}
</script>

<style scoped>
	
	.sr_main{
		display: flex;
		flex-direction: column;
		width: 100%;
	}
	.sr_main p{
		display: block;
	}
	.sr_main a{
		color: #666666;
	}
	.sr_main img{
		width: 100%;
	}
	.hr{
		width: 100%;
		margin: 15px 0;
		padding: 0;
		border-top: 1px solid #e5e5e5;
		height: 0;
		clear: both;
	}
	.seg_price{
		color: #ff7000 !important;
		font-size: 16px;
		font-weight: bold;
		float: right;
	}
	.clear_border{
		border: none !important;
	}
	.search_free img,.search_note img,.search_play img,.content img{
		display: block;
		border-radius: 4px;
	}
	.span{
		display:inline-block;
		border:1px solid #FFA7A7;
		color: #FF4D4D;
		font-size: 0.833312rem;
		padding: 0.125rem 0.25rem;
	}
	.sr_main .info{
		position: relative;
		width: 100%;height: 21.25rem;
		background: rgba(255,255,255,.2);
		padding-top:2.5rem;
		margin-bottom: 1.25rem;
		border-radius: 6px;
		justify-content: space-between;
		text-align: center;
	}
	.info+div{
		position: absolute;
		top:139px;
		z-index: -1;
		border-radius: 6px;
		overflow: hidden;
	}
	.info+div>img{
		width: 40rem;height: 21.25rem;
	}
	.info>p:first-child{
		font-size: 48px;
		font-weight: 700;
		color: #fff;
		line-height: 1.2;
		text-shadow: 0px 2px 8px #000;
	}
	.info>p:last-child{
		position: absolute;
		right: 0;bottom: 0;
		align-self: flex-end;
		margin:0 10px 10px 0;
		color: #fff;
		text-shadow: 0px 2px 8px #000;
	}
	.info>p:last-child>span{
		font-size: 24px;
		font-weight: bold;
	}
	.header_link{
		width: 100%;
		border-bottom: 1px solid #e5e5e5;
		padding-bottom: 5px;
		margin: 1.25rem auto 0.625rem;
		justify-content: space-between;
	}
	.header_link span:first-child{
		color: #333333;
		font-size: 20px;
		font-weight: 700;
	}
	.header_link a{
		color: #1493e3;
	}
	.header_link a:hover{
		color: #FF7000;
		text-decoration: underline;
	}
	/* 推荐内容区域样式 */
	
	.title{
		margin-top: 5px;
		color: #333;
		font-weight: 700;
		font-size: 14px;
	}
	.subtitle{
		color: #333333;
		font-size: 12px;
		margin:0.25rem 0;
	}
	.content>a{
		flex: 0 0 24%;
		display: block;
		margin-bottom: 0.625rem;
	}
	/* 热门景点 */
	.sr_main .hot_jd_list a>div{
		width: 9rem;height: 9rem;
		overflow: hidden;
	}
	.sr_main .hot_jd_list img{
		/* width: 9rem;height: 9rem; */
		width: 100%;height: 100%;
		object-fit:cover;
		transition: all 0.5s ease-in;
	}
	.sr_main .hot_jd_list img:hover{
		transform: scale(1.2,1.2);
		transition: all 0.25s ease-in;
	}
	/* 最好玩推荐区 */
	.search_play>a{
		flex:0 0 32%
	}
	.search_play>a>div{
		height: 7.5rem;
		overflow: hidden;
	}
	.search_play>a>div>img{
		width: 100%;height: 100%;
		object-fit:cover;
		transition: all 0.5s ease-in;
	}
	.search_play>a>div>img:hover{
		transform: scale(1.2,1.2);
		transition: all 0.25s ease-in;
	}
	/* 游记推荐区域样式 */
	.search_note{
		width: 100%;height: 9.5rem;
		border-bottom: 1px solid #E5E5E5;
		padding: 10px 10px 0 10px;
		justify-content: space-between;
		align-items: center;
	}
	.search_note .left{
		width: 12rem;height: 6.75rem;
	}
	.search_note .left>a{
		width: 100%;height: 100%;
	}
	.search_note .left img{
		width: 100%;height: 100%;
		object-fit: cover;
	}
	.search_note .right{
		width: 25.4375rem;height: 6.875rem;
		margin-left: 0px;
		align-items: flex-start;
		font-size: 13.33333px;
		color: #999999;
		justify-content: space-between;
	}
	
	.search_note .right>span:first-child{
		width: 80%;
		color: #000000;
		font-size: 18px;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
	.search_note .right>a>span{
		width: 100%;
		font-size: 0.8125rem;
		display: -webkit-box;
		color: #999999;
		-webkit-box-orient: vertical; 
		text-overflow: ellipsis; 
		-webkit-line-clamp: 2;
		overflow : hidden;
	}
	.search_note .right>div:last-child{
		width: 100%;
		font-size: 0.75rem;
		text-align: right;
	}
	/* 自由行产品推荐样式 */
	.search_free ul li{
		
		width: 48%;height: 6.875rem;
		margin: 0 5px 20px 0;
		line-height: 1.25rem;
	}
	.search_free .left img{
		width: 90px;height: 90px;
		object-fit: cover;
	}
	.search_free .right{
		flex:0 0 64%;
		align-items: flex-start;
		margin-left:0.3125rem;
		margin-top: 0.3125rem;
		justify-content: space-between;
		font-size: 0.8125rem;
		line-height: 1.25rem;
	}
	.search_free .right>a:nth-child(2){
		width: 100%;
		font-size: 0.8125rem;
		display: -webkit-box;
		-webkit-box-orient: vertical; 
		text-overflow: ellipsis; 
		-webkit-line-clamp: 3;
		overflow : hidden;
	}
	.search_free .right>a:nth-child(2):hover{
		color: #FF9D00;
		text-decoration: underline;
	}
	.search_free .right>span{
		align-self: flex-end;
		font-size: 0.75rem;
		color: #999999;
	}
	.product_title{
		display: flex;
		justify-content: space-between;
		width: 100%;
		line-height: 20px;
		align-items: center;
	}
	.product_title a:first-child>h5{
		width: 90px;
		font-size: 14px;
		color: #333333;
		text-overflow: ellipsis;
		white-space: pre;
		overflow:hidden;
	}
</style>
