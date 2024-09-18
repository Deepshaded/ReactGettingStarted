import React from "react";
import Header from './header';
import Footer from './footer';
import MainContent from './maincontent';
import Menu from "./Menu";
import Form from "./form";

function Home() {
    return (
    <div>
        This is Home
        <Header/>
        <Menu></Menu>
        <MainContent/>
        <Form/>
        <Footer/>
    </div>
    )
}

export default Home;