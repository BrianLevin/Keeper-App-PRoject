import React from "react";
// got icon from mateiral-ui.com
import DeleteIcon from '@material-ui/icons/Delete';

// note being called from app.js
function Note(props){
// function to handle the delete when clicked
    function handleClick(){
props.onDelete(props.id)

    }

return <div className= "note">

<h1>{props.title}</h1>
<p>{props.content}</p>
<button onClick={handleClick}><DeleteIcon/></button>

</div>

}


export default Note