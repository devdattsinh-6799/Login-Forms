import React, {useState} from 'react';
import './Style.css'



function RegistrationForm() {
    const [firstName, setFirstName] = useState(null);

    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);
    

const handleInputChange = (e) => {
    const {id , value} = e.target;
    if(id === "firstName"){
        setFirstName(value);
    }
    if(id === "lastName"){
        setLastName(value);
    }
    if(id === "email"){
        setEmail(value);
    }
    if(id === "password"){
        setPassword(value);
    }
    if(id === "confirmPassword"){
        setConfirmPassword(value);
    }

}
const handleSubmit  = () => {
    console.log(firstName,lastName,email,password,confirmPassword);
}
return(
    
    <div className="form">
          <div className="form-body">
              <div className="username">
                  <label className="form__label" htmlFor="firstName">First Name </label>
                  <input className="form__input" type="text" id="firstName" placeholder="First Name" onChange = {(e) => handleInputChange(e)}/>
              </div>
              <div className="Address">
                  <label className="form__label" htmlFor="Address">Address </label>
                  <input  type="textarea" name="Address" id="lastName"  className="form__input"placeholder="Address" onChange = {(e) => handleInputChange(e)}/>
              </div>
              <div className="email">
                  <label className="form__label" htmlFor="email">Email </label>
                  <input  type="email" id="email" className="form__input" placeholder="Email" onChange = {(e) => handleInputChange(e)}/>
              </div>
              <div className="password">
                  <label className="form__label" htmlFor="password">Password </label>
                  <input className="form__input" type="password"  id="password" placeholder="Password" onChange = {(e) => handleInputChange(e)}/>
              </div>
              <div className="confirm-password">
                  <label className="form__label" htmlFor="confirmPassword">Confirm Password </label>
                  <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password" onChange = {(e) => handleInputChange(e)}/>
              </div>
          </div>
          
          <div className="footer">
              <button type="submit" onClick={() => handleSubmit()} className="btn">Register</button>
          </div>
      </div> 
           
    )
} 
export default RegistrationForm;