import { FormControlLabel } from "@material-ui/core";
import { Divider, Radio } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Modal, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import close from "../../../../IMG/icons/close.png";
import { MagnifyingGlass } from "../../../../IMG/SVG/MagnifyingGlass";
import { useActions } from "../../../../redux/type_redux_hook/useAction";
import { useTypedSelector } from "../../../../redux/type_redux_hook/useTypedSelector";
import InputFilterSearch from "../../../Utils/FilterInputs/InputFilterSearch";
import InputFilterSelect from "../../../Utils/FilterInputs/InputFilterSelect";

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
  const { getContactPersonsListData } = useActions();
  const classes = useStyles();
  const [services, setServices] = React.useState(1);
  const [author, setAuthor] = React.useState(null);
  const { assets, load: assetsLoading } = useTypedSelector(
    (state) => state.assets
  );
  const { ContactPerson } = useTypedSelector((state) => state.contactPerson);

  let history = useHistory();
  const { contractors, loading } = useTypedSelector(
    (state) => state.counterparties
  );
  const { authors: crms } = useTypedSelector((state) => state.authorsList);

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

  const [params, setParams] = useState<any>({
    include: "type,crms,branches,service,sites,emails,phones,author,group",
  });
  const [fullName, setFullName] = useState("");
  const [branch, setBranch] = useState("");
  const [group, setGroup] = useState("");
  const [crm, setCrm] = useState("");
  const [selectedValue, setSelectedValue] = useState<null | number>(null);
  const [createdAt, setCreatedAt] = useState<any>(null);
  const [updatedAt, setUpdatedAt] = useState<any>(null);

  const filteredBranches =
    branch.length === 0 || branch.length > 3
      ? branches.filter(({ name }: { name: string }) => name.includes(branch))
      : branches;

  const getUserData = (data: any) => {
    history.push(`/counterparty/author/${data.id}`);
    getAuthorData(data);
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
          <div>
            <InputFilterSearch className={classes.input} />
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
    },
    {
      title: () => (
        <>
          Отрасль
          <InputFilterSelect
            options={filteredBranches.map((option: any) => ({
              key: option.id,
              value: option.id,
              label: option.name,
            }))}
            filterOption={false}
            onSearch={(value: string) => {
              setBranch(value);
            }}
            onSelect={(id: number) => {
              setParams({ ...params, "filter[branches.id]": id });
            }}
            notFoundContent={null}
            value={branch}
            className={classes.input}
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
              setServices(id);
              setParams({ ...params, "filter[contractor_type_id]": id });
            }}
            value={services}
            options={assetsOptions}
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
          {record.contractor_type_id}
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
              setServices(id);
              setParams({ ...params, "filter[contractor_type_id]": id });
            }}
            value={services}
            options={assetsOptions}
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
