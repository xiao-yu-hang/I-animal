const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const session=require('express-session');
const user=require('./routes/user');

var app=express();
var server=app.listen(5050);
app.use(cors({
  origin:["http://localhost:8080","http://127.0.0.1:5500"]
}));//解决跨域
//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
//托管静态资源
app.use(express.static('public'));
app.use("/user",user);