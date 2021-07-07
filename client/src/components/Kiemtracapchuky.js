import { Button } from "@material-ui/core";
import React, { useState } from "react";

function Kiemtracapchuky({ data, setOpen }) {
  const { cmnd, bidanh, trangthai } = data;
  const [chuky, setChuKy] = useState("");
  const verify = () => {
    setChuKy("adasd");
  };

  const done = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        className="nice-button"
        onClick={() => {
          setOpen(true);
        }}
        style={{ marginTop: "20px" }}
      >
        Quay lại
      </Button>
      <div className="grid" style={{ marginTop: "20px" }}>
        <p>Bí danh: {bidanh}</p>
        <p>CMND: {cmnd}</p>
        <p>Trạng thái: {trangthai}</p>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Button
            variant="contained"
            color="primary"
            className="nice-button"
            onClick={verify}
          >
            Cấp chữ ký
          </Button>
          <p style={{ marginLeft: "10px" }}>{chuky}</p>
        </div>
      </div>
      <Button
        variant="contained"
        color="primary"
        className="nice-button"
        onClick={done}
      >
        Done
      </Button>
    </div>
  );
}

export default Kiemtracapchuky;
