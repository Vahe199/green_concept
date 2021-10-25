import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStylesGeneralInformation = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginLeft: "7%",
      // marginRight: "7%",
      "& .MuiTextField-root": {
        minWidth: "60%",
        height: "30px",
        backgroundColor: theme.palette.common.white,
      },
      "& .MuiOutlinedInput-input": {
        padding: 0,
        paddingLeft: 12,
        textAlign: "start",
        height: "30px",
        backgroundColor: "transparent",
        fontSize: 16,
      },
      "& .MuiFormHelperText-root": {
        fontSize: 9,
        marginTop: -2,
        marginLeft: 0,
      },
      "& .MuiFormControlLabel-root": {
        fontSize: 16,
      },
      "& .MuiOutlinedInput-adornedEnd ": {
        paddingRight: 0,
      },
      "& .ant-select-selection-placeholder": {
        fontSize: 16,
        fontWeight: 400,
      },
      "& .ant-select-selection-item": {
        fontSize: 16,
        fontWeight: 400,
      },
      "& .makeStyles-label": {},
    },
    paper: {
      padding: 16,
      color: "#3B4750",
      border: "1px solid #3ab994",
      boxShadow: "none",
    },
    label: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 16,
      fontSize: 16,
      fontWeight: 500,
    },
    NDASection: {
      marginTop: "-10px",
    },
    saveButton: {
      textTransform: "none",
      textDecoration: "underline",
    },
    addItemCRM: {
      fontSize: 14,
      fontWeight: 400,
      cursor: "pointer",
      "&:hover": {
        textDecoration: "underline",
      },
    },
    input: {
      marginBottom: 16,
    },
  })
);
export const useStylesCompanyDetails = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // marginRight: "5%",
      "& .MuiTextField-root": {
        minWidth: "60%",
        height: 30,
        backgroundColor: theme.palette.common.white,
      },
      "& .MuiOutlinedInput-input": {
        padding: 0,
        paddingLeft: 12,
        textAlign: "start",
        height: "30px",
        backgroundColor: "transparent",
        fontSize: 16,
      },
      "& .MuiFormHelperText-root": {
        fontSize: 9,
        marginTop: -2,
        marginLeft: 0,
      },
      "& .ant-select-selection-placeholder": {
        fontSize: 16,
        fontWeight: 400,
      },
      "& .ant-select-selection-item": {
        fontSize: 16,
        fontWeight: 400,
      },
    },
    textArea: {
      marginBottom: "6%",
      "& .MuiTextField-root": {
        minWidth: "60%",
        height: "50px",
        backgroundColor: theme.palette.common.white,
      },
      "& .MuiOutlinedInput-input": {
        padding: 0,
        textAlign: "start",
        height: "50px",
        backgroundColor: "transparent",
        fontSize: 16,
      },
      "& .MuiOutlinedInput-multiline": {
        padding: "7.5px 14px",
      },
    },
    paper: {
      padding: 16,
      color: "#3B4750",
      border: "1px solid #3ab994",
      boxShadow: "none",
    },
    label: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 16,
      fontWeight: 500,
      fontSize: 16,
    },
    label2: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      marginBottom: 16,
      fontWeight: 500,
      fontSize: 16,
    },
    addItem: {
      marginTop: 12,
      cursor: "pointer",
      textDecoration: "underline",
    },
    saveButton: {
      textTransform: "none",
      textDecoration: "underline",
    },
    addItemCRM: {
      fontSize: 14,
      fontWeight: 400,
      cursor: "pointer",
      "&:hover": {
        textDecoration: "underline",
      },
    },
    input: {
      marginBottom: 16,
    },
    input2: {
      fontSize: 16,
      "&::placeholder": {
        fontSize: 16,
        fontWeight: 400,
      },
    },
    searchWraper: {
      position: "relative",

      "& .ant-select-selection-search-input": {
        fontSize: 16,
        paddingLeft: 8,
      },
      "& .searchMode .ant-select-arrow": {
        display: "none",
      },
      "& .ant-select-selection-placeholder": {
        fontSize: 16,
        marginLeft: 18,
        fontWeight: 400,
      },
      "& .searchMode .ant-select-selection-search": {
        // top: 4,
        left: 24,

        "& .ant-select-selection-search-input": {
          fontSize: 16,
          paddingLeft: 6,
          fontWeight: 400,
        },
      },
      "& .searchMode .ant-select-selection-item": {
        top: 0,
        left: 15,
      },
      "& svg": {
        position: "absolute",
        left: 8,
        top: 8,
        zIndex: 4,
      },
    },
  })
);
export const useStylesCompanyContacts = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        minWidth: "60%",
        height: "30px",
        backgroundColor: theme.palette.common.white,
      },
      "& .MuiOutlinedInput-input": {
        padding: 0,
        paddingLeft: 12,
        textAlign: "start",
        height: "30px",
        backgroundColor: "transparent",
        fontSize: 16,
      },
      "& .MuiFormHelperText-root": {
        fontSize: 9,
        marginTop: -2,
        marginLeft: 0,
      },
      "& .MuiFormControlLabel-root": {
        fontSize: 16,
      },
      "& .ant-select-selection-placeholder": {
        fontSize: 16,
        fontWeight: 400,
      },
    },
    paper: {
      padding: 16,
      color: "#3B4750",
      border: "1px solid #3ab994",
      boxShadow: "none",
      marginBottom: 50,
    },
    label: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 16,
      fontWeight: 500,
      fontSize: 16,
    },
    addItem: {
      marginBottom: 8,
      cursor: "pointer",
    },
    saveButton: {
      textTransform: "none",
      textDecoration: "underline",
    },
    title: {
      fontSize: 16,
    },
    addItemCRM: {
      fontSize: 14,
      fontWeight: 400,
      cursor: "pointer",
      "&:hover": {
        textDecoration: "underline",
      },
    },
    input: {
      marginBottom: 16,
    },
    input2: {
      fontSize: 16,
      "&::placeholder": {
        fontSize: 16,
        fontWeight: 400,
      },
    },
  })
);
