import React from "react";
import {Divider, Paper,Typography} from "@material-ui/core";
import {PencilSimpleIcon} from "../../../../IMG/SVG/PencilSimpleIcon";
import {useStylesEmployeeQualification} from "./EmployeesQualificationStyles";
import {useTypedSelector} from "../../../../redux/type_redux_hook/useTypedSelector";

type EmployeeEducationProps = {
    setEmployeeEducation:(val:boolean) =>void
}
const EmployeeEducation:React.FC<EmployeeEducationProps> = ({setEmployeeEducation}) => {
let employeeEduc = {educations:[{
        education_document: "",
        education_type_id: null,
        educational_institution_name: "",
        end_date: "",
        speciality: "",
        type: {name: ''}
    }]
}
    const {employeeById} = useTypedSelector(state => state.employees)
    const {employee}:any = employeeById;
    const {educations}:any = employee.educations.length > 0 ? employee : employeeEduc ;
    const classes = useStylesEmployeeQualification();

    return(
        <div className={classes.root}>
            <div className={classes.title} >
                <Typography  className={classes.typographyTitle}>
                    Образование
                </Typography>
                <div onClick={() => setEmployeeEducation(false)}>
                    <PencilSimpleIcon color="#3B4750" />
                </div>
            </div>
            <Paper elevation={0} className={classes.paper}>
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
                        {educations?.length >0 &&
                        educations?.map((educ:any) =><div>
                            {/*<Divider variant="middle" style={{marginBottom: 24, marginTop: 24}}/>*/}
                            <div className={classes.divider}></div>
                            <div className={classes.column}>
                                <Typography className={classes.typographyTitle}>
                                    Образование:
                                </Typography>
                                <Typography className={classes.typographyValue}>
                                    {educ.type.name}
                                </Typography>
                            </div>
                            <div className={classes.column}>
                                <Typography className={classes.typographyTitle}>
                                    Наименование учебного заведения:
                                </Typography>
                                <Typography className={classes.typographyValue}>
                                    {educ.educational_institution_name}
                                </Typography>
                            </div>
                            <div className={classes.column}>
                                <Typography className={classes.typographyTitle}>
                                    Документ об образовании:
                                </Typography>
                                <Typography className={classes.typographyValue}>
                                    {educ.education_document}
                                </Typography>
                            </div>
                            <div className={classes.column}>
                                <Typography className={classes.typographyTitle}>
                                    Специальность:
                                </Typography>
                                <Typography className={classes.typographyValue}>
                                    {educ.speciality}
                                </Typography>
                            </div>
                            <div className={classes.column}>
                                <Typography className={classes.typographyTitle}>
                                    Дата окончания:
                                </Typography>
                                <Typography className={classes.typographyValue}>
                                    {educ.end_date}
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
