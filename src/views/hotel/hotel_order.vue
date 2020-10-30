<template>
	<div class="hotel_order">
		<!-- 有房保障弹窗 -->
		<div class="heigh" v-show="house">
			<div class="heigh_detail">
				<div class="flex">
					<span>马蜂窝有房保障</span>
				</div>
				<div>
					<dl>
						<dt>入住日期前被告知无房</dt>
						<dd>如您的已确认订单在入住日期前，酒店无法为您安排入住：</dd>
						<dd>1. 马蜂窝会第一时间通知您，与酒店协调争取为您安排原标准或以上级别的房间入住，承担由此产生的差价，差价金额上限为马蜂窝原订单首晚的30% 房费。</dd>
						<dd>2. 若无法安排您入住原酒店任何房型，我们会建议您预订附近酒店，并承担由此产生的差价，差价金额上限为马蜂窝原订单首晚的30% 房费。</dd>
						<dd>3. 经核查情况属实后，马蜂窝会联系您履行保障承诺，请您保留好入住发票及水单。</dd>
						<dd></dd>
					</dl>
					<dl>
						<dt>入住当天被告知无房</dt>
						<dd>若订单已得到酒店方确认，您在约定时间到店发现无房：</dd>
						<dd>1. 请立即拨打24小时服务热线通知马蜂窝。</dd>
						<dd>2. 马蜂窝会第一时间与酒店协调争取为您安排原标准或以上级别的房间入住，并承担由此产生的差价，差价金额上限为马蜂窝原订单的首晚房费。</dd>
						<dd>3. 若无法安排您入住原酒店任何房型，我们会建议您预订附近酒店，并承担由此产生的差价，差价金额上限为马蜂窝原订单的首晚房费。</dd>
						<dd>4. 经核查情况属实后，马蜂窝会联系您履行保障承诺，请您保留好入住发票及=水单。</dd>
					</dl>
					<dl>
						<dt>注意事项</dt>
						<dd>1. 请您注意，以下情况不包含在“有房保障”范畴：</dd>
						<dd>a. 当您的订单未被确认，酒店告知无房时，订单被取消的；</dd>
						<dd>b. 未实际入住或者您未能提供真实有效入住凭证(发票+水单)，或您的入住凭证中入住人、城市、日期与原订单不符的；</dd>
						<dd>c. 非马蜂窝、酒店（代理商）原因造成的无法入住，包括由于您自身原因导致，或不可抗力等；</dd>
						<dd>d. 订单存在安全交易风险行为的，包括但不限于恶意购买行为的订单，以马蜂窝核实结果为准；</dd>
						<dd>e. 在您预定入住其它酒店前，请务必与马蜂窝联系确认，否则将被视为自动放弃了“有房保障”赔付的权利。</dd>
						<dd>2. 保障只针对实际经济损失，且保障金额不超过“有房保障”的相关标准；</dd>
						<dd>3. 为保障您的利益，对于已核实确认的保障申请，款项将汇款至原支付银行卡或入住人的银行卡，因此无法汇款至其它账户。</dd>
						<dd>4. 发生纠纷后，当您已取得保障金或已与供应商协商解决，如再向马蜂窝及供应商以同一事由主张其他赔偿的，将不再予以受理。</dd>

					</dl>
				</div>
				<div>
					<a @click="close_house">关闭</a>
				</div>

			</div>
		</div>
		<!-- 页头 -->
		<div class="header border4">

			<a href=""><i></i></a>

		</div>
		<!-- 中间部分 -->
		<div class="order  flex" v-for="(p,index) in hotel_order" :key="index">
			<div class="process">
				<ul class="flex">
					<li><i class="sel"></i> 1.选择房间</li>
					<li>2.填写入住详情</li>
					<li>3.确认支付信息</li>
					<li>4.预订完成</li>
				</ul>
			</div>
			<!-- <div></div> -->
			<!-- 左边主要信息 -->
			<div class="order_main ">
				<div class="hotel_sanya border flex">
					<a><img :src="p.b_img"></a>
					<div class="rigth_desc">
						<div class="title_desc">
							<h2>{{p.hotel_name}}</h2>
							<h4>{{p.hotel_uname}}</h4>
							<p>{{p.adress}}</p>
						</div>
						<div class="select_date flex">
							<div class="border">
								<p>{{p.s_time}}</p>
								<p>{{p.e_time}}</p>
								<p>{{p.s_day}}</p>
							</div>
							<div class="border">
								<p>{{p.s_week}}</p>
								<p>{{p.e_day}}</p>
								<p>{{p.e_week}}</p>
							</div>

							<div class="border">
								<p>{{p.r_number}}</p>
								<p>{{p.number}}</p>
								<p>间</p>
							</div>
							<div class="float" ref="imags">如需更改日期或房间数,<br>请在房型选择页修改。 </div>
						</div>

					</div>

				</div>

				<div class="reading border">
					<h5>订前阅读</h5><i class="read" @click="read"></i>
					<p v-show="reading">{{p.d_reading}}</p>

				</div>
				<div class="order_info border">
					<div class="top_info">
						<h4>房间1 - {{p.room_type}} (必填)</h4>
						<p>入住信息：1成人1张大床或1张单人床</p>
						<div class="line"></div>
						<div class="user_info flex4">
							<div class="input_name">
								<input type="text" id="x" placeholder="姓" v-model="content" @blur="x" ref="x">													
							</div>
							<div class="input_name">
								<input type="text" v-model="text" id="m" placeholder="名" @blur="m" ref="m" >														
								 <span class="tips_err" v-show="m_f">请填写姓名</span>
								<span class="tips_success" v-show="m_s">√</span> 									
							</div>
							<div class="num" v-show="nums">								
								<a class="border" @click="adds">+</a>
								<span>增加入住人信息</span>
							</div>
						</div>
						<p>*请按相应证件准确填写第一入住人信息，订单提交后将无法变更或收费变更<br></p>
						<!-- 点击添加删除隐藏和显示 -->
							<div class="user_info flex4" v-show="add">
							<div class="input_name">
								<input type="text" id="xx" placeholder="姓" v-model="cont" ref="xx" @blur="xx">													
							</div>
							<div class="input_name">
								<input type="text" v-model="input" id="mm" placeholder="名" @blur="mm" ref="mm">														
								 <span class="tips_err" v-show="mm_f">请填写姓名</span>
								<span class="tips_success" v-show="mm_s">√</span> 									
							</div>
							
							<div class="num" v-show="dele">								
								<a class="border" @click="deles">-</a>
								<span>删除</span>
							</div>
						</div>
						<div class="CD">*与证件姓名一致，填写1人即可。<i class="data-click"></i>
							<div class="data-text">
								<p>第二位住客姓名仅用于办理签证等手续，办理入住时，请出示第一位住客的护照。预订多间客房时，每间第一位住客请务必填写不同的入住人。
									<br>*若购买酒店取消险，请填写全部入住人。</p>
								<i class="data-small"></i>
							</div>
						</div>

					</div>

					<div class="bottom_info">
						<h4>联系人信息 (必填)</h4>
						<div class="input_name">
							<input type="text" v-model="usernames" placeholder="输入姓名" @blur="names" ref="names">
							<span class="tips_err" v-show="name_f">请填写有效姓名</span>
							<span class="tips_success" v-show="name_s">√</span>
						</div>


						<div class="phone flex">
							<input type="text" value="+86">
							
								<input type="text" style="width:260px" v-model="phone" placeholder="输入手机号" @blur="phones" ref="phone">
								<span class="tips_errs" v-show="errs">请填写有效手机号</span>
								<span class="tips_successs" v-show="successs">√</span>
						

						</div>

						<div class="input_email">
							<input v-model="email" type="text" placeholder="请输入电子邮箱" @blur="emails" ref="email">

							<span class="tips_err" v-show="email_f"><i><span>请填写有效邮箱</span></i></span>
							<span class="tips_success" v-show="email_s">√</span>
						</div>

					</div>
				</div>
				<div class="border require border">
					<h4>特殊要求</h4><i class="yaoqiu" @click="yaoqiu"></i>

					<div class="room_select" v-show="room">
						<span class="border5" @click="rooms" ref="span_a" :class="{borders:r}">安静的房间 <i class="rooms" v-show="jing"></i></span>
						<span class="border5" @click="roomss" ref="span_b" :class="{borders:r2}">高楼层 <i class="rooms" v-show="gao"></i></span>
						<span class="border5" @click="roomsss" ref="span_c" :class="{borders:r3}">相邻的房间 <i class="rooms" v-show="lin"></i></span>
					</div>
					<input class="time border5" v-show="room" placeholder="预计到店时间" ref="time" @click="time">
					<ul class="times" v-show="timee">
						<li @click="times($event)" id="1"><p>不确定到店时间</p></li>
						<li @click="times($event)" id="2"><p>06:00~12:00</p></li>
						<li @click="times($event)" id="3"><p>12:00~24:00</p></li>
						<li @click="times($event)" id="4"><p>自行备注</p></li>
					</ul>
					<textarea class="texarea" v-show="room" @click="textarea"  ref="area" style="resize:none"></textarea>
					<p v-show="room" style="width:100%">*酒店办理入住时间为15:00-22:00，请您做好出行安排。
					</p>
					<p v-show="room">*酒店无法保证满足您的特殊要求，但会尽力安排</p>

				</div>
				<div class="border free">
					<h4>蜂蜜抵现</h4><i class="fengmi" @click="dixian"></i>
					<p v-if="fengmi">遗憾，您还没有蜂蜜哦。每次在马蜂窝预订酒店，成功入住后填写点评，即可获得20蜂蜜奖励。记得预订时要登录哦～</p>
				</div>
				<div class="submit">

					<router-link :to="`/hotel_pay/${p.id}`"><p @click="chuan">提交订单(￥519.00)</p> </router-link>

				</div>

			</div>
			<!-- 右边订单信息 -->
			<div class="rigth_info">
				<div class="expense_details border">
					<h4>预订费用明细</h4>
					<div class="deail flex border4">
						<span>{{p.y_detail}}</span>
						<span>{{p.y_price}}</span>
					</div>
					<div class="price flex">
						<h3>总价 (含税)</h3>
						<span>{{p.t_price}}</span>
					</div>
				</div>

				<div class="cancel border">
					<p>该订单不可取消和变更</p>
				</div>
				<div class="prompt">
					<p>特别提示：此订单发票/收据由酒店前台开具，请在入住完成后向酒店前台索取。</p>
				</div>
				<h5>{{p.author}}</h5>
				<div class="platfom_desc border">
					<h4>有房保障</h4>
					<ul>
						<li>
							<p>有房保障 订单无忧</p>
							<p>为您的订单负责，确认订单后发生无房，经马蜂窝协调处理，仍无法安排原订单入住，最高承担原订单首晚房费。</p>
						</li>
						<li>
							<p>专业服务 安心出行</p>
							<p>为您的出行负责，7 x 24小时海内外服务热线。</p>
							<p class="house_desc" @click="house_baozhang">有房保障说明 ></p>
						</li>
					</ul>
				</div>
			</div>
			<div class="foot">
				<i></i>
				<p>© 2019 mafengwo.cn</p>
			</div>
		</div>
	</div>
