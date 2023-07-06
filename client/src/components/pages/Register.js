import { fetchData } from "../../main.js";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";


const Register = () => {

    const navigate = useNavigate();

   const[user,setuser] = useState(
    {
        FirstName:'',
        LastName:'',
        email:'',
        password:'',
        MN:'',



    }
   );
  
    const {FirstName, LastName, email,password,MN } = user;  
  
    const onChange = (e) => setuser({...user,[e.target.name]: e.target.value})
  
    const onSubmit = (e) => {
      e.preventDefault();
  
      fetchData("/user/register", 
        {
            email,
            password
   
        }, 
        "POST")
      .then((data) => {
        if(!data.message) {
            console.log(data)
          
          navigate("/Profile")
        }
      })  
      .catch((error) => {
        console.log(error)
      })
  
    }

    return(

        <div >
             <form class="login" onSubmit={onSubmit}>
            <label htmlFor="FirstName">First Name:</label>
            <input type="text" placeholder="Enter your First Name" id="FirstName" name="FirstName" onChange={onChange}
            value={FirstName} required ></input>
            <label htmlFor="LastName">Last Name:</label>
            <input type="text" placeholder="Last Name" id="LastName" name="LastName"  onChange={onChange}
            value={LastName} required></input>
            <label htmlFor="email">Email:</label>
            <input type="email"  placeholder ="Enter your email" id="email" name="email" onChange={onChange}
            value={email} required></input>
            <label htmlFor="password" >Password:</label>
           <input type="password" placeholder= "Enter Password"id="password" name="password" onChange={onChange}
            value={password} required></input>
           <label htmlFor="Mobile Number">Mobile Number:</label>
           <input type="tel" id="MN" name="MN" placeholder="Enter your Mobile Number" onChange={onChange}
            value={MN}></input>
           <button class="submit-button"  onSubmit={onSubmit}> Submit</button>
           
           
            <p>Already have an account ? <Link to="/Login">Sign in</Link> </p>
        </form>
        </div>

        );

    }
    export default Register;