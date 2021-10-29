import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { GeneralInformationForCreating } from "../GeneralInformationForCreating";

export const useStylesGeneralInfo = makeStyles((theme: Theme) =>
  createStyles({
    textArea: {
      marginBottom: "2%",
      width: "100%",
      "& .MuiOutlinedInput-multiline": {
        padding: 1,
      },
    },
    textAreaCN: {
      marginBottom: 30,

      width: "100%",
      "& .MuiOutlinedInput-inputMultiline": {
        height: "50px !important",
      },

      "& .MuiOutlinedInput-multiline": {
        paddingBottom: 4,
        paddingTop: 4,
        paddingLeft: 0,
        paddingRight: 0,
      },
    },
    btn: {
      marginLeft: "2%",
      marginTop: 10,
      marginBottom: 10,
      fontSize: 18,
      color: "#fff",
      paddingBottom: 4,
      backgroundColor: "#3AB994",
      boxShadow: "none",
      textTransform: "none",
      "&:hover": {
        backgroundColor: "#36AD8B",
        boxShadow: "none",
      },
      "&:active": {
        backgroundColor: "#32A886",
      },
    },
    root: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginRight: "2%",
      width: "100%",
      height: "20%",
      "& .MuiTextField-root": {
        minWidth: "60%",
        height: "30px",
        backgroundColor: "white",
      },
      "& .MuiOutlinedInput-input": {
        padding: 0,
        paddingLeft: 12,
        textAlign: "start",
        height: 30,
        backgroundColor: "transparent",
        fontSize: 16,
      },
      "& .MuiFormHelperText-root": {
        fontSize: 9,
        marginTop: -2,
        marginLeft: 0,
      },
      "& .MuiFormControlLabel-root": {
        fontSize: 10,
      },
      "& .MuiTypography-body1": {
        width: "60%",
        maxWait: "60%",
      },
      "& .makeStyles-select-62 .ant-select-selector": {
        fontSize: 16,
        fontWeight: 400,
        height: "30px !important",
      },
      // "&  .ant-select .makeStyles-select-62  .ant-select-single .ant-select-show-arrow": {
      //    width:"80% !important",
      //     height:"30px !important"
      // },
    },
    addItem: {
      marginLeft: "40%",
      marginBottom: 8,
      cursor: "pointer",
      "&:hover": {
        textDecoration: "underline",
      },
    },
    addItemCRM: {
      fontSize: 14,
      fontWeight: 400,
      cursor: "pointer",
      textDecoration: "underline",
    },
    paper: {
      padding: 16,
      color: "#3B4750",
      border: "1px solid #3ab994",
      boxShadow: "none",
    },
    val: {
      fontSize: 16,
      fontWeight: 500,
    },
    label: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 16,
      fontSize: 16,
      fontWeight: 500,
    },
    label2: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      marginBottom: 16,
      fontSize: 16,
      fontWeight: 500,
    },
    contactsCompany: {
      marginTop: 8,
    },
    check: {
      marginLeft: "-1%",
      marginTop: -3,
    },
    checkText: {
      width: "53%",
      fontSize: 16,
      marginTop: 5,
      fontWeight: 500,
    },
    input: {
      fontSize: 16,
      "&::placeholder": {
        fontSize: 16,
        fontWeight: 400,
      },
    },
    inputMask: {
      "& input" : {
        fontSize: 16,
      }
    },
    searchWraper: {
      position: "relative",

      "& .ant-select-selection-search-input": {
        fontSize: 16,
        paddingLeft: 6,
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
