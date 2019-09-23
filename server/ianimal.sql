SET NAMES UTF8;
DROP DATABASE IF EXISTS ianimal;
CREATE DATABASE ianimal CHARSET=UTF8;
USE ianimal;

/*用户信息*/
CREATE TABLE ianimal_user(
  userid INT PRIMARY KEY NOT NULL AUTO_INCREMENT, 
  userName VARCHAR(20),
  userPassword VARCHAR(20),
  userSex INT,
  userEmail VARCHAR(64),
  userBirth DATE,
  userImg VARCHAR(100), #头像路径
  userPhone VARCHAR(16) NOT NULL,
  userRegTime DATETIME,  #注册时间
  userAddr VARCHAR(100)  #默认地址
);
/*商品类型名表*/
CREATE TABLE ianimal_type(
  goodsTypeid INT PRIMARY KEY AUTO_INCREMENT,
  goodsTypeName VARCHAR(50)
);
/*商品表*/
CREATE TABLE ianimal_goods(
  goodsid INT PRIMARY KEY AUTO_INCREMENT,
  goodsName VARCHAR(50),
  goodsTypeid INT,  #与商品类型表关联
  goodsDesc VARCHAR(100),
  goodsPrice DECIMAL(10,2),
  goodsImage VARCHAR(255),
  sellCount INT,
  goodsDate DATE, #上架时间
  goodsSpec VARCHAR(50), #商品规格、颜色
  goodsComments INT, #评论数
  goodsCategory VARCHAR(32) #商品分类：宠物食品、用品等 
);
/*订单表*/
CREATE TABLE orders(
  orderid INT PRIMARY KEY AUTO_INCREMENT,
  userName VARCHAR(20),
  totalMoney DECIMAL(10,2),
  orderDate DATE,  #下单时间
  orderState INT,  #订单状态 1-等待付款  2-等待发货  3-运输中  4-已签收  5-已取消
  orderAddr VARCHAR(255) 
);

/*订单详细表*/
CREATE TABLE orderDetail(
  did INT PRIMARY KEY AUTO_INCREMENT,
  orderid INT,
  goodsid INT,
  gcount INT
);
/*购物车*/
CREATE TABLE shopcart(
  cartid INT PRIMARY KEY AUTO_INCREMENT,
  userid INT,
  goodsid INT,
  count INT
);
/*评价表*/
CREATE TABLE comment(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  content VARCHAR(255),
  userid INT,
  goodsid INT,
  createDate DATETIME
);