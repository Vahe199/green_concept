import React from "react";
import EmployeeEducation from "./EmployeesQualificationTabs/EmployeeEducation";
import EmployeeSpecializedRegisters from "./EmployeesQualificationTabs/EmployeeSpecializedRegisters";
import EmployeeTraining from "./EmployeesQualificationTabs/EmployeeTraining";


const EmployeesQualification:React.FC = () => {
    return(
        <div style={{display:'flex',flexWrap:"wrap",
            width:"100%", height:"100%",
            justifyContent:'space-between',
             backgroundColor:"#F2F3F4"
        }}>
            <div style={{width:'48%',marginLeft:32}}>
              <EmployeeEducation/>
              <EmployeeSpecializedRegisters/>
            </div>
            <div style={{width:'45%',marginRight:32}}>
               <EmployeeTraining/>
            </div>

        </div>
    )

}
export default EmployeesQualification;
