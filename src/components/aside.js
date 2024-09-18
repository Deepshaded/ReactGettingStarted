import React from "react";
import Header from './header';
import Footer from './footer';
import MainContent from './maincontent';
import Menu from "./Menu";

function Aside() {
    return (
        <aside>
            <section>
                <h4>This is side component</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.    
                </p>
            </section>
            <section>
                <h4>Sub parts</h4>
                <a href="#">Part1</a>
                <a href="">Part2</a>
                <a href="">Part3</a>
                <a href="">Part4</a>
            </section>

        </aside>
    )
}

export default Aside;