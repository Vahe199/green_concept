import React from "react";
import EmployeeMyLearningPlan from "./EmployeesDevelopmentTabs/EmployeeMyLearningPlan";
import EmployeeUsefulLinks from "./EmployeesDevelopmentTabs/EmployeeUsefulLinks";
import EmployeeFeedbackIPR from "./EmployeesDevelopmentTabs/EmployeeFeedbackIPR";
import EmployeeAdaptationCompulsory from "./EmployeesDevelopmentTabs/EmployeeAdaptationCompulsory";


const EmployeesDevelopment:React.FC = () => {
    return(
        <div style={{display:'flex',flexWrap:"wrap",
            width:"100%", height:"100%",
            justifyContent:'space-between',
             backgroundColor:"#F2F3F4"
        }}>
            <div style={{width:'46%',marginLeft:32}}>
                <div style={{height:'43%'}}>
                <EmployeeAdaptationCompulsory/>
                </div>
               <EmployeeFeedbackIPR/>
            </div>
            <div style={{width:'46%',marginRight:32}}>
                <div style={{height:'43%'}}>
                <EmployeeUsefulLinks/>
                </div>
              <EmployeeMyLearningPlan/>
            </div>

        </div>
    )

}
export default EmployeesDevelopment;
