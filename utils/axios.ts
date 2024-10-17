import axios from "axios";

const HEADER = {
  "Content-Type": "application/json;charset=utf-8",
};

const axiosServices = axios.create({
  timeout: 50000,
  headers: HEADER,
});
// interceptor for http
axiosServices.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(
      (error?.response && error?.response?.data) || "Wrong Services"
    );
  }
);

export default axiosServices;
