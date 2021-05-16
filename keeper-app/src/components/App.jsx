
import React, { useState } from "react";

import Header from "./Header";

import Footer from "./Footer";

import Note from "./Note";

import notes from "../notes"

import CreateArea from "./CreateArea";



function App(){

    return  (
        <div>
<Header />
<CreateArea />
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