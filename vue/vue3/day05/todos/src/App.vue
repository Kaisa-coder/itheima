<template>
  <div>
    <todo-input @add="onAddNewTask"></todo-input>
    <todo-list :list="tasklist"></todo-list>
    <todo-button v-model:active="activeBtnIndex"></todo-button>
  </div>
</template>

<script>
import TodoList from './components/todo-list/TodoList.vue'
import TodoInput from './components/todo-input/TodoInput.vue'
import TodoButton from './components/todo-button/TodoButton.vue'
export default {
  name:'MyApp',
  data() {
    return {
      todolist:[
        {id:1,task:'周一早晨9点开会',done:false},
        {id:2,task:'周一晚上8点聚餐',done:false},
        {id:3,task:'准备周三上午的演讲稿',done:true}
      ],
      nextId:4,
      activeBtnIndex: 0
    }
  },
  components:{
    TodoList,
    TodoInput,
    TodoButton
  },
  methods: {
    onAddNewTask(taskname){
      this.todolist.push({
        id:this.nextId,
        task:taskname,
        done:false
      })
      this.nextId++
    }
  },
  computed: {
 // 根据激活按钮的索引值，动态计算要展示的列表数据
 tasklist() {
 // 对“源数据”进行 switch...case 的匹配，并返回“计算之后的结果”
 switch (this.activeBtnIndex) {
 case 0: // 全部
 return this.todolist
 case 1: // 已完成
 return this.todolist.filter(x => x.done)
 case 2: // 未完成
 return this.todolist.filter(x => !x.done)
 }
 },
},
}
</script>

<style lang="less" scoped>
  
</style>