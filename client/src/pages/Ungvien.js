import { Button } from "@material-ui/core";
import React, { useState } from "react";
import UngvienTable from "../components/UngvienTable";
import UngvienForm from "../components/CutriForm";
const danhsachungvienn = [
  {
    hoten: "pham tuan hien",
    gioitinh: "nam",
    ngaysinh: "01/01/2000",
    quequan: "ninh binh",
  },
];

function Cutri() {
  const [openUngvien, setOpenUngvien] = useState(false);
  const [danhsachungvien, setdanhsachungvien] = useState(danhsachungvienn);
  const themUngvien = (o) => {
    const _danhsachungvien = [...danhsachungvien];
    _danhsachungvien.push(o);
    setdanhsachungvien(_danhsachungvien);
  };

  return (
    <div className="main">
      <UngvienTable data={danhsachungvien} />
      <Button
        variant="contained"
        color="primary"
        className="nice-button"
        style={{ margin: "auto" }}
        style={{ marginTop: "30px" }}
        onClick={() => setOpenUngvien(!openUngvien)}
      >
        Thêm ứng viên
      </Button>
      {openUngvien && (
        <UngvienForm
          closeCutri={() => setOpenUngvien(false)}
          themCutri={themUngvien}
        />
      )}
    </div>
  );
}

export default Cutri;
