import React, { useState } from "react";
//stateful constants with object containing title and content
// const note function setNote
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

  })

}

function CreateArea() {
  return (
    <div>
      <form>
        <input name="title"  onChange= {handleChange} value= {note.title} placeholder="Title" />
        <textarea name="content"  onChange = {handleChange} value = {note.content} placeholder="Take a note..." rows="3" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;