import request from "@/global/request/axios";
import API from "@/global/request/api";
import DataStore from "@/global/storage/index";

const authService = {
  phoneSmsVerifyCode({ phone_number }) {
    return request.get(API.phoneSmsVerifyCode, { phone_number });
  },

  loginByPhoneCode({ phone_number, code }) {
    return request
      .post(API.loginByPhoneCode, { phone_number, code })
      .then(res => {
        DataStore.setToken(res.data.token);
        DataStore.storage.set("userInfo", res.data.userinfo);

        // let userinfo = res.data.userinfo;
        // localStorage.setItem("userInfo", JSON.stringify(userinfo));
        return res;
      });
  },
  userInfo() {
    const mapData = DataStore.storage.get("userInfo");
    return mapData;
  },

  logout() {
    DataStore.clear();
  }
};

export default authService;
