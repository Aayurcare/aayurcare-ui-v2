const BASE_URL = process.env.BASEURL
  ? process.env.BASEURL
  : "http://localhost:8081";

const ENQUIRY = `${BASE_URL}/v1/plans/enquiry`;

const PLANS_URL = `${BASE_URL}/v1/plans`;

export { ENQUIRY, PLANS_URL };
