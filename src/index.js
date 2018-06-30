import './progress.less';
import config from './config';
import progress from './progress';

progress.version = '__VERSION__';

progress.config = function (options) {
  if (!options || Array.isArray(options) || typeof options !== 'object') return config;
  for (const key in options) {
    if (!options.hasOwnProperty(key)) continue;
    config[key] = options[key];
  }
  return config;
};

progress.install = function (Vue, options) {
  progress.config(options);
  Vue.prototype.$progress = progress;
};

export default progress;
