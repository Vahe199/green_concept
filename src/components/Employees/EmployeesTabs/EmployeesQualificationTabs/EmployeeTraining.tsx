import React from "react";
import {Divider, Link, Paper, Typography} from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";
import {useStylesEmployeeQualification} from "./EmployeesQualificationStyles";
import {PencilSimpleIcon} from "../../../../IMG/SVG/PencilSimpleIcon";


const EmployeeTraining:React.FC = () => {
    let EducationState = [1,2]
    const classes = useStylesEmployeeQualification();
    return(
        <div className={classes.root}>
            <div className={classes.title} >
                <Typography  className={classes.typographyTitle}>
                    Повышение квалификации
                </Typography>
                <div onClick={() => console.log('true 11')}>
                    <PencilSimpleIcon color="#3B4750" />
                </div>
            </div>
            <Paper className={classes.paper}>
                <div className={classes.row}>
                    <div style={{width:"100%"}}>
                        {EducationState.map((educ:any,index:number) =><div>
                            {index != 0 && <Divider variant="middle" style={{marginBottom: 24, marginTop: 24}}/>}
                            <div className={classes.column}>
                                <Typography className={classes.typographyTitle}>
                                    Наименование учебного заведения:
                                </Typography>
                                <Typography className={classes.typographyValue}>
                                    Санкт-Петербургское государственное бюджетное образовательное учреждение дополнительного профессионального образования "Санкт-Петербургский межрегиональный ресурсный центр", программа "Авторское право на произведения архитектуры и градостроительства"
                                </Typography>
                            </div>
                            <div className={classes.column}>
                                <Typography className={classes.typographyTitle}>
                                    Документ:
                                </Typography>
                                <Typography className={classes.typographyValue}>
                                    Удостоверение о повышении квалификации, регистрационный номер от 09.11.2017
                                </Typography>
                            </div>
                            <div className={classes.column}>
                                <Typography className={classes.typographyTitle}>
                                    Срок действия документа:
                                </Typography>
                                <Typography className={classes.typographyValue}>
                                    30.10.2021
                                </Typography>
                            </div>

                        </div>)}
                    </div>
                </div>
            </Paper>
        </div>
    )
}

export default EmployeeTraining;
