import { baseAxios } from './axiosConfig';
// 获取app下载地址
const appBuildApi={
    getAppBuilds() {
        let timestamp = new Date().valueOf();
        return baseAxios.get(`/v1/ifglobal/appBuilds?t=${timestamp}`);
      }
};
export default appBuildApi;