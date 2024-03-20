<script setup>
import {ref} from 'vue'
const count = ref(0)
const add = () => {
count.value=count.value + 1
}
const subsruct = () => {
count.value=count.value - 1
}
</script>
<template>
    <main>
    <div>
        <h1>
           The counter is....... 
        </h1>
        <button @click="add">
            +
        </button>
        <h1>{{count}}</h1>
        <button @click="subsruct">
            -
        </button>
    </div>
    </main>
</template>