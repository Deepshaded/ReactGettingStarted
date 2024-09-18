import React from "react";
import rainGif from '../rain.gif'

function Header() {
    return (
    <header>
        This is a header
        <img src={rainGif} id="rainGif"/>
        <h1><a href="index.html">Check this out</a></h1>
    </header>
    )
}

export default Header;