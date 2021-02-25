import React, { Component, useState } from "react"

class ControlledForm extends Component{
    state = {
        name : "",
        email : "",
        password : ""
    }
    handelChange = event =>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handelSubmit = event =>{
        event.preventDefault()
        
        console.log(this.state);
        event.target.reset()
        this.setState({name :"", email :"" ,password :""})
    }
    render() {
        const {name , email ,password } = this.state
        return (
            <div>
                <form action="" onSubmit = {this.handelSubmit}>
                    <input className ="form-control my-3" type="text" name="name" placeholder= "Enter your name" id=""value = {name} onChange = {this.handelChange}/>

                    <input className ="form-control my-3" type="email" name="email" placeholder = "Enter your email" value ={email} id="" onChange = {this.handelChange}/>

                    <input className ="form-control my-3" type="password" name="password" placeholder = "Enter your password" id="" value = {password} onChange = {this.handelChange}/>

                    <button className= "btn btn-primary" type = "submit">Submit</button>
                </form>
            </div>
        )
    }

}
export default ControlledForm;