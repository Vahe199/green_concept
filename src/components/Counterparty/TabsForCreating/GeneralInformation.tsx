import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export const GeneralInformation = () => {
  const classes = useStyles();
  return <div className={classes.root}>General Information</div>;
};
