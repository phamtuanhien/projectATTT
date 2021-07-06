import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { Button } from "@material-ui/core";

const data = [
  {
    id: "1",
    hoten: "Vũ Hoàng Phúc",
    quequan: "Từ Sơn, Bắc Ninh",
    ngaysinh: "15-10-2000",
    chucvu: "Osin",
    sophieu: "5/15",
  },
  {
    id: "2",
    hoten: "Phạm Tuấn Hiên",
    quequan: "Từ Sơn, Bắc Ninh",
    ngaysinh: "15-10-2000",
    chucvu: "Osin",
    sophieu: "5/15",
  },
];

function VoteForm({ closeVote }) {
  const [dinhdanh, setDinhdanh] = useState("");
  const [chuky, setChuky] = useState("");
  const [value, setValue] = useState(data[0].id);

  const handleOnChange = (e, type) => {
    if (type === "dinhdanh") {
      setDinhdanh(e.target.value);
    } else if (type === "chuky") {
      setChuky(e.target.value);
    }
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value, dinhdanh, chuky);
    closeVote();
  };

  return (
    <div className="center">
      <form onSubmit={handleSubmit}>
        <FormControl component="fieldset">
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="dinhdanh"
            value={dinhdanh}
            label="Định danh"
            name="dinhdanh"
            autoComplete="off"
            required
            onChange={(e) => {
              handleOnChange(e, e.target.name);
            }}
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
            onChange={(e) => {
              handleOnChange(e, e.target.name);
            }}
          />
          <RadioGroup
            aria-label="votee"
            name="votee"
            value={value}
            onChange={handleChange}
          >
            {data.map((v) => {
              return (
                <FormControlLabel
                  value={v.id}
                  key={v.id}
                  control={<Radio />}
                  label={v.hoten}
                />
              );
            })}
          </RadioGroup>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="submit-vote"
            autoComplete="off"
          >
            Xác nhận
          </Button>
        </FormControl>
      </form>
    </div>
  );
}

export default VoteForm;
