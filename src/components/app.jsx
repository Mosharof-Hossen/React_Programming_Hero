import React ,{Component} from "react"
import Profile from "./profile/index"
import MyProps from "./Props/index"
import Bio from "./profile/bio"
import Skills from "./profile/Skills"
import classes from "./app.module.css"

// import Props from "./Props/index"

const myHeader = {
    fontWeight : 300,
    color : "red",
    fontSize : "40px"
}


class App extends Component{

    handelButton = (event) =>{
        console.log("Clicked");
        const value = document.getElementById("inputValue").value
        return value
    }
    state = {
        name : "Mosharof hossen"
    }
    render(){
        return (
            <div className = "App">
            <h1 style = {myHeader}>Inline Styles in React</h1>
            <h1 className = {classes.header}>My name is {this.state.name}</h1>
            <input id = "inputValue" className = {classes.input} type="text"/>
                <button onClick = {() =>{
                    this.setState({name : this.handelButton()})
                }} className = {classes.button}>Click Me</button>
            </div>
        )
    }

}

export default App