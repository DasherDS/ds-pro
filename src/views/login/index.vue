<template>
  <div class="content-main">
    <div class="content-main-login">
      <div class="logo"></div>
      <div class="title">
        <span class="bold size30 color-black title">登录</span>
      </div>
      <div class="signin">
        <el-form
          :model="loginForm"
          status-icon
          :rules="rules"
          ref="loginForm"
          label-width="100px"
          class="demo-loginForm"
        >
          <el-form-item label="账号" prop="admin">
            <el-input type="text" v-model="loginForm.admin" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="loginForm.pass" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div class="register mt40">
          <span>没有账户?</span>
          <span class="ml5">
            <router-link class="color-blue" to="/register">创建一个!</router-link>
          </span>
        </div>
        <div class="mb20 btnsub">
          <el-button type="primary" class="floatr" @click="login('loginForm')">登录</el-button>
        </div>
        <div class="mt20"></div>
      </div>
    </div>
  </div>
</template>

<script>
import {login} from "../../api/login"
export default {
  name: "Register",
  data() {
    var checkAdmin = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("账号不能为空"));
      } else {
        callback();
      }
    };
    var checkPass =  (rule, value, callback) => {
      if (!value) {
        return callback(new Error("密码不能为空"));
      } else {
        callback();
      }
    }
    return {
      loginForm: {
        admin: null,
        pass: null
      },
      rules: {
        admin: [{ validator: checkAdmin, trigger: "blur" }],
        pass: [{ validator: checkPass, trigger: "blur" }]
      }
    };
  },
  methods: {
    login(formName) {
      // console.log(this.$refs[formName].validat.valide);
      this.$refs[formName].validate(valid => {
        if (valid) {
          login(this.loginForm).then(res=>{
            console.log(res);
            
          })
          this.$router.push({
            name:"Home"
          })
        } else {
          this.$message({
            type:'warning',
            message:'账号或密码不能为空'
          })
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.content-main {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("../../assets/imgs/bgimg.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  // filter: blur(5px);
  &-login {
    width: 500px;
    min-height: 200px;
    background-color: floralwhite;
    // box-shadow: 3px 3px 0 0 rgb(58, 58, 58);
    .title {
      font-family: "黑体";
      padding: 20px;
    }
    .signin {
      width: 100%;
      height: 100%;
      padding-top: 10px;
      padding-bottom: 10px;
      padding-left: 10px;
      padding-right: 10px;
    }
    .demo-loginForm {
      width: 85%;
    }
    .register {
      padding-left: 30px;
    }
    .btnsub {
      height: 40px;
      padding-right: 70px;
    }
  }
}
</style>