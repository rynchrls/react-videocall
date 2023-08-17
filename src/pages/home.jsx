import React, { useCallback, useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleJoinRoom = useCallback(() => {
    navigate(`/joiningroom`);
  }, [navigate]);

  return (
    <>
      <div className="App">
        <div className="title">
          <h1>Communicate</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            deserunt temporibus accusamus facere dolorem nobis, quisquam
            aspernatur libero, consequatur consectetur rem est iusto explicabo
            esse similique. At necessitatibus neque accusantium.
          </p>
        </div>
        <div className="form">
          <div className="h2">
            <h2>LOGIN</h2>
          </div>
          <div className="type">
            <label>Username</label>
            <input type="text" placeholder="enter username" />
          </div>
          <div className="type">
            <label>Password</label>
            <input type="password" placeholder="enter password" />
          </div>
          <button onClick={handleJoinRoom}>Login</button>
        </div>
      </div>
    </>
  );
};
export default Home;
