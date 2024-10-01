import { createStore } from 'vuex';

export default createStore({
  state: {
    // 定义应用的全局状态
    user: null,
    events: []
  },
  mutations: {
    // 修改 state 的方法
    setUser(state, user) {
      state.user = user;
    },
    setEvents(state, events) {
      state.events = events;
    }
  },
  actions: {
    // 执行异步操作并提交 mutations
    fetchEvents({ commit }) {
      // 假设从 API 获取活动数据
      const events = [
        { id: 1, name: "Swing Dance Workshop", date: "2024-10-01" },
        { id: 2, name: "Swing Night Dance", date: "2024-10-05" }
      ];
      commit('setEvents', events);
    }
  },
  getters: {
    // 定义从 state 中派生出的数据
    getUser(state) {
      return state.user;
    },
    getEvents(state) {
      return state.events;
    }
  }
});
