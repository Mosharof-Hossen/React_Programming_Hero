import React ,{Component} from "react"


class StateApp extends Component{

    state = {
        count : 0
    }

    render(){
        console.log(this.state.count);
        return(
            <div className = "App">
                <h1>Why do we need State</h1>
                <h1>Count - {this.state.count}</h1>
                <button onClick = {() =>{
                    // this.count++
                    this.setState({count : this.state.count+1})
                    console.log("clicked" , this.state.count);
                }}>Add 1+</button>
            </div>
        )
    }
}

export default StateApp;