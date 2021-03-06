import Paper from "@material-ui/core/Paper";
import { Spin, Table } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
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

  const { fetchContactsList } = useActions();
  const { assetsOptionsStatus } = InputAssetsOptions();
  const history = useHistory();
  const { user } = useParams<any>();
  const { ContactList, loading } = useTypedSelector(
    (state) => state.contactPerson
  );
  const classes = useTableStyles(loading)();

  const { assets, load: assetsLoading } = useTypedSelector(
    (state) => state.assets
  );
  const { authors = [] } = useTypedSelector((state) => state.authorsList);
  const { contractors } = useTypedSelector((state) => state.counterparties);
  const { branches = [] }: any = assets;

  const { getContactPersonsDataWithId } = useActions();

  const [companyGroupFilterInital, setCompanyGroupFilterInital] = useState<any>(
    []
  );

  const [params, setParams] = useState<any>({
    "filter[contractors.contractor_id]": user ? user : "",
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
    getContactPersonsDataWithId(data.id);
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
          <span className={classes.titleText}>??????</span>
          {/*<div>*/}
          {/*  <InputFilterSelect*/}
          {/*    className={classes.input}*/}
          {/*    handleChange={(id: any) => {*/}
          {/*      setServices(id);*/}
          {/*      setParams({ ...params, "filter[fio]": id });*/}
          {/*    }}*/}
          {/*    value={services}*/}
          {/*    options={[{ key: "", value: "", label: "??????" }, ...assetsOptions]}*/}
          {/*    placeholder="??????"*/}
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
                  "filter[fio]": label === "??????" ? "" : label,
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
              placeholder="??????"
            />
          </div>
        </>
      ),
      dataIndex: "fio",
    },
    {
      title: () => (
        <>
          <span className={classes.titleText}>??????????????/?????? ??????????</span>
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
          <span className={classes.titleText}>????????????????????</span>
          <div className={classes.searchWraper}>
            <MagnifyingGlass className="searchIcon" />
            <InputFilterSelect
              options={getFilteredOptions({
                searchValue: contractor,
                array: contractors, // todo must be changed Arsen
                keyPath: "id",
                valuePath: "id",
                labelPath: "full_name",
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
              {branch.contractor?.full_name}
              {index < contractors.length - 1 ? ", " : " "}
            </span>
          );
        });
      },
    },
    {
      title: () => (
        <div style={{ minWidth: 125 }}>
          <span className={classes.titleText}>???????????? ????????????????</span>
          <div className={classes.searchWraper}>
            <MagnifyingGlass className="searchIcon" />
            <InputFilterSelect
              onSearch={setGroup}
              value={params["filter[parent_id]"]}
              options={getFilteredOptions({
                searchValue: group,
                array: contractors, // todo must be changed Arsen
                keyPath: "id",
                valuePath: "full_name",
                labelPath: "full_name",
              })}
              filterOption={false}
              onSelect={(id: number, { value }: any) => {
                setParams({
                  ...params,
                  "filter[contractors.contractor.group.full_name]": id,
                });

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
      dataIndex: "contractors",
      render: (contractors: any[]) => {
        return contractors?.map((branch: any, index: number) => {
          return (
            <span key={index}>
              {branch.contractor?.full_name}
              {index < contractors.length - 1 ? ", " : " "}
            </span>
          );
        });
      },
    },
    {
      title: () => (
        <>
          <span className={classes.titleText}>????????????</span>
          <InputFilterSelect
            className={classes.input}
            placeholder="??????"
            value={params["filter[status_id]"]}
            handleChange={(val: any) => {
              setParams({ ...params, "filter[status_id]": val }); // Todo Arsen, check backend field
            }}
            options={[
              { key: "", value: "", label: "??????" },
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
          <span className={classes.titleText}>?????????? ????????????</span>
          <div>
            <InputFilterSelect
              className={classes.input}
              placeholder="??????"
              value={params["filter[created_by]"]}
              handleChange={(val: any) => {
                setParams({ ...params, "filter[created_by]": val });
              }}
              options={[
                { key: "", value: "", label: "??????" },
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
            <span className={classes.titleText}>??????????????</span>
            <span style={{ position: "absolute", right: 8, top: 8 }}>
              <SortingButtons
                color="#5B6770"
                handleChange={(direction: "-" | "+") => {
                  setParams({
                    ...params,
                    sort: `${direction === "-" ? "-" : ""}created_at`,
                  });
                }}
              />
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
            <span className={classes.titleText}>??????????????????</span>
            <span style={{ position: "absolute", right: 8, top: 8 }}>
              <SortingButtons
                color="#5B6770"
                handleChange={(direction: "-" | "+") => {
                  setParams({
                    ...params,
                    sort: `${direction === "-" ? "-" : ""}updated_at`,
                  });
                }}
              />
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
    <Paper
      className={classes.root}
      style={{ marginLeft: "2%", marginRight: "2%", marginTop: 16 }}
    >
      <div className={classes.titleWrapper}>
        <div>
          <Button
            onClick={() => handleClick("new-contractor")}
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            className={classes.btn}
          >
            ?????????? ??????????????
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
