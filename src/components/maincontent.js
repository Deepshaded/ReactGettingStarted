import React, { Component } from "react";
import Aside from "./aside"

class MainContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isloaded : false,
            allInfo: [],
            title: this.props.pageTitle,
            count: this.props.numTopics
        }
    }

    componentDidMount(){
        fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
        .then(res=>res.json())
        .then((result)=>{
            this.setState(
                {
                    allInfo : result.data
                    
                }
            )
        })
    }

    onClick = () => {
        this.setState({ count: this.state.count + 1 })
    }

    render() {

        return (
            <div id="container">
               {this.state.allInfo.map(country=>(
                <div>{country.Nation} in the year {country.Year} had population {country.Population}
                </div>
               ))
               }
            </div>
        )
    }
}

export default MainContent;