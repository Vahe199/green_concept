import { Button, Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import AddIcon from "@material-ui/icons/Add";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { XLSIcon } from "../../IMG/SVG/XLS";
import { UseActions } from "../../redux/type_redux_hook/ useAction";
import CounterpartiesTable from "./Core/Table";
import { useStyles } from "./Styles";
import ModalListOfContacts from "../Modals/ModalListOfContacts";

export const Counterparty = () => {
  const { fetchCounterpartiesList, fetchAuthorsList, getAssetsListData } =
    UseActions();
  //const [showModal, setShowModal] = React.useState(true); //TODO modal put here for testing
  const getData = async () => {
    await fetchCounterpartiesList();
    await fetchAuthorsList();
    await getAssetsListData();
  };
  useEffect(() => {
    getData();
  });
  let history = useHistory();
  const classes = useStyles();
  // const [value, setValue] = React.useState(0);

  // const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
  //   setValue(newValue);
  // };
  const handleClick = (path: string) => {
    history.push(`/counterparty/${path}`);
  };
  return  (
    <div className={classes.container}>
      <Paper square className={classes.root}>
        <Typography
          variant="subtitle1"
          noWrap
          className={classes.typography}
          style={{ fontSize: 23 }}
        >
          Контрагенты
        </Typography>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ display: "flex" }}>
            <Button
              onClick={() => handleClick("new contractor")}
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              className={classes.btn}
            >
              Новый контрагент
            </Button>
          </span>
          <div style={{ width: 525 }}>
            <Button
              onClick={() => handleClick("new contact")}
              variant="contained"
              startIcon={<AddIcon />}
              className={classes.button}
              style={{ width: 192 }}
            >
              Новый контакт
            </Button>
            <Button
              onClick={() => handleClick("all contact persons")}
              variant="contained"
              className={classes.button}
              style={{ width: 214, marginRight: 32, marginLeft: 30 }}
            >
              Все контактные лица
            </Button>

            <div
              style={{
                minWidth: 28,
                padding: 0,
                height: 29,
                marginRight: "1%",
                float: "right",
              }}
            >
              <XLSIcon color="#3AB993" />
            </div>
          </div>
        </div>
      </Paper>
      <div style={{ paddingLeft: "2%", paddingTop: "1%", paddingRight: "2%" }}>
        <CounterpartiesTable />
      </div>
    </div>
  );
};
