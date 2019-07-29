const PREFIX = "";
const VERSION = "V0.0.1";
export default {
  version: VERSION,
  loginByPhoneCode: `${PREFIX}/api/auth/login-by-phone-code`,
  phoneSmsVerifyCode: `${PREFIX}/api/auth/phone-sms-verify-code`,
  switchImages: `${PREFIX}/api/common/switch_image`,
  index: `${PREFIX}/api/index`,
  category: `${PREFIX}/api/course/category`,
  course: `${PREFIX}/api/course`,
  courseItem: id => {
    return `${PREFIX}/api/course/` + id;
  }
};
