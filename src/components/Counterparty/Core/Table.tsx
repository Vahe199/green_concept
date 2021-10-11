import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

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
import { Space, Table } from "antd";

const useStyles = makeStyles({
  root: {
    width: "100%",
    "& .MuiInputBase-root": {
      marginTop: 8,
      border: "1px solid #F1F2F3",
    },
  },
  table: {
    color: "#3B4750",
    fontSize: 15,
    borderRadius: "4px",
    overflow: "hidden",

    "& thead": {
      "& tr": {
        "& th": {
          background: "#FFFFFF",
          "&::before": { display: "none" },
          "& div.MuiInputBase-root": {
            height: "40px !important",
            color: "#3b475080",
          },
        },
      },
    },

    "& tbody": {
      "& tr": {
        "&:nth-child(odd) ": {
          background: " #F2F3F4",
        },
        "&:nth-child(even) ": {
          background: " #FFFFFF",
        },
      },
    },
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

  const columns = [
    {
      title: () => <>&#x2116;</>, //todo Arsen change icon
      dataIndex: "id",
      width: 80,
      render: (id: string, data: any) => (
        <span onClick={() => getUserData(data)} style={{ color: "#3B4750" }}>
          {id}
        </span>
      ),
    },
    {
      title: () => (
        <>
          Тип
          <InputFilterSelectedType
            handleChange={handleChangeServices}
            value={services}
          />
        </>
      ),
      dataIndex: "typeName",
      width: 150,
    },
    {
      title: () => (
        <>
          Наименование
          <InputFilterSearch />
        </>
      ),
      dataIndex: "full_name",
      width: 250,
    },
    {
      title: () => (
        <>
          Отрасль
          <InputFilterSearch />
        </>
      ),
      dataIndex: "branches",
      render: (branches: any[]) => {
        return branches?.map((branch: any, index: number) => {
          return (
            <span key={index}>
              {branch.name}
              {index < branches.length - 1 ? ", " : " "}
            </span>
          );
        });
      },
    },
    {
      title: () => (
        <>
          Группа компаний
          <InputFilterSearch />
        </>
      ),
      dataIndex: "group",
    },
    {
      title: () => (
        <>
          Ответственный
          <InputFilterSearch />
        </>
      ),
      dataIndex: "crms",
      render: (crms: any[]) => {
        return crms.map((crm: any, index: number) => {
          return (
            <span key={index}>
              {crm.firstname + " " + crm.surname && crm.surname}
              {index < crms.length - 1 ? ", " : " "}
            </span>
          );
        });
      },
    },
    {
      title: () => (
        <>
          Автор записи
          <InputFilterSelected options={authors} />
        </>
      ),
      dataIndex: "author",
      render: (author: any) => {
        const authorFullName = author
          ? `${author.surname} ${author.firstname.substring(0, 1)}. `
          : "" + author.middlename
          ? `${author.middlename.substring(0, 1)}.`
          : "";

        return authorFullName;
      },
    },
    {
      title: () => (
        <>
          <div style={{ display: "flex" }}>
            <span>Создано</span>
            <span style={{ position: "absolute", right: 8, top: 8 }}>
              <SortingButtons color="#5B6770" />
            </span>
          </div>
          <InputFilterDate />
        </>
      ),
      dataIndex: "created_at",
      width: 200,
    },
    {
      title: () => (
        <>
          <div style={{ display: "flex" }}>
            <span>Обновлено</span>
            <span style={{ position: "absolute", right: 8, top: 8 }}>
              <SortingButtons color="#5B6770" />
            </span>
          </div>
          <InputFilterDate />
        </>
      ),
      dataIndex: "updated_at",
      width: 200,
    },
  ];

  const data = contractors.map(({ key, service, sites, type, ...rowData }) => {
    return {
      key,
      id: key,
      typeName: type.name,
      ...rowData,
    };
  });

  console.log(data);

  return loading ? (
    <Loader />
  ) : (
    <Paper className={classes.root}>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        scroll={{ y: 820 }}
        className={classes.table}
      />
    </Paper>
  );
}
