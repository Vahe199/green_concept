import React from "react";

import { Paper } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { PencilSimpleIcon } from "../../../../IMG/SVG/PencilSimpleIcon";
import {useTypedSelector} from "../../../../redux/type_redux_hook/useTypedSelector";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: "4%",
    },

    paper: {
      padding: 16, //10
      height: 270,
      color: "#3B4750",
      boxShadow: "none",
    },
    label: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 15,
      fontSize: 16,
    },
    spanTitle: {
      fontSize: 16,
      fontWeight: 500,
    },
    addItem: {
      marginTop: 70,
      cursor: "pointer",
      textDecoration: "underline",
    },
  })
);
type InfoProps = {
  // change: boolean;
  setChangeContactsFromGreen: (val: boolean) => void;
};
export const InformationContactsFromGreen: React.FC<InfoProps> = ({
  setChangeContactsFromGreen,
}) => {
  const classes = useStyles();
    const { contractor_contacts } = useTypedSelector((state) => state.contactPerson);
      const {employees } :any= contractor_contacts
    debugger
  return (
    <div className={classes.root}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 8,
        }}
      >
        <span className={classes.spanTitle}>Контакты со стороны GREEN</span>
        <span onClick={() => setChangeContactsFromGreen(false)}>
          <PencilSimpleIcon color="#3B4750" />
        </span>
      </div>
      <Paper className={classes.paper}>
          {employees.map((emp:any)=>(
              <div>
              <div className={classes.label}>
          <span className={classes.spanTitle}>Направление</span>
          <span style={{ width: "60%" }}>
              {emp.direction.name}
          </span>
        </div>
        <div className={classes.label}>
          <span className={classes.spanTitle}>Контактное лицо</span>
          <samp style={{ width: "60%" }}>
              {emp.employee.surname + " " + emp.employee.firstname + " " + emp.employee.middlename}</samp>
        </div>

              <div className={classes.label} style={{alignItems: "self-start"}}>
                  <span className={classes.spanTitle}>Дополнительная информация</span>

                  <span style={{width: "60%", maxHeight: 164, overflowY: "auto"}}>
        {emp.info}
          </span>
              </div>
              </div>))}
      </Paper>
    </div>
  );
};
