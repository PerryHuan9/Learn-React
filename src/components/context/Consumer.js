import React from "react";

//如果上层没有与Consumer匹配的Provider，Consumer将会传入默认参数
// 一个 Provider 可以连接到许多 Consumers


function Toolbar(props){
    return (
        <div>
            <ThemeButton context={ props.context }/>
            { props.children }
        </div>
    )
}

function ThemeButton({context}){
    return (
        <div>
            <p>{ context.name} say now is {context.date.toLocaleString() }</p>
        </div>
    )
}

export default Toolbar;