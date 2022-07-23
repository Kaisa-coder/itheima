<template>
  <div>
    <p>count 的值是：{{count}}</p>
    <button @click="add">+1</button>
  </div>
</template>

<script>
export default {
name:'MyCount',
emits:['countchange'],
data() {
  return {
    count:0
  }
},
methods: {
  add(){
    this.count++
    this.$emit('countchange',this.count)
  }
},
}
</script>

<style>

</style>