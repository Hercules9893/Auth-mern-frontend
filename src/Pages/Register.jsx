import { useNavigate } from 'react-router-dom';
import '../App.css';
import { useState } from 'react';
import axios from 'axios';

const Register = () => {
const [fullname, setfullname] = useState("");
const [email,setemail] = useState("")
const [mobile,setmobile] = useState("")
const [password,setpassword] = useState("")
    const nvg = useNavigate();


    const handlesubmit = async() =>{
      console.log("check",fullname,email,mobile,password);

      if(fullname == "" || email == "" || mobile == "" || password == ""){
        alert("Please fill all the fields");
      }else{

        const req = {
          "fullname": fullname,
          "email": email,
          "mobile": mobile,
          "password": password
        };
        const response = await axios.post('https://auth-mern-backend-l9zs.onrender.com/register',req);
        console.log(response.data);

        if(response.data.token){
          alert("Register Successfull");
          nvg('/');
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
          <h1>Create an Account</h1>
          <p>Sign up to start your journey with us!</p>
          <input
            type="text"
            className="form-control"
            value={fullname}
            onChange={(e)=>setfullname(e.target.value)}
            style={{ marginBottom: "12px" }}
            placeholder="Enter your Full Name"
          />
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e)=>setemail(e.target.value)}
            style={{ marginBottom: "12px" }}
            placeholder="Enter your Email ID"
          />
          <input
            type="number"
            className="form-control"
            style={{ marginBottom: "12px" }}
            value={mobile}
            onChange={(e)=>setmobile(e.target.value)}
            placeholder="Enter your Mobile No"
          />
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e)=>setpassword(e.target.value)}
            style={{ marginBottom: "12px" }}
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
                I agree to the terms and conditions
              </label>
            </div>
          </div>
          <button type='button' onClick={()=>{handlesubmit()}} className="btn btn-primary w-100 mb-4">Sign Up</button>
          <hr />
        </div>
      </div>

      <div className="register text-center" style={{ flex: 1 }}>
        <div className="container">
          <div
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2>Join Us Today!</h2>
            <p>Enter your details and start your adventure with us.</p>
            <button className="btn btn-success mt-3" onClick={()=>{nvg('/')}}>Sign In</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;