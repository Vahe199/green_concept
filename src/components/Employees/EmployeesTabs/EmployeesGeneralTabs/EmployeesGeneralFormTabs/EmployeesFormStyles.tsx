import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

export const useStylesEmployeeForm = makeStyles((theme: Theme) =>
    createStyles({
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
            border: "1px solid #3ab994",
            height: 238,
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
    })
);
