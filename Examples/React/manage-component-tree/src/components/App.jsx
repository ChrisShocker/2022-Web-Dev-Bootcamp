import React, { useState } from "react";
import List from "./List";

function App()
{
    const [inputText, setInputText] = useState("");
    const [items, setItems] = useState([]);

    function handleChange(event)
    {
        const newValue = event.target.value;
        setInputText(newValue);
    }

    function addItem()
    {
        setItems(prevItems =>
        {
            return [...prevItems, inputText];
        });
        setInputText("");
    }

    function deleteItem(id)
    {
        console.log(id);
        console.log("item called delete");
        setItems(prevItems =>
        {
            //remove the array item with the passed in id
            return prevItems.filter(
                (item, index) =>
                {
                    return index !== id;
                });
        });
    }

    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <div className="form">
                <input onChange={handleChange} type="text" value={inputText} />
                <button onClick={addItem}>
                    <span>Add</span>
                </button>
            </div>
            <div>
                <ul>
                    {items.map((todoItem, index) => (
                        <List
                            // NOTE: using the index isn't advised for the key
                            key={index}
                            id={index}
                            item={todoItem}
                            // we can also pass a function
                            onChecked={deleteItem}
                        ></List>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;