import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import moment from "moment";
import { MagnifyingGlass } from "../../../IMG/SVG/MagnifyingGlass";
import InputFilterSearch from "../Utils/FilterInputs/InputFilterSearch";

import { useTypedSelector } from "../../../redux/type_redux_hook/useTypedSelector";
import { useHistory } from "react-router-dom";
import { useActions } from "../../../redux/type_redux_hook/useAction";
import InputFilterSelect from "../Utils/FilterInputs/InputFilterSelect";
import InputFilterDatePicker from "../Utils/FilterInputs/InputFilterDatePicker";
import { SortingButtons } from "../../../IMG/SVG/sortingButtonsIcon";
import { Table } from "antd";


const useStyles = makeStyles({
  root: {
    width: "100%",
    color: "#3b475080",

    "& .ant-select": {
      height: "40px !important",
    },
    "& .ant-select-selection-item": {
      lineHeight: "36px !important",
    },
    "& .ant-select-selection-placeholder": {
      lineHeight: "36px !important",
    },
    "& .ant-picker": {
      height: "40px !important",
    },
  },
  table: {
    color: "#3B4750",
    fontSize: 15,
    borderRadius: "4px",
    overflow: "hidden",

    "& thead": {
      "& tr": {
        "& th": {
          alignItems: "flex-start",
          background: "#FFFFFF",
          "&::before": { display: "none" },
          minHeight: 104,
        },
      },
    },
    "& tbody": {
      "& tr": {
        cursor: "pointer",

        "&:nth-child(odd) ": {
          background: " #F2F3F4",
        },

        "&:nth-child(even) ": {
          background: " #FFFFFF",
        },
        "&:hover": {
          boxShadow:
              "0px 0px 12px rgba(51, 63, 79, 0.08), 0px 0px 2px rgba(51, 63, 79, 0.32)",
        },
        "&:active": {
          boxShadow: "0px 0px 6px 0px #333F4F3D inset",
        },
      },
    },
  },
    titleText: {
      fontsize: "15px",
    },
  input: {
    marginTop: 16,
  },
  icon: {
    fontSize: "16px",
  },
  searchWraper: {
    position: "relative",

    "& .searchMode .ant-select-arrow": {
      display: "none",
    },
    "& .searchMode .ant-select-selection-search": {
      top: 4,
      left: 24,
    },
    "& .searchMode .ant-select-selection-item": {
      top: 0,
      left: 15,
    },
    "& svg": {
      position: "absolute",
      left: 8,
      top: 28,
      zIndex: 4,
    },
  },
});

