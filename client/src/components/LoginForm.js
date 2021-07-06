import React from "react";
import { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username, password);
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
            type="text"
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

export default LoginForm;
