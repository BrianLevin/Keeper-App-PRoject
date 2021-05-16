
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
    [... prevNotes, newNote]


    }) 


    }

    return  (
        <div>
<Header />
<CreateArea 

    onAdd= {addNote}
/>
<Note key={1} title="Note title" content="Note content" />

{/* map which renders through and displays all the notes into the keeper app as seperate note componeents */}
{/* {notes.map(// function which renders creates notes and renders a single note component */}
    {/* noteItem => <Note  */}
{/* // key makes prop unique so method can utilze dynamic arrays
// key = {noteItem.key}
// prop values to pass to the note.js file
// title= {noteItem.title}
// content= {noteItem.content} */}

{/* /> */}

    {/* )} */}
<Footer />

</div>
    
    );
}


export default App;