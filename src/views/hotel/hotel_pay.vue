<template>
	<div class="hotel_pay">
		
		<div class="header">
			<div class="nav">
				<a href="">{{nickName}}</a>
				<span>|</span>
				<a>我的订单</a>
			</div>
		</div>
		<div class="container">
			<div class="main_titile">
				<i class="title_i"></i>
				<span class="xian"></span>
				<span>收银台</span>
			</div>
			<div class="message border4">
				<div class="message_one">
					<i></i>
					<span>您的订单提交成功！</span>
					<span>支付剩余时间<strong>{{min}}</strong>分<strong>{{sec}}</strong>秒，超时则订单关闭</span>
				</div>
				<div class="message_two">
					<span>订单号：</span>
					<span>51200906039268742</span>
				</div>
				<div class="message_three">
					<span>应付金额：</span>
					<span>￥519.00</span>
				</div>

			</div>

			<!-- 订单酒店信息核对 -->

			<div class="hotel_message">
				<div class="hotel_title">
					<i></i>
					<div>
						<h2>三亚哈曼度假酒店</h2>
						<p>地址：大东海旅游度假区榆亚路136号</p>
					</div>
				</div>
				<div class="message_main border4">
					<div class="mm flex">
						<ul class="message_left">
							<li>
								<span>入住时间：</span>
								<span class="dt">2020年11月21日 星期六</span>
							</li>
							<li>
								<span>退房时间:</span>
								<span class="dt">2020年11月22日 星期日</span>
							</li>
							<li>
								<span>房型：</span>
								<span>高级房</span>
							</li>
							<li>
								<span>房间数量:</span>
								<span>1间</span>
							</li>
							<li>
								<span>房型：</span>
								<span>高级房</span>
							</li>
							<li>
								<span>入住人数：</span>
								<span>共1成人</span>
							</li>
							<li>
								<span>入住人：</span>
								<span>李一</span>
							</li>
							<li>
								<span>床型：</span>
								<span>1张大床或1张单人床X1</span>
							</li>
						</ul>
						<ul class="message_right">
							<li>
								<span>手机：</span>
								<span>13666666666</span>
							</li>
							<li>
								<span>邮箱</span>
								<span>104@qq.com</span>
							</li>
						</ul>
					</div>
					<div class="message_bottom">
						<p>取消政策： 此房价预订后酒店不接受取消或变更的请求。</p>
						<p>特别提示： 此订单发票/收据由酒店前台开具，请在入住完成后向酒店前台索取。</p>
					</div>
				</div>

				<!-- 	支付方式 -->
				<h2 class="pay_title">支付方式</h2>
				<div class="some_pay  border" id="check">
					<a class="zfb">
						<input type="checkbox" name="select" @click="z" v-model="zfb"><span></span>
						<i></i>
					</a>
					<a class="jd">
						<input type="checkbox" name="select" @click="j" v-model="jd"> <span></span>
						<i></i>
						<span>京东支付</span>
					</a>
					<a class="wx">
						<input type="checkbox" name="select" @click="w" v-model="wx"><span></span>
						<i></i>
					</a>

				</div>
				<a class="pay_s">
					<button @click="pay">确认支付</button>
					<p>支付成功后，请注意接受短信和邮件</p>
				</a>


			</div>


		</div>
		
	</div>
</template>


