const express=require("express");
var r=express.Router();
var p=require("../pool");
// 插入一条景点评论
r.post('/commentAdd',(req,res)=>{
	let obj=req.body;
	let sql="INSERT lv_comment(place_id,type_id,user,user_pic,level,content,date,star) VALUES(?,?,?,?,?,?,?,?)"
	// let sql="INSERT lv_comment(place_id,type_id,user,user_pic,level,content,date,star) VALUES(?)"
	p.query(sql,[obj.place_id,obj.type_id,obj.user,obj.user_pic,obj.level,obj.content,obj.date,obj.star],(err,result)=>{
		if(err) throw err;
		if(result.affectedRows==1){
			res.send('1')
		}else{
			res.send('0')
		}
	})
})
// 评论接口
r.get('/comment',(req,res)=>{
	let obj=req.query;
	let page=Number(obj.page)
	let pageSize=Number(obj.pageSize)
	let start=(page-1)*pageSize
	let star=Number(obj.star)
	if(star==0){
		let sql="select count(*) as count from lv_comment where place_id =? and type_id =?"
		p.query(sql,[obj.placeId,obj.typeId],(err,count)=>{
			if(err) throw err
			let commentCount=count[0].count
			let sql='select * from lv_comment where place_id =? and type_id =? limit ?,?'
			p.query(sql,[obj.placeId,obj.typeId,start,pageSize],(err,result)=>{
				if(err) throw err;
				res.send({result,commentCount})
			})
		})
	}else{
		let sql="select count(*) as count from lv_comment where place_id =? and type_id =? and star=?"
		p.query(sql,[obj.placeId,obj.typeId,star],(err,count)=>{
			if(err) throw err
			let commentCount=count[0].count
			let sql='select * from lv_comment where place_id =? and type_id =? and star=? limit ?,?'
			p.query(sql,[obj.placeId,obj.typeId,star,start,pageSize],(err,result)=>{
				if(err) throw err;
				res.send({result,commentCount})
			})
		})
	}
	
	
})

// 插入一条评论接口
r.post('/replyAdd',(req,res)=>{
	let obj=req.body;
	let sql='INSERT lv_reply(user,user_pic,date,content,family_id) VALUES(?,?,?,?,?)'
	p.query(sql,[obj.user,obj.user_pic,obj.date,obj.content,obj.family_id],(err,result)=>{
		if(err) throw err;
		if(result.affectedRows==1){
			res.send("1")
		}else{
			res.send("0")
		}
	})
})
// 插入一条回复接口
r.post('/comment_replyAdd',(req,res)=>{
	let obj=req.body;
	console.log(obj)
	let sql='INSERT lv_reply(user,user_pic,date,content,family_id,reply_id) VALUES(?,?,?,?,?,?)'
	p.query(sql,[obj.user,obj.user_pic,obj.date,obj.content,obj.family_id,obj.reply_id],(err,result)=>{
		if(err) throw err;
		console.log(result)
		if(result.affectedRows==1){
			res.send("1")
		}else{
			res.send("0")
		}
	})
})
// 评论回复接口
r.get('/comment_reply',(req,res)=>{
	let obj=req.query;
	if(obj.comment_id!=undefined){
		let sql='select * from lv_reply where family_id = ?'
		p.query(sql,[obj.comment_id],(err,result)=>{
			if(err) throw err;
			res.send(result)
		})
	}else if(obj.id!=undefined){
		let sql='select * from lv_reply where id = ?'
		p.query(sql,[obj.id],(err,result)=>{
			if(err) throw err;
			res.send(result)
		})
	}
	
})
// 线路推荐接口
r.get('/line_list',(req,res)=>{
	let obj=req.query;
	let sql='select * from lv_line where family_id = ?';
	p.query(sql,[obj.id],(err,result)=>{
		if(err) throw err;
		res.send(result)
	})
})
// 酒店信息
r.get('/hotel',(req,res)=>{
	let obj=req.query;
	console.log(obj)
	let sql='select * from lv_hotel where family_id= ?'
	p.query(sql,[obj.placeId],(err,result)=>{
		if(err) throw err
		console.log(result)
		res.send(result)
	})
})
// 酒店类型分类接口
r.get('/hotel_type',(req,res)=>{
	let obj=req.query;
	let sql='select * from lv_hotel_type where family_id = ?';
	p.query(sql,[obj.id],(err,result)=>{
		if(err) throw err;
		res.send(result)
	})
})
// 酒店区域分类接口
r.get('/hotel_place',(req,res)=>{
	let obj=req.query;
	let sql='select * from lv_hotel_place where family_id = ?';
	p.query(sql,[obj.id],(err,result)=>{
		if(err) throw err;
		res.send(result)
	})
})
// 美食分类借口
r.get('/food_list',(req,res)=>{
	let obj=req.query;
	let sql='select * from lv_food where family_id = ?';
	p.query(sql,[obj.id],(err,result)=>{
		if(err) throw err;
		res.send(result)
	})
})
// 问答列表接口
r.get('/qa_list',(req,res)=>{
	let obj=req.query;
	let sql='select * from lv_qa where family_id = ?';
	p.query(sql,[obj.id],(err,result)=>{
		if(err) throw err;
		res.send(result)
	})
})

