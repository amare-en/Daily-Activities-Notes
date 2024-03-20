<script setup>
import Calculater from './components/Calculater.vue';
import { ref } from 'vue';
const count= ref(0);
const add =()=>{
  console.log("Hello")
  count.value = count.value +1
}
const substruct =()=>{
 count.value = count.value-1
}
</script>
<template>
  <main>
    <Calculater/>
   <div>
<h4>The current count is ....</h4>
<button @click="substruct">-</button>
<h1>{{count}}</h1>
<button @click="add">+</button>
  </div>
  </main>
</template>
<style scoped>
main{
  background-color: aliceblue;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

}
div{
  text-align: center;
}
hl{
  color: green;
  font-size: large;
  font-family:Arial, Helvetica, sans-serif;
}
button{
  padding-right: 3px;
  padding-left: 3px;
}
</style>