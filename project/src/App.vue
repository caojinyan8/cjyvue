<template>
  <div id="app">
    <loading v-show="bLoading"></loading>
    <headers v-show="bHeader"></headers>
      <!-- <home></home> -->
      <!-- <shopcar></shopcar> -->
      <!-- <classify></classify> -->
      <!-- <user></user> -->
      <!-- <detail></detail> -->
      <router-view></router-view>
    <footers v-show="bFooter"></footers>
  </div>
</template>
<script>
import headers from './components/headers.vue'
import footers from './components/footers.vue'
import * as types from './store/type.js'

// import home from './components/home.vue'
// import classify from './components/classify.vue'
// import shopcarhead from './components/shopcarhead'
// import shopcar from './components/shopcar'
// import user from './components/user'
// import detail from './components/detail'
import {mapGetters} from 'vuex'
export default {
  components:{
    headers,footers
    //,home,classify,shopcarhead,shopcar,user,detail
  },
  methods:{
    checkRouterChange(to){
      // console.log(to.path)
      console.log(this.$store)
       let path=to.path
       if(/home|classify|error/.test(path)){
         this.$store.dispatch(types.VIEW_HEADER,true)
           this.$store.dispatch(types.VIEW_FOOTER,true)
       }
         if(/user|shopcar|login|reg/.test(path)){
         this.$store.dispatch(types.VIEW_HEADER,false)
         this.$store.dispatch(types.VIEW_FOOTER,true)

       }
         if(/detail/.test(path)){
         this.$store.dispatch(types.VIEW_HEADER,false)
         this.$store.dispatch(types.VIEW_FOOTER,false)

       }
    }
  },
  watch:{
  $route:{
    deep:true,
    immediate:true,
    handler:"checkRouterChange"
  }
  },
  computed:mapGetters([
    'bHeader','bFooter','bLoading'
  ])
}
</script>


