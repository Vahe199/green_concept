import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

export const useStyles = makeStyles({
  container: {
    height: "100%",
    minHeight: "100vh",
    width: "100%",
    paddingTop: 67,
    margin: 0,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: "#F2F3F4",
  },
  root: {
    flexGrow: 1,
    width: "100%",
    height: 125,
    margin: 0,
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: "2%",
    paddingRight: "2%",
    paddingTop: 24,
  },
  typography: {
    color: "#3B4750",
    fontSize: 20,
    marginBottom: 16,
  },
  btn: {
    color: "#fff",
    fontSize: 12,
    paddingBottom: 4,
    backgroundColor: "#3AB994",
    "&:hover": {
      backgroundColor: "#36AD8B",
    },
    "&:active": {
      backgroundColor: "#32A886",
    },
  },
  button: {
    fontSize: 12,
    backgroundColor: "#F2F3F4",
    width: "165px",
    height: "30px",
    marginRight: "10px",
    padding: 0,
    paddingTop: 2,
  },
  icon: {
    width: 25,
  },
  noUnderline: {
    textDecoration: "none",
  },
});
