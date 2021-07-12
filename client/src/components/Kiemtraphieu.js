import { Button } from "@material-ui/core";
import axios from "axios";
import React from "react";

function Kiemtraphieu({ data, setOpen }) {
  const xacnhan = () => {
    axios({
      method: "post",
      url: "https://localhost:4000/api/phieubau/themvaohom",
      data: data,
      headers: {
        token: localStorage.getItem("token"),
      },
    })
      .then(() => {
        setOpen(false);
      })
      .catch((err) => console.log(err));
    console.log(data);
  };

  return (
    <div>
      <div className="grid" style={{ marginTop: "10px" }}>
        <p>Chữ ký: {data.chuky}</p>
        <p>CMND: {data.cmnd}</p>
        <p>Định danh: {data.dinhdanh}</p>
        <p>Trạng thái: {data.tinhtrang}</p>
      </div>
      <p>Content: {data.content}</p>
      <Button
        className="nice-button"
        variant="contained"
        color="primary"
        onClick={xacnhan}
      >
        Xác nhận
      </Button>
    </div>
  );
}

export default Kiemtraphieu;
