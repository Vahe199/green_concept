import React, {useState} from "react";
import EmployeeInfoItem from "./EmployeesGeneralTabs/EmployeeInfoItem";
import EmployeeAboutItem from "./EmployeesGeneralTabs/EmployeeAboutItem";
import EmployeeGeneralInfoItem from "./EmployeesGeneralTabs/EmployeeGeneralInfoItem";
import EmployeeInfoItemForm from "./EmployeesGeneralTabs/EmployeesGeneralFormTabs/EmployeeInfoItemForm";
import EmployeeAboutItemForm from "./EmployeesGeneralTabs/EmployeesGeneralFormTabs/EmployeeAboutItemForm";
import EmployeeGeneralInfoForm from "./EmployeesGeneralTabs/EmployeesGeneralFormTabs/EmployeeGeneralInfoForm";


const EmployeesGeneralInformation:React.FC = () => {
    const [employeeData, setEmployeeData] = useState<boolean>(true)
    const [employeeAboutData, setEmployeeAboutData] = useState<boolean>(true)
    const [employeeGeneralInfo, setEmployeeGeneralInfo] = useState<boolean>(true)
    return(
        <div style={{display:'flex',flexWrap:"wrap",
            width:"100%", height:"100%",
            justifyContent:'space-between',
             backgroundColor:"#F2F3F4"
        }}>
            <div style={{width:'45%',marginLeft:32}}>
                {employeeData ? <EmployeeInfoItem setEmployeeData={setEmployeeData}/>
                    :<EmployeeInfoItemForm setEmployeeData={setEmployeeData}/>}
                {employeeAboutData ? <EmployeeAboutItem setEmployeeAboutData={setEmployeeAboutData}/>
                    :<EmployeeAboutItemForm setEmployeeAboutData={setEmployeeAboutData}/>}
            </div>
            <div style={{width:'48%',marginRight:32}}>
                {employeeGeneralInfo ? <EmployeeGeneralInfoItem setEmployeeGeneralInfo={setEmployeeGeneralInfo}/>
                   : <EmployeeGeneralInfoForm setEmployeeGeneralInfo={setEmployeeGeneralInfo}/>}
            </div>

        </div>
    )

}
export default EmployeesGeneralInformation;
