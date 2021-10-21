import {useTypedSelector} from "../../../redux/type_redux_hook/useTypedSelector";

export const InputEmployeesAssetsOptions = () => {
    const { employees_assets} = useTypedSelector(
        (state) => state.assets_employees
    );
    const {assets}:any = employees_assets
    const {
        companies, employee_positions, regions
    }: any = assets;
    const assetsOptionsCompanies =  companies?.map((option: any) => ({
        key: option.id,
        value: option.id ? option.id : 0,
        label: option.name,
    }));
    const assetsOptionsEmployeePositions = employee_positions?.map(
        (option: any) => ({
            key: option.id,
            value: option.id ? option.id : 0,
            label: option.name,
        })
    );
     const assetsOptionsRegions = regions?.map((option: any) => ({
        key: option.id,
        value: option.id ? option.id : 0,
        label: option.name,
    }));

    return {
        assetsOptionsCompanies, assetsOptionsRegions, assetsOptionsEmployeePositions
    }
}

