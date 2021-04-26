import Layout from '@/views/layout/index.vue'
const elRouter={
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
        },
        {
            path:'radiogroup',
            component:()=>import('@/views/elementui/RadioGroup'),
            name:'RadioGroup',
            meta:{
                title:'单选框组'
            }
        }
    ]
}
export default elRouter
