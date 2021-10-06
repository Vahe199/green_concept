import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
// import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
// import Divider from "@material-ui/core/Divider";
import { StyledTableRow } from "./utils/TableRow";
import { StyledTableCell } from "./utils/TableCell";
import InputFilterSelected from "./FilterInputs/InputFilterSelected";
import InputFilterSearch from "./FilterInputs/InputFilterSearch";
import InputFilterDate from "./FilterInputs/InputFilterDate";
import { useTypedSelector } from "../../../redux/type_redux_hook/useTypedSelector";
import Loader from "../../Layout/Loader/Loader";
import { useHistory } from "react-router-dom";
import { UseActions } from "../../../redux/type_redux_hook/ useAction";
import InputFilterSelectedType from "./FilterInputs/InputFilterSelectedType";
import { SortingButtons } from "../../../IMG/SVG/sortingButtonsIcon";

const useStyles = makeStyles({
  root: {
    width: "100%",
    "& .MuiInputBase-root": {
      marginTop: 8,
      border: "1px solid #F1F2F3",
    },

    borderRadius: 4,
  },
  // container: {
  //   maxHeight: "74vh",
  //   borderRadius: 4,
  // },
  container: {
    scrollbarWidth: "none" /* Firefox */,
    maxHeight: "74vh",
    borderRadius: 4,
    "&::-webkit-scrollbar": {
      display: "none"
    } /* Chrome */
  },
  textField: {
    width: "75px",
    // padding:4
  },
  tableBody:{
    width:'100%',
    maxHeight: "70vh",
    overflowX:"scroll",

  },
  tableCell: {
    display: "flex",
    flexDirection: "column",
  },
  at: {
    width: 120,
    color: "#3B4750",
  },
  TextColor: {
    color: "#3B4750",
    fontSize: 15,
    fontWeight: 400,
  },
});

export default function CounterpartiesTable(props: any) {
  let history = useHistory();
  const classes = useStyles();
  const { contractors, loading } = useTypedSelector(
    (state) => state.counterparties
  );
  const { authors } = useTypedSelector((state) => state.authorsList);
  const { getAuthorData } = UseActions();
  // const [page, setPage] = React.useState(0);
  // const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [services, setServices] = React.useState("Другое");
  // const [currency, setCurrency] = React.useState("All");
  // const handleChangePage = (event: unknown, newPage: number) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   // setRowsPerPage(+event.target.value);
  //   // setPage(0);
  // };
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setCurrency(event.target.value);
  // };
  const handleChangeServices = (event: React.ChangeEvent<HTMLInputElement>) => {
    setServices(event.target.value);
  };
  const getUserData = (data: any) => {
    history.push(`/counterparty/author/${data.id}`);
    getAuthorData(data);
  };
  return loading ? (
    <Loader />
  ) : (
    <Paper className={classes.root}>
      {/* <TablePagination
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
      <Divider variant="middle" />*/}

      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="a dense table">
          <TableHead>
            <TableRow>
              <StyledTableCell>
                <div style={{ marginTop: -27, marginLeft: 4 }}> &#x2116;</div>
              </StyledTableCell>
              <StyledTableCell
                align="left"
                style={{ color: "#3B4750", fontSize: 15 }}
              >
                Тип
                <InputFilterSelectedType
                  handleChange={handleChangeServices}
                  value={services}
                />
              </StyledTableCell>
              <StyledTableCell
                align="left"
                style={{ color: "#3B4750", fontSize: 15 }}
              >
                Наименование
                {/* <InputFilterSearch handleChange={handleChange} /> */}
                <InputFilterSearch />
              </StyledTableCell>
              <StyledTableCell
                align="left"
                style={{ color: "#3B4750", fontSize: 15 }}
              >
                Отрасль
                {/* <InputFilterSearch handleChange={handleChange} /> */}
                <InputFilterSearch />
              </StyledTableCell>
              <StyledTableCell
                align="left"
                style={{
                  minWidth: "150px",
                  color: "#3B4750",
                  fontSize: 15,
                  whiteSpace: "pre",
                }}
              >
                Группа компаний
                {/* <InputFilterSearch handleChange={handleChange} /> */}
                <InputFilterSearch />
              </StyledTableCell>
              <StyledTableCell
                align="left"
                style={{ color: "#3B4750", fontSize: 15 }}
              >
                Ответственный
                {/* <InputFilterSearch handleChange={handleChange} /> */}
                <InputFilterSearch />
              </StyledTableCell>
              <StyledTableCell
                align="left"
                style={{ minWidth: "135px", color: "#3B4750", fontSize: 15 }}
              >
                Автор записи
                <InputFilterSelected options={authors} />
              </StyledTableCell>
              <StyledTableCell
                align="left"
                style={{ color: "#3B4750", fontSize: 15 }}
              >
                <div style={{ display: "flex" }}>
                  <span>Создано</span>
                  <span style={{ position: "absolute", right: 8, top: 8 }}>
                    <SortingButtons color="#5B6770" />
                  </span>
                </div>
                <InputFilterDate />
              </StyledTableCell>
              <StyledTableCell
                align="left"
                style={{ color: "#3B4750", fontSize: 15 }}
              >
                <div style={{ display: "flex" }}>
                  <span>Обновлено</span>
                  <span style={{ position: "absolute", right: 8, top: 8 }}>
                    <SortingButtons color="#5B6770" />
                  </span>
                </div>
                <InputFilterDate />
              </StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody >
            {contractors.map((row, index: number) => (
              <StyledTableRow
                hover
                role="checkbox"
                onClick={() => getUserData(row)}
                tabIndex={-1}
                key={index}
              >
                <TableCell align="left">{row.id}</TableCell>
                <TableCell align="left" className={classes.TextColor}>
                  {row.type ? row.type.name : ""}
                </TableCell>

                <TableCell align="left" className={classes.TextColor}>
                  {row.full_name}
                </TableCell>
                <TableCell align="left" className={classes.TextColor}>
                  {row.branches.map((branch: any, index: number) => {
                    return (
                      <span key={index}>
                        {branch.name}
                        {index < row.branches.length - 1 ? ", " : " "}
                      </span>
                    );
                  })}
                </TableCell>
                <TableCell align="left" className={classes.TextColor}>
                  {row.group === null ? row.group : ""}
                </TableCell>
                <TableCell align="left" className={classes.TextColor}>
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
                <TableCell align="left" className={classes.TextColor}>
                  {row.author
                    ? `${row.author.surname} ${row.author.firstname.substring(
                        0,
                        1
                      )}. `
                    : ""}
                  {row.author.middlename
                    ? `${row.author.middlename.substring(0, 1)}.`
                    : ""}
                </TableCell>
                <TableCell align="left" className={classes.TextColor}>
                  {row.created_at}
                </TableCell>
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
