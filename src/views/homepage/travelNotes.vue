<template>
	<div class="travelnotes" id="travelnotes">
		<!-- 游记排序类型 -->
		<div class="tn_nav" v-if="isShow">
			<ul>
				<li :class="{active:collate=='reading'}"><router-link to=""  @click.native="collateNotes($event)" data-collate="reading">热门游记</router-link><span @click="screenDrop($event)" data-name="screen" class="screen"><i></i>筛选</span></li>
				
				
				<div class="dropdown" v-show="screenIsShow" data-name="screenDrop" @mouseleave.stop="screenUp($event)">
					
					<div class="notesSearch">
						<div class="left">目的地</div>
						<div class="right">
							<input type="text" placeholder="输入你想查看的目的地" data-name="screenInput" @keyup.13="search" v-model="place">
							<ul>
								<li><router-link to="">斯里兰卡</router-link></li>
								<li><router-link to="">济州岛</router-link></li>
								<li><router-link to="">香港</router-link></li>
								<li><router-link to="">北京</router-link></li>
								<li><router-link to="">云南</router-link></li>
								<li><router-link to="">泰国</router-link></li>
								<li><router-link to="">青海湖</router-link></li>
								<li><router-link to="">日本</router-link></li>
							</ul>
						</div>
						
					</div>
					<div class="interest">
						<div class="left">兴趣</div>
						<div class="right">
							<ul class="interest_item">
								<li>
									<router-link to="">
										<img src="/img/travel_notes/xingqu1.jpeg" alt="">
										<div>
											<p>吃遍天下</p>
											<p>无敌手</p>
										</div>
									</router-link>
								</li>
								<li>
									<router-link to="">
										<img src="/img/travel_notes/xingqu2.jpeg" alt="">
										<div>
											<p>带着对象</p>
											<p>去虐狗</p>
										</div>
									</router-link>
								</li>
								<li>
									<router-link to="">
										<img src="/img/travel_notes/xingqu3.jpeg" alt="">
										<div>
											<p>姑娘漂亮</p>
											<p>就是美</p>
										</div>
									</router-link>
								</li>
								<li>
									<router-link to="">
										<img src="/img/travel_notes/xingqu4.jpeg" alt="">
										<div>
											<p>带着孩子</p>
											<p>看世界</p>
										</div>
									</router-link>
								</li>
								<li>
									<router-link to="">
										<img src="/img/travel_notes/xingqu5.jpeg" alt="">
										<div>
											<p>登山徒步</p>
											<p>用脚走</p>
										</div>
									</router-link>
								</li>
								<li>
									<router-link to="">
										<img src="/img/travel_notes/xingqu6.jpeg" alt="">
										<div>
											<p>带着父母</p>
											<p>走远方</p>
										</div>
									</router-link>
								</li>
								<li>
									<router-link to="">
										<img src="/img/travel_notes/xingqu7.jpeg" alt="">
										<div>
											<p>独自一人</p>
											<p>最自由</p>
										</div>
									</router-link>
								</li>
								<li>
									<router-link to="">
										<img src="/img/travel_notes/xingqu8.jpeg" alt="">
										<div>
											<p>短途周末</p>
											<p>散散心</p>
										</div>
									</router-link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<li :class="{active:collate=='date'}"><router-link to="" @click.native="collateNotes($event)" data-collate="date">最新发表</router-link></li>
			</ul>
			<router-link to="" class="write"><i></i>写游记</router-link>
		</div>
		
		
		
		<!-- 下拉选项框导航栏 -->
		<div class="tn_subNav" v-else>
			
			
			
			<div class="drop_down" @mouseenter="Drop($event)" :class="{drop_down_on:isDrop=='hot'}" data-type="hot">
				<div class="content">
					最热游记
					<i></i>
				</div>
				<div class="drop" v-show="isDrop=='hot'" @mouseleave="Drop_off($event)">
					<ul>
						<li @click="collateNotes($event)" :class="{active:collate=='reading'}" data-collate="reading">最热游记</li>
						<li @click="collateNotes($event)" :class="{active:collate=='date'}" data-collate="date">最新游记</li>
					</ul>
				</div>
			</div>
			
			
			
			<div class="drop_down"  data-type="time" @mouseenter="Drop($event)" :class="{drop_down_on:isDrop=='time'}">
				<div class="content">按出发时间<i></i></div>
				<div class="drop" v-show="isDrop=='time'" @mouseleave="Drop_off($event)">
					<ul>
						<li class="active">不限</li>
						<li>1-2</li>
						<li>3-4</li>
						<li>5-6</li>
						<li>7-8</li>
						<li>9-10</li>
						<li>11-12</li>
					</ul>
				</div>
			</div>
			
			
			
			<div class="drop_down" data-type="pay" @mouseenter="Drop($event)" :class="{drop_down_on:isDrop=='pay'}">
				<div class="content">按人均花费<i></i></div>
				<div class="drop" v-show="isDrop=='pay'" @mouseleave="Drop_off($event)">
					<ul>
						<li class="active">不限</li>
						<li>1-999</li>
						<li>1K-6K</li>
						<li>6K-20K</li>
						<li>20K以上</li>
					</ul>
				</div>
			</div>
			
			
			
			<div class="drop_down" data-type="date" @mouseenter="Drop($event)" :class="{drop_down_on:isDrop=='date'}">
				<div class="content">按出行天数<i></i></div>
				<div class="drop" v-show="isDrop=='date'" @mouseleave="Drop_off($event)">
					<ul>
						<li class="active">不限</li>
						<li>3天以下</li>
						<li>4-7天</li>
						<li>8-14天</li>
						<li>15天以上</li>
					</ul>
				</div>
			</div>
			
			
			
			
		</div>
		<!-- 游记内容区 -->
		<div class="content">
			<!--  -->
			<div class="tn_item" v-for="(t,i) of notes" :key="i">
				<!-- <img src="/img/homepage/正文游记缩略图.jpg" > -->
				<!-- <img src="/img/travel_notes/note_2.jpeg" alt=""> -->
				<div class="left">
					<img :src="t.pic">
				</div>
				<div class="right">
					<dl>
						<dt><router-link to="">{{t.title}}</router-link></dt>
						<dd><router-link to="">{{t.content}}</router-link></dd>
					</dl>
					<div>
						<span><i></i><router-link :to="`/mdd_details/${t.place}`">{{t.place}}</router-link>,by</span>
						<span>
							<img :src="t.author_pic" >
							<router-link to="">{{t.author}}</router-link>
						</span>
						<span><i></i>{{t.reading}}/{{t.comment}}</span>
						<span><em>{{t.good}}</em><router-link to=""></router-link></span>
					</div>
				</div>
			</div>
		</div>
		
		<div class="paging">
			<ul @click="changeHash('#travelnotes')">
				<li><span>共{{pageCount}}页/{{count}}条</span></li>
				<li class="active" @click="prevPage" v-show="page !=1"><a><<上一页</a></li>
				<li v-for="i of pageCount" :key="i" :class="{active:page==i}" @click="changePage(i)"><a>{{i}}</a></li>
				<li class="active" @click="nextPage" v-show="page !=10"><a>下一页</a></li>
			</ul>
		</div>
		
		
	</div>
