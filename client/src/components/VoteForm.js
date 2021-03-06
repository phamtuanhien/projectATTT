import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { Button } from "@material-ui/core";
import axios from "axios";

function VoteForm({ closeVote }) {
  const [dinhdanh, setDinhdanh] = useState("");
  const [chuky, setChuky] = useState("");
  const [ungvienID, setUngvienID] = useState();
  const [danhsachungvien, setDanhsachungvien] = useState([]);
  const [select, setSelect] = useState(null);
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
      url: `https://localhost:4000/api/chuky/info/${
        JSON.parse(localStorage.getItem("user")).username
      }`,
      headers: {
        token: localStorage.getItem("token"),
      },
    }).then((res) => {
      // console.log(res.data);
      setDinhdanh(res.data.dinhdanh);
      setChuky(res.data.chuky);
    });
  }, []);

  // const handleOnChange = (e, type) => {
  //   if (type === "dinhdanh") {
  //     setDinhdanh(e.target.value);
  //   } else if (type === "chuky") {
  //     setChuky(e.target.value);
  //   }
  // };

  const handleOnClick = (ungvienID, index) => {
    setUngvienID(ungvienID);
    setSelect(index);
    console.log(ungvienID);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (select != null) {
      axios({
        method: "post",
        url: "https://localhost:4000/api/phieubau/bophieu",
        data: {
          cmnd: JSON.parse(localStorage.getItem("user")).username,
          chuky: chuky,
          dinhdanh: dinhdanh,
          ungvienID: ungvienID,
        },
        headers: {
          token: localStorage.getItem("token"),
        },
      })
        .then((res) => {
          closeVote();
        })
        .catch((err) => {
          alert("Đã bỏ phiếu trước đó!");
        });
    }
  };

  return (
    <div className="hehe">
      <form onSubmit={handleSubmit}>
        <FormControl style={{ width: "200px" }} component="fieldset">
          <TextField
            disabled
            variant="outlined"
            margin="normal"
            fullWidth
            id="cmnd"
            value={JSON.parse(localStorage.getItem("user")).username}
            label="Chứng minh nhân dân"
            name="cmnd"
            autoComplete="off"
            required
          />
          <TextField
            disabled
            variant="outlined"
            margin="normal"
            fullWidth
            id="dinhdanh"
            value={dinhdanh}
            label="Định danh"
            name="dinhdanh"
            autoComplete="off"
            required
          />
          <TextField
            disabled
            variant="outlined"
            margin="normal"
            fullWidth
            id="chuky"
            value={chuky}
            label="Chữ ký"
            name="chuky"
            autoComplete="off"
            required
          />
          {/* <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="dinhdanh"
            value={dinhdanh}
            label="Định danh"
            name="dinhdanh"
            autoComplete="off"
            required
            // onChange={(e) => {
            //   handleOnChange(e, e.target.name);
            // }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="chuky"
            value={chuky}
            label="Chữ ký"
            name="chuky"
            autoComplete="off"
            required
            // onChange={(e) => {
            //   handleOnChange(e, e.target.name);
            // }}
          /> */}
          <Button
            style={{ marginTop: "10px" }}
            className="nice-button"
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            autoComplete="off"
          >
            Xác nhận
          </Button>
        </FormControl>
      </form>
      <div className="danhsachungvien">
        <p className="hihi">Chọn ứng viên</p>
        {danhsachungvien.map((ungvien, index) => (
          <div
            key={index}
            className={"ungvien " + (index === select ? "active" : "")}
            onClick={(e) => {
              handleOnClick(ungvien.ungvienID, index);
            }}
          >
            <div className="avatar">
              <img src={ungvien.anh} alt="avatar" />
            </div>
            <div
              className="flex"
              style={{ flexGrow: "1", justifyContent: "flex-start" }}
            >
              <div style={{ marginLeft: "20px", width: "270px" }}>
                <p>Họ tên: {ungvien.hoten}</p>
                <p>Quê Quán: {ungvien.diachi}</p>
              </div>
              <div style={{ marginLeft: "20px" }}>
                <p>Ngày Sinh: {ungvien.ngaysinh}</p>
                <p>Chức vụ: {ungvien.chucvu}</p>
              </div>
            </div>
            {/* <div className="sophieu-wrap">
              <div className="sophieu">
                <div className="sophieuu">{ungvien.sophieu}</div>
              </div>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default VoteForm;
