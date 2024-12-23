import { useNavigate } from 'react-router-dom';
import '../App.css';
import { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const nvg = useNavigate();

  // Handles form submission
  const handlesubmit = async () => {
    // Validate if fields are filled
    if (email === "" || password === "") {
      alert("Please fill all the fields");
      return; // Stop further execution if validation fails
    }

    const req = {
      email: email,
      password: password
    };

    try {
      // Making POST request for login
      const response = await axios.post('https://auth-mern-backend-l9zs.onrender.com/login', req);
      
      console.log(response.data);

      // If response has a token, store it and redirect to the profile page
      if (response.data.token) {
        localStorage.setItem("authtoken", response.data.token);
        alert("Login Successful");
        nvg('/profile');
      } else {
        // If no token, show error from the backend
        alert(response.data.errors || "Login failed, please try again.");
      }
    } catch (error) {
      // Handle network or API errors
      console.error("Login Error:", error);
      alert("An error occurred, please try again later.");
    }
  };

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
            onChange={(e) => { setemail(e.target.value); }}
            placeholder="Enter your email"
          />
          <input
            type="password"
            className="form-control mb-3"
            value={password}
            onChange={(e) => { setpassword(e.target.value); }}
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
              <label htmlFor="rememberMe" style={{ margin: "0px" }}>
                Remember me
              </label>
            </div>
          </div>
          <button
            type="button"
            onClick={handlesubmit}
            className="btn btn-primary w-100 mb-4"
          >
            Log In
          </button>
          <hr />
        </div>
      </div>

      <div className="register text-center" style={{ flex: 1 }}>
        <div className="container">
          <h2>Join Us Today!</h2>
          <p>Enter your details and start your adventure with us.</p>
          <button
            className="btn btn-success mt-3"
            onClick={() => { nvg('/register'); }}
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
