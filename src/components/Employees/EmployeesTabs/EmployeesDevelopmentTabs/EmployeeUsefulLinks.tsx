import React from "react";
import {Button, Divider, Paper, Typography} from "@material-ui/core";
import {PencilSimpleIcon} from "../../../../IMG/SVG/PencilSimpleIcon";
import {useStylesEmployeeDevelopment} from "./EmployeesDevelopmentStyles";
import AddIcon from "@material-ui/icons/Add";


const EmployeeUsefulLinks:React.FC = () => {
    let EducationState = [1,2,3]
    const classes = useStylesEmployeeDevelopment();
    return(
        <div className={classes.root}>
            <div className={classes.title} >
                <Typography  className={classes.typographyTitle}>
                    Полезные ссылки
                </Typography>

            </div>
            <Paper elevation={0} className={classes.paper}>
                <div className={classes.row}>
                    <div style={{width:"100%"}}>
                        <div className={classes.column}>
                            <Typography className={classes.typographyValue}>
                                Расписание
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.typographyValue}>
                                Библиотека материалов
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.typographyValue}>
                                Библиотека онлайн курсов GREEN
                            </Typography>
                        </div>
                        <div className={classes.column} style={{marginBottom:0}}>
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.btn}
                            >
                                Заявка на иднивидуальный курс
                            </Button>
                        </div>

                    </div>
                </div>
            </Paper>
        </div>
    )
}

export default EmployeeUsefulLinks;
