<template>
	<div class="login_info">
		<div class="login_info_on" v-if="isLogin">
			<router-link to="" class="btn">打卡</router-link>
			<router-link to="" class="msg" name="msg" @mouseenter.native.stop="select($event)" @mouseleave.native.stop="leave($event)" :class="{active:selected==`msg`}"><i></i>消息
			
			</router-link>
			<div class="drop_menu" v-show="selected==`msg`" @mouseenter.stop="select($event)" @mouseleave.stop="leave($event)">
				<dd><router-link to="">私信</router-link></dd>
				<dd><router-link to="">小组消息</router-link></dd>
				<dd><router-link to="">系统通知</router-link></dd>
				<dd><router-link to="">问答消息</router-link></dd>
				<dd><router-link to="">回复消息</router-link></dd>
				<dd><router-link to="">喜欢与收藏</router-link></dd>
				<dd><router-link to="">好友动态</router-link></dd>
			</div>
			
			<router-link to="" class="user_pic" name="user_pic" @mouseenter.native.stop="select($event)" @mouseleave.native.stop="leave($event)" :class="{active:selected==`user_pic`}">
				<img :src="pic" :title="nickname">
			</router-link>
			<div class="drop_menu" v-show="selected==`user_pic`" @mouseenter.stop="select($event)" @mouseleave.stop="leave($event)">
				<dl>
					<dt><router-link to="">蜂蜜{{fans}}</router-link> / <router-link to="">金币{{gold}}</router-link></dt>
					<dd><router-link to=""><i class="icon-wo"></i>我的马蜂窝<span class="level">LV.{{this.level}}</span></router-link></dd>
					<dd><router-link to=""><i class="icon-writenotes"></i>写游记</router-link></dd>
					<dd><router-link to=""><i class="icon-ordernotes"></i>预约游记</router-link></dd>
					<dd><router-link to=""><i class="icon-path"></i>我的足迹</router-link></dd>
					<dd><router-link to=""><i class="icon-wenda"></i>我的问答</router-link></dd>
					<dd><router-link to=""><i class="icon-friend"></i>我的好友</router-link></dd>
					<dd><router-link to=""><i class="icon-collect"></i>我的收藏</router-link></dd>
					<dd><router-link to=""><i class="icon-route"></i>我的路线</router-link></dd>
					<dd><router-link to=""><i class="icon-order"></i>我的订单</router-link></dd>
					<dd><router-link to=""><i class="icon-coupon"></i>我的优惠券</router-link></dd>
					<dd><router-link to=""><i class="icon-gonglve"></i>创作者开发平台</router-link></dd>
					<dd><router-link to=""><i class="icon-settings"></i>设置</router-link></dd>
					<dd><router-link to="" @click.native="quit"><i class="icon-logout"></i>退出</router-link></dd>
					
				</dl>
			</div>
		</div>
		<div class="login_info_off" v-else>
			<router-link to="" class="weibo-login"></router-link>
			<router-link to="" class="qq-login"></router-link>
			<router-link to="" class="weixin-login"></router-link>
			<router-link :to="{name:'login',params:{isRegist:true}}">登录</router-link>
			 | 
			<router-link :to="{name:'login',params:{isRegist:false}}">注册</router-link>
		</div>
	</div>
	
</template>

<script>
	export default{
		data(){
			return {
				// 请求并响应在网页上信息
				nickname:'',
				pic:'',
				level:'',
				gold:'',
				fans:'',
				// 是否登录成功
				isLogin:false,
				selected:"",
				timer:null,
				isEnter:false
			}
		},
		methods:{
			select(e){
				if(e.target.nodeName=="A"){
					this.selected=e.target.name;
					clearTimeout(this.timer)
				}
				if(e.target.nodeName=="DIV"){
					clearTimeout(this.timer)
				}
			},
			leave(e){
				if(e.target.nodeName=="A"){
					this.timer=setTimeout(()=>{
						this.selected="";
					},500)
				}
				if(e.target.nodeName=="DIV"){
					this.selected="";
				}
			},
			// 用户注销登录，退出账号
			quit(){
				this.isLogin=false;
				window.localStorage.setItem('userId','')
			}
		},
		mounted(){
			let id=window.localStorage.getItem('userId');
			console.log(id)
			if(id!=null && id!=""){
				this.isLogin=true;
				this.axios.get('/user/check_user',{
					params:{
						id:id
					}
				}).then(result=>{
					let {nickname,pic,level,gold,fans}=result.data[0]
					this.nickname=nickname;
					this.$store.commit('nickName',{nickname:nickname,pic:pic,level:level})
					this.pic=pic;
					this.level=level;
					this.gold=gold;
					this.fans=fans;
				})
			}else{
				this.isLogin=false;
			}
			
			// this.isLogin= this.$store.state.isLogin;
		}
	}
</script>

