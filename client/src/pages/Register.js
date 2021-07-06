import React from "react";
import RegisterTable from "../components/RegisterTable";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import RegisterForm from "../components/RegisterForm";
import AuthForm from "../components/AuthForm";
function createData(
  cmnd,
  dinhdanh,
  bidanh,
  songaunhien,
  tinhtrang,
  chukybidanh,
  chukydinhdanh
) {
  return {
    cmnd,
    dinhdanh,
    bidanh,
    songaunhien,
    tinhtrang,
    chukybidanh,
    chukydinhdanh,
  };
}
const rowss = [
  createData(
    1259223444,
    "Vũ Hoàng Phúc",
    0x3f4e12346a,
    15,
    "Đang chờ",
    0x1231231312,
    0x343443443
  ),
  createData(
    12592234345,
    "Vũ Hoàng Phúc",
    0x3f4e12346a,
    15,
    "Đang chờ",
    0x1231231312,
    0x343443443
  ),
];

function Register() {
  const [openRegis, setOpenRegis] = useState(false);
  const [openAuth, setOpenAuth] = useState(false);
  const [rows, setRows] = useState(rowss);

  const handleClickRegis = () => {
    if (openRegis) {
      setOpenRegis(!openRegis);
    } else {
      if (openAuth) {
        setOpenAuth(!openAuth);
      }
      setOpenRegis(!openRegis);
    }
  };
  const handleClickAuth = () => {
    if (openAuth) {
      setOpenAuth(!openAuth);
    } else {
      if (openRegis) {
        setOpenRegis(!openRegis);
      }
      setOpenAuth(!openAuth);
    }
  };
  const newRegis = (o) => {
    const v_rows = [...rows];
    v_rows.push(o);
    setRows(v_rows);
  };

  return (
    <div className="main">
      <div className="title">Trạng thái đăng ký</div>
      <RegisterTable data={rows} />
      <div className="button-holder">
        <Button
          variant="contained"
          color="primary"
          className="nice-button"
          onClick={handleClickRegis}
        >
          Xin cấp chữ ký
        </Button>
        <Button
          variant="contained"
          color="primary"
          className="nice-button"
          onClick={handleClickAuth}
        >
          Xác thực chũ ký
        </Button>
      </div>
      {openRegis && (
        <RegisterForm closeRegis={handleClickRegis} newRegis={newRegis} />
      )}
      {openAuth && <AuthForm closeAuth={handleClickAuth} />}
    </div>
  );
}

export default Register;
