import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

// add new note to an array  and will change by adding state
  const [notes, setNotes] = useState([]);

// pass in function as prop to get the note  object to the app.js
  function addNote(newNote) {
    // setnotres function will add new array to notes  
    setNotes(prevNotes => {

    // get all previous notes and add new note at the end
      return [...prevNotes, newNote];
    });
  }
// function whcih will dlete note
  function deleteNote(id) {
    // get access to all rpevious notes array and then loop through it using the filter function
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        // return index where it does not equal the id that needs to be deleted
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {/* take the array and render seperate note compoentns for the item */}
{/* render a differant note component  is going loop through notes array and get each item and execute function */}
      {notes.map((noteItem, index) => {
        {/* return new note component the properties passed over  or delete if note delete is selected*/}
{/* when each note component is rendered, going to pass over the note item in the notes array as the id  whcih will be picked up in the note component */}
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;