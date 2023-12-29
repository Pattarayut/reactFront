/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-param-reassign */
import axios, {
  AxiosStatic,
  AxiosRequestConfig,
  AxiosInstance,
  AxiosPromise,
  AxiosResponse,
} from "axios";

import { toast } from "react-hot-toast";

interface AxiosRequestConfigCustom extends AxiosRequestConfig {
  isFormData?: boolean;
  error?: any;
  isHideError?: boolean;
}
export interface AxiosStaticCustomConfig extends AxiosInstance {
  create(config?: AxiosRequestConfigCustom): AxiosInstance;
  put<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfigCustom
  ): Promise<R>;
  get<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfigCustom
  ): Promise<R>;
  delete<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfigCustom
  ): Promise<R>;
  post<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfigCustom
  ): Promise<R>;
  put<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfigCustom
  ): Promise<R>;
  patch<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfigCustom
  ): Promise<R>;
}

axios.interceptors.request.use((config: any): any => {
  config.baseURL = "http://localhost:1150/api";
  if (!config.headers["x-auth-token"]) {
    const currentLocalStorage = localStorage.getItem("tokenTestCJ");
    if (currentLocalStorage) {
      const json: { token: string } = JSON.parse(currentLocalStorage);
      const { token } = json;
      config.headers["x-access-token"] = token ? token : "";
    }
  }
  return config;
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error?.response?.status === 401) {
      //   clearStorage();
      window.location.href = "/login";
    } else if (error?.config?.isHideError) {
      toast.error(error?.config?.isHideError);
      console.error("error==>>>", error);
    } else if (error?.response?.status >= 500) {
      console.error("error==>>>", error);
      toast.error(
        error?.response?.data?.message || "Something wrong, please try again."
      );
    } else if (error?.response?.config?.error) {
      toast.error(error?.response?.config?.error);
    } else {
      console.error("error==>>", error);
    }
    throw error;
  }
);
export default axios as AxiosStaticCustomConfig;
