import React, { useState } from "react";
import NavBar from "./components/NavBar";

const Login = () => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome, ${username}!`);
  };

  return (
    <>
      <header><NavBar /></header>
      <main>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </main>
    </>
  );
};

export default Login;