</template>

<script>
	
	export default{
		data(){
			return {
				place:"",
				placeId:"",
				// 是否打开筛选分类选项框
				screenIsShow:false,
				// 是否显示导航栏
				isShow:true,
				// 是否下拉菜单
				isDrop:"",
				// 游记数据
				notes:[],
				page:1,
				pageSize:10,
				pageCount:"",
				count:"",
				collate:"reading"
			}
		},
		methods:{
			// 通过游记筛选框输入/选中的内容，发送到服务器请求数据
			search(e){
				this.getPlaceId(this.place);
				this.screenIsShow=false;
			},
			collateNotes(e){
				this.collate=e.target.dataset.collate;
				this.getNotes(this.placeId,this.page,this.pageSize,this.collate)
				this.isDrop="";
			},
			// 打开游记分类筛选框
			screenDrop(e){
				if(e.target.dataset.name="screen"){
					console.log(e.target.dataset.name)
					this.screenIsShow=true;
				}
			},
			screenUp(e){
				if(e.target.dataset.name=="screenDrop"){
					this.screenIsShow=false;
				}
			},
			// 下拉选项框
			Drop(e){
				this.isDrop=e.target.dataset.type;
			},
			Drop_off(e){
				console.log(e.target.className)
				if(e.target.className!="drop_down"){
					this.isDrop="";
				}
			},
			// 
			changePage(i){
				this.page=i
			},
			prevPage(){
				if(this.page!=0){
					this.page-=1;
				}
			},
			nextPage(){
				if(this.page!=10){
					this.page+=1;
				}
			},
			// 点击分页按钮后返回顶部
			changeHash(idName){
				document.querySelector(idName).scrollIntoView(true)
			},
			// 
			getPlaceId(place){
				this.axios.get('/lvyou/place_list',{
					params:{
						place:place
					}
				}).then(result=>{
					this.placeId=result.data[0].id;
				})
			},
			getNotes(placeId,page,pageSize,collate){
				this.axios.get('/lvyou/travel_notes',{
					params:{
						placeId:placeId,
						page:page,
						pageSize:pageSize,
						collate:collate
					}
				}).then(result=>{
					this.count=result.data.count;
					this.pageCount=this.count/this.pageSize;
					for(let i=0;i<result.data.result.length;i++){
						if(result.data.result[i].family_id=="4"){
							result.data.result[i].place="东京"
						}else if(result.data.result[i].family_id=="10"){
							result.data.result[i].place="三亚"
						}
					}
					this.notes=result.data.result
				})
			}
		},
		mounted() {
			// 判断是否使用导航栏
			if(this.$route.path.split("/")[1]==''){
				this.isShow=true
			}else{
				this.isShow=false
			}
			// 页面加载完成后自动请求，此时placeid==""
			this.getNotes(this.placeId,this.page,this.pageSize,this.collate)
		},
		watch:{
			page(){
				this.getNotes(this.placeId,this.page,this.pageSize,this.collate)
			},
			placeId(){
				this.getNotes(this.placeId,this.page,this.pageSize,this.collate)
			},
			
		}
	}
