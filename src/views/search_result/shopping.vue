<template>
	<div class="shopping">
		<ul class="shopping_catalog">
			<li><router-link to="">全部</router-link></li>
			<li><router-link to="">自由行</router-link></li>
			<li><router-link to="">跟团游</router-link></li>
			<li><router-link to="">门票</router-link></li>
			<li><router-link to="">一日游</router-link></li>
			<li><router-link to="">当地参团</router-link></li>
			<li><router-link to="">当地体验</router-link></li>
			<li><router-link to="">特价机票</router-link></li>
			<li><router-link to="">半自助游</router-link></li>
			<li><router-link to="">邮轮</router-link></li>
			<li><router-link to="">签证/入台证</router-link></li>
			<li><router-link to="">演出展览</router-link></li>
			<li><router-link to="">美食</router-link></li>
			<li><router-link to="">酒店度假</router-link></li>
			<li><router-link to="">接送机/站</router-link></li>
			<li><router-link to="">租车</router-link></li>
			<li><router-link to="">包车/拼车</router-link></li>
			<li><router-link to="">交通卡票</router-link></li>
			<li><router-link to="">wifi</router-link></li>
			<li><router-link to="">电话卡</router-link></li>
			<li><router-link to="">自由行定制</router-link></li>
			<li><router-link to="">当地定制</router-link></li>
			<li><router-link to="">旅游服务</router-link></li>
		</ul>
		<ul class="product_box">
			<li v-for="(t,i) of shopping" :key="i">
				<div class="product">
					<div class="left">
						<router-link to=""><img :src="t.pic" ></router-link>
					</div>
					<div class="right ">
						<div class=""><router-link to=""><h4>{{t.title}}</h4></router-link><router-link to="" class="seg_price">￥{{t.price}}</router-link></div>
						<router-link to="">{{t.subtitle}}</router-link>
						<span>已售{{t.sold}}</span>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				placeId:"",
				shopping:null
			}
		},
		methods:{
			getShopping(placeId){
				this.axios.get('/lvyou/shopping',{
					params:{
						id:placeId
					}
				}).then(result=>{
					console.log(result.data)
					this.shopping=result.data
				})
			}
		},
		watch:{
			placeId(){
				this.getShopping(this.placeId)
			}
		},
		mounted(){
			this.getShopping(this.placeId)
		}
		
	}
</script>

<style scoped>
	.shopping a{
		color: #333;
	}
	/* 旅行商城目录 */
	.shopping_catalog{
		padding: 0.75rem 0;
	}
	.shopping_catalog li{
		display: inline-block;
		width: 6.875rem;
		line-height: 1.5rem;
	}		
	.shopping_catalog li>a{
		color: #1493e3;
	}
	/* 旅行商城样式 */
	.product_box li{
		margin-top: 20px;
	}
	.shopping{
	}
	.product{
		display: flex;
		height: 110px;
	}
	.product_box img{
		width: 100%;height:100%;
		object-fit: cover;
	}
	.product_box .left{
		width:35%; height: 90px;
		margin-top: 10px;
	}
	.product_box .left a{
		width: 100%;height:100%;
	}
	
	.product_box .right{
		width: 100%;height: 100px !important;
		margin-left: 10px;
		margin-top: 5px;
	}
	.product_box .right>a{
		height: 40px;
	}
	.product_box .right>div:first-child{
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 95%;
		margin-bottom: 8px;
		line-height: 1.25rem;
		
	}
	.product_box .right>div:first-child>a:first-child{
		width: 40%;
	}
	.product_box .right>div:first-child>a>h4{
		
		font-size: 1.125rem;
		text-overflow: ellipsis;
		white-space: pre;
		overflow:hidden;
	}
	.product_box .right :first-child>a:last-child{
		font-size: 1rem;
		color: #FF7000;
		font-weight: bold;
	}
	.product_box .right>a:nth-child(2){
		width: 100%;
		margin-bottom: 5px;
		font-size: 0.8125rem;
		color: #666666;
		line-height: 1.25rem;
		display: -webkit-box;
		-webkit-box-orient: vertical; 
		text-overflow: ellipsis; 
		-webkit-line-clamp: 2;
		overflow : hidden;
	}
	.product_box .right>a:nth-child(2):hover{
		color: #FF9D00;
		text-decoration: underline;
	}
	.product_box .right>span{
		align-self: flex-start;
		font-size: 0.75rem;
		color: #999999;
	}
</style>
