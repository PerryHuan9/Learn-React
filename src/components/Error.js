//React提供了错误边界（ErrorBoundaries）来处理组件内产生的错误
import React from 'react';


class ErrorBoundary extends React.Component{
    constructor(p){
        super(p);
        this.state = {
            error : null ,
            info : null ,
        }
    }

    componentDidCatch(error , info){
        this.setState({
            error : error ,
            info : info ,
        });
        //可以写一个请求将该错误报告给服务器
        // logErrorToMyService(error , info);
    }

    render(){
        if(this.state.info){
            return (<div>
                <h1>Something went wrong</h1>
                <details style={ {whiteSpace : 'pre-wrap'} }>
                    { this.state.error && this.state.error.toString() }
                    <br/>
                    { this.state.info.componentStack }
                </details>
            </div>);
        }
        return this.props.children;
    }
}

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0 ,
        }
    }

    handleClick(e){
        this.setState(pre => ({
            count : ++pre.count ,
        }));
    }

    render(){
        if(this.state.count > 5){
            throw  new Error('I crashed!');
        }
        return (<h1 onClick={ e => this.handleClick(e) }>{ this.state.count }</h1>);
    }
}

export default function(){
    return (
        <div>
            <h1>处理两个Counter的错误，一错皆错</h1>
            <ErrorBoundary>
                <Counter/>
                <Counter/>
            </ErrorBoundary>
            <h1>单独两个Counte的错误，互不影响</h1>
            <ErrorBoundary>
                <Counter/>
            </ErrorBoundary>
            <ErrorBoundary>
                <Counter/>
            </ErrorBoundary>
        </div>
    )
}






























