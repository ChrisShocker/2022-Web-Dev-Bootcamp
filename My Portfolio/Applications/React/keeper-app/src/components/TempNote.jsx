import React, { useState } from "react";

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
            <form onSubmit={onChange}>
                <input onChange={onChange} name="title"
                    placeholder="Title" value={note.title}></input>
                <textarea onChange={onChange} name="content"
                    placeholder="Leave some notes.." value={note.content}></textarea>
                <button onClick={() =>
                {
                    props.onAdd(note);
                    setNote({
                        title:"",
                        content:""
                    });
                }}>Add</button>
            </form>
        </div>
    )
}

export default TempNote;