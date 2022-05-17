import React from "react";

function Note(props)
{
    return (
        <div>
            <form>
                <p>{props.noteTitle}</p>
                <p>{props.noteContent}</p>
            </form>
        </div>
    )
}

export default Note;