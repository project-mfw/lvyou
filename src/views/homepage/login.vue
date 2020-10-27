<template>
	<div class="login">
		<img src="/img/homepage/8.jpg">
		<div class="login_box">
			<div class="left">
				<div class="top" v-show="checked!='regist'">
					<p :class="{active:checked=='QR'}" data-name="QR" @click="select($event)">扫码登录</p>
					<p :class="{active:checked=='input'}" data-name="input" @click="select($event)">密码登录</p>
				</div>
				<!-- 二维码登录 -->
				<div class="body QR" v-show="checked=='QR'">
					<p>打开<router-link to="">马蜂窝APP</router-link>-V9.3.38以上版本扫描二维码免输入，更快更安全。</p>
					<div>
						<img src="/img/homepage/mfw_app.png">
					</div>
				</div>
				<!-- 账号密码登录 -->
				<div class="body input" v-show="checked=='input'">
					<div class="input_box">
						<div class="tips" v-show="tips!=''">{{tips}}</div>
						<input type="text" placeholder="您的邮箱/手机号" data-name="uname" v-model="uname">
					</div>
					<div class="input_box">
						<input type="password" placeholder="您的密码" data-name="upwd" v-model="upassword"  @keydown.13="login">
					</div>
					<div><router-link to="">忘记密码</router-link></div>
					<router-link to="" @click.native="login">登 录</router-link>
				</div>
				
				<!-- 手机号注册 -->
				<div class="body regist" v-show="checked=='regist'">
					<div class="input_box">
						<div class="tips" v-show="phone_tips!=''">{{phone_tips}}</div>
						<input type="text" placeholder="您的手机号码" data-name="phone" @keydown.13="checkPhone" v-model="phone">
					</div>
					<router-link to="" @click.native="checkPhone($event)">立即注册</router-link>
					<div class="agree">注册视为同意<router-link to="">《马蜂窝用户使用协议》</router-link></div>
				</div>
				
				
				<div class="foot">
					<p>用合作网站账户直接登录</p>
					<ul class="logo">
						<li><router-link to><i class="weibo"></i></router-link></li>
						<li><router-link to><i class="qq"></i></router-link></li>
						<li><router-link to><i class="weixin"></i></router-link></li>
					</ul>
				</div>
			</div>
			<div class="right">
				<img src="/img/homepage/img_download.png">
				<router-link to="" class="app"></router-link>
			</div>
			<div class="toregist" v-show="checked!='regist'">
				还没有账号？
				<router-link to="" data-name="regist" @click.native="select($event)">马上注册</router-link>
			</div>
			<div class="toregist" v-show="checked=='regist'">
				已有账号？
				<router-link to="" data-name="input" @click.native="select($event)">马上登录</router-link>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				// 选择登录方式 二维码/账号密码
				checked:"QR",
				// 输入的登录信息用户的账号、密码
				uname:"",
				upassword:"",
				// 注册输入的手机号
				phone:"",
				// 选择弹出的提示内容
				phone_tips:"",
				tips:""
			}
		},
		methods:{
			// 选择不同的登录方式（扫码/账号密码）
			select(e){
				this.checked=e.target.dataset.name;
			},
			// 提交输入的账号和密码到服务器
			login(){
				console.log(this.uname,this.upassword)
				this.axios.post('/user/login',`uname=${this.uname}&upassword=${this.upassword}`)
				.then(result=>{
					console.log(result.data)
					// 获取返回结果，如果结果不为0说明账号和密码同时有效
					if(result.data!=0){
						// 成功后将用户的id添加到localStorage,使下次打开页面直接获得登录状态
						window.localStorage.setItem('userId',result.data);
						// 并且跳转至首页
						this.$router.push('/')
					}else if(result.data==0){
						// 如果结果为0说明账号和密码至少有一项错误，显示错误提示
						this.tips="用户名或密码错误，请仔细检查"
					}
				})
			},
			// 检查手机号格式、是否被注册
			checkPhone(e){
				if(this.phone==""){
					this.phone_tips="注册手机号不能为空"
				}else{
					let reg=/^1[3-9]\d{9}$/;
					if(reg.test(this.phone)){
						this.axios.post( 
							'/user/regist',
							`phone=${this.phone}`
						).then(result=>{
							console.log(result.data)
							if(result.data==1){
								this.phone_tips='手机号已被注册';
							}else{
								this.$router.push({name:"regist",params:{phone:this.phone}})
							}
						})
					}else{
						this.phone_tips='手机号格式不正确'
					}
					
				}
			},
		},
		mounted(){
			if(this.$route.params.isRegist){
				this.checked="input";
			}else{
				this.checked="regist";
			}
			
		}
	}
	
</script>

