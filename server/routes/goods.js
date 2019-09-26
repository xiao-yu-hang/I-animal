const express=require('express');
var router=express.Router();
var query=require('./query');
//商品模块
//商品列表
router.get("/list",(req,res)=>{
  var pno=req.query.pno;
  var ps=req.query.pageSize;
  if(!pno){
    pno=1;
  }
  if(!ps){
    ps=9;
  }
  var sql="SELECT * FROM ianimal_goods LIMIT ?,?";
  query(sql,[(pno-1)*ps,ps]).then(result=>{
    res.send(result);
  })
})
//商品详情
router.get("/detail",(req,res)=>{
  var gid=req.query.goodsid;
  var sql="SELECT * FROM ianimal_goods WHERE goodsid=?";
  query(sql,[gid]).then(result=>{
    if(result.length>0){
    res.send(result);
    }else{
      res.send({code:201,msg:"没有此商品"})
    }
  })
})
module.exports =router;