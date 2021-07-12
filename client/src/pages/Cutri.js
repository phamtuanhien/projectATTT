import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import CutriTable from "../components/CutriTable";
import CutriForm from "../components/CutriForm";
import axios from "axios";

function Cutri() {
  const [openCutri, setOpenCutri] = useState(false);
  const [danhsachcutri, setdanhsachcutri] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://localhost:4000/api/cutri",
      headers: {
        token: localStorage.getItem("token"),
      },
    }).then((res) => setdanhsachcutri(res.data));
  }, []);

  const themCutri = (o) => {
    axios({
      url: "https://localhost:4000/api/cutri/create",
      method: "post",
      data: o,
      headers: {
        token: localStorage.getItem("token"),
      },
    }).then(() => {
      const _danhsachcutri = [...danhsachcutri];
      _danhsachcutri.push(o);
      setdanhsachcutri(_danhsachcutri);
    });
  };

  return (
    <div className="main">
      <div className="title">Danh sách cử tri</div>
      <CutriTable data={danhsachcutri} />
      <Button
        className="nice-button"
        variant="contained"
        color="primary"
        style={{ margin: "auto", marginTop: "30px" }}
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
