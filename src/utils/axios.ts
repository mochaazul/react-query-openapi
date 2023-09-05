
import Axios, { AxiosError, AxiosRequestConfig } from "axios";
// our global Axios instance including the base URL
const axios = Axios.create({
  baseURL: import.meta.env.VITE_BASE_URL ?? '',
});

// this function was taken from the Orval docs
const customInstance = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig,
): Promise<T> => {
  const source = Axios.CancelToken.source();
  const promise = axios({
    ...config,
    ...options,
    cancelToken: source.token,
  }).then(({ data }) => data);

  // @ts-ignore
  promise.cancel = () => {
    source.cancel('Query was cancelled');
  };

  return promise;
};

export default customInstance
