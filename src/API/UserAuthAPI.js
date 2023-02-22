import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });
export const login = (form_data) => API.post("/user/login", form_data);

export const signup = (form_data) => API.post("/user/register", form_data);
