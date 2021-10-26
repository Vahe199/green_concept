import React from "react";
import {Divider, Link, Paper, Typography} from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";
import {useStylesEmployeeQualification} from "./EmployeesQualificationStyles";
import {PencilSimpleIcon} from "../../../../IMG/SVG/PencilSimpleIcon";
import {useTypedSelector} from "../../../../redux/type_redux_hook/useTypedSelector";

type TrainingProps = {
    setEmployeeTraining:(val:boolean)=>void
}

const EmployeeTraining:React.FC<TrainingProps> = ({setEmployeeTraining}) => {
    let EducationSkills= {skills:[{educational_institution_name:"",education_document:"",expire_date:""}]}
    const {employeeById} = useTypedSelector(state => state.employees)
    const {employee}:any =employeeById;
    const {skills}:any = employee.skills?.length > 0 ? employee : EducationSkills;

    const classes = useStylesEmployeeQualification();
    return(
        <div className={classes.root}>
            <div className={classes.title} >
                <Typography  className={classes.typographyTitle}>
                    Повышение квалификации
                </Typography>
                <div onClick={() => setEmployeeTraining(false)}>
                    <PencilSimpleIcon color="#3B4750" />
                </div>
            </div>
            <Paper elevation={0} className={classes.paper}>
                <div className={classes.row}>
                    <div style={{width:"100%"}}>
                        {skills?.length > 0 &&
                        skills?.map((skil:any,index:number) =><div>
                            {index != 0 && <Divider variant="middle" style={{marginBottom: 24, marginTop: 24}}/>}
                            <div className={classes.column}>
                                <Typography className={classes.typographyTitle}>
                                    Наименование учебного заведения:
                                </Typography>
                                <Typography className={classes.typographyValue}>
                                    {skil.educational_institution_name}
                                </Typography>
                            </div>
                            <div className={classes.column}>
                                <Typography className={classes.typographyTitle}>
                                    Документ:
                                </Typography>
                                <Typography className={classes.typographyValue}>
                                    {skil.education_document}
                                </Typography>
                            </div>
                            <div className={classes.column}>
                                <Typography className={classes.typographyTitle}>
                                    Срок действия документа:
                                </Typography>
                                <Typography className={classes.typographyValue}>
                                    {skil.expire_date}
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
