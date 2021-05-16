import React, { useState } from "react";
//stateful constants with object containing title and content
// const note function setNote
const [note,setNote] = useState({
    // intial state is empty
title: "",
content: ""


}) 

function CreateArea() {
  return (
    <div>
      <form>
        <input name="title"  value= {note.title} placeholder="Title" />
        <textarea name="content"  value = {note.content} placeholder="Take a note..." rows="3" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;