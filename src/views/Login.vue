<template>
<!-- 弹出框 -->
  <el-popover class="p-0"  placement="bottom" trigger="click">
    <!--标签页 -->
   <div class="loginto">
      <el-tabs v-model="activeName" @tab-click="handleClick">
             <!-- 标签页一 -->
              <el-tab-pane class="tab1" label="短信登录" name="first">
                <div>
                  <el-input  class="put1" placeholder="手机号" v-model="input1"  clearable></el-input><br>
                  <div class="put3">
                  <el-input  class="put2" placeholder="验证码" v-model="input2"  clearable></el-input>
                    <el-button  type="primary" >获取验证码</el-button>
                  </div>
                </div>
            </el-tab-pane>
            <!-- 标签页二 -->
            <el-tab-pane  class="tab2" label="密码登陆" name="second">'
                <div>
                    <el-input class="put3"  placeholder="手机号/邮箱/用户名" v-model="input3"  clearable>  </el-input><br>
                    <el-input  class="put4" placeholder="请输入密码" v-model="input4" show-password>  </el-input><br>
                    <el-button class="big"  type="primary">登陆</el-button><br>
                </div>
                 <el-checkbox v-model="checked"  class="checkbox">下次自动登录</el-checkbox>
                 <el-link :underline="false" class="forget" >忘记密码?</el-link>
            </el-tab-pane>        
      </el-tabs>
   </div>
    <el-link :underline="false"  slot="reference">登录</el-link>
</el-popover>


</template>
<script>
  export default {
    data() {
      return {
        activeName: 'second',
        radio: "",
        checked: true,
        input1: '',
        input2: '',
        input3: '',
        input4: ''
        }      
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
<style  scoped>
@import url("../../public/css/common.css");
.el-tabs--top .el-tabs__item.is-top:nth-child(2) {
    padding-left: 115px;
}
.tab1{
  margin-left: 10px;

}
.loginto{
  width: 400px;
  height: 350px;
  /* background-color:#c7f77a; */
  background-image:url("../../public/img/bg2.jpg") ;
  opacity: 0.8;  
  padding: 0px; 
}
.put1{
  margin-top:20px;
  margin-left:24px;  
  width: 350px;
}
.put3{
  margin-top:20px; 
  width: 350px;
  margin-left:24px;
}
.put4{
  margin-top:20px; 
  width: 350px;
  margin-left:24px;
}
.put2{
  width:200px;
  float: left;
  margin-left: 2px;
  margin-right:10px; 
}
.put3{
  margin-top:10px; 
}
.big{
  width: 145px;
  margin-top: 5px;
  margin-left: 130px;
}
.checkbox{
  margin-left: 10px;
  margin-top: 35px;
  
}
.forget{
 margin-left:200px;
}
</style>