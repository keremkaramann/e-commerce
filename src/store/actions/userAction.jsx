import { toast } from "react-toastify";
import { API, renewAPI } from "../../endpoint/instance";

export const USER_ACT = "USER";
export const LOGOUT = "LOGOUT";

export const setUser = (data) => ({
  type: USER_ACT,
  payload: data,
});

export const logout = () => ({
  type: LOGOUT,
});

export const handleLogin = (data, history) => (dispatch) => {
  const token = localStorage.getItem("token");
  if (token) {
    toast.error("Already Logged in!!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    history.push("/");
    return;
  }
  API.post("login", data)
    .then((res) => {
      dispatch(setUser(res.data));
      localStorage.setItem("token", res.data.token);
      renewAPI(res.data.token);
      history.push("/");
      toast.success(`Welcome ${res.data.name}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    })
    .catch((err) => {
      console.log("Login Error Msg:", err);
      toast.error("Register First!!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    });
};

export const handleLogout = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch(logout());
};

export const handleVerify = () => (dispatch) => {
  const getToken = localStorage.getItem("token");
  if (getToken) {
    API.get("verify")
      .then((res) => {
        dispatch(setUser(res.data));
        renewAPI(res.data.token);
      })
      .catch((err) => {
        localStorage.removeItem("token");
        renewAPI();
      });
  }
};
