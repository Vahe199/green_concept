import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

export const useStylesEmployeeDevelopment = makeStyles((theme: Theme) =>
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
            padding:16
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
            marginBottom:16
        },
        avatar:{
            width:144,
            height:144,
            marginRight:44
        },
        typographyTitle:{
            fontSize: 15,
            fontWeight:500,
            color: '#3B4750',
            width:"54%",
        },
        typographyTitle1:{
            fontSize: 15,
            fontWeight:500,
            color: '#3B4750',
            width:"23%",
        },
        typographyValue:{
            display:'flex',
            flexDirection:'column',
            width:"54%",
            textAlign:"left",
            fontSize: 16,
            fontWeight:400,
            color: '#3B4750',
            textDecoration:'underline'
        },
        typographyValue1:{
            display:'flex',
            flexDirection:'column',
            width:"23%",
            textAlign:"left",
            fontSize: 15,
            fontWeight:400,
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
        btn:{
            color: "#fff",
            boxShadow: "none",
            outline: "none",
            height: 37,
            fontSize: 18,
            fontWeight:400,
            paddingBottom:2,
            paddingRight:16,
            paddingLeft:16,
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
        }
    })
);
