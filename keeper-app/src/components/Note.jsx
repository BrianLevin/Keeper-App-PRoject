import React from "react";
// note being called from app.js
function Note(props){
// function to handle the delete when clicked
    function handleClick(){
props.onDelete()

    }

return <div className= "note">

<h1>{props.title}</h1>
<p>{props.content}</p>
<button onClick={handleClick}>DELETE</button>

</div>

}


export default Note