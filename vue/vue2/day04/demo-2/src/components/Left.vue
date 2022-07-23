<template>
  <div class="left-container">
    <h3>Left 组件</h3>
    <p>msg 的值是 {{ msg }}</p>
    <p>user 的值是 {{ user }}</p>
    <button @click="msg = 'abc'">修改 msg</button>
    <button @click="user.name = 'zs'">修改 user</button>
    <button @click="send">发送数据</button>
    <hr />
    <div v-for="item in arr" :key="item.id">{{ item.name }}</div>
  </div>
</template>

<script>
// 导入 eventBus.js 模块
import bus from "./eventBus";

export default {
  props: ["msg", "user"],
  data() {
    return {
      str: `黑云压城城欲摧，渚清沙白鸟飞回。借问酒家何处有，半径瑟瑟半江红。`,
      arr: [
        {
          id: 1,
          name: "zs",
        },
        {
          id: 2,
          name: "ls",
        },
      ],
    };
  },
  methods: {
    send() {
      // 通过 eventBus 发送数据
      bus.$emit("share", this.str);
    },
  },
};
</script>

<style lang="less">
.left-container {
  padding: 0 20px 20px;
  background-color: orange;
  min-height: 250px;
  flex: 1;
}
</style>
