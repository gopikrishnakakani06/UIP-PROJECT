import { fetchData } from "../../main.js";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {

    const navigate = useNavigate();

    const[user,setUser] = useState(
     {
        
         email:'',
         password:'',
         
 
     }
    );
   
     const {email,password } = user;  
   
     const onChange = (e) => setUser({...user,[e.target.name]: e.target.value})
   
     const onSubmit = (e) => {
       e.preventDefault();
   
       fetchData("/user/login", 
         {
             email,
             password
    
         }, 
         "POST")
       .then((data) => {
         if(!data.message) {
             console.log(data)
           
           navigate("/profile")
         }
       })  
       .catch((error) => {
         console.log(error)
       })
   
     }
    return(
        <div >
            <form class="login" onSubmit={onSubmit}>
        <label for="Email">Email:</label> 
        
        <input type="email" placeholder="Enter your Email" id="email" name="email" onChange={onChange}
            value={email} ></input>
        <label for="Password">Password:</label>
        <input type="Password" placeholder="Enter Password" id="password" name="password" onChange={onChange}
            value={password}  ></input>
        <button type="submit" class="submit-button" onClick={onSubmit} >submit</button>
        <p>New User? <Link to="/Register">Register here</Link> </p>
   </form>
        </div>


    );

}
export default Login;