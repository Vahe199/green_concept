import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import moment from "moment";
import { MagnifyingGlass } from "../../../IMG/SVG/MagnifyingGlass";
import InputFilterSearch from "../../Utils/FilterInputs/InputFilterSearch";

import { useTypedSelector } from "../../../redux/type_redux_hook/useTypedSelector";
import { useHistory } from "react-router-dom";
import { useActions } from "../../../redux/type_redux_hook/useAction";
import InputFilterSelect from "../../Utils/FilterInputs/InputFilterSelect";
import InputFilterDatePicker from "../../Utils/FilterInputs/InputFilterDatePicker";
import { SortingButtons } from "../../../IMG/SVG/sortingButtonsIcon";
import { Table, Divider, Spin } from "antd";
import { useTableStyles } from "./useTableStyles";

export default function CounterpartiesTable(props: any) {
  const { fetchCounterpartiesList } = useActions();

  const history = useHistory();
  const { contractors, loading } = useTypedSelector(
    (state) => state.counterparties
  );
  const classes = useTableStyles(loading)();

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

  // full name options
  const getFilteredFullNameOptions = () => {
    const filteredFullName =
      fullName.length > 3
        ? contractors.filter(({ full_name = "" }: { full_name: string }) =>
            full_name.includes(fullName)
          )
        : [];

    return (
      filteredFullName.length
        ? [{ id: -1, full_name: "Все" }, ...filteredFullName]
        : [{ id: -1, full_name: "Все" }]
    ).map((option: any) => ({
      key: option.id,
      value: option.full_name !== "Все" ? option.id : "",
      label: option.full_name,
    }));
  };

  // barnches options
  const getFilteredBranchesOptions = () => {
    const filteredBranches =
      branch.length > 3
        ? branches.filter(({ name }: { name: string }) => name.includes(branch))
        : [];

    return (
      filteredBranches.length
        ? [{ id: -1, name: "Все" }, ...filteredBranches]
        : []
    ).map((option: any) => ({
      key: option.id,
      value: option.id >= 0 ? option.id : "",
      label: option.name,
    }));
  };

  // company group options
  const getCompanyGroupFilterOptions = () => {
    const companyGroupFilter =
      group.length > 3
        ? companyGroupFilterInital.filter(
            ({ full_name }: { full_name: string }) => full_name.includes(group)
          )
        : [];

    return (
      companyGroupFilter.length
        ? [{ id: -1, name: "Все" }, ...companyGroupFilter]
        : []
    ).map((option: any) => ({
      key: option.id,
      value: option.id >= 0 ? option.id : "",
      label: option.full_name,
    }));
  };

  const getUserData = (data: any) => {
    history.push(`/counterparty/author/Общие сведения/${data.id}`);
    getAuthorData(data.id);
  };

  const columns = [
    {
      title: () => (
        <>
          <span className={classes.titleText}>&#x2116;</span>
          <div>
            <InputFilterSelect
              style={{ visibility: "hidden" }}
              className={classes.input}
            />
          </div>
        </>
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
              options={[{ key: "", value: "", label: "Все" }, ...assetsOptions]}
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
          <div className={classes.searchWraper}>
            <MagnifyingGlass className="searchIcon" />
            <InputFilterSelect
              options={getFilteredFullNameOptions()}
              filterOption={false}
              onSearch={setFullName}
              onSelect={(id: number, { value, label }: any) => {
                setParams({
                  ...params,
                  "filter[full_name]": label === "Все" ? "" : label,
                });

                if (value === "") {
                  setFullName("");
                }
              }}
              notFoundContent={null}
              value={params["filter[full_name]"]}
              className={"searchMode " + classes.input}
              prefix={<MagnifyingGlass className={classes.icon} />}
              showSearch
            />
          </div>
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
              options={getFilteredBranchesOptions()}
              filterOption={false}
              onSearch={setBranch}
              onSelect={(id: number, { value }: any) => {
                setParams({ ...params, "filter[branches.id]": id });

                if (value === "") {
                  setBranch("");
                }
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
              options={getCompanyGroupFilterOptions()}
              filterOption={false}
              onSelect={(id: number, { value }: any) => {
                setParams({ ...params, "filter[parent_id]": id });

                if (value === "") {
                  console.log(1111);

                  setGroup("");
                }
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
              value={""}
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
              options={[{ key: "", value: "", label: "Все" }, ...crmsOptions]}
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
            <span style={{ position: "absolute", right: 15, top: 8 }}>
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
            <span style={{ position: "absolute", right: 15, top: 8 }}>
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

  const tableProps = {
    columns: columns,
    scroll: { y: window.innerHeight - 328 },
    className: classes.table,
  };

  useEffect(() => {
    const newParams: any = {};
    Object.entries(params).forEach(([key, value]) => {
      if (value) {
        newParams[key] = value;
      }
    });

    fetchCounterpartiesList({ params: newParams });
  }, [params]);

  useEffect(() => {
    !companyGroupFilterInital.length &&
      setCompanyGroupFilterInital(contractors);
  }, [contractors]);

  return (
    <Paper className={classes.root}>
      <div className={classes.titleWrapper}>
        <div>
          Найдено <span>{data.length}</span> из <span>{data.length}</span>
        </div>
        <Divider style={
            {backgroundColor: '#ADB3B8',
                height: 1,
                opacity: 0.5
            }
        } />
      </div>
      <Table
        onRow={(record) => ({
          onClick: () => getUserData(record),
        })}
        dataSource={data}
        pagination={false}
        {...tableProps}
      />
      {loading ? <Spin className={classes.spinner} /> : null}
    </Paper>
  );
}
