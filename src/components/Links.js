import React from "react";



const Links = (props) => {
    //props.github = user.links.github
    return(
        <>
            <h3>Links</h3>
            <a href={props.github}>{props.github} </a>
            <a href={props.linkedin}>{props.linkedin} </a>
        </>
        
    );
}

export default Links;
