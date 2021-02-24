import React, { Component } from 'react';
import "./timer.style.css";

class Timer extends Component{
    state = {
        count : 0
    }

    incrementCount = () => {
        this.setState({count : this.state.count + 1})
    }
    decrementCount = () => {
        if(this.state.count > 0){
            this.setState({count : this.state.count - 1})
        }
    }
    intervalId = null
    startTimer = ()=> {
        if(this.state.count > 0 && !this.intervalId){
            this.intervalId = setInterval (() => {
                this.setState({count : this.state.count - 1},() =>{
                    if(this.state.count == 0){
                        alert("Timer Finished")
                        clearInterval(this.intervalId)
                        this.intervalId = null
                    }
                })
            },1000)
        }
        
    }
    stopTimer = () =>{
        if(this.intervalId){
            clearInterval(this.intervalId)
            this.intervalId = null
        }
    }
    resetTimer = ()=>{
        this.setState({count : this.state.count = 0})
        clearInterval(this.intervalId)
        this.intervalId = null
    }

    render(){
        return(
            <div className = "App">
                <h1>Simple Timer</h1>
                <div>
                    <button className = "Btn" onClick={this.decrementCount}>-</button>
                    <span className = "Text">{this.state.count}</span>
                    <button className = "Btn" onClick={this.incrementCount}>+</button>
                </div>

                <div className = "Controler">
                    <button onClick = {this.startTimer} className = "Btn">Start</button>
                    <button onClick = {this.stopTimer} className = "Btn">Stop</button>
                    <button onClick = {this.resetTimer} className = "Btn">Reset</button>
                </div>

            </div>
        )
    }
}

export default Timer;