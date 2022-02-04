import React from "react";

function Links(props) {
    return (
        <div>
            <h3>Links</h3>
            <a href={props.gitlink}> {props.gitlink} </a>
            <a href={props.linklink}> {props.linklink}</a>
        </div>
    )
}
export default Links;