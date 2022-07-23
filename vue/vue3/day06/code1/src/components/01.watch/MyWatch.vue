<template>
  <div>
    <h3>watch 侦听器的用法</h3> 
    <input type="text" class="form-control" v-model.trim="username" >
  </div>
</template>

<script>
export default {
  name:'MyWatch',
  data() {
    return {
      username:''
    }
  },
  watch:{
    username(newVal,oldVal){
      console.log(newVal,oldVal);
    }
  }
}
</script>

<style lang="less" scoped>
  
</style>