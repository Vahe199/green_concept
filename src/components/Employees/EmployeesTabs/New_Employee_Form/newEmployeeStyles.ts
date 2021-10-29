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
        blockMain: {
            width: "42%",
            marginLeft: 32,
            marginRight: "1%",
        },
        blockSecond: {
            width: "52%",
            marginRight: 32,
        },
        block1:{
            width:'864px',
            marginLeft:32,
            "@media (max-width: 1800px)": {
                width:'48%',
            }
        },
        block2:{
            width:'864px',
            marginRight:32,
            "@media (max-width: 1800px)": {
                width:'42%',
            }
        },
        block3: {
            width:'864px',
            "@media (max-width: 1800px)": {
                width:'100%',
            }
        },
        textArea: {
            // border: "1px solid #3ab994",
            width: "100%",
            maxWait: "100%",
            borderRadius: 4,
            padding: 16,
            resize: 'vertical',
            fontSize:16
        },
        textAreaDiv:{
            border: "1px solid #3ab994",
            // padding:1,
            marginBottom:50,
            borderRadius:4},
        title:{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            marginBottom: 8,
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
        divider: {
            marginTop:0,
            marginBottom: 16,
            height: 1,
            backgroundColor: '#ADB3B8',
            opacity: 0.5,
        },
        column:{
            display:'flex',
            flexWrap:"wrap",
            alignItems:'center',
            justifyContent:"flex-start",
            marginBottom:16
        },
        input2: {
            fontSize: 16,
            "&::placeholder": {
                fontSize: 16,
                fontWeight: 400,
            },
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
        typographyValue2:{
            display:'flex',
            flexDirection:'column',
            width:"40%",
            textAlign:"left",
            fontSize: 16,
            color: '#3B4750'
        },
        inputMask: {
            "& input" : {
                fontSize: 16,
            }
        },
        inputData: {
            width: "60% !important",
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
            textDecoration:"underline",
            cursor:"pointer"

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
        addItem: {
            fontSize:14,
            fontWeight:400,
            cursor: "pointer",
            textDecoration: "underline",
            
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
