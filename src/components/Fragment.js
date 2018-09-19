/**
 *有时在jsx中添加div元素会破坏React代码正常工作，
 *特别是在dl、ol、ul和table中添加div元素，在这种情况下可以使用
 * React 碎片fragment将多个元素组合在一起
 */

import React , { Fragment } from 'react';


function Glossary(props){
    return (
        <dl>
            {
                props.items.map(item => (
                    <Fragment key={ item.id }>
                        <dt>{ item.title }</dt>
                        <dd>{ item.content }</dd>
                    </Fragment>)
                )
            }
        </dl>
    )
}

// /**报错
//在不需要key的地方可以直接使用<></>
/**
function ListItem({item}){
    return (
        <>
            <dt>{ item.title }</dt>
            <dd>{ item.content }</dd>
        </>
    )
}
**/
const items = [
    {id : 3 , title : '人生' , content : '人生自古谁无死'} ,
    {id : 4 , title : '世界' , content : '江山如此多娇'} ,
    {id : 2 , title : '金钱' , content : '千金散尽还复来'} ,
    {id : 6 , title : '学习' , content : '学如逆水行舟'} ,
    {id : 7 , title : '爱情' , content : '我失骄杨君失柳'} ,
    {id : 1 , title : '人生' , content : '人生自古谁无死'} ,
];

export default function(){
    return (
        <div>
            <Glossary items={ items }/>
        </div>
    )
}