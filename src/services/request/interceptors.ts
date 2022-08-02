import { AxiosRequestConfig } from 'axios';

type CustomRequest = {
  authorization?: string;
};

export const interceptorsAuthHeaders = async (
  config: AxiosRequestConfig,
): Promise<AxiosRequestConfig & CustomRequest> => {
  const token = '';

  if (!token) return config;
  return {
    ...config,
    headers: {
      ...config.headers,
      authorization: token,
    },
  };
};
