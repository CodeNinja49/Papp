import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Pagination from "@material-ui/lab/Pagination";
import Checkbox from "@material-ui/core/Checkbox";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#E3E9EF",
    color: "#52575D",
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(even)": {
      backgroundColor: "#F6F7FB",
    },
  },
}))(TableRow);

function createData(name, patent, code) {
  return { name, patent, code };
}

const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
});

export default function CustomizedTables({
  data = [],
  onCheckBoxChange,
  isInvalid = false,
  t,
}) {
  const classes = useStyles();
  return (
    <TableContainer style={{ marginTop: 10 }}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">
              {/* {isInvalid ? null : ( */}
              <Checkbox
                color="primary"
                inputProps={{
                  "aria-label": "secondary checkbox",
                  name: "all",
                }}
                checked={!data.filter((d) => !d.checked).length && data.length}
                onChange={onCheckBoxChange}
              />
              {/* )}{" "} */}
            </StyledTableCell>
            <StyledTableCell align="center">{t("USER_INPUT")}</StyledTableCell>
            <StyledTableCell align="center">
              {isInvalid ? t("MATCH") : t("MATCH_FOUND")}
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) =>
            Array.isArray(row.code) ? (
              row.code.map((c) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell align="center">
                    <Checkbox
                      color="primary"
                      inputProps={{
                        "aria-label": "secondary checkbox",
                        name: row.patent,
                      }}
                      value={c}
                      onChange={onCheckBoxChange}
                    />
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.patent}</StyledTableCell>
                  <StyledTableCell align="center">{c}</StyledTableCell>
                </StyledTableRow>
              ))
            ) : (
              <StyledTableRow key={row.name}>
                <StyledTableCell align="center">
                  <Checkbox
                    color="primary"
                    inputProps={{
                      "aria-label": "secondary checkbox",
                      name: row.patent,
                    }}
                    value={row.name}
                    checked={row.checked}
                    onChange={onCheckBoxChange}
                  />
                </StyledTableCell>
                <StyledTableCell align="center">{row.patent}</StyledTableCell>
                <StyledTableCell align="center">{row.code}</StyledTableCell>
              </StyledTableRow>
            )
          )}
        </TableBody>
      </Table>
      {/* <Pagination count={10} shape="rounded" color="primary" /> */}
    </TableContainer>
  );
}
