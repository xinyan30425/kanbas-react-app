import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
function Signup() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "", password: ""
  });
  const navigate = useNavigate();
  const signup = async () => {
    try {
      await client.signup(credentials);
      navigate("/kanbas/account");
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  return (
    <div>
      <h1>Signup</h1>
      {error && <div>{error}</div>}
      <input
        value={credentials.username}
        onChange={(e) => setCredentials({
          ...credentials,
          username: e.target.value
        })}
        placeholder="Enter your username" />
      <input
        value={credentials.password}
        onChange={(e) => setCredentials({
          ...credentials,
          password: e.target.value
        })}
        placeholder="Set password" />
      <input
        value={credentials.firstName}
        onChange={(e) => setCredentials({
          ...credentials,
          firstName: e.target.value
        })}
        placeholder="Enter your first name" />
      <input
        value={credentials.lastName}
        onChange={(e) => setCredentials({
          ...credentials,
          lastName: e.target.value
        })}
        placeholder="Enter your last name" />
      {/* <input
        value={credentials.role}
        onChange={(e) => setCredentials({
          ...credentials,
          role: e.target.value
        })}
        placeholder="Enter your role" />

      <input
        value={credentials.email}
        onChange={(e) => setCredentials({
          ...credentials,
          email: e.target.value
        })}
        placeholder="Enter your email" /> */}

      <button onClick={signup}>
        Signup
      </button>
    </div>
  );
}
export default Signup;