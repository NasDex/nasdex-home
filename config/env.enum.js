import { getMainHost } from '../assets/js/util';
let domain;
try {
  domain = getMainHost();
  // console.log(domain,'11111');
} catch (err) {};

export default {
 grapewallet:{
   baseUrl:`https://api.wallet.ufoex.com/`
 },
};
