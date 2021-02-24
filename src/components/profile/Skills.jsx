import React from 'react'


const Skills = (props) =>(
    <div className = "Skills">
        <h3>Skils :</h3>
        <ul>
            <li>{props.SkillA}</li>
            <li>{props.SkillB}</li>
            <li>{props.SkillC}</li>
            <li>{props.SkillD}</li>
        </ul>
    </div>
)

export default Skills