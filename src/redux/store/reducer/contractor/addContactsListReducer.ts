import {
    CategoriesAction,
    CategoriesActionType,
    CategoriesState,
} from "../../../types/new_contractor";
import {
    AddContactsListActionType,
    AddContactsStateList,
    ContractorContactDataAction
} from "../../../types/add_contacts_type_list";

const initialState: AddContactsStateList = {
    contacts: [],
    loading: false,
    error: null,
};

export const addContactsListReducer = (
    state = initialState,
    action: ContractorContactDataAction
): AddContactsStateList => {
    switch (action.type) {
        case AddContactsListActionType.ADD_CONTACTS_LIST_DATA:
            return { loading: true, error: null, contacts: [] };
        case AddContactsListActionType.ADD_CONTACTS_LIST_DATA_SUCCESS:
            return { loading: false, error: null, contacts: action.payload };
        case AddContactsListActionType.ADD_CONTACTS_LIST_DATA_ERROR:
            return { loading: false, error: action.payload, contacts: [] };
        default:
            return state;
    }
};
