import React from "react";

function NewNote()
{
    return (
        <div>
            <form>
                <input name="noteTitle" placeholder="Title"></input>
                <textarea name="noteContent" placeholder="Leave some notes.."></textarea>
                <button>Add</button>
            </form>
        </div>
    )
}

export default NewNote;