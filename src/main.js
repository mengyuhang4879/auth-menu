import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
Vue.config.productionTip = false;
router.beforeEach(async (to, from, next) => {
  if (!store.state.isHaveAuth) {
    let children = await store.dispatch("getAuthRoutes");
    router.options.routes[0].children = children;
    router.options.routes[1] = {
      path: "*",
      name: "notFound",
      component: () =>
        import(/* webpackChunkName: "notFound" */ "./views/notFound.vue"),
    };
    router.addRoutes(router.options.routes);
    next({ ...to, replace: true });
  } else {
    next();
  }
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