<style scoped>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	input{
		display: inline-block;
	}
	.hotel_pay {
		font-family: Arial, "Lucida Grande", "Microsoft Yahei", "Hiragino Sans GB", "Hiragino Sans GB W3", SimSun, "PingFang SC", STHeiti;
		font-size: 14px;
		color: #666;
		box-sizing: border-box;
	}

	a {
		text-decoration: none;
		display: block;
	}

	.flex {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.flex1 {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}

	.flex2 {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		align-items: flex-start;
	}

	.flex3 {
		display: flex;
		justify-content: space-around;
	}

	.flex4 {
		display: flex;
		flex-wrap: wrap;
	}

	ul,
	li {
		list-style: none;
	}

	.border {
		border: 1px solid #e5e5e5;

	}

	.border4 {
		border-bottom: 1px dotted #D7D7D7;
	}

	span {
		display: inline-block;
	}

	i {
		display: inline-block;
	}

	.header {
		width: 100%;
		height: 30px;
		line-height: 30px;

		background-color: #ebebeb;
		padding: 0 54px;

	}

	.nav {
		margin: 0 90px;
		float: left;
		width: 80%;
		text-align: right;
		font-size: 12px;

	}

	.nav a {
		width: 50px;
		display: inline-block;
		margin: 0;
		padding: 0;
		color: #666;
	}

	.container {
		width: 1000px;
		margin: 30px 54px 40px 54px
	}

	.main_titile {
		padding: 0 10px;
		margin-bottom: 30px;
		height: 32px;
		float: left;
		width: 100%;
		font-size: 22px;
		font-weight: bold;
	}

	.title_i {
		width: 120px;
		height: 32px;
		background: url(/img/i/title.png)0 0 no-repeat;

		vertical-align: top;
	}

	.xian {
		display: inline-block;
		width: 2px;
		height: 25px;
		background-color: #999;
		margin: 0 15px;
	}

	.message {

		font-size: 16px;
	}

	.message_one {
		font-size: 22px;
		font-weight: bold;
		color: #ff9d00;
		line-height: 22px;
		margin-bottom: 20px;
		margin-left: 10px;
	}

	.message_one>span:last-child {
		margin-left: 10px;
		color: #333;
		font-size: 16px;
		font-weight: normal;
	}

	.message_one>span:last-child strong {
		color: #ef523d;

	}

	.message_one i {
		margin-right: 10px;
		width: 22px;
		height: 22px;
		background: url(/img/hotel_detail/pay3.png)-120px -40px no-repeat;
		vertical-align: middle;
	}

	.message_two {
		padding-left: 48px;
		height: 40px;
		line-height: 40px;
		margin: 10px 0;
	}

	.message_two :first-child {
		width: 110px;
	}

	.message_three {
		height: 40px;
		line-height: 40px;
		padding-left: 48px;
		margin: 10px 0 30px 0;
	}

	.message_three :first-child {
		width: 110px;
	}

	.message_three :last-child {
		font-size: 32px;
		color: #ff4a26;
		font-weight: bold;
	}

	.hotel_message {
		margin: 20px 0;
	}

	.hotel_title {
		float: left;
		width: 100%;
		margin-bottom: 40px;
		color: #999;

	}

	.hotel_title h2 {
		font-weight: normal;
		color: #666;
	}

	.hotel_title i {
		width: 28px;
		height: 33px;
		margin: 5px 10px 0 5px;
		background: url(/img/hotel_detail/pay3.png)-120px -75px no-repeat;
		vertical-align: middle;
		float: left;


	}

	.hotel_message p {
		font-size: 12px;
		margin-top: 5px;
	}

	.message_main {
		margin-top: 20px;
		font-size: 12px;
		width: 1000px;
		padding-left: 10px;
	}

	.mm {
		width: 100%;

		height: 220px;
	}

	.message_left {
		width: 330px;
		padding-right: 30px;
		border-right: 1px solid #e5e5e5;

	}

	.message_main li {
		width: 330px;
		height: 20px;
		line-height: 20px;
		margin: 10px 0;
	}

	.message_left li :first-child {
		width: 60px;
		margin-right: 10px;
	}

	.dt {
		color: #ff0000;
	}

	.message_right {
		padding-left: 120px;
		width: 330px;
		float: left;
		margin-right: 189px;
	}

	.message_right li :first-child {
		width: 36px;
		margin-right: 30px;
	}

	.message_bottom {
		margin-top: 40px;
	}

	.message_bottom p {
		margin: 15px 0;
	}

	.pay_title {
		padding-left: 10px;
		line-height: 26px;
		margin-bottom: 10px;
		margin-top: 20px;
		font-weight: bold;
	}

	.some_pay {
		height: 33px;
		padding: 35px 30px;
	}

	.some_pay input {
		width: 15px;
		height: 15px;
	}

	.some_pay a {
		width: 185px;
		float: left;
	}

	.zfb i {
		width: 80px;
		height: 28px;
		background: url(/img/hotel_detail/pay3.png)0 -75px no-repeat;
		vertical-align: middle;
		margin-left: 15px;
	}

	.jd i {
		width: 27px;
		height: 34px;
		margin: 0 10px 0 15px;
		background: url(/img/hotel_detail/pay3.png) 0 -145px no-repeat;
		vertical-align: middle;
	}

	.jd span {
		font-size: 18px;
		color: #666;


	}

	.wx i {
		width: 110px;
		height: 34px;
		margin: 0 10px 0 15px;
		background: url(/img/hotel_detail/pay3.png)0px -40px no-repeat;
		vertical-align: middle;
	}

	.pay_s {
		margin-top: 50px;
		text-align: center;
		color: #666;
	}

	.pay_s button {
		width: 340px;
		height: 50px;
		line-height: 50px;
		text-align: center;
		background-color: #ffdb26;
		font-size: 24px;
		color: #474747;
		border-radius: 2px;
		outline: none;
		margin-bottom: 5px;
		border-color: transparent;
	}
	
</style>
<script>
	export default {
		data() {
			return {
				zfb: false,
				jd: false,
				wx: false,
				min: 59,
				sec: 59,
				hr: 24,
				id:0,
				hotel_detail:[],
				p:[],
				nickName:""
				

			}
		},
		mounted() {
			console.log(this.$store.state)
			this.nickName=this.$store.state.nickName
				// this.getdata()
			// this.id=this.$route.params.id;
			// console.log(this.$route.params.id)
			// this.axios.get(`/hotel_pay?id=${this.id}`).then(res=>{
			// 	this.hotel_order=res.data;
			// 	console.log(res.data)
			// })
			this.countdown()
			// location.reload()
			// this.getdatas()
		},
		methods: {
			//接收上个页面input传过来的数据
			// getdatas(){
			// 	this.id=this.$route.params.id;
			// console.log(this.$route.params.id)
			// this.axios.get(`/hotel/hotel_order?id=${this.id}`).then(res => {
			// 	this.hotel_order=res.data;
			// 	console.log(this.hotel_order)
			// 	this.title=this.hotel_order[0].hotel_name;	
			// 	let arrs=res.data.arr;
			// 	console.log(arrs)					
			// })
			// },
			//封装接口
			// 	getdata(){
			// this.id = this.$route.params.id;
			// console.log(this.$route.params)
			// this.axios.get(`/hotel/hotel_pay?id=${this.id}`).then(res => {
			// 	this.hotel_detail = res.data;
			// 	console.log(this.hotel_detail)
			// 	 this.p=this.hotel_detail[0]
			// 	//  this.p.forEach(element => {
			// 	// 	this.a=element.hotel_name
			// 	// 	this.b=element.hotel_uname
			// 	// 	this.c=element.adress

			// 	//  });
					
				
			// })
			// },
			z() {
				this.zfb = true;
				this.jd = false;
				this.wx = false
			},
			j() {
				this.jd = true;
				this.zfb = false;
				this.wx = false
			},
			w() {
				this.wx = true;
				this.jd = false;
				this.zfb = false
			},
			pay() {
				alert("支付成功")
			},
			countdown() {
				let end = Date.parse(new Date('2020-11-1 16:30:30'))
				let now = Date.parse(new Date())
				let count = (end - now) / 1000 //转换为秒
				if (count < 0) return;
				let hr = parseInt(count / 60 / 60 % 24)
				let min = parseInt(count / 60 % 60)
				let sec = parseInt(count % 60)
				// this.hr = hr > 9 ? hr : '0' + hr
				this.min = min > 9 ? min : '0' + min
				this.sec = sec > 9 ? sec : '0' + sec
				const that = this
				if (min >= 0 && sec >= 0) {
					//倒计时结束关闭订单
					if (min == 0 && sec == 0) {

						return
					}
					setTimeout(function() {
						that.countdown()
					}, 1000)
				}
			}
		}


	}
</script>
