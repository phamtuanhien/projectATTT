import React from "react";
import CandidateCard from "./CandidateCard";

function Stats() {
  return (
    <div>
      <div className="title">
        <div className="title__text">Thống kê</div>
      </div>
      <div className="stats">
        <CandidateCard />
        <CandidateCard />
        <CandidateCard />
      </div>
    </div>
  );
}

export default Stats;
