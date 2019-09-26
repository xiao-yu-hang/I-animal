const express=require('express');
var router=express.Router();
var query=require('./query');

//用户注册
router.post("/reg",(req,res)=>{
  var obj=req.body;
  var userName=obj.uname;
  var userPassword=obj.upwd;
  var userSex=obj.sex;
  var userEmail=obj.email;
  var userPhone=obj.phone;
  var userBirth=obj.birth;
  var userRegTime=obj.regtime;
  console.log(userPhone);
  var sql="INSERT INTO ianimal_user(userid,userName,userPassword,userSex,userEmail,userBirth,userImg,userPhone,userRegTime,userAddr) VALUES(null,?,?,?,?,?,null,?,?,null)";
  query(sql,[userName,userPassword,userSex,userEmail,userBirth,userPhone,userRegTime]).then(result=>{
    if(result.affectedRows>0)
    res.send("1");
    else 
    res.send("0");
  })
})


//用户登录
router.get("/login",(req,res)=>{
  var userName=req.query.uname;
  var userPassword=req.query.upwd;
  var sql="SELECT userid FROM ianimal_user WHERE userName=? AND userPassword=?";
  query(sql,[userName,userPassword]).then(
    result=>{
      if(result.length>0){
        res.send("1");
        console.log(result);
        var id=result[0].userid;
        req.session.userid=id;
        console.log(req.session.userid);
      }else{
        res.send("0");
      }
    }
  )
})
//用户检索
router.get("/detail",(req,res)=>{
  var uname=req.query.uname;
  var sql="SELECT * FROM ianimal_user WHERE userName=?";
  query(sql,[uname]).then(result=>{
    if(result.length>0){
      res.send(result);
    }else{
      res.send("0");
    }
  })
})

//用户修改
router.post("/update",(req,res)=>{
  var obj=req.body;
  var uname=obj.uname;
  var upwd=obj.upwd;
  var sex=obj.sex;
  var email=obj.email;
  var phone=obj.phone;
  var addr=obj.addr;
  var sql=`UPDATE ianimal_user SET userName=?,userPassword=?,userSex=?,userEmail=?,userPhone=?,userAddr=?`;
  sql+=` WHERE userid=${req.session.userid}`;
  query(sql,[uname,upwd,sex,email,phone,addr]).then(result=>{
    if(result.affectedRows>0){
      res.send(result);
    }else{
      res.send("0");
    }
  })
})


//检测用户名
router.get("/checkname",(req,res)=>{
  var uname=req.query.uname;
  var sql="SELECT userid FROM ianimal_user WHERE userName=?";
  query(sql,[uname]).then(result=>{
    if(result.length>0){
      res.send({code:201,msg:"用户名已存在"})
    }else{
      res.send({code:202,msg:"用户名可用"});
    }
  })
})
//退出登录
router.get("/logout",(req,res)=>{
  req.session.destroy();
  res.redirect('/index'); //重定向
})


module.exports=router;