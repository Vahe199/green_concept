import React, { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import { MagnifyingGlass } from "../../../../IMG/SVG/MagnifyingGlass";
import InputFilterSearch from "../../../Utils/FilterInputs/InputFilterSearch";

import { useHistory } from "react-router-dom";
import InputFilterSelect from "../../../Utils/FilterInputs/InputFilterSelect";
import { SortingButtons } from "../../../../IMG/SVG/sortingButtonsIcon";
import { Divider, Table } from "antd";
import { useActions } from "../../../../redux/type_redux_hook/useAction";
import { useTypedSelector } from "../../../../redux/type_redux_hook/useTypedSelector";
import { useTableStyles } from "../EmployeesStyle/EmployeesTableStyles";
import { InputEmployeesAssetsOptions } from "../../../Utils/utils_options/InputEmployeesAssetsOptions";

type EmployeesType = {
  id: number;
  firstname: string;
  middlename: string;
  surname: string;
  company: any;
  region: any;
  directions: any[];
  position: any;
  phones: any[];
  status: any;
};

export default function EmployeesTable(props: any) {
  const { fetchEmployeeByIdtAC } = useActions();
  const {
    assetsOptionsCompanies,
    assetsOptionsRegions,
    assetsOptionsEmployeePositions,
    assetsOptionsEmployeeStatuses,
    assetsOptionsDirections,
  } = InputEmployeesAssetsOptions();

  const history = useHistory();

  const { employeesData, loading } = useTypedSelector(
    (state) => state.employees
  );
  const { employees }: any = employeesData;
  const classes = useTableStyles(loading)();


  const [filterField, setFilterField] = useState<any>({
    id: "",
    FIO: "",
    company: 0,
    region: 0,
    directions: 0,
    position: 0,
    status: 1,
  });

  const getUserData = (data: any) => {
    history.push(`/employee/author`);
    fetchEmployeeByIdtAC(data.id);
  };

  const employeeData = employees?.map(
    ({
      id,
      firstname,
      middlename,
      surname,
      region,
      directions,
      position,
      phones,
      status,
      company,
    }: EmployeesType) => {
      return {
        key: id,
        id,
        FIO: `${surname} ${firstname} ${middlename}`,
        company:company ? company : {},
        region:region ? region :{},
        directions:directions.length > 0 ? directions :[],
        position:position ? position :{},
        phones,
        status:status ? status :{},
      };
    }
  );

  const isInclude = (elem = "", item = "") => {
    return elem
      .toString()
      .toUpperCase()
      .includes(item.toString().toUpperCase());
  };

  const filterData = employeeData?.filter((item: any, index: any) => {
    let check = true;
    Object.entries(filterField).forEach((filter) => {
      const [key, value] = filter;
      const field = item[key];
      if (field) {
        if (!value) {
          check = !check ? false : true;

        } else if (Array.isArray(field)) {
          if (typeof value === "string" || typeof value === "number") {
            check = !check ? false : field?.some((el: any) => el.id == +value);
          }
        } else if (typeof field === "object") {
          check = !check ? false : field?.id === value;
        } else {
          check = !check ? false : isInclude(field, `${value}`);
        }
      } else {
        check = false;
      }
    });

    return check;
  });

  const columns = [
    {
      title: () => (
        <>
          <span className={classes.titleText}>ID</span>
          <div>
            <InputFilterSearch
              handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const { value } = e.target;
                setFilterField({ ...filterField, id: value });
              }}
              value={filterField.id}
              className={classes.input}
            />
          </div>
        </>
      ),
      dataIndex: "id",
      width: 148,
      render: (id: number) => <span style={{ color: "#3B4750" }}>{id}</span>,
    },
    {
      title: () => (
        <>
          <div style={{ display: "flex" }}>
            <span className={classes.titleText}>Фамилия Имя Отчество</span>
            <span style={{ position: "absolute", right: 8, top: 8 }}>
              <SortingButtons color="#5B6770" />
            </span>
          </div>

          <InputFilterSearch
            handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const { value } = e.target;
              setFilterField({ ...filterField, FIO: value });
            }}
            placeholder="Все"
            value={filterField.FIO}
            className={classes.input}
          />
        </>
      ),
      dataIndex: "FIO",
      width: 300,
      render: (FIO: string) => <span style={{ color: "#3B4750", fontSize: 15 }}>{FIO}</span>,
    },
    {
      title: () => (
        <>
          <span className={classes.titleText}>Компания трудоустройства</span>
          <InputFilterSelect
            options={assetsOptionsCompanies}
            filterOption={false}
            onSelect={(id: number) => {
              setFilterField({ ...filterField, company: id });
            }}
            notFoundContent={null}
            value={filterField.company}
            placeholder="Все"
            className={"searchMode " + classes.input}
            prefix={<MagnifyingGlass className={classes.icon} />}
            showSearch
          />
        </>
      ),
      dataIndex: "company",
      width: 289,
      render: (company: any) => (
        <span style={{ color: "#3B4750", fontSize: 15 }}>{company?.name}</span>
      ),
    },
    {
      title: () => (
        <>
          <span className={classes.titleText}>Регион</span>
          <InputFilterSelect
            options={assetsOptionsRegions}
            filterOption={false}
            onSelect={(id: number) => {
              setFilterField({ ...filterField, region: id });
            }}
            placeholder="Все"
            notFoundContent={null}
            value={filterField.region}
            className={"searchMode " + classes.input}
            prefix={<MagnifyingGlass className={classes.icon} />}
            showSearch
          />
        </>
      ),
      dataIndex: "region",
      width: 172,
      render: (region: any) => (
        <span style={{ color: "#3B4750", fontSize: 15 }}>{region?.name}</span>
      ),
    },
    {
      title: () => (
        <div style={{ minWidth: 125 }}>
          <span className={classes.titleText}>Направление</span>
          <InputFilterSelect
            options={assetsOptionsDirections}
            filterOption={false}
            onSelect={(id: number) => {
              setFilterField({ ...filterField, directions: id });
            }}
            notFoundContent={null}
            placeholder="Все"
            value={filterField.directions}
            className={"searchMode " + classes.input}
            prefix={<MagnifyingGlass className={classes.icon} />}
            showSearch
          />
        </div>
      ),
      width: 180,
      dataIndex: "directions",
      render: (directions: any[]) => {
        return directions?.map((direction: any) => {
          return <div key={direction.id} style={{ color: "#3B4750", fontSize: 15 }}>{direction?.name}</div>;
        });
      },
    },
    {
      title: () => (
        <>
          <span className={classes.titleText}>Должность</span>
          <InputFilterSelect
            options={assetsOptionsEmployeePositions}
            filterOption={false}
            onSelect={(id: number) => {
              setFilterField({ ...filterField, position: id });
            }}
            notFoundContent={null}
            value={filterField.position}
            placeholder="Все"
            className={"searchMode " + classes.input}
            prefix={<MagnifyingGlass className={classes.icon} />}
            showSearch
          />
        </>
      ),
      dataIndex: "position",
      width: 189,
      render: (position: any) => (
        <span style={{ color: "#3B4750", fontSize: 15 }}>{position?.name}</span>
      ),
    },
    {
      title: () => (
        <>
          <span className={classes.titleText}>Телефон</span>
          <div style={{ visibility: "hidden" }}>
            <InputFilterSelect className={"searchMode " + classes.input} />
          </div>
        </>
      ),
      dataIndex: "phones",
      width: 130,
      render: (phones: any[]) => {
        return phones?.map((phone: any) => {
          return <div key={phone?.id} style={{ color: "#3B4750", fontSize: 15 }}>{phone?.phone}</div>;
        });
      },
    },
    {
      title: () => (
        <>
          <span className={classes.titleText}>Статус</span>
          <InputFilterSelect
            options={assetsOptionsEmployeeStatuses}
            filterOption={false}
            // onSearch={}
            onSelect={(id: number) => {
              setFilterField({ ...filterField, status: id });
            }}
            notFoundContent={null}
            value={filterField.status}
            placeholder="Все"
            className={"searchMode " + classes.input}
            prefix={<MagnifyingGlass className={classes.icon} />}
            showSearch
          />
        </>
      ),
      dataIndex: "status",
      width: 154,
      render: (status: any) => (
        <span style={{ color: "#3B4750", fontSize: 15 }}>{status?.name}</span>
      ),
    },
  ];
  return (
    <Paper className={classes.root}>
      <div className={classes.titleWrapper}>
        <div>
          Найдено <span>{filterData?.length}</span> из{" "}
          <span>{employeeData?.length}</span>
        </div>
        <Divider style={
            {backgroundColor: '#ADB3B8',
                height: 1,
                opacity: 0.5
            }
        }/>
      </div>
      <Table
        onRow={(record) => ({
          onClick: () => getUserData(record),
        })}
        columns={columns}
        dataSource={filterData}
        pagination={false}
        scroll={{ y: window.innerHeight - 328 }}
        className={classes.table}
        loading={loading}
      />
    </Paper>
  );
}
