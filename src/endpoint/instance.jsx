import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://workintech-fe-ecommerce.onrender.com/",
    headers: token
      ? {
          Authorization: `${token}`,
        }
      : {},
  });
};

export let API;

export const renewAPI = () => {
  API = axiosWithAuth();
};

renewAPI();
