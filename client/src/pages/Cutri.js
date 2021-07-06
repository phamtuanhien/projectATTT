import { Button } from "@material-ui/core";
import React, { useState } from "react";
import CutriTable from "../components/CutriTable";
import CutriForm from "../components/CutriForm";
const danhsachcutrii = [
  {
    hoten: "pham tuan hien",
    gioitinh: "nam",
    ngaysinh: "01/01/2000",
    quequan: "ninh binh",
  },
];

function Cutri() {
  const [openCutri, setOpenCutri] = useState(false);
  const [danhsachcutri, setdanhsachcutri] = useState(danhsachcutrii);
  const themCutri = (o) => {
    const _danhsachcutri = [...danhsachcutri];
    _danhsachcutri.push(o);
    setdanhsachcutri(_danhsachcutri);
  };

  return (
    <div className="main">
      <CutriTable data={danhsachcutri} />
      <Button
        variant="contained"
        color="primary"
        className="nice-button"
        style={{ margin: "auto" }}
        style={{ marginTop: "30px" }}
        onClick={() => setOpenCutri(!openCutri)}
      >
        Thêm cử tri
      </Button>
      {openCutri && (
        <CutriForm
          closeCutri={() => setOpenCutri(false)}
          themCutri={themCutri}
        />
      )}
    </div>
  );
}

export default Cutri;
