import { Loading } from 'element-ui';

  const state = {
    showOverlay: false,
    loadingInstance:{},//遮罩对象
  };
  
  const mutations = {
    SET_SHOW_OVERLAY(state, value) {
      state.showOverlay = value;
      console.log("遮罩打开",state.showOverlay);
      state.loadingInstance = Loading.service({
          lock: true,
          text: 'Loading...',
          spinner: 'el-icon-loading',//加载的图标
          background: 'rgba(0, 0, 0, 0.7)'
        });
    },
    SET_HIDE_OVERLAY(state, value) {
        state.showOverlay = value;
        console.log("遮罩关闭",state.showOverlay);
        state.loadingInstance.close();//关闭遮罩
      }
  };
  
  const actions = {
    showOverlay({ commit }) {
      commit('SET_SHOW_OVERLAY', true);
    },
    hideOverlay({ commit }) {
      commit('SET_HIDE_OVERLAY', false);
    }
  };
  
  export default {
    namespaced: true,//开启命名空间
    state,
    mutations,
    actions
  };
  