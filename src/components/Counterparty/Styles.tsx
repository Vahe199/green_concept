import { makeStyles } from "@material-ui/core/styles";

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
    margin: "-3px 0 0 0",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: "2%",
    paddingRight: "2%",
    paddingTop: 24,
    boxShadow: "none",
  },
  typography: {
    color: "#3B4750",
    fontSize: 20,
    marginBottom: 16,
  },
  btn: {
    color: "#fff",
    boxShadow: "none",
    outline: "none",
    fontSize: 18,
    fontWeight:400,
    paddingBottom: 4,
    backgroundColor: "#3AB994",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#36AD8B",
      boxShadow: "none",
    },
    "&:active": {
      backgroundColor: "#32A886",
    },
    "& .MuiButton-label": {
      marginTop: -3,
    },
  },
  button: {
    fontSize: 18,
    backgroundColor: "#F2F3F4",
    height: "37px",
    marginRight: "10px",
    padding: 0,
    fontWeight:400,
    paddingTop: 2,
    boxShadow: "none",
    color: "#3B4750",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#EBECED",
      boxShadow: "none",
    },
    "& .MuiButton-label": {
      marginTop: -3,
    },
  },
  icon: {
    width: 25,
  },
  noUnderline: {
    textDecoration: "none",
  },
});
