import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
function RegisterForm({ closeRegis, newRegis }) {
  const [cmnd, setCmnd] = useState("");
  const [dinhdanh, setDinhdanh] = useState("");
  const [songaunhien, setSongaunhien] = useState("");
  const [bidanh, setBidanh] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(cmnd, dinhdanh, songaunhien, bidanh);
    const o = {
      cmnd: cmnd,
      dinhdanh: dinhdanh,
      songaunhien: songaunhien,
      bidanh: bidanh,
    };
    newRegis(o);
    closeRegis();
  };
  const handleOnChange = (e, type) => {
    if (type === "cmnd") {
      setCmnd(e.target.value);
    } else if (type === "dinhdanh") {
      setDinhdanh(e.target.value);
    } else if (type === "songaunhien") {
      setSongaunhien(e.target.value);
    } else if (type === "bidanh") {
      setBidanh(e.target.value);
    }
  };

  return (
    <form className="form-control" onSubmit={handleSubmit}>
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        id="cmnd"
        value={cmnd}
        label="Chứng minh nhân dân"
        name="cmnd"
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
        id="dinhdanh"
        value={dinhdanh}
        label="Định danh"
        name="dinhdanh"
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
        id="songaunhien"
        value={songaunhien}
        label="Số ngẫu nhiên"
        name="songaunhien"
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
        id="bidanh"
        value={bidanh}
        label="Bí danh"
        required
        name="bidanh"
        autoComplete="off"
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
        Submit
      </Button>
    </form>
  );
}

export default RegisterForm;
