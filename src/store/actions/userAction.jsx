import instance from "../../components/instance";
import { toast } from "react-toastify";
export const USER_ACT = "USER";

export const user = (id) => ({
  type: USER_ACT,
  payload: id,
});

export const handleLogin = (data) => (dispatch) => {
  instance
    .post("/login", data)
    .then((res) => {
      dispatch(user(res.data));
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
