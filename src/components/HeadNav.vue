<template>
  <header class="page-header">
    <div class="container">
      <div class="head-logo">
        <a href="" class="logo-link">
          <img class="img-link" src="@/assets/images/logo.jpg" />
        </a>
      </div>
      <nav class="head-nav">
        <router-link :to="{ name: 'Home' }" class="nav-item active"
          >首页</router-link
        >
        <router-link :to="{ name: 'Plus' }" class="nav-item"
          >实战营</router-link
        >
        <router-link :to="{ name: 'Course' }" class="nav-item"
          >课程</router-link
        >
        <router-link :to="{ name: 'Project' }" class="nav-item"
          >项目</router-link
        >
        <router-link :to="{ name: 'Lab' }" class="nav-item">实验</router-link>
      </nav>
      <div class="head-search">
        <input type="" name="" class="search-input" placeholder="搜索" />
        <a href="" class="search-icon"></a>
      </div>
      <div class="head-userINFO">
        <div class="icon">
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              <img :src="userAvatar" class="touxiang-icon" v-if="userInfo.id" />
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="logout">注销</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="head-login">
          <router-link :to="{ name: 'Login' }" class="login" v-if="!userInfo.id"
            >登陆</router-link
          >
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import jklogo from "@/assets/images/jklogo.png";
import authService from "@/global/service/authService.js";

export default {
  data() {
    return {
      userInfo: []
    };
  },
  created() {
    this.userInfo = authService.userInfo();
    console.log(authService.userInfo());
  },
  computed: {
    userAvatar() {
      return this.userInfo.avatar ? this.userInfo.avatar.path : jklogo;
    }
  },
  methods: {
    handleCommand(command) {
      this[command]();
    },
    logout() {
      authService.logout();
    }
  }
};
</script>

<style type="text/css" lang="less">
.page-header {
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.05);
  .container {
    width: 1080px;
    margin: 0 auto;
    height: 60px;
    .head-logo {
      width: 56px;
      height: 39px;
      margin-right: 32px;
      float: left;
      margin-top: 10px;
      .img-link {
        width: 56px;
        height: 39px;
      }
    }
    .head-nav {
      width: 340px;
      margin-right: 235px;
      display: inline-block;
      margin-top: 21px;
      .nav-item {
        position: relative;
        font-size: 15px;
        line-height: 15px;
        color: #333;
        margin-right: 35px;
        text-decoration: none;
        &.router-link-exact-active {
          color: #006eda;
          &:after {
            position: absolute;
            content: "";
            display: block;
            width: 28px;
            height: 3px;
            background: #006eda;
            bottom: -8px;
            left: 0;
            width: 100%;
            border-radius: 1.5px;
          }
        }
      }
    }
    .head-search {
      width: 200px;
      height: 34px;
      display: inline-block;
      border-radius: 17px;
      background: rgba(247, 247, 247, 1);
      vertical-align: top;
      padding: 0 14px;
      margin-top: 13px;
      position: relative;
      .search-input {
        font-size: 13px;
        color: #838ca1;
        border: none;
        line-height: 34px;
        background: rgba(247, 247, 247, 1);
        border-radius: 17px;
        outline: none;
      }
      .search-icon {
        width: 14px;
        height: 15px;
        background: url("~@/assets/images/search-icon.svg");
        background-repeat: no-repeat;
        background-size: 13px 15px;
        position: absolute;
        right: 14px;
        top: 10px;
      }
    }
    .head-userINFO {
      vertical-align: top;
      float: right;
      margin-top: 13px;
      .icon {
        .online-icon {
          vertical-align: top;
          margin-top: 12px;
          width: 16px;
          height: 16px;
          cursor: pointer;
          display: inline-block;
          background: url("~@/assets/images/online.svg");
        }
        .touxiang-icon {
          width: 34px;
          height: 34px;
          display: inline-block;
          cursor: pointer;
          margin-left: 30px;
          border-radius: 50%;
        }
      }
      .head-login {
        .login {
          display: inline-block;
          text-align: center;
          text-decoration: none;
          color: #5db855;
          border: 2px solid #5db855;
          padding: 5px 0;
          width: 80px;
          border-radius: 999px;
        }
      }
    }
  }
}
</style>
