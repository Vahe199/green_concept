import React, { useState } from "react";
import BackToAddress from "../../Utils/BackToAddress";
import CreatEditBankAccount, {
  ContractorBankDetailType,
  initialBankDetails,
} from "../Forms/BankAccountForm/CreatEditBankAccount";
import { BankDetails } from "../TabsForCreating/BankDetails";

const CreatingBankDetails: React.FC = () => {
  const [edit, setEdit] = useState(true);
  const [contractorBankDetail, setContractorBankDetail] =
    useState<ContractorBankDetailType>(initialBankDetails);

  return (
    <div>
      <BackToAddress address="/counterparties" title="списку" />
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
