import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
let store =new Vuex.Store({
    actions,mutations,getters,state
})
export default store