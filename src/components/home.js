import React from "react";
import Header from './header';
import Footer from './footer';
import MainContent from './maincontent';
import Menu from "./Menu";

function Home() {
    return (
    <div>
        This is Home
        <Header/>
        <Menu></Menu>
        <MainContent/>
        <Footer/>
    </div>
    )
}

export default Home;