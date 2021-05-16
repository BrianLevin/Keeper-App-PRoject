
import React, { useState } from "react";

import Header from "./Header";

import Footer from "./Footer";

import Note from "./Note";

import notes from "../notes"

import CreateArea from "./CreateArea";



function App(){

// add new note to an array  and will change by adding state

    const [notes, setNotes] = useState([])

// pass in function as prop to get the note  object to the app.js
    function addNote(newNote){
 // setnotres function will add new array to notes       
setNotes(prevNotes => {

    // get all previous notes and add new note at the end
     return [... prevNotes, newNote]


    }); 


    }

    return  (
        <div>
<Header />
<CreateArea 

    onAdd= {addNote}
/>
{/* take the array and render seperate note compoentns for the item */}
{/* render a differant note component  is going loop through notes array and get each item and execute function */}
{notes.map((noteItem) => {
{/* return new note component the properties passed over */}
    return  <Note
title= {noteItem.title}
content = {noteItem.content}


    /> 
})}


<Footer />

</div>
    
    );
}


export default App;