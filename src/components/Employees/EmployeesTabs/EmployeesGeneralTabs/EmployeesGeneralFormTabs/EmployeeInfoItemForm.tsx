import React, {useEffect, useState} from "react";
import {Avatar, Button, Paper, TextField, Typography} from "@material-ui/core";
import {FieldArray, Form, Formik, getIn} from 'formik';
import {Input} from "antd";
import {useStylesEmployeeForm} from "./EmployeesFormStyles";
import {TrashIcon} from "../../../../../IMG/SVG/TrashIcon";
import {useTypedSelector} from "../../../../../redux/type_redux_hook/useTypedSelector";
import InputFilterDatePicker from "../../../../Utils/FilterInputs/InputFilterDatePicker";
import moment from "moment";
import ValidationErrorWrapper from "../../../../Utils/utils_options/ValidationErrorWrapper";
import {useActions} from "../../../../../redux/type_redux_hook/useAction";
import {notifyError, notifySuccess} from "../../../../Utils/utils_options/ToastNotify";
import {ToastContainer} from "react-toastify";
import MaskedInput from "antd-mask-input";
import get from "lodash/get";


type EmployeeFormDataProps = {
    setEmployeeData:(val:boolean)=>void
}
const EmployeeInfoItemForm:React.FC<EmployeeFormDataProps> = ({setEmployeeData}) => {
    const {updateEmployeeEmployeeDataAC,recoveryEmployeesState} = useActions()
    const {error,success_update,loading,employeeById} = useTypedSelector(state => state.employees)

    let {employee}:any = employeeById
    let {photo, surname,firstname, middlename, birthdate,phones,emails, id}:any = employee;
    const [avatarPreview,setAvatarPreview] = useState<any>()
    useEffect(()=>{
        if(error){
            notifyError();
            recoveryEmployeesState()
        }
        if(success_update == "EMPLOYEE_DATA"){
            notifySuccess();
            recoveryEmployeesState()
             setEmployeeData(true)
        }
    },[error,success_update])
    const initialValues = {
        firstname:firstname ? firstname : "",
        middlename:middlename ? middlename : "",
        surname:surname ? surname : "",
        photo:"",
        birthdate:birthdate? birthdate : "",
        emails: [""],
        phones:[""],

    };
    const classes = useStylesEmployeeForm();
    return(
        <div className={classes.root}>
            <ToastContainer style={{ fontSize: 20, marginTop: "5%" }} />
            <Formik
                 initialValues={initialValues}
                onSubmit={async (values) => {
                    let formData = new FormData();
                    Object.entries(values).forEach(([key, value]) => {
                        if(key == "photo") {
                            formData.append(key, "value")
                        } else{
                            formData.append(key, value)
                        }

                    })
                    // Object.entries(values).forEach((item) => {
                    //     const key = get(item, "[0]", "");
                    //     const value = get(item, "[1]", "");
                    //
                    //     const nameMapper = {
                    //         phones: "phone",
                    //         emails: "email",
                    //     }
                    //
                    //     if (Array.isArray(value)) {
                    //         value.forEach((val, index) => {
                    //             formData.append(`${key}[${index}][${nameMapper[key as keyof typeof nameMapper]}]`, val);
                    //         });
                    //     }
                    //     else {
                    //         formData.append(key, value);
                    //     }
                    // });

                    console.log(values,"values", formData,'formData')
                     updateEmployeeEmployeeDataAC(formData, id)
                }}
            >
                {({ values,setFieldValue, touched,handleChange,errors }) => (
                    <Form encType={"multipart/form-data"}>
            <div className={classes.title} >
                <Typography  className={classes.typographyTitle}>
                    Данные сотрудника
                </Typography>
                <Button color="primary" type="submit"
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
                                <ValidationErrorWrapper
                                    inputClassName="ant-input"
                                    error={touched.surname && Boolean(errors.surname)}
                                    helperText={touched.surname && errors.surname}
                                >
                                    <Input
                                        name="surname"
                                        placeholder={"Фамилия"}
                                        className={classes.input2}
                                        autoComplete="off"
                                        value={values.surname}
                                        onChange={handleChange}

                                        />
                                </ValidationErrorWrapper>
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.typographyTitle}>
                                Имя
                            </Typography>
                            <Typography className={classes.typographyValue}>
                                <ValidationErrorWrapper
                                    inputClassName="ant-input"
                                    error={touched.firstname && Boolean(errors.firstname)}
                                    helperText={touched.firstname && errors.firstname}
                                >
                                    <Input
                                        name="firstname"
                                        placeholder={"Имя"}
                                        value={values.firstname}
                                        onChange={handleChange}
                                        className={classes.input2}
                                        autoComplete="off"
                                    />
                                </ValidationErrorWrapper>
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.typographyTitle}>
                                Отчество
                            </Typography>
                            <Typography className={classes.typographyValue}>
                                <ValidationErrorWrapper
                                    inputClassName="ant-input"
                                    error={touched.middlename && Boolean(errors.middlename)}
                                    helperText={touched.middlename && errors.middlename}
                                >
                                    <Input
                                        name="middlename"
                                        placeholder={"Отчество"}
                                        value={values.middlename}
                                        onChange={handleChange}
                                        className={classes.input2}
                                        autoComplete="off"
                                    />
                                </ValidationErrorWrapper>
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
                                                    const fieldName = `phones[${index}]`;
                                                    const touchedFieldName = getIn(
                                                        touched,
                                                        fieldName
                                                    );
                                                    const errorFieldName = getIn(
                                                        errors,
                                                        fieldName
                                                    );
                                                    return (
                                                        <ValidationErrorWrapper
                                                            inputClassName="ant-input"
                                                            error={Boolean(
                                                                touchedFieldName && errorFieldName
                                                            )}
                                                            helperText={
                                                                touchedFieldName && errorFieldName
                                                                    ? errorFieldName
                                                                    : ""
                                                            }
                                                        >
                                                                <MaskedInput
                                                                    name={fieldName}
                                                                    value={phone}
                                                                    onChange={(e) => {
                                                                        setFieldValue(
                                                                            fieldName,
                                                                            e.target.value.replace(
                                                                                /[^0-9]/g,
                                                                                ""
                                                                            )
                                                                        );
                                                                    }}
                                                                    placeholder={"7 999 999 99 99"}
                                                                    mask="1 111 111 11 11"
                                                                    prefix={<>+</>}
                                                                />

                                                        </ValidationErrorWrapper>
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
                                                const fieldName = `emails[${index}]`;
                                                const touchedFieldName = getIn(touched, fieldName);
                                                const errorFieldName = getIn(errors, fieldName);
                                                return(
                                                    <div key={index} style={{display:"flex",flexDirection:"row"}}>

                                                        <ValidationErrorWrapper
                                                            inputClassName="ant-input"
                                                            error={Boolean(touchedFieldName && errorFieldName)}
                                                            helperText={touchedFieldName && errorFieldName ? errorFieldName : ""}
                                                        >
                                                            <Input
                                                                style={{ width: "100%", marginBottom:16}}
                                                                name={fieldName}
                                                                placeholder={`email${index + 1}@email.com`}
                                                                value={email}
                                                                onChange={handleChange}
                                                                className={classes.input2}
                                                                autoComplete="off"
                                                            />
                                                        </ValidationErrorWrapper>
                                                        <div style={{marginLeft:16}}
                                                             onClick={() => remove(index)}>
                                                            <TrashIcon />
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                            <div className={classes.link}
                                                onClick={() => push("")}
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
