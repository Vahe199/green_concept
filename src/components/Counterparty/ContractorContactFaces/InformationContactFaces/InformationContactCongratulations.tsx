import { Paper } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";
import { PencilSimpleIcon } from "../../../../IMG/SVG/PencilSimpleIcon";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginLeft: "4%",
      marginRight: "4%",
    },
    paper: {
      padding: 10,
      color: "#3B4750",
      boxShadow: "none",
    },
    label: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 8,
      fontSize: 16,
    },
    spanTitle: {
      fontSize: 16,
      fontWeight: 500,
    },
    btnSubmit: {
      textTransform: "none",
      textDecoration: "underline",
    },
  })
);
type InfoCongratulations = {
  // change: boolean;
  setChangeCongratulations: (val: boolean) => void;
};

export const InformationContactCongratulations: React.FC<InfoCongratulations> =
  ({ setChangeCongratulations }) => {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <span className={classes.spanTitle}>Сведения о поздравлениях</span>
          <span onClick={() => setChangeCongratulations(false)}>
            <PencilSimpleIcon color="#3B4750" />
          </span>
        </div>
        <Paper className={classes.paper}>
          <div className={classes.label}>
            <span className={classes.spanTitle}>Праздник</span>
            <span style={{ width: "60%" }}>Новый год</span>
          </div>
          <div className={classes.label}>
            <span className={classes.spanTitle}>Тип поздравления</span>
            <span style={{ width: "60%" }}>Открытка</span>
          </div>
          <div className={classes.label}>
            <span className={classes.spanTitle}> Другое</span>
            <span style={{ width: "60%" }}>Другое</span>
          </div>
        </Paper>
      </div>
    );
  };
