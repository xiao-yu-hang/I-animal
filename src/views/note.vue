<template>
  <div class="container">
    <!-- 头部横条 -->
    <div class="ba-card">
      <img src="../../public/img/dogmsg.jpg">
      <div class="card-title">
        <span class="card-title-name">狗类讨论区</span>
        <a class="islike">+关注</a>
        <span class="card-num">关注：</span>
        <span class="card-mennum">100</span>
        <span class="card-num">帖子：</span>
        <span class="card-mennum">100</span>
        <div class="card-desc">
        <p>
          狗被称为“人类最忠实的朋友”，是饲养率最高的宠物
        </p>
      </div>
      </div>
    </div>
    <!-- 帖子内容 -->
    <div class="note-content">
      <ul class="threadlist">
        <li class="threadlistli">
          <div class="threadcontent">
            <div class="contentleft">
              <span style="display:inline-block;" title="回复">50</span>
            </div>
            <div class="contentright">
              <div class="threadlist-lz">
                <a class="threadlist-tit">
求大佬们帮我鉴定一下这是什么品种的猫，值多少钱呀</a>
                <span>ok傻莎</span>
              </div>
              <div class="threadlist-detail">
                <div class="threadlist-text">
                  求大佬们帮我鉴定一下这是什么品种的猫，值多少钱呀
                </div>
                <img class="threadlist-smlist" src="../../public/img/dog01.jpeg" style="width:100px;height:100px;">
                <img class="threadlist-smlist" src="../../public/img/dog01.jpeg" style="width:100px;height:100px;">
                <img class="threadlist-smlist" src="../../public/img/dog01.jpeg" style="width:100px;height:100px;">
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
  ul,li{
    list-style:none;
  } 
  .ba-card{
    background:#fff;
    position:relative;
    margin-top:50px;
    height:170px;
    border-radius:2px;
    box-shadow:1px 2px 0 #e7e7e7;
    display:flex;
  }
  .ba-card>img{
    padding:10px;
    overflow:hidden;
  }
  .card-title{
    margin-top:10px;
    text-align:left;
  }
  .card-title-name{
    display:block;
    text-align:left;
    font-size:30px;
    margin-left:10px;
  }
  .islike{
    display:inline-block;
    background:#27b1f6;
    color:#fff;
    width:60px;
    height:30px;
    text-align:center;
    line-height:30px;
    border-radius:4px;
    margin:10px;
  }
  .card-num,.card-mennum{
    font-size:12px;
    color:#aaa;
  }
  .card-mennum{
    color:#ff7f3e;
  }
  .card-mennum+.card-num{
    margin-left:10px;
  }
  .card-desc{
    margin-top:10px;
    margin-left:10px;
  }
  .note-content{
    margin-top:30px;
    width:100%;
    background:#fff;
    border-radius:2px;
    box-shadow:1px 2px 0 #e7e7e7;
  }
  .threadlistli{
    border-bottom:1px solid #e7e7e7;
  }
  .contentleft{
    width:50px;
    height:50px;
    background:url("../../public/img/reply.png");
    line-height:45px;
    font-size:14px;
  }
  .contentright{
    margin-left:40px;
    margin-bottom:20px;
  }
  .threadcontent{
    display:flex;
    margin:10px;
    padding:20px 0 0 0;
  }
  .threadlist-tit{
    color:#2d64b3;
    cursor:pointer;
    overflow:hidden;
  }
  .threadlist-lz>span{
    margin-left:300px;
  }
  .threadlist-text{
    text-align:left;
  }
  .threadlist-detail>img{
    float:left;
    overflow:hidden;
    margin:10px 5px 5px 5px;
  }
  .threadlist-text{
    color:#666;
    font-size:12px;
    overflow:hidden;
    margin-top:5px;
  }
</style>