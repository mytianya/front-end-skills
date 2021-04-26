<template>
  <div>
    <div v-for="(msgs,index) in allMsg" :key="index">
      <CheckGroupSub :msgs="msgs" @change="changeMsg"></CheckGroupSub>
    </div>
  </div>
</template>
<script>
import CheckGroupSub from "@/views/elementui/CheckGroupSub";
export default {
  components: { CheckGroupSub },
  methods:{
    changeMsg:function(msgs){
        console.log(msgs)
        this.allChecks.set(msgs.typeCode,msgs.checkedMsgs)
    }
  },
  data() {
    return {
      allChecks:undefined,
      allMsg: [
        {
          typeName: "航迹消息",
          typeCode: "track",
          checks:["ha1"],
          styps: [
            {
              stypName: "淮安航迹1",
              stypCode: "ha1",
            },
            {
              stypName: "淮安航迹2",
              stypCode: "ha2",
            },
          ],
        },
        {
          typeName: "电报信息",
          typeCode: "telegram",
           checks:["telegram2"],
          styps: [
            {
              stypName: "电报信息1",
              stypCode: "telegram1",
            },
            {
              stypName: "电报信息2",
              stypCode: "telegram2",
            },
          ],
        },
      ],
    };
  },
  mounted(){
    this.allChecks=new Map();
    this.allMsg.forEach(obj=>{
      console.log(obj)
      this.allChecks.set(obj.typeCode,obj.checks);
    })
    
  }
};
</script>