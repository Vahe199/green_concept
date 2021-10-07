import React from "react";
import {Paper} from "@material-ui/core";
import EmployeeInfoItem from "./EmployeesGeneralTabs/EmployeeInfoItem";
import EmployeeAboutItem from "./EmployeesGeneralTabs/EmployeeAboutItem";
import EmployeeGeneralInfoItem from "./EmployeesGeneralTabs/EmployeeGeneralInfoItem";



const EmployeesGeneralInformation:React.FC = () => {
    return(
        <div style={{display:'flex',flexWrap:"wrap",
            width:"100%", height:"100%",
            justifyContent:'space-between',
             backgroundColor:"#F2F3F4"
        }}>
            <div style={{width:'40%',marginLeft:32}}>
               <EmployeeInfoItem/>
               <EmployeeAboutItem/>
            </div>
            <div style={{width:'50%',marginRight:32}}>
               <EmployeeGeneralInfoItem/>
            </div>

        </div>
    )

}
export default EmployeesGeneralInformation;
