import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
function CutriForm({ closeCutri, themCutri }) {
  const [hoten, setHoten] = useState("");
  const [gioitinh, setGioitinh] = useState("");
  const [ngaysinh, setNgaysinh] = useState("");
  const [quequan, setQuequan] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(hoten, gioitinh, ngaysinh, quequan);
    const o = {
      hoten: hoten,
      gioitinh: gioitinh,
      ngaysinh: ngaysinh,
      quequan: quequan,
    };
    themCutri(o);
    closeCutri();
  };
  const handleOnChange = (e, type) => {
    if (type === "hoten") {
      setHoten(e.target.value);
    } else if (type === "gioitinh") {
      setGioitinh(e.target.value);
    } else if (type === "ngaysinh") {
      setNgaysinh(e.target.value);
    } else if (type === "quequan") {
      setQuequan(e.target.value);
    }
  };

  return (
    <form className="form-control" onSubmit={handleSubmit}>
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        id="hoten"
        value={hoten}
        label="Họ và tên"
        name="hoten"
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
        id="gioitinh"
        value={gioitinh}
        label="Giới tính"
        name="gioitinh"
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
        id="ngaysinh"
        value={ngaysinh}
        label="Ngày sinh"
        name="ngaysinh"
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
        id="quequan"
        value={quequan}
        label="Quê quán"
        required
        name="quequan"
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
        className="submit"
        autoComplete="off"
      >
        Submit
      </Button>
    </form>
  );
}

export default CutriForm;
