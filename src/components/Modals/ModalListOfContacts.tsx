import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Table, Modal } from "antd";
import InputFilterSelectedType from "../Counterparty/Core/FilterInputs/InputFilterSelect";
import InputFilterSearch from "../Counterparty/Core/FilterInputs/InputFilterSearch";
import { SortingButtons } from "../../IMG/SVG/sortingButtonsIcon";
import InputFilterDatePicker from "../Counterparty/Core/FilterInputs/InputFilterDatePicker";
import Loader from "../Layout/Loader/Loader";
import { useTypedSelector } from "../../redux/type_redux_hook/useTypedSelector";
import { Radio, RadioGroup, FormControlLabel } from "@material-ui/core";
import close from "../../IMG/icons/close.png";
import { useActions } from "../../redux/type_redux_hook/useAction";
import { useHistory } from "react-router-dom";
import { MagnifyingGlass } from "../../IMG/SVG/MagnifyingGlass";
import InputFilterSelect from "../Counterparty/Core/FilterInputs/InputFilterSelect";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles({
  root: {
    "&.ant-modal": {
      width: "max-content!important",

      "& .ant-modal-body": {
        padding: 20,
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
    backgroundColor: "red",
    height: 200,
    width: "100%",
  },
  icon: {
    fontSize: "16px",
  },
});

export default function ModalListOfContacts(props: any) {
  const { fetchCounterpartiesList } = useActions();
  const classes = useStyles();
  const [services, setServices] = React.useState(1);
  const [author, setAuthor] = React.useState(null);
  const { assets, load: assetsLoading } = useTypedSelector(
    (state) => state.assets
  );

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
  const [selectedValue, setSelectedValue] = useState(false);
  const [createdAt, setCreatedAt] = useState<any>(null);
  const [updatedAt, setUpdatedAt] = useState<any>(null);

  const filteredBranches =
    branch.length === 0 || branch.length > 3
      ? branches.filter(({ name }: { name: string }) => name.includes(branch))
      : branches;
  console.log(filteredBranches);

  const getUserData = (data: any) => {
    history.push(`/counterparty/author/${data.id}`);
    getAuthorData(data);
  };

  const data = [
    {
      id: "000001",
      address: "Кузнецов Фёдрор Михайлович",
      typeName: "Прочие промышленные",
      full_name: "Подрядчик",
      branches: "Подрядчик",
      group: Math.random(),
    },
    {
      id: "000001",
      address: "Кузнецов Фёдрор Михайлович",
      typeName: "Прочие промышленные",
      full_name: "Подрядчик",
      branches: "Подрядчик",
      group: Math.random(),
    },
    {
      id: "000001",
      address: "Кузнецов Фёдрор Михайлович",
      typeName: "Прочие промышленные",
      full_name: "Подрядчик",
      branches: "Подрядчик",
      group: Math.random(),
    },
    {
      id: "000001",
      address: "Кузнецов Фёдрор Михайлович",
      typeName: "Прочие промышленные",
      full_name: "Подрядчик",
      branches: "Подрядчик",
      group: Math.random(),
    },
    {
      id: "000001",
      address: "Кузнецов Фёдрор Михайлович",
      typeName: "Прочие промышленные",
      full_name: "Подрядчик",
      branches: "Подрядчик",
      group: Math.random(),
    },
    {
      id: "000001",
      address: "Кузнецов Фёдрор Михайлович",
      typeName: "Прочие промышленные",
      full_name: "Подрядчик",
      branches: "Подрядчик",
      group: Math.random(),
    },
  ];

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
      render: (id: string) => (
        <span style={{ color: "#3B4750", whiteSpace: "nowrap" }}>{id}</span>
      ),
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
      dataIndex: "address",
      render: (address: string) => (
        <span
          style={{
            color: "#3B4750",
            whiteSpace: "nowrap",
            textAlign: "center",
          }}
        >
          {address}
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
      dataIndex: "typeName",
      width: "15%",
      render: (typeName: string) => (
        <span
          style={{
            color: "#3B4750",
            whiteSpace: "nowrap",
            textAlign: "center",
          }}
        >
          {typeName}
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
      dataIndex: "branches",
      render: (branches: string) => (
        <span
          style={{
            color: "#3B4750",
            whiteSpace: "nowrap",
            textAlign: "center",
          }}
        >
          {branches}
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
      dataIndex: "full_name",
      render: (group: string) => (
        <span
          style={{
            color: "#3B4750",
            whiteSpace: "nowrap",
            textAlign: "center",
          }}
        >
          {group}
        </span>
      ),
    },
    {
      title: () => (
        <>
          <div style={{ minHeight: 75, alignItems: "flex-start" }}>Выбрать</div>
        </>
      ),
      dataIndex: "group",
      render: (group: string) => (
        <div>
          <RadioGroup
            aria-label="group"
            defaultValue="group"
            name="radio-buttons-group"
          >
            <FormControlLabel
              checked={selectedValue ? true : false}
              onClick={() => setSelectedValue(!selectedValue)}
              value={selectedValue}
              control={<Radio style={{ color: "#5B6770" }} />}
              label=""
            />
          </RadioGroup>
        </div>
      ),
    },
  ];

  return (
    <Modal {...props} className={classes.root}>
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
        <div onClick={() => props.onCancel()}>
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
        onRow={(record) => ({
          style: {
            cursor: "pointer",
          },
        })}
        dataSource={data}
        columns={columns}
        pagination={false}
        // scroll={{ y: window.innerHeight - 328 }}
        className={classes.table}
      />
    </Modal>
  );
}
