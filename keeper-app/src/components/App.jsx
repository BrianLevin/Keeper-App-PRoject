import React from "react";

import Header from "./Header";

import Footer from "./Footer";

import Note from "./Note";

import notes from "../notes"



function App(){
// function which renders creates notes and renders a single note component
    function createNotes(noteItem){
return <Note 

// props to pass to the note.js file
title= {noteItem.title}
content= {noteItem.content}

/>

    }
    return  (
        <div>
<Header />
{/* map which renders through and displays all the notes */}
{notes.map(createNotes)}
<Footer />

</div>
    
    );
}


export default App;