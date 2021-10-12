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
import InputFilterSelectedType from "./FilterInputs/InputFilterSelect";
import InputFilterDatePicker from "./FilterInputs/InputFilterDatePicker";
import { SortingButtons } from "../../../IMG/SVG/sortingButtonsIcon";
import { Space, Table } from "antd";

const useStyles = makeStyles({
  root: {
    width: "100%",
    color: "#3b475080",

    "& .ant-select": {
      height: "40px !important",
    },
    "& .ant-select-selection-item": {
      lineHeight: "36px !important",
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
  input: {
    marginTop: 16,
  },
});

export default function CounterpartiesTable(props: any) {
  let history = useHistory();
  const classes = useStyles();
  const { contractors, loading } = useTypedSelector(
    (state) => state.counterparties
  );
  const { authors } = useTypedSelector((state) => state.authorsList);
  const { assets, load: assetsLoading } = useTypedSelector(
    (state) => state.assets
  );
  const { types_and_services = [] }: any = assets;
  const assetsOptions = types_and_services?.map((option: any) => ({
    key: option.id,
    value: option.id ? option.id : 0,
    label: option.name,
  }));

  const authorsOptions = authors?.map((option: any) => ({
    key: option.author_id,
    value: option.author_fio,
    lable: option.author_fio.substring(0, 9) + "...",
  }));

  const { getAuthorData } = UseActions();
  // const [page, setPage] = React.useState(0);
  // const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [services, setServices] = React.useState(1);
  const [author, setAuthor] = React.useState(null);
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

  const getUserData = (data: any) => {
    history.push(`/counterparty/author/${data.id}`);
    getAuthorData(data);
  };

  const columns = [
    {
      title: () => <>&#x2116;</>, //todo Arsen change icon
      dataIndex: "id",
      width: "5%",
      render: (id: string) => <span style={{ color: "#3B4750" }}>{id}</span>,
    },
    {
      title: () => (
        <>
          Тип
          <div>
            <InputFilterSelectedType
              className={classes.input}
              handleChange={setServices}
              value={services}
              options={assetsOptions}
              placeholder="Другое"
              loading={assetsLoading}
            />
          </div>
        </>
      ),
      dataIndex: "typeName",
    },
    {
      title: () => (
        <>
          Наименование
          <InputFilterSearch className={classes.input} />
        </>
      ),
      dataIndex: "full_name",
      width: "15%",
    },
    {
      title: () => (
        <>
          Отрасль
          <InputFilterSearch className={classes.input} />
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
          <InputFilterSearch className={classes.input} />
        </>
      ),
      dataIndex: "group",
    },
    {
      title: () => (
        <>
          Ответственный
          <InputFilterSearch className={classes.input} />
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
          <div>
            <InputFilterSelectedType
              className={classes.input}
              handleChange={setAuthor}
              value={author}
              options={authorsOptions}
              loading={assetsLoading}
            />
          </div>
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
          <InputFilterDatePicker />
        </>
      ),
      dataIndex: "created_at",
      width: "15%",
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
      width: "15%",
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

  return loading ? (
    <Loader />
  ) : (
    <Paper className={classes.root}>
      <Table
        onRow={(record) => ({
          onClick: () => getUserData(record),
          style: {
            cursor: "pointer",
          },
        })}
        columns={columns}
        dataSource={data}
        pagination={false}
        scroll={{ y: window.innerHeight - 328 }}
        className={classes.table}
      />
    </Paper>
  );
}
