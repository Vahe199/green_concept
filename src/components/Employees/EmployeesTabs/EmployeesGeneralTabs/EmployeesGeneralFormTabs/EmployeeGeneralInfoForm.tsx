import React from "react";
import {Button, Paper, TextField, Typography} from "@material-ui/core";
import {Formik} from 'formik';

import {useStylesEmployeeForm} from "./EmployeesFormStyles";
import ValidationErrorWrapper from "../../../../Utils/utils_options/ValidationErrorWrapper";
import InputFilterDatePicker from "../../../../Utils/FilterInputs/InputFilterDatePicker";
import moment from "moment";

const initialValues = {
    region_id:null,
    green_legal_id:null,
    position_id:null,
    start_work_date:"",
    end_work_date:"",
    directions:[null],


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
                {({ values, setFieldValue,touched,handleChange,errors }) => (
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
                                <ValidationErrorWrapper
                                    inputClassName="ant-picker"
                                    error={touched.start_work_date && Boolean(errors.start_work_date)}
                                    helperText={touched.start_work_date && errors.start_work_date}
                                >
                                    <InputFilterDatePicker
                                        name={"start_work_date"}
                                        value={
                                            values.start_work_date
                                                ? moment(values.start_work_date, "YYYY-MM-DD")
                                                : null
                                        }
                                        handleChange={(date: any) =>
                                            setFieldValue(
                                                "start_work_date",
                                                moment(date).format("YYYY-MM-DD")
                                            )
                                        }
                                        placeholder="01.01.1970"
                                        format="DD.MM.YYYY"
                                        className={classes.input}
                                    />
                                </ValidationErrorWrapper>
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.typographyTitle}>
                                Дата увольнения:
                            </Typography>
                            <Typography className={classes.typographyValue}>
                                <ValidationErrorWrapper
                                    inputClassName="ant-picker"
                                    error={touched.end_work_date && Boolean(errors.end_work_date)}
                                    helperText={touched.end_work_date && errors.end_work_date}
                                >
                                    <InputFilterDatePicker
                                        name={"end_work_date"}
                                        value={
                                            values.end_work_date
                                                ? moment(values.end_work_date, "YYYY-MM-DD")
                                                : null
                                        }
                                        handleChange={(date: any) =>
                                            setFieldValue(
                                                "end_work_date",
                                                moment(date).format("YYYY-MM-DD")
                                            )
                                        }
                                        placeholder="01.01.1970"
                                        format="DD.MM.YYYY"
                                        className={classes.input}
                                    />
                                </ValidationErrorWrapper>
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
