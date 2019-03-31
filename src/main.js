// 入口文件
import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import moment from 'moment';// 导入格式化时间的插件
import App from './App.vue';

Vue.use(VueRouter);
Vue.use(VueAxios,axios);

// 定义全局的s时间过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern)
})

// 按需引入Mint-ui组件
import { Header, Swipe, SwipeItem, Button} from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);

import router from './router.js';

import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css';

var vm =  new Vue({
    el:'#app',
    render: c => c(App),
    router
});