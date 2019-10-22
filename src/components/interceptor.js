import axios from 'axios';

//BASE URL
axios.defaults.baseURL = "https://lbs-african-marketplace.herokuapp.com/api";

axios.interceptors.request.use(config => {
  //token request
  const token = localStorage.getItem("token");
  config.headers.authorization = token;
  return config;
});

axios.interceptors.response.use(result => {
  if (result.data.token) {
    localStorage.setItem("token, result.data.token");
    localStorage.setItem("user_id", result.data.id);
  }
  return result;
});