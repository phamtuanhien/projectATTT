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
      headers: {
        token: localStorage.getItem("token"),
      },
    }).then((res) => setDanhsachungvien(res.data));
  }, [openUngvien]);

  const themUngvien = (o) => {
    axios({
      url: "https://localhost:4000/api/ungvien/create",
      method: "post",
      data: 0,
      headers: {
        token: localStorage.getItem("token"),
      },
    }).then(() => {
      const _danhsachungvien = [...danhsachungvien];
      _danhsachungvien.push(o);
      setDanhsachungvien(_danhsachungvien);
    });
  };

  return (
    <div className="main">
      <div className="title">Danh sách ứng viên</div>
      <UngvienTable data={danhsachungvien} />
      <Button
        className="nice-button"
        variant="contained"
        color="primary"
        style={{ margin: "auto", marginTop: "30px" }}
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
