import React from "react";

import Header from "./Header";

import Footer from "./Footer";

import Note from "./Note";

import notes from "../notes"



function App(){

    return  (<div>
<Header />
<Note 
//customized props being passed over to the note component
title ="Title"
content = "Content"

/>
<Footer />


    </div>
    );
}


export default App;