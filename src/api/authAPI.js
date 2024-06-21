import { doPost } from "./baseRequest";
import {
  ENQUIRY,
  LOGIN_URL,
  REQUEST_OTP_URL,
  SESSION_REFRESH_URL,
  SIGNUP_URL,
  VERIFY_OTP_URL,
} from "./urls";
import Cookies from "js-cookie";

const loginUser = async (data) => {
  return await doPost(LOGIN_URL, data);
};

const signUpUser = async (data) => {
  return await doPost(SIGNUP_URL, data);
};

const requestOTP = async (data) => {
  return await doPost(REQUEST_OTP_URL, data);
};

const verifyOTP = async (data) => {
  return await doPost(VERIFY_OTP_URL, data);
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

export { loginUser, fetchSessionData, requestOTP, verifyOTP, signUpUser };
