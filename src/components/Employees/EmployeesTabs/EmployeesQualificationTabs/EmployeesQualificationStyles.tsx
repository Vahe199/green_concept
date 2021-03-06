import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

export const useStylesEmployeeQualification = makeStyles((theme: Theme) =>
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
            marginBottom: 8,
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
        divider: {
            marginTop:24,
            marginBottom: 24,
            height: 1,
            backgroundColor: '#ADB3B8',
            opacity: 0.5,
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

        }
    })
);
