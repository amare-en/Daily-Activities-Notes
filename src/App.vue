<script setup>
import { RouterView } from 'vue-router'
//import Addnotes from './views/Addnotes.vue';
import Navbar from './components/Navbar.vue';
import Quizes from '@/views/Quizes.vue'
</script>
<template>
     <Navbar/>
     <RouterView/>
</template>
