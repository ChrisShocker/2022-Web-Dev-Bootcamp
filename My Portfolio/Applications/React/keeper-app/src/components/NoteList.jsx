import React, { useState } from "react";
import TempNote from "./TempNote";
import Note from "./Note";

function NoteList()
{
    //create array to hold the notes
    const [arrayItems, setArrayItems] = useState([]);

    function addNote(note)
    {
        setArrayItems(prevItems =>
        {
            return [...prevItems, note];
        })
    }

    function deleteNote(id)
    {
        console.log(arrayItems.indexOf(id));
        setArrayItems(prevItems =>
        {
            return prevItems.filter((item, index) =>
            {
                return index !== id;
            });
        })
    }

    return (
        <div>
            <TempNote
                onAdd={addNote}
            >
            </TempNote>

            {arrayItems.map((arrayItem, index) =>
            {
                return (
                    <Note
                        key={index}
                        id={index}
                        noteTitle={arrayItem.title}
                        noteContent={arrayItem.content}
                        onDelete={deleteNote}>
                    </Note>
                )
            })}
        </div>
    )
}

export default NoteList;