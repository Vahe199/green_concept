import React, { useState } from "react";
import CreatEditBankAccount, {
  ContractorBankDetailType,
} from "../Forms/BankAccountForm/CreatEditBankAccount";
import { BankDetails } from "../TabsForCreating/BankDetails";

export const initialBankDetails = {
  bik: "",
  name: "",
  city: "",
  ks: "",
  rs: "",
  account_active: false,
  id: "",
};

const CreatingBankDetails: React.FC = () => {
  const [edit, setEdit] = useState(true);
  const [contractorBankDetail, setContractorBankDetail] =
    useState<ContractorBankDetailType>(initialBankDetails);

  return (
    <div>
      {edit ? (
        <BankDetails
          setEdit={setEdit}
          setContractorBankDetail={setContractorBankDetail}
        />
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <div style={{ width: "50%" }}>
            <CreatEditBankAccount
              setEdit={setEdit}
              contractorBankDetail={contractorBankDetail}
              setContractorBankDetail={setContractorBankDetail}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CreatingBankDetails;
