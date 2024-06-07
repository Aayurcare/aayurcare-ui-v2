var BASE_URL = "https://api.aayurcare.com";
if (process.env.DEV) {
  if (process.env.DEV === "true") {
    console.log("Dev mode, setting base api url to localhost");
  }
}
// BASE_URL = "http://localhost:8081";

const ENQUIRY = `${BASE_URL}/v1/plans/enquiry`;

const PLANS_URL = `${BASE_URL}/v1/plans`;

const LOGIN_URL = `${BASE_URL}/v1/auth/user/login`;

const SIGNUP_URL = `${BASE_URL}/v1/auth/user/login`;

export { ENQUIRY, PLANS_URL, LOGIN_URL, SIGNUP_URL };