<style>
	.login>img{
		position: fixed;
		width: 100%;
		height: 100%;
	}
	.login .login_box{
		z-index: 999;
		position: fixed;
		top: 0;bottom: 0;left: 0;right: 0;
		margin: auto;
		width: 45.625rem;height: 27.125rem;
		background: #fff;
		border-radius: 0.5rem;
		box-shadow: 0 0.1875rem 0.1875rem rgba(0,0,0,.4);
		/* overflow: hidden; */
	}
	/* 左侧样式 */
	.login .left{
		position: relative;
		box-sizing: border-box;
		float: left;
		width: 27.5rem;height: 100%;
		padding: 0 58px 0 62px;;
	}
	.login .left .top{
		display: flex;
		justify-content: center;
		border-bottom: 1px solid #f6f7f9;
	}
	.login .left .top>p{
		position: relative;
		display: inline-block;
		width: 7.5rem;
		padding: 2.5rem 0 0.75rem;
		font-size: 1.125rem;
		line-height: 1.5625rem;
		color: rgba(113,115,118,1);
		font-family: PingFangSC-Regular,PingFang SC;
		font-weight: 400;
		text-align: center;
		cursor: pointer;
	}
	.login .left .top>p.active:after{
		content: '';
		position: absolute;
		left: 50%;
		bottom: 0;
		margin-left: -25px;
		width: 50px;
		height: 4px;
		background: rgba(255,149,0,1);
		border-radius: 3px;
	}
	.login .left .body:not(.regist){
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: calc(100% - 180px);
	}
	/* 左侧输入框 */
	.login .body .input_box{
		position: relative;
	}
	.login .body .tips{
		background: url(/img/sprites/err_ico2.png) 0 -60px no-repeat #fff;
		padding: 0 0 3px 22px;
		width: 300px;
		font-size: 12px;
		color: #ff3c00;
		margin-top: 10px;
		top: -30px;
		position: absolute;
		text-align: left;
		/* display: none; */
	}
	.login .body input{
		display: block;
		box-sizing: border-box;
		width:100%;height: 3rem;
		padding: 0.375rem 0 0.375rem 0.75rem;
		margin-bottom: 0.625rem;
		border: 0.0625rem solid #f6f7f9;
		background: #f6f7f9;
		font-size: 0.875rem;
		color: #666666;
		border-radius: 6px;
	}
	.login .body input:focus{
		border: 1px solid #ffa200;
		box-shadow: 0 0 5px #ffa200;
		outline: 0;
		transition: box-shadow .25s linear 0s;
		-webkit-transition: box-shadow .25s linear 0s;
	}
	.login .body>div{
		text-align: right;
		font-size: 0.75rem;
	}
	.login .body.input>div>a{
		color: #717376;
	}
	.login .body.input>div>a:hover{
		text-decoration: underline;
	}
	.login .body>a{
		display: block;
		height: 42px;
		margin-top: 1.0625rem;
		background: linear-gradient(135deg,rgba(255,149,0,1) 0,rgba(255,165,38,1) 100%);
		border-radius: 6px;
		font-size: 20px;
		font-weight: 500;
		line-height: 42px;
		color: #fff;
		text-align: center;
	}
	/* 左侧注册 */
	.login .left .regist{
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: calc(100% - 97px);
	}
	.login .left .regist input{
		margin: 0;
	}
	.login .left .regist .agree{
		padding-top: 12px;
		font-size: 12px;
		color: #CCCCCC;
	}
	.login .left .regist div>a{
		color: #999;
		font-size: 12px;
		margin-left: 2px;
	}
	.login .left .regist div>a:hover{
		color: #333333;
		text-decoration: underline;
	}
	/* 左侧二维码 */
	.login .left .body.QR>p{
		text-align: center;
		font-size: 14px;
		font-weight: 500;
		color: #717376;
		line-height: 20px;
	}
	.login .left .body.QR p>a{
		color: #4d97ff;;
	}
	.login .left .body.QR>div{
		width: 150px;height: 150px;
		margin: 0.625rem auto 0;
	}
	.login .left .foot{
		position: absolute;
		left: 0;right: 0;
		bottom: 0;
		height: 6.0625rem;
		padding: 0 2.5625rem;
		background:linear-gradient(270deg,rgba(246,247,249,0.3) 0,rgba(246,247,249,1) 100%);
		border-radius: 0 0 0 .5rem;
	}
	.login .left .foot p{
		border: 0;
		font-size: 14px;
		font-family: PingFangSC-Regular,PingFang SC;
		color: rgba(148,150,154,1);
		line-height: 20px;
		padding: 12px 0;
	}
	.login .logo li{
		display: inline-block;
		margin-right: 2rem;
	}
	.login .logo li i{
		width: 36px;height: 36px;
	}
	.login .logo .weibo{background: url(/img/sprites/ic_weibo.png) no-repeat;}
	.login .logo .qq{background: url(/img/sprites/ic_qq.png) no-repeat;}
	.login .logo .weixin{background: url(/img/sprites/ic_weixin.png) no-repeat;}
	.login .logo .weibo:hover{background: url(/img/sprites/ic_weibo_sel.png) no-repeat;}
	.login .logo .qq:hover{background: url(/img/sprites/ic_qq_sel.png) no-repeat;}
	.login .logo .weixin:hover{background: url(/img/sprites/ic_weixin_sel.png) no-repeat;}
	/* 右侧样式 */
	.login .right{
		float: right;
		position: relative;
		border-radius: 0 .5rem .5rem 0;
		overflow: h;
	}
	.login .right a{
		position: absolute;
		bottom: 15px;
		right: 12px;
		width: 30px;
		height: 30px;
	}
	.login .toregist{
		position: absolute;
		right: 0;left: 0;bottom: -30px;
		margin: auto;
		clear: both;
		width: 140px;
		background-color: #000;
		border-radius: 15px;
		background-color: rgba(0,0,0,.4);
		text-align: center;
		font-size: 12px;
		color: #fff;
		padding: 4px 0;
		text-shadow: 1px 1px 1px rgba(0,0,0,.4);
	}
	.login .toregist>a:hover{
		text-decoration: underline;
	}
</style>
