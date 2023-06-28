const Register = () => {
    return(

        <div class="login">
            <label for="First Name">First Name:</label>
            <input type="text" placeholder="Enter your First Name" id="FirstName" Name="First Name" required></input>
            <label for="Last Name">Last Name:</label>
            <input type="text" placeholder="Last Name" id="LastName" Name="LastName" required></input>
            <label for="email">Email:</label>
            <input type="email"  placeholder ="Enter your email" id="email" Name="Username or email" required></input>
            <label for="Password" >Password:</label>
           <input type="password" placeholder= "Enter Password"id="password" Name="password" required></input>
           <label for="Mobile Number:">Mobile Number:</label>
           <input type="tel" id="MN" Name="MN" placeholder="Enter your Mobile Number"></input>
           <button class="submit-button" type="submit">Submit</button>
            <p>Already have an account ? <a href="Login.html">Sign in</a> </p>

        </div>

        );

    }
    export default Register;