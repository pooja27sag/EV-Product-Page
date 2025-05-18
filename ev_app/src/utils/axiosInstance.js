/** @format */

import Axios from "axios";
import axiosRetry from "axios-retry";
import { serverIpPath } from "./IpConstantFile";

const axiosInstance = () => {
  const instance = Axios.create({
    baseURL: serverIpPath,
    headers: {},
  });

  axiosRetry(instance, {
    retries: 3,
    shouldResetTimeout: true,
    retryCondition: (_error) => true,
  });

  instance.interceptors.request.use((req) => {
    return {
      ...req,
      headers: {
        ...req.headers,
        // You can add authorization tokens here if needed
      },
    };
  });

  instance.interceptors.response.use(
    (response) => Promise.resolve(response),
    (error) => {
      switch (error?.response?.status) {
        case 401:
          // handle 401
          break;
        case 403:
          // handle 403
          break;
        case 500:
          // handle 500
          break;
        default:
          break;
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

export default axiosInstance;
