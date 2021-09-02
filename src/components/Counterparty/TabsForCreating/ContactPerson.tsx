import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export const ContactPerson = () => {
  const classes = useStyles();
  return <div className={classes.root}>Contact Person</div>;
};
