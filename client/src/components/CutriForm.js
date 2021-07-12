import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
function CutriForm({ closeCutri, themCutri }) {
  const [hoten, setHoten] = useState("");
  const [gioitinh, setGioitinh] = useState("");
  const [ngaysinh, setNgaysinh] = useState("");
  const [diachi, setDiachi] = useState("");
  const [cmnd, setCmnd] = useState("");
  const [sdt, setSdt] = useState("");
  const [chucvu, setChucvu] = useState("");
  const [noilamviec, setNoilamviec] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const o = {
      hoten: hoten,
      gioitinh: gioitinh,
      ngaysinh: ngaysinh,
      diachi: diachi,
      cmnd: cmnd,
      sdt: sdt,
      chucvu: chucvu,
      noilamviec: noilamviec,
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
    } else if (type === "diachi") {
      setDiachi(e.target.value);
    } else if (type === "cmnd") {
      setCmnd(e.target.value);
    } else if (type === "sdt") {
      setSdt(e.target.value);
    } else if (type === "chucvu") {
      setChucvu(e.target.value);
    } else if (type === "noilamviec") {
      setNoilamviec(e.target.value);
    }
  };

  return (
    <form className="form-control" onSubmit={handleSubmit}>
      <div className="flex">
        <div style={{ marginRight: "10px" }}>
          {" "}
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
            label="Ngày sinh MM-DD-YYYY"
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
            id="diachi"
            value={diachi}
            label="Địa chỉ"
            required
            name="diachi"
            autoComplete="off"
            onChange={(e) => {
              handleOnChange(e, e.target.name);
            }}
          />
        </div>
        <div>
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
            id="sdt"
            value={sdt}
            label="Số điện thoại"
            name="sdt"
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
            id="chucvu"
            value={chucvu}
            label="Chức vụ"
            name="chucvu"
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
            id="noilamviec"
            value={noilamviec}
            label="Nơi làm việc"
            required
            name="noilamviec"
            autoComplete="off"
            onChange={(e) => {
              handleOnChange(e, e.target.name);
            }}
          />
        </div>
      </div>
      <Button
        className="nice-button"
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        autoComplete="off"
      >
        Thêm
      </Button>
    </form>
  );
}

export default CutriForm;
