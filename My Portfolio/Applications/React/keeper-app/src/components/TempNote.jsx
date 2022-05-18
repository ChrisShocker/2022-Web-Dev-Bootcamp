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

    const [isExpanded, setExpanded] = useState(false);
    const [isRowExpanded, setRowExpanded] = useState(false);

    function expanded()
    {
        setExpanded(true);
    }

    function expandRow()
    {
        setRowExpanded(true);
    }

    return (
        <div>
            <form className="create-note" onSubmit={onChange}>
                <input onChange={onChange}
                    onClick={expanded}
                    name="title"
                    placeholder="Title" value={note.title}>
                </input>
                {isExpanded &&
                    <textarea
                        onChange={onChange}
                        onClick={expandRow}
                        name="content"
                        placeholder="Leave some notes.."
                        rows={isRowExpanded ? 3 : 1}
                        value={note.content}>
                    </textarea>}
                <Zoom in={isExpanded}>
                    <Fab onClick={() =>
                    {
                        setExpanded(false);
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