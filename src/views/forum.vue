<template>
  <div>
    <!-- 插入头部组件 -->
    <div class="container">
    <!-- 左侧导航 -->
      <div class="navbar">
        <div class="title">
          <span>选择分类</span>
        </div>
        <div class="bar">
          <ul class="info">
            <li class="list"><a>宠物讨论</a></li>
            <li class="list"><a>宠物商店</a></li>
            <li class="list"><a>宠物图鉴</a></li>
          </ul>
        </div>
      </div> 
    
      <!--右侧讨论区  -->
      <div class="right">
        <div class="right-title">
          <span>分享区</span>
          <div class="ba-list">
            <div class="ba-info">
              <!-- 讨论区信息栏 -->
                <a class="ba-msg">
                  <img style="width:105px;height:105px;" class="ba-icon" src="../../public/img/dogmsg.jpg">
                  <div class="ba-content">
                    <p class="ba-name">狗类讨论区</p>
                    <p class="ba-desc">狗被称为“人类最忠实的朋友”，是饲养率最高的宠物</p>
                  </div>
                </a> 
              <!-- 热门贴 -->
              <div class="ba-post">
                <a>热门：大家帮我看一下，这只哈士奇怎么样</a>
                <a>热门：第一次养泰迪 好多不懂</a>
              </div>
            </div>
             <div class="ba-info">
              <!-- 讨论区信息栏 -->
                <a class="ba-msg">
                  <img style="width:105px;height:105px;" class="ba-icon" src="../../public/img/cat.jpg">
                  <div class="ba-content">
                    <p class="ba-name">猫类讨论区</p>
                    <p class="ba-desc">欢迎真正爱猫人，无论什么种类的猫都是宝贝</p>
                  </div>
                </a> 
              <!-- 热门贴 -->
              <div class="ba-post">
                <a>热门：</a>
                <a>热门：</a>
              </div>
            </div>
             <div class="ba-info">
              <!-- 讨论区信息栏 -->
                <a class="ba-msg">
                  <img style="width:105px;height:105px;" class="ba-icon" src="../../public/img/cangshu.jpg">
                  <div class="ba-content">
                    <p class="ba-name">仓鼠讨论区</p>
                    <p class="ba-desc">仓鼠作为时下最流行的宠物,你们对仓鼠了解吗</p>
                  </div>
                </a> 
              <!-- 热门贴 -->
              <div class="ba-post">
                <a>热门：</a>
                <a>热门：</a>
              </div>
            </div>
             <div class="ba-info">
              <!-- 讨论区信息栏 -->
                <a class="ba-msg">
                  <img style="width:105px;height:105px;" class="ba-icon" src="../../public/img/bird.jpg">
                  <div class="ba-content">
                    <p class="ba-name">鸟类讨论区</p>
                    <p class="ba-desc">现在越多越多的人们喜欢鸟宠,养一只,不仅可陶冶情操,也可以解忧乏闷。</p>
                  </div>
                </a> 
              <!-- 热门贴 -->
              <div class="ba-post">
                <a>热门：</a>
                <a>热门：</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .container{
    width:1000px;
    margin:auto;
    position:relative;
  }
  .container:after{
    content:'';
    display:block;
    clear: both;
  }
  .navbar{
    width:210px;
    height:700px;
    background:rgb(219, 236, 236);
    border-radius: 10px;
    float:left;
  }
  .title{
    position:absolute;
    width:210px;
    height:34px;
    top:0;
    left:0;
    background:-webkit-linear-gradient(top, #27b1f6 0%, #0aa1ed 100%);
    border-radius:10px 10px 0 0;
    color:#fff;
  }
  span{
    display:block;
    line-height:34px;
  }
  .bar{
    width:100%;
    float:left;
    margin-top:50px;
  }
  .info{
    text-align:center;
    list-style: none;
  }
  .info>.list{
    height:40px;
    width:100%;
    line-height:40px;
  }
  .list:hover{
    background:#0aa1ed;
    opacity:0.6;
    color:#fff;
  }
  .right{
    float:left;
    width:770px;
    height:700px;
    margin-left:20px;
  }
  .right-title>span{
    text-align:left;
    color:#0aa1ed;
    font-size:26px;
  }
  .ba-list{
    border-top:2px solid #0aa1ed;
  }
  .ba-info{
    width:378px;
    height:181px;
    border:1px solid rgb(218, 216, 216);
    border-radius:2px;
    margin-top:15px;
    float:left;
    box-shadow:0 2px 0 #e7e7e7;
    margin-right:5px;
    background:#fff;
  }
  .ba-msg{
    display:block;
    text-decoration: none;
    width:100%;
    height:107px;
    margin:10px 0 10px 10px ;
    cursor:pointer;
  }
  .ba-icon{
    float:left;
    border:1px solid #EFEFEF;
  }
  .ba-name,.ba-desc{
    width:220px;
    float:left;
    text-align:left;
    margin-left:10px;
  }
  .ba-name{
    font-size:20px;
    color:#444;
  }
  .ba-desc{
    color:#999;
    margin-top:10px;
    font-size:14px;
  }
  .ba-post{
    border-top:1px solid rgb(197, 197, 197);
    height:54px;
  }
  .ba-post a{
    display:block;
    text-decoration:none;
    text-align:left;
    color:#999;
    margin-top:4px;
    cursor:pointer;
    margin-left:10px;
  }
</style>