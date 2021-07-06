import React from "react";
import VoteTable from "../components/VoteTable";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import VoteForm from "../components/VoteForm";
const data = [
  {
    cmnd: 1231231213,
    dinhdanh: "Vũ Hoàng Phúc",
    chuky: "12a13av",
    ungvienduocbau: "Phạm Tuấn Hiên",
    tinhtrang: "Đang chờ",
  },
];

function Vote() {
  const [openVote, setOpenVote] = useState(false);
  const handleClickVote = () => {
    setOpenVote(!openVote);
  };
  return (
    <div className="main">
      <div className="title">Trạng thái phiếu</div>
      <VoteTable data={data} />
      <div className="button-holder">
        <Button
          variant="contained"
          color="primary"
          className="nice-button"
          onClick={handleClickVote}
        >
          Bỏ phiếu
        </Button>
      </div>
      {openVote && <VoteForm closeVote={handleClickVote} />}
    </div>
  );
}

export default Vote;
