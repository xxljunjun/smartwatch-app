# smartwatch

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### 一、安装项目

- npm install -g @vue/cli
- vue create -p dcloudio/uni-preset-vue 你的项目名

### 二、安装 sass

- npm install node-sass@4.14.1 --save-dev
- npm install sass-loader@8.0.2 --save-dev
  **_需要注意版本问题_**

### 三、安装上拉加载和下拉刷新组件

- npm install --save mescroll.js

### 四、安装 i18n 国际化

- npm install vue-i18n --save
- //在 i18n.js 中
  import Vue from 'vue';
  import VueI18n from 'vue-i18n';
  import zh from '@/i18n/zh';
  import en from '@/i18n/en';
  Vue.use(VueI18n);
  const messages = {
  zh, // 这是 zh: zh 的简写，后面同理
  en,
  };
  export default new VueI18n({
  locale: 'zh',
  messages,
  });
- //在 main.js 中
  import i18n from '@/utils/i18n';
  new App(
  i18n,
  ).$mount()
Vue.prototype.$i18nMsg = i18n.messages[i18n.locale] //挂载上去 this.\$i18nMsg.xxx 去访问
- 在 i18n 文件夹中
  zh.js
  en.js

### 五、安装 vuex

- npm install vuex --save
- 新建 store/index.js
  import Vue from 'vue'
  import Vuex from 'vuex'
  Vue.use(Vuex)

const store = new Vuex.Store({
state: {
// state 是存储中心，所有需要被共享或缓存的数据，都在这里定义
status: true,
token: "7758258",
},
getters: {
// getters 相当于组件的计算属性，它与 state 相关，当它所关系的 state 变量发生变化时，会自动重新计算
},
mutations: {
// mutations 是 Vuex 中专门用于更新 state,同步任务
toChaneStatus(state, pyylod) {
console.log(state)
console.log(pyylod)
}
},
actions: {
toChang(store, payload) {
console.log(store)
console.log(payload)
store.commit("toChaneStatus", payload)
}
// actions 是专门与后端 api 打交道的，异步任务;提交的是 mutation，而不是直接变更状态;可以包含任意异步操作。
},
modules: {
//vuex 分模块处理
}
})
export default store

- main.js
  import Vuex from 'vuex'
  import store from './store'
  const app = new Vue({
  store
  })
  app.\$mount()

### 六、安装 vue-router

- npm install vue-router
- 在 main.js 中
  import VueRouter from 'vue-router'
  Vue.use(VueRouter)

### 七、封装 uni.request(options)请求

- @/serve/request.js
- 解决跨域问题 manifest.json
  "h5": {
  "devServer": {
  "port": 8080,
  "disableHostCheck": true,
  "proxy": {
  "/he": {
  "target": "https://way.jd.com",
  "changeOrigin": true,
  "secure": false,
  "pathRewrite": {
  "/he": "/he"
  }
  }
  }
  }
  }

### 八、解决用户栏与顶部栏重合问题

- 在 manifest.json 中
  "app-plus": {
  /_ 导航栏和状态栏重叠问题 _/
  "statusbar": {
  "immersed": false
  },
  }

### 九、封装 tabBar 组件

- 利用父子组件传值控制路由跳转时 tabBar 的 class 类名的变化实现切换效果
- uniapp 的获取路由的方法
  let routes = getCurrentPages() // 获取当前打开过的页面路由数组
  let curRoute = routes[routes.length - 1].route // 获取当前页面路由，也就是最后一个打开的页面路由

### 十、mock 数据组件的使用

```
Mock.mock("http://localhost:8080/api/xxl/mock", "get", {
  aa: 11,
});
```
