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
            component:()=>import('@/views/elementui/App'),
            name:'Hello',
            meta:{
                title:'接入应用管理'
            }
        }
    ]
}
export default demoRouter
