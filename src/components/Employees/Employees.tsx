

import { Link, Typography } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { CancelPresentationOutlined } from "@material-ui/icons";
import React, {useEffect, useState} from "react";
import { useHistory, withRouter } from "react-router-dom";
import { CaretDoubleLeft } from "../../IMG/SVG/CaretDoubleLeft";
import { useTypedSelector } from "../../redux/type_redux_hook/useTypedSelector";
import EmployeesGeneralInformation from "./EmployeesTabs/EmployeesGeneralInformation";
import EmployeesQualification from "./EmployeesTabs/EmployeesQualification";
import EmployeesDevelopment from "./EmployeesTabs/EmployeesDevelopment";
import {useActions} from "../../redux/type_redux_hook/useAction";
import Loader from "../Layout/Loader/Loader";
import {getEmployeeAssetsAC} from "../../redux/store/action_creator/employees_action-creator/employees_assets_action_creator";
import NewEmployeesGeneralInformation from "./EmployeesTabs/New_Employee_Form/New_EmployeesGeneralInformation";
import NewEmployeesQualification from "./EmployeesTabs/New_Employee_Form/New_EmployeesQualification";


const useStyles = makeStyles((theme) => ({
    menuRoot: {
        flexGrow: 1,
        backgroundColor: "#000",
        opacity: "0",
        color: "#000",
    },
    tabs: {
        backgroundColor: "#000",
        opacity: "0",
        color: "#000",
        textColor: "#000",
    },
    container: {
        height: "100vh",
        width: "100%",
        paddingTop: 67,
        margin: 0,
        paddingLeft: 0,
        paddingRight: 0,
    },
    root: {
        flexGrow: 1,
        width: "100%",
        height: 125,
        margin: "-3px 0 0 0",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: "2%",
        paddingRight: "2%",
        paddingTop: "2%",
        boxShadow: "none",
    },
    typography: {
        color: "#3B4750",
        fontSize: 23,
        marginTop: -14,
        marginBottom: 7,
    },
    bottomField: {
        flexGrow: 1,
        width: "100%",
        backgroundColor: "#F2F3F4",
        // height:"100vh",
        // minHeight:'100%',
        alignItems: "center",
        justifyContent: "center",
    },
    TabsStyle: {
        height: 1,
    },
     tabStyle: {
        textTransform: "none",
        height: 14,
        color: "#5B6770",
        fontSize: 18,
        fontWeight: 500,
    },
    rootTabStyle: {
        padding: 0,
        minWidth: 0,
        marginRight: 32,
    },
}));

const Employees = (props: any) => {

    let empData = {
        surname:"",
        firstname:""
    }
    const {loading,employeeById} = useTypedSelector(state => state.employees)
    const {employee}:any = employeeById;
    const {surname, firstname} = employee ? employee : empData;
    let history = useHistory();
    const classes = useStyles();
    const [selectedTab, setSelectedTab] = React.useState<string>('?????????? ????????????????');

    const handleChangeTab = (event: React.ChangeEvent<{}>, newValue: string) => {
         setSelectedTab(newValue);
        history.push(`/employee/${props.match.params.item}/${newValue}`)
    };
    return (
        <div className={classes.container}>
            <Paper square className={classes.root}>
                {props.match.params.item === "new-employee" ?<Typography variant="subtitle1" noWrap className={classes.typography}>
                        ?????????? ??????????????????
                </Typography>
                :<Typography variant="subtitle1" noWrap className={classes.typography}>
                        {firstname + " " + surname}
                    </Typography>}

                <div style={{ display: "flex" }}>
                    <Tabs
                        TabIndicatorProps={{
                            style: { background: "#3AB994", height: 3 },
                        }}
                        value={selectedTab}
                        onChange={handleChangeTab}
                        aria-label="?????????? ????????????????????"
                    >
                        <Tab value={'?????????? ????????????????'}
                            label={
                                <Typography variant="subtitle1" className={classes.tabStyle}>
                                    ?????????? ????????????????
                                </Typography>
                            }
                            className={classes.rootTabStyle}
                        />
                        <Tab value={'????????????????????????'}
                            label={
                                <Typography
                                    variant="subtitle1"
                                    style={{ paddingLeft: 5 }}
                                    className={classes.tabStyle}
                                >
                                    ????????????????????????
                                </Typography>
                            }
                            className={classes.rootTabStyle}
                        />
                        <Tab value={'????????????????'}
                            label={
                                <Typography variant="subtitle1" className={classes.tabStyle}>
                                    ????????????????
                                </Typography>
                            }
                            className={classes.rootTabStyle}
                        />
                        <Tab value={'??????????????'}
                            label={
                                <Typography variant="subtitle1" className={classes.tabStyle}>
                                    ??????????????
                                </Typography>
                            }
                            className={classes.rootTabStyle}
                        />
                        <Tab value={'??????????????'}
                            label={
                                <Typography variant="subtitle1" className={classes.tabStyle}>
                                    ??????????????
                                </Typography>
                            }
                            className={classes.rootTabStyle}
                        />
                        <Tab value={'????????????'}
                            label={
                                <Typography variant="subtitle1" className={classes.tabStyle}>
                                    ????????????
                                </Typography>
                            }
                            className={classes.rootTabStyle}
                        />
                        <Tab value={'??????'}
                            label={
                                <Typography variant="subtitle1" className={classes.tabStyle}>
                                    ??????
                                </Typography>
                            }
                            className={classes.rootTabStyle}
                        />
                    </Tabs>
                </div>
                <Divider style={{ width: "102%" }} />
            </Paper>
            <div>{loading ? <Loader/> :
                <div>{props.match.params.item === "new-employee" ? <div>
                    {selectedTab == '?????????? ????????????????' && <NewEmployeesGeneralInformation/>}
                    {selectedTab == '????????????????????????' && <NewEmployeesQualification/>}
                    {selectedTab == '????????????????' && <div>????????????????</div>}
                    </div> :
                    <div>
                        {selectedTab == '?????????? ????????????????' && <EmployeesGeneralInformation/>}
                        {selectedTab == '????????????????????????' && <EmployeesQualification/>}
                        {selectedTab == '????????????????' && <EmployeesDevelopment/>}
                    </div>}
                </div>}
            </div>
        </div>
    );
};
export default withRouter(Employees);
