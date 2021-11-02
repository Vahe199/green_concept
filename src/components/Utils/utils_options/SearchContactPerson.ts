import React from "react";
import { contractorApi, employeesApi } from "../../../api/api";
import {useTypedSelector} from "../../../redux/type_redux_hook/useTypedSelector";

export const SearchContactPerson = () => {

  const {employeesData} = useTypedSelector(state => state.employees)
  const {employees=[]}:any = employeesData
  const [filterData, setFilterData] = React.useState<any>(employees);
  const fetchContactPerson = async () => {
    if(employees.length > 5) {
      await employeesApi
          .getEmployeesData()
          .then((response) => response)
          .then(({data}: any) => {
            const {employees} = data;
            setFilterData(employees);
          })
          .catch((error) => {
            console.error(error.response);
            setFilterData([]);
          });
    }
  };

  const searchOptions = filterData.map((option: any) => ({
    key: option.id,
    value: option.id,
    label: option.surname + " " + option.firstname + " " + option.middlename,
  }));
  const searchFilter = (text:string) => {

    if (text) {
      const newData = searchOptions.filter((item:any) => {
        const itemData = item.label ?
            item.label.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilterData(newData);
    } else {
      setFilterData(filterData);
    }
  }
  return { fetchContactPerson, searchOptions ,searchFilter};
};
