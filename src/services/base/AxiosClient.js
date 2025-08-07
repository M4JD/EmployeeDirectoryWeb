import axios from "axios";
import {
  AuthInterceptor,
  ErrorInterceptor,
  ResponseInterceptor,
} from "./Interceptors";

const AxiosClient = () => {
  const baseUrl = "http://localhost:3001/api";
  // "Content-Type": "multipart/form-data" //for file upload
  const headers = {
    "Content-Type": "application/json",
  };

  const client = axios.create({
    baseURL: baseUrl,
    headers,
    timeout: 60000,
    withCredentials: false,
  });

  client.interceptors.request.use(AuthInterceptor);

  client.interceptors.response.use(ResponseInterceptor, ErrorInterceptor);

  return client;
};

export default AxiosClient;
