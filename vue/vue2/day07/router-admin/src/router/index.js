import Vue from "vue";
import VueRouter from "vue-router";
import Login from '@/components/MyLogin'
import Home from '@/components/MyHome'
import Users from '@/components/menus/MyUsers'
import Rights from '@/components/menus/MyRights'
import Goods from '@/components/menus/MyGoods'
import Orders from '@/components/menus/MyOrders'
import Settings from '@/components/menus/MySettings'
import UserDetail from '@/components/user/MyUserDetail'
import pathArr from '@/router/path'
Vue.use(VueRouter)
const router = new VueRouter({
  routes :[
    {path:'/',redirect:'/login'},
    {path:'/login',component:Login},
    {path:'/home',component:Home,redirect:'/home/users',
    children:[
      {path:'users',component:Users},
      {path:'rights',component:Rights},
      {path:'goods',component:Goods},
      {path:'orders',component:Orders},
      {path:'settings',component:Settings},
      {path:'userinfo/:id',component:UserDetail,props:true}
    ]}
  ]
})
router.beforeEach(function(to,from,next){
  if(pathArr.indexOf(to.path)!==-1){
    const token=localStorage.getItem('token')
    if(token){
      next()
    }
    else{
      next('/login')
    }
  }
  else{
    next()
  }
})
export default router