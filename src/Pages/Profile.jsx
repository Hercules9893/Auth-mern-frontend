import axios from "axios";
import React, { useEffect, useState } from "react";

const Profile = () => {


  const [user,setuser] = useState({})
  const [loader,setloader] = useState(true)
console.log("sdfgh",user)
  useEffect(()=>{

    const token = localStorage.getItem('authtoken');
    console.log("qwertyu",token);
  const getdata= async() =>{
    const response = await axios.get('https://auth-mern-backend-l9zs.onrender.com/profile',{
      headers: {
        Authorization: `Bearer ${token}`,
      }});

      setuser(response.data.data)
      setloader(false)
  }


  getdata()
  },[])

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#e9ebee",
      }}
    >

      {loader == true ? " " : <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          padding: "30px",
          width: "350px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              backgroundImage: "linear-gradient(135deg, #23212f 5%, #9526a9 95%)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "36px",
              color: "#fff",
              marginBottom: "20px",
            }}
          >
            {user.fullname[0]}
          </div>
          <h2 style={{ margin: "0 0 10px", color: "#333" }}>{user?.fullname}</h2>
          <p style={{ margin: "0 0 20px", color: "#555" }}>User Profile</p>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <strong style={{ color: "#555" }}>Email:</strong>
          <p style={{ margin: "5px 0", color: "#333" }}>{user?.email}</p>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <strong style={{ color: "#555" }}>Mobile Number:</strong>
          <p style={{ margin: "5px 0", color: "#333" }}>{user?.mobile}</p>
        </div>

        <button
          style={{
            width: "100%",
            padding: "10px",
            border: "none",
            borderRadius: "6px",
            backgroundImage: "linear-gradient(135deg, #23212f 5%, #9526a9 95%)",
            color: "#fff",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Edit Profile
        </button>
      </div>}
      
    </div>
  );
};

export default Profile;