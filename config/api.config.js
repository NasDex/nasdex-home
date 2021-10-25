import EnvEnum from './env.enum.js';
const platform = 'grapewallet';
let envConfig = EnvEnum[platform];
export default {
  baseUrl: envConfig.baseUrl,
};
