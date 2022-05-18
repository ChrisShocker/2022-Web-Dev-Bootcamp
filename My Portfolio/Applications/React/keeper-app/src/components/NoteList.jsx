import React, { useState } from "react";
import TempNote from "./TempNote";
import Note from "./Note";

function NoteList()
{
    //create array to hold the notes
    const [noteArray, setNoteArray] = useState([]);

    function addNote(note)
    {
        setNoteArray(prevItems =>
        {
            return [...prevItems, note];
        })
    }

    function deleteNote(id)
    {
        console.log(noteArray.indexOf(id));
        setNoteArray(prevItems =>
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

            {noteArray.map((arrayItem, index) =>
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