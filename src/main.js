import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import loadAntdCom from './utils/loadAntdCom';

const app = createApp(App)
  .use(store)
  .use(router);
loadAntdCom(app);
app.mount('#app');

window.onerror = err => {
  console.log(err);
};
