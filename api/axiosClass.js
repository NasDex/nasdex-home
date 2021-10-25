import axios from 'axios';
// import { setCookie, getCookie } from '~/assets/js/utils/cookie';
// import { aesEncrypy } from '~/assets/js/utils/aes';
// import Notification from '~/ex-ui/Notification';
// import bus from '~/assets/js/utils/bus';

const langObj = {
  'zh': 'zh-cn',
  'en': 'en',
  'th': 'th'
};
class AxiosClass {
  constructor(url) {
    this.http = axios.create({baseURL: url});
    this.request();
    this.response();
    this.canRefreshGlobalLeverageErrno = {
      'CONTRACT_ORDERS_EXISTS': true,
      'LEVERAGE_MATCH_ERROR': true,
      'CONTRACT_LEVERAGE_MATCH_ERROR': true,
      'CONTRACT_POSITIONS_EXISTS': true,
    };

    // 不需要弹框提示的errno
    this.notTipsErrno = {
      'OTC_ACCOUNT_NOT_FOUND': true
    };

    return this.http;
  }
  request() {
    this.http.interceptors.request.use(config => {
      let timestamp = new Date().valueOf();
      let nonce = timestamp + '000';
      config.headers.common['EX-Ver'] = '1.0';
      config.headers.common['EX-Dev'] = 'web';
      config.headers.common['Ex-Ts'] = nonce;
      config.headers.common['Content-Type'] = 'application/json';

      try {
        let ssid = getCookie('ssid');
        let uid = getCookie('uid');
        let locale = getCookie('lang');
        let token = getCookie('token');
        let version = getCookie('version');
        let options = getCookie('options');
        let dev = getCookie('dev');

        if (version) {
          config.headers.common['EX-Ver'] = version;
        }
        if (options) {
          config.headers.common['Ex-Dev'] = options;
        }

        locale = langObj[locale];
        // alert(locale);
        // if (locale && locale.indexOf('zh') < 0 && locale.indexOf('tw') < 0) {
        //   locale = 'en';
        // }
        // if (!locale || locale === 'zh' || locale === 'cn') {
        //   locale = 'zh-cn';
        // }
        if (!locale) {
          locale = 'en';
        }
        if (token) {
          token = aesEncrypy(token, nonce);
          // config.headers.common['EX-Token'] = token;
          config.headers.common['EX-Sign'] = token;
        }
        if (ssid) {
          config.headers.common['EX-Ssid'] = ssid;
        }
        if (uid) {
          config.headers.common['Ex-Uid'] = uid;
        }
        if (dev) {
          config.headers.common['EX-Dev'] = dev;
        }
        config.headers.common['EX-Language'] = locale;
        // config.headers.common['EX-Language'] = 'zh-cn';


      } catch (err) {}
      return config;
    }, error => {
      Promise.reject(error);
    });
  }
  response() {
    this.http.interceptors.response.use(res => {
      let token = res.headers['ex-token'];
      let uid = res.headers['ex-uid'];
      if (token) {
        setCookie('token', token);
      }
      if (uid) {
        setCookie('uid', uid);
      }
      if (res.status === 204) return res;
      if (res.status !== 200) return Promise.reject(res);
      // console.log(res.data);
      if (res.data.errno === 'OK') {
        return res.data;
      }
      if (process.client && !~['FORBIDDEN', 'ACCESS_TOO_OFTEN', 'TEAM_MAX_MEMBER_LIMIT', 'ONE_OF_TEAM_MEMBER', 'TEAM_NOT_FOUND', 'TEAM_USER_NOT_FOUND'].indexOf(res.data.errno)) {
        if (this.notTipsErrno[res.data.errno]) {
          return res.data;
        } else {
          Notification({
            title: window.$nuxt.$t('common.error'),
            message: res.data.message,
            type: 'error'
          });
        }
        // 需要重新获取全局杠杆
        if (this.canRefreshGlobalLeverageErrno[res.data.errno]) {
          bus.$emit('REFRESH_GLOBAL_LEVERAGE', {});
        }
      } else {
        if (res.data.errno === 'FORBIDDEN') {
          bus.$emit('CLEAR_TOKEN', {});
        }
      }
      return Promise.reject(res.data);
    }, error => {
      return Promise.reject(error);
    });
  }
}

export default AxiosClass;

