import React, { useState } from "react";

function TempNote(props)
{
    //create state for not title
    const [noteTitle, setNoteTitle] = useState();
    //create state for note content
    const [noteContent, setNoteContent] = useState();

    //handle the data from state changing
    function onChange(event)
    {
        event.preventDefault();
        if (event.target.name === "noteTitle")
            setNoteTitle(event.target.value);
        else if (event.target.name === "noteContent")
            setNoteContent(event.target.value);
    }

    return (
        <div>
            <form onSubmit={onChange}>
                <input onChange={onChange} name="noteTitle"
                    placeholder="Title" value={props.noteTitle}></input>
                <textarea onChange={onChange} name="noteContent"
                    placeholder="Leave some notes.." value={props.noteContent}></textarea>
                <button onClick={() =>
                {
                    props.onAdd(noteTitle, noteContent);
                    setNoteTitle("");
                    setNoteContent("");
                }}>Add</button>
            </form>
        </div>
    )
}

export default TempNote;