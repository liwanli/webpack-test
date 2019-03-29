const devConf = require('./config/webpack.dev.conf');
const prodConf = require('./config/webpack.prod.conf')

let ENV = process.env.NODE_ENV;
let finalConfig = {};


switch(ENV){
  case 'dev':
    finalConfig = devConf;
    break;
  case 'prod':
    finalConfig = prodConf;
  break;
  default:
  break;
}




module.exports = finalConfig;