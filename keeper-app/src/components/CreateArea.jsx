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