import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Entry from "./Entry";
import Notes from "../notes";

function getNotes(value)
{
    return <Entry
        key={value.key}
        title={value.title}
        content={value.content}>
    </Entry>
}

function App()
{
    return (
        <div>
            <Header></Header>
            {Notes.map(getNotes)}
            <Footer></Footer>
        </div>
    );
}

export default App;