import { Button } from "@material-ui/core";
import React, { useState } from "react";
import DanhsachkiemtraTable from "../components/DanhsachkiemtraTable";
import Kiemtraphieu from "../components/Kiemtraphieu";
const data = [
  { chuky: "3e4f", dinhdanh: "Vũ Hoàng Phúc" },
  { chuky: "1a2b3c", dinhdanh: "Hiên" },
];
function Danhsachkiemtra() {
  const [isOpen, setOpen] = useState(false);
  const [select, setSelect] = useState("");
  return (
    <div className="main">
      <div style={{ width: "900px", margin: "auto" }}>
        <div className="title">Danh sách phiếu cần kiểm tra</div>
        <DanhsachkiemtraTable
          data={data}
          select={select}
          setSelect={setSelect}
        />
        <Button
          style={{ marginTop: "20px" }}
          variant="contained"
          color="primary"
          className="nice-button"
          onClick={() => {
            setOpen(!isOpen);
          }}
        >
          Kiểm tra
        </Button>
        {isOpen && select != "" && (
          <Kiemtraphieu data={select} setOpen={setOpen} />
        )}
      </div>
    </div>
  );
}

export default Danhsachkiemtra;
