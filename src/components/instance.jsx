import axios from "axios";

const instance = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com/",
  headers: { Accept: "application/json" },
});

export default instance;
