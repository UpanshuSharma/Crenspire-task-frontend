import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:5000" });
export const getDataFromAPI = () => {
  console.log("API CALLING");
  return API.get("/data/getData");
};

export const getDataFromAPI2 = (id) => {
  console.log("API CALLING");
  return API.get(`/data/getData/${id}`);
};
