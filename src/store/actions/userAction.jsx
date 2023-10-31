import instance from "../../components/instance";
import { toast } from "react-toastify";

export const USER_ACT = "USER";

export const user = (id) => ({
  type: USER_ACT,
  payload: id,
});

export const handleLogin = (data, history) => (dispatch) => {
  instance
    .post("/login", data)
    .then((res) => {
      dispatch(user(res.data));
      const token = res.data.token;
      localStorage.setItem("token", token);
      history.push("/");
      toast.success(`Welcome ${res.data.name}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    })
    .catch((err) => {
      toast.error(`${err}`, {
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
