import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { UserContext } from "../contexts/userContext";

function InfoCard() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [info, setInfo] = useState();

  useEffect(() => {
    console.log(user);
    user &&
      axios({
        method: "get",
        url: `https://localhost:4000/api/cutri/infocmnd/${user.username}`,
        header: { token: localStorage.getItem("token") },
      }).then((res) => setInfo(res.data));
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
      {info && (
        <div className="info__right">
          <p>{info.hoten}</p>
          <p>{info.cmnd}</p>
          <p>{info.sdt}</p>
          <p>{info.diachi}</p>
          <p>{info.chucvu}</p>
          <p>{info.gioitinh}</p>
          <p>{info.ngaysinh}</p>
        </div>
      )}
    </div>
  );
}

export default InfoCard;
