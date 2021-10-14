import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import {Table} from "antd";
import InputFilterSelectedType from "../Counterparty/Core/FilterInputs/InputFilterSelect";
import InputFilterSearch from "../Counterparty/Core/FilterInputs/InputFilterSearch";
import {SortingButtons} from "../../IMG/SVG/sortingButtonsIcon";
import InputFilterDatePicker from "../Counterparty/Core/FilterInputs/InputFilterDatePicker";
import Loader from "../Layout/Loader/Loader";
import {useTypedSelector} from "../../redux/type_redux_hook/useTypedSelector";


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
                    alignItems:"flex-start",
                    background: "#FFFFFF",
                    "&::before": { display: "none" },
                    minHeight:104
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
            },
        },
    },
    input: {
        marginTop: 16,
    },
});

export default function ModalListOfContacts(props: any) {
    const classes = useStyles();
    const [services, setServices] = React.useState(1);
    const [author, setAuthor] = React.useState(null);
    const assetsOptions = types_and_services?.map((option: any) => ({
        key: option.id,
        value: option.id ? option.id : 0,
        label: option.name,
    }));
    const { assets, load: assetsLoading } = useTypedSelector(
        (state) => state.assets
    );

    const columns = [
        {
            title: () => <div style={{minHeight:75,alignItems:'flex-start'}}>&#x2116;</div>, //todo Arsen change icon
            dataIndex: "id",
            width: "5%",
            render: (id: string) => <span style={{ color: "#3B4750" }}>{id}</span>,
        },
        {
            title: () => (
                <>
                    Тип
                    <div>
                        <InputFilterSelectedType
                            className={classes.input}
                            handleChange={setServices}
                            value={services}
                            options={assetsOptions}
                            placeholder="Другое"
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
                    Наименование
                    <InputFilterSearch className={classes.input} />
                </>
            ),
            dataIndex: "full_name",
            width: "15%",
        },
        {
            title: () => (
                <>
                    Отрасль
                    <InputFilterSearch className={classes.input} />
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
        },
        {
            title: () => (
                <div style={{minWidth: 125}}>
                    Группа компаний
                    <InputFilterSearch className={classes.input}  />
                </div>
            ),
            dataIndex: "group",
        },
        {
            title: () => (
                <>
                    Ответственный
                    <InputFilterSearch className={classes.input} />
                </>
            ),
            dataIndex: "crms",
            render: (crms: any[]) => {
                return crms.map((crm: any, index: number) => {
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
                    Автор записи
                    <div>
                        <InputFilterSelectedType
                            className={classes.input}
                            handleChange={setAuthor}
                            value={author}
                            options={authorsOptions}
                            loading={assetsLoading}
                        />
                    </div>
                </>
            ),
            dataIndex: "author",
            render: (author: any) => {
                const authorFullName = author
                    ? `${author.surname} ${author.firstname.substring(0, 1)}. `
                    : "" + author.middlename
                        ? `${author.middlename.substring(0, 1)}.`
                        : "";

                return authorFullName;
            },
        },
        {
            title: () => (
                <>
                    <div style={{ display: "flex" }}>
                        <span>Создано</span>
                        <span style={{ position: "absolute", right: 8, top: 8 }}>
              <SortingButtons color="#5B6770" />
            </span>
                    </div>
                    <InputFilterDatePicker className={classes.input} />
                </>
            ),
            dataIndex: "created_at",
            width: "15%",
        },
        {
            title: () => (
                <>
                    <div style={{ display: "flex" }}>
                        <span>Обновлено</span>
                        <span style={{ position: "absolute", right: 8, top: 8 }}>
              <SortingButtons color="#5B6770" />
            </span>
                    </div>
                    <InputFilterDatePicker className={classes.input}/>
                </>
            ),
            dataIndex: "updated_at",
            width: "15%",
        },
    ];

    const data = contractors.map(({ key, service, sites, type, ...rowData }) => {
        return {
            key,
            id: key,
            typeName: type.name,
            ...rowData,
        };
    });

    return loading ? (
        <Loader />
    ) : (
        <Paper className={classes.root}>
            <Table
                onRow={(record) => ({
                    onClick: () => getUserData(record),
                    style: {
                        cursor: "pointer",
                    },
                })}
                columns={columns}
                dataSource={data}
                pagination={false}
                scroll={{ y: window.innerHeight - 328 }}
                className={classes.table}
            />
        </Paper>
    );



}
