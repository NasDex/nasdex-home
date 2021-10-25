import config from '../config/api.config';
import AxiosClass from './axiosClass';
const ax = AxiosClass;
const baseAxios = new ax(config.baseUrl);
export { baseAxios };