<template>
  <div class="container">  
    <div style="margin-top: 15px;display:flex;justify-content:space-between;">
      <span class="search-span">ianimal</span>
      <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <div class="login-nav">
        <span style="border-right:1px solid;padding-right:10px;"><router-link to="/Registe" style="text-decoration:none;">注册</router-link></span><span style="margin-left:10px;"><router-link to="/Login" style="text-decoration:none;">登录</router-link></span>
      </div>
    </div> 
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1">首页</el-menu-item>
    <el-menu-item index="2">讨论区</el-menu-item>
    <el-menu-item index="3">购物车</el-menu-item>
    <el-menu-item index="4"><a  target="_blank">个人中心</a></el-menu-item>
    </el-menu> 
  </div>
</template>
<script>
export default {
  data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>
<style scoped>
.el-input-group{
  width:50%;
  border-radius: 4px;
  
}
.el-menu{
  margin-top:20px;
}
.search-span{
  line-height:40px;
  font-size:28px;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
}
.login-nav{
  line-height:40px;
  font-size:14px;
  color:#808080;
}
</style>