// 获取攻略列表接口
r.get('/gl_list',(req,res)=>{
	let obj=req.query;
	let sql='select * from lv_strategy where family_id = ?';
	p.query(sql,[obj.id],(err,result)=>{
		if(err) throw err;
		res.send(result)
	})
})
r.get('/mfw_gl_list',(req,res)=>{
	let obj=req.query;
	let sql='select * from mfw_strategy where family_id = ?';
	p.query(sql,[obj.id],(err,result)=>{
		if(err) throw err;
		res.send(result)
	})
})
// 获取景点详情接口
r.get('/jd_details',(req,res)=>{
	let obj=req.query;
	let sql='select * from lv_scenic_spot where id=?'
	p.query(sql,[obj.id],(err,result)=>{
		if(err) throw err;
		res.send(result)
	})
})
// 获取景点列表接口
r.get('/jd_list',(req,res)=>{
	let obj=req.query;
	// 通过家族id寻找一个景点下包含的所有内部景点
	if(obj.jdId==undefined){
		let id=obj.id
		let sql='select * from lv_scenic_spot where family_id =  ?';
		p.query(sql,[id],(err,result)=>{
			if(err) throw err;
			res.send(result)
		})
		// 如果传入的是目的地的id那么返回这个目的地下的所有景点
	}else if(obj.id==undefined){
		let id=obj.jdId
		let sql='select * from lv_scenic_spot where jd_id =  ?';
		p.query(sql,[id],(err,result)=>{
			if(err) throw err;
			res.send(result)
		})
	}
	
})
// 通过景点标签筛选景点标签
r.get('/jd_list_label',(req,res)=>{
	let obj=req.query;
	let label=obj.label
	let sql='select * from lv_scenic_spot where label=?';
	p.query(sql,[label],(err,result)=>{
		res.send(result)
	})
})



// 获取游玩项目接口
r.get('/play',(req,res)=>{
	let obj=req.query;
	let sql='select * from lv_play where family_id= ? '
	p.query(sql,[obj.id],(err,result)=>{
		if(err) throw err;
		res.send(result)
	})
})