<style>
	/* 下拉菜单样式 */
	.login_info .drop_menu{
		position: absolute;
		z-index: 99999;
		top: 53px;
		width: 208px;
		padding-bottom: 15px;
		background: #fff;
		border: 1px solid #d6d6d6;
	}
	.login_info .drop_menu dt{
		height: 3.125rem;
		padding: 0 0.625rem 0 1.25rem; 
		margin-bottom: 10px;
		background: #FF9D00;
		color: #fff !important;
		line-height: 3.125rem;
	}
	.login_info .drop_menu dt a{
		color: #fff;
	}
	.login_info .drop_menu dd{
		
	}
	.login_info .drop_menu dd a{
		display: block;
		height: 2.25rem;
		padding: 0 0.625rem 0 1.25rem;
		color: #666666;
		line-height: 2.25rem;
	}
	.login_info .drop_menu dd a:hover{
		background: #eeeeee;
	}
	.login_info .drop_menu .level{
		    margin-left: 10px;
		    font-size: 14px;
		    color: #ef523d;
		    font-weight: bold;
	}
	.login_info .drop_menu dd a>i{
		width: 1rem;height: 1.0625rem;
		margin-right: 15px;margin-bottom:-3px;
		background: url(/img/sprites/header-sprites15.png) no-repeat -90px -50px;
		overflow: hidden;
	}
	.login_info .icon-wo{background-position: -90px -50px;}
	.login_info .icon-writenotes{background-position: -120px -50px !important;}
	.login_info .icon-ordernotes{background-position: -150px -110px !important;}
	.login_info .icon-icon-path{background-position: -150px -50px !important;}
	.login_info .icon-wenda{background-position: -180px -50px !important;}
	.login_info .icon-friend{background-position: -90px -80px !important;}
	.login_info .icon-collect{background-position: -120px -80px !important;}
	.login_info .icon-route{background-position: -180px -110px !important;}
	.login_info .icon-order{background-position: -150px -80px !important;}
	.login_info .icon-coupon{background-position: -180px -80px !important;}
	.login_info .icon-gonglve{background-position: -120px -140px !important;}
	.login_info .icon-settings{background-position: -90px -110px !important;}
	.login_info .icon-logout{background-position: -120px -110px !important;}
	.login_info{
		position: relative;
		width: 100%;
		height: 100%;
	}
	/* 登录成功界面 */
	.login_info_on{
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.login_info_on>a{
		color: #666;
	}
	.login_info_on .btn{
		width: 3.75rem;
		background: #1493e3;
		color: #fff;
		line-height: 1.5rem;
		text-align: center;
		border-radius: 0.25rem;
	}
	.login_info_on .msg{
		display: flex;
		align-items: center;
		line-height: 19px;
		white-space: nowrap;
	}
	.login_info_on .msg.active{
		color: #FF9D00;
	}
	.login_info_on .msg>i{
		width: 1.0625rem;height: 1.125rem;
		margin-right: 5px;
		background: url(/img/sprites/header-sprites13.png) no-repeat -3.6875rem -3.125rem;
	}
	.login_info_on .msg.active>i{
		background: url(/img/sprites/header-sprites13.png) no-repeat -3.6875rem -5rem;
	}
	.login_info_on .msg::after{
		content: "";
		display: inline-block;
		width: 0;height: 0;
		margin-left: 5px;
		border-top: 4px solid #666;
		border-left:4px solid transparent ;
		border-right:4px solid transparent ;
	}
	.login_info_on .msg.active::after{
		border-top: 4px solid #FF9D00;
	}
	.login_info_on>.user_pic{
		position: relative;
		padding-right: 14px;
	}
	.login_info_on>.user_pic>img{
		width: 2rem;height: 2rem;
		margin-top: 0.21875rem;
		border:0.125rem solid #fff;
		border-radius: 50%;
	}
	.login_info_on>.user_pic.active>img{
		border:0.125rem solid #FF9D00;
	}
	.login_info_on>.user_pic:after{
		content: "";
		display: inline-block;
		position: absolute;
		top: 0;bottom: 0;
		margin: auto;
		width: 0;height: 0;
		margin-left: 5px;
		border-top: 4px solid #666;
		border-left:4px solid transparent ;
		border-right:4px solid transparent ;
	}
	.login_info_on>.user_pic.active:after{
		border-top: 4px solid #FF9D00;
	}
	/* 未登录界面 */
	.login_info_off{
		display: flex;
		align-items: center;
		justify-content: space-around;
		height: 100%;
		color: #c9c9c9;
	}
	.login_info_off>a:hover{
		text-decoration: underline;
	}
	.login_info_off>a.weibo-login{
		width: 1.625rem;height: 1.625rem;
		background: url(/img/sprites/header-sprites15.png) no-repeat 0 -50px;
	}
	.login_info_off>a.qq-login{
		width: 1.625rem;height: 1.625rem;
		background: url(/img/sprites/header-sprites15.png) no-repeat -30px -50px;
	}
	.login_info_off>a.weixin-login{
		width: 1.625rem;height: 1.625rem;
		background: url(/img/sprites/header-sprites15.png) no-repeat 0 -165px;
	}
	.login_info_off>a.weibo-login:hover{background: url(/img/sprites/header-sprites15.png) no-repeat 0 -80px;}
	.login_info_off>a.qq-login:hover{background: url(/img/sprites/header-sprites15.png) no-repeat -30px -80px;}
	.login_info_off>a.weixin-login:hover{background: url(/img/sprites/header-sprites15.png) no-repeat -30px -165px;}
	
</style>
