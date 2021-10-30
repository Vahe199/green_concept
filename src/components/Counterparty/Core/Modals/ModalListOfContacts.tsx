import { Divider, Radio } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Modal, Table, Spin } from "antd";
import React, { useEffect, useState } from "react";
import close from "../../../../IMG/icons/close.png";
import { MagnifyingGlass } from "../../../../IMG/SVG/MagnifyingGlass";
import { useActions } from "../../../../redux/type_redux_hook/useAction";
import { useTypedSelector } from "../../../../redux/type_redux_hook/useTypedSelector";
import InputFilterSearch from "../../../Utils/FilterInputs/InputFilterSearch";
import InputFilterSelect from "../../../Utils/FilterInputs/InputFilterSelect";
import get from "lodash/get";
import { COUNTERPARTY_TYPES_MAPPER } from "../../../Constants/counterparty";

const useStyles = (loading: boolean) =>
  makeStyles({
    root: {
      "&.ant-modal": {
        width: "max-content!important",
        minWidth: 1160,
        marginLeft: 32,
        top: 16,

        "& .ant-modal-body": {
          padding: 20,
        },

        "@media(max-width: 1400px)": {
          minWidth: "unset",
        },
      },
      "& .ant-select": {
        height: "40px !important",
      },
      "& .ant-select-selection-item": {
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
        ...(loading ? { visibility: "hidden" } : {}),
        minHeight: 320,

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

          "&.ant-table-row:hover > td": {
            background: "transparent",
          },
        },
      },
    },
    input: {
      marginTop: 16,
    },
    header: {
      // backgroundColor: "red",
      height: 200,
      width: "100%",
    },
    icon: {
      fontSize: "16px",
    },
    spinner: {
      position: "absolute",
      width: "100%",
      height: "300px",
      bottom: 0,
      top: "70%",
    },
    titleText: {
      fontsize: "16px",
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

export default function ModalListOfContacts(props: any) {
  const { attachedContact, onAttachedContact, onCancel, ...modalProps } = props;
  const [item ,setItem] = useState<number>()
  const { fetchContactsList } = useActions();
  const { ContactList, loading } = useTypedSelector(
    (state) => state.contactPerson
  );
  const { assets, load: assetsLoading } = useTypedSelector(
    (state) => state.assets
  );
const getContactItem = (id:number) => {
    setItem(id)
    const itemData = ContactList?.find((item:any) => item.id == id)
    onAttachedContact(itemData)
}
  const classes = useStyles(loading)();

  const [params, setParams] = useState<any>({});

  const [typeOfServices, setTypeOfServices] = useState();
  const [fullName, setFullName] = useState("");

  const { types_and_services = [], branches = [], crms = [] }: any = assets;

  const typesOptions = types_and_services?.map((option: any) => ({
    key: option.id,
    value: option.id ? option.id : 0,
    label: option.name,
  }));

  const serviceOptions = get(
    types_and_services,
    `${typeOfServices}.services`,
    []
  ).map((option: any) => ({
    key: option.id,
    value: option.id,
    label: option.name,
  }));

  // full name options
  const getFilteredFullNameOptions = () => {
    const filteredFullName =
      fullName.length > 3
        ? ContactList.filter(({ fio = "" }: { fio: string }) =>
            fio
              .toString()
              .toLocaleUpperCase()
              .includes(fullName.toString().toLocaleUpperCase())
          )
        : [];
    console.log(filteredFullName);

    return (
      filteredFullName.length
        ? [{ id: -1, fio: "Все" }, ...filteredFullName]
        : [{ id: -1, fio: "Все" }]
    ).map((option: any) => ({
      key: option.id,
      value: option.fio !== "Все" ? get(option, "contractors[0].id", "") : "",
      label: option.fio,
    }));
  };

  // branches options
  const getBranchesOptions = () => {
    return (branches.length ? [{ id: -1, name: "Все" }, ...branches] : []).map(
      (option: any) => ({
        key: option.id,
        value: option.id >= 0 ? option.id : "",
        label: option.name,
      })
    );
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
      ),
      dataIndex: "id",
      width: "5%",
    },
    {
      title: () => (
        <>
          ФИО
          <div className={classes.searchWraper}>
            <MagnifyingGlass className="searchIcon" />
            <InputFilterSelect
              options={getFilteredFullNameOptions()}
              filterOption={false}
              onSearch={setFullName}
              onSelect={(id: number, { value, label }: any) => {
                console.log(value, id);

                setParams({
                  ...params,
                  "filter[contractors.contractor_id]":
                    label === "Все" ? "" : value,
                });

                if (value === "") {
                  setFullName("");
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
      dataIndex: "name",
      render: (_: any, record: any) => (
        <span
          style={{
            color: "#3B4750",
            whiteSpace: "nowrap",
            textAlign: "center",
          }}
        >
          {`${record.surname} ${record.firstname} ${record.middlename}`}
        </span>
      ),
      width: "20%",
    },
    {
      title: () => (
        <>
          Отрасль
          <InputFilterSelect
            options={getBranchesOptions()}
            filterOption={false}
            onSelect={(id: number, { value }: any) => {
              setParams({ ...params, "filter[branches.id]": id });
            }}
            notFoundContent={null}
            value={params["filter[branches.id]"]}
            className={"searchMode " + classes.input}
            prefix={<MagnifyingGlass className={classes.icon} />}
            showSearch
          />
        </>
      ),
      dataIndex: "branches",
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
      width: "20%",
    },
    {
      title: () => (
        <>
          Тип контрагента
          <InputFilterSelect
            className={classes.input}
            handleChange={(id: any) => {
              setTypeOfServices(id);
              setParams({
                ...params,
                "filter[contractor_type_id]": id,
                "filter[service_type_id]": "",
              });
            }}
            value={params["filter[contractor_type_id]"]}
            options={[{ key: "", value: "", label: "Все" }, ...typesOptions]}
            placeholder="Другое"
            loading={assetsLoading}
          />
        </>
      ),
      dataIndex: "contractorType",
      render: (_: any, record: any) => (
        <span
          style={{
            color: "#3B4750",
            whiteSpace: "nowrap",
            textAlign: "center",
          }}
        >
          {get(COUNTERPARTY_TYPES_MAPPER, record.contractor_type_id, "")}
        </span>
      ),
    },
    {
      title: () => (
        <div style={{ minWidth: 125 }}>
          Тип услуг
          <InputFilterSelect
            className={classes.input}
            handleChange={(id: any) => {
              setParams({ ...params, "filter[service_type_id]": id });
            }}
            value={params["filter[service_type_id]"]}
            options={[{ key: "", value: "", label: "Все" }, ...serviceOptions]}
            placeholder="Другое"
            loading={assetsLoading}
          />
        </div>
      ),
      dataIndex: "service_type",
      render: (serviceType: { name: string }) => (
        <span
          style={{
            color: "#3B4750",
            whiteSpace: "nowrap",
            textAlign: "center",
          }}
        >
          {serviceType?.name}
        </span>
      ),
    },
    {
      title: () => (
        <>
          <div style={{ minHeight: 75, alignItems: "flex-start" }}>Выбрать</div>
        </>
      ),
      dataIndex: "id",
      render: (id: number) => (
        <Radio
          style={{ height: 24, width: 24, color: "#5B6770" }}
          checked={item === id}
        />
      ),
    },
  ];

  useEffect(() => {
    const newParams: any = {};
    Object.entries(params).forEach(([key, value]) => {
      if (value) {
        newParams[key] = value;
      }
    });
    if(ContactList.length < 5){
    fetchContactsList({ params: newParams });
   }

  }, [params]);

  return (
    <Modal {...modalProps} className={classes.root}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginRight: 16,
          marginLeft: 16,
        }}
      >
        <span style={{ fontSize: 16, fontWeight: 500 }}>
          Найдено {ContactList.length} из {ContactList.length}
        </span>
        <div onClick={() => {
            onCancel()
            onAttachedContact({})
        }}>
          <img src={close} width={"20"} height={"20"} />
        </div>
      </div>
      <Divider
        style={{
          height: 1,
          marginRight: 16,
          marginLeft: 16,
          marginBottom: 8,
          marginTop: 21,
          backgroundColor: "#ADB3B8",
          opacity: 0.5,
        }}
      />
      <Table
        onRow={(record: { id?: any }) => ({

          onClick: () => {
            // onAttachedContact(record?.id);
              getContactItem(record.id)
          },
          style: {
            cursor: "pointer",
          },
        })}
        dataSource={ContactList}
        columns={columns}
        pagination={false}
        // scroll={{ y: window.innerHeight - 328 }}
        className={classes.table}
      />
      {loading ? <Spin className={classes.spinner} /> : null}
    </Modal>
  );
}
