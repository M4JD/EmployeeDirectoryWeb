import AxiosClient from "./AxiosClient";

const APIService = () => {
  const httpClient = AxiosClient();
  const get = (url, params) => {
    return httpClient.get(url, params);
  };
  const post = (url, request) => {
    return httpClient.post(url, request);
  };

  const put = (url, request) => {
    return httpClient.put(url, request);
  };

  const _delete = (url, request) => {
    return httpClient.delete(url, request);
  };
  return { put, post, get, delete: _delete }
}
export default APIService;