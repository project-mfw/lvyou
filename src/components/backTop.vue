<template>
	<div class="back_top">
		
		<div @click="topTop" @mouseenter="enter($event)" @mouseleave="leave()" data-name='toTop'>
			<i class="toTop"></i>
			
			<div v-show="checked=='toTop'" >返回<br>顶部</div>
		</div>
		
		<div  @mouseenter="enter" @mouseleave="leave" data-name="feedback">
			<i class="feedback"></i>
			<div v-show="checked=='feedback'">意见<br>反馈</div>
		</div>
		
		
		<div @mouseenter="enter" @mouseleave="leave" data-name="code">
			<i class="code"></i>
			<div class="mfw_code" v-show="checked=='code'"><img src="/img/sprites/mfw_code.jpeg"></div>
		</div>
	</div>
</template>

<script>
	
	window.addEventListener("scroll",function(){
		if(document.getElementsByClassName("back_top").length!=0){
			let box=document.getElementsByClassName("back_top")[0];
			// 获取滚动条距离页面顶部的距离
			let scrollTop=document.body.scrollTop || document.documentElement.scrollTop;
			let topTop=box.offsetTop-scrollTop;
			if(topTop<=68){
				box.firstElementChild.style.display="block"
			}else{
				box.firstElementChild.style.display="none"
			}
			// 获取滚动条距离页面底部的距离
			let scrollBottom=document.documentElement.scrollHeight-document.documentElement.scrollTop-document.documentElement.clientHeight;
			if(scrollBottom<=523){
				box.style.position="absolute";
				box.style.bottom="542px"
				box.firstElementChild.style.display="block"
			}else{
				box.style.position="fixed";
				box.style.bottom="20px"
			}
		}
		
	})
	
	export default{
		data(){
			return{
				checked:"",
			}
		},
		methods:{
			enter(e){
				this.checked=e.target.dataset.name
			},
			leave(){
				this.checked=""
			},
			// 返回顶部
			topTop(){
				let timer=setInterval(()=>{
					let scrollTop=document.body.scrollTop || document.documentElement.scrollTop;
					let speed=Math.floor(-scrollTop/7)
					document.documentElement.scrollTop = document.body.scrollTop =scrollTop+speed;
					if(scrollTop==0){
						clearInterval(timer)
					}
				},30)
				
			}
		},
		mounted(){
			// window.onscroll=function(){
			// 	let box=document.getElementsByClassName("back_top")[0];
			// 	// 获取滚动条距离页面顶部的距离
			// 	let scrollTop=document.body.scrollTop || document.documentElement.scrollTop;
			// 	let topTop=box.offsetTop-scrollTop;
			// 	console.log(topTop)
			// 	if(topTop<=68){
			// 		box.firstElementChild.style.display="block"
			// 	}else{
			// 		box.firstElementChild.style.display="none"
			// 	}
			// 	// 获取滚动条距离页面底部的距离
			// 	let scrollBottom=document.documentElement.scrollHeight-document.documentElement.scrollTop-document.documentElement.clientHeight;
			// 	if(scrollBottom<=523){
			// 		box.style.position="absolute";
			// 	}else{
			// 		box.style.position="fixed";
			// 	}
			// }
		
		
		}
	}
</script>

<style>
	.back_top{
		position: fixed;
		right: 50%;
		bottom: 20px;
		height: auto;
		margin-right: -558px;
		/* display: none; */
		z-index: 10;
	}
	.back_top>div{
		position: relative;
		width: 2.6875rem;height: 2.6875rem;
		border: 0.0625rem solid #E5E5E5;
		background: #fff;
		text-align: center;
		cursor: pointer;
	}
	.back_top>div>div{
		position: absolute;
		top: 0;
		width: 2.6875rem;height: 2.6875rem;
		padding: 2px;
		background: rgb(170,170,170);
		color: #fff;
	}
	.back_top>[data-name="toTop"]{
		display: none;
		border-bottom: 0;
	}
	.back_top [data-name="feedback"]{
		border-bottom: 0;
	}
	.back_top .toTop{
		width: 1.3125rem;height: 0.75rem;
		margin-top: 14px;
		background: url(/img/sprites/header-sprites9.png) no-repeat -60px -165px;
	}
	.back_top .feedback{
		width:1.125rem;height: 1.125rem;
		margin-top: 11px;
		background: url(/img/sprites/header-sprites9.png) no-repeat -90px -165px;
	}
	.back_top .code{
		width: 1.1875rem;height: 1.1875rem;
		margin-top: 11px;
		background: url(/img/sprites/header-sprites9.png) no-repeat -120px -165px;
	}
	.back_top [data-name="code"]:hover{
		background: #FF9D00;
		border-color: ##FF9D00;
	}
	.back_top [data-name="code"]:hover>i{
		background-position: -150px -165px;
	}
	.back_top .mfw_code{
		position: absolute;
		right: 55px;
		bottom: 0;
		width: 450px;height: 192px;
		padding: 6px;
		margin-top: -87px;
		border: 1px solid #e5e5e5;
		/* display: none; */
		background-color: #fff;
		color: #999;
	}
	.back_top .mfw_code>img{
		width: 100%;height: 100%;
	}
</style>
