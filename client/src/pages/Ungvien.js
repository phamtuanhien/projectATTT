import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import UngvienTable from "../components/UngvienTable";
import UngvienForm from "../components/UngvienForm";
import axios from "axios";

function Cutri() {
  const [openUngvien, setOpenUngvien] = useState(false);
  const [danhsachungvien, setDanhsachungvien] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://localhost:4000/api/ungvien",
    }).then((res) => setDanhsachungvien(res.data));
  }, [openUngvien]);

  const themUngvien = (o) => {
    axios({
      url: "https://localhost:4000/api/ungvien/create",
      method: "post",
      data: 0,
    }).then(() => {
      const _danhsachungvien = [...danhsachungvien];
      _danhsachungvien.push(o);
      setDanhsachungvien(_danhsachungvien);
    });
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
