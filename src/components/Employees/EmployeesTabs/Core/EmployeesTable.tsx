import React, { useState, useEffect, useRef } from "react";
import Paper from "@material-ui/core/Paper";
import moment from "moment";
import { MagnifyingGlass } from "../../../../IMG/SVG/MagnifyingGlass";
import InputFilterSearch from "../../../Utils/FilterInputs/InputFilterSearch";

import { useHistory } from "react-router-dom";
import InputFilterSelect from "../../../Utils/FilterInputs/InputFilterSelect";
import InputFilterDatePicker from "../../../Utils/FilterInputs/InputFilterDatePicker";
import { SortingButtons } from "../../../../IMG/SVG/sortingButtonsIcon";
import { Table } from "antd";
import {useActions} from "../../../../redux/type_redux_hook/useAction";
import {useTypedSelector} from "../../../../redux/type_redux_hook/useTypedSelector";
import {useTableStyles} from "../EmployeesStyle/EmployeesTableStyles";
import {InputEmployeesAssetsOptions} from "../../../Utils/utils_options/InputEmployeesAssetsOptions";

type EmployeesType = {
    id:number,
    firstname:string,
    middlename:string,
    surname:string,
    company:any,
    region:any,
    directions:any[],
    position:any,
    phones:any[],
    status:any
}

export default function EmployeesTable(props: any) {
    const { fetchCounterpartiesList, fetchEmployeeByIdtAC } = useActions();
const {assetsOptionsCompanies,assetsOptionsRegions,assetsOptionsEmployeePositions} = InputEmployeesAssetsOptions()
    const history = useHistory();
    const classes = useTableStyles();
    const {employeesData,loading} = useTypedSelector((state) => state.employees);
    const {employees}:any = employeesData;


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


    const getUserData = (data: any) => {

        history.push(`/employee`);
        fetchEmployeeByIdtAC(data.id);
    };

    const columns = [
        {
            title: () => (
                <>
                    <span className={classes.titleText}>ID</span>
                    <div>
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
                    </div>
                </>
            ),
            dataIndex: "id",
            render: (id: number) => <span style={{ color: "#3B4750" }}>{id}</span>,
        },
        {
            title: () => (
                <>
                    <div style={{display: "flex"}}>
                        <span className={classes.titleText}>Фамилия Имя Отчество</span>
                        <span style={{position: "absolute", right: 8, top: 8}}>
              <SortingButtons color="#5B6770"/>
            </span>
                    </div>

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
            dataIndex: "FIO",
            width: 250,
            render: (FIO: string) => <span style={{ color: "#3B4750" }}>{FIO}</span>,
        },
        {
            title: () => (
                <>
                    <span className={classes.titleText}>Компания трудоустройства</span>
                    <InputFilterSelect
                        options={assetsOptionsCompanies}
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
                </>
            ),
            dataIndex: "company",
            width: 230,
            render: (company: any) => <span style={{ color: "#3B4750" }}>{company.name}</span>,
        },
        {
            title: () => (
                <>
                    <span className={classes.titleText}>Регион</span>
                    <InputFilterSelect
                        options={assetsOptionsRegions}
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
                </>
            ),
            dataIndex: "region",
            width: "13%",
            render: (region: any) => <span style={{ color: "#3B4750" }}>{region.name}</span>,
        },
        {
            title: () => (
                <div style={{ minWidth: 125 }}>
                    <span className={classes.titleText}>Направление</span>
                    <InputFilterSelect
                        options={assetsOptionsRegions}
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
            ),
            dataIndex: "directions",
            render: (directions: any[]) => {
                return directions?.map((direction: any) => {
                    return (
                        <div key={direction.id}>
                            {direction.name}
            </div>
                    );
                });
            },
        },
        {
            title: () => (
                <>
                    <span className={classes.titleText}>Должность</span>
                    <InputFilterSelect
                        options={assetsOptionsEmployeePositions}
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
                </>
            ),
            dataIndex: "position",
            render: (position: any) => <span style={{ color: "#3B4750" }}>{position?.name}</span>,
        },
        {
            title: () => (
                <>
                    <span className={classes.titleText}>Телефон</span>
                    <div style={{visibility:"hidden"}}>
                        <InputFilterSelect
                            className={"searchMode " + classes.input}/>
                    </div>
                </>
            ),
            dataIndex: "phones",
            render: (phones: any[]) => {
                return phones?.map((phone: any) => {
                    return (
                        <div key={phone?.id}>
                            {phone?.phone}
                        </div>
                    );
                });
            },
        },
        {
            title: () => (
                <>
                        <span className={classes.titleText}>Статус</span>
                        <InputFilterSelect
                            options={assetsOptionsRegions}
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
                </>
            ),
            dataIndex: "status",
            width: "11%",
            render: (status: any) => <span style={{ color: "#3B4750" }}>{status?.name}</span>,
        },

    ];


    const employeeDa = employees?.map(({
       id,firstname,middlename, surname, region, directions, position, phones, status, company
                                        }:EmployeesType) => {
        return {
            key: id, id, FIO:`${surname} ${firstname} ${middlename}`,company,region, directions, position, phones, status
        }
    })
debugger
    useEffect(() => {
        const newParams: any = {};
        Object.entries(params).forEach(([key, value]) => {
            if (value) {
                newParams[key] = value;
            }
        });

        fetchCounterpartiesList({ params: newParams });
    }, [params]);


    return (
        <Paper className={classes.root}>
            <Table
                onRow={(record) => ({
                    onClick: () => getUserData(record),
                })}
                columns={columns}
                 dataSource={employeeDa}
                pagination={false}
                scroll={{ y: window.innerHeight - 328 }}
                className={classes.table}
                  loading={loading}
            />
        </Paper>
    );
}
