<script setup>
import { defineProps } from 'vue';
const {quize} = defineProps(["quize"])
import {RouterLink} from "vue-router"
</script>
<template>
<router-link :to="`/course/${quize.id}`">
 <div class="card" style="width: 18rem;">
  <img :src="quize.img" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{ quize.name }}</h5>
    <p class="card-text">{{quize.questions.length}}</p>
  </div>
</div>
</router-link>
</template>