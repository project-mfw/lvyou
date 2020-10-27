<template>
	<div class="jd_map">
		<div class="top">
			<div class="mfw-logo">
				
			</div>
			<div class="place">
				<i></i><router-link to="">{{place}}</router-link>
			</div>
			<div class="title">
				<ul>
					<li class="active">吃喝玩乐</li>
					<li>周边目的地</li>
					<li>搜索</li>
				</ul>
			</div>
		</div>
		<div class="content">
			<div class="left" id="map"></div>
			<div class="right">
				<ul class="nav">
					<li class="active">景点</li>
					<li>美食</li>
					<li>购物</li>
					<li>路线</li>
					<li>收藏</li>
				</ul>
				<div class="subtitle">
					<router-link to="">{{place}}</router-link> 共 <router-link to="">{{jd_list.length}}</router-link>个<router-link to="">景点</router-link>
				</div>
				<ul class="jd_list" @click="toPoint($event)"> 
					<li v-for="(t,i) of jd_list" :key="i" :class="{active:checkedJD==i}"  :data-num="i">
						<span class="num" :data-num="i">{{i+1}}</span :data-num="i">
						<div class="jd_item" :data-num="i">
							<img :src="t.pic" alt="" :data-num="i">
							<div :data-num="i">
								<p class="name" :data-num="i">{{t.name}}</p>
								<p class="name_en" :data-num="i">{{t.name_en}}</p>
								<p class="comment" :data-num="i">
									<router-link to="" :data-num="i">{{t.comment}}</router-link>条点评，<router-link to="" :data-num="i">{{t.been}}</router-link>人去过
								</p>
								<p class="move" :data-num="i">查看周边<router-link to="">{{t.comment}}</router-link>家酒店</p>
							</div>
							
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>


<script>
	
	export default{
		data(){
			return{
				place:"",
				placeId:'',
				jd_list:[],
				checkedJD:0,
				pointX:[],
				pointY:[],
				
			}
		},
		methods:{
			toPoint(e){
				let num=Number(e.target.dataset.num);
				this.checkedJD=num
				let x=this.pointX[num]
				let y=this.pointY[num]
				this.getPoint(x,y)
			},
			getPoint(x,y){
				let mapDiv=document.getElementById("map");
				let map=new BMap.Map(mapDiv);
				// let point=new BMap.Point(this.pointX[1],this.pointY[1]);
				let point=new BMap.Point(x,y);
				// let point=new BMap.Point(139.885069,35.626698);
				map.enableDragging()
				map.enableScrollWheelZoom()
				map.centerAndZoom(point,13)
				let iconSize=new BMap.Size(19.,25)
				let icon=new BMap.Icon('/img/sprites/marker_red_sprite.png',iconSize)
				let mk=new BMap.Marker(point)
				map.addOverlay(mk);
			},
			getListJD(PlaceId){
				console.log(this.placeId)
				this.axios.get('/lvyou/jd_list',{
					params:{
						id:PlaceId
					}
				}).then(result=>{
					console.log(result.data)
					this.jd_list=result.data
					let arr=[]
					for(let i=0;i<result.data.length;i++){
						let numx=Number(result.data[i].point.split(',')[0])
						let numy=Number(result.data[i].point.split(',')[1])
						this.pointX.splice(i,1,numx)
						this.pointY.splice(i,1,numy)
					}
					
					this.getPoint(this.pointX[3],this.pointY[3])
				})
			}
			
		},
		watch:{
			place(){
				document.title=this.place+'地图，'+this.place+'旅游景点_娱乐_购物_美食地图查询'
			}
		},
		created(){
			this.placeId=this.$route.params.id
			this.place=this.$route.query.place
			this.getListJD(this.placeId)
			
		},
		mounted(){
			this.getListJD(this.placeId)
			let mapDiv=document.getElementById("map");
			let map=new BMap.Map(mapDiv);
			// let point=new BMap.Point(this.pointX[1],this.pointY[1]);
			let x=this.pointX[1];
			let y=this.pointY[1];
			let point=new BMap.Point(x,y);
			// let point=new BMap.Point(139.885069,35.626698);
			map.enableDragging()
			map.enableScrollWheelZoom()
			map.centerAndZoom(point,13)
			let iconSize=new BMap.Size(19.,25)
			let icon=new BMap.Icon('/img/sprites/marker_red_sprite.png',iconSize)
			let mk=new BMap.Marker(point)
			map.addOverlay(mk);
			mk.onmouseover=function(){
				console.log(111)
			}
		}
	}
	
