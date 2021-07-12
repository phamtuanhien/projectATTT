import React from "react";

function CandidateCard({ ungvien, thongke }) {
  let sum = 0;
  let sl = 0;
  for (const o of thongke) {
    sum += o.Sum;
    if (o.ungvienID === ungvien.ungvienID) {
      sl = o.Sum;
    }
  }

  return (
    <div className="card">
      <div className="avatar">
        <img src={ungvien.anh} alt="avatar" />
      </div>
      <div className="card__info">
        <p>Họ tên: {ungvien.hoten}</p>
        <p>Quê Quán: {ungvien.diachi}</p>
        <p>Ngày Sinh: {ungvien.ngaysinh}</p>
        <p>Chức vụ: {ungvien.chucvu}</p>
      </div>
      <div className="sophieu-wrap">
        <div className="sophieu">
          <div className="sophieuu">
            {sl}/{sum}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CandidateCard;
