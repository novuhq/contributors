import axiosInstance from "axios";

console.log(process.env.SERVER_URL);
export const axios = axiosInstance.create({
  baseURL: process.env.SERVER_URL
});
