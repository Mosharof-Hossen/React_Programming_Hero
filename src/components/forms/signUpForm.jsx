import React ,{ Component } from "react";

class SignUpForm extends Component{

    state = {
        values :{
            name:"",
            email :"",
            password :"",
            birthDay :"",
            gender : "" ,
        },
        agreement : false
    }

    handelChange = event => {
        this.setState({
            values : {
                ...this.state.values,[event.target.name] :event.target.value
            }
        })
    }
    handelAgreement = event => {
        this.setState({agreement : event.target.value})
    }
    handelCheckBox = (event) =>{
        this.setState({ 
            agreement : event.target.checked
        })
    }
    handelSubmit = event =>{
        console.log(this.state);
        event.preventDefault()
        event.target.reset()
        this.setState({
            values :{
                name:"",
                email :"",
                password :"",
                birthDay :"",
                gender : "" ,
            },
            agreement : false

        })
    }
    render(){
        const {values : {name , email ,password , birthDay , gender},agreement } = this.state
        return(
            <div>
                <h1>SignUp Form</h1>
                <form action="" onSubmit = {this.handelSubmit}>
                    <input className ="form-control my-3" type="text" name="name" placeholder= "Enter your name" id=""value = {name} onChange = {this.handelChange}/>

                    <input className ="form-control my-3" type="email" name="email" placeholder = "Enter your email" value ={email} id="" onChange = {this.handelChange}/>

                    <input className ="form-control my-3" type="password" name="password" placeholder = "Enter your password" id="" value = {password} onChange = {this.handelChange}/>

                    <input value={birthDay} onChange={this.handelChange} className="form-control my-3" type="date" name="birthDay" id="" />

                    <div className="">
                        Gander:
                        <input className ="mx-1" type="radio" name="gender" id="male" onChange={this.handelChange} value = "Male" />
                        <label >Male</label>
                        <input className ="mx-1" type="radio" name="gender" id="" onChange={this.handelChange} value = "Female" />Female
                        <input className ="mx-1" type="radio" name="gender" id="" onChange={this.handelChange} value = "Other" />Other
                    </div>

                    <div>
                        <input type="checkbox" name="agree" checked = {agreement} onChange={this.handelCheckBox}  id=""/>I agree to all true
                    </div>
                    <button className= "btn btn-primary" disabled ={!agreement} type = "submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default SignUpForm;