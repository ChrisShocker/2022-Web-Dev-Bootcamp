import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Entry from "./Entry";
import Notes from "../notes";

function App()
{
    return (
        <div>
            <Header></Header>
            {Notes.map((value) =>
                <Entry
                    key={value.key}
                    title={value.title}
                    content={value.content}>
                </Entry>
            )}
            <Footer></Footer>
        </div>
    );
}

export default App;