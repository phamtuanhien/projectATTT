import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function TaotaikhoanForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rule, setRule] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password, rule);
  };

  const handleOnChange = (e, type) => {
    if (type === "username") {
      setUsername(e.target.value);
    } else if (type === "password") {
      setPassword(e.target.value);
    } else if (type === "rule") {
      setRule(e.target.value);
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
        id="rule"
        value={rule}
        label="Vai trò"
        name="rule"
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
