import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { frontRoutes } from '../router';
axios.defaults.baseURL = "http://localhost:8887/";
Vue.use(Vuex);
function formatList(list) {
  let tree = [];
  let authArr = [];
  list.forEach(v => {
    authArr.push(v.auth);
    v.children = [];
    if (v.pid == 0) {
      tree.push(v)
    }
    v.children = list.filter(item => {
      return item.pid == v.id
    })
  })
  return { tree, authArr };
}

function needRoutes(routes, authArr) {
  if (routes && routes.length > 0) {
    return routes.filter(v => {
      if (authArr.includes(v.name)) {
        v.children = needRoutes(v.children, authArr);
        return true;
      }
    })
  }
}
export default new Vuex.Store({
  state: {
    isHaveAuth: false,
    menuList: [],
    authArr: []
  },
  mutations: {
    setMenuList(state, data) {
      state.menuList = data.tree;
      state.authArr = data.authArr;
    },
    setIsHaveAuth(state) {
      state.isHaveAuth = true;
    }
  },
  actions: {
    async getAuthRoutes({ commit }) {
      let res = await axios.get('/menuList');
      let { tree, authArr } = formatList(res.data.menuList);
      console.log(tree)
      commit('setMenuList', { tree, authArr });
      commit('setIsHaveAuth');
      return needRoutes(frontRoutes, authArr);
    }
  },
  modules: {}
});
