import React from "react";

function Footer(){
    let year = new Date().getFullYear();
    return (
        <footer>
            <p>Copyright Christian Andersen {year}</p>
        </footer>
    );
}

export default Footer;