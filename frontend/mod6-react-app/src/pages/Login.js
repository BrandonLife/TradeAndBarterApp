import "./Login.css"
import {UserLogin} from "../services"
import { useState } from "react"

export default function Login(){
  const [email, setEmail] =useState('')
  const [password, setPassword] =useState('')
  const [username, setUsername] = useState("");
 function loginHandler(event){
event.preventDefault();
let incorrectInput = false
if(email.length === 0){
  //error
  console.log("There is no email")
  incorrectInput= true
}
if(password.length === 0){
  //error
  console.log("There is no password")
  incorrectInput= true
}

if(!incorrectInput){
  UserLogin({
    username: username,
    email: email,
    password: password
  })
}
}
    return (
<>
<body class="body-container1">
<div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card border-0 shadow rounded-3 my-5">
          <div class="card-body p-4 p-sm-5">
            <h5 class="card-title text-center mb-5 fw-light fs-5">Sign In</h5>
            <form onSubmit={loginHandler}>
              <div class="form-floating mb-3">
                <input type="text" class="form-control" value={username || email} id="floatingInput" placeholder="Username" onChange={(e)=>{
                  setUsername(e.target.value) || setEmail(e.target.value)
                }}/>
                <label for="floatingInput">Enter Username or Email</label>
              </div>
              <div class="form-floating mb-3">
                <input type="password" class="form-control" value={password} id="floatingPassword" placeholder="Password" onChange={(e)=>{
                  setPassword(e.target.value)
                }}/>
                <label for="floatingPassword">Password</label>
              </div>

              <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" value="" id="rememberPasswordCheck"/>
                <label class="form-check-label" for="rememberPasswordCheck">
                  Remember password
                </label>
              </div>
              <div class="d-grid">
                <button class="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Sign
                  in</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</>


    )

}