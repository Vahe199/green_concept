import * as CounterpartiesActionCreators from "./contractors_action_creatot/counterpartiesAC";
import * as NewContractorActionCreators from "./contractors_action_creatot/newContractorAC";
import * as AuthorListAC from "./contractors_action_creatot/authorListAC";
import * as ServicesTypesListAC from "./contractors_action_creatot/ServicesTypesListAC";
import * as AuthorDataAC from "./contractors_action_creatot/authorAC";
import * as ChangeAuthorGeneralDataAC from "./contractors_action_creatot/ChangeAuthorGeneralDataAC";
import * as AuthorCompanyDetailsData from "./contractors_action_creatot/ChangeAuthorCompanyDetailsDataAC";
import * as AuthorContactInfoData from "./contractors_action_creatot/ChangeAuthorContactInfoDataAC";
import * as AssetsListDataAC from "./contractors_action_creatot/AssetsListAC";
import * as AssetsEmployeesListDataAC from "./employees_action-creator/employees_assets_action_creator";
import * as RecoveryAuthorDataAC from "./contractors_action_creatot/recoveryAuthorDataState";
import * as ContractorBankDetailsDataAC from "./contractors_action_creatot/ContractorBankDetailsDataAC";
import * as ContractorGeneraDataAC from "./contractors_action_creatot/ContractorGeneralDataAC";
import * as ContractorContactAC from "./contractors_action_creatot/ContractorContactAC";
import * as EmployeesListAC from "./employees_action-creator/employees_action_creator";
import * as EmployeesListUpdateAC from "./employees_action-creator/employees_update_action_creator";

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
  ...ContractorContactAC,
  ...EmployeesListAC,
  ...EmployeesListUpdateAC,
  ...AssetsEmployeesListDataAC
};
