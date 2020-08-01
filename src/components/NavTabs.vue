<template>
  <div class="main-content">
    <transition name="fade">
      <div v-show="istabnav" class="main-content-tabnav">
        <ul class="main-content-tabnav-ul">
          <li>
            <router-link class="jumpTo" to="/dasher/index">
              主页
              <p>HOME</p>
            </router-link>
          </li>
          <li>
            <router-link class="jumpTo" to="#">
              壁纸
              <P>BIZHI</P>
            </router-link>
          </li>
          <li>
            <router-link class="jumpTo" to="#">
              视频
              <p>VIDEO</p>
            </router-link>
          </li>
          <li>
            <router-link class="jumpTo" to="#">
              音乐
              <p>MUSIC</p>
            </router-link>
          </li>
          <li>
            <router-link class="jumpTo" to="#">
              工具
              <p>TOOLS</p>
            </router-link>
          </li>
        </ul>
        <div class="main-content-tabnav-mid" v-if="isLogin">
          <div class="main-content-tabnav-mid-lohininfo">
            <span>
              <router-link to="/dasher/index">
                <span class="color-blue">欢迎您~~</span>
                <span class="color-gold">{{info.adminName}}</span>
              </router-link>
            </span>
            <span class="color-red ml20 mr5 size10 loginout" @click="loginout">退出登录</span>
          </div>
        </div>
        <ul class="main-content-tabnav-user" v-if="!isLogin">
          <li>
            <router-link class="jumpTo" to="./login">Sign in</router-link>
          </li>
          <li>
            <router-link to="./register" class="jumpTo signup">Sign up</router-link>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
// import { login } from '../api/login';
import { getToken, removeToken, removeName } from "../utils/auth";
export default {
  name: "NavTabs",
  data() {
    return {
      clientWidth: null,
      clientHeight: null,
      scoll: "",
      istabnav: false,
      isLogin: false,
      info: {
        adminName: ""
      }
    };
  },
  beforeMount() {},
  methods: {
    menu() {
      this.scoll =
        document.documentElement.scrollTop || document.body.scrollTop;
      this.scoll >= 0 ? (this.istabnav = true) : (this.istabnav = false);
    },
    btn() {},
    loginout() {
      this.$store.state.user.token = "";
      this.info.adminName = "";
      const token = getToken("token");
      removeName("username");
      removeToken(token);
      this.isLogin = false;
    }
  },
  mounted() {
    this.menu();
    this.isLogin = false;
    window.addEventListener("scroll", this.menu);
    let vuexState = this.$store.state;
    if (vuexState.user.token != undefined) {
      this.isLogin = true;
      this.info.adminName = vuexState.user.name;
      console.log(this.isLogin, this.info.adminName);
    }
  }
};
</script>
<style lang="scss" scoped>
.fade-enter {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 1s;
}
.fade-leave-active {
  opacity: 0;
}
.main-content {
  height: 100vh;
  position: relative;
  &-tabnav {
    position: fixed;
    display: flex;
    justify-content: space-between;
    top: 0;
    left: 0;
    height: 100px;
    width: 100vw;
    z-index: 999;
    background-color: rgba(230, 235, 241, 0.966);
    &-ul {
      width: 88vw;
      height: 100%;
      font-size: 24px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      li {
        text-align: center;
        p {
          margin-top: 15px;
        }
        .jumpTo {
          transition: 0.5s all linear;
        }
      }
      li .jumpTo:hover {
        color: #d3b145;
      }
    }
    &-mid {
      text-align: left;
      margin: 0 auto;
      line-height: 100px;
      &-lohininfo {
      }
      .loginout {
        cursor: pointer;
      }
    }
    &-user {
      width: 200px;
      font-size: 18px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 100%;
      margin-right: 20px;
      .signup {
        padding: 10px 15px;
        border-radius: 10px;
        border: 1px solid #d3b145;
        transition: 0.5s linear;
      }
      .signup:hover {
        background-color: #d3b145;
        color: white;
      }
    }
  }
}
</style>