import React from 'react';
import Bloglist from "./Bloglist"

const Bloglist = (props)=>{

    return <Blogpost
            title = {props.title}
            subTitle = {props.subTitle}
            author = {props.author}
            date = {props.date}
    />

}

return (
    <div>
        <h1></h1>
        <h1></h1>
        <h1></h1>
        <h1></h1>
    </div>
)


export default Bloglist