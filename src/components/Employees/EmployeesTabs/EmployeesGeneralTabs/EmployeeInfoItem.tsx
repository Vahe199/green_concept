import React, {useEffect} from "react";
import {Avatar, Paper,Typography} from "@material-ui/core";
import avatar from "../../../../IMG/profilePic.png"
import {useStylesEmployee} from "./EmployeesStyles";
import {PencilSimpleIcon} from "../../../../IMG/SVG/PencilSimpleIcon";
import {useTypedSelector} from "../../../../redux/type_redux_hook/useTypedSelector";
import {formatPhoneNumber} from "../../../Utils/numberMask";

type EmployeeDataProps = {
    setEmployeeData:(val:boolean)=>void
}

const EmployeeInfoItem:React.FC<EmployeeDataProps> = ({setEmployeeData}) => {
    const classes = useStylesEmployee();


    const {loading,employeeById} = useTypedSelector(state => state.employees)
    let {employee}:any = employeeById
    let {photo, surname,firstname, middlename, birthdate,phones,emails}:any = employee;

    useEffect(() => {
        console.log(phones[0], 'phones')
    }, [])
    return(
        <div className={classes.root}>
            <div className={classes.title} >
                <Typography  className={classes.typographyTitle}>
                    Данные сотрудника
                </Typography>
                <div onClick={() => setEmployeeData(false)}>
                    <PencilSimpleIcon color="#3B4750" />
                </div>
            </div>
            <Paper elevation={0} className={classes.paper}>
                <div className={classes.row}>
                    <div style={{width:"27%"}}>
                        <Avatar alt="Remy Sharp"
                                src={photo ?`https://green-kis.tecman.ru${photo}`:""}
                                className={classes.avatar}/>
                    </div>
                    <div style={{width:"73%"}}>
                        <div className={classes.column}>
                            <Typography className={classes.typographyTitle}>
                                Фамилия:
                            </Typography>
                            <Typography className={classes.typographyValue}>
                                {surname}
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.typographyTitle}>
                                Имя
                            </Typography>
                            <Typography className={classes.typographyValue}>
                                {firstname}
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.typographyTitle}>
                                Отчество
                            </Typography>
                            <Typography className={classes.typographyValue}>
                                {middlename == null ? "" : middlename}
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.typographyTitle}>
                                Дата рождения
                            </Typography>
                            <Typography className={classes.typographyValue}>
                                {birthdate.replaceAll("-",".")}
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.typographyTitle}>
                                Телефон
                            </Typography>
                            <Typography className={classes.typographyValue}>
                                {phones.map((phone:any)=>{
                                    return(
                                       <div key={phone.id}>
                                           {`${formatPhoneNumber(phone.phone)}`}
                                       </div>
                                    )
                                })}
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.typographyTitle}>
                                E-mail
                            </Typography>
                            <Typography className={classes.typographyValue}>
                                {emails.map((email:any)=>(<div key={email.id}>{email.email}</div>))}
                            </Typography>
                        </div>
                    </div>
                </div>
            </Paper>
        </div>
    )
}

export default EmployeeInfoItem;
