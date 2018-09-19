/**
 * 1、当ref被用于一个普通的html元素时，React.createRef()将接收底层的DOM元素作为它的current属性以创建ref
 * 2、当ref被用于组件时，ref对象将接收该组件已挂载的实例作为它的current
 * 不能在函数式组件上运用ref，但可以在函数式组件内运用ref
 *
 * 如果在更早的16.3之前的版本使用ref建议使用回调函数
 */
import React from 'react';

//1、在DOM元素上运用ref
class TextInput extends React.Component{
    constructor(p){
        super(p);
        this.textInputRef = React.createRef();
    }
    handleClick(e){
        this.textInputRef.current.focus();
        console.log('TextInput的handleClick被点击');
    }
    render(){
        return (
            <div>
                <input type="text" ref={ this.textInputRef }/>
                <button onClick={ e => this.handleClick(e) }>focus</button>
            </div>
        )
    }
}


//2、在组件上运用ref
class ConponentRef extends React.Component{
    constructor(p){
        super(p);
        this.componentRef = React.createRef();
    }
    handleClick(e){
        this.componentRef.current.handleClick(e);
    }
    render(){
        return (
            <div>
                <TextInput ref={ this.componentRef }/>
                <button onClick={ e => this.handleClick(e) }>组件点击</button>
            </div>
        )
    }
}


//3、在函数式组件内部使用ref
function FunctionRef(props){
    let ref = React.createRef();
    let handleClick = e => ref.current.handleClick(e);
    return (
        <div>
            <ConponentRef ref={ ref }/>
            <button onClick={ handleClick }>函数内</button>
        </div>
    )
}


/**
 * Ref转发是一种选择性加入的功能，可让某些组件接收他们收到的ref，
 * 并将其向下传递给孩子.通过这种特性我们可以直接操作组件的DOM元素
 * @returns {*}
 */


const FancyButto = React.forwardRef((props , ref) => (
    <div>
        <h2>小标题</h2>
        <button ref={ ref } onClick={props.onClick}>
            { props.children }
        </button>
    </div>
));


export default function(){
    let ref = React.createRef();
    let handleClick = e =>{
        console.log('red');
        ref.current.style.color='red';
    };
    return (
        <div>
            <h1>DOM元素上运用ref</h1>
            <TextInput/>
            <h1>在组件上运用ref</h1>
            <ConponentRef/>
            <h1>在函数内运用ref</h1>
            <FunctionRef/>
            <h1>Ref转发</h1>
            <FancyButto ref={ ref } onClick={handleClick}>转发</FancyButto>
        </div>
    );
}

















