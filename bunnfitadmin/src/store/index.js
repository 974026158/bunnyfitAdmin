import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
// 初始化用sessionstorage.getitem('token') 这样页面刷新就不用重新登陆了
// const state = {
//   user: window.sessionStorage.getItem("user"),
//   token: window.sessionStorage.getItem("token")
// };
// const mutations = {
//   // 将token保存到sessionstorage中 token表示登录状态
//   SET_TOKEN: (state, data) => {
//     state.token = data;
//     window.sessionStorage.setItem("token", data);
//   },
//   // 获取用户名
//   GET_USER: (state, data) => {
//     // 存用户名
//     state.user = data;
//     window.sessionStorage.setItem("user", data);
//   },
//   // 退出 清除token
//   LOGOUT: state => {
//     state.token = null;
//     state.user = null;
//     window.sessionStorage.removeItem("token");
//     window.sessionStorage.removeItem("user");
//   }
//   // ---------------------------------------------------------------------
// };
// const actions = {};

export default new Vuex.Store({
  // actions
});
