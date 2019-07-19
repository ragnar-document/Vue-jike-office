const PREFIX = "https://admin.edu.jiker.vip";
const VERSION = "V0.0.1";
export default {
  version: VERSION,
  loginByPhoneCode: `${PREFIX}/api/auth/login-by-phone-code`,
  phoneSmsVerifyCode: `${PREFIX}/api/auth/phone-sms-verify-code`,
  switchImages: `${PREFIX}/api/switch-images`
};
