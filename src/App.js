import React , { Component } from 'react';
import { BrowserRouter as Router , Route , Switch , Link } from 'react-router-dom';
import Loadable from 'react-loadable';

import logo from './logo.svg';
import './App.scss';

const Loading = () => (<div>loading...</div>);
const Home = Loadable({
    loader : () => import('./components/Home') ,
    loading : Loading ,
});
const About = Loadable({
    loader : () => import('./components/About') ,
    loading : Loading ,
});
const Provider = Loadable({
    loader : () => import('./components/context/Provider') ,
    loading : Loading ,
});
const ErrorBoundaries = Loadable({
    loader : () => import('./components/Error') ,
    loading : Loading ,
});
const Ref = Loadable({
    loader : () => import('./components/Ref') ,
    loading : Loading ,
});
const Fragment = Loadable({
    loader : () => import('./components/Fragment') ,
    loading : Loading ,
});


class App extends Component{
    constructor(p){
        super(p);
    }

    aStyle = {
        textDecoration : 'none' ,
        marginLeft : '20px' ,
    };

    render(){
        return (
            <div className="App">
                <header className="App-header" style={ {textAlign : 'center'} }>
                    <img src={ logo } className="App-header-logo" alt="logo"/>
                    <h1 className="App-header-title">Welcome to React</h1>
                </header>

                <Router>
                    <div className="App-view">
                        <ul className="App-view-ul">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/context">Context</Link></li>
                            <li><Link to="/error">ErrorBoundaries</Link></li>
                            <li><Link to="/ref">Ref</Link></li>
                            <li><Link to="/fragment">Fragment</Link></li>
                        </ul>
                        <div className="App-view-routes">
                            <Route exact path="/" component={ Home }/>
                            <Route path="/about" component={ About }/>
                            <Route path="/context" component={ Provider }/>
                            <Route path="/error" component={ ErrorBoundaries }/>
                            <Route path="/ref" component={ Ref }/>
                            <Route path="/fragment" component={ Fragment }/>
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
