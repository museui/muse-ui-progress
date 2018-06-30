import 'muse-ui/src/styles/components/progress.less';
import Vue from 'vue';
import { FadeTransition } from 'muse-ui/src/internal/transitions';
import LinearProgress from 'muse-ui/src/Progress/LinearProgress';
import Progress from './index';
import 'muse-ui/src/styles/theme.less';

Vue.component(FadeTransition.name, FadeTransition);
Vue.component(LinearProgress.name, LinearProgress);

if (typeof window !== undefined && window.Vue) window.Vue.use(Progress);

export default Progress;
