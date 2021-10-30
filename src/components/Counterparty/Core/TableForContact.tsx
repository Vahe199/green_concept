import Paper from "@material-ui/core/Paper";
import { Spin, Table } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { MagnifyingGlass } from "../../../IMG/SVG/MagnifyingGlass";
import { SortingButtons } from "../../../IMG/SVG/sortingButtonsIcon";
import { useActions } from "../../../redux/type_redux_hook/useAction";
import { useTypedSelector } from "../../../redux/type_redux_hook/useTypedSelector";
import InputFilterDatePicker from "../../Utils/FilterInputs/InputFilterDatePicker";
import InputFilterSelect from "../../Utils/FilterInputs/InputFilterSelect";
import { InputAssetsOptions } from "../../Utils/utils_options/InputAssetsOptions";
import getFilteredOptions from "../../Utils/FilterInputs/getFilteredOptions";

import { useTableStyles } from "./useTableStyles";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

export default function TableForContact(props: any) {
  const { contractor_id }: { contractor_id: number } = props;
  console.log(contractor_id);

  const { fetchContactsList } = useActions();
  const { assetsOptionsStatus } = InputAssetsOptions();
  const history = useHistory();
  const { ContactList, loading } = useTypedSelector(
    (state) => state.contactPerson
  );
  const classes = useTableStyles(loading)();

  const { assets, load: assetsLoading } = useTypedSelector(
    (state) => state.assets
  );
  const { authors = [] } = useTypedSelector((state) => state.authorsList);
  const { branches = [] }: any = assets;

  const { fetchContractorContacts } = useActions();

  const [companyGroupFilterInital, setCompanyGroupFilterInital] = useState<any>(
    []
  );

  const [params, setParams] = useState<any>({
    "filter[contractors.contractor_id]": 102,
  });

  const [services, setServices] = useState("");
  const [fullName, setFullName] = useState("");
  const [branch, setBranch] = useState("");
  const [contractor, setContractor] = useState("");
  const [group, setGroup] = useState("");
  const [crm, setCrm] = useState("");
  const [createdAt, setCreatedAt] = useState<any>(null);
  const [updatedAt, setUpdatedAt] = useState<any>(null);

  const getUserData = (data: any) => {
    history.push(`/counterparty/author/contacts/${data.id}`);
    fetchContractorContacts(data.id);
  };

  const authorsOptions = authors?.map((option: any) => ({
    key: option.author_id,
    value: option.author_id,
    label: option.author_fio,
  }));

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
          <span className={classes.titleText}>ФИО</span>
          {/*<div>*/}
          {/*  <InputFilterSelect*/}
          {/*    className={classes.input}*/}
          {/*    handleChange={(id: any) => {*/}
          {/*      setServices(id);*/}
          {/*      setParams({ ...params, "filter[fio]": id });*/}
          {/*    }}*/}
          {/*    value={services}*/}
          {/*    options={[{ key: "", value: "", label: "Все" }, ...assetsOptions]}*/}
          {/*    placeholder="Все"*/}
          {/*    loading={assetsLoading}*/}
          {/*  />*/}
          {/*</div>*/}
          <div className={classes.searchWraper}>
            <MagnifyingGlass className="searchIcon" />
            <InputFilterSelect
              options={getFilteredOptions({
                searchValue: fullName,
                array: ContactList,
                keyPath: "id",
                valuePath: "fio",
                labelPath: "fio",
              })}
              filterOption={false}
              onSearch={setFullName}
              onSelect={(id: number, { value, label }: any) => {
                setParams({
                  ...params,
                  "filter[fio]": label === "Все" ? "" : label,
                });

                if (value === "") {
                  setFullName("");
                }
              }}
              notFoundContent={null}
              value={params["filter[fio]"]}
              className={"searchMode " + classes.input}
              prefix={<MagnifyingGlass className={classes.icon} />}
              showSearch
              placeholder="Все"
            />
          </div>
        </>
      ),
      dataIndex: "fio",
    },
    {
      title: () => (
        <>
          <span className={classes.titleText}>Отрасль/Тип услуг</span>
          <div className={classes.searchWraper}>
            <MagnifyingGlass className="searchIcon" />
            <InputFilterSelect
              options={getFilteredOptions({
                searchValue: branch,
                array: branches,
                keyPath: "id",
                valuePath: "id",
                labelPath: "name",
              })}
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
        <>
          <span className={classes.titleText}>Контрагент</span>
          <div className={classes.searchWraper}>
            <MagnifyingGlass className="searchIcon" />
            <InputFilterSelect
              options={getFilteredOptions({
                searchValue: contractor,
                array: branches, // todo must be changed Arsen
                keyPath: "id",
                valuePath: "id",
                labelPath: "name",
              })}
              filterOption={false}
              onSearch={setContractor}
              onSelect={(id: number, { value }: any) => {
                setParams({
                  ...params,
                  "filter[contractors.contractor_id]": id,
                });

                if (value === "") {
                  setContractor("");
                }
              }}
              notFoundContent={null}
              value={params["filter[contractors.contractor_id]"]}
              className={"searchMode " + classes.input}
              prefix={<MagnifyingGlass className={classes.icon} />}
              showSearch
            />
          </div>
        </>
      ),
      dataIndex: "contractors",
      width: "13%",
      render: (contractors: any[]) => {
        return contractors?.map((branch: any, index: number) => {
          return (
            <span key={index}>
              {branch.name}
              {index < contractors.length - 1 ? ", " : " "}
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
              options={getFilteredOptions({
                searchValue: group,
                array: companyGroupFilterInital,
                keyPath: "id",
                valuePath: "id",
                labelPath: "name",
              })}
              filterOption={false}
              onSelect={(id: number, { value }: any) => {
                setParams({ ...params, "filter[parent_id]": id });

                if (value === "") {
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
          <span className={classes.titleText}>Статус</span>
          <InputFilterSelect
            className={classes.input}
            placeholder="Все"
            value={params["filter[status_id]"]}
            handleChange={(val: any) => {
              setParams({ ...params, "filter[status_id]": val }); // Todo Arsen, check backend field
            }}
            options={[
              { key: "", value: "", label: "Все" },
              ...assetsOptionsStatus,
            ]}
            loading={assetsLoading}
          />
        </>
      ),
      dataIndex: "status",
      render: (status: any) => (
        <span style={{ color: "#3B4750" }}>{status.name}</span>
      ),
    },
    {
      title: () => (
        <>
          <span className={classes.titleText}>Автор записи</span>
          <div>
            <InputFilterSelect
              className={classes.input}
              placeholder="Все"
              value={params["filter[created_by]"]}
              handleChange={(val: any) => {
                setParams({ ...params, "filter[created_by]": val });
              }}
              options={[
                { key: "", value: "", label: "Все" },
                ...authorsOptions,
              ]}
              loading={assetsLoading}
            />
          </div>
        </>
      ),
      dataIndex: "author",
      render: (author: any = {}) => {
        const authorFullName = author
          ? `${author?.surname} ${author.firstname?.substring(0, 1)}. `
          : "" +
            `${author?.middlename ? author.middlename?.substring(0, 1) : ""}.`;

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
      render: (createdAt: any) => (
        <span style={{ color: "#3B4750" }}>
          {moment(createdAt).format("DD.MM.YYYY HH:mm:ss")}
        </span>
      ),
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
      render: (updatedAt: any) => (
        <span style={{ color: "#3B4750" }}>
          {moment(updatedAt).format("DD.MM.YYYY HH:mm:ss")}
        </span>
      ),
    },
  ];

  const data = ContactList.map(
    ({
      id,
      fio,
      service_type,
      contractors,
      branches,
      status,
      author,
      created_at,
      updated_at,
    }) => {
      return {
        key: id,
        id,
        fio,
        branches,
        service_type,
        contractors,
        status,
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
    fetchContactsList({ params: newParams });
  }, [params]);

  useEffect(() => {
    !companyGroupFilterInital.length &&
      setCompanyGroupFilterInital(ContactList);
  }, [ContactList]);
  const handleClick = (path: string) => {
    history.push(`/counterparty/${path}`);
  };
  return (
    <Paper className={classes.root} style={{ marginLeft: "2%",
        marginRight: "2%",
        marginTop:16}}>
      <div className={classes.titleWrapper}>
        <div>
          <Button
            onClick={() => handleClick("new-contractor")}
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            className={classes.btn}
          >
            Новый контакт
          </Button>
        </div>
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
