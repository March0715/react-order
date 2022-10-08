import axios from 'axios';
import { BASE_URL } from './constant';

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';

// 封装 axios
export const request = async (method: string, url: string, data?: any) => {
  return await axios({
    method,
    url: `${BASE_URL}${url}`,
    data,
    withCredentials: false,
    timeout: 10000,
  });
};
