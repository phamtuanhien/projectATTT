import React from "react";

const data = {
  hoten: "Nguyễn Hoàng Anh",
  cmnd: 121312313,
  sdt: 10100333,
  diachi: "Lào cai",
  chucvu: "Nhân viên AHT",
};

function InfoCard() {
  return (
    <div className="info">
      <div className="info__left">
        <p>Họ và tên:</p>
        <p>CMND:</p>
        <p>Số điện thoại:</p>
        <p>Địa chỉ:</p>
        <p>Chức vụ, nơi làm việc:</p>
      </div>
      <div className="info__right">
        <p>{data.hoten}</p>
        <p>{data.cmnd}</p>
        <p>{data.sdt}</p>
        <p>{data.diachi}</p>
        <p>{data.chucvu}</p>
      </div>
    </div>
  );
}

export default InfoCard;
