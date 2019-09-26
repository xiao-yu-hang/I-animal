const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const session=require('express-session');
const user=require('./routes/user');
const goods=require('./routes/goods');
const cart=require('./routes/cart')
var app=express();
var server=app.listen(5050);
app.use(cors({
  origin:["http://localhost:8080","http://127.0.0.1:5500"],
  credentials:true
}));//解决跨域
//配置session
app.use(session({
  secret:"128位",
  resave:false, //每次请求保存数据
  saveUninitialized:true,  //保存初始化数据
  cookie:{
    maxAge:1000*60*60
  }
}))
//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
//托管静态资源
app.use(express.static('public'));
app.use("/user",user);
app.use("/goods",goods);
app.use("/cart",cart);