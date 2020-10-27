<template>
	<div class="mdd_crumb">
		<ul>
			<li>
				<router-link to="/place_list" class="clear_padding" name="">目的地</router-link>
			</li>
			
			<li >
				<router-link :to="`/mdd_details/${country}`" :class="{active:selected=='country'}" name="country" @mouseenter.native='show' @mouseleave.native="clear">
					{{country}}
					<i class="drop_corner"></i>
				</router-link>
				<!-- 下拉菜单 情况1-->
				<div class="drop_menu" v-if="selected=='country' && city!=``" @mouseenter="clearTimer" @mouseleave="clear">
					<i class="arrow">
						<b></b>
					</i>
					<dl>
						<dt><router-link to="/place_list">热门地区</router-link></dt>
						<dd v-for="(t,i) of country_citys" :key="i"><router-link :to="`/mdd_details/${t.place}`">{{t.place}}</router-link></dd>
						
					</dl>
					<div class="more">
						<router-link to="/place_list">>>更多地区</router-link>
					</div>
				</div>
				<!-- 下拉菜单 情况2 -->
				<div class="drop_menu" v-if="selected=='country' && city==`` " @mouseenter="clearTimer" @mouseleave="clear">
					<i class="arrow">
						<b></b>
					</i>
					
					<dl>
						<dd><router-link to="">{{country}}行程线路</router-link></dd>
						<dd><router-link to="">{{country}}景点</router-link></dd>
						<dd><router-link to="">{{country}}酒店</router-link></dd>
						<dd><router-link to="">{{country}}餐饮</router-link></dd>
						<dd><router-link to="">{{country}}购物</router-link></dd>
						<dd><router-link to="">{{country}}娱乐</router-link></dd>
						<dd><router-link to="">{{country}}当地玩</router-link></dd>
						<dd><router-link to="">{{country}}自由行</router-link></dd>
					</dl>
					
				</div>
			</li>
			<li v-show="city!=``">
				<router-link :to="`/mdd_details/${city}`" data-more  @mouseenter.native='show' @mouseleave.native="clear" name="city" :class="{active:selected=='city'}">{{city}}<i class="drop_corner" ></i></router-link>
				<div class="drop_menu" v-if="selected=='city'" @mouseenter="clearTimer" @mouseleave="clear">
					<i class="arrow">
						<b></b>
					</i>
					
					<dl>
						<dd><router-link to="">{{city}}行程线路</router-link></dd>
						<dd><router-link to="">{{city}}景点</router-link></dd>
						<dd><router-link to="">{{city}}酒店</router-link></dd>
						<dd><router-link to="">{{city}}餐饮</router-link></dd>
						<dd><router-link to="">{{city}}购物</router-link></dd>
						<dd><router-link to="">{{city}}娱乐</router-link></dd>
						<dd><router-link to="">{{city}}当地玩</router-link></dd>
						<dd><router-link to="">{{city}}自由行</router-link></dd>
					</dl>
					
				</div>
			</li>
			<li>
				<router-link to="" class="clear_padding" v-if="city!=``">{{city}}攻略</router-link>
				<router-link to="" class="clear_padding" v-else>{{country}}旅游攻略</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	
	export default{
		data(){
			return{
				placeId:"",
				// 国家的名称
				country:"",
				// 城市的名称
				city:"",
				// 国家包含的所有城市
				country_citys:[],
				navName:'',
				selected:'',
				timer:null,
				
			}
		},
		methods:{
			show(e){
				clearTimeout(this.timer);
				this.selected=="";
				this.selected=e.target.name;
			},
			clear(e){
				if(e.target.nodeName=="A"){
					this.timer=setTimeout(()=>{
						this.selected='';
					},500)
				}else if(e.target.nodeName=="DIV"){
					this.selected='';
				}
				
			},
			clearTimer(){
				clearTimeout(this.timer)
			},
			getPlace(placeId){
				this.axios.get('/lvyou/place_list',{
					params:{
						id:placeId
					}
				}).then(result=>{
					if(result.data[0].family_id!=0){
						this.city=result.data[0].place
						this.$parent.place=result.data[0].place
						this.getPlace(result.data[0].family_id)
					}else{
						this.country=result.data[0].place
						this.axios.get('/lvyou//place_include',{
							params:{
								id:result.data[0].id
							}
						}).then(result=>{
							this.country_citys=result.data;
						})
					}
				})
			}
		},
		watch:{
			placeId(){
				this.getPlace(this.placeId)
			}
		},
		mounted(){
			
		}
		
	}
</script>

<style>
	.mdd_crumb{
		width: 100%;
		padding:0.9375rem 0 !important;
		box-sizing: content-box;
	}
	.mdd_crumb a{
		color: #666;
		font-size: 0.75rem;
	}
	.mdd_crumb>ul{
		display: flex;
		position: relative;
	}
	.mdd_crumb>ul>li>a{
		float: left;
		position: relative;
		display: block;
		height: 1.25rem;
		padding: 0 13px 0 5px;
		line-height: 1.25rem;
	}
	.mdd_crumb>ul>li>a.active{
		background: #ff7000;
		color: #fff !important;
	}
	.mdd_crumb>ul>li>a.active>.drop_corner{
		border-top: 0.1875rem solid #fff !important;
	}
	.mdd_crumb>ul>li:not(:last-child):after{
		content: ">";
		margin: 0 0.375rem;
		color: #999;
		font-family: 'simsun';
		font-style: normal;
		line-height: 20px;
	}
	.mdd_crumb>ul>li:last-child>a{
		color: #ff7000;
		font-weight: bold;
	}
	.mdd_crumb .drop_corner{
		position: absolute;
		top: 0;right: 3px;
		margin: 0.5rem 0 0 0.1875rem;
		width: 0;
		height: 0;
		border-top: 0.1875rem solid #ff7000;
		border-left: 0.1875rem dashed transparent;
		border-right: 0.1875rem dashed transparent;
		overflow: hidden;
		font-size: 0;
		
	}
	/* 下拉菜单样式 */
	.mdd_crumb .drop_menu{
		position: absolute;
		z-index: 50;
		top: 30px;
		padding: 10px 10px;
		background-color: #fff;
		border: 1px solid #e5e5e5;
	}
	.mdd_crumb .drop_menu .arrow{
		position: absolute;
		left: 20px;
		top: -6px;
		width: 0;
		height: 0;
		border-bottom: 6px solid #e5e5e5;
		border-left: 6px dashed transparent;
		border-right: 6px dashed transparent;
		font-size: 0;
	}
	.mdd_crumb .drop_menu .arrow>b{
		position: absolute;
		left: -6px;
		top: 2px;
		width: 0;
		height: 0;
		border-bottom: 6px solid #fff;
		border-left: 6px dashed transparent;
		border-right: 9px dashed transparent;
		font-size: 0;
		overflow: hidden;
	}
	.mdd_crumb .drop_menu dt>a{
		margin-top: 0.25rem;
		padding: 0 5px;
		color: #333;
		font-weight: bold;
	}
	.mdd_crumb .drop_menu dd>a{
		width: 137px;height: 1.3125rem;
		margin-top: 0.25rem;
		padding: 0 5px;
		font-size: 0.75rem;
		color: #666;
		line-height: 1.5625rem;
	}
	.mdd_crumb .drop_menu dd:hover>a{
		background: #fff1d7;
		color: #FF9D00;
	}
	.mdd_crumb .drop_menu .more>a{
		float: right;
		margin-top: 0.25rem;
		text-align: right;
		color: #FF9D00;
	}
</style>
