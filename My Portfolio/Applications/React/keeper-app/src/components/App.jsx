import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import NoteList from "./NoteList";

function App()
{
    return (
        <div>
            <Header></Header>
            <NoteList></NoteList>
            <Footer></Footer>
        </div>
    );
}

export default App;