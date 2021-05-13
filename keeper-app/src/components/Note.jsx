import React from "react";
// nore being called from app.js
function Note(props){

return <div className= "note">

<h1>{props.title}</h1>
<p>{props.content}</p>

</div>

}


export default Note