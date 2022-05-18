import React from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
function Note(props)
{
    return (
        <div className="note">
            <h1>{props.noteTitle}</h1>
            <p>{props.noteContent}</p>
            <button onClick={() => {
               props.onDelete(props.id); 
            }} ><DeleteForeverIcon></DeleteForeverIcon></button>
        </div>
    )
}

export default Note;