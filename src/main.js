import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store';
import { router } from './routes/routes';

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  next();
});

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
