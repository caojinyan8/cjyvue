import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const home=()=>import(/*webpackChunkName:"home"*/'./components/home')
const detail=()=>import(/*webpackChunkName:"detail"*/'./components/detail')
const shopcar=()=>import(/*webpackChunkName:"shopcar"*/'./components/shopcar')
const user=()=>import(/*webpackChunkName:"user"*/'./components/user')
const classify=()=>import(/*webpackChunkName:"classify"*/'./components/classify')
const login=()=>import(/*webpackChunkName:"login"*/'./components/login')
const reg=()=>import(/*webpackChunkName:"reg"*/'./components/reg')

// import home from './components/home.vue'
// import detail from './components/detail.vue'
// import shopcar from './components/shopcar.vue'
// import user from './components/user.vue'
// import classify from './components/classify'
import error from './components/error'
// import login from './components/login'
// import reg from './components/reg'
let routes=[
    {path:'/home',component:home},
    {name:"detail",path:'/detail/:id',component:detail},
    {path:'/shopcar',component:shopcar},
    {path:'/user',component:user},
    {path:'/classify',component:classify},
    {path:'/login',component:login},
    {path:'/reg',component:reg},
    {path:'/',redirect:'home'},
    {path:'*',component:error}

]
export default new Router({
 routes
})
