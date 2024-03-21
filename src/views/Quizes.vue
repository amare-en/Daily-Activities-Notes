<script setup>
import q from "../data/quizes.json"
import Card from "../components/Card.vue"
import {ref, watch} from 'vue';
const quizes = ref(q)
const search =ref("")
watch(search, ()=>{
    quizes.value =q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLocaleLowerCase()))
    console.log("I See the change.")
})
</script>
<template>
    <div class="container">
          {{ q }}
          {{ search }}
        <header>
            <h1>
             Quizes 
               </h1>
        <input v-model.trim="search" type="text" class="search" placeholder="Search...">
        </header>
        <div class="options-container">

            <Card v-for="quize in quizes" :key="quize.id" :quize="quize"/><!--we use props to pass data from quizes components to card components-->
        
        <!--<div v-for="quize in quizes" :key="quize.id" class="card" style="width: 18rem;">
  <img :src="quize.img" class="card-img-top" alt="...">
  <div class="card-body">
       <h5 class="card-title">{{quize.name}}</h5>
       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       <p>{{ quize.questions.length}}</p>
  </div>
   </div>
   -->
    </div>
    </div>
</template>
<style scoped>
.container{
    max-width: 1000px;
    margin: 0 auto;
}
header{
    margin-bottom: 10px;
    margin-top: 30px;
    display: flex;
    align-items: center;
}
.options-container{
  display: flex;
}

</style>