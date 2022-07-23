<template>
  <form class="form-inline" @submit.prevent="onFormSubmit">
  <div class="input-group mb-2 mr-sm-2">
    <div class="input-group-prepend">
      <div class="input-group-text">任务</div>
    </div>
    <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="请填写任务信息" style="width : 356px" v-model.trim="taskname">
  </div>
  <button type="submit" class="btn btn-primary mb-2">添加新任务</button>
</form>
</template>

<script>
export default {
  name:'TodoInput',
  data() {
    return {
      taskname:'', 
    }
  },
  emits:['add'],
  methods: {
    onFormSubmit(){
      if(!this.taskname) return alert('任务名称不能为空！')
      this.$emit('add',this.taskname)
      this.taskname=''
    }
  },
}
</script>

<style lang="less" scoped>

</style>>

