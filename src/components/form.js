import React, { Component } from "react";

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Year: "",
            Population: ""
        }
    }

    changeHandle = (e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    submitHandler = (e)=>{
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        const {Year,Population}=this.state;
        return (
            <div id="formContainer">
               <main>
                <h3>Enter population</h3>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <label for="Year">Year </label>
                        <input id="Year" name="Year" type="text" value={Year}
                        onChange={this.changeHandle}/>
                    </div>
                    <div class="formSeparator">
                        <label for="Population">Population </label>
                        <input id="Population" name="Population" type="text" value={Population}
                        onChange={this.changeHandle}/>
                    </div>
                    <button type="submit">Enter Population</button>
                </form>

               </main>
            </div>
        )
    }
}

export default Form;