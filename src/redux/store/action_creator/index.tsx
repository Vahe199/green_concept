import * as CounterpartiesActionCreators from "./counterpartiesAC";
import * as NewContractorActionCreators from "./newContractorAC";
import * as AuthorListAC from "./authorListAC";
import * as ServicesTypesListAC from "./ServicesTypesListAC";
import * as AuthorDataAC from "./authorAC";
import * as ChangeAuthorDataAC from "./authorDataChangeAC";
import * as AssetsListDataAC from "./AssetsListAC";
import * as RecoveryAuthorDataAC from "./recoveryAuthorDataState";

export default {
  ...CounterpartiesActionCreators,
  ...NewContractorActionCreators,
  ...AuthorListAC,
  ...ServicesTypesListAC,
  ...AuthorDataAC,
  ...ChangeAuthorDataAC,
  ...AssetsListDataAC,
  ...RecoveryAuthorDataAC
};
