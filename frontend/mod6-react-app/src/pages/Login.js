export default function Login(){


    return (
<>
<form>
<div className="login-main-container">
  <div className="header-login-container">
  <h1>Login</h1>
  </div>
<div className="username-login-container">
  <label for="username"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="username" required />
  </div>
    
    <div className="password-login-container">
    <label for="password"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="password" required />
   </div>

    <button type="submit">Login</button>
  </div>
</form>
</>


    )

}