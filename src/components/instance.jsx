import axios from "axios";

const instance = axios.create({
  baseURL: "https://workinteck-fe-final.onrender.com",
});

export default instance;
