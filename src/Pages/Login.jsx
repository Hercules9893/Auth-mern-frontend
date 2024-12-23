import { useNavigate } from 'react-router-dom';
import '../App.css';
import { useState } from 'react';
import axios from 'axios';
const Login = () => {
  const [fullname, setfullname] = useState("");
  const [email,setemail] = useState("")
  const [mobile,setmobile] = useState("")
  const [password,setpassword] = useState("")
      const nvg = useNavigate();
  
  
      const handlesubmit = async() =>{
  
        if(email == "" || password == ""){
          alert("Please fill all the fields");
        }else{
  
          const req = {
            "email": email,
            "password": password
          };
          const response = await axios.post('https://auth-mern-backend-l9zs.onrender.com/login',req);
          console.log(response.data);
  
          if(response.data.token){
            localStorage.setItem("authtoken",response.data.token);
            alert("Login Successfull");
            nvg('/profile');
          }
        }
      }
  
  return (
    <div
      className="container align-item-stretch"
      style={{ display: "flex", marginTop: "36px" }}
    >
      <div className="login">
        <div className="container text-center">
          <h1>Welcome Back</h1>
          <p>Sign in to continue your journey!</p>
          <input
            type="email"
            className="form-control mb-3"
            value={email}
            onChange={(e)=>{setemail(e.target.value)}}
            placeholder="Enter your email"
          />
          <input
            type="password"
            value={password}
            onChange={(e)=>{setpassword(e.target.value)}}
            className="form-control mb-3"
            placeholder="Enter your password"
          />
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <input type="checkbox" id="rememberMe" />
              <label
                htmlFor="rememberMe"
                style={{ margin: "0px" }}
                className=""
              >
                Remember me
              </label>
            </div>
          </div>
          <button type='button' onClick={()=>{handlesubmit()}} className="btn btn-primary w-100 mb-4">Log In</button>
          <hr />
        </div>
      </div>

      <div className="register text-center" style={{ flex: 1 }}>
        <div className="container">
          <h2>Join Us Today!</h2>
          <p>Enter your details and start your adventure with us.</p>
          <button className="btn btn-success mt-3" onClick={()=>{nvg('/register')}}>Create Account</button>
        </div>
      </div>
    </div>
  );
};

export default Login;