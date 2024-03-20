<script setup>
import {ref} from 'vue';
const Showmodal = ref(false)//it used to control open and close our textara modal
const newNotes = ref("")//this define the state for our text are user add there notes and also two way data bainding
const Notes = ref([])//this is the array storage of newnotes add this arry or storage
const errorMessage = ref("")//define state for error message
function getRandomColor() {
 return "hsl(" + Math.random()*360 + ", 100%, 70%)";
}
const addnote = () => {
  if(newNotes.value.length < 10){
     return errorMessage.value="Note needs to be 10 character more"
  }
Notes.value.push (
  {
 id: Math.floor(Math.random()*10000),//gives rand id from zero to 10000
 text: newNotes.value,
 date: new Date(),
 backgroundColor: getRandomColor()
}
)
 Showmodal.value=false;
 newNotes.value=""
 errorMessage.value=""
}
</script>
<template>
  <main>
    <div v-if="Showmodal" class="overlay">
        <div v-if="Showmodal" class="modal" >
        <textarea v-model.trim="newNotes" name="note" id="note" cols="30" rows="10">
        </textarea>
         <p class="errormessage" v-if="errorMessage">{{ errorMessage }}</p>
        <button @click="addnote" class="addbtn">
          Add Notes
        </button>
        <button class="closebtn">
           Close
        </button>
      </div>
   </div>
<div class="container">
<header>
   <h1>Notes</h1>
   <button @click="Showmodal=true">+</button>
</header>
      <div class="cards-container">
        <div class="card" v-for="note in Notes"
         :key="note.id"
         :style="{backgroundColor: note.backgroundColor}">
          <p>{{ note.text }}</p>
          <p>{{ note.date.toLocaleDateString("en-US") }}</p>
        </div>
      </div>
    </div>
  </main>
</template>
<style scope>
main{
 width:100vw;
  height:100vh
}
.container{
max-width:1000px;
padding: 10px;
margin:0 auto

}
header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  font-size: 48px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
  .addbtn{
    background-color: blueviolet;
    color: white;
    padding: 10px;
    margin-bottom: 10px;

  }
  .closebtn{
    background-color: red;
    color: white;
    padding: 10px;
  }
  .modal{
    width: 750px;
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
  }
  .card{
    width: 200px;
    height: 200px;
    background-color: yellow;
    margin:10px;
  }
  .cards-container{
     display:flex;
     flex-wrap:wrap;
  }
  .overlay{
    position:absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.77);
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .errormessage{
    color: red;
  }
</style>