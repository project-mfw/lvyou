<template>
	<div class="calendar">
		<div>
			<div class="header"><i class="btn-left" @click="prev"></i>{{monthCn[month-1]}} {{year}}</div>
			<ul>
				<li v-for="(t,i) in week" :key="i" :class="{orange:t=='六'||t=='日',blod:true}">{{t}}</li>
				<li v-for="(t,i) of dates_1" :class="{
					none:t.getMonth()!=month-1,
					past:t.getTime()<nowDay.getTime()-24*60*60*1000,
					start:start.getTime()==t.getTime(),
					end:end.getTime()==t.getTime(),
					dark:t.toLocaleDateString()==nowDay.toLocaleDateString(),
					between:start.getTime()<t.getTime() && t.getTime()<end.getTime()
				}"
				 @click="selectDate($event)" :data-date="t.toLocaleDateString()">{{t.getDate()}}</li>
			</ul>
		</div>
		<div>
			<div class="header">{{month==12?monthCn[month-12]:monthCn[month]}} {{month==12?year+1:year}}<i class="btn-right" @click="next"></i></div>
			<ul>
				<li v-for="(t,i) in week" :key="i" :class="{orange:t=='六'||t=='日',blod:true,}">{{t}}</li>
				<li v-for="(t,i) of dates_2" :class="{
					none:month==12?t.getMonth()!=month-12:t.getMonth()!=month,
					start:start.getTime()==t.getTime(),
					end:end.getTime()==t.getTime(),
					between:start.getTime()<t.getTime() && t.getTime()<end.getTime()
				}"  @click="selectDate($event)" :data-date="t.toLocaleDateString()">{{t.getDate()}}</li>
			</ul>
		</div>
	</div>
</template>

<script>
	// console.log(new Date(t.setMonth(t.getMonth()+1)))
	export default{
		data(){
			return{
				week:['一','二','三','四','五','六','日'],
				monthCn:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
				month:"",
				year:"",
				date:"",
				dates_1:[],
				dates_2:[],
				
				nowDay:"",
				// 保存父组件传递过来的模式选择
				pattern:"",
				// 选择的起始日期
				start:new Date(),
				// 选择的结束日期
				end:new Date()
			}
		},
		methods:{
			selectDate(e){
				// 获取绑定在点击元素上的属性值，用'/'切割成数组，使用new Date()重新转换成时间数据
				let arr=e.target.dataset.date.split("/");
				let date=new Date(`${arr[0]}/${arr[1]}/${arr[2]}`);
				// 根据从父组件传递过来的选择，判断使用哪种模式
				// 如果选择模式为start时
				if(this.pattern=="start"){
					// 当选择开始日期等于当前日期或者小于结束日期时
					if(this.start.toLocaleDateString()==new Date().toLocaleDateString()||date<this.end){
						this.$parent.checkedDate="end";
						// 将选择的日期保存到变量start中，并通过监听start传递给父组件
						this.start=date;
						this.$parent.pattern="end";
						// 当用户选择了大于结束日期的开始时间时
					}else if(date>this.end){
						// 将选择的日期保存到变量start中，并通过监听start传递给父组件
						this.start=date;
						// 重置结束日期为 开始日期后一天的时间
						this.end=new Date(date.getTime()+24*60*60*1000);
						// 告诉父组件切换模式到结束框重新输入
						this.$parent.checkedDate="end";
						this.pattern="end";
					}
				// 如果选择模式为end时
				}else if(this.pattern=="end"){
					// 当选择结束日期等于当前日期或者大于开始日期时
					if(this.end.toLocaleDateString()==new Date().toLocaleDateString()||date>this.start){
						// 将选择的日期保存到变量end中，并通过监听start传递给父组件
						this.end=date;
						this.$parent.checkedDate="";
						// 当用户选择了小于开始日期的结束时间时
					}else if(date<this.start){
						// 将选择的日期保存到变量end中，并通过监听start传递给父组件
						this.end=date;
						// 重置开始日期为 结束日期前一天的时间
						this.start=new Date(date.getTime()-24*60*60*1000);
						// 告诉父组件切换模式到开始框重新输入
						this.$parent.checkedDate="start";
					}
				}
			},
			prev(){
				if(this.month-1==this.nowDay.getMonth()&&this.year==this.nowDay.getFullYear()){
					return
				}
				this.date=new Date(this.date.setMonth(this.date.getMonth()-1))
				this.year=this.date.getFullYear()
				this.month=this.date.getMonth()+1
				this.dates_1=this.getDates(this.year,this.month);
				if(this.month==12){
					this.dates_2=this.getDates(this.year+1,this.month-11);
				}else{
					this.dates_2=this.getDates(this.year,this.month+1);
				}
			},
			next(){
				this.date=new Date(this.date.setMonth(this.date.getMonth()+1))
				this.year=this.date.getFullYear()
				this.month=this.date.getMonth()+1
				this.dates_1=this.getDates(this.year,this.month);
				if(this.month==12){
					this.dates_2=this.getDates(this.year+1,this.month-11);
				}else{
					this.dates_2=this.getDates(this.year,this.month+1);
				}
			},
			getDates(year,month){
				// 获得当月第一天时间
				let monthFirstDay=new Date(`${year}-${month}-1`);
				// 接着获取到这天是周几
				let week=monthFirstDay.getDay()
				// getDay()只能得到0~6，为了之后的计算，需要手动将0调整为7
				if(week==0){
					week=7
				}
				// 计算当月第一天距离第一格的位置
				let n=week-1;
				// 获得日历第一格的时间
				let firstDay=new Date(monthFirstDay.getTime()-n*24*60*60*1000).getTime();
				// 让第一格的时间累加24小时后，放入数组中。
				// 因为日历6行7列布局,总共42个格子,所有要循环41次。最后得到一个包含整页日期的数组
				let arr=[]
				for(let i=0;i<42;i++){
					arr[i]=new Date(firstDay);
					firstDay+=24*60*60*1000;
				}
				// 将数组返回出去
				return arr;
			}
		},
		watch:{
			start(){
				console.log(this.$parent.startDate)
				this.$parent.startDate=this.start
				console.log(this.$parent.startDate)
			},
			end(){
				this.$parent.endDate=this.end
			}
		},
		mounted(){
			this.date=new Date();
			this.nowMonth=new Date().getMonth()+1;
			this.nowYear=new Date().getFullYear();
			this.nowDay=new Date();
			
			// 获得当前月份
			this.month=new Date().getMonth()+1;
			// 获得当前年份
			this.year=new Date().getFullYear();
			// 获得当前日期
			this.day=new Date().getDate();
			
			// 调用函数,输入年、月，输出数组保存在变量
			// 第一页
			this.dates_1=this.getDates(this.year,this.month);
			// 第二页
			// 如果第一页的月份为12月，则第二页年份+1，月份-11
			if(this.month==12){
				this.year++;
				this.month-11;
			}
			// 第二页始终为第一页月份的下个月所以要+1
			this.dates_2=this.getDates(this.year,this.month+1);
		},
		
	}