// 获取游记接口
r.get('/travel_notes',(req,res)=>{
	let obj=req.query;
	let pageSize=Number(obj.pageSize);
	let start=(Number(obj.page)-1)* pageSize;
	// 当没有目的地id传入的时候，用目的地名称查询
	if(obj.placeId==""){
		let sql='select count(*) as count from lv_notes';
		// 先获取所有数据的个数
		p.query(sql,(err,count)=>{
			if(err) throw err;
			count=count[0].count;
			let sql=`select * from lv_notes ORDER BY ${obj.collate} DESC limit ?,?`
			// 再进行分页查询
			p.query(sql,[start,pageSize],(err,result)=>{
				if(err) throw err;
				// 然后将数据总个数以及分页查询到数据返回客户端
				res.send({result,count})
				
			})
		})
	// 当有目的地id传入的时候，用目的地id查询
	}else{
		let sql='select count(*) as count from lv_notes where family_id = ?';
		p.query(sql,[obj.placeId],(err,count)=>{
			if(err) throw err;
			count=count[0].count;
			let sql=`select * from lv_notes where family_id = ? ORDER BY ${obj.collate} DESC limit ?,?`
			p.query(sql,[obj.placeId,start,pageSize],(err,result)=>{
				if(err) throw err;
				res.send({result,count})
			})
		})
	}
})
// 获取商城产品列表接口
r.get('/shopping',(req,res)=>{
	let obj=req.query;
	let sql='select * from lv_shopping where family_id= ?';
	p.query(sql,[obj.id],(err,result)=>{
		if(err) throw err;
		res.send(result)
	})
})

// 目的地列表接口
r.get('/place_list',(req,res)=>{
	let obj=req.query;
	// 这里应该使用模糊查询
	if(obj.place!=undefined){
		let str="%"+obj.place+"%";
		let sql=`select * from lv_place where place like ?`;
		p.query(sql,[str],(err,result)=>{
			if(err) throw err;
			res.send(result)
		})
	}else{
		let id=obj.id;
		let sql=`select * from lv_place where id = ?`;
		p.query(sql,[id],(err,result)=>{
			if(err) throw err;
			res.send(result)
		})
	}
	
	

})
// 下级城市查询
r.get('/place_include',(req,res)=>{
	let obj=req.query;
	// 这里应该使用模糊查询
	let sql=`select * from lv_place where family_id = ? `;
	p.query(sql,[obj.id],(err,result)=>{
		if(err) throw err;
		res.send(result)
	})
})


// 目的地百科接口
r.get('/place_baike',(req,res)=>{
	let obj=req.query;
	let sql='select * from lv_place_baike where place_id=?'
	p.query(sql,[obj.place_id],(err,result)=>{
		if(err) throw err;
		res.send(result)
	})
})


r.get('/country_city',(req,res)=>{
	// 接收到用户传入的参数
	let obj=req.query;
	// 作为查询条件去城市表中查询对应的城市的family_id,name_cn
	let sql='select family_id,name_cn from lv_city where name_cn = ?'
	p.query(sql,[obj.place],(err,result)=>{
		if(err) throw err;
		// 查询不到对应的城市信息时
		if(result.length==0){
			// 再将参数作为条件去国家表中查询对应国家信息
			let sql='select name_cn from lv_country where name_cn=?';
			p.query(sql,[obj.place],(err,result)=>{
				if(err) throw err;
				// 查询不到结果时
				if(result.length==0){
					res.send("0")
				}else{
				// 查询到结果时,将国家的名称返回到客户端
					let countryName=result[0].name_cn;
					res.send(countryName)
				}
				
			})
		// 查询到对应的城市信息时
		}else{
			let cityName=result[0].name_cn;
			// 将family_id作为条件到国家表中查询对应的国家的id,name_cn
			let sql='select id,name_cn from lv_country where id= ?';
			p.query(sql,[result[0].family_id],(err,result)=>{
				if(err) throw err;
				let countryId=result[0].id;
				// 将查询到国家名称保存到变量中
				let countryName=result[0].name_cn;
				// 再将国家的id作为条件在城市表中查询该国家下包含的所有城市的名称
				let sql='select name_cn from lv_city where family_id = ?';
				p.query(sql,[countryId],(err,citysName)=>{
					if(err) throw err;
					// 将查询到国家的名称和包含的所有城市名称返回到客户端
					res.send([countryName,cityName,citysName])
				})
			})
		}
	})
	
})












module.exports=r;