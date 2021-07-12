import { Button } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import DanhsachkiemtraTable from "../components/DanhsachkiemtraTable";
import Kiemtraphieu from "../components/Kiemtraphieu";

function Danhsachkiemtra() {
  const [isOpen, setOpen] = useState(false);
  const [select, setSelect] = useState("");
  const [danhsachkiemtra, setDanhsachkiemtra] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://localhost:4000/api/phieubau",
      headers: {
        token: localStorage.getItem("token"),
      },
    }).then((res) => {
      setDanhsachkiemtra(res.data);
      console.log(res.data);
    });
  }, [isOpen]);

  return (
    <div className="main">
      <div style={{ width: "900px", margin: "auto" }}>
        <div className="title">Danh sách phiếu cần kiểm tra</div>
        <DanhsachkiemtraTable
          data={danhsachkiemtra}
          select={select}
          setSelect={setSelect}
        />
        <Button
          className="nice-button"
          style={{ marginTop: "20px" }}
          variant="contained"
          color="primary"
          onClick={() => {
            setOpen(!isOpen);
          }}
        >
          Kiểm tra
        </Button>
        {isOpen && select !== "" && (
          <Kiemtraphieu data={select} setOpen={setOpen} />
        )}
      </div>
    </div>
  );
}

export default Danhsachkiemtra;
