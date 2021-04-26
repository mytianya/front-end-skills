import Layout from '@/views/layout/index.vue'
const demoRouter={
    path:'/elementui',
    component:Layout,
    redirect:'/elementui/hello',
    name:'elementui',
    meta:{
        title:'ElementUI使用',
    },
    children:[
        {
            path:'hello',
            component:()=>import('@/views/elementui/Hello'),
            name:'Hello',
            meta:{
                title:'ElementUI使用介绍'
            }
        }
    ]
}
export default demoRouter
