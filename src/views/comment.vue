<template>
	<div class="wrapper">
		<div class="sd-title">
			蜂蜂点评(共有<em>{{allCount}}</em>条真实评论)
		</div>
		<div class="starNav">
			<ul class="comment-nav" @click="changeStar($event)">
				<li :class="{active:star==0}"><router-link to="" class="clear-left" data-num="0">全部<span></span></router-link></li>
				<li :class="{active:star==4}"><router-link to="" data-num="4" >推荐</router-link></li>
				<li :class="{active:star==3}"><router-link to="" data-num="3">好评</router-link></li>
				<li :class="{active:star==2}"><router-link to="" data-num="2">中评</router-link></li>
				<li :class="{active:star==1}"><router-link to="" data-num="1">差评</router-link></li>
				<li :class="{active:star==5}"><router-link to="" data-num="5">金牌点评</router-link></li>
			</ul>
		</div>
		
		<ul class="comment-box">
			<li v-for="(t,i) of comment" :key="i">
				<div class="user">
					<img :src="t.user_pic" ><br>
					<span>LV.{{t.level}}</span>
				</div>
				<router-link to="">{{t.user}}</router-link>
				<span :class="starLogo(t.star)" class="user-star" :data-star="t.star"></span>
				<i class="gold" v-show="t.star==5"></i>
				<p v-html="t.content"></p>
				<div class="comment-pic">
					<img v-for="(a,j) of t.pics.split('|')" :key="j" v-show="j<4" :src="a">
				</div>
				<div class="info">
					<span class="time">{{t.date}}</span>
					<span class="form"> 此条点评来自游记 <router-link to=""> 《{{t.commentFrom}}》 </router-link></span> <router-link to="" @click.native="openReplyBox(i)">评论</router-link>
					<ul class="reply">
						<li v-for="(b,k) of reply[i]" :key="k">
							<!-- <div>{{b}}</div> -->
							<img :src="b.user_pic" >
							<router-link to="">{{b.user}}</router-link><span v-show="b.toUser!=null"> 回复 </span><router-link to="">{{b.toUser}}</router-link>：{{b.content}}
							<router-link to="" @click.native="ReplyToUser(b.id,b.user,i)">回复</router-link><br>
							<span class="time" v-html="b.date"></span>
						</li>
						<!-- <li class="more_reply"><router-link to="">还有3条回复</router-link></li> -->
					</ul>
					<div class="addReply" v-show="checkedReply===i">
						<textarea ref="inputVal" class="inputReply" :placeholder="placeholder" v-model="replyContent" :class="{height:checkedReply===i}" @blur="closeReplyBox"></textarea>
						<router-link to="" @click.native="submitReply(t.id)">发表</router-link>
					</div>
					
				</div>
			</li>
			
					
		</ul>
		<div class="comment-paging">
			<span>共{{Math.ceil(count/pageSize)}}页 / {{count}}条</span>
			<li class="active" @click="prev" v-show="page!=1">前一页</li>
			<li :class="{active:i==page}" v-for="i of Math.ceil(count/pageSize)" @click="changePage(i)">{{i}}</li>
			
			<li class="active" @click="next" v-show="page!=Math.ceil(count/pageSize)">后一页</li>
			<li class="active" @click="changePage(Math.ceil(count/pageSize))">末页</li>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				placeId:"",
				comment:[],
				reply:[],
				star:0,
				stars:["star_1","star_2","star_3","star_4","star_5"],
				page:1,
				pageSize:3,
				count:"",
				allCount:"",
				isAutofocus:"",
				checkedReply:"",
				replyContent:"",
				placeholder:"发表评论",
				reply_id:""
			}
		},
		methods:{
			// 打开对应评论的评论窗口
			openReplyBox(i){
				this.reply_id=""
				this.placeholder=`发表评论`
				this.replyContent=""
				this.checkedReply=i
				this.$nextTick(function () {
						document.getElementsByClassName('inputReply')[i].focus()
				})
				
			},
			closeReplyBox(){
				console.log(this.peplyContent)
				if(this.replyContent==undefined){
					this.checkedReply=""
				}
			},
			// 回复给评论中的指定用户
			ReplyToUser(id,user,i){
				this.checkedReply=""
				this.replyContent=""
				this.reply_id=""
				this.reply_id=id
				this.checkedReply=i
				this.$nextTick(function () {
						document.getElementsByClassName('inputReply')[i].focus()
				  })
				this.placeholder=`回复给 ${user}:`
			},
			// 发表评论，提交数据到服务器
			// 需要提交的信息有用户的名称、用户的头像、评论的内容、评论的游记id、评论的时间
			submitReply(commentId,reply_id){
				let user=this.$store.state.nickName;
				let user_pic=this.$store.state.pic;
				let date=this.moment().format().split('T')[0]+' '+new Date().toTimeString().split(' ')[0]
				let content=this.replyContent
				let family_id=commentId
			
				console.log(this.reply_id)
				// 如果回复id为空的话则回复给评论
				if(this.reply_id==""){
					this.axios.post('/lvyou/replyAdd',
						`user=${user}&user_pic=${user_pic}&date=${date}&content=${content}&family_id=${family_id}`
					).then(result=>{
						if(result.data==1){
							console.log(111)
							this.checkedReply=false
							location.reload()
						}else{
						}
					})
					// 如果回复id不为空的话则回复给回复
				}else if(this.reply_id!=""){
					this.axios.post('/lvyou/comment_replyAdd',
						`user=${user}&user_pic=${user_pic}&date=${date}&content=${content}&family_id=${family_id}&reply_id=${this.reply_id}`
					).then(result=>{
						if(result.data==1){
							console.log(222)
							this.checkedReply=false
							location.reload()
						}else{
						}
					})
				}
				
				
			},
			
			// 根据星级选择分类
			changeStar(e){
				if(e.target.dataset.num!=undefined && typeof(Number(e.target.dataset.num))=='number'){
					this.star=e.target.dataset.num
				}
			},
			changePage(page){
				this.page=page
			},
			prev(){
				page--;
			},
			next(){
				page++;
			},
			getComment(placeId,page,pageSize,star){
				this.axios.get('/lvyou/comment',{
					params:{
						placeId:placeId,
						typeId:1,
						star:star,
						page:page,
						pageSize:pageSize
					}
				}).then(result=>{
					this.comment=result.data.result
					this.count=result.data.commentCount;
					
					if(star==0){
						this.allCount=result.data.commentCount;
						this.$parent.JD_comment=this.allCount
					}
					if(this.comment!=undefined){
						let arr=this.comment
						
						this.getReply(arr)
					}
				})
			},
			getReply(arr){
				this.reply=[];
				for(let obj of arr){
					this.axios.get('/lvyou/comment_reply',{
						params:{
							comment_id:obj.id
						}
					}).then(result=>{
						for(let i=0;i<result.data.length;i++){
							if(result.data[i].reply_id!=0){
								// 这里拿到回复人的用户名
								// console.log(result.data[i].user)
								this.axios.get('/lvyou/comment_reply',{
									params:{
										id:result.data[i].reply_id
									}
								}).then(res=>{
									// 这里拿到被回复人的用户名
									// console.log(res.data[0].user)
									result.data[i].toUser=res.data[0].user
								})
							}
						}
						this.reply.splice([obj.id-1],1,result.data)
						
						
					})
				}
			}
		},
		watch:{
			placeId(){
				this.getComment(this.placeId,this.page,this.pageSize,this.star)
			},
			star(){
				this.getComment(this.placeId,this.page,this.pageSize,this.star)
			},
			page(){
				this.getComment(this.placeId,this.page,this.pageSize,this.star)
			},
			
			
		},
		created(){
		},
		mounted(){
			// console.log(this.placeId)
			// this.getComment(this.placeId,this.page,this.pageSize,this.star)
		},
		computed:{
			starLogo(){
				return function(star){
					if(star==1){
						return {star_1:true}
					}else if(star==2){
						return {star_2:true}
					}else if(star==3){
						return {star_3:true}
					}else if(star==4){
						return {star_4:true}
					}else if(star==5){
						return {star_5:true}
					}
				}
				
				
				let star=this.star;
				if(star==1){
					return {star_1:true}
				}else if(star==2){
					return {star_2:true}
				}else if(star==3){
					return {star_3:true}
				}else if(star==4){
					return {star_4:true}
				}else if(star==5){
					return {star_5:true}
				}
					
				
			},
			
		
		}
		
	}
