import React from "react";
import {contractorApi} from "../../../../api/api";


export const SearchContactPerson = () => {

const [filterData,setFilterData] = React.useState<any>([])


    const fetchContactPerson = async () => {

            await contractorApi.searchContactPersonData()
                .then((response) => response)
                .then(({data}:any) => {
                    const {employees} = data;
                    setFilterData(employees)
                }).catch((error) => {
                    console.error(error.response)
                    setFilterData([])
                })
    }

    const searchOptions = filterData.map((option: any) => ({

        key: option.id,
        value: option.id,
        label: option.surname + " " + option.firstname + " " + option.middlename ,
    }))
    return {fetchContactPerson, searchOptions}
}
