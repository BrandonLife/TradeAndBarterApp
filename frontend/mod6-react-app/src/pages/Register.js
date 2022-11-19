import { useState } from "react"
import "./Register.css"
import {UserRegister} from "../services"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

export default function Register(props){
  const [email, setEmail] =useState('')
  const [password, setPassword] =useState('')
  const [username, setUsername] = useState("");
  const [rePassword, setRePassword] = useState("");
  const Navigate = useNavigate()
  function registerHandler(event) {
		event.preventDefault();
		let incorrectInput = false;
		if(username.length === 0){
			incorrectInput =true;
			console.log("Please type in username");
		}
		if(password.length === 0){
			incorrectInput =true;
			console.log("Please type in password");
		}
    if(email.length === 0){
			incorrectInput =true;
			console.log("Please enter email");
		}
		if(password !== rePassword){
			incorrectInput =true;
			console.log("Passwords must match");
		}
		if (!incorrectInput) {
			UserRegister({
				username,
        email,
				password,
        rePassword
        
			}).then((data) => {
				console.log(data);
				// if(data.id){
				Navigate("/")
				// }else{
				// 	console.log("user creation was not successful");
				// }
			});
		} else {
			console.log("There was an error, please try again.");
		}
	}
	useEffect(()=>{
		if (props.loggedIn) {
			return Navigate("/");
		}
	})


    return (

<div className="body-container">
<div class="container">
    <div class="row">
      <div class="col-lg-10 col-xl-9 mx-auto">
        <div class="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
          <div class="card-img-left d-none d-md-flex">
            {/* <!-- Background image for card set in CSS! --> */}
          </div>
          <div class="card-body p-4 p-sm-5">
            <h5 class="card-title text-center mb-5 fw-light fs-5">Register</h5>
            <form onSubmit={registerHandler}>

              <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInputUsername" name="username" placeholder="username" value={username} required autofocus onChange={(e) => {
							//console.log(e.target.value);
							setUsername(e.target.value);
						}} />
                <label for="floatingInputUsername">Username</label>
              </div>

              <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInputEmail" placeholder="name@example.com" value={email} onChange={(e) => {
							//console.log(e.target.value);
							setEmail(e.target.value);
						}}/>
                <label for="floatingInputEmail">Email address</label>
              </div>

              <div class="form-floating mb-3">
                <input type="password" class="form-control" id="floatingPassword" name="password" placeholder="Password" value={password} onChange={(e) => {
							//console.log(e.target.value);
							setPassword(e.target.value);
						}}/>
                <label for="floatingPassword">Password</label>
              </div>

              <div class="form-floating mb-3">
                <input type="password" class="form-control" id="floatingPasswordConfirm" name="rePassword" placeholder="Confirm Password" value={rePassword} onChange={(e) => {
							//console.log(e.target.value);
							setRePassword(e.target.value);
						}}/>
                <label for="floatingPasswordConfirm">Confirm Password</label>
              </div>

              <div class="d-grid mb-2">
                <button class="btn btn-lg btn-primary btn-login fw-bold text-uppercase" type="submit">Register</button>
              </div>

              <a class="d-block text-center mt-2 small" href="/User/login">Have an account? Sign In</a>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>


    );



    
}