</script>

<style scoped>
	.travelnotes{
		width: 100%;
	}
	/* 游记页头下拉框 */
	.travelnotes .tn_nav .dropdown{
		position: absolute;
		z-index: 99;
		top: 2.875rem;
		width: 45rem;height: 35rem;
		margin-left: -21px;
		background: #fff;
		border: 1px solid #e5e5e5;
		box-shadow: 0 3px 3px rgba(0,0,0,.15);
	}
	.travelnotes .tn_nav .dropdown .notesSearch{
		margin: 2.5rem 1.875rem;
	}
	.travelnotes .tn_nav .dropdown .notesSearch .right{
		width: 35.75rem;height: 4.625rem;
		margin-left: 5.375rem;
	}
	.travelnotes .tn_nav .dropdown .notesSearch .left{
		float: left;
		width: 56px;
		text-align: right;
		font-size: 16px;
		color: #333;
		line-height: 24px;
	}
	.travelnotes .tn_nav .dropdown .notesSearch input{
		width: 348px;
		padding: 0 35px 0 15px;
		border: 1px solid #efefef;
		background-color: #efefef;
		height: 38px;
		border-radius: 4px;
		line-height: 38px;
		font-size: 14px;
		vertical-align: top;
	}
	.travelnotes .tn_nav .dropdown .notesSearch ul{
		margin-top: 15px;
	}
	.travelnotes .tn_nav .dropdown .notesSearch ul>li{
		display: inline-block;
		margin-right: 0.625rem;
	}
	/* 兴趣分类 */
	.travelnotes .tn_nav .dropdown .interest{
		margin: 2.5rem 1.875rem;
	}
	.travelnotes .tn_nav .dropdown .interest .right{
		width: 35.75rem;height: 4.625rem;
		margin-left: 5.375rem;
	}
	.travelnotes .tn_nav .dropdown .interest .left{
		float: left;
		width: 56px;
		text-align: right;
		font-size: 16px;
		color: #333;
		line-height: 24px;
	}
	.travelnotes .interest .right .interest_item li{
		display:inline-block;
		width: 16rem;height: 4.6875rem;
		margin: 0 30px 20px 0;
	}
	.travelnotes .interest .right .interest_item li a img{
		float: left;
		width: 6.875rem;height: 4.6875rem;
	}
	.travelnotes .interest .right .interest_item li a div{
		float: right;
	}
	.travelnotes .interest_item li a div p:first-child{
		padding-left: 13px;
		margin-bottom: 10px;
		font-size: 1rem;
		color: #333333;
	}
	.travelnotes .interest_item li a div p:nth-child(2){
		padding-left:10px;
		font-size: 0.75rem;
		color: #999;
	}
	/* ======================= */
	.travelnotes a{
		color: #333333;
	}
	.travelnotes .tn_nav {
		position: relative;
		width: 100%;
		border-bottom: 1px solid #e4e4e4;
		margin-bottom: 1.25rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-shrink: 0; }
	.travelnotes .tn_nav > ul {
	    display: flex;
	    justify-content: space-between;
	    align-items: center;
		height: 2.875rem;
	    flex-shrink: 0; }
	/* 最热游记 */
	.travelnotes .tn_nav > ul > li:first-child {
	      width: 10.625rem;
	      height: 100%;
	      padding-bottom: 0.375rem;
	      border-bottom: 3px solid transparent;
	      display: flex;
	      justify-content: center;
	      align-items: center;
	      flex-shrink: 0; }
	.travelnotes .tn_nav > ul > li:first-child > a {
	        display: inline;
	        font-size: 1.125rem; }
	.travelnotes .tn_nav > ul > li:first-child > span {
	        height: 1.375rem;
	        margin-left: 0.4375rem;
	        padding: 0 0.625rem 0 0.5rem;
	        border: 1px solid #e5e5e5;
	        display: flex;
	        flex-direction: n;
	        justify-content: center;
	        align-items: center;
	        flex-wrap: n;
	        flex-shrink: 0; }
	.travelnotes .tn_nav > ul > li:first-child > span > i {
	          width: 0.6875rem;
	          height: 0.5rem;
	          background: url(/img/sprites/index-sprites9.png) no-repeat 0 -8.125rem;
	          margin-right: 0.3125rem; }
	.travelnotes .tn_nav .screen{
		cursor: pointer;
	} 
	/* 最新发表 */
	.travelnotes .tn_nav > ul > li:last-child {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 7.5rem;
		height: 100%;
		padding-bottom: 0.375rem;
		border-bottom: 3px solid transparent;
	    font-size: 1.125rem; }
		/* 导航被选中时候的样式 */
		.travelnotes .tn_nav > ul > li.active{
			border-bottom: 3px solid #ff9d00;
		}
		.travelnotes .tn_nav > ul > li.active>a{
			color: #ff9d00;
		}
	.travelnotes .tn_nav > .write {
	    width: 8.75rem;
	    height: 2.25rem;
	    background: #ff9d00;
	    border-radius: 0.25rem;
	    font-size: 1rem;
	    color: #FFFFFF;
	    text-align: center;
	    line-height: 2.25rem;
	    display: flex;
	    justify-content: center;
	    align-items: center;
	    flex-shrink: 0; 
	}
	.travelnotes .tn_nav>.write:hover{
		background: #ff8a00;
	}
	.travelnotes .tn_nav > a > i {
	      width: 1.125rem;
	      height: 1.0625rem;
	      background: url(/img/sprites/index-sprites9.png) no-repeat 0px 0px;
	      margin-right: 5px; }
	/* 游记副导航栏样式 */
	.travelnotes .tn_subNav{
		position: relative;
		display: flex;
		width: 100%;
		align-items: center;
		margin-bottom: 0.9375rem;
	}
	.travelnotes .tn_subNav .drop_down{
		width: 7.5rem;height: 1.75rem;
		margin-right: 0.3125rem;
		border: 1px solid #E4E4E4;
		background: #fff;
		color: #666666;
		font-size: 0.75rem;
		line-height: 1.75rem;
		border-radius: 0.25rem;
	}
	.travelnotes .tn_subNav .drop_down.drop_down_on{
		cursor: pointer;
		color: #FF9D00;
	}
	.travelnotes .tn_subNav .drop_down.drop_down_on i{
		background: url(/img/sprites/index-sprites9.png) no-repeat -30px -30px;
	}
	.travelnotes .tn_subNav .drop_down .content{
		position: absolute;
		z-index: 23;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 7.5rem;
		padding:0 0.8125rem;
	}
	.travelnotes .tn_subNav .drop{
		position: absolute;
		z-index: 20;
		top: 0;
		width: 7.5rem;height: 280px;
		background: #fff;
		font-size: 0.75rem;
		line-height: 1.75rem;
		border-radius: 0.25rem;
		border: 1px solid #FF9D00;
		/* color: #FF9D00; */
	}
	.travelnotes .tn_subNav .drop ul{
		padding-top: 28px;
	}
	.travelnotes .tn_subNav .drop ul>li{
		padding:0 0.8125rem;
		margin: 1px 0;
		font-size: 0.875rem;
		color: #666;
	}
	.travelnotes .tn_subNav .drop ul>li.active{
		background: #eeeeee;
	}
	.travelnotes .tn_subNav .drop ul>li:hover{
		background: #eeeeee;
	}
	.travelnotes .tn_subNav .drop_down i{
		width: 0.75rem;height: 0.375rem;
		background: url(/img/sprites/index-sprites9.png) no-repeat 0 -30px;
	}
	/*  */
	.travelnotes .tn_item {
		box-sizing: content-box;
		position: relative;
		width: 100%;height: 9.375rem;
		padding: 0.9375rem 0;
	}
	.travelnotes .tn_item:hover{
		background-color: #f8f8f8;
		padding: 15px;
		margin: 0 -15px;
	}
	.travelnotes .tn_item:after{
		content: "";
		display: block;
		clear: both;
	}
	.travelnotes .tn_item>.left{
		position: absolute;
		width: 13.75rem;height: 9.375rem;
	}
	.travelnotes .tn_item:hover>.right>dl>dt>a{
		color: #FF9D00;
	}
	.travelnotes .tn_item>.left>img{
		width: 100%;height: 100%;
		object-fit: cover;
	}
	.travelnotes .tn_item>.right{
		margin-left: 13.75rem;
		line-height: 1.25rem;
		padding-left: 15px;
	}
	.travelnotes .tn_item>.right>dl>dt>a{
		width: 89%;
		height: 1.625rem;
		margin-bottom: 0.625rem;
		font-size: 18px !important;
		line-height: 1.625rem; 
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
	.travelnotes .tn_item>.right>dl>dd>a{
		color: #666666;
		display: -webkit-box; 
		-webkit-box-orient: vertical; 
		text-overflow: ellipsis; 
		-webkit-line-clamp: 3;
		overflow : hidden;

	}
	.travelnotes .tn_item > div:nth-child(2) > dl {
	      width: 100%;
	      height: 7.3125rem; }
	
	
	.travelnotes .tn_item > div:nth-child(2) > div:last-child {
	      position: relative;
	      display: flex;
	      flex-direction: n;
	      justify-content: n;
	      align-items: center;
	      flex-wrap: n;
	      flex-shrink: 0; }
	.travelnotes .tn_item > div:nth-child(2) > div:last-child > span {
	        height: 2.0625rem;
	        margin-right: 0.625rem;
	        display: flex;
	        flex-direction: n;
	        justify-content: n;
	        align-items: center;
	        flex-wrap: n;
	        flex-shrink: 0; }
	.travelnotes .tn_item > div:nth-child(2) > div:last-child > span a {
	          color: #ff9d00; }
	.travelnotes .tn_item > div:nth-child(2) > div:last-child > span img {
		width: 1rem;height: 1rem;
	          border-radius: 50%;
	          margin-right: 0.3125rem; }
	.travelnotes .tn_item > div:nth-child(2) > div:last-child > span:first-child i {
	        width: 0.875rem;
	        height: 1rem;
	        background: url(/img/sprites/index-sprites9.png) no-repeat 0 -50px;
	        margin-right: 0.3125rem; }
	.travelnotes .tn_item > div:nth-child(2) > div:last-child > span:first-child a {
	        color: #666666; }
	.travelnotes .tn_item > div:nth-child(2) > div:last-child > span:first-child a:hover {
	          color: #ff9d00;
	          text-decoration: underline; }
	.travelnotes .tn_item > div:nth-child(2) > div:last-child > span:nth-child(3) i {
	        width: 1.125rem;
	        height: 0.875rem;
	        background: url(/img/sprites/index-sprites9.png) no-repeat -30px -50px;
	        margin-right: 0.3125rem; }
	.travelnotes .tn_item > div:nth-child(2) > div:last-child > span:last-child {
	        position: absolute;
	        right: 0; }
	.travelnotes .tn_item > div:nth-child(2) > div:last-child > span:last-child > em {
	          color: #ff9d00; }
	.travelnotes .tn_item > div:nth-child(2) > div:last-child > span:last-child > a {
	          width: 2.375rem;
	          height: 2.0625rem;
	          background: url(/img/sprites/index-sprites9.png) no-repeat -60px 0;
	          margin-left: 0.5rem; }
	/* 分页按钮组样式 */
	.travelnotes .paging ul{
		display: flex;
		justify-content: flex-end;
		align-items: center;
		padding: 1.25rem 0;
		
	}
	.travelnotes .paging ul>li{
		margin: 0 0.0625rem;
		font-size: 0.75rem;
		color: #fff;
		line-height: 1.5rem;
		border-radius: 0.25rem;
		cursor: pointer;
	}
	.travelnotes .paging ul>li>a{
		padding: 0 0.4375rem;
	}
	
	
	.travelnotes .paging span{
		padding-right: 0.3125rem;
		color: #999999;
	}
	.travelnotes .paging ul>li:not(:first-child):hover{
		background: #C9C9C9;
	}
	.travelnotes .paging ul>li.active{
		background: #FF9D00 ;
	}
	.travelnotes .paging ul>li.active>a{
		color: #FFF !important;
	}
	.travelnotes .paging ul>li.active:hover{
		background: #ff8a00;
	}
	/*  */
</style>
