import React, {useEffect, useState} from "react";
import Paper from "@material-ui/core/Paper";
import {MagnifyingGlass} from "../../../../IMG/SVG/MagnifyingGlass";
import InputFilterSearch from "../../../Utils/FilterInputs/InputFilterSearch";

import {useHistory} from "react-router-dom";
import InputFilterSelect from "../../../Utils/FilterInputs/InputFilterSelect";
import {SortingButtons} from "../../../../IMG/SVG/sortingButtonsIcon";
import {Divider, Table} from "antd";
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
const {assetsOptionsCompanies,assetsOptionsRegions,assetsOptionsEmployeePositions,assetsOptionsEmployeeStatuses,assetsOptionsDirections} = InputEmployeesAssetsOptions()
    const history = useHistory();

    const {employeesData,loading} = useTypedSelector((state) => state.employees);
    const {employees}:any = employeesData;
    const classes = useTableStyles(loading)();
    const [params, setParams] = useState<any>({
        include: "type,crms,branches,service,sites,emails,phones,author,group",
    });


const [filterField, setFilterField] = useState<any>({
    empId:"",
    fullName:"",
    companies:"",
    region:"",
    direction:"",
    ositions:"",
    status:""
})



    const getUserData = (data: any) => {

        history.push(`/employee`);
        fetchEmployeeByIdtAC(data.id);
    };




    const employeeData = employees?.map(({
       id,firstname,middlename, surname, region, directions, position, phones, status, company
                                        }:EmployeesType) => {
        return {
            key: id, id, FIO:`${surname} ${firstname} ${middlename}`,company,region, directions, position, phones, status
        }
    })
    const [filterData, setFilterData] = useState<any>(employeeData);

    const searchFilter = (text:any, field:string) => {
        debugger
        if (text) {
            const newData = employeeData.filter((item:any) => {
                const itemData = field == "FIO" ?
                    item.FIO.toUpperCase() : item[field];
                const textData = field == "FIO" ? text.toUpperCase() : text;
                return field == "FIO" ? itemData.indexOf(textData) > -1:field == "id" ? item.id.toString().indexOf(text) > -1
                    :field == "directions"? item.directions[0]?.id == +text : item[field].id == +text;
            });
            setFilterData(newData);
        } else {
            setFilterData(employeeData);
        }
    }

    useEffect(() => {
        const newParams: any = {};
        Object.entries(params).forEach(([key, value]) => {
            if (value) {
                newParams[key] = value;
            }
        });

        fetchCounterpartiesList({ params: newParams });
    }, [params]);

    const columns = [
        {
            title: () => (
                <>
                    <span className={classes.titleText}>ID</span>
                    <div>
                        <InputFilterSearch
                            handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                const { value } = e.target;
                                searchFilter(value, "id")
                                setFilterField({empId:value});
                                (value.length === 0 || value.length > 3) &&
                                setParams({ ...params, "filter[green_legal_id]": value });
                            }}
                            value={filterField.empId}
                            className={classes.input}
                        />
                    </div>
                </>
            ),
            dataIndex: "id",
            width: "8%",
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
                            setFilterField({fullName:value})
                            searchFilter(value,"FIO");
                            (value.length === 0 || value.length > 3) &&
                            setParams({ ...params, "filter[fio]": value });
                        }}
                        value={filterField.fullName}
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
                        onSelect={(id: number) => {
                            setFilterField({companies:id})
                            searchFilter(id, "company")
                            // setParams({ ...params, "filter[branches.id]": id });
                        }}
                        notFoundContent={null}
                        value={filterField.companies}
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
                        onSelect={(id: number) => {
                            setFilterField({region:id})
                            searchFilter(id, "region")
                            // setParams({ ...params, "filter[branches.id]": id });
                        }}
                        notFoundContent={null}
                        value={filterField.region}
                        className={"searchMode " + classes.input}
                        prefix={<MagnifyingGlass className={classes.icon} />}
                        showSearch
                    />
                </>
            ),
            dataIndex: "region",
            width: "10%",
            render: (region: any) => <span style={{ color: "#3B4750" }}>{region.name}</span>,
        },
        {
            title: () => (
                <div style={{ minWidth: 125 }}>
                    <span className={classes.titleText}>Направление</span>
                    <InputFilterSelect
                        options={assetsOptionsDirections}
                        filterOption={false}
                        onSelect={(id: number) => {
                            setFilterField({direction:id})
                            searchFilter(id,"directions" )
                            // setParams({ ...params, "filter[branches.id]": id });
                        }}
                        notFoundContent={null}
                        value={filterField.direction}
                        className={"searchMode " + classes.input}
                        prefix={<MagnifyingGlass className={classes.icon} />}
                        showSearch
                    />
                </div>
            ),
            width:"11%",
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
                        onSelect={(id: number) => {
                            setFilterField({positions:id})
                            searchFilter(id,"position" )
                            // setParams({ ...params, "filter[branches.id]": id });
                        }}
                        notFoundContent={null}
                        value={filterField.positions}
                        className={"searchMode " + classes.input}
                        prefix={<MagnifyingGlass className={classes.icon} />}
                        showSearch
                    />
                </>
            ),
            dataIndex: "position",
            width: "12%",
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
            width: "11%",
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
                        options={assetsOptionsEmployeeStatuses}
                        filterOption={false}
                        // onSearch={}
                        onSelect={(id: number) => {
                            setFilterField({status:id})
                            searchFilter(id,"status" )
                            // setParams({ ...params, "filter[branches.id]": id });
                        }}
                        notFoundContent={null}
                        value={filterField.status}
                        className={"searchMode " + classes.input}
                        prefix={<MagnifyingGlass className={classes.icon} />}
                        showSearch
                    />
                </>
            ),
            dataIndex: "status",
            width: "10%",
            render: (status: any) => <span style={{ color: "#3B4750" }}>{status?.name}</span>,
        },

    ];
    return (
        <Paper className={classes.root}>
            <div className={classes.titleWrapper}>
                <div>
                    Найдено <span>{filterData?.length}</span> из <span>{employeeData?.length}</span>
                </div>
                <Divider />
            </div>
            <Table
                onRow={(record) => ({
                    onClick: () => getUserData(record),
                })}
                columns={columns}
                 dataSource={filterData}
                pagination={false}
                scroll={{ y: window.innerHeight - 328 }}
                className={classes.table}
                  loading={loading}
            />
        </Paper>
    );
}
