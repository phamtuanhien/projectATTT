import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";

function TaotaikhoanForm({ addAccount }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "https://localhost:4000/api/account/create",
      headers: {
        token: localStorage.getItem("token"),
      },
      data: {
        username: username,
        password: password,
        role: role,
      },
    }).then(() => {
      addAccount({ username: username, password: password, role: role });
    });
  };

  const handleOnChange = (e, type) => {
    if (type === "username") {
      setUsername(e.target.value);
    } else if (type === "password") {
      setPassword(e.target.value);
    } else if (type === "role") {
      setRole(e.target.value);
    }
  };

  return (
    <form className="form-control" onSubmit={handleSubmit}>
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
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        id="role"
        value={role}
        label="Vai trò"
        name="role"
        autoComplete="off"
        required
        onChange={(e) => {
          handleOnChange(e, e.target.name);
        }}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className="submit-register"
        autoComplete="off"
      >
        Tạo
      </Button>
    </form>
  );
}

export default TaotaikhoanForm;
