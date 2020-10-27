<template>
	<div class="regist">
		<img src="/img/homepage/11.jpg">
		
		
		<div  class="regist_box">
			<router-link to="" class="logo"><i></i></router-link>
			<div class="hd">账号注册</div>
			<div class="body">
				<div class="tips" v-show="tips!=''">{{tips}}</div>
				<input type="text" placeholder="您的名称" v-model="uname">
				<input type="password" placeholder="您的密码" v-model="upassword">
				<input type="password" placeholder="确认密码" v-model="checkUpwd">
				<div class="msg">
					<button>免费获取验证码</button>
					<input type="text" placeholder="短信验证码">
				</div>
				
				<router-link to="" @click.native="regist">完成注册</router-link>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				uname:"",
				upassword:"",
				checkUpwd:"",
				phone:"",
				tips:""
			}
		},
		methods:{
			// 向服务器发送注册信息
			regist(){
				// 验证是否有未填选项
				if(this.uname=="" || this.upassword=="" || this.checkUpwd==""){
					this.tips="注册项不能为空";
					console.log(this.tips)
					return
				}
				// 验证密码是否符合要求
				let reg= /^[A-Za-z0-9]{8,16}$/ ;
				if(!reg.test(this.upassword)){
					this.tips="密码至少8-16位"
					return
				}else{
					let reg=/(?=.*[a-zA-Z])(?=.*[0-9])/
					if(!reg.test(this.upassword)){
						this.tips="密码过于简单，至少包含一个字母和一个数字"
						return
					}
				}
				// 验证两次密码是否输入一致
				if(this.upassword!=this.checkUpwd){
					this.tips="两次输入的密码不一致"
					return
				}
				// 所有验证通过之后发送请求
				this.axios.post(
					'/user/regist',
					`uname=${this.uname}&upassword=${this.upassword}&phone=${this.phone}`
				).then(result=>{
					// 服务器返回1则表示用户名已存在
					if(result.data==1){
						this.tips='用户名已存在'
						// 否则注册成功
					}else if(result.data=="注册成功"){
						alert("用户注册成功")
						this.$router.push('/login?isRegist=true')
					}
				})
			},
			
		},
		mounted(){
			this.phone=this.$route.params.phone;
		}
	}
</script>

<style scoped="">
	.regist>div{
		position: absolute;
		z-index: 999;
		top: 0;left: 0;bottom: 0;right: 0;
		margin: auto;
	}
	.regist img{
		width: 100%;height: 100%;
		position: fixed;
	}
	.regist .regist_box{
		width: 23.125rem;height: 28.9375rem;
		background: #fff;
		border-radius: 5px;
	}
	.regist .hd{
		height: 56px;
		background-color: #f5f5f5;
		border-bottom: 1px solid #d8d8d8;
		line-height: 56px;
		font-size: 18px;
		color: #666;
		padding: 0 26px;
		border-radius: 5px 5px 0 0;
		text-align: left;
	}
	.regist .logo{
		position: absolute;
		width: 4.6875rem;height: 5.625rem;
		top: -5.625rem;left: 0;right: 0;
		margin: auto;
		background: url(/img/sprites/logo-new.png) no-repeat ;
	}
	.regist .regist_box .body{
		position: relative;
		padding: 2.1875rem 1.625rem 0; 
	}
	.regist .regist_box .body .tips{
		background: url(/img/sprites/err_ico2.png) 0 -60px no-repeat #fff;
		padding: 0 0 3px 22px;
		width: 300px;
		font-size: 12px;
		color: #ff3c00;
		margin-top: 10px;
		top: 0;
		position: absolute;
		text-align: left;
	}
	.regist .regist_box input{
		display: block;
		box-sizing: border-box;
		width:100%;height: 2.625rem;
		padding: 0.375rem 0 0.375rem 0.75rem;
		margin-bottom: 0.625rem;
		border: 0.0625rem solid #f6f7f9;
		background: #f6f7f9;
		font-size: 0.875rem;
		color: #666666;
		border-radius: 6px;
	}
	.regist .regist_box input:focus{
		border: 1px solid #ffa200;
		box-shadow: 0 0 5px #ffa200;
		outline: 0;
		transition: box-shadow .25s linear 0s;
		-webkit-transition: box-shadow .25s linear 0s;
	}
	.regist .regist_box .body .msg{
		display: flex;
		align-items: center;
		margin-bottom: 0.75rem;
	}
	.regist .msg>button{
		display: inline-block;
		box-sizing: border-box;
		width: 200px;height: 40px;
		line-height: 40px;
		margin-right: 10px;
		border: 1px solid #dfdfdf;
		outline: 0;
		padding: 0.0625rem 0.375rem;
		text-align: center;
		border-radius: 4px;
		background: #f2f2f2;
		background: -moz-linear-gradient(top,#fff,#f2f2f2);
		background: -webkit-gradient(linear,0 0,0 100%,from(#fff),to(#f2f2f2));
		color: #333;
		vertical-align: top;
		overflow: hidden;
	}
	.regist .msg>input{
		margin: 0;
	}
	.regist .regist_box .body>a{
		width: 320px;
		height: 42px;
		border: 0;
		background-color: #ffa800;
		border-radius: 5px;
		text-align: center;
		line-height: 40px;
		color: #fff;
		font-size: 18px;
		font-weight: bold;
	}
</style>
