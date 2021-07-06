import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
function AuthForm({ closeAuth }) {
  const [vanban, setVanban] = useState("");
  const [chuky, setChuky] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleOnChange = (e, type) => {
    if (type === "vanban") {
      setVanban(e.target.value);
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
        id="vanban"
        value={vanban}
        label="Văn bản"
        name="vanban"
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
        label="Chữ ký trên văn bản"
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
