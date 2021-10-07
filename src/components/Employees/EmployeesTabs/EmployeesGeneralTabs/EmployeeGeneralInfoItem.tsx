import React from "react";
import {Link, Paper, Typography} from "@material-ui/core";

import {useStylesEmployee} from "./EmployeesStyles";
import AddIcon from "@material-ui/icons/Add";


const EmployeeGeneralInfoItem:React.FC = () => {
    const classes = useStylesEmployee();
    return(
        <div className={classes.root}>
            <div className={classes.title} >
                <Typography  className={classes.typographyTitle}>
                    Общие сведения
                </Typography>
                <Link onClick={() => console.log('true 11')}
                  className={classes.link} >
                    <AddIcon /> &nbsp;   Принять на работу
                </Link>
            </div>
            <Paper className={classes.paper}>
                <div className={classes.row}>
                    <div style={{width:"100%"}}>
                        <div className={classes.column}>
                            <Typography className={classes.typographyTitle}>
                                Статус
                            </Typography>
                            <Typography className={classes.typographyValue}>
                                Уволен
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.typographyTitle}>
                                Регион:
                            </Typography>
                            <Typography className={classes.typographyValue}>
                                СПБ
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.typographyTitle}>
                                Компания трудоустройства
                            </Typography>
                            <Typography className={classes.typographyValue}>
                                ООО «Грин»
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.typographyTitle}>
                                Направление:
                            </Typography>
                            <Typography className={classes.typographyValue}>
                                Проектирование
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.typographyTitle}>
                                Категория (роль в системе)
                            </Typography>
                            <Typography className={classes.typographyValue}>
                                Руководитель непроизводственного подразделения
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.typographyTitle}>
                                Должность:
                            </Typography>
                            <Typography className={classes.typographyValue}>
                                Главный инженер проекта
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.typographyTitle}>
                                Дата приема на работу:
                            </Typography>
                            <Typography className={classes.typographyValue}>
                                01.01.2018
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.typographyTitle}>
                                Дата увольнения:
                            </Typography>
                            <Typography className={classes.typographyValue}>
                                01.01.2021
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.typographyTitle}>
                                Стаж работы в компании
                            </Typography>
                            <Typography className={classes.typographyValue}>
                                3 года
                            </Typography>
                        </div>
                    </div>
                </div>
            </Paper>
        </div>
    )
}

export default EmployeeGeneralInfoItem;
