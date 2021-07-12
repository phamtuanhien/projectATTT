import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
function AuthForm({ closeAuth }) {
  const [dinhdanh, setDinhdanh] = useState("");
  const [chuky, setChuky] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(dinhdanh, chuky);
    axios({
      method: "post",
      url: "https://localhost:4000/api/chuky/kiemtra",
      data: {
        dinhdanh: dinhdanh,
        chuky: chuky,
      },
      headers: {
        token: localStorage.getItem("token"),
      },
    })
      .then((res) => {
        if (res.data === "True") {
          alert("Chữ ký của bạn là hợp lệ");
        } else {
          alert("Có gì đấy sai sai!");
        }
      })
      .catch((err) => alert("Vui lòng kiểm tra lại"))
      .finally(() => {
        setDinhdanh("");
        setChuky("");
      });
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
        className="nice-button"
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        autoComplete="off"
      >
        Check
      </Button>
    </form>
  );
}

export default AuthForm;
