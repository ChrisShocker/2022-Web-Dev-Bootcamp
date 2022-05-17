import React, { useState } from "react";
import TempNote from "./TempNote";
import Note from "./Note";

function NoteList()
{
    //create array to hold the notes
    const [arrayItems, setArrayItems] = useState([]);

    function addArrayItem(note)
    {
        setArrayItems(prevItems =>
        {
            return [...prevItems, note];
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
                noteTitle={arrayItem.title}
                noteContent={arrayItem.content}>
                </Note>
            ))}
        </div>
    )
}

export default NoteList;