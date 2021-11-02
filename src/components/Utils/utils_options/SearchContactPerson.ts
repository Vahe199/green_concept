import React from "react";
import { contractorApi, employeesApi } from "../../../api/api";
import {useTypedSelector} from "../../../redux/type_redux_hook/useTypedSelector";

export const SearchContactPerson = () => {

  const [searchQuery, setSearchQuery] = React.useState('');
  const {employeesData} = useTypedSelector(state => state.employees)
  const {employees=[]}:any = employeesData
  const [filterData, setFilterData] = React.useState<any>(employees);
  const fetchContactPerson = async () => {
    if(employees.length < 5) {
      await employeesApi
          .getEmployeesData()
          .then((response) => response)
          .then(({data}: any) => {
            setFilterData(data?.employees);
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
if(!text){
  setFilterData(employees);
}else if (text) {
      const newData = employees.filter((item:any) => {
        const itemData = item.surname ?
            item.surname.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      console.log(newData,"newData")
      setFilterData(newData);
      setSearchQuery(text)
    } else {
      setFilterData(employees);
      setSearchQuery(text)
    }
  }
  return { fetchContactPerson, searchOptions ,searchFilter};
};
