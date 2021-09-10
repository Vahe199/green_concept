import * as CounterpartiesActionCreators from "./counterpartiesAC";
import * as NewContractorActionCreators from "./newContractorAC";
import * as AuthorListAC from "./authorListAC";
import * as TypesListAC from "./typesListAC";

export default {
  ...CounterpartiesActionCreators,
  ...NewContractorActionCreators,
  ...AuthorListAC,
};
