import React, { Component, useState } from "react"

class UncontrolledForm extends Component{
    handelSubmit = event =>{
        event.preventDefault()
        // console.dir(event.target.name.value)
        const data = {}
        data.name = event.target.name.value
        data.email = event.target.email.value 
        data.password = event.target.password.value
        console.log(data);
        event.target.reset()
    }
    render() {
        return (
            <div>
                <form action="" onSubmit = {this.handelSubmit}>
                    <input className ="form-control my-3" type="text" name="name" placeholder= "Enter your name" id=""/>
                    <input className ="form-control my-3" type="email" name="email" placeholder = "Enter your email" id=""/>
                    <input className ="form-control my-3" type="password" name="password" placeholder = "Enter your password" id=""/>
                    <button className= "btn btn-primary" type = "submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default UncontrolledForm;