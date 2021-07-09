import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { UserContext } from "../contexts/userContext";

function InfoCard() {
  const { user } = useContext(UserContext);
  const [info, setInfo] = useState();

  useEffect(() => {
    axios({
      method: "get",
      url: "https://localhost:4000/api/cutri/infocmnd",
      header: { token: localStorage.getItem("token") },
      data: {
        cmnd: "125923632",
      },
    }).then((res) => console.log(res.data));
  }, []);

  return (
    <div className="info">
      <div className="info__left">
        <p>Họ và tên:</p>
        <p>CMND:</p>
        <p>Số điện thoại:</p>
        <p>Địa chỉ:</p>
        <p>Chức vụ, nơi làm việc:</p>
        <p>Giới tính</p>
        <p>Ngày sinh</p>
      </div>
      {/* <div className="info__right">
        <p>{info.hoten}</p>
        <p>{info.cmnd}</p>
        <p>{info.sdt}</p>
        <p>{info.diachi}</p>
        <p>{info.chucvu}</p>
        <p>{info.gioitinh}</p>
        <p>{info.ngaysinh}</p>
      </div> */}
    </div>
  );
}

export default InfoCard;
