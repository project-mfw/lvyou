const express=require("express");
const server=express.Router();
const pool=require("../pool");

//获取主题住宿详情的接口
server.get('/theme_details',(req,res)=>{
    // //存储每页显示的记录数8
    let pagesize=6;
     //接收客户端传递的页数
     let page=req.query.page;
   
     //开始查询得值
     let offset=(page-1)*pagesize;
     let sql='select id from theme_details';
     pool.query(sql,(err,results)=>{
        if(err) throw err;
        let pagecount=parseInt(Math.ceil((results.length)/pagesize));
       
    let sql='select id,country,city,img from theme_details limit '+offset+','+pagesize;
    pool.query(sql,(err,results)=>{
        if(err) throw err;
        res.send({message:'查询成功',code:1,results:results});
        
    })
})
})
//获取特价酒店详情接口
server.get('/special_details',(req,res)=>{
    // //存储每页显示的记录数8
    let pagesize=8;
     //接收客户端传递的页数
     let pages=req.query.pages;
     //开始查询得值
     let offset=(pages-1)*pagesize;
     let sql='select id from special_details';
     pool.query(sql,(err,results)=>{
        if(err) throw err;
        
        //  let pagecount=(results.length)/pagesize;
         //2.计算总页数
let pagecount=parseInt(Math.ceil((results.length)/pagesize));
        // console.log(pagecount)
    let sql='select id,score,hotel_name,hotel_uname,img from special_details limit '+offset+','+pagesize;
    pool.query(sql,(err,results)=>{
        if(err) throw err;
        res.send({message:'查询成功',code:1,results:results});
       
    })
})
})
//获取所有酒店接口
server.get('/all_hotel',(req,res)=>{
    //获取客户端传递的数据
    let obj=req.query;

    // //存储每页显示的记录数7
    let pagesize=5;
     //接收客户端传递的页数
     let page=req.query.page; 
     //开始查询得值
     let offset=(page-1)*pagesize;
    
        let sql='select * from all_hotel where fid= ?';
        pool.query(sql,[obj.id],(err,results)=>{
            if(err) throw err;
             //2.计算总页数
    let pagecount=parseInt(Math.ceil((results.length)/pagesize));
           
     
    let sql='select * from all_hotel where fid=? limit '+ offset+','+pagesize;
    pool.query(sql,[obj.id],(err,results)=>{
        if(err) throw err;
        res.send({message:'查询成功',code:1,results:results,pagecount});   
    })
})
})
//酒店类型的接口
// server.get('/hotel_type/:id',(res,req)=>{
//      //获取客户端传递的数据
//      let obj=req.params;
//      console.log(req.params)
//      console.log(124)
 
// })
    
 //酒店关键词查询接口 
server.get(`/search/:kw`,(req,res)=>{
   let kw=req.params.kw;
    kw='%'+kw+'%';
  
    let sql='select * from all_hotel  where hotel_name like ? or score like ? or isgood like ? or estimate like ? or notes_number like ? or adress like ? or type like ?';
    pool.query(sql,[kw,kw,kw,kw,kw,kw,kw],(err,results)=>{
        if(err) throw err;
        res.send(results)
    })
})



//酒店详情页接口
server.get('/hotel_detail',(req,res)=>{
    let obj=req.query;
    let sql='select * from hotel_detail where fid= ?';
    pool.query(sql,[obj.id],(err,results)=>{
        if(err) throw err
        res.send(results)
        
       
    })
})

//酒店订单接口
server.get('/hotel_order',(req,res)=>{
    let obj=req.query;
   
    let sql='select * from hotel_order where fid= ?';
    pool.query(sql,[obj.id],(err,results)=>{
        if(err) throw err;       
        res.send(results)

        
    })
})
server.get('/hotel_pay',(req,res)=>{
    let obj=req.query;
    // console.log(obj)
    let sql='select * from hotel_pay where fid= ?';
    pool.query(sql,[obj.id],(err,results)=>{
        if(err) throw err;       
        res.send(results)       
    })
})


module.exports=server;