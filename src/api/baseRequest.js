import Cookies from "js-cookie";

const doPost = async (url, data) => {
  try {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    const response = await fetch(url, requestOptions);
    const json = await response.json();
    if (!response.ok) {
      throw json.error;
    }
    return json;
  } catch (error) {
    throw Error(error);
  }
};

export { doPost };
