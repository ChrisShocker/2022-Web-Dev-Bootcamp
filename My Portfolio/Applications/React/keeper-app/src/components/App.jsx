import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Notes from "./Notes";
import NewNote from "./NewNote";

function App()
{
    return (
        <div>
            <Header></Header>
            <NewNote></NewNote>
            <Notes></Notes>
            <Footer></Footer>
        </div>
    );
}

export default App;