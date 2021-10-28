import React from "react";
import {Link, Paper, Typography} from "@material-ui/core";

import {useStylesEmployee} from "./EmployeesStyles";
import AddIcon from "@material-ui/icons/Add";
import {useTypedSelector} from "../../../../redux/type_redux_hook/useTypedSelector";
import {PencilSimpleIcon} from "../../../../IMG/SVG/PencilSimpleIcon";

type GeneralInfoProps = {
    setEmployeeGeneralInfo:(val:boolean)=>void
}

const EmployeeGeneralInfoItem:React.FC<GeneralInfoProps> = ({setEmployeeGeneralInfo}) => {
    const classes = useStylesEmployee();
    const {employeeById} = useTypedSelector(state => state.employees)
    let {employee}:any = employeeById
    let {status,region,company,directions,position,end_work_date ,start_work_date,experience_months,
        experience_years,}:any = employee;

    return(
        <div className={classes.root}>
            <div className={classes.title} >
                <Typography  className={classes.typographyTitle}>
                    Общие сведения
                </Typography>
                <div onClick={() => setEmployeeGeneralInfo(false)}>
                    <PencilSimpleIcon color="#3B4750" />
                </div>
            </div>
            <Paper elevation={0} className={classes.paper}>
                <div className={classes.row}>
                    <div style={{width:"100%"}}>
                        <div className={classes.column}>
                            <Typography className={classes.typographyTitle}>
                                Статус
                            </Typography>
                            <Typography className={classes.typographyValue}>
                                {status?.name}
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.typographyTitle}>
                                Регион:
                            </Typography>
                            <Typography className={classes.typographyValue}>
                                {region?.name}
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.typographyTitle}>
                                Компания трудоустройства
                            </Typography>
                            <Typography className={classes.typographyValue}>
                                {company.name}
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.typographyTitle}>
                                Направление:
                            </Typography>
                            <Typography className={classes.typographyValue}>
                                {directions?.map((direction:any)=>{
                                    return(
                                        <div key={direction.id}>{direction.name}</div>
                                    )
                                })}
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.typographyTitle}>
                                Категория (роль в системе)
                            </Typography>
                            <Typography className={classes.typographyValue}>
                                {position.name}
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.typographyTitle}>
                                Должность:
                            </Typography>
                            <Typography className={classes.typographyValue}>
                                {position?.name}
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.typographyTitle}>
                                Дата приема на работу:
                            </Typography>
                            <Typography className={classes.typographyValue}>
                                {start_work_date ? start_work_date.replaceAll("-",".") : ""}
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.typographyTitle}>
                                Дата увольнения:
                            </Typography>
                            <Typography className={classes.typographyValue}>
                                {end_work_date ? end_work_date.replaceAll("-",".") : ""}
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.typographyTitle}>
                                Стаж работы в компании
                            </Typography>
                            <Typography className={classes.typographyValue}>
                                {experience_years + " " + "г"  + " "
                                    +
                                experience_months + " " + "м" }
                            </Typography>
                        </div>
                    </div>
                </div>
            </Paper>
        </div>
    )
}

export default EmployeeGeneralInfoItem;
