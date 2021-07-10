import React, { useEffect } from "react";
import RegisterTable from "../components/RegisterTable";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import RegisterForm from "../components/RegisterForm";
import AuthForm from "../components/AuthForm";
import axios from "axios";

function Register() {
  const [openRegis, setOpenRegis] = useState(false);
  const [openAuth, setOpenAuth] = useState(false);
  const [text, setText] = useState("");
  const [rows, setRows] = useState();

  useEffect(() => {
    axios({
      method: "get",
      url: `https://localhost:4000/api/chuky/info/${
        JSON.parse(localStorage.getItem("user")).username
      }`,
    }).then((res) => {
      console.log(res.data);
      setRows([res.data]);
    });
  }, [openRegis]);

  const handleClickRegis = () => {
    if (openRegis) {
      setOpenRegis(!openRegis);
    } else {
      if (openAuth) {
        setOpenAuth(!openAuth);
      }
      setOpenRegis(!openRegis);
      setText("");
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
    axios({
      method: "post",
      url: "https://localhost:4000/api/chuky/dangky",
      data: {
        cmnd: o.cmnd,
        bidanh: o.bidanh,
        dinhdanh: o.dinhdanh,
        r: o.songaunhien,
      },
    })
      .then((res) => {
        console.log("dang ky thanh cong");
        setText("");
        setOpenRegis(false);
      })
      .catch((err) => {
        console.log(err);
        setText("Bạn đã xin cấp chữ ký trước đó");
        setOpenRegis(false);
      });
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
      {text && (
        <div style={{ fontSize: "24px", marginTop: "20px" }}>{text}</div>
      )}
      {openRegis && (
        <RegisterForm closeRegis={handleClickRegis} newRegis={newRegis} />
      )}
      {openAuth && <AuthForm closeAuth={handleClickAuth} />}
    </div>
  );
}

export default Register;
