import React, {useState} from "react";
import MainBankAccount from "../Forms/BankAccountForm/MainBankAccount";
import {BankDetails} from "../TabsForCreating/BankDetails";

const CreatingBankDetails:React.FC = () => {
    const [edit, setEdit] = useState(true)
    return(
        <div>{edit ? <BankDetails setEdit={setEdit}/>
        :<div style={{display:'flex',flexWrap:'wrap'}}>
            <div style={{width:'50%'}}>
                <MainBankAccount setEdit={setEdit}/>
            </div>
            <div style={{width:'50%'}}>
                <MainBankAccount setEdit={setEdit}/>
            </div>
            <div style={{width:'50%'}}>
                <MainBankAccount setEdit={setEdit}/>
            </div>
        </div>}
        </div>
    )
}

export default CreatingBankDetails;
