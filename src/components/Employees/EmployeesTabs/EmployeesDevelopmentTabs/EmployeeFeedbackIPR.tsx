import React from "react";
import {Divider, Paper,Typography} from "@material-ui/core";
import {PencilSimpleIcon} from "../../../../IMG/SVG/PencilSimpleIcon";
import {useStylesEmployeeDevelopment} from "./EmployeesDevelopmentStyles";


const EmployeeFeedbackIPR:React.FC = () => {
    const classes = useStylesEmployeeDevelopment();
    return(
        <div className={classes.root} style={{marginBottom:50}}>
            <div className={classes.title} >
                <Typography  className={classes.typographyTitle}>
                    Обратная связь и ИПР
                </Typography>
            </div>
            <Paper elevation={0} className={classes.paper} >
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
                                Отчет 360 Обратная связь 2021
                            </Typography>
                            <Typography className={classes.typographyValue1}>

                            </Typography>
                            <Typography className={classes.typographyValue1}>
                                Отчет 360 Обратная связь 2021
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.typographyValue}>
                                Отчет 360 Обратная связь 2022
                            </Typography>
                            <Typography className={classes.typographyValue1}>

                            </Typography>
                            <Typography className={classes.typographyValue1}>
                                15.05.2015
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.typographyValue}>
                                Аттестация ХХХ
                            </Typography>
                            <Typography className={classes.typographyValue1}>
                                Пройдена
                            </Typography>
                            <Typography className={classes.typographyValue1}>
                                20.06.2018
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.typographyValue}>
                                Аттестация ХХХ
                            </Typography>
                            <Typography className={classes.typographyValue1} >
                                Запланирована
                            </Typography>
                            <Typography className={classes.typographyValue1}>
                                20.06.2022-20.07.2022
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.typographyValue}>
                                ИПР 2021
                            </Typography>
                            <Typography className={classes.typographyValue1} >
                                Согласовано
                            </Typography>
                            <Typography className={classes.typographyValue1}>
                                20.06.2018
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.typographyValue}>
                                ИПР 2022
                            </Typography>
                            <Typography className={classes.typographyValue1} >
                                Согласовано
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

export default EmployeeFeedbackIPR;