export default function CounterpartiesTable(props: any) {


  const { fetchCounterpartiesList } = useActions();

  const history = useHistory();
  const classes = useStyles();
  const { contractors, loading } = useTypedSelector(
      (state) => state.counterparties
  );
  const { authors: crms } = useTypedSelector((state) => state.authorsList);
  const { assets, load: assetsLoading } = useTypedSelector(
      (state) => state.assets
  );
  const { types_and_services = [], branches = [] }: any = assets;
  const assetsOptions = types_and_services?.map((option: any) => ({
    key: option.id,
    value: option.id ? option.id : 0,
    label: option.name,
  }));
  const crmsOptions = crms?.map((option: any) => ({
    key: option.author_id,
    value: option.author_id,
    label: option.author_fio,
  }));

  const { getAuthorData } = useActions();

  const [companyGroupFilterInital, setCompanyGroupFilterInital] = useState<any>(
      []
  );

  const [params, setParams] = useState<any>({
    include: "type,crms,branches,service,sites,emails,phones,author,group",
  });
  const [services, setServices] = useState("");
  const [fullName, setFullName] = useState("");
  const [branch, setBranch] = useState("");
  const [group, setGroup] = useState("");
  const [crm, setCrm] = useState("");
  const [createdAt, setCreatedAt] = useState<any>(null);
  const [updatedAt, setUpdatedAt] = useState<any>(null);

  //It's for change position arrow in select type


  const filteredBranches =
      branch.length === 0 || branch.length > 3
          ? branches.filter(({ name }: { name: string }) => name.includes(branch))
          : branches;

  const companyGroupFilter =
      group.length === 0 || group.length > 3
          ? companyGroupFilterInital.filter(
          ({ full_name }: { full_name: string }) => full_name.includes(group)
          )
          : companyGroupFilterInital;

  const getUserData = (data: any) => {
    history.push(`/counterparty/author/${data.id}`);
    getAuthorData(data.id);
  };

  const columns = [
    {
      title: () => (

        <div style={{ minHeight: 78, alignItems: "flex-start" }}>&#x2116;</div>

      ), //todo Arsen change icon
      dataIndex: "id",
      width: "5%",
      render: (id: string) => <span style={{ color: "#3B4750" }}>{id}</span>,
    },
    {
      title: () => (



        <>
            <span className={classes.titleText}>Тип</span>
          <div>
            <InputFilterSelect
              className={classes.input}
              handleChange={(id: any) => {
                setServices(id);
                setParams({ ...params, "filter[contractor_type_id]": id });
              }}
              value={services}
              options={assetsOptions}
              placeholder="Все"
              loading={assetsLoading}
            />
          </div>
        </>

      ),
      dataIndex: "typeName",
    },
    {
      title: () => (
          <>
              <span className={classes.titleText}>Наименование</span>
            <InputFilterSearch
                handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const { value } = e.target;
                  setFullName(value);
                  (value.length === 0 || value.length > 3) &&
                  setParams({ ...params, "filter[full_name]": value });
                }}
                value={fullName}
                className={classes.input}
            />
          </>
      ),
      dataIndex: "full_name",
      width: "15%",
    },
    {
      title: () => (
          <>
              <span className={classes.titleText}>Отрасль</span>
            <div className={classes.searchWraper}>
              <MagnifyingGlass className="searchIcon" />
              <InputFilterSelect
                  options={filteredBranches.map((option: any) => ({
                    key: option.id,
                    value: option.id,
                    label: option.name,
                  }))}
                  filterOption={false}
                  onSearch={setBranch}
                  onSelect={(id: number) => {
                    setParams({ ...params, "filter[branches.id]": id });
                  }}
                  notFoundContent={null}
                  value={params["filter[branches.id]"]}
                  className={"searchMode " + classes.input}
                  prefix={<MagnifyingGlass className={classes.icon} />}
                  showSearch
              />
            </div>
          </>
      ),
      dataIndex: "branches",
      width: "13%",
      render: (branches: any[]) => {
        return branches?.map((branch: any, index: number) => {
          return (
              <span key={index}>
              {branch.name}
                {index < branches.length - 1 ? ", " : " "}
            </span>
          );
        });
      },
    },
    {
      title: () => (
          <div style={{ minWidth: 125 }}>
              <span className={classes.titleText}>Группа компаний</span>
            <div className={classes.searchWraper}>
              <MagnifyingGlass className="searchIcon" />
              <InputFilterSelect
                  onSearch={setGroup}
                  value={params["filter[parent_id]"]}
                  options={companyGroupFilter.map((option: any) => ({
                    key: option.id,
                    value: option.id,
                    label: option.full_name,
                  }))}
                  filterOption={false}
                  onSelect={(id: number) => {
                    setParams({ ...params, "filter[parent_id]": id });
                  }}
                  notFoundContent={null}
                  className={"searchMode " + classes.input}
                  showSearch
              />
            </div>
          </div>
      ),
      dataIndex: "group",
    },
    {
      title: () => (
          <>
              <span className={classes.titleText}>Ответственный</span>
            <div className={classes.searchWraper}>
              <MagnifyingGlass className="searchIcon" />
              <InputFilterSelect
                  options={[].map((option: any) => ({
                    key: option.id,
                    value: option.id,
                    label: option.name,
                  }))}
                  filterOption={false}
                  onSelect={(id: number) => {
                    setParams({ ...params, "filter[created_by]": id });
                  }}
                  notFoundContent={null}
                  value={params["filter[created_by]"]}
                  className={"searchMode " + classes.input}
                  prefix={<MagnifyingGlass className={classes.icon} />}
                  loading={assetsLoading}
                  showSearch
              />
            </div>
          </>
      ),
      dataIndex: "crms",
      render: (crms: any[]) => {
        return crms?.map((crm: any, index: number) => {
          return (
              <span key={index}>
              {crm.firstname + " " + crm.surname && crm.surname}
                {index < crms.length - 1 ? ", " : " "}
            </span>
          );
        });
      },
    },
    {
      title: () => (
          <>
              <span className={classes.titleText}>Автор записи</span>
            <div>
              <InputFilterSelect
                  className={classes.input}
                  placeholder="Все"
                  value={crm}
                  handleChange={(val: any) => {
                    setCrm(val);
                    setParams({ ...params, "filter[created_by]": val }); // Todo Arsen, check backend field
                  }}
                  options={crmsOptions}
                  loading={assetsLoading}
              />
            </div>
          </>
      ),
      dataIndex: "author",
      render: (author: any = {}) => {
        const authorFullName = author
            ? `${author.surname} ${author.firstname?.substring(0, 1)}. `
            : "" + author.middlename
                ? `${author.middlename?.substring(0, 1)}.`
                : "";

        return authorFullName;
      },
    },
    {
      title: () => (
          <>
            <div style={{ display: "flex" }}>
              <span className={classes.titleText}>Создано</span>
              <span style={{ position: "absolute", right: 8, top: 8 }}>
              <SortingButtons color="#5B6770" />
            </span>
            </div>
            <InputFilterDatePicker
                placeholder="01.01.2020"
                value={createdAt ? moment(createdAt) : null}
                handleChange={(_: any, value: string) => {
                  setCreatedAt(value);
                  setParams({ ...params, "filter[created_at]": value });
                }}
                className={classes.input}
            />
          </>
      ),
      dataIndex: "created_at",
      width: "11%",
    },
    {
      title: () => (
          <>
            <div style={{ display: "flex" }}>
              <span className={classes.titleText}>Обновлено</span>
              <span style={{ position: "absolute", right: 8, top: 8 }}>
              <SortingButtons color="#5B6770" />
            </span>
            </div>
            <InputFilterDatePicker
                placeholder="01.01.2020"
                value={updatedAt ? moment(updatedAt) : null}
                handleChange={(_: any, value: string) => {
                  setUpdatedAt(value);
                  setParams({ ...params, "filter[updated_at]": value });
                }}
                className={classes.input}
            />
          </>
      ),
      dataIndex: "updated_at",
      width: "11%",
    },
  ];

  const data = contractors.map(
      ({
         id,
         type = {},
         full_name,
         branches,
         group,
         crms,
         author,
         created_at,
         updated_at,
       }) => {
        // console.log({
        //   key: id,
        //   id,
        //   typeName: type.name,
        //   full_name,
        //   branches,
        //   group,
        //   crms,
        //   author,
        //   created_at,
        //   updated_at,
        // });

        return {
          key: id,
          id,
          typeName: type.name,
          full_name,
          branches,
          group,
          crms,
          author,
          created_at,
          updated_at,
        };
      }
  );

  useEffect(() => {
    fetchCounterpartiesList({
      params,
    });
  }, [params]);

  useEffect(() => {
    !companyGroupFilterInital.length &&
    setCompanyGroupFilterInital(contractors);
  }, [contractors]);

  return (
      <Paper className={classes.root}>
        <Table
            onRow={(record) => ({
              onClick: () => getUserData(record),
            })}
            columns={columns}
            dataSource={data}
            pagination={false}
            scroll={{ y: window.innerHeight - 328 }}
            className={classes.table}
            loading={loading}
        />
      </Paper>
  );
}
