<template>
  <div>
    <input type="text" v-model.number="count">
    <p>{{count}} 乘以 2 的值为：{{plus}}</p>
    <p>{{count}} 乘以 2 的值为：{{plus}}</p>
    <p>{{count}} 乘以 2 的值为：{{plus}}</p>
    
  </div>
</template>

<script>
export default {
  name:'MyCounter',
  data() {
    return {
      count:1,
    }
  },
  computed: {
    plus(){
      console.log('computed');
      return this.count*2
    }
  },
  methods: {
   /*  plus(){
      console.log('methods');
      return this.count*2
    } */
  },
}
</script>

<style>

</style>