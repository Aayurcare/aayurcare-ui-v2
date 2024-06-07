import { ENQUIRY, LOGIN_URL } from "./urls";

const loginUser = async (data) => {
  try {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    const response = await fetch(LOGIN_URL, requestOptions);
    if (!response.ok) {
      throw `Invalid username/password`;
    }
    return await response.json();
  } catch (error) {
    throw Error(error);
  }
};

export { loginUser };
