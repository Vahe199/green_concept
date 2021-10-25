import React, {useState} from "react";
import EmployeeInfoItemForm from "../EmployeesGeneralTabs/EmployeesGeneralFormTabs/EmployeeInfoItemForm";
import EmployeeGeneralInfoForm from "../EmployeesGeneralTabs/EmployeesGeneralFormTabs/EmployeeGeneralInfoForm";
import EmployeeAboutItemForm from "../EmployeesGeneralTabs/EmployeesGeneralFormTabs/EmployeeAboutItemForm";


const NewEmployeesGeneralInformation:React.FC = () => {
    const [employeeData, setEmployeeData] = useState<boolean>(true)
    console.log(employeeData,"employeeData")
    const [employeeAboutData, setEmployeeAboutData] = useState<boolean>(true)
    const [employeeGeneralInfo, setEmployeeGeneralInfo] = useState<boolean>(true)
    return(
        <div style={{display:'flex',flexWrap:"wrap",
            width:"100%", height:"100%",
            justifyContent:'space-between',
             backgroundColor:"#F2F3F4"
        }}>

            <div style={{width:'42%',marginLeft:32,marginRight:"1%"}}>
                    <EmployeeInfoItemForm setEmployeeData={setEmployeeData}/>

               <EmployeeAboutItemForm setEmployeeAboutData={setEmployeeAboutData}/>
            </div>
            <div style={{width:'52%',marginRight:32}}>
              <EmployeeGeneralInfoForm setEmployeeGeneralInfo={setEmployeeGeneralInfo}/>
            </div>

        </div>
    )

}
export default NewEmployeesGeneralInformation;
