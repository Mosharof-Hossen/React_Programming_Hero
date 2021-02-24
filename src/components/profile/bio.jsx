import React from "react"

const Bio = (props) =>(
    <div className = "Bio">
        <h2>{props.name}</h2>
        <p>{props.title}</p>
    </div>
)

export default Bio
