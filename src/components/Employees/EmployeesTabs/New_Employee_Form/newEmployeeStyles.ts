import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import NewEmployeesQualification from "./New_EmployeesQualification";

export const useStylesNewEmployee = makeStyles((theme: Theme) =>
    createStyles({

        container:{
            display:'flex',flexWrap:"wrap",
            width:"100%", height:"100%",
            justifyContent:'space-between',
            backgroundColor:"#F2F3F4"
        },
        containerQualification:{
            display:'flex',
            flexWrap:"wrap",
            width:"100%",
            height:"100%",
            justifyContent:'space-between',
            backgroundColor:"#F2F3F4"
        },

        root: {
            width:"100%",
            marginTop:12,
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

        },
        textArea: {
            marginBottom:50,
            border: "1px solid #3ab994",
            width: "100%",
            maxWait: "100%",
            borderRadius: 4,
            padding: 16,
            resize: 'vertical',
            fontSize:16
        },
        title:{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            marginBottom: 5,
            fontSize:16,
            fontWeight:400
        },
        paper: {
            border: "1px solid #3ab994",
            padding:16,
            marginBottom:16
        },
        row:{
            display:'flex',
            flexWrap:"wrap",
            alignItems:'start',
            justifyContent:"space-between"
        },
        column:{
            display:'flex',
            flexWrap:"wrap",
            alignItems:'center',
            justifyContent:"flex-start",
            marginBottom:16
        },
        fileInput:{
            backgroundColor:"#D6D9DC",
            width:144,
            height:144,
            marginRight:44,
            borderRadius:"50%",
            "&:hover": {
                backgroundColor: "#ADB3B8",
                boxShadow: "none",
            },
            "&:active": {
                backgroundColor: "#ADB3B8",
            },
        },
        fileInputAvatar:{
            width:144,
            height:144,
            // marginRight:44,
            borderRadius:"50%",
            "&:hover": {
                backgroundColor: "#ADB3B8",
                boxShadow: "none",
            },
            "&:active": {
                backgroundColor: "#ADB3B8",
            },
        },
        saveButton: {
            fontSize:16,
            textTransform: "none",
            textDecoration: "underline",
        },
        avatar:{
            width:144,
            height:144,
            marginRight:44
        },
        typographyTitle:{
            fontSize: 16,
            fontWeight:500,
            color: '#3B4750',
            width:"40%"
        },
        typographyValue:{
            display:'flex',
            flexDirection:'column',
            width:"60%",
            textAlign:"left",
            fontSize: 16,
            color: '#3B4750'
        },
        field:{
            height:27,
            border: '1px solid #ADB3B8',
            borderRadius: 4,
            paddingLeft:4,
            paddingTop:12,
            paddingRight:4,
            paddingBottom:12,
            "&:active": {
                border: '1px solid #fff',
            },
        },
        typographyText:{
            fontSize: 15,
            fontWeight: 400,
            color:'#3B4750',
            textAlign: "start"
            // height: 200,
            // overflow: 'hidden',
            // textOverflow:"ellipsis"
        },
        link:{
            fontSize:14,
            fontWeight:400,
            textDecoration:"underline"

        },
        input: {
            width: "60% !important",
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
        monthPiker:{
            width:91,
            height:30,
            paddingRight:4,
            paddingLeft:8,
            "& input": {
                fontSize: "16px !important",
                textAlign:"center"
            }
        },
        yearPiker:{
            width:52,
            height:30,
            marginRight:24,
            paddingRight:0,
            paddingLeft:4,
            "& input": {
                fontSize: "16px !important",
                textAlign:"center"
            }
        },
        inputData: {
            width: "60% !important",
        },
        addItem: {
            fontSize:14,
            fontWeight:400,
            cursor: "pointer",
            "&:hover": {
                textDecoration: "underline",
            }
        },
        typographyTitleEnh:{
            fontSize: 16,
            fontWeight:500,
            color: '#3B4750',
            width:"40%",
        },
        typographyValueEnh:{
            display:'flex',
            flexDirection:'column',
            width:"60%",
            textAlign:"left",
            fontSize: 16,
            color: '#3B4750'
        },
    })
);
