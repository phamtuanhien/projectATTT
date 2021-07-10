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

function DanhsachkiemtraTable({ accountList }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Tên tài khoản</TableCell>
            <TableCell align="center">Mật khẩu</TableCell>
            <TableCell align="center">Vai trò</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {accountList.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {row.username}
              </TableCell>
              <TableCell>{row.password}</TableCell>
              <TableCell>{row.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DanhsachkiemtraTable;