</script>

<style scoped>
	.addReply{
		/* height: 100px; */
	}
	.addReply a{
		float: right;
		margin-top: 5px;
		padding: 0 10px;
		line-height: 26px;
		background-color: #ffa800;
		color: #fff;
		font-size: 14px;
	}
	.addReply:after{
		content: '';
		display: block;
		clear: both;
	}
	.inputReply{
		width: 930px;height: 100px;
		color: #333333;
		overflow: hidden;
		padding: 5px 10px;
		border: 2px solid #FF7000;
		font-size: 14px;
		outline: none;
		resize: none;
		animation: height 0.5s linear;
	}
	@keyframes height{
		from{height: 0;}
		to{height: 100px;}
	}
	/* 用户评论 */
	.starNav{
		border-bottom: 0.0625rem solid #EEEEEE;
	}
	.comment-nav{
		display:inline-block;
		padding-bottom: 1rem;
	}
	.comment-nav>li{
		float: left;
		display:inline-block;
		margin: 0.3125rem 0;
	}
	.active{
		background: #FF9D00 !important;
		color: #FFFFFF !important;
	}
	.active>a{
		color: #FFFFFF !important;
	}
	.comment-nav:after{
		content: "";
		display: block;
		clear: both;
	}
	.comment-nav a{
		color: #333333;
		padding:0 1.25rem;
		border-left: 0.0625rem solid #EEEEEE;
	}
	.clear-left{
		border: 0!important;
		margin-left: 0 !important;
	}
	.comment-nav span{
		font-size: 0.833333rem;
		color: #999999;
	}
	.comment-box{
		/* border-bottom: 0.0625rem dashed #DEDEDE; */
	}
	.comment-box>li{
		padding: 1.5625rem 0 1.25rem 4.375rem;
		border-bottom: 0.0625rem dashed #dedede;
	}
	.comment-box>li:last-child{
		border-bottom: 0.0625rem solid #dedede !important;
	}
	.comment-box .user{
		display: inline-block;
		float: left;
		text-align: center;
		margin-left: -70px;
	}
	.comment-box .user>img{
		width: 48px;height: 48px;
		border-radius: 50%;
	}
	.comment-box .user>span{
		display: inline;
		margin: 0 auto;
		font-size: 0.833333rem;
		color: #ea3c1a;
	}
	.user-star{
		display: inline-block;
		width: 4.1875rem;height: 0.8125rem;
		background: url(/img/sprites/shopping-icons3.png) no-repeat;
	}
	.star_1{background-position: -114px -90px !important;}
	.star_2{background-position: -101px -90px !important;}
	.star_3{background-position: -87px -90px !important;}
	.star_4{background-position: -73px -90px !important;}
	.star_5{background-position: -60px -90px !important;}
	.gold{
		display: inline-block;
		margin-left: 3px;
		width: 89px;
		height: 22px;
		margin-top: -2px;
		background: url(/img/sprites/shopping-icons3.png) no-repeat -60px -110px;
		overflow: hidden;
		vertical-align: top;
	}
	.comment-box p{
		margin: 0.5rem 0 0.625rem;
	}
	.comment-pic img{
		margin-right: 0.625rem;
		margin-bottom: 0.625rem;
	}
	.sd-title {
		margin-bottom: 1.25rem;
		font-size: 1.25rem;
		color: #333333;
	}
	.sd-title .info .time{
		margin-right: 1.25rem;
		font-size: 0.833333rem;
		color: #999999;
	}
	.sd-title .info .form{
		font-size: 0.833331rem;
	}
	.sd-title .info .form
	.sd-title .info>a{
		float: right;
	}
	.reply{
		max-height: 200px;
		overflow: auto;
		margin-top: 10px;
		border-top:0.0625rem solid #e7e7e7;
	}
	.reply li{
		display: block;
		padding:7px 15px 7px 35px;
		border-bottom: 0.0625rem dotted #e7e7e7;
	}
	.reply li>img{
		float: left;
		width: 16px;height: 16px;
		margin:1px 0 0 -24px;
		border-radius: 50%;
	}
	.comment-paging{
		padding: 1.25rem 0;
		text-align: right;
	}
	.comment-paging span{
		padding-right: 0.75rem;
		color: #999999;
		font-size: 0.75rem;
	}
	.comment-paging li{
		display: inline-block;
		font-size: 0.75rem;
		padding: 7px;
		margin-left: 0.3125rem;
		border-radius: 0.25rem;
		line-height: 12px;
		color: #666666;
		cursor: pointer;
	}
</style>
