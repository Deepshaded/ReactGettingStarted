import React, { Component } from "react";
import Aside from "./aside"

class MainContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: this.props.pageTitle,
            count: this.props.numTopics
        }
    }

    onClick = () => {
        this.setState({ count: this.state.count + 1 })
    }

    render() {

        return (
            <div id="container">
                <maincontent>
                    This is the main content
                    <h3>{this.state.title}</h3>
                    <p>This is no of questions {this.state.count}</p>
                    <button onClick={this.onClick}>Increase no of questions</button>                   
                </maincontent>
                <Aside/>
            </div>
        )
    }
}

export default MainContent;