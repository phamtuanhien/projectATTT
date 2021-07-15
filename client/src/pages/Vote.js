import React, { useEffect } from "react";
import VoteTable from "../components/VoteTable";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import VoteForm from "../components/VoteForm";
import axios from "axios";

function Vote() {
  const [openVote, setOpenVote] = useState(false);
  const [phieubau, setPhieubau] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: `https://localhost:4000/api/phieubau/info/${
        JSON.parse(localStorage.getItem("user")).username
      }`,
      headers: {
        token: localStorage.getItem("token"),
      },
    }).then((res) => {
      setPhieubau([res.data]);
      console.log(res.data);
    });
  }, [openVote]);

  const handleClickVote = () => {
    setOpenVote(!openVote);
  };
  return (
    <div className="main">
      <div className="title">Trạng thái phiếu</div>
      <VoteTable data={phieubau} />
      <Button
        className="nice-button"
        variant="contained"
        color="primary"
        onClick={handleClickVote}
        style={{ margin: "20px 0" }}
      >
        Bỏ phiếu
      </Button>
      {openVote && <VoteForm closeVote={handleClickVote} />}
    </div>
  );
}

export default Vote;
