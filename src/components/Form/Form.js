import React from "react";
import "./Form.css";

export default class App extends React.Component {

    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this)
        this.firstNameValidation = this.firstNameValidation.bind(this)
        this.lastNameValidation = this.lastNameValidation.bind(this)
        this.emailValidation = this.emailValidation.bind(this)

        this.state = {
            firstNameData: '',
            lastNameData: '',
            emailData: '',

            submitted: false,

            allValid: false
        }
    }


    handleSubmit(event){
     event.preventDefault()
      
      this.setState({
        submitted:true,
      })
      if(this.state.firstNameData.length!==0 & this.state.lastNameData.length!==0 &this.state.emailData.length!==0){
        this.setState({
            allValid:true
        })
        setTimeout(() => {
            this.setState({
                allValid:false
            })
        }, 3000);
      }
    }


    firstNameValidation(event){
     this.setState({
        firstNameData : event.target.value
     })
    }

    lastNameValidation(event){
        this.setState({
            lastNameData : event.target.value
         })
    }

    emailValidation(event){
        this.setState({
            emailData : event.target.value
         })
    }


    render() {
        return (
            <div className="form-container">
                <form className="register-form" autoComplete="off" onSubmit={this.handleSubmit}>
                    {/* Uncomment the next line to show the success message */}
                    
                    {this.state.allValid && this.state.submitted &&( <div className="success-message">Success! Thank you for registering</div>)}

                   
                    <input
                        id="first-name"
                        value = {this.state.firstNameData}
                        className="form-field"
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        onChange ={this.firstNameValidation}
                    />
                    {/* Uncomment the next line to show the error message */}
                    { this.state.submitted && this.state.firstNameData.length===0 && 
                        <span id="email-error">Please enter an email address</span>
                    }
                    {/* <span id="first-name-error">Please enter a first name</span> */}
                    <input
                        id="last-name"
                        value = {this.state.lastNameData}
                        className="form-field"
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        onChange ={this.lastNameValidation}
                    />
                    {/* Uncomment the next line to show the error message */}
                    { this.state.submitted && this.state.lastNameData.length===0 && 
                        <span id="email-error">Please enter an email address</span>
                    }
                    {/* <span id="last-name-error">Please enter a last name</span> */}
                    <input
                        id="email"
                        value = {this.state.emailData}
                        className="form-field"
                        type="text"
                        placeholder="Email"
                        name="email"
                        onChange ={this.emailValidation}
                    />
                    {/* Uncomment the next line to show the error message */}
                    { this.state.submitted && this.state.emailData.length===0 && 
                        <span id="email-error">Please enter an email address</span>
                    }
                    
                    <button className="form-field" type="submit">
                        Register
                    </button>
                </form>
            </div>

        )
    }
}
