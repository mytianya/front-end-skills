import Layout from '@/views/layout/index.vue'
const demoRouter={
    path:'/imf',
    component:Layout,
    redirect:'/imf/app',
    name:'imf',
    meta:{
        title:'应用管理',
    },
    children:[
        {
            path:'app',
            component:()=>import('@/views/app/App'),
            name:'App',
            meta:{
                title:'接入应用管理'
            }
        },
        {
            path:'appshow',
            component:()=>import('@/views/appshow/index.vue'),
            name:'AppShow',
            meta:{
                title:'应用相关信息查看'
            }
        },
        {
            path:'appservice',
            component:()=>import('@/views/app/AppService'),
            name:'AppService',
            meta:{
                title:'应用服务管理'
            }
        },
        {
            path:'manager',
            component:()=>import('@/views/service/ServiceManager'),
            name:'manager',
            meta:{
                title:'服务管理'
            }
        }
    ]
}
export default imfRouter
