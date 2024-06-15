import createStore from "react-auth-kit/createStore";

const store = await createStore({
  authName: "_auth",
  authType: "cookie",
  tokenObject: "",
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === "https:",
});

export default store;
