import { Button } from "@material-ui/core";
import axios from "axios";
import React from "react";

function Kiemtracapchuky({ data, setOpen }) {
  const { cmnd, bidanh } = data;
  const capChuky = () => {
    axios({
      method: "post",
      url: "https:/localhost:4000/api/chuky/ky",
      data: {
        cmnd: cmnd,
        bidanh: bidanh,
      },
      headers: {
        token: localStorage.getItem("token"),
      },
    }).then((res) => {
      console.log("Ban kiem tra cap chu ky thanh cong");
      setOpen(true);
    });
  };

  return (
    <div>
      <Button
        className="nice-button"
        variant="contained"
        color="primary"
        onClick={() => {
          setOpen(true);
        }}
        style={{ marginTop: "20px" }}
      >
        Quay lại
      </Button>
      <p>Bí danh: {bidanh}</p>
      <p>CMND: {cmnd}</p>
      <p>Trạng thái: Đang chờ cấp</p>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Button
          className="nice-button"
          variant="contained"
          color="primary"
          onClick={capChuky}
        >
          Cấp chữ ký
        </Button>
      </div>
      {/* <Button className="nice-button" 
        variant="contained"
        color="primary"
        className="nice-button"
        onClick={done}
      >
        Done
      </Button> */}
    </div>
  );
}

export default Kiemtracapchuky;
