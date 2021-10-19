import React from "react";
import { Paper, Typography} from "@material-ui/core";
import {useStylesEmployee} from "./EmployeesStyles";
import {PencilSimpleIcon} from "../../../../IMG/SVG/PencilSimpleIcon";
import {useTypedSelector} from "../../../../redux/type_redux_hook/useTypedSelector";

type EmployeeAboutProps = {
    setEmployeeAboutData:(val:boolean)=>void
}
const EmployeeAboutItem:React.FC<EmployeeAboutProps> = ({setEmployeeAboutData}) => {
    const classes = useStylesEmployee();
    const {employeeById} = useTypedSelector(state => state.employees)
    const {employee}:any =employeeById;
    const {about}:any =employee;
    return(
        <div className={classes.root}style={{marginBottom:50}}>
            <div className={classes.title} >
                <Typography  className={classes.typographyTitle}>
                    О себе
                </Typography>
                <div onClick={() => setEmployeeAboutData(false)}>
                    <PencilSimpleIcon color="#3B4750" />
                </div>
            </div>
            <Paper elevation={0} className={classes.paper}>
                <Typography className={about ? classes.typographyText : classes.typographyTextPlaceholder}>
                    {about ? about : "Расскажите о себе"}
                </Typography>
            </Paper>
        </div>
    )
}

export default EmployeeAboutItem;
