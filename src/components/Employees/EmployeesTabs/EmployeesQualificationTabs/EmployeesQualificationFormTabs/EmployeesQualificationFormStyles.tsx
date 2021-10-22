import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

export const useStylesEmployeeQualificationForm = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width:"100%",
            marginTop:16.5,
        },
        title:{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            marginBottom: 8.5,
        },
        paper: {
            padding:16,
            border:" 1px solid #3AB994",
            borderRadius:4
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
            alignItems:'flex-start',
            justifyContent:"flex-start",
            marginBottom:16,
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
            width:"50%",
        },
        typographyValue:{
            display:'flex',
            flexDirection:'column',
             width:"50%",
            textAlign:"left",
            fontSize: 16,
            color: '#3B4750'
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
              display:'flex',
             flexDirection: "row",
            fontSize: 16,
            fontWeight:500,
            color:'#3B4750',
            lineHeight:1.75,

        },
        btnSubmit: {
            textTransform: "none",
            textDecoration: "underline",
            boxShadow: "none",
        },
        addItem: {
            fontSize:14,
            fontWeight:400,
            cursor: "pointer",
            "&:hover": {
                textDecoration: "underline",
            }
        },
        inputData: {
            width: "60% !important",
        },
        input: {
            width: "100% !important",
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
        monthPiker:{width:91,
            height:30,
            paddingRight:4,
            paddingLeft:8,
            "& input": {
                fontSize: "16px !important",
                textAlign:"center"
            }
        },
    })
);
