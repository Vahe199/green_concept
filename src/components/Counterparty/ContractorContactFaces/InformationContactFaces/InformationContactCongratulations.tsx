import React from "react";
import {
    Paper, Divider,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import pencil from "../../../../IMG/icons/pencil.png";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginLeft: "4%",
            marginRight: "4%",
        },
        paper: {
            padding: 10,
            color: "#3B4750",
        },
        label: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 8,
            fontSize: 12,
        },
        spanTitle:{
            fontSize: 16,
        },
        btnSubmit: {
            textTransform: "none",
            textDecoration: "underline",
        },
    })
);
type InfoCongratulations = {
    // change: boolean;
    setChangeCongratulations: (val: boolean) => void;
};

export const InformationContactCongratulations:React.FC<InfoCongratulations> = ({setChangeCongratulations}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center',marginBottom:10}}>
                    <span className={classes.spanTitle}>Сведения о поздравлениях</span>
                    <span onClick={()=>setChangeCongratulations(false)}>
                        <img src={pencil} style={{width:15,height:15}}/>
                    </span>
                </div>
                <Paper className={classes.paper}>
                    <div className={classes.label}>
                        <span className={classes.spanTitle}>Праздник</span>
                 <span style={{width:'60%'}}>
                     Новый год
                 </span>
                    </div>
                    <div className={classes.label}>
                        <span className={classes.spanTitle}>Тип поздравления</span>
                      <span style={{width:'60%'}}>
                           Открытка
                      </span>
                    </div>
                    <div className={classes.label}>
                        <span className={classes.spanTitle}> Другое</span>
                        <span style={{width:'60%'}}>
                           Другое
                        </span>
                    </div>
                    <Divider variant="middle" style={{margin:15}}/>
                </Paper>
        </div>
    );
};
