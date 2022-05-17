import React from "react";

function Note(props)
{
    return (
        <div className="note">
            <h1>{props.noteTitle}</h1>
            <p>{props.noteContent}</p>
            <button onClick={() => {
               props.onDelete(props.id); 
            }} >DELETE</button>
        </div>
    )
}

export default Note;