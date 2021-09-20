import React, { useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import AddIcon from "@material-ui/icons/Add";
import { useHistory } from "react-router-dom";
import { Button, Typography } from "@material-ui/core";
import CounterpartiesTable from "./Core/Table";
import { useStyles } from "./Styles";
import { UseActions } from "../../redux/type_redux_hook/ useAction";
import { XLSIcon } from "../../IMG/SVG/XLS";
import { useTypedSelector } from "../../redux/type_redux_hook/useTypedSelector";
import Loader from "../Layout/Loader/Loader";

export const Counterparty = () => {
  const { fetchCounterpartiesList, fetchAuthorsList, getAssetsListData } =
    UseActions();
  useEffect(() => {
    fetchCounterpartiesList();
    fetchAuthorsList();
    getAssetsListData();
  }, []);
  let history = useHistory();
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  const handleClick = (path: string) => {
    history.push(`/counterparty/${path}`);
  };
  return (
    <div className={classes.container}>
      <Paper square className={classes.root}>
        <Typography variant="subtitle1" noWrap className={classes.typography}>
          Контрагенты
        </Typography>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            onClick={() => handleClick("new contractor")}
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            className={classes.btn}
          >
            Новый контрагент
          </Button>
          <span style={{ display: "flex" }}>
            <Button
              onClick={() => handleClick("new contact")}
              variant="contained"
              startIcon={<AddIcon />}
              className={classes.button}
            >
              Новый контакт
            </Button>
            <Button
              onClick={() => handleClick("all contact persons")}
              variant="contained"
              className={classes.button}
            >
              Все контактные лица
            </Button>

            <span
              style={{
                minWidth: 28,
                padding: 0,
                height: 29,
                width: 25,
              }}
            >
              <XLSIcon color="#3AB994" />
            </span>
          </span>
        </div>
      </Paper>
      <div style={{ paddingLeft: "2%", paddingTop: "1%", paddingRight: "2%" }}>
        <CounterpartiesTable />
      </div>
    </div>
  );
};
