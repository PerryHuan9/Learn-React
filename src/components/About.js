import React , { Component } from 'react';

class About extends Component{
    constructor(props){
        super(props)
        this.state = {
            model : '' ,
        };
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(event){
        this.setState({
            model : event.target.value ,
        })

    }

    render(){
        return (
            <div>
                <input type="text"
                       value={ this.state.model } onChange={ this.handleInput }/>
                <p>{ this.state.model }</p>
            </div>
        )

    }
}

export default About;