<template>
 <div class="regl">
     <div class="floor">
        <img src="../../public/img/cart.png"  alt="">欢迎注册
         <hr>
     </div>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <div class="content">
          <el-form-item label="手机号" prop="phone" >
             <el-input  v-model="ruleForm.phone"  > </el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="mail">
             <el-input v-model="ruleForm.mail"> </el-input>
          </el-form-item>
          <el-form-item label="用户名" prop="uname">
             <el-input v-model="ruleForm.uname" > </el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
     </div> 
    </el-form>
  </div>
</template>
<script>
  export default {
    data() {
       var  validatephone=(rule, value, callback)=>{
         if (value === '') {
          callback(new Error('请输入手机号'));
           };
         var phoneRegex =/^[1][3,4,5,6,7,8,9][0-9]{9}$/;
          if (!phoneRegex.test(value)) {
            callback(new Error('手机号码格式不正确！'))
              } else {
                  callback()
            }
       };
       var validatemail=(rule, value, callback)=>{
         if (value === '') {
          callback(new Error('请输入邮箱'));
           };
         var mailRegex = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
          if (!mailRegex.test(value)) {
            callback(new Error('邮箱格式不正确！'))
              } else {
                  callback()
            }
       };
       var validateuname=(rule, value, callback)=>{
         if (value === '') {
          callback(new Error('请输入用户名'));
           };
         var unameRegex = /^[a-z0-9_-]{3,16}$/;
          if (!unameRegex.test(value)) {
            callback(new Error('用户名格式不正确,小写字母开头！'))
              } else {
                  callback()
            }
       };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          phone:'',
          mail:'',
          uname:'',
          pass: '',
          checkPass: ''
        },
        rules: {
         phone: [
              { validator: validatephone, trigger: 'blur' }
            ],
          mail:[
            {validator: validatemail, trigger: 'blur'}
          ],
          uname:[
           {validator: validateuname, trigger: 'blur'}
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style scoped>
  .regl{
    display: flex;
    justify-content: center;
    width: 575px;
    height: 590px;
    background-image:url("../../public/img/bg5.jpeg");
    background-repeat: no-repeat;
    margin-left: 650px;
    padding-right: 80px; 
  }
  .content{
    margin-top:150px; 
    margin-right:96px; 
  }
  .floor {
    text-align: left;
    margin-top:20px;
    margin-left: 20px;
    border: 1px 
  }
   .floor img{
    width: 70px;
    height:66px;
    margin-right: 20px;
    margin-bottom:-18px; 
  }
</style>