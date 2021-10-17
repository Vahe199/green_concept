import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

export const useStylesBasicInformation = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: "4%",
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
                fontSize: 10,
            },
            "& .MuiLink-root": {
                fontSize: 14,
                marginTop: 16
            },
            "& .ant-select-selection-placeholder":{
                fontSize:16
            },
            "& .ant-select-selection-item":{
                fontSize:16,
                fontWeight:400
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
                paddingLeft: 7,
                textAlign: "start",
                height: "50px",
                backgroundColor: "transparent",
                fontSize: 16,
            },
            "& .MuiOutlinedInput-multiline": {
                padding: "7.5px 14px",
                fontSize:16
            },
        },
        paper: {
            padding: 16, //10
            color: "#3B4750",
            border: "1px solid #3ab994",
            boxShadow: "none",
        },
        spanTitle: {
            fontSize: 16,
            fontWeight: 500,
        },
        label: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 16,
            fontSize: 12,
        },
        input:{
            width: "60% !important"
        },
        addItemCRM: {
            fontSize:14,
            fontWeight:400,
            cursor: "pointer",
            "&:hover": {
                textDecoration: "underline",
            }
        },

    })
);

export const useStylesContactsFromGreen = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: "4%",
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
            "& .ant-select-selection-placeholder":{
                fontSize:16
            },
            "& .ant-select-selection-item":{
                fontSize:16,
                fontWeight:400
            },
        },
        textArea: {
            "& .MuiOutlinedInput-input": {
                textAlign: "start",
                height: "80px",
                backgroundColor: "transparent",
                fontSize: 16,
                paddingLeft: 0,
            },
            "& .MuiOutlinedInput-multiline": {
                padding: "7.5px 12px",
            },
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
        btnSubmit: {
            textTransform: "none",
            textDecoration: "underline",
            boxShadow: "none",
        },
        spanTitle: {
            fontSize: 16,
            fontWeight: 500,
        },

        addItem: {
            marginTop: 58, //70
            cursor: "pointer",
            textDecoration: "underline",
        },
        icon: {
            width: 18,
            height: 18,
            marginLeft: -1,
        },
        textAreas: {
            border: "1px solid #D6D9DC",
            height: 233,
            width: "100%",
            maxWait: "100%",
            borderRadius: 4,
            padding: 16,
            resize: 'vertical',
            fontSize:16,
            outline:"none",
            "&:focus":{
                border: "1px solid #3AB994 !important",
            },
        },
        addItemCRM: {
            fontSize:14,
            fontWeight:400,
            cursor: "pointer",
            "&:hover": {
                textDecoration: "underline",
            }
        },
    })
);
export const useStylesInformationCongratulations = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginLeft: "4%",
            marginRight: "4%",
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
                fontSize: 10,
            },
            "& .ant-select-selection-placeholder":{
                fontSize:16
            },
            "& .ant-select-selection-item":{
                fontSize:16,
                fontWeight:400
            },
        },
        paper: {
            padding: 16, //10 TODO
            color: "#3B4750",
            border: "1px solid #3ab994",
            boxShadow: "none",
            marginBottom: 50
        },
        label: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 16,
            fontSize: 16,
            fontWeight: 500,
        },
        spanTitle: {
            fontSize: 16,
            fontWeight: 500,
        },
        btnSubmit: {
            textTransform: "none",
            textDecoration: "underline",
        },
        addItemCRM: {
            fontSize:14,
            fontWeight:400,
            cursor: "pointer",
            "&:hover": {
                textDecoration: "underline",
            }
        },
    })
);
