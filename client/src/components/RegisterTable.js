import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function RegisterTable({ data: rows }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>CMND</TableCell>
            <TableCell>Định danh</TableCell>
            <TableCell>Bí danh</TableCell>
            <TableCell>Số ngẫu nhiên</TableCell>
            <TableCell>Tình trạng</TableCell>
            <TableCell>Chữ ký trên bí danh</TableCell>
            <TableCell>Chữ ký trên định danh</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.cmnd}>
              <TableCell component="th" scope="row">
                {row.cmnd}
              </TableCell>
              <TableCell>{row.dinhdanh}</TableCell>
              <TableCell>{row.bidanh}</TableCell>
              <TableCell>{row.songaunhien}</TableCell>
              <TableCell>{row.tinhtrang}</TableCell>
              <TableCell>{row.chukybidanh}</TableCell>
              <TableCell>{row.chukydinhdanh}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
