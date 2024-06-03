const BASE_URL = "https://api.aayurcare.com";
if (process.env.DEV) {
  if (process.env.DEV === "true") {
    console.log("Dev mode, setting base api url to localhost");
    BASE_URL = "http://localhost:8081";
  }
}

const ENQUIRY = `${BASE_URL}/v1/plans/enquiry`;

const PLANS_URL = `${BASE_URL}/v1/plans`;

export { ENQUIRY, PLANS_URL };
