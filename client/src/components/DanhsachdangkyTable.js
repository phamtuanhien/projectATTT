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
function DanhsachdangkyTable({ data: rows, setSelect, setOpen }) {
  const classes = useStyles();
  const handleOnClick = (e, k) => {
    setSelect(k);
    console.log(k);
    setOpen(false);
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">CMND</TableCell>
            <TableCell align="center">Bí danh</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.cmnd}
              onClick={(e) => {
                handleOnClick(e, row);
              }}
              className="table-row"
            >
              <TableCell component="th" scope="row">
                {row.cmnd}
              </TableCell>
              <TableCell>{row.bidanh}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DanhsachdangkyTable;
