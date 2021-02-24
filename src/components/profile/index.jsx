import React from "react"
import "./profile.css"
import Bio from "./bio"
import Skills from "./Skills"
import Links from "./Links"

class Profile extends React.Component {
    me = {
        name : "Mosharof Hossen",
        title : "Web Design and Development Learner",
        SkillA : "Java",
        SkillB : "Python",
        SkillC : "R",
        SkillD : "CSS"

    }
    
    render(){
        return (
            <div className = "Container">
                <Bio name = {this.me.name} title = {this.me.title}/>
                <Skills 
                SkillA = {this.me.SkillA}
                SkillB = {this.me.SkillB}
                SkillC = {this.me.SkillC}
                SkillD = {this.me.SkillD}
                />
                <Links />
            </div>
        )
    }
}

export default Profile