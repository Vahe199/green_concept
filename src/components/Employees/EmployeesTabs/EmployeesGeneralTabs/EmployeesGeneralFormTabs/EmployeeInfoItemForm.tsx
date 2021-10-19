import React from "react";
import {Button, Paper, TextField, Typography} from "@material-ui/core";
import { Formik, getIn, FieldArray } from 'formik';

import {useStylesEmployeeForm} from "./EmployeesFormStyles";
import {TrashIcon} from "../../../../../IMG/SVG/TrashIcon";
import {useTypedSelector} from "../../../../../redux/type_redux_hook/useTypedSelector";


type EmployeeFormDataProps = {
    setEmployeeData:(val:boolean)=>void
}
const EmployeeInfoItemForm:React.FC<EmployeeFormDataProps> = ({setEmployeeData}) => {
    const {loading,employeeById} = useTypedSelector(state => state.employees)
    let {employee}:any = employeeById
    let {photo, surname,firstname, middlename, birthdate,phones,emails}:any = employee;
    const initialValues = {
        firstname:firstname ? firstname : "",
        middlename:middlename ? middlename : "",
        surname:surname ? surname : "",
        photo:"",
        birthdate:birthdate? birthdate : "",
        emails: [{email: ''}],
        phones:[{phone:""}],


        familia:'',
        name:'',
        otchestvo:'',
        dataRojdenia:'',
        phone:'',

    };
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
                    Данные сотрудника
                </Typography>
                <Button color="primary" type="submit"
                        onClick={()=>setEmployeeData(true)}
                        className={classes.saveButton}>
                    Сохранить
                </Button>
            </div>
            <Paper elevation={0} className={classes.paper}>
                <div className={classes.row}>
                    <div style={{width:"37%"}}>
                        <input
                            name={"photo"}
                            accept="image/*"
                            style={{ display: 'none' }}
                            id="raised-button-file"
                            multiple
                            type="file"
                        />
                        <label htmlFor="raised-button-file">
                            <Button  component="span"
                                     className={classes.fileInput}
                                >
                            </Button>
                        </label>
                    </div>
                    <div style={{width:"63%"}}>
                        <div className={classes.column}>
                            <Typography className={classes.typographyTitle}>
                                Фамилия:
                            </Typography>
                            <Typography className={classes.typographyValue}>
                                <TextField
                                    fullWidth
                                    placeholder={"Фамилия"}
                                    variant={"outlined"}
                                    name="surname"
                                    value={values.surname}
                                    onChange={handleChange}
                                    error={touched.surname && Boolean(errors.surname)}
                                    helperText={touched.surname && errors.surname}
                                />
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.typographyTitle}>
                                Имя
                            </Typography>
                            <Typography className={classes.typographyValue}>
                                <TextField
                                    fullWidth
                                    placeholder={"Имя"}
                                    variant={"outlined"}
                                    name="firstname"
                                    value={values.firstname}
                                    onChange={handleChange}
                                    error={touched.firstname && Boolean(errors.firstname)}
                                    helperText={touched.firstname && errors.firstname}
                                />
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.typographyTitle}>
                                Отчество
                            </Typography>
                            <Typography className={classes.typographyValue}>
                                <TextField
                                    fullWidth
                                    placeholder={"Отчество"}
                                    variant={"outlined"}
                                    name="middlename"
                                    value={values.middlename}
                                    onChange={handleChange}
                                    error={touched.middlename && Boolean(errors.middlename)}
                                    helperText={touched.middlename && errors.middlename}
                                />
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.typographyTitle}>
                                Дата рождения
                            </Typography>
                            <Typography className={classes.typographyValue}>
                                <TextField
                                    name={"birthdate"}
                                    style={{ width: "80%"}}
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
                                Телефон
                            </Typography>
                            <Typography className={classes.typographyValue}>
                                <TextField
                                    fullWidth
                                    style={{ width: "80%"}}
                                    placeholder={"+79999999999"}
                                    variant={"outlined"}
                                    name="phone"
                                    value={values.phone}
                                    onChange={handleChange}
                                    error={touched.phone && Boolean(errors.phone)}
                                    helperText={touched.phone && errors.phone}
                                />
                            </Typography>
                        </div>
                        <div className={classes.column} style={{alignItems:"flex-start"}}>
                            <Typography className={classes.typographyTitle} >
                                E-mail
                            </Typography>
                            <Typography className={classes.typographyValue}>
                                <FieldArray name="emails">
                                    {({ insert, remove, push }) => (
                                        <div>
                                            {values. emails.length > 0 &&
                                            values. emails.map(( email, index) => {
                                                const fieldName = `emails[${index}].email`;
                                                const touchedFieldName = getIn(touched, fieldName);
                                                const errorFieldName = getIn(errors, fieldName);
                                                return(
                                                    <div key={index} style={{display:"flex",flexDirection:"row"}}>
                                                        <TextField
                                                            fullWidth
                                                            style={{ width: "80%", marginBottom:16}}
                                                            placeholder={`email${index + 1}@email.com`}
                                                            variant={"outlined"}
                                                            name={fieldName}
                                                            type="email"
                                                            value={email.email}
                                                            onChange={handleChange}
                                                            error={Boolean(touchedFieldName && errorFieldName)}
                                                             helperText={touchedFieldName && errorFieldName ? errorFieldName : ""}
                                                        />
                                                        <div style={{marginLeft:"10%"}}
                                                             onClick={() => remove(index)}>
                                                            <TrashIcon />
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                            <div className={classes.link}
                                                onClick={() => push({ email: '' })}
                                            >
                                                + Добавить email
                                            </div>
                                        </div>
                                    )}
                                </FieldArray>
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

export default EmployeeInfoItemForm;
