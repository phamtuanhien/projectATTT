import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
function AuthForm({ closeAuth }) {
  const [dinhdanh, setDinhdanh] = useState("");
  const [chuky, setChuky] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleOnChange = (e, type) => {
    if (type === "dinhdanh") {
      setDinhdanh(e.target.value);
    } else if (type === "chuky") {
      setChuky(e.target.value);
    }
  };

  return (
    <form className="form-control" onSubmit={handleSubmit}>
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        id="dinhdanh"
        value={dinhdanh}
        label="Định danh"
        name="dinhdanh"
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
        id="chuky"
        value={chuky}
        label="Chữ ký trên định danh"
        name="chuky"
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
        Check
      </Button>
    </form>
  );
}

export default AuthForm;
