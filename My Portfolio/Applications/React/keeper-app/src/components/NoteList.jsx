import React, { useState } from "react";
import TempNote from "./TempNote";
import Note from "./Note";

function NoteList()
{
    //create array to hold the notes
    const [arrayItems, setArrayItems] = useState([]);

    function addArrayItem(title, content)
    {
        const newNote = {
            Title: title,
            Content: content
        }
        setArrayItems(prevItems =>
        {
            return [...prevItems, newNote];
        })
    }
    return (
        <div>
            <TempNote
                onAdd={addArrayItem}
            >
            </TempNote>

            {arrayItems.map((arrayItem, index) => (
                <Note
                noteTitle={arrayItem.Title}
                noteContent={arrayItem.Content}>
                </Note>
            ))}
        </div>
    )
}

export default NoteList;