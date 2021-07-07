import { Button } from "@material-ui/core";
import React from "react";

function Kiemtraphieu({ data, setOpen }) {
  const xacnhan = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="grid" style={{ marginTop: "20px" }}>
        <p>Chữ ký: {data.chuky}</p>
        <p>Định danh: {data.dinhdanh}</p>
        <p>Trạng thái: {data.trangthai}</p>
      </div>
      <p>Lỗi:</p>
      <Button
        variant="contained"
        color="primary"
        className="nice-button"
        onClick={xacnhan}
      >
        Xác nhận
      </Button>
    </div>
  );
}

export default Kiemtraphieu;
