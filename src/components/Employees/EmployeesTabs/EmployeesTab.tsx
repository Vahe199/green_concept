import { Button, Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import AddIcon from "@material-ui/icons/Add";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { XLSIcon } from "../../../IMG/SVG/XLS";

import Table from "./Core/EmployeesTable";
import { useStyles } from "./EmployeesStyle/EmployeesStyle";
import {useActions} from "../../../redux/type_redux_hook/useAction";

export const EmployeesTab = () => {
  const {getEmployeeAssetsAC,getEmployeeDataAC  } = useActions();
  //const [showModal, setShowModal] = React.useState(true); //TODO modal put here for testing
  const getData = () => {
      getEmployeeDataAC();
      getEmployeeAssetsAC();
  };
  useEffect(() => {
    getData();
  }, []);

  let history = useHistory();
  const classes = useStyles();
  // const [value, setValue] = React.useState(0);

  // const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
  //   setValue(newValue);
  // };
  const handleClick = (path: string) => {
    history.push(`/employee/${path}`);
  };
  return (
    <div className={classes.container}>
      <Paper square className={classes.root}>
        <Typography
          variant="subtitle1"
          noWrap
          className={classes.typography}
          style={{ fontSize: 23 }}
        >
          Сотрудники
        </Typography>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ display: "flex" }}>
            <Button
               onClick={() => handleClick("new-employee")}
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              className={classes.btn}
            >
              Добавить сотрудника
            </Button>
          </span>
          <div
              style={{
                minWidth: 28,
                padding: 0,
                height: 29,
                float: "right",
              }}
            >
              <XLSIcon color="#3AB993" />
            </div>
        </div>
      </Paper>
      <div style={{ paddingLeft: "2%", paddingTop: "1%", paddingRight: "2%" }}>
        <Table />
      </div>
    </div>
  );
};
