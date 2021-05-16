import React, { useState } from "react";
//stateful constants with object containing title and content
// const note function setNote
function CreateArea(props) {
const [note,setNote] = useState({
    // intial state is empty
title: "",
content: ""


}) 
// function which will update the changes
function handleChange(event){

  // create new destructured object which will tap into event .taget.name and event.target.value
  const{name,value}= event.target;



  setNote(prevNote => {

      return{
          // spread operator which will spread current key value pairs which currently exist in note and add it to final object
      ...prevNote,
      // turns string name to the actual value
      [name]: value

      }

  });

}

function submitNote (event) {
    // props which will pas the note to the add note function on app.js page
    props.onAdd(note);
// clear out note object once submitted
setNote({
    title: "",
    content: ""
})

// prevents forum from refreshining once a note is submitted
event.preventDefault();
}


  return (
    <div>
      <form>
        <input name="title"  onChange= {handleChange} value= {note.title} placeholder="Title" />
        <textarea name="content"  onChange = {handleChange} value = {note.content} placeholder="Take a note..." rows="3" />
        {/* Button which will pass note back  from handle change to note */}
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );

  }
  
export default CreateArea;