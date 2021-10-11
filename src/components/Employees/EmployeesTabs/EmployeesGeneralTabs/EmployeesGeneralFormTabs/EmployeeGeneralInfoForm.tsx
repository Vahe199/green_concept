import React from "react";
import {Button, Paper, TextField, Typography} from "@material-ui/core";
import { Formik, getIn, FieldArray } from 'formik';

import {useStylesEmployeeForm} from "./EmployeesFormStyles";
import {TrashIcon} from "../../../../../IMG/SVG/TrashIcon";

const initialValues = {
    region:'',
    empl_company:'',
    direction:'',
    position:'',
    employment_date:'',
    dismissal_date:'',
};
type EmployeeFormDataProps = {
    setEmployeeGeneralInfo:(val:boolean)=>void
}
const EmployeeGeneralInfoForm:React.FC<EmployeeFormDataProps> = ({setEmployeeGeneralInfo}) => {
    const classes = useStylesEmployeeForm();
    return(
        <div className={classes.root}>
            <Formik
                initialValues={initialValues}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {({ values, touched,handleChange,errors }) => (
                    <div>
            <div className={classes.title} >
                <Typography  className={classes.typographyTitle}>
                    Общие сведения
                </Typography>
                <Button color="primary" type="submit"
                        onClick={()=>setEmployeeGeneralInfo(true)}
                        className={classes.saveButton}>
                    Сохранить
                </Button>
            </div>
            <Paper elevation={0} className={classes.paper}>
                <div className={classes.row}>
                    <div style={{width:"100%"}}>
                        <div className={classes.column}>
                            <Typography className={classes.typographyTitle}>
                                Статус:
                            </Typography>
                            <Typography className={classes.typographyValue}>

                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.typographyTitle}>
                                Регион:
                            </Typography>
                            <Typography className={classes.typographyValue}>
                                <TextField
                                    fullWidth
                                    placeholder={"Выберите"}
                                    variant={"outlined"}
                                    name="region"
                                    value={values.region}
                                    onChange={handleChange}
                                    error={touched.region && Boolean(errors.region)}
                                    helperText={touched.region && errors.region}
                                />
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.typographyTitle}>
                                Компания трудоустройства
                            </Typography>
                            <Typography className={classes.typographyValue}>
                                <TextField
                                    fullWidth
                                    placeholder={"Выберите"}
                                    variant={"outlined"}
                                    name="empl_company"
                                    value={values.empl_company}
                                    onChange={handleChange}
                                    error={touched.empl_company && Boolean(errors.empl_company)}
                                    helperText={touched.empl_company && errors.empl_company}
                                />
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.typographyTitle}>
                                Направление:
                            </Typography>
                            <Typography className={classes.typographyValue}>
                                <TextField
                                    fullWidth
                                    placeholder={"Выберите"}
                                    variant={"outlined"}
                                    name="direction"
                                    value={values.direction}
                                    onChange={handleChange}
                                    error={touched.direction && Boolean(errors.direction)}
                                    helperText={touched.direction && errors.direction}
                                />
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.typographyTitle}>
                                Категория (роль в системе)
                            </Typography>
                            <Typography className={classes.typographyValue}>
                                Руководитель непроизводственного подразделения
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.typographyTitle}>
                                Должность:
                            </Typography>
                            <Typography className={classes.typographyValue}>
                                <TextField
                                    fullWidth
                                    placeholder={"Выберите"}
                                    variant={"outlined"}
                                    name={"position"}
                                    value={values.position}
                                    onChange={handleChange}
                                    error={touched.position && Boolean(errors.position)}
                                    helperText={touched.position && errors.position}
                                />
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.typographyTitle}>
                                Дата приема на работу:
                            </Typography>
                            <Typography className={classes.typographyValue}>
                                <TextField
                                    name={"employment_date"}
                                    style={{ width: "50%"}}
                                    id="date"
                                    variant="outlined"
                                    type="date"
                                    // value={values.otchestvo}
                                    defaultValue="2021-01-01"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={handleChange}
                                />
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.typographyTitle}>
                                Дата увольнения:
                            </Typography>
                            <Typography className={classes.typographyValue}>
                                <TextField
                                    name={"dismissal_date"}
                                    style={{ width: "50%"}}
                                    id="date"
                                    variant="outlined"
                                    type="date"
                                    // value={values.otchestvo}
                                    defaultValue="2021-01-01"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={handleChange}
                                />
                            </Typography>
                        </div>

                    </div>
                </div>
            </Paper>
                    </div>
                    )}
            </Formik>
        </div>
    )
}

export default EmployeeGeneralInfoForm;
