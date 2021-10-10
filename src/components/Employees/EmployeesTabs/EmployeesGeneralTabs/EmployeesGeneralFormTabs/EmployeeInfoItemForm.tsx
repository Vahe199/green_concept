import React from "react";
import {Button, Paper, TextField, Typography} from "@material-ui/core";
import { Formik, getIn, FieldArray } from 'formik';

import {useStylesEmployeeForm} from "./EmployeesFormStyles";
import {TrashIcon} from "../../../../../IMG/SVG/TrashIcon";

const initialValues = {
    familia:'',
    name:'',
    otchestvo:'',
    dataRojdenia:'',
    phone:'',
    emails: [{email: ''}],
};
type EmployeeFormDataProps = {
    setEmployeeData:(val:boolean)=>void
}
const EmployeeInfoItemForm:React.FC<EmployeeFormDataProps> = ({setEmployeeData}) => {
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
                                    name="familia"
                                    value={values.familia}
                                    onChange={handleChange}
                                    error={touched.familia && Boolean(errors.familia)}
                                    helperText={touched.familia && errors.familia}
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
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    error={touched.name && Boolean(errors.name)}
                                    helperText={touched.name && errors.name}
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
                                    name="otchestvo"
                                    value={values.otchestvo}
                                    onChange={handleChange}
                                    error={touched.otchestvo && Boolean(errors.otchestvo)}
                                    helperText={touched.otchestvo && errors.otchestvo}
                                />
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.typographyTitle}>
                                Дата рождения
                            </Typography>
                            <Typography className={classes.typographyValue}>
                                <TextField
                                    name={"dataRojdenia"}
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
