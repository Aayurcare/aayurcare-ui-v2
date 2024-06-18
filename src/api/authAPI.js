import { ENQUIRY, LOGIN_URL, SESSION_REFRESH_URL } from "./urls";
import Cookies from "js-cookie";
const loginUser = async (data) => {
  try {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    const response = await fetch(LOGIN_URL, requestOptions);
    const json = await response.json();
    if (!response.ok) {
      throw json.error;
    }
    return json;
  } catch (error) {
    throw Error(error);
  }
};

const fetchSessionData = async () => {
  try {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("_auth")}`,
      },
    };
    const response = await fetch(SESSION_REFRESH_URL, requestOptions);
    const json = await response.json();
    if (!response.ok) {
      throw json.error;
    }
    return json;
  } catch (error) {
    throw Error(error);
  }
};

export { loginUser, fetchSessionData };
