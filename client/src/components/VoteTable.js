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

function VoteTable({ data: rows }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>CMND</TableCell>
            <TableCell>Định danh</TableCell>
            <TableCell>Chữ ký</TableCell>
            <TableCell>Ứng viên được bầu</TableCell>
            <TableCell>Tình trạng</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {row.phieubau.cmnd}
              </TableCell>
              <TableCell>{row.phieubau.dinhdanh}</TableCell>
              <TableCell>{row.phieubau.chuky}</TableCell>
              <TableCell>{row.ungvien.hoten}</TableCell>
              <TableCell>{row.phieubau.tinhtrang}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default VoteTable;
