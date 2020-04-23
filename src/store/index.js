import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
Vue.use(Vuex)

// create new Store and export 创建新的仓库并且导出
export default new Vuex.Store({
  state,
  mutations
})
