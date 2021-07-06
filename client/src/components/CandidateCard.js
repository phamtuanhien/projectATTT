import React from "react";

function CandidateCard() {
  const ungvien = {
    hoten: "Vũ Hoàng Phúc",
    quequan: "Từ Sơn, Bắc Ninh",
    ngaysinh: "15-10-2000",
    chucvu: "Osin",
    sophieu: "5/15",
  };

  return (
    <div className="card">
      <div className="avatar">
        <img
          src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
          alt="avatar"
        />
      </div>
      <div className="card__info">
        <p>Họ tên: {ungvien.hoten}</p>
        <p>Quê Quán: {ungvien.quequan}</p>
        <p>Ngày Sinh: {ungvien.ngaysinh}</p>
        <p>Chức vụ: {ungvien.chucvu}</p>
      </div>
      <div className="sophieu-wrap">
        <div className="sophieu">
          <div className="sophieuu">{ungvien.sophieu}</div>
        </div>
      </div>
    </div>
  );
}

export default CandidateCard;
