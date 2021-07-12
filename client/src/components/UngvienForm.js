import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
function CutriForm({ closeCutri, themCutri }) {
  const [hoten, setHoten] = useState("");
  const [gioitinh, setGioitinh] = useState("");
  const [ngaysinh, setNgaysinh] = useState("");
  const [diachi, setDiachi] = useState("");
  const [cmnd, setCmnd] = useState("");
  const [sdt, setSdt] = useState("");
  const [chucvu, setChucvu] = useState("");
  const [noilamviec, setNoilamviec] = useState("");
  const [uploadfile, setUploadfile] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    // const o = {
    //   hoten: hoten,
    //   gioitinh: gioitinh,
    //   ngaysinh: ngaysinh,
    //   diachi: diachi,
    //   cmnd: cmnd,
    //   sdt: sdt,
    //   chucvu: chucvu,
    //   noilamviec: noilamviec,
    // };
    const config = {
      headers: {
        "content-type": "multipart/form-data",
        token: localStorage.getItem("token"),
      },
    };

    const formData = new FormData();

    formData.append("anh", uploadfile);
    formData.append("hoten", hoten);
    formData.append("gioitinh", gioitinh);
    formData.append("ngaysinh", ngaysinh);
    formData.append("diachi", diachi);
    formData.append("cmnd", cmnd);
    formData.append("sdt", sdt);
    formData.append("chucvu", chucvu);
    formData.append("noilamviec", noilamviec);
    axios
      .post("https://localhost:4000/api/ungvien/create", formData, config)
      .then(() => {
        closeCutri();
      });
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
    } else if (type === "anh") {
      setUploadfile(e.target.value);
    }
  };

  return (
    <form
      encType="multipart/form-data"
      className="form-control"
      onSubmit={handleSubmit}
    >
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
      <div>
        <span style={{ fontSize: "20px" }}>Chọn ảnh đại diện: </span>
        <input
          type="file"
          name="anh"
          id="anh"
          style={{ outline: "none" }}
          onChange={(e) => {
            const files = e.target.files;
            setUploadfile(files[0]);
          }}
        />
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
