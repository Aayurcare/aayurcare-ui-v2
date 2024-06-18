import Cookies from "js-cookie";
import { ENQUIRY, LOGIN_URL, MY_PLANS } from "./urls";

const fetchCustomerPlans = async () => {
  try {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("_auth")}`,
      },
    };
    const response = await fetch(MY_PLANS, requestOptions);
    const json = await response.json();
    if (!response.ok) {
      throw json.error;
    }
    return json;
  } catch (error) {
    throw Error(error);
  }
};

export { fetchCustomerPlans };
