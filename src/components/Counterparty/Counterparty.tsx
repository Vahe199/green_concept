import React from "react";
import Paper from "@material-ui/core/Paper";
import AddIcon from "@material-ui/icons/Add";
import XLS from "../../IMG/icons/XLS.png";
import { useHistory } from "react-router-dom";
import { Button, Typography } from "@material-ui/core";
import CounterpartiesTable from "./Core/Table";
import { useStyles } from "./Styles";

export const Counterparty = () => {
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
          <span>
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
            <Button
              variant="outlined"
              style={{ minWidth: 28, padding: 0, height: "30px" }}
            >
              <img src={XLS} className={classes.icon} />
            </Button>
          </span>
        </div>
      </Paper>
      <div style={{ paddingLeft: 16, paddingTop: 8, paddingRight: 10 }}>
        <CounterpartiesTable />
      </div>
    </div>
  );
};
