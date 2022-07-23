<template>
  <div class="right-container">
    <h3>Right 组件---- {{ count }}</h3>
    <button @click="add">+1</button>
    <hr>
    <p> {{msgFromLeft}} </p>
  </div>
</template>

<script>
// 导入 eventBus.js 模块
import bus from "./eventBus";

export default {
  data() {
    return {
      count: 0,
      msgFromLeft: "",
    };
  },
  methods: {
    add() {
      // 让子组件的 count 值自增 +1
      this.count += 1;
      // 把自增的结果传给父组件
      this.$emit("numchange", this.count);
    },
  },
  created() {
    // 为 bus 绑定自定义事件
    bus.$on("share", (val) => {
      this.msgFromLeft = val;
    });
  },
};
</script>

<style lang="less">
.right-container {
  padding: 0 20px 20px;
  background-color: lightskyblue;
  min-height: 250px;
  flex: 1;
}
</style>
