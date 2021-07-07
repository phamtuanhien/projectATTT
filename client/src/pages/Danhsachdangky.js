import { Button } from "@material-ui/core";
import React, { useState } from "react";
import DanhsachdangkyTable from "../components/DanhsachdangkyTable";
import Kiemtracapchuky from "../components/Kiemtracapchuky";
const data = [
  { cmnd: 123123, bidanh: "afaf2d2f" },
  { cmnd: 565444, bidanh: "adsada" },
];
function Danhsachdangky() {
  const [isOpen, setOpen] = useState(true);
  const [select, setSelect] = useState({});

  const handleClickButton = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="main">
      <div style={{ width: "900px", margin: "auto" }}>
        {isOpen && <div className="title">Danh sách đăng ký</div>}
        {!isOpen && <div className="title">Kiểm tra đăng ký</div>}
        {isOpen && (
          <DanhsachdangkyTable
            data={data}
            setSelect={setSelect}
            setOpen={setOpen}
          />
        )}
        {!isOpen && <Kiemtracapchuky data={select} setOpen={setOpen} />}
        {/* <Button
          variant="contained"
          color="primary"
          className="nice-button"
          onClick={handleClickButton}
          style={{ marginTop: "20px" }}
        >
          Kiểm tra
        </Button> */}
      </div>
    </div>
  );
}

export default Danhsachdangky;
