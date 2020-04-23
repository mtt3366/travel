import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// create new Store and export 创建新的仓库并且导出
export default new Vuex.Store({
  state: {// place global public data 放置全局公用数据
    city: '上海'
  },
  // actions: {
  //   changeCity (ctx, city) {
  //     // use ctx get 'commit' method  使用ctx拿到commit方法
  //     ctx.commit('changeCityx', city)// 执行mutations
  //   }
  // },
  mutations: {
    changeCity (state, city) { // store 里面的state 和 传过来的city
      state.city = city// 根据传过来的city,改变 store 里面的state
    }
  }
})
