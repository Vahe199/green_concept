import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Divider from "@material-ui/core/Divider";
import { StyledTableRow } from "./utils/TableRow";
import { StyledTableCell } from "./utils/TableCell";
import InputFilterSelected from "./FilterInputs/InputFilterSelected";
import InputFilterSearch from "./FilterInputs/InputFilterSearch";
import InputFilterDate from "./FilterInputs/InputFilterDate";
import { useTypedSelector } from "../../../redux/type_redux_hook/useTypedSelector";
import Loader from "../../Layout/Loader/Loader";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: "74vh",
  },
  textField: {
    width: "75px",
    // padding:4
  },
  tableCell: {
    display: "flex",
    flexDirection: "column",
  },
  at: {
    width: 120,
  },
});

export default function CounterpartiesTable() {
  const classes = useStyles();
  const { contractors, loading } = useTypedSelector(
    (state) => state.counterparties
  );
  const { authors } = useTypedSelector((state) => state.authorsList);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [currency, setCurrency] = React.useState("All");
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
  };
  return loading ? (
    <Loader />
  ) : (
    <Paper className={classes.root}>
      <TablePagination
        style={{ padding: 0, border: "none" }}
        rowsPerPageOptions={[5, 10, 25, { label: "Все", value: -1 }]}
        colSpan={3}
        labelRowsPerPage="Строк на странице:"
        count={contractors.length}
        rowsPerPage={rowsPerPage}
        page={page}
        SelectProps={{
          inputProps: { "aria-label": "rows per page" },
          native: true,
        }}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <Divider variant="middle" />

      <TableContainer className={classes.container}>
        <Table  stickyHeader aria-label="a dense table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">N</StyledTableCell>
              <StyledTableCell align="left">
                Тип
                <InputFilterSelected
                  handleChange={handleChange}
                  options={authors}
                />
              </StyledTableCell>
              <StyledTableCell align="left">
                Наименование
                <InputFilterSearch handleChange={handleChange} />
              </StyledTableCell>
              <StyledTableCell align="left">
                Отрасль 
                <InputFilterSearch handleChange={handleChange} />
              </StyledTableCell>
              <StyledTableCell align="left" style={{ minWidth: "150px" }}>
                Группа компаний
                <InputFilterSearch handleChange={handleChange} />
              </StyledTableCell>
              <StyledTableCell align="left">
                Ответственный
                <InputFilterSearch handleChange={handleChange} />
              </StyledTableCell>
              <StyledTableCell align="left" style={{ minWidth: "135px" }}>
                Автор записи
                <InputFilterSelected
                  handleChange={handleChange}
                  options={authors}
                />
              </StyledTableCell>
              <StyledTableCell align="left">
                Создано
                <InputFilterDate />
              </StyledTableCell>
              <StyledTableCell align="left">
                Обновлено
                <InputFilterDate />
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contractors.map((row, index: number) => (
              <StyledTableRow hover role="checkbox" onClick={()=>console.log(row)} tabIndex={-1} key={index}>
                <TableCell align="left">{row.id}</TableCell>
                <TableCell align="left">
                  {row.type ? row.type.name : ""}
                </TableCell>

                <TableCell align="left">{row.full_name}</TableCell>
                <TableCell align="left">
                  {row.branches.map((branch: any, index: number) => {
                    return (
                      <span key={index}>
                        {branch.name}
                        {index < row.branches.length - 1 ? ", " : " "}
                      </span>
                    );
                  })}
                </TableCell>
                <TableCell align="left">
                  {row.group === null ? row.group : ""}
                </TableCell>
                <TableCell align="left">
                  {row.crms.firstname}
                  {row.crms.map((crm: any, index: number) => {
                    return (
                      <span key={index}>
                        {crm.firstname + " " + crm.surname && crm.surname}
                        {index < row.crms.length - 1 ? ", " : " "}
                      </span>
                    );
                  })}
                </TableCell>
                <TableCell align="left">
                  {row.author
                    ? row.author.surname +
                      " " +
                      row.author.firstname +
                      "." +
                      row.author.middlename +
                      "."
                    : ""}
                </TableCell>
                <TableCell align="left">{row.created_at}</TableCell>
                <TableCell className={classes.at} align="left">
                  {row.updated_at}
                </TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
