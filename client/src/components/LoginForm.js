import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
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

  const handleOnChange = (event, type) => {
    if (type === "username") {
      setUsername(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  };

  return (
    <div style={{ width: "500px", margin: "auto", marginTop: "200px" }}>
      <div style={{ fontSize: "28px" }}>Login</div>
      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="username"
          value={username}
          label="Tên tài khoản"
          name="username"
          required
          autoComplete="off"
          onChange={(e) => {
            handleOnChange(e, e.target.name);
          }}
        />
        <TextField
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
          id="password"
          value={password}
          label="Mật khẩu"
          name="password"
          autoComplete="off"
          required
          onChange={(e) => {
            handleOnChange(e, e.target.name);
          }}
        />
        <Button
          style={{ marginTop: "15px" }}
          className="nice-button"
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          autoComplete="off"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default withRouter(LoginForm);
