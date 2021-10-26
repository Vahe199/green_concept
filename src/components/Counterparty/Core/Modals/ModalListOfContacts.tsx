import { Divider, Radio } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Modal, Table } from "antd";
import React, { useEffect, useState } from "react";
import close from "../../../../IMG/icons/close.png";
import { MagnifyingGlass } from "../../../../IMG/SVG/MagnifyingGlass";
import { useActions } from "../../../../redux/type_redux_hook/useAction";
import { useTypedSelector } from "../../../../redux/type_redux_hook/useTypedSelector";
import InputFilterSearch from "../../../Utils/FilterInputs/InputFilterSearch";
import InputFilterSelect from "../../../Utils/FilterInputs/InputFilterSelect";
import get from "lodash/get";
import { COUNTERPARTY_TYPES_MAPPER } from "../../../Constants/counterparty";

const useStyles = makeStyles({
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
          alignItems: "center",
          background: "#FFFFFF",
          "&::before": { display: "none" },
          minHeight: 104,
        },
      },
    },
    "& tbody": {
      "& tr": {
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
});

export default function ModalListOfContacts(props: any) {
  const { attachedContact, onAttachedContact, onCancel, ...modalProps } = props;

  const classes = useStyles();

  const { getContactPersonsListData } = useActions();

  const { assets, load: assetsLoading } = useTypedSelector(
    (state) => state.assets
  );
  const { ContactPerson } = useTypedSelector((state) => state.contactPerson);

  const [params, setParams] = useState<any>({});
  const [companyGroupFilterInital, setCompanyGroupFilterInital] = useState<any>(
    []
  );
  const [typeOfServices, setTypeOfServices] = useState();
  const [fullName, setFullName] = useState("");
  const [branch, setBranch] = useState("");
  const [group, setGroup] = useState("");
  const [crm, setCrm] = useState("");
  const [createdAt, setCreatedAt] = useState<any>(null);
  const [updatedAt, setUpdatedAt] = useState<any>(null);

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

  console.log(types_and_services, typeOfServices, serviceOptions);

  // branches options
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

  // full name options
  const getFilteredFullNameOptions = () => {
    const filteredFullName =
      fullName.length > 3
        ? ContactPerson.filter(({ full_name = "" }: { full_name: string }) =>
            full_name.includes(fullName)
          )
        : [];

    return (
      filteredFullName.length
        ? [{ id: -1, full_name: "Все" }, ...filteredFullName]
        : []
    ).map((option: any) => ({
      key: option.id,
      value: option.full_name !== "Все" ? option.id : "",
      label: option.full_name,
    }));
  };

  const columns = [
    {
      title: () => (
        <div>
          <div style={{ minHeight: 75, alignItems: "flex-start" }}>
            &#x2116;
          </div>
        </div>
      ),
      dataIndex: "id",
      width: "5%",
    },
    {
      title: () => (
        <>
          ФИО
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
    },
    {
      title: () => (
        <>
          Отрасль
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
        </>
      ),
      dataIndex: "branches",
      width: "15%",
      render: (branches: { name?: string }) => (
        <span
          style={{
            color: "#3B4750",
            whiteSpace: "nowrap",
            textAlign: "center",
          }}
        >
          {branches?.name || ""}
        </span>
      ),
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
          checked={attachedContact === id}
        />
      ),
    },
  ];

  useEffect(() => {
    getContactPersonsListData();
  }, []);

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
          Найдено 12 из 1112
        </span>
        <div onClick={() => onCancel()}>
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
        }}
      />
      <Table
        onRow={(record: { id?: any }) => ({
          onClick: () => {
            onAttachedContact(record?.id);
          },
          style: {
            cursor: "pointer",
          },
        })}
        dataSource={ContactPerson}
        columns={columns}
        pagination={false}
        // scroll={{ y: window.innerHeight - 328 }}
        className={classes.table}
      />
    </Modal>
  );
}
