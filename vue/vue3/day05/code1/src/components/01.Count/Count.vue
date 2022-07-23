<template>
  <div>
    <p>数量：{{count}}</p>
    <p>状态：{{state}}</p>
  </div>
</template>

<script>
export default {
  name:'MyCount',
  // props:['count','state']
  props :{
    count:{
      type:Number,
      required:true,
      default:100
    },
    state:Boolean,
    info:[String,Number],
    type:{
      validator(val){
        return ['success','warning','danger'].indexOf(val)!==-1
      }
    }
  }
}
</script>

<style lang="less" scoped>

</style>