</script>

<style scoped>
	.jd_map{
		position: fixed;
		top: 0;bottom: 0;
		margin: auto;
		width: 100%;
		height: 100%;
	}
	body{
		height: 100%;
	}
	body::-webkit-scrollbar{
		display: none;
	}
	.top{
		position: relative;
		height: 3.125rem;
		border-bottom: 1px solid #e7e7e7;
		box-shadow: 0 3px 3px rgba(0,0,0,0.1);
	}
	.mfw-logo{
		position: absolute;
		top: 11px;
		left: 31px;
		width: 7.5rem;height: 2.0625rem;
		background: url(/img/sprites/header-small-sprites2.png) no-repeat 0 0;
	}
	.place{
		/* width: 100%; */
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		margin-right: 25rem;
	}
	.place a{
		font-size: 20px;
		color: #111;
		line-height: 1.625rem;
	}
	.place i{
		display: inline-block;
		width: 15px;
		height: 20px;
		margin-top: -3px;
		margin-right: 10px;
		background: url(/img/sprites/sprites.png) no-repeat 0 -100px;
	}
	.title{
		position: absolute;
		top: 0;right: 0;
		width: 25rem;
	}
	.title ul>li{
		display: inline-block;
		width: 33.333%;height: 100%;
		line-height: 3.125rem;
		text-align: center;
		cursor: pointer;
	}
	.title ul>li:not(last-child){
		border-left: 1px solid #EEEEEE;
	}
	.title ul>li.active{
		background: #FF9D00;
		color: #fff;
	}
	.content {
		position: relative;
		width: 100%;
		height: 100%;
	}
	.content>#map{
		position: absolute;
		right: 0;
		display: block;
		width: 100%;
		height: 100%;
		/* padding-right: 25rem; */
		margin-right: 25rem;
	}
	.content>.right{
		position: absolute;
		z-index: 200;
		right: 0;
		width: 25rem;height: 100%;
	}
	.right .nav{
		display: flex;
		width: 100%;
		height: 50px;
	}
	.right .nav li{
		display: table table-cell;
		flex: 0 0 20%;
		border-bottom: 3px solid transparent;
		text-align: center;
		line-height: 3rem;
		cursor: pointer;
	}
	.right .nav li:hover{
		text-decoration: underline;
	}
	.right .nav li.active{
		border-bottom: 3px solid #FF9D00;
		color: #FF9D00;
	}
	.right .subtitle{
		padding: 10px 0 10px 20px;
		background: #fafafa;
		font-size: 12px;
		color: #999;
		boder: 1px solid #eee;
	}
	.right .jd_list{
		height: 82%;
		/* height: 2000px; */
		overflow: auto;
	}
	.right .jd_list li{
		position: relative;
		height: 126px;
		padding: 20px 20px 20px 54px;
		border-bottom: 1px solid #eee;
		cursor: pointer;
		
	}
	.right .jd_list li.active{
		background: #fafafa;
	}
	.right .jd_list li:hover{
		background: #fafafa;
	}
	.right .jd_list li .num{
		display: inline-block;
		width: 20px;
		height: 20px;
		line-height: 18px;
		text-align: center;
		position: absolute;
		left: 20px;
		top: 20px;
		color: #FF9D00;
		border-radius: 4px;
		border: 1px solid #FF9D00;
	}
	.right .jd_list li.active>.num{
		background: #FF9D00;
		color: #fff;
	}
	.right .jd_list li:hover>.num{
		background: #FF9D00;
		color: #fff;
	}
	.right .jd_list li .name{
		color: #FF9D00;
	}
	.jd_item img{
		float: left;
		width: 3.75rem;height: 3.75rem;
		object-fit: cover;
	}
	.jd_item div:nth-child(2){
		margin-left: 80px;
	}
	.jd_item .name{
		font-size: 16px;
		color: #333;
		white-space: nowrap;
		text-overflow: ellipsis;
		width: 164px;
		overflow: hidden;
	}
	.jd_item .name_en{
		font-size: 12px;
		color: #bbb;
		display: block;
	}
	.jd_item p{
		color: #999999;
	}
	.jd_item .comment{
		line-height: 25px;
	}
	.jd_item .move a{
		color: #1283f8;
	}
</style>
