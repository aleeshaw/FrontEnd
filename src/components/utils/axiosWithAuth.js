import axios from "axios";

export const Endpoint = axios.create({
  baseURL: "https://lbs-african-marketplace.herokuapp.com/"
});

const axiosWithAuth = () => {
  // const token = localStorage.getItem("token");

  // return axios.create({
  //   baseURL: "https://lbs-african-marketplace.herokuapp.com",
  //   headers: {
  //     Authorization: token

  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "https://lbs-african-marketplace.herokuapp.com/",
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    }
  });
};
export default axiosWithAuth;
