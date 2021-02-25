import React ,{Component} from "react"
import Profile from "./profile/index"
import MyProps from "./Props/index"
import Bio from "./profile/bio"
import Skills from "./profile/Skills"
import classes from "./app.module.css"
import Inputs from './forms/index'
import UncontrolledForm from "./forms/unControlForm"
import ControlledForm from "./forms/controlled-form"
import SignUpForm from "./forms/signUpForm"

// import Props from "./Props/index"




class App extends Component{

    
    render(){
        return (
            <div className ={classes.container}>
                <h1 className= {classes.header} className="text-primary">Working with forms in React</h1>
                <hr/>
                {/* <ControlledForm></ControlledForm> */}
                <SignUpForm></SignUpForm>
            </div>
        )
    }

}

export default App