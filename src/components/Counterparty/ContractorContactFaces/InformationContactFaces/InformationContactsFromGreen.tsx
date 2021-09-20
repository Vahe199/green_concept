import React from "react";
import { useFormik } from "formik";

import {
    Paper,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import pencil from "../../../../IMG/icons/pencil.png";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin:'4%',
        },

        paper: {
            padding: 10,
            height: 270,
            color: "#3B4750",
        },
        label: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom:15,
            fontSize: 12,
        },
        spanTitle:{
            fontSize: 16,
        },
        addItem: {
            marginTop: 70,
            cursor: "pointer",
            textDecoration: "underline"
        },
    })
);
type InfoProps = {
    // change: boolean;
    setChangeContactsFromGreen: (val: boolean) => void;
};
export const InformationContactsFromGreen:React.FC<InfoProps> = ({setChangeContactsFromGreen}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
                <div
                    style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center',marginBottom:10}}
                >
                    <span className={classes.spanTitle}>
                        Контакты со стороны Грин
                    </span>
                    <span onClick={()=>setChangeContactsFromGreen(false)}>
                        <img src={pencil} style={{width:15,height:15}}/>
                    </span>
                </div>
                <Paper className={classes.paper}>
                    <div className={classes.label}>
                        <span className={classes.spanTitle}>
                            Направление
                        </span>
                      <span style={{width:'60%'}}>
                          Управление строительством
                      </span>
                    </div>
                    <div className={classes.label}>
                        <span className={classes.spanTitle}>Контактное лицо</span>
                        <samp style={{width:'60%'}}>
                            Петров Пётр Петрович
                        </samp>
                    </div>
                    <div className={classes.label}style={{alignItems:'self-start'}}>
                        <span className={classes.spanTitle}>Дополнительная информация</span>

                      <span style={{width:'60%'}}>
                         Дополнительная информация .Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях.
                      </span>
                    </div>
                </Paper>
        </div>
    );
};
