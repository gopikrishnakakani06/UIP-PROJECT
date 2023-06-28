const Login = () => {
    return(
        <div class="login">
        <label for="Email">Email:</label> 
        
        <input type="email" placeholder="Enter your Email" id="email" Name="eml" ></input>
        <label for="Password">Password:</label>
        <input type="Password" placeholder="Enter Password" id="password" name="pwd"  ></input>
        <input type="submit" class="submit-button" value="submit"></input>
        <p>New User? <a href="Register.html">Register here</a> </p>

        </div>


    );

}
export default Login;