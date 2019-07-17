<template>
  <div class="container">
    <h1>Vue Admin<br /><span> 后台登录界面</span></h1>
    <el-tabs v-model="activeName" @tab-click="handleClick" stretch>
      <!-- <el-tab-pane label="用户登陆" name="first">空</el-tab-pane> -->
      <el-tab-pane label="手机登陆" name="second">
        <el-form :model="phoneForm" :rules="rules">
          <el-form-item prop="phone">
            <el-input
              v-model="phoneForm.phoneNumber"
              placeholder="请输入手机号"
              type="number"
              prefix-icon="el-icon-mobile-phone"
            ></el-input>
          </el-form-item>
          <el-form-item prop="code">
            <div class="auth-item">
              <el-input
                class="auth"
                v-model="phoneForm.auth"
                placeholder="请输入验证码"
              ></el-input>
              <el-button
                class="auth-btn"
                :disabled="disabled"
                @click="handleSendCode"
                >{{ buttonName }}</el-button
              >
            </div>
          </el-form-item>
          <el-form-item>
            <el-checkbox v-model="phoneForm.checked"
              >自动登录</el-checkbox
            ></el-form-item
          >
          <el-form-item
            ><el-button type="primary">登陆</el-button></el-form-item
          >
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttonName: "获取验证码",
      disabled: false,
      activeName: "second",
      phoneForm: {
        phoneNumber: "",
        auth: "",
        checked: true
      },
      rules: {
        phone: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          {
            pattern: /^1[3456789]\d{9}$/,
            message: "目前只支持中国大陆的手机号码",
            trigger: "blur"
          }
        ],
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }]
      }
    };
  },
  methods: {
    handleSendCode() {
      if (this.disabled) {
        return;
      }
      this.disabled = true;
      let time = 60;
      this.buttonName = `(${time})秒重新发送`;
      const interval = window.setInterval(() => {
        time -= 1;
        this.buttonName = `(${time})秒重新发送`;
        if (time <= 0) {
          this.buttonName = "重新发送";
          window.clearInterval(interval);
          this.disabled = false;
        }
      }, 1000);
      // console.log(this.phoneForm.auth)
      // console.log(this.$refs.phoneForm)
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  components: {}
};
</script>

<style scope>
body,
html {
  height: 100%;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  height: 400px;
  width: 300px;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  -webkit-box-shadow: 2px 14px 32px 6px rgba(0, 0, 0, 0.3);
  box-shadow: 2px 14px 32px 6px rgba(0, 0, 0, 0.3);
}

h1 > span {
  font-size: 20px;
  font-weight: 200;
  color: #999;
}

.auth-item {
  display: flex;
  justify-content: space-between;
}
.auth {
  width: 140px !important;
}
.auth-btn {
  width: 150px !important;
}
</style>
