import React from "react";

function Footer(){
    let year = new Date().getFullYear();
    return (
        <footer>
            <p>Copyright {year}</p>
        </footer>
    );
}

export default Footer;