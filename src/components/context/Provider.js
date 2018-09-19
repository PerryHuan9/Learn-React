import React , { Component } from 'react';
import Toolbar from './Consumer';
import Context , { withContext } from './Context';

const ContextToolbar = withContext(Toolbar);

function Other({context}){
    return (
        <p>{ context.date.toLocaleString() }</p>
    )
}
const ContextOther=withContext(Other);


class App extends Component{
    constructor(p){
        super(p);
        this.state = {
            date : new Date() ,
        };
        this.timerId;
    }

    componentDidMount(){
        this.timerId = setInterval(() =>{
            this.setState({
                date : new Date() ,
            })
        } , 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timerId);
    }


    render(){
        return (
            <Context.Provider value={ {date : this.state.date , name : "perry"} }>
                <ContextToolbar>我成功了</ContextToolbar>
                <ContextOther/>
            </Context.Provider>
        )
    }

}


export default App;

