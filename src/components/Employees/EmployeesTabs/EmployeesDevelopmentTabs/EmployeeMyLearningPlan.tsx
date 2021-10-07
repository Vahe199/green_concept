import React from "react";
import {Divider, Paper,Typography} from "@material-ui/core";
import {PencilSimpleIcon} from "../../../../IMG/SVG/PencilSimpleIcon";
import {useStylesEmployeeDevelopment} from "./EmployeesDevelopmentStyles";


const EmployeeMyLearningPlan:React.FC = () => {
    const classes = useStylesEmployeeDevelopment();
    return(
        <div className={classes.root}>
            <div className={classes.title} >
                <Typography  className={classes.typographyTitle}>
                    Мой план обучения
                </Typography>
            </div>
            <Paper className={classes.paper}>
                <div className={classes.row}>
                    <div style={{width:"100%"}}>
                        <div className={classes.column}>
                            <Typography className={classes.typographyTitle}>
                                Тренинг
                            </Typography>
                            <Typography className={classes.typographyTitle1}>
                                Статус документа
                            </Typography>
                            <Typography className={classes.typographyTitle1}>
                                Дата
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.typographyValue}>
                                Тренинг «Навыки переговоров»
                            </Typography>
                            <Typography className={classes.typographyValue1}>
                                Подана заявка
                            </Typography>
                            <Typography className={classes.typographyValue1}>
                                10.02.2015
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.typographyValue}>
                                Тренинг «Обратная связь» 1/ 2
                            </Typography>
                            <Typography className={classes.typographyValue1}>
                                Согласовано
                            </Typography>
                            <Typography className={classes.typographyValue1}>
                                15.05.2022-16.052022
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.typographyValue}>
                                Тренинг «Обратная связь» 2/ 2
                            </Typography>
                            <Typography className={classes.typographyValue1} style={{color:"#F31212"}} >
                                Отклонено
                            </Typography>
                            <Typography className={classes.typographyValue1}>
                                20.06.2018
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.typographyValue}>
                                Переаттестация
                            </Typography>
                            <Typography className={classes.typographyValue1} >
                                Подана заявка
                            </Typography>
                            <Typography className={classes.typographyValue1}>
                                20.06.2018
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.typographyValue}>
                                Разряд/ удостоверение ХХХ
                            </Typography>
                            <Typography className={classes.typographyValue1} >
                                Подана заявка
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

export default EmployeeMyLearningPlan;
