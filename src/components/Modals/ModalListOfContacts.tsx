import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import {Table, Modal, Button} from "antd";
import InputFilterSelectedType from "../Counterparty/Core/FilterInputs/InputFilterSelect";
import InputFilterSearch from "../Counterparty/Core/FilterInputs/InputFilterSearch";
import {SortingButtons} from "../../IMG/SVG/sortingButtonsIcon";
import InputFilterDatePicker from "../Counterparty/Core/FilterInputs/InputFilterDatePicker";
import Loader from "../Layout/Loader/Loader";
import {useTypedSelector} from "../../redux/type_redux_hook/useTypedSelector";
import {Radio, RadioGroup, FormControlLabel} from "@material-ui/core";
import close from "../../IMG/icons/close.png";


const useStyles = makeStyles({
    root: {
        width: "100%",
        color: "#D6D9DC",


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
                    alignItems:"center",
                    background: "#FFFFFF",
                    "&::before": { display: "none" },
                    minHeight:104,

                },
            },
        },
        "& tbody": {
            "& tr": {
                "&:nth-child(odd) ": {
                    background: " #F2F3F4",
                    // display: 'flex',
                    // alignItems: 'center',
                },
                "&:nth-child(even) ": {
                    background: " #FFFFFF",
                    // display: 'flex',
                    // alignItems: 'center',
                },
            },
        },
    },
    input: {
        marginTop: 16,
    },
    header: {
        backgroundColor: 'red',
        height: 200,
        width: '100%',
    }
});

export default function ModalListOfContacts(props: any) {
    const classes = useStyles();
    const [services, setServices] = React.useState(1);
    const [author, setAuthor] = React.useState(null);
    const { assets, load: assetsLoading } = useTypedSelector(
        (state) => state.assets
    );

    const data = [
        {
            id: '000001',
            address: 'Кузнецов Фёдрор Михайлович',
            typeName: 'Прочие промышленные',
            full_name: 'Подрядчик',
            branches: 'Подрядчик',
            group: 'Подрядчик',
        },
        {
            id: '000001',
            address: 'Кузнецов Фёдрор Михайлович',
            typeName: 'Прочие промышленные',
            full_name: 'Подрядчик',
            branches: 'Подрядчик',
            group: 'Подрядчик',
        },
        {
            id: '000001',
            address: 'Кузнецов Фёдрор Михайлович',
            typeName: 'Прочие промышленные',
            full_name: 'Подрядчик',
            branches: 'Подрядчик',
            group: 'Подрядчик',
        },
        {
            id: '000001',
            address: 'Кузнецов Фёдрор Михайлович',
            typeName: 'Прочие промышленные',
            full_name: 'Подрядчик',
            branches: 'Подрядчик',
            group: 'Подрядчик',
        },
        {
            id: '000001',
            address: 'Кузнецов Фёдрор Михайлович',
            typeName: 'Прочие промышленные',
            full_name: 'Подрядчик',
            branches: 'Подрядчик',
            group: 'Подрядчик',
        },
        {
            id: '000001',
            address: 'Кузнецов Фёдрор Михайлович',
            typeName: 'Прочие промышленные',
            full_name: 'Подрядчик',
            branches: 'Подрядчик',
            group: 'Подрядчик',
        },
    ];

    const columns = [
        {
            title: () => <div>
                <div style={{minHeight:75,alignItems:'flex-start'}}>&#x2116;</div>
            </div>,
            dataIndex: "id",
            width: "5%",
            render: (id: string) => <span style={{ color: "#3B4750", whiteSpace: 'nowrap' }}>{id}</span>,
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
            render: (address: string) => <span style={{ color: "#3B4750", whiteSpace: 'nowrap', textAlign: 'center' }}>{address}</span>
        },
        {
            title: () => (
                <>
                    Отрасль
                    <InputFilterSelectedType
                        className={classes.input}
                        handleChange={setServices}
                        value={services}
                        placeholder="Другое"
                        loading={assetsLoading}
                    />
                </>
            ),
            dataIndex: "typeName",
            width: "15%",
            render: (typeName: string) => <span style={{ color: "#3B4750", whiteSpace: 'nowrap', textAlign: 'center' }}>{typeName}</span>
        },
        {
            title: () => (
                <>
                    Тип контрагента
                    <InputFilterSelectedType
                        className={classes.input}
                        handleChange={setServices}
                        value={services}
                        placeholder="Другое"
                        loading={assetsLoading}
                    />
                </>
            ),
            dataIndex: "branches",
            render: (branches: string) => <span style={{ color: "#3B4750", whiteSpace: 'nowrap', textAlign: 'center' }}>{branches}</span>
        },
        {
            title: () => (
                <div style={{minWidth: 125}}>
                    Тип услуг
                    <InputFilterSelectedType
                        className={classes.input}
                        handleChange={setServices}
                        value={services}
                        placeholder="Другое"
                        loading={assetsLoading}
                    />
                </div>
            ),
            dataIndex: "group",
            render: (group: string) => <span style={{ color: "#3B4750", whiteSpace: 'nowrap', textAlign: 'center' }}>{group}</span>
        },
        {
            title: () => (
                <>
                    <div style={{minHeight:75,alignItems:'flex-start'}}>Выбрать</div>
                </>
            ),
            dataIndex: "crms",
            render: (crms: string) => <div>
                <RadioGroup
                    aria-label="gender"
                    defaultValue="female"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="other" control={<Radio style={{ color: '#5B6770'}} />} label="Other" />
                </RadioGroup>
            </div>
        },

    ];



    return (
        <Paper className={classes.root}>
            {/*<div className={classes.header}>*/}
            {/*    <p>Найдено 12 из 112</p>*/}
            {/*    <img src={close} />*/}
            {/*</div>*/}
            <Modal
                title="Найдено 12 из 112"
                visible={props.showModal}
                width={'80%'}
                style={{marginTop: 0}}
                footer={null}
                closeIcon={<div onClick={() => props.setShowModal(false)}><img src={close} /></div>}
                maskStyle={{backgroundColor: '#D6D9DC'}}
            >
                <Table
                    onRow={(record) => ({
                        style: {
                            cursor: "pointer",
                        },
                    })}
                    dataSource={data}
                    columns={columns}
                    pagination={false}
                    //scroll={{ y: window.innerHeight - 328 }}
                    className={classes.table}
                />
                </Modal >
        </Paper>
    );
}
