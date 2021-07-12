import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
function RegisterForm({ closeRegis, newRegis }) {
  const [dinhdanh, setDinhdanh] = useState("");
  const [songaunhien, setSongaunhien] = useState("");
  const [bidanh, setBidanh] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const o = {
      cmnd: JSON.parse(localStorage.getItem("user")).username,
      dinhdanh: dinhdanh,
      songaunhien: songaunhien,
      bidanh: bidanh,
    };
    newRegis(o);
  };
  const handleOnChange = (e, type) => {
    if (type === "dinhdanh") {
      setDinhdanh(e.target.value);
    }
  };

  const taobidanh = () => {
    if (dinhdanh !== "") {
      axios({
        method: "post",
        url: "https://localhost:4000/api/chuky/bidanh",
        data: { dinhdanh: dinhdanh },
        headers: {
          token: localStorage.getItem("token"),
        },
      }).then((res) => {
        console.log(res.data);
        setSongaunhien(res.data.r);
        setBidanh(res.data.blinded);
      });
    }
  };

  return (
    <form className="form-control" onSubmit={handleSubmit}>
      <TextField
        disabled
        variant="outlined"
        margin="normal"
        fullWidth
        id="cmnd"
        value={JSON.parse(localStorage.getItem("user")).username}
        label="Chứng minh nhân dân"
        name="cmnd"
        required
        autoComplete="off"
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
      <Button
        className="nice-button"
        style={{ marginTop: "15px", marginBottom: "10px" }}
        fullWidth
        variant="contained"
        color="primary"
        autoComplete="off"
        onClick={taobidanh}
      >
        Tạo bí danh
      </Button>
      <TextField
        disabled
        variant="outlined"
        margin="normal"
        fullWidth
        id="songaunhien"
        value={songaunhien}
        label="Số ngẫu nhiên"
        name="songaunhien"
        autoComplete="off"
      />
      <TextField
        disabled
        variant="outlined"
        margin="normal"
        fullWidth
        id="bidanh"
        value={bidanh}
        label="Bí danh"
        name="bidanh"
        autoComplete="off"
      />
      <Button
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
  );
}

export default RegisterForm;
