import React, { useContext } from "react";
import { useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { UserContext } from "../contexts/userContext";

function LoginForm(props) {
  const { setUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(username, password);
    axios
      .post("https://localhost:4000/api/account/login", {
        username: username,
        password: password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data);
        localStorage.setItem("user", JSON.stringify(jwtDecode(res.data).data));
        setUser(jwtDecode(res.data).data);
        props.history.push("/");
      });
    setUsername("");
    setPassword("");
  };

  const handleChange = (event, type) => {
    if (type === "username") {
      setUsername(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="username" className="label">
            Tên đăng nhập:
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="input"
            autoComplete="off"
            value={username}
            onChange={(e) => {
              handleChange(e, "username");
            }}
          />
        </div>
        <div className="form-field">
          <label htmlFor="password" className="label">
            Mật khẩu:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            className="input"
            autoComplete="off"
            onChange={(e) => {
              handleChange(e, "password");
            }}
          />
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default withRouter(LoginForm);
