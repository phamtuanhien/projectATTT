import axios from "axios";
import React, { useEffect, useState } from "react";
import DanhsachdangkyTable from "../components/DanhsachdangkyTable";
import Kiemtracapchuky from "../components/Kiemtracapchuky";

function Danhsachdangky() {
  const [isOpen, setOpen] = useState(true);
  const [select, setSelect] = useState({});
  const [danhsachdangky, setDanhsachdangky] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://localhost:4000/api/chuky",
      headers: {
        token: localStorage.getItem("token"),
      },
    }).then((res) => setDanhsachdangky(res.data));
  }, [isOpen]);

  return (
    <div className="main">
      <div style={{ width: "900px", margin: "auto" }}>
        {isOpen && <div className="title">Danh sách đăng ký</div>}
        {!isOpen && <div className="title">Kiểm tra đăng ký</div>}
        {isOpen && (
          <DanhsachdangkyTable
            data={danhsachdangky}
            setSelect={setSelect}
            setOpen={setOpen}
          />
        )}

        {/* <Button className="nice-button" 
          variant="contained"
          color="primary"
          className="nice-button"
          onClick={handleClickButton}
          style={{ marginTop: "20px" }}
        >
          Kiểm tra
        </Button> */}
      </div>
      {!isOpen && <Kiemtracapchuky data={select} setOpen={setOpen} />}
    </div>
  );
}

export default Danhsachdangky;
