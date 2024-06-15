import { ENQUIRY, LOGIN_URL } from "./urls";

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

export { loginUser };