</template>
<style scoped>
.borders{
	border:1px solid #ff9d00 !important;
}
	.hotel_order {
		font-size: 14px;
		color: #999;
		box-sizing: border-box;
	}
	.rooms{
		position: absolute;
		width: 21px;
		height: 21px;
		display: inline-block;
		background: url(/img/i/order.png) no-repeat 0 -70px;
		vertical-align: middle;
		right: 0px;
		bottom:0px;
	}
	.sel{
		width: 18px;
    height: 18px;
    vertical-align: -4px;
    margin-right: 10px;
    display: inline-block;
    background: url(/img/i/order.png) no-repeat 0 -50px;
    vertical-align: middle;
	}
	* {
		margin: 0;
		padding: 0;
		box-sizing: content-box;
	}
	.CD{
		margin-top:10px;
	}
	a {
		text-decoration: none;
		display: block;
	}
	h2{
		font-weight:bold;
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
		border: 1px solid #D7D7D7;
		border-radius: 3px;
	}

	.border3 {
		border: 1px dotted #D7D7D7;
	}

	.border4 {
		border-bottom: 1px solid #D7D7D7;
	}

	.border5 {
		border: 1px solid #333;
	}

	i {
		display: inline-block;
	}

	.heigh {
		width: 100%;
		height: 100%;
		position: fixed;
		z-index: 20;
		background: rgba(0, 0, 0, .75);
		color: #fff;

		/* display:none; */

	}

	.heigh_detail {
		background: #fff;
		width: 650px;
		height: 518px;
		margin: 0 auto;
		margin-top: 70px;



	}

	.heigh_detail>div:first-child {

		line-height: 50px;
		color: #333;
		padding: 0 25px;
		height: 50px;
		background-color: #f3f3f3
	}

	.heigh_detail>div:nth-child(2) {
		font-size: 16px;
		height: 400px;
		color: #666;
		font-size: 12px;
		line-height: 25px;
		padding: 0 25px;
		overflow-x: scroll;
		overflow-y: scroll;
	}

	.heigh_detail>div:nth-child(2) dt {
		font-size: #333;
		font-weight: bold;
		line-height: 28px;
		margin-top: 20px;
	}

	.heigh_detail>div:nth-child(3) {

		padding: 0 285px;
		width: 78px;
		text-align: center;


	}

	.heigh_detail>div:nth-child(3) a {
		background: #f5ad1e;
		color: #fff;
		font-size: 14px;
		border-radius: 5px;
		line-height: 28px;
		margin-top: 20px;
	}

	.header {
		height: 45px;
		padding: 70px 0;
		box-shadow: 0 2px 4px rgba(0, 0, 0, .1);

	}

	.header i {
		background: url(/img/i/mfw.png) no-repeat 0 0px;
		background-size: 170px auto;
		margin: 0 200px;
		width: 170px;
		height: 44px;
		float: left;


	}

	.order {
		margin: 0 auto;
		width: 1000px;
	}

	.order input {
		height: 33px;
		border-radius: 3px;
		border: 1px solid #666;
		outline: 0;
	}

	.process {
		margin: 30px 0;
		height: 40px;
	}

	.process ul li {
		width: 250px;
		height: 38px;
		text-align: center;
		line-height: 38px;
		background-color: #f9f9f9;
		font-size: 16px;
	}

	.process ul :nth-child(2) {
		background-color: #ffb200;
		color: #fff;
	}

	.order_main {
		width: 648px;

	}

	.hotel_sanya {
		padding: 10px;
	}

	.hotel_sanya a img {
		width: 243px;
		height: 242px;
		margin-right: 20px;
		border-radius: 3px;
	}

	.title_desc {
		width: 360px;
	}

	.title_desc h4 {
		margin-top: 5px;
		color: #000;
		font-weight: normal;
	}

	.title_desc h2 {
		color: #333;
	}

	.title_desc p:not(:nth-child(3)) {
		color: #333;
	}

	.title_desc p {
		margin-bottom: 10px;
		margin-top: 10px;
	}

	.rigth_desc {
		position: relative;
	}

	.select_date {
		width: 291px;
		height: 75px;
		margin-bottom: -50px;
		position: absolute;
		bottom: 72px;

	}

	.select_date div:not(:nth-child(4)) {
		width: 87px;
		height: 80px;
		border-radius: 3px;
		text-align: center;
		margin-right: 8px;
		padding: 5px 0;
	}

	.select_date div :nth-child(2) {
		font-size: 26px;
		font-weight: bold;
		color: #333;
	}

	.float {
		background: rgba(0, 0, 0, 0.8);
		color: #fff;
		width: 170px;
		padding: 15px;
		z-index: 1;
		position: relative;
		top: -35px;
		left: 30px;
		font-size: 12px;
		display:none;

	}

	.select_date:hover div.float {
		display: block;
	}

	.reading {
		margin-bottom: 20px;
		padding: 15px 25px;
		color: #333;
		border-radius: 3px;
		margin-top: 20px;
		position: relative;
	}

	.read {
		background: url(/img/i/order.png) no-repeat -30px -85px;
		width: 24px;
		height: 12px;
		display: inline-block;
		position: absolute;
		top: 20px;
		right: 20px;
	}

	.reading p {
		height: 49px;
		margin-top: 20px;
		font-size: 12px;
		line-height: 20px;
	}

	.order_info input {
		height:23px;

	}
	input{
		display: inline-block;
	}
	.top_info {
		background-color: #f9f9f9;
		padding: 14px;
		margin-left: 10px;
		width:598px;
		margin-top: 10px;


	}
	
	a{
		color:#999;
	}
	.top_info h4 {
		color: #333;
	}

	.top_info p {
		margin: 10px 0;
		color: #333;
	}

	.top_info i {
		width: 20px;
		height: 20px;
		background: url(/img/i/order.png) no-repeat -58px -50px;
		display: inline-block;
		vertical-align: middle;

	}

	.data-text {
		width: 210px;
		height: 125px;
		font-size: 12px;
		color: #fff;
		padding: 15px 15px 30px 15px;
		background: rgba(0, 0, 0, 0.8);
		z-index: 2;
		position: relative;
		bottom: 180px;
		z-index: 2;

		display: none;
	}

	.data-click:hover+.data-text {
		display: block;
	}

	.data-text p {
		width: 200px;
		height: 100px;
		color: #fff;
	}

	.data-small {
		width: 20px;
		height: 20px;
		background: url(/img/i/order.png) no-repeat -58px -50px;
		display: inline-block;
		vertical-align: middle;
		margin-top: 15px;
		margin-left: 200px;

	}

	.line {
		height: 1px;
		margin: 10px 0;
		background-color: #efefef;
	}

	.user_info input {
		width: 132px;
		padding: 5px 8px;	
		margin-right:5px;
	}

	.user_info a {
		width: 20px;
		height: 20px;
		border-radius: 50%;
		text-align: center;
		font-weight: bold;
		margin-right:5px;
	}

	.num {
		width: 140px;
		margin-top:8px;
	}

	.num a {
		float: left;
	}

	.num span {
		float: left;
	}

	.bottom_info {
		width: 598px;
		padding: 15px 25px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.bottom_info h4 {
		color: #333;
	}

	.bottom_info input {
		width: 326px;
		padding: 5px 8px;
		margin-top: 15px;

	}
	.phone{
	position: relative;
	vertical-align: middle;
	}
	.phone :first-child {
		width: 40px;
		margin-right: 5px;
	}
	.phone input:nth-child(2){
		width: 263px !important;
	}

	.require {

		padding: 15px 25px;
		margin-bottom: 20px;
		margin-top: 20px;
		display: flex;
		flex-wrap: wrap;
		position: relative;
	}

	.require p {
		font-size: 12px;

	}

	.yaoqiu {
		background: url(/img/i/order.png) no-repeat -30px -85px;
		width: 24px;
		height: 12px;
		display: inline-block;
		position: absolute;
		top: 20px;
		right: 20px;
	}

	.require h4 {
		color: #333;
	}

	.room_select {
		float: left;
		height: 33px;
		margin-top: 30px;
		width: 598px;
		margin-bottom: 6px;
		color: #333;
	}

	.room_select span {
		width: 70px;
		height: 31px;
		padding: 8px 16px;
		margin-right: 10px;
		position: relative;
	}
	.room_select span:hover{
		border:1px solid #ff9d00;
	}
	.time {
		width: 370px;
		height: 31px;
		padding: 0 10px;
		margin-bottom: 10px;
	}
	.times{
		width:388px;	
		border: 1px solid #999;
		margin-top:-10px;
		border-radius:5px;
	}
	.times li{
		width: 388px;
		display: block;
		color: #999;		
		line-height: 28px;
		font-size: 12px;
		letter-spacing: 1px;		
		cursor: pointer;
	}
	.times li:hover{
		background:#d5d5d5;
		width:388px;
		color:#666;
		border-radius:4px;
	}
	.times li p{	
		padding:0 10px;
		width:380px;
		font-size:12px;

	}
	.texarea {
		width: 368px;
		height: 70px;
		padding: 8px 10px;
		margin-bottom: 20px;
		outline:0;
		color:#666;
	}

	.free {
		/* height:80px; */
		padding: 15px 25px;
		margin-bottom: 20px;
		color: #333;
		position: relative;
	}

	.fengmi {
		background: url(/img/i/order.png) no-repeat -30px -85px;
		width: 24px;
		height: 12px;
		display: inline-block;
		position: absolute;
		top: 20px;
		right: 20px;
	}

	.free p {
		margin-top: 18px;
		line-height: 25px;
		/* display:hidden; */

	}

	.submit {
		height: 58px;
		background-color: #ff9d00;
		line-height: 58px;
		text-align: center;
	}

	.submit a {
		color: #fff;
		font-weight: bold;
		font-size: 18px;
	}

	.rigth_info {
		width: 329px;
		height: 556px;

	}

	.rigth_info h4 {
		color: #333;
		width:297px;
		height: 35px;
		line-height: 35px;
		padding: 0 15px;
		background-color: #f9f9f9;
	}

	.expense_details {
		width: 328px;
		height: 161px;
		margin-bottom: 20px;
	}

	.deail {

		height: 40px;
		padding: 10px 15px 0 15px;
	}

	.price {
		height: 40px;
		padding: 20px 15px;

	}

	.price h3 {
		color: #333;
		font-weight: normal;
	}

	.price span {
		font-size: 18px;
		font-weight: bold;
		color: #ff8d00;
	}

	.cancel {
		background-color: #ffbfb9;
		border-color: #ffbfb9;
		color: #ff584b;
		padding: 10px;
		margin-bottom: 20px;
		font-size: 12px;
	}

	.prompt {
		height: 40px;
		line-height: 20px;
		padding: 10px;
		margin-bottom: 20px;
		background-color: #f9f9f9;
		color: #333;
		font-size: 12px;
	}

	.rigth_info h5 {
		text-align: right;
		height: 16px;
		margin-bottom: 5px;
	}

	.platfom_desc ul {
		list-style: disc;
		font-size: 12px;
		padding: 10px 5px 10px 30px;
	}

	.platfom_desc li {
		list-style: disc;
		margin-bottom: 10px;
	}

	.platfom_desc p {
		font-size: 12px;
	}

	.platfom_desc .house_desc {
		color: #ff8a00;
		margin-top: 20px;
	}

	.foot {
		width: 100%;
		height: 100px;
		margin-top: 50px;
		font-size: 12px;
		border-top: 1px solid #ebebeb;
	}

	.foot i {
		width: 130px;
		height: 30px;
		margin: 50px 0 -5px 5px;
		background: url(/img/i/mfw.png)0 0 no-repeat;
		background-size: 100px;
	}

	.input_name,
	.input_email {
		position: relative;
	}

	.input_phone {
		position: relative;
		width: 286px;
	}

	.order_info label {
		position: absolute;
		top: 18px;
		left: 10px;


	}

	.user_info {
		position: relative;
	}


	.tips_err {
		color: #ff584b;
		font-size: 12px;
		/* display:none;  */
		width: 100px;
		height: 20px;
		margin-left: 10px;
		margin-right: 10px;
		
	
	}

	.tips_success {
		color: green;
		font-size: 14px;	
		width: 20px;
		height: 20px;
		border-radius: 50%;
		border: 1px solid green;
		text-align: center;
		font-weight: bold;
		background: #fff;
		margin-left:10px;
		margin-right: 10px;
		padding:2px 7px;
	}
	.tips_errs {
		color: #ff584b;
		font-size: 12px;
		/* display:none;  */
		width: 100px;
		height: 20px;
		margin-left: 10px;
		margin-right: 10px;
		margin-top:20px;
		
	
	}

	.tips_successs {
		color: green;
		font-size: 14px;	
		width: 20px;
		height: 20px;
		border-radius: 50%;
		border: 1px solid green;
		text-align: center;
		font-weight: bold;
		background: #fff;
		margin-left:10px;
		margin-right: 10px;
		margin-top:20px;
	}
</style>
<script>
	export default {
		data() {
			return {
				jing:false,
				gao:false,
				lin:false,
				content: '',
				text: '',
				usernames: '',
				phone: '',
				email: '',
				err: false,
				success: false,
				errs: false,
				successs: false,
				fengmi: false,
				room: false,
				reading: false,
				house: false,
				hotel_order: [],
				id:'',
				id:this.$route.params.id,
				title:'三亚',
				email_f:false,
				email_s:false,
				name_f:false,
				name_s:false,
				x_f:false,
				x_s:false,
				m_f:false,
				m_s:false,
				p:'',
				add:false,
				dele:true,
				nums:true,
				mm_s:false,
				mm_f:false,
				cont:'',
				input:'',
				timee:false,
				 arr:[],
				 n:0,
				 n2:0,
				 n3:0,
				 r:false,
				 r2:false,
				 r3:false
			}

		},
		mounted() {
		
			//////////////////////
			this.id=this.$route.params.id;
			if(this.id!=undefined){
				console.log(this.id)
			this.axios.get(`/hotel/hotel_order?id=${this.id}`).then(res => {
				this.hotel_order=res.data;
				this.title=this.hotel_order[0].hotel_name;
				document.title=`${this.title}预订--马蜂窝平台`				
			})
			}
			
		},

		methods: {
			
	///////////////
			getdatas(){
				this.id=this.$route.params.id;
			console.log(this.$route.params)
			this.axios.get(`/hotel/hotel_order?id=${this.id}&arr=${this.arr}`).then(res => {
				this.hotel_order=res.data.results;
				console.log(this.hotel_order)
				this.title=this.hotel_order[0].hotel_name;						
			})
			},

			adds(){
				this.add=true
				this.nums=false
			},
			deles(){
				this.add=false;
				this.nums=true

			},
			xx(){
				let xx=this.$refs.xx
				var reg = /^[\u4e00-\u9fa5]{1,5}$/;
				if (reg.test(this.cont) & this.cont!='') {
					this.xx_s = true;
					this.xx_f = false
					xx[0].style.border="1px solid black"
				
				} else {
					this.xx_f= true;
					this.xx_s = false
					xx[0].style.border="1px solid red"
				}
			},
			mm(){
				let mm=this.$refs.mm
				var reg = /^[\u4e00-\u9fa5]{1,5}$/;
				if (reg.test(this.input) & this.input!='') {
					this.mm_s = true;
					this.mm_f = false
					mm[0].style.border="1px solid black"
				} else {
					this.mm_f= true;
					this.mm_s = false
					mm[0].style.border="1px solid red"
				}
			},
			m(){
				console.log(this.text)
				let m=this.$refs.m
				var reg = /^[\u4e00-\u9fa5]{1,5}$/;
				if (reg.test(this.text) & this.text!='') {
					this.m_s = true;
					this.m_f = false
					m[0].style.border="1px solid black"
				} else {
					this.m_f= true;
					this.m_s = false
					m[0].style.border="1px solid red"
				}
			},
			x(){
				console.log(this.content)
				let x=this.$refs.x
				var reg = /^[\u4e00-\u9fa5]{1,5}$/;
				if (reg.test(this.content) & this.content!='') {
					this.x_s = true;
					this.x_f = false
					x[0].style.border="1px solid black"
				} else {
					this.x_f= true;
					this.x_s = false
					x[0].style.border="1px solid red"
				}
			},
			//姓名验证
			names(){
				console.log(this.usernames)
				let names=this.$refs.names
				var reg = /^[\u4e00-\u9fa5]{1,5}$/;
				if (reg.test(this.usernames) & this.usernames!='') {
					this.name_s = true;
					this.name_f = false
					names[0].style.border="1px solid black"
				} else {

					this.name_f= true;
					this.name_s = false
					names[0].style.border="1px solid red"
				}
			},
			//手机号验证
			phones() {
				console.log(this.phone)
					let input=this.$refs.phone
				var reg=/^1[3-9]\d{9}$/;
				
			
				console.log(this.phone)
				if (reg.test(this.phone) & this.phone!='') {
					this.successs=true;
					this.errs=false;
					input[0].style.border="1px solid black"

				
				} else {
					this.successs=false
					this.errs = true
								
				input[0].style.border="1px solid red"
				
				}
			
			},	
			//邮箱验证			 
			emails() {
				console.log(this.email)
				let email=this.$refs.email
				var reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
				if (reg.test(this.email) & this.email != "") {
					this.email_s = true;
					this.email_f = false
					email[0].style.border="1px solid black"
				} else {
						this.email_s = false;
					this.email_f = true
					email[0].style.border="1px solid red"
				}
			},
			//点击显示和隐藏
			dixian() {
				this.fengmi=!this.fengmi
			},
			yaoqiu() {
				this.room=!this.room
			},
			rooms(){
				 this.jing=!this.jing
				let a=this.$refs.span_a[0]
				this.n++
				if(this.n>0 & this.n%2==0){

					this.r=false

				}else{
					this.r=true
				}
					
			},
			roomss(){
				this.gao=!this.gao
				let b=this.$refs.span_b[0]
				this.n2++
				if(this.n2>0 & this.n2%2==0){

					this.r2=false

				}else{
					this.r2=true
				}
			},
			roomsss(){
				this.lin=!this.lin
				let c=this.$refs.span_c[0]
				this.n3++
				if(this.n3>0 & this.n3%2==0){

					this.r3=false

				}else{
					this.r3=true
				}				
			},
			//备注
			textarea(){
				this.$refs.area[0].style.border="1px solid #ff9d00"
				console.log(this.$refs.area[0])
				
			},
			read() {
				this.reading=!this.reading
			},
			close_house() {
				this.house=!this.house
			},
			house_baozhang() {
				this.house=!this.house
			},
			time(){
				this.timee=!this.timee;
			},
			times(event){
				let time=this.$refs.time;
				console.log(time[0])
				let li=event.currentTarget
				console.log(li)
				time[0].value=li.innerText
				this.timee=false

			},
			chuan(){
			
				
				this.arr.push(this.usernames,this.phone,this.content,this.text,this.email)
				console.log(this.arr)
				this.getdatas()

			}


		}

	}
</script>