</script>

<style>
	.calendar{
		/* width: 526px;height: 268px; */
		width: 100%;height: 100%;
		border: 0.0625rem solid #ffa800;
		border-radius: 0.25rem;
		box-shadow: 0 0 0.25rem #ffa800;
		background: #fefefe;
		padding: 0.75rem;
		overflow: hidden;
		color: #333;
		font-size: 80%;
		font-family: inherit;
	}
	.calendar>div{
		float: left;
		z-index: 999;
		width: 49.9%;height: 100%;
		padding: 10px;
		text-align: center;
	}
	.calendar>div:first-child{
		border-right: 1px solid #E4E4E4;
	}
	.calendar .header{
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 1.625rem;
		padding:0 1.875rem;
	}
	.calendar>div .btn-left{
		position: absolute;
		left: 0;top: 0;bottom: 0;
		margin: auto;
		width: 10px;
		height: 13px;
		background: url(/img/sprites/datepicker-arrow.png);
		cursor: pointer;
	}
	.calendar>div .btn-right{
		position: absolute;
		right: 0;top: 0;bottom: 0;
		margin: auto;
		width: 10px;
		height: 13px;
		background: url(/img/sprites/datepicker-arrow.png) no-repeat -10px 0;
		cursor: pointer;
	}
	.calendar ul{
		width: 100%;height: 80%;
	}
	.calendar ul>li{
		display: flex;
		justify-content: center;
		align-items: center;
		float: left;
		width: 14.2857%;height: 16.66666%;
		cursor: pointer;
		overflow: hidden;
	}
	.calendar ul>li:hover{
		background: #FF9D00;
		color: #fff;
	}
	.calendar .none{
		
		opacity: 0 !important;
	}
	.calendar .orange{
		font-weight: bold;
		color: orange;
	}
	.calendar .past{
		opacity: .35;
		background: #fff !important;
		color: #666 !important;
		pointer-events:none;
		cursor: default;
	}
	.calendar .dark{
		color: #fff;
		background: #757575;
		opacity: 1 !important;
	}
	.calendar .between{
		background: #e0e0e0;
	}
	.calendar .start{
		position: relative;
		color: #fff;
		background: #FF9D00;
		opacity: 1 ;
	}
	.calendar .end{
		display: flex;
		align-items: center;
		position: relative;
		color: #fff;
		background: #FF9D00;
		opacity: 1;
	}
	.start:after{
		content: " ";
		position: absolute;
		top: 50%;
		left: 1.6875rem;
		border-left:6px solid #FF9D00 !important; 
		margin-top: -15.5px;
		border: 15.55px solid #e0e0e0;
		width: 0;
		height: 0;
		font-size: 0;
		line-height: 0;
	}
	.end:after{
		content: " ";
		position: absolute;
		top: 50%;
		right: 1.6875rem;
		border-right: 6px solid #FF9D00 !important;
		margin-top: -15px;
		border-left: 1px solid transparent;
		border: 15px solid #e0e0e0;
		width: 0;
		height: 0;
		font-size: 0;
		line-height: 0; 
	}
</style>
