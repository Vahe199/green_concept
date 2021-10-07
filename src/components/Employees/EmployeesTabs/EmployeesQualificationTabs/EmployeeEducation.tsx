import React from "react";
import {Divider, Paper,Typography} from "@material-ui/core";
import {PencilSimpleIcon} from "../../../../IMG/SVG/PencilSimpleIcon";
import {useStylesEmployeeQualification} from "./EmployeesQualificationStyles";


const EmployeeEducation:React.FC = () => {
    let EducationState = [1,2,3]
    const classes = useStylesEmployeeQualification();
    return(
        <div className={classes.root}>
            <div className={classes.title} >
                <Typography  className={classes.typographyTitle}>
                    Образование
                </Typography>
                <div onClick={() => console.log('true 11')}>
                    <PencilSimpleIcon color="#3B4750" />
                </div>
            </div>
            <Paper className={classes.paper}>
                <div className={classes.row}>
                    <div style={{width:"100%"}}>
                        <div className={classes.column}>
                            <Typography className={classes.typographyTitle}>
                                Стаж работы по специальности
                            </Typography>
                            <Typography className={classes.typographyValue}>
                                12 лет 11 месяцев
                            </Typography>
                        </div>
                        {EducationState.map(educ =><div>
                            <Divider variant="middle" style={{marginBottom: 24, marginTop: 24}}/>
                            <div className={classes.column}>
                                <Typography className={classes.typographyTitle}>
                                    Образование:
                                </Typography>
                                <Typography className={classes.typographyValue}>
                                    Высшее
                                </Typography>
                            </div>
                            <div className={classes.column}>
                                <Typography className={classes.typographyTitle}>
                                    Наименование учебного заведения:
                                </Typography>
                                <Typography className={classes.typographyValue}>
                                    Новосибирская государственная архитектурно-художественная академия
                                </Typography>
                            </div>
                            <div className={classes.column}>
                                <Typography className={classes.typographyTitle}>
                                    Документ об образовании:
                                </Typography>
                                <Typography className={classes.typographyValue}>
                                    Диплом ДВС , регистрационный номер от 24.06.2003
                                </Typography>
                            </div>
                            <div className={classes.column}>
                                <Typography className={classes.typographyTitle}>
                                    Специальность:
                                </Typography>
                                <Typography className={classes.typographyValue}>
                                    Архитектор по специальности "Архитектура"
                                </Typography>
                            </div>
                            <div className={classes.column}>
                                <Typography className={classes.typographyTitle}>
                                    Дата окончания:
                                </Typography>
                                <Typography className={classes.typographyValue}>
                                    01.06.1994
                                </Typography>
                            </div>
                        </div>)}
                    </div>
                </div>
            </Paper>
        </div>
    )
}

export default EmployeeEducation;
