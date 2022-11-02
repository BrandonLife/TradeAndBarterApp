export default function Register(){


    return (
<>
<form>
  <div class="register-main-container">
    <h1>Register</h1>
    <p>Please fill in this form to create an account.</p>
    <h1>Personal Information</h1>
    <label for="firstName"><b> First Name *</b></label>
    <input type="text" placeholder="Enter First Name" name="firstName" id="firstName" required />
    <br/>
    <label for="lastName"><b>Last Name *</b></label>
    <input type="text" placeholder="Enter Last Name" name="lastName" id="lastName" required />
    <br/>
    <label for="phoneNumber"><b>Contact No. *</b></label>
    <input type="tel" placeholder="ex. (111)-000-2222" name="phoneNumber" id="phoneNumber" required />
    <br/>
    <label for="occupation"><b>Occupation</b></label>
    <input type="text" placeholder="ex. Engineer" name="occupation" id="occupation"/>
    <br/>
   
    


    <h1>Account Information</h1>
    <label for="username"><b>Username *</b></label>
    <input type="text" placeholder="Enter Username" name="username" id="username" required />
    <br />
    <label for="email"><b>Email *</b></label>
    <input type="text" placeholder="Enter Email" name="email" id="email" required />
    <br />
    <label for="password"><b>Password *</b></label>
    <input type="password" placeholder="Enter Password" name="password" id="password" required />

    <label for="psw-repeat"><b>Re-Enter Password *</b></label>
    <input type="password" placeholder="Re-Enter Password" name="repeatPassword" id="repeatPassword" required />
    <br />

    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
    <button type="submit" className="register-btn">Register</button>
  </div>

  <div className="signIn-main-container">
    <p>Already have an account? <a href="/User/login">Sign in</a>.</p>
  </div>
</form>



</>


    )



    
}