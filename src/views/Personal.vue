<template>
  <div class="personal">
    <div class="info">
      <img class="nickPic" src="@/assets/logo.png">
      <div class="nickName">用户昵称</div>
      <div class="modify">修改个人信息</div>
    </div>
    <div class="detail">个人信息</div>
    <fieldset class="album">
      <legend>相册</legend>
      <div class="imgs">
        <img class="add" src="@/assets/img/add.png">
        <img class="img" v-for="(img,i) of imgs" :key="i" :src="img">
      </div>
    </fieldset>
    <div class="post">
      <div class="timeline">
        <div class="y">
          <div class="circle"></div>
          <hr class="line-y"/>
        </div>
        <div class="x">
          <div class="circle"></div>
          <div class="line-container">
            <hr class="line-x" style="width:100px;"/>
            <div class="time">2019-xx-xx</div>
          </div>
          <div class="content">xxxxxx</div>
          <button class="btn">删除</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
var img=require("../../public/img/bg5.jpeg")
export default {
  data() {
    return {
      imgs:[
        img,img,img,img
      ]
    }
  },
}
</script>
<style scoped>
  .personal{
    margin: auto;
    display: flex;
    flex-flow: column;
    align-items: center;
  }
  .info{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .info div{
    margin: 10px;
  }
  .nickPic{
    width: 50px;
    height: 50px;
    border: 1px solid black;
    border-radius: 50%;
  }
  .detail{
    width: 600px;
  }
  .album{
    box-sizing: border-box;
    text-align: left;
    width: 600px;
  }
  .imgs{
    height: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .img{
    width: 100px;height: 150px;
  }
  .post{
    box-sizing: border-box;
    width: 600px;height: 300px;
    border: 1px solid #000;
    padding: 20px;
  }
  .timeline{
    position: relative;
  }
  .circle{
    box-sizing: border-box;
    width: 20px;height: 20px;
    border: 2px solid #000;
    border-radius: 50%;
  }
  .y{
    width: 20px;
    display: flex;
    flex-flow: column;
    align-items: center;
  }
  .x{
    position: absolute;
    top: 0;left: 0;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .line-x,.line-y{
    box-sizing: border-box;
    border: 2px solid #000;
    width: 0;height: 20px;
    margin: 0;
  }
  .line-container{
    display: flex;
    justify-content: center;
  }
  .line-x{
    width: 20px;height: 0;
  }
  .time{
    position: absolute;
    top: -10px;
  }
  .content{
    box-sizing: border-box;
    width: 100px;height: 20px;
    border: 2px solid #000;
    text-align: left;
  }
  .btn{
    height: 20px;
    border: 1px solid #000;
  }
</style>