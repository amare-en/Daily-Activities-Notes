<!--<script setup>
import {ref} from 'vue';//define state 
const Showmodal=ref(false)
const newNote = ref(" ")
const notes = ref([])
const errorMessage = ref("")
function getRandomColor() {
 return "hsl(" + Math.random()*360 + ", 100%, 70%)";
}
const addNote= () => {
  if(newNote.value.length<10){
  return errorMessage.value="Note needs to be 10 character more"
  }
 notes.value.push (
  {
      id:Math.floor(Math.random()*10000),
      text:newNote.value,
      date:new Date(),
      backgroundColor:getRandomColor()
    }
  )
  Showmodal.value=false;
  newNote.value= ""
  errorMessage.value=""
}
</script>
<template>
  <main>
  <div class="overlay" v-if="Showmodal">
      <div class="modal">
        <textarea v-model.trim="newNote" name="note" id="note" cols="30" rows="10">
        </textarea>
        <p v-if="errorMessage">{{ errorMessage }}</p>
        <button class="btn" @click="addNote">
          Add Note
        </button>
          <button class="closebtn">
          Close
        </button>
      </div>
   </div>
    <div class="container">
      <header>
        {{notes}}
        <h1>
      Notes{{Showmodal}}
        </h1>
      <button class="but" @click="Showmodal=true">+</button>
      </header>
    <div class="cards-container">
    <div class="card" v-for="note in notes" :style="{backgroundColor: note.backgroundColor}">
    <p class="main-text">     
     {{note.text}}
    </p>
 <p class="date">{{note.date}}</p>
    </div>
    </div>
    </div>
  </main>
</template>
<style scoped>
main {
  height: 100vh;
  width: 100vw;
}
.container{
max-width:1000px;
padding: 10px;
margin:0 auto
}
header{
  display: flex;
  justify-content:space-between;
  align-items: center;
}
h1{
font-weight:bold;
font-size:75px;
margin-bottom: 25px;
}
.but{
  border: none;
  padding: 10px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  background-color: rgb(21, 20, 20);
  border-radius: 100%;
  color: white;
  font-size: 22px;
}
.card{
width: 225px;
height: 225px;
display: flex;
flex-direction: column;
justify-content: space-between;
margin-bottom: 20px;
margin-right: 20px;
padding-left: 10px;
padding-bottom: 5px;
}
.date{
  font-size: 12px;
  font-weight: bold;
  align-items: center;
}
.cards-container {
  display: flex;
  flex-wrap: wrap;
}
 .overlay{
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.77);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
 }
.modal {
  width: 750px;
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
}
.btn{
  padding: 10px 20px;
  font-size: 20px;
  width: 100%;;
  background-color: blueviolet
}
.closebtn{
background-color: red;
color: white;
font-size: 14px;
font-weight: bold;
margin-top: 20px;
margin-bottom: 20px;
}
.modal p {
  color: red;
}
</style>
-->