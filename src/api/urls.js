var BASE_URL = "https://api.aayurcare.com";
if (process.env.DEV) {
  if (process.env.DEV === "true") {
    console.log("Dev mode, setting base api url to localhost");
  }
}
// BASE_URL = "http://localhost:8081";

const ENQUIRY = `${BASE_URL}/v1/plans/enquiries`;

const PLANS_URL = `${BASE_URL}/v1/plans`;

//AUTH URLs

const LOGIN_URL = `${BASE_URL}/v1/auth/customer/login`;

const SIGNUP_URL = `${BASE_URL}/v1/auth/customer/register`;

const REQUEST_OTP_URL = `${BASE_URL}/v1/auth/customer/register/otp/request`;

const VERIFY_OTP_URL = `${BASE_URL}/v1/auth/customer/register/otp/verify`;

const MY_PLANS = `${BASE_URL}/v1/account/subscriptions`;

const SESSION_REFRESH_URL = `${BASE_URL}/v1/auth/user/session`;

export {
  ENQUIRY,
  PLANS_URL,
  LOGIN_URL,
  SIGNUP_URL,
  MY_PLANS,
  SESSION_REFRESH_URL,
  REQUEST_OTP_URL,
  VERIFY_OTP_URL,
};
