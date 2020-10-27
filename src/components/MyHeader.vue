<template>
	<div id="header" class="header">
		<div id="logo" class="logo">
			<router-link to="/"></router-link>
		</div>
		<!-- 利用事件委托在父元素上为每个a标签绑定单击事件 -->
		<div id="nav" class="nav flex_row around" @click="active">
			<router-link to="/" :class="{active:checked==`index`}" name="index">首页</router-link>
			<router-link to="/place_list" :class="{active:checked==`place`}" name="place">目的地</router-link>
			<router-link to="" :class="{active:checked==`raiders`}" name="raiders">旅游攻略</router-link>
			<router-link to="/visa" :class="{active:checked==`visa`}" name="visa">办签证</router-link>
			<router-link to="" :class="{active:checked==`ticket`}" name="ticket">机票火车票</router-link>
			<router-link to="/hotel" :class="{active:checked==`hotel`}" name="hotel">订酒店</router-link>
			<router-link to="" :class="{active:checked==`forum`}" name="forum">社区</router-link>
			<router-link to="" :class="{active:checked==`app`}" name="app">APP</router-link>
			<router-link to="" class="nav-log"></router-link>
			<!-- 空div占位 -->
			<div :class="{space:checked==`index`,addSpace:checked!=`index`}"></div>
			<!-- 页头输入框 -->
			<div class="input" :class="{widening:change,Narrowing:!change}" v-show="checked!=`index`">
				<input type="text" @focus="enter" @blur="leave" :class="{change_input:change}" v-model="result" @keydown.13="search"><router-link to="" :class="{change_a:change}" @click="search"></router-link>
			</div>
		</div>
		
		<!-- 引入登录信息页组件 -->
		<div id="_user_info" class="_user_info flex_row wrap">
			<login-info></login-info>
		</div>
		
	</div>
</template>
<script>
	import loginInfo from './login_info.vue'
	export default{
		data(){
			return {
				// 保存搜索框搜索结果
				result:"",
				placeId:"",
				place:"",
				change:false,
				checked:"index"
			}
		},
		methods:{
			// 
			active(e){
				if(e.target.nodeName=="A"){
					this.checked=e.target.name;
				}
			},
			// 输入框添加获得焦点和失去焦点事件
			enter(){
				this.change=true
			},
			leave(){
				this.change=false
			},
			// 将页头输入框输入的结果拼接到当前页面的$route上
			search(){
				this.axios('/lvyou/place_list',{
					params:{
						place:this.result
					}
				}).then(result=>{
					this.placeId=result.data[0].id
				})
				if(this.$route.path.split("/")[1]=='place_list'){
					this.$router.push('/search/'+this.result)
				}else{
					this.$router.push('/mdd_details/'+this.result)
				}
			}
		},
		watch:{
			result(){
				
			}
		},
		mounted(){
			switch(this.$route.path.split("/")[1]){
				case "":
					this.checked="index"
					break;
				case "mdd_overview"	:
					this.checked="place"
					break;
				case "mdd_details" :
					this.checked="place"
					break;
				case "jd" :
					this.checked="place"
					break;
				case "jd_details" :
					this.checked="place"
					break;
				case "place_list" :
					this.checked="place"
					break;
				case "visa" :
					this.checked="visa"
					break;
				case "hotel" :
					this.checked="hotel"
					break;
			}
			
		},
		components:{
			'login-info':loginInfo
		}
	}
</script>
<style scoped>
	/* 页头输入框 */
	.header{
		min-width: 1000px;
	}
	.header .input{
		position: absolute;
		right: 0px;
		width: 8.125rem;
		padding: 1rem 0;
		flex-shrink:0;
	}
	.widening{
		width: 26.125rem !important;
		transition: all 0.5s ease;
	}
	.Narrowing{
		width: 8.125rem !important;
		transition: all 0.5s ease;
	}
	.change_input{
		border-color: #ff9d00 !important;
		background: #fff !important;
		box-shadow: 0 0 3px rgba(255,157,0,.5);
		color: #333;
	}
	.change_a{
		background: url(/img/sprites/header-sprites15.png) no-repeat -1.875rem -8.75rem !important;
	}
	.header .input>input{
		width: 100%;height: 2.25rem;
		padding: 0 0.625rem;
		background: #efefef;
		border: 1px solid #efefef;
		color: #666;
		line-height: 2.25rem;
		border-radius:0.25rem;
	}
	.header .input>a{
		position: absolute;
		top: 0;bottom: 0;right: 0.5rem;
		margin: auto;
		display: block;
		width: 1.25rem;height: 1.25rem;
		background: url(/img/sprites/header-sprites15.png) no-repeat -1.875rem -6.875rem;
	}
	.space{
		width: 110px;
	}
	.addSpace{
		width: 140px;
	}
	/* 从这里开始 */
	.header{
		position: relative;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		height:4.25rem;
		flex-shrink:0;
	}
	.header:after{
		content: "";
		display: block;
		position: absolute;
		left: 0;
		bottom: -2px;
		right: 0;
		width: 100%;
		height: 2px;
		border-top: 1px solid #d6d6d6;
		background-color: rgba(0,0,0,.06);
		filter: progid:DXImageTransform.Microsoft.gradient(enabled='true',startColorstr='#11000000',endColorstr='#11000000');
		overflow: hidden;
	}
	.header a{
		color:#333333;
		font-size:1rem
	}
	.caret-down:hover{border-top: 4px solid #ff9d00;}
	
	.logo a{
		display: block;
		/* flex: 0 0 20%; */
		width: 8.5rem;height:2.4375rem;
		background: transparent url(../../public/img/sprites/header-sprites15.png) no-repeat 0 0;
	}
	.nav{
		position: relative;
		display: flex;
		flex-shrink:0;
		/* flex:0 0 60% */
		height: 100%;
		margin-left: 25px;
	}
	.nav>a{
		height: 100%;
		display: block;
		padding: 0 0.833125rem;
		line-height:4.25rem;;
	}
	.nav>a:not(.active):hover{
		color: #ff9d00;
		border-bottom: 3px solid #ff9d00 !important;
	}
	
	.nav .active{
		color: #fff;
		background-color: #ff9d00;
	}
	.nav>.nav-log{
		display: block;
		width: 5.6875rem;height: 100%;
		border-bottom: 0.1875rem solid transparent;
		background: transparent url(../../public/img/sprites/mfwzx.png) no-repeat center;
		background-size:75px 30px;
		
	}
	._user_info{
		width:200px;
		margin-left: 4px;
		flex-shrink: 0;
	}
</style>