import {useTypedSelector} from "../../../../redux/type_redux_hook/useTypedSelector";

export const InputAssetsOptions = () => {
    const { assets,} = useTypedSelector(
        (state) => state.assets
    );
    const {
        crms,
        congratulation_types,
        branches,
        types_and_services,
        contact_roles,
        contact_statuses,
    }: any = assets;
    const assetsOptionsRoles = contact_roles?.map((option: any) => ({
        key: option.id,
        value: option.id ? option.id : 0,
        label: option.name,
    }));
    const assetsOptionsCounterpartyType = types_and_services?.map(
        (option: any) => ({
            key: option.id,
            value: option.id ? option.id : 0,
            label: option.name,
        })
    );
     const assetsOptionsBranches = branches?.map((option: any) => ({
        key: option.id,
        value: option.id ? option.id : 0,
        label: option.name,
    }));
     const assetsOptionsDirections = branches?.map((option: any) => ({
        key: option.id,
        value: option.id ? option.id : 0,
        label: option.name,
    }));
 const assetsOptionsCongratulation = congratulation_types?.map(
        (option: any) => ({
            key: option.id,
            value: option.id ? option.id : 0,
            label: option.name,
        })
    );
    const assetsOptionsStatus = contact_statuses?.map((option: any) => ({
        key: option.id,
        value: option.id ? option.id : 0,
        label: option.name,
    }));
    return {
        assetsOptionsStatus,  assetsOptionsRoles, assetsOptionsCounterpartyType,assetsOptionsBranches,assetsOptionsDirections,assetsOptionsCongratulation
    }
}

