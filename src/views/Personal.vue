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
      <div class="block">
        <el-timeline>
          <el-timeline-item v-for="(msg,i) of msgs" :key="i" :timestamp="msg.time" placement="top" type="primary">
            <el-card>
              <h4>{{msg.content}}</h4>
              <p>{{msg.author}} 提交于 {{msg.time}}</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
    </div>
    <fieldset class="messages">
      <legend>留言评论</legend>
      <div class="message">
        <div class="info">
          <img class="nickPic" src="@/assets/logo.png">
          <div class="nickName">留言者昵称</div>
          <div>留言</div>
        </div>
        <div>
          <button class="btn">回复</button>
          <button class="btn">删除</button>
        </div>
      </div>
    </fieldset>
  </div>
</template>
<script>
var img=require("../../public/img/bg5.jpeg")
export default {
  data() {
    return {
      imgs:[
        img,img,img,img
      ],
      msgs:[
        {
          content:"发帖内容",
          author:"作者",
          time:"2018/4/2 20:46",
        },
        {
          content:"发帖内容",
          author:"作者",
          time:"2018/4/2 20:46",
        },
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
    box-sizing: border-box;
    width: 50px;
    height: 50px;
    border: 1px solid black;
    border-radius: 50%;
  }
  .detail{
    width: 600px;
  }
  .album,.messages{
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
    overflow-y: scroll;
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
  .message{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .message .info{
    justify-content: flex-start;
  }
</style>