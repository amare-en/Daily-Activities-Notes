<script setup>
import Quizes from "@/views/Quizes.vue";
import q from "../data/quizes.json"
import { useRoute } from 'vue-router';
const route = useRoute()
const quiz = ()=>{
    return q.find(u=>u.id === parseInt(route.params.id))
}
</script>
<template>
<div class="container">
    <h1>View Course </h1>
    {{ quiz }}
</div>
</template>
