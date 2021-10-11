import React from "react";
import {Paper, Typography} from "@material-ui/core";
import {useStylesEmployeeDevelopment} from "./EmployeesDevelopmentStyles";


const EmployeeAdaptationCompulsory:React.FC = () => {

    const classes = useStylesEmployeeDevelopment();
    return(
        <div className={classes.root}>
            <div className={classes.title} >
                <Typography  className={classes.typographyTitle}>
                    Адаптация и обязательное обучение
                </Typography>
            </div>
            <Paper elevation={0} className={classes.paper}>
                <div className={classes.row}>
                    <div style={{width:"100%"}}>
                        <div className={classes.column}>
                            <Typography className={classes.typographyTitle}>
                                Документ
                            </Typography>
                            <Typography className={classes.typographyTitle1}>
                                Статус документа
                            </Typography>
                            <Typography className={classes.typographyTitle1}>
                                Дата завершения
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.typographyValue}>
                                План на испытательный срок
                            </Typography>
                            <Typography className={classes.typographyValue1}>
                                Согласовано
                            </Typography>
                            <Typography className={classes.typographyValue1}>
                                Согласовано
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.typographyValue}>
                                Отчет о прохождении испытательного срока
                            </Typography>
                            <Typography className={classes.typographyValue1}>
                                Согласовано
                            </Typography>
                            <Typography className={classes.typographyValue1}>
                                15.05.2015
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.typographyValue}>
                                Ссылка на Welcome Pack
                            </Typography>
                            <Typography className={classes.typographyValue1} style={{color:"#F31212"}}>
                                Отклонено
                            </Typography>
                            <Typography className={classes.typographyValue1}>
                                20.06.2018
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.typographyValue}>
                                Welcome Training общий
                            </Typography>
                            <Typography className={classes.typographyValue1} style={{color:"#F31212"}}>
                                Отклонено
                            </Typography>
                            <Typography className={classes.typographyValue1}>
                                20.06.2018
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.typographyValue}>
                                Welcome Training IT
                            </Typography>
                            <Typography className={classes.typographyValue1} style={{color:"#F31212"}}>
                                Отклонено
                            </Typography>
                            <Typography className={classes.typographyValue1}>
                                20.06.2018
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.typographyValue}>
                                Welcome Training Маркетинг
                            </Typography>
                            <Typography className={classes.typographyValue1} style={{color:"#F31212"}}>
                                Отклонено
                            </Typography>
                            <Typography className={classes.typographyValue1}>
                                20.06.2018
                            </Typography>
                        </div>

                    </div>
                </div>
            </Paper>
        </div>
    )
}

export default EmployeeAdaptationCompulsory;
