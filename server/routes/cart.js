const express=require('express');
var router=express.Router();
var query=require('./query');
var pool=require('../pool');
//购物车模块
//添加购物车
router.get("/addcart",(req,res)=>{
  //判断当前用户是否登陆成功
  var userid=req.session.userid;
  if(!userid){
    res.send({code:200,msg:"请先登录"})
    return;
  }
  var gid=req.query.goodsid;
  var sql="SELECT cartid FROM shopcart WHERE goodsid=?";
  query(sql,[gid]).then(result=>{
    if(result.length==0){
      var sql=`INSERT INTO shopcart VALUES(NULL,${userid},${gid},1)`;
    }else{
      var sql=`UPDATE shopcart SET count=count+1 WHERE goodsid=${gid}`;
    }
    pool.query(sql,(err,result)=>{
      if(err) throw err;
      if(result.affectedRows>0){
        res.send({code:200,msg:"添加成功"})
      }else{
        res.send({code:201,msg:"添加失败"})
      }
    })
  })
})
//购物车列表
router.get("/carts",(req,res)=>{
  var userid=req.session.userid;
  if(!userid){
    res.send({code:200,msg:"请先登录"})
    return;
  }

  var sql=`SELECT goodsName,goodsPrice,count FROM shopcart LEFT JOIN ianimal_goods ON shopcart.goodsid=ianimal_goods.goodsid WHERE userid=${userid} `;
  query(sql,[]).then(result=>{
    res.send(result);
  })
})
//删除购物车指定数据
router.get("/delitem",(req,res)=>{
  var userid=req.session.userid;
  if(!userid){
    res.send({code:200,msg:"请先登录"})
    return;
  }
  var cid=req.query.cartid;
  var sql="DELETE FROM shopcart WHERE cartid=?";
  
})
module.exports =router;