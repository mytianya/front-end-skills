<!--  -->
<template>
  <div>
    <el-checkbox
      :indeterminate="isIndeterminate"
      v-model="checkAll"
      @change="handleCheckAllChange"
      >{{msgs.typeName}}</el-checkbox
    >
    <div style="margin: 15px 0"></div>
    <el-checkbox-group
      v-model="checkedMsgs"
      @change="handleCheckedMsgChange"
    >
      <el-checkbox v-for="styp in msgs.styps" :label="styp.stypCode" :key="styp.stypCode">{{
        styp.stypName
      }}</el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script>
/**
 * msgs:{
 *  typeName:'航迹消息',
 *  typeCode:'track',
 *  styps:[
 *      {
 *          'stypName':'淮安航迹',
 *          'stypCode':'ha'
 *      }
 *  ]
 * }
 */
export default {
  props:["msgs"],
  data() {
    return {
        checkAll:false,
        isIndeterminate:true,
        checkedMsgs:this.msgs.checks,
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
      handleCheckAllChange(val){{
          this.checkedMsgs=val?this.msgs.styps.map(x=>x.stypCode):[];
          this.isIndeterminate=false;
          this.$emit('change',{typeCode:this.msgs.typeCode,checkedMsgs:this.checkedMsgs})

      }},
      handleCheckedMsgChange(value){
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.msgs.styps.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.msgs.styps.length;
        this.$emit('change',{typeCode:this.msgs.typeCode,checkedMsgs:this.checkedMsgs})
      }

  },
};
</script>
<style scoped>
</style>