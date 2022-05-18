import React, { useState } from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
function TempNote(props)
{
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    //handle the data from state changing
    function onChange(event)
    {
        event.preventDefault();
        //destructure event.target
        const { name, value } = event.target;

        setNote(prevNotes =>
        {
            //return a new object witht the previous 
            //values and the new one
            return {
                ...prevNotes,
                [name]: value
            };
        });
    }

    return (
        <div>
            <form className="create-note" onSubmit={onChange}>
                <input onChange={onChange} name="title"
                    placeholder="Title" value={note.title}></input>
                <textarea onChange={onChange} name="content"
                    placeholder="Leave some notes.." value={note.content}></textarea>
                <Zoom in={true}>
                    <Fab onClick={() =>
                    {
                        props.onAdd(note);
                        setNote({
                            title: "",
                            content: ""
                        });
                    }}><AddCircleIcon></AddCircleIcon></Fab>
                </Zoom>
            </form>
        </div>
    )
}

export default TempNote;