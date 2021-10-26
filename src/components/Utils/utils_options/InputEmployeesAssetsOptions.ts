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



    const assetsOptionsEmployeeStatuses = [{ id: 0, name: "Все" }, ...employee_statuses].map((option: any) => ({
        key: option.id,
        value: option.id ? option.id : 0,
        label: option.name,
    }));

    const assetsOptionsDirections = [{ id: 0, name: "Все" }, ...directions].map((option: any) => ({
        key: option.id,
        value: option.id ? option.id : 0,
        label: option.name,
    }));

    const assetsOptionsEducationTypes =  [{ id: 0, name: "Все" }, ...education_types].map((option: any) => ({
        key: option.id,
        value: option.id ? option.id : 0,
        label: option.name,
    }));
    const assetsOptionsCompanies =  [{ id: 0, name: "Все" }, ...companies].map((option: any) => ({
        key: option.id,
        value: option.id ? option.id : 0,
        label: option.name,
    }));
    const assetsOptionsEmployeePositions =  [{ id: 0, name: "Все" }, ...employee_positions].map(
        (option: any) => ({
            key: option.id,
            value: option.id ? option.id : 0,
            label: option.name,
        })
    );
     const assetsOptionsRegions =  [{ id: 0, name: "Все" }, ...regions].map((option: any) => ({
        key: option.id,
        value: option.id ? option.id : 0,
        label: option.name,
    }));

    return {
        assetsOptionsDirections, assetsOptionsEmployeeStatuses,assetsOptionsCompanies, assetsOptionsRegions, assetsOptionsEmployeePositions, assetsOptionsEducationTypes
    }
}

