import { fetchData } from "../../main.js";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Profile = () => {
    const navigate=useNavigate();
    const [Post, setPost]= useState(
        {
            
            PostContent:""
            
        }
    );
    const {PostContent}= Post;

    const onChange = (e) => setPost({ ...Post, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
      e.preventDefault();
      let user = localStorage.getItem("user");
      let parseUser = JSON.parse(user);
      let userId = parseUser.email; 
      fetchData("/post/create", { PostContent, userId }, "POST")
        .then((data) => {
          if (data) {
            console.log(data);
            navigate("/posts");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
    let user = localStorage.getItem("user");
    let parseUser = JSON.parse(user);
    let email = parseUser?.email; 
    return (
      <form onSubmit={onSubmit}>
        <h2><p>Welcome, {email}</p></h2>
        <label for ="text">Enter your post:</label>
    
    
    <textarea type="text" name="Note" id="Notes" class="notes"></textarea>
      
      
      
        <button type="submit" className="btn btn-primary" onSubmit={onSubmit}>
          Add Post
        </button>

        <Link to="/Login" class="Loginpage">Go to login page</Link>

      </form>
    );
  };
  
  export default Profile;