import React from "react";
import { Paper, Typography} from "@material-ui/core";
import {PencilSimpleIcon} from "../../../../IMG/SVG/PencilSimpleIcon";
import {useStylesEmployeeQualification} from "./EmployeesQualificationStyles";


const EmployeeSpecializedRegisters:React.FC = () => {
    const classes = useStylesEmployeeQualification();
    return(
        <div className={classes.root}style={{marginBottom:50}}>
            <div className={classes.title} >
                <Typography  style={{fontSize: 16, fontWeight:500,
                    color: '#3B4750'}}>
                    Данные о включении в специализированные реестры
                </Typography>
                <div onClick={() => console.log('true 11')}>
                    <PencilSimpleIcon color="#3B4750" />
                </div>
            </div>
            <Paper elevation={0} className={classes.paper}>
                <div className={classes.row}>
                    <div style={{width: "100%"}}>

                        <div className={classes.column}>
                            <Typography className={classes.typographyTitle}>
                                Национальный реестр специалистов в области строительства:
                            </Typography>
                            <Typography className={classes.typographyValue}>
                                С-50-138749
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.typographyTitle}>
                                Национальный реестр специалистов в области инженерных изысканий и архитектурно-строительного проектирования:
                            </Typography>
                            <Typography className={classes.typographyValue}>
                                П-075251
                            </Typography>
                        </div>

                    </div>
                </div>
            </Paper>
        </div>
    )
}

export default EmployeeSpecializedRegisters;
