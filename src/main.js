import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// Mock.js
import './mock/index.js';  // 该项目所有请求使用mockjs模拟
// normalize.css main.less
import 'normalize.css';
import './assets/style/main.less';
// ant-design-vue
import 'ant-design-vue/dist/antd.css';
import { Button, Tag, Pagination, Input, Form, Menu, Layout, Empty, Result } from 'ant-design-vue'

const app = createApp(App);
app.use(Button)
    .use(Tag)
    .use(Pagination)
    .use(Input)
    .use(Form)
    .use(Menu)
    .use(Layout)
    .use(Empty)
    .use(Result)
app.use(store).use(router).mount("#app");
