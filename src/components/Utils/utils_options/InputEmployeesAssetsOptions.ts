import {useTypedSelector} from "../../../redux/type_redux_hook/useTypedSelector";

export const InputEmployeesAssetsOptions = () => {
    const assetsData = {
        companies:[], employee_positions:[], regions:[], education_types:[], directions:[], employee_statuses:[]
    }
    const { employees_assets} = useTypedSelector(
        (state) => state.assets_employees
    );
    const {assets}:any = employees_assets
    const {
        companies, employee_positions, regions, education_types, directions,employee_statuses
    }: any = assets ? assets : assetsData;

    debugger

    const assetsOptionsEmployeeStatuses = employee_statuses?.map((option: any) => ({
        key: option.id,
        value: option.id ? option.id : 0,
        label: option.name,
    }));

    const assetsOptionsDirections = directions?.map((option: any) => ({
        key: option.id,
        value: option.id ? option.id : 0,
        label: option.name,
    }));

    const assetsOptionsEducationTypes =  education_types?.map((option: any) => ({
        key: option.id,
        value: option.id ? option.id : 0,
        label: option.name,
    }));
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
        assetsOptionsDirections, assetsOptionsEmployeeStatuses,assetsOptionsCompanies, assetsOptionsRegions, assetsOptionsEmployeePositions, assetsOptionsEducationTypes
    }
}

