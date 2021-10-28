import React, {useState} from "react";
import EmployeeEducation from "./EmployeesQualificationTabs/EmployeeEducation";
import EmployeeSpecializedRegisters from "./EmployeesQualificationTabs/EmployeeSpecializedRegisters";
import EmployeeTraining from "./EmployeesQualificationTabs/EmployeeTraining";
import EmployeeEducationForm from "./EmployeesQualificationTabs/EmployeesQualificationFormTabs/EmployeeEducationForm";
import EmployeeSpecializedRegistersForm
    from "./EmployeesQualificationTabs/EmployeesQualificationFormTabs/EmployeeSpecializedRegistersForm";
import EmployeeTrainingForm from "./EmployeesQualificationTabs/EmployeesQualificationFormTabs/EmployeeTrainingForm";
import {useStylesNewEmployee} from "./New_Employee_Form/newEmployeeStyles";


const EmployeesQualification:React.FC = () => {
    const [employeeEducation, setEmployeeEducation] = useState<boolean>(true)
    const classes = useStylesNewEmployee()
    const [employeeSpecialized, setEmployeeSpecialized] = useState<boolean>(true)
    const [employeeTraining, setEmployeeTraining] = useState<boolean>(true)
    return(
        <div style={{display:'flex',flexWrap:"wrap",
            width:"100%", height:"100%",
            justifyContent:'space-between',
             backgroundColor:"#F2F3F4"
        }}>
            <div className={classes.block1}>
                {employeeEducation ? <EmployeeEducation setEmployeeEducation={setEmployeeEducation}/>
                   : <EmployeeEducationForm setEmployeeEducation={setEmployeeEducation}/>}

                {employeeSpecialized ?<EmployeeSpecializedRegisters setEmployeeSpecialized={setEmployeeSpecialized}/>
                   : <EmployeeSpecializedRegistersForm setEmployeeSpecialized={setEmployeeSpecialized}/>}
            </div>
            <div className={classes.block2}>
                {employeeTraining ?<EmployeeTraining setEmployeeTraining={setEmployeeTraining}/>
                   : <EmployeeTrainingForm setEmployeeTraining={setEmployeeTraining}/>}
            </div>

        </div>
    )

}
export default EmployeesQualification;
