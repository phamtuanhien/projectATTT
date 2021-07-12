import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function InfoCard() {
  const [info, setInfo] = useState();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    user &&
      axios({
        method: "get",
        url: `https://localhost:4000/api/cutri/infocmnd/${user.username}`,
        headers: {
          token: localStorage.getItem("token"),
        },
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
