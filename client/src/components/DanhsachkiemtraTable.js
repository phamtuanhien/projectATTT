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

function DanhsachkiemtraTable({ data: rows, setSelect, select }) {
  const classes = useStyles();
  const handleOnClick = (e, k) => {
    setSelect({
      cmnd: k.cmnd,
      chuky: k.chuky,
      dinhdanh: k.dinhdanh,
      content: k.content,
    });
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Chữ ký</TableCell>
            <TableCell align="center">Định danh</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.chuky}
              onClick={(e) => {
                handleOnClick(e, row);
              }}
              className={
                `table-row` + (row.chuky === select.chuky ? " highlight" : "")
              }
            >
              <TableCell component="th" scope="row">
                {row.chuky}
              </TableCell>
              <TableCell>{row.dinhdanh}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DanhsachkiemtraTable;
