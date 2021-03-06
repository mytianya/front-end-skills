import Vue from 'vue'
import Router from 'vue-router'
import elRouter from './modules/elementui'
import Layout from '@/views/layout/index.vue'
Vue.use(Router)
export const constantRoutes=[
    {
        path:'/',
        component:Layout,
        redirect:'/elementui/hello'
    },
    elRouter,
    {
        path:'/404',
        component:()=> import('@/views/error-page/404'),
        hidden:true
    },
    //这个*匹配必须放在最后
    {path:'*',redirect:'/404',hidden:true}
]
const createRouter=()=>new Router({
    //解决vue框架页面跳转有白色不可追踪的bug
    scrollBehavior: () => ({ y: 0 }),
    routes:constantRoutes
})
const router=createRouter()
export default router