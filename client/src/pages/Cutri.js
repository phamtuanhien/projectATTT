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
    }).then((res) => setdanhsachcutri(res.data));
  }, []);

  const themCutri = (o) => {
    axios({
      url: "https://localhost:4000/api/cutri/create",
      method: "post",
      data: o,
    }).then(() => {
      const _danhsachcutri = [...danhsachcutri];
      _danhsachcutri.push(o);
      setdanhsachcutri(_danhsachcutri);
    });
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
