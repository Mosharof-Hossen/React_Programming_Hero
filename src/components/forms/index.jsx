import React, { Component, useState } from "react"

class Inputs extends Component {
    state = {
        name: '',
        country: "",
        bio: "",
        birthDay: "",
        agree : false,
        gender: "",
        skills : []
    }
    

    handelChanege = (event) => {
        this.setState({[event.target.name] : event.target.value})
    }
    handelCheckBox = (event) =>{
        console.log(event.target.checked)
        this.setState({ 
            [event.target.name] : event.target.checked
        })

    }
    handelSkillChange = event =>{
        if (event.target.checked){
            this.setState({
                skills : [...this.state.skills ,event.target.value]
            })
        }else{
            const skills = this.state.skills.filter(skill =>skill !== event.target.value)
            this.setState({skills})
        }
    }
    render() {
        const {name , country , bio , birthDay ,agree,skills} = this.state
        return(
        <div className="bg-secondary p-5">
            <h1>Yours Details</h1>
            <form action="">
                <input value={name} onChange={this.handelChanege} className="form-control my-3" type="text" name="name" id="namee" placeholder="input yours name" />
                <select value={country} onChange={this.handelChanege} className="form-select form-control my-3" name="country" id="">
                    <option value=""> Select Country</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Turqi">Turqi</option>
                    <option value="Iran">Iran</option>
                </select>
                <textarea value={bio} onChange={this.handelChanege} className="form-control my-3" name="bio" id="" cols="30" rows="5" placeholder="Tell Me about YourSelf"></textarea>
                <input value={birthDay} onChange={this.handelChanege} className="form-control my-3" type="date" name="birthDay" id="" />

                <div className="form-check">
                    <input type="radio" name="gender" id="male" onChange={this.handelChanege} value = "Male" />
                    <label >Male</label>
                    <input type="radio" name="gender" id="" onChange={this.handelChanege} value = "Female" />Female
                    <input type="radio" name="gender" id="" onChange={this.handelChanege} value = "Other" />Other
                </div>
                <div>
                    Skills: <br/>
                    <input type="checkbox" value = "Java" name="skills" id=""checked = {skills.includes("Java")} onChange = {this.handelSkillChange}/>Java
                    <input type="checkbox" value = "Python" name="skills" id=""checked = {skills.includes("Python")} onChange = {this.handelSkillChange}/>Python
                    <input type="checkbox" value = "C++" name="skills" id=""checked = {skills.includes("C++")} onChange = {this.handelSkillChange}/>C++
                    <input type="checkbox" value = "JavaScript" name="skills" id=""checked = {skills.includes("JavaScript")} onChange = {this.handelSkillChange}/>JavaScript
                </div>
                <br/><br/>
                <div>
                    <input type="checkbox" name="agree" checked = {agree} onChange={this.handelCheckBox}  id=""/>I agree to all true
                </div>
            </form>
            <button className="btn btn-primary" onClick={() => { console.log(this.state) }}>Details</button>
        </div>
        )
    }
}

export default Inputs;