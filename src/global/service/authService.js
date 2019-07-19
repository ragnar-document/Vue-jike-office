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
        return res;
      });
  },

  userInfo() {
    const mapData = DataStore.map.get("userInfo");
    if (mapData) {
      return Promise.resolve(mapData);
    }
    return request.get(API.userInfo).then(res => {
      DataStore.map.set("userInfo", res);
      return res;
    });
  }
};

export default authService;
