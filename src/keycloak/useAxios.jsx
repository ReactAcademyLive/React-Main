import { useRef } from 'react';
import axios from 'axios';
import { useAuth } from './KeycloakAuthProvider';

export const useAxios = (baseURL) => {
  const axiosInstance = useRef();
  const { token } = useAuth();

  if (!axiosInstance.current) {
    axiosInstance.current = axios.create({
      baseURL,
      headers: {
        Authorization: token ? `Bearer ${token}` : undefined,
      },
    });
  }

  return axiosInstance.current;
};
