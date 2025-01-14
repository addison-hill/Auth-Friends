import React, { useState } from 'react';
import { axiosWithAuth } from './axiosWithAuth';

const Login = props => {
    const [user, setUser] = useState({
      credentials: { username: "", password: "" }
    });
  
    const handleChange = e => {
      setUser({
        credentials: {
          ...user.credentials,
          [e.target.name]: e.target.value
        }
      });
    };
  
    const login = e => {
      e.preventDefault();
      axiosWithAuth()
        .post("http://localhost:5000/api/login", user.credentials)
        .then(res => {
          localStorage.setItem("token", res.data.payload);
          props.history.push("/protected");
        })
        .catch(err => console.log(err.response));
    };
  
    return (
      <div>
        <h1 className="title">Login</h1>
        <form onSubmit={login}>
          <input className="input"
            type="text"
            name="username"
            placeholder="Username"
            value={user.credentials.username}
            onChange={handleChange}
          />
          <input className="input"
            type="password"
            name="password"
            placeholder="Password"
            value={user.credentials.password}
            onChange={handleChange}
          />
          <button className="btn">Log In</button>
        </form>
      </div>
    );
  };
  
  export default Login;

