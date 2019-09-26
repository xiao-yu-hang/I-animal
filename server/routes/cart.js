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

  var sql=`SELECT cartid,goodsName,goodsPrice,count FROM shopcart LEFT JOIN ianimal_goods ON shopcart.goodsid=ianimal_goods.goodsid WHERE userid=${userid} `;
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
  query(sql,[cid]).then(result=>{
    if(result.affectedRows>0){
      res.send({code:200,msg:"删除成功"});
    }else{
      res.send({code:201,msg:"删除失败"});
    }
  })
})
//删除购物车多个商品
router.get("/delitems",(req,res)=>{
  var userid=req.session.userid;
  if(!userid){
    res.send({code:200,msg:"请先登录"})
    return;
  }
  var cid=req.query.cartid;
  var sql=`DELETE FROM shopcart WHERE cartid in (${cid})`;
  query(sql,[]).then(result=>{
    if(result.affectedRows>0){
      res.send({code:200,msg:"删除成功"});
    }else{
      res.send({code:201,msg:"删除失败"});
    }
  })
})
//生成订单
router.get("/order",(req,res)=>{
  var userid=req.session.userid;
  var totalMoney=req.query.totalMoney;
  var ordertime=req.query.ordertime;
  var orderstate=2;
  var orderaddr=req.query.orderaddr;
  var sql="SELECT userName FROM ianimal_user WHERE userid=?";
  query(sql,[userid]).then(result=>{
    var userName=result[0].userName;
    var sql="INSERT INTO orders(userName,totalMoney,orderDate,orderState,orderAddr) VALUES(?,?,?,?,?)";
    query(sql,[userName,totalMoney,ordertime,orderstate,orderaddr]).then(result=>{
      if(result.affectedRows>0){
        res.send({code:200,msg:"生成订单成功"});
      }else{
        res.send({code:201,msg:"生成订单失败"})
      }
    })
  })
})
//生成详细订单
router.get("/orderdetail",(req,res)=>{
  var userid=req.session.userid;
  var goodsid=req.query.goodsid;//数组
  for(var id of goodsid){
    var sql=`SELECT count FROM shopcart WHERE goodsid=${id}`;
    query(sql,[]).then(result=>{
      var count=result[0].count; //购物车内的数量
      var sql="SELECT orderid FROM orders WHERE userName=(SELECT userName FROM ianimal_user WHERE userid=?)";
      query(sql,[userid]).then(result=>{
        var orderid=result[0].orderid;
        var sql="INSERT INTO orderDetail(orderid,goodsid,gcount) VALUES(?,?,?)";
        query(sql,[orderid,goodsid,count]).then(result=>{
          if(result.affectedRows>0){
            res.send({code:200,msg:"生成成功"})
          }else{
            res.send({code:201,msg:"生成失败"})
          }
        })
      })
    })
  }
})
//查看订单
router.get("/showorder",(req,res)=>{
  var userid=req.session.userid;
  if(!userid){
    res.send({code:200,msg:"请先登录"})
    return;
  }
  var sql="SELECT * FROM orders WHERE userName=(SELECT userName FROM ianimal_user WHERE userid=?)";
  query(sql,[userid]).then(result=>{
    res.send(result);
  })
})
module.exports =router;