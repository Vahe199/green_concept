import * as CounterpartiesActionCreators from "./counterpartiesAC";
import * as NewContractorActionCreators from "./newContractorAC";
import * as AuthorListAC from "./authorListAC";
import * as ServicesTypesListAC from "./ServicesTypesListAC";
import * as AuthorDataAC from "./authorAC";
import * as ChangeAuthorGeneralDataAC from "./ChangeAuthorGeneralDataAC";
import * as AuthorCompanyDetailsData from "./ChangeAuthorCompanyDetailsDataAC";
import * as AuthorContactInfoData from "./ChangeAuthorContactInfoDataAC";
import * as AssetsListDataAC from "./AssetsListAC";
import * as RecoveryAuthorDataAC from "./recoveryAuthorDataState";
import * as ContractorBankDetailsDataAC from "./ContractorBankDetailsDataAC";
import * as ContractorGeneraDataAC from "./ContractorGeneralDataAC";

export default {
  ...CounterpartiesActionCreators,
  ...NewContractorActionCreators,
  ...AuthorListAC,
  ...ServicesTypesListAC,
  ...AuthorDataAC,
  ...ChangeAuthorGeneralDataAC,
  ...AuthorContactInfoData,
  ...AuthorCompanyDetailsData,
  ...AssetsListDataAC,
  ...RecoveryAuthorDataAC,
  ...ContractorBankDetailsDataAC,
  ...ContractorGeneraDataAC,
};
