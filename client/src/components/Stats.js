import axios from "axios";
import React, { useEffect, useState } from "react";
import CandidateCard from "./CandidateCard";

function Stats() {
  const [danhsachungvien, setDanhsachungvien] = useState();
  useEffect(() => {
    axios({
      method: "get",
      url: "https://localhost:4000/api/ungvien",
      headers: {
        token: localStorage.getItem("token"),
      },
    }).then((res) => setDanhsachungvien(res.data));
  });

  return (
    <div>
      <div className="title">
        <div className="title__text">Thống kê</div>
      </div>
      <div className="stats">
        {danhsachungvien &&
          danhsachungvien.map((value, index) => (
            <CandidateCard key={index} ungvien={value} />
          ))}
      </div>
    </div>
  );
}

export default Stats;
