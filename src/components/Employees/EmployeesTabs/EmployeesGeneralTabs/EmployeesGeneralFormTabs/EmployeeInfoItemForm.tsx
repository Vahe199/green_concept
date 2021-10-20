import React, {useState} from "react";
import {Avatar, Button, Paper, TextField, Typography} from "@material-ui/core";
import { Formik, getIn, FieldArray,Form } from 'formik';

import {useStylesEmployeeForm} from "./EmployeesFormStyles";
import {TrashIcon} from "../../../../../IMG/SVG/TrashIcon";
import {useTypedSelector} from "../../../../../redux/type_redux_hook/useTypedSelector";
import InputFilterDatePicker from "../../../../Utils/FilterInputs/InputFilterDatePicker";
import moment from "moment";
import ValidationErrorWrapper from "../../../../Utils/utils_options/ValidationErrorWrapper";
import {employeesApi} from "../../../../../api/api";


type EmployeeFormDataProps = {
    setEmployeeData:(val:boolean)=>void
}
const EmployeeInfoItemForm:React.FC<EmployeeFormDataProps> = ({setEmployeeData}) => {
    const {loading,employeeById} = useTypedSelector(state => state.employees)
    let {employee}:any = employeeById
    let {photo, surname,firstname, middlename, birthdate,phones,emails, id}:any = employee;
    const [avatarPreview,setAvatarPreview] = useState<any>()
    debugger
    const initialValues = {
        firstname:firstname ? firstname : "",
        middlename:middlename ? middlename : "",
        surname:surname ? surname : "",
        photo:"",
        birthdate:birthdate? birthdate : "",
        emails: [{email: ''}],
        phones:[{phone:phones ? phones[0].phone : ""}],

    };
    const classes = useStylesEmployeeForm();
    return(
        <div className={classes.root}>
            <Formik
                 initialValues={initialValues}
                onSubmit={async (values) => {
                    let formData = new FormData();
                    Object.entries(values).forEach(([key, value]) => {
                        formData.append(key, value)
                    })
                    console.log(values, formData)
                    employeesApi.updateEmployeeDataById(formData, id)
                }}
            >
                {({ values,setFieldValue, touched,handleChange,errors }) => (
                    <Form encType={"multipart/form-data"}>
            <div className={classes.title} >
                <Typography  className={classes.typographyTitle}>
                    Данные сотрудника
                </Typography>
                <Button color="primary" type="submit"
                        // onClick={()=>setEmployeeData(true)}
                        // onClick={()=>console.log(values,"values", errors, " errors")}
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
                            onChange={(e:any) => {
                                const fileReader = new FileReader();
                                fileReader.onload = () => {
                                    if (fileReader.readyState === 2) {
                                        debugger
                                        setFieldValue('photo', e.target.files[0]);
                                         setAvatarPreview(fileReader.result);
                                    }
                                };
                                if(e.target.files[0]) {
                                    fileReader.readAsDataURL(e.target.files[0]);
                                }
                            }}
                        />
                        <label htmlFor="raised-button-file">
                            <Button  component="span"
                                     className={avatarPreview ? classes.fileInputAvatar :classes.fileInput}
                                >
                                {avatarPreview && <Avatar alt="Remy Sharp"
                                         src={avatarPreview ? avatarPreview : ""}
                                         className={classes.fileInputAvatar}/>}
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
                                <ValidationErrorWrapper
                                    inputClassName="ant-picker"
                                    error={touched.birthdate && Boolean(errors.birthdate)}
                                    helperText={touched.birthdate && errors.birthdate}
                                >
                                    <InputFilterDatePicker
                                        value={
                                            values.birthdate
                                                ? moment(values.birthdate, "YYYY-MM-DD")
                                                : null
                                        }
                                        handleChange={(date: any) =>
                                            setFieldValue(
                                                "birthdate",
                                                moment(date).format("YYYY-MM-DD")
                                            )
                                        }
                                        placeholder="01.01.1970"
                                        format="DD.MM.YYYY"
                                    />
                                </ValidationErrorWrapper>
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.typographyTitle}>
                                Телефон
                            </Typography>
                            <Typography className={classes.typographyValue}>
                                <FieldArray name="phones">
                                    {() => {
                                        return (
                                            <div>
                                                {
                                                values.phones?.map((phone, index) => {
                                                    const fieldName = `phones[${index}].phone`;
                                                    const touchedFieldName = getIn(
                                                        touched,
                                                        fieldName
                                                    );
                                                    const errorFieldName = getIn(
                                                        errors,
                                                        fieldName
                                                    );
                                                    return (
                                                                <TextField
                                                                    fullWidth
                                                                    placeholder={"+79999999999"}
                                                                    variant={"outlined"}
                                                                    name={fieldName}
                                                                    value={phone.phone}
                                                                    onChange={handleChange}
                                                                    error={Boolean(
                                                                        touchedFieldName && errorFieldName
                                                                    )}
                                                                    helperText={
                                                                        touchedFieldName && errorFieldName
                                                                            ? errorFieldName
                                                                            : ""
                                                                    }
                                                                />
                                                    );
                                                })}

                                            </div>
                                        );
                                    }}
                                </FieldArray>
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
                    </Form>
                    )}
            </Formik>
        </div>
    )
}

export default EmployeeInfoItemForm;
