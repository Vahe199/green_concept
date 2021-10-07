import React from "react";
import {Avatar, Paper,Typography} from "@material-ui/core";
import avatar from "../../../../IMG/profilePic.png"
import {useStylesEmployee} from "./EmployeesStyles";
import {PencilSimpleIcon} from "../../../../IMG/SVG/PencilSimpleIcon";


const EmployeeInfoItem:React.FC = () => {
    const classes = useStylesEmployee();
    return(
        <div className={classes.root}>
            <div className={classes.title} >
                <Typography  className={classes.typographyTitle}>
                    Данные сотрудника
                </Typography>
                <div onClick={() => console.log('true 11')}>
                    <PencilSimpleIcon color="#3B4750" />
                </div>
            </div>
            <Paper className={classes.paper}>
                <div className={classes.row}>
                    <div style={{width:"37%"}}>
                        <Avatar alt="Remy Sharp" src={avatar} className={classes.avatar}/>
                    </div>
                    <div style={{width:"63%"}}>
                        <div className={classes.column}>
                            <Typography className={classes.typographyTitle}>
                                Фамилия:
                            </Typography>
                            <Typography className={classes.typographyValue}>
                                Карпова
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.typographyTitle}>
                                Имя
                            </Typography>
                            <Typography className={classes.typographyValue}>
                                Инна
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.typographyTitle}>
                                Отчество
                            </Typography>
                            <Typography className={classes.typographyValue}>
                                Владимировна
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.typographyTitle}>
                                Дата рождения
                            </Typography>
                            <Typography className={classes.typographyValue}>
                                01.01.1990
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.typographyTitle}>
                                Телефон
                            </Typography>
                            <Typography className={classes.typographyValue}>
                                +74951234567
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.typographyTitle}>
                                E-mail
                            </Typography>
                            <Typography className={classes.typographyValue}>
                               <span> innakarpova@green.ru </span>
                               <span> inna1@mail.ru </span>
                            </Typography>
                        </div>
                    </div>
                </div>
            </Paper>
        </div>
    )
}

export default EmployeeInfoItem;
