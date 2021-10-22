import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStylesContactPersons = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      "& .ant-modal-root": {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,

        "& .ant-modal-mask": {
          position: "absolute",
          backgroundColor: "rgba(214, 217, 220, 0.75)",

        },
          "& .ant-modal-wrap": {
              position: "absolute",
          },
          topDiv: {
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
        },
        val: {
            fontSize: 16,
            fontWeight: 500,
        },
        rightDivider: {
            marginLeft: "3%",
            marginTop: "1%",
            cursor: "pointer",
            width: "10%",
        },
        selectListItem: {
            marginLeft: "3%",
        },
        addListItem: {
            fontSize: 23,
            border: "none",
            background: "none",
            color: "#3AB994",
        },
        selectItem: {
            fontSize: 16,
            textDecoration: "underline",
        },
        icon: {
            width: 18,
            height: 18,
            marginLeft: -1,
        },
        flexInitial:{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
        },
        addItemCRM: {
            marginTop:-2,
            fontSize:14,
            fontWeight:400,
            cursor: "pointer",
            "&:hover": {
                textDecoration: "underline",
            }
        },
      },
    },

    root: {
      display: "flex",
      marginLeft: "2%",
      marginRight: "2%",
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
        marginLeft: 0,
      },
      "& .MuiFormControlLabel-root": {
        fontSize: 10,
      },
    },
    btn: {
      marginLeft: "2%",
      marginTop: 10,
      marginBottom: 10,
      color: "#fff",
      fontSize: 18,
      paddingBottom: 4,
      textTransform: "none",
      backgroundColor: "#3AB994",
      "&:hover": {
        backgroundColor: "#36AD8B",
      },
      "&:active": {
        backgroundColor: "#32A886",
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
        height: "40px",
        backgroundColor: "transparent",
        fontSize: 16,
      },
      "& .MuiOutlinedInput-multiline": {
        padding: "7.5px 12px",
      },
    },
    textAreas: {
      border: "1px solid #D6D9DC",
      height: 233,
      width: "100%",
      maxWait: "100%",
      borderRadius: 4,
      padding: "4px 12px",
      resize: "vertical",
      fontSize: 16,
      outline: "none",
      "&:focus": {
        border: "1px solid #3AB994 !important",
      },
        "&::placeholder":{
            color: '#ADB3B8',
            fontSize: "16px",
        }

    },
    paper: {
      padding: 16,
      marginBottom: "1%",
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

      "& .MuiFormHelperText-root.MuiFormHelperText-contained.Mui-error": {
        marginTop: -2,
      },
    },
    addItem: {
      marginLeft: "40%",
      textDecoration: "none",
      marginBottom: "2%",
      cursor: "pointer",
      fontSize: 14,
      "&:hover": {
        textDecoration: "underline",
      },
    },
    addContact: {
      textDecoration: "none",
      cursor: "pointer",
      fontSize: 14,
      "&:hover": {
        textDecoration: "underline",
      },
    },
    BasicInformation: {
      width: "52%",
      paddingRight: "2%",
    },
    ContactsFromGreen: {
      "& .MuiTextField-root": {
        minWidth: "60%",
        height: "30px",
        backgroundColor: theme.palette.common.white,
      },
    },
    rightPanel: {
      width: "57%",
    },
    statusText: {
      fontSize: 16,
      marginLeft: "-32px",
    },
    topDiv: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      alignItems: "center",
    },
    val: {
      fontSize: 16,
      fontWeight: 500,
        marginBottom: 8,
    },
    rightDivider: {
      marginLeft: "3%",
      marginTop: "1%",
      cursor: "pointer",
      width: "10%",
    },
    selectListItem: {
      marginLeft: "3%",
    },
    addListItem: {
      fontSize: 23,
      border: "none",
      background: "none",
      color: "#3AB994",
    },
    selectItem: {
      fontSize: 16,
      textDecoration: "underline",
    },
    icon: {
      width: 18,
      height: 18,
      marginLeft: -1,
    },
    flexInitial: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
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
      width: "60% !important",
        '&::placeholder': {
            fontSize: 16,
            fontWeight: 400,
        }
    },

      input2: {
        fontSize: 16,
          '&::placeholder': {
              fontSize: 16,
              fontWeight: 400,
          }
      },

      searchWraper: {
          position: "relative",

          "& .ant-select-selection-search-input": {
              fontSize:16,
              paddingLeft:8,
          },
          "& .searchMode .ant-select-arrow": {
              display: "none",
          },
          "& .ant-select-selection-placeholder":{
              fontSize:16,
              fontWeight:400,
              marginLeft:18,
          },
          "& .searchMode .ant-select-selection-search": {
              // top: 4,
              left: 24,

              "& .ant-select-selection-search-input": {
                  fontSize:16,
                  paddingLeft:8,
                  fontWeight:400,

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
