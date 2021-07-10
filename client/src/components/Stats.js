import axios from "axios";
import React, { useEffect, useState } from "react";
import CandidateCard from "./CandidateCard";

function Stats() {
  const [danhsachungvien, setDanhsachungvien] = useState();
  const [thongke, setThongke] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "https://localhost:4000/api/ungvien",
      headers: {
        token: localStorage.getItem("token"),
      },
    }).then((res) => setDanhsachungvien(res.data));
    axios({
      method: "get",
      url: "https://localhost:4000/api/phieubau/thongke",
      headers: {
        token: localStorage.getItem("token"),
      },
    }).then((res) => setThongke(res.data));
  }, []);

  return (
    <div>
      <div className="title">
        <div className="title__text">Thống kê</div>
      </div>
      <div className="stats">
        {danhsachungvien &&
          danhsachungvien.map((value, index) => (
            <CandidateCard key={index} ungvien={value} thongke={thongke} />
          ))}
      </div>
    </div>
  );
}

export default Stats;
