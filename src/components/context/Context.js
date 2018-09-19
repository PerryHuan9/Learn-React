// eslint-disable-next-line
//测试React的上下文
import React  from 'react';

const Context = React.createContext({date : new Date('2018-9-19 19:19')});

export default Context;

export function withContext(Conponent){
    return function ContextComponent(props){
        return (
            <Context.Consumer>
                { value => (<Conponent {...props} context={value}/>) }
            </Context.Consumer>
        )
    }
}

















