import Axios from 'axios';
import { REACT_APP_API_URL, REACT_APP_X_TOKEN } from '~/utils';
import { interceptorsAuthHeaders } from './interceptors';

export const request = Axios.create({
  baseURL: REACT_APP_API_URL,
  headers: {
    accept: 'application/json',
    'x-token': REACT_APP_X_TOKEN,
  },
  timeout: 15000, // 15 seconds timeout
});

request.interceptors.request.use(interceptorsAuthHeaders);

export default request;
