import React, {useEffect} from "react";
import {Button, Divider, Paper, Typography} from "@material-ui/core";
import {useStylesEmployeeQualificationForm} from "./EmployeesQualificationFormStyles";
import {FieldArray, Form, Formik, getIn} from "formik";
import {validationSchemaContactsFromGreen} from "../../../../Counterparty/Forms/Counterparty/BasicInformationFormValidationSchema";
import {TrashIcon} from "../../../../../IMG/SVG/TrashIcon";
import ValidationErrorWrapper from "../../../../Utils/utils_options/ValidationErrorWrapper";
import InputFilterSelectedType from "../../../../Utils/FilterInputs/InputFilterSelect";
import { Input } from 'antd';
import InputFilterDatePicker from "../../../../Utils/FilterInputs/InputFilterDatePicker";
import moment from "moment";
import 'moment/locale/ru'
import { DatePicker } from 'antd';
import locale from 'antd/es/date-picker/locale/ru_RU';
import {InputEmployeesAssetsOptions} from "../../../../Utils/utils_options/InputEmployeesAssetsOptions";
import {useActions} from "../../../../../redux/type_redux_hook/useAction";
import {useTypedSelector} from "../../../../../redux/type_redux_hook/useTypedSelector";
import {notifyError, notifySuccess} from "../../../../Utils/utils_options/ToastNotify";
import {ToastContainer} from "react-toastify";

type EmployeeEducationFormProps = {
    setEmployeeEducation:(val:boolean) =>void
}
const EmployeeEducationForm:React.FC<EmployeeEducationFormProps> = ({setEmployeeEducation}) => {
    const {updateEmployeeQualificationDataAC,recoveryEmployeesQualificationState, fetchEmployeeByIdtAC} = useActions()
    const {error, success} = useTypedSelector(state => state.employeesQualification)
    const {employeeById} = useTypedSelector(state => state.employees)
    const {employee}:any = employeeById;
    const {id,educations}:any = employee;
    useEffect(()=>{
        if(error){
            notifyError();
            recoveryEmployeesQualificationState()
        }
        if(success){
            notifySuccess();
            recoveryEmployeesQualificationState()
            fetchEmployeeByIdtAC(id)
            setEmployeeEducation(true)
        }
    },[error, success])
    const initialValues = {

        employee_educations:[{
            education_type_id:educations.length > 0 ? educations[0].education_type_id : null,
            educational_institution_name:educations.length > 0 ? educations[0].educational_institution_name:"",
            education_document:educations.length > 0 ? educations[0].education_document:"",
            speciality:educations.length > 0 ? educations[0].speciality:"",
            end_date:educations.length > 0 ? educations[0].end_date:""
        }],
        experience_months:"",
        experience_years:""
    }
    const {assetsOptionsEducationTypes} = InputEmployeesAssetsOptions()
    const classes = useStylesEmployeeQualificationForm();
    return(
        <div className={classes.root}>
            <ToastContainer style={{ fontSize: 20, marginTop: "5%" }} />
            <Formik
                initialValues={initialValues}
                // validationSchema={validationSchemaContactsFromGreen}
                onSubmit={async ({experience_years, experience_months,...values},action) => {
                    // console.log (111, {...values, experience_months: moment(month).format("MM"), experience_years: 222})
                     console.log (111, {...values})
                    updateEmployeeQualificationDataAC(values,id)

                }}
            >
                {({ values, touched, handleChange,errors,setFieldValue }) => (
                    <Form>
            <div className={classes.title} >
                <Typography  className={classes.typographyTitle}>
                    Образование
                </Typography>
                <Button
                    color="primary"
                    type="submit"
                    className={classes.btnSubmit}
                    // onClick={() => setChangeContactsFromGreen(true)}
                    //  onClick={() => console.log(values)}
                >
                    Сохранить
                </Button>
            </div>

            <Paper elevation={0} className={classes.paper}>
                <div className={classes.column} style={{marginRight:40}}>
                    <Typography className={classes.typographyTitle}>
                        Стаж работы по специальности
                    </Typography>
                    <div style={{width:"50%", display:"flex", justifyContent:"flex-start"}}>

                            <DatePicker

                                className={classes.yearPiker}
                                        name={"experience_years"}
                                        value={
                                            values.experience_years
                                                ? moment(values.experience_years, "YYYY-MM-DD")
                                                : null
                                        }
                                        onChange={(_:any,date: any) => {
                                            setFieldValue(
                                                "experience_years",
                                                moment(date).format("YYYY-MM-DD")
                                            )
                                        }
                                        }
                                placeholder={"Лет"}
                                        allowClear={false}
                                        suffixIcon={<div></div>}
                                        picker="year"
                            />


                            <DatePicker
                                locale={locale}
                                name={"experience_months"}
                                value={
                                    values.experience_months
                                        ? moment(values.experience_months, "MMM")
                                        : null
                                }
                                onChange={(date:any) => {
                                    console.log(date)

                                    setFieldValue("experience_months", date)
                                }
                                }
                                className={classes.monthPiker}
                                placeholder={"Месяцев"}

                                picker="month"
                                  format="MMM"
                                allowClear={false}
                                suffixIcon={<div></div>}/>

                    </div>
                </div>
                <FieldArray name="employee_educations">
                    {({ remove, push }) => {
                        return (<div>
                                {values.employee_educations.length > 0 &&
                                values.employee_educations?.map((education:any, index:number) => {
                                    const field_education_type = `employee_educations[${index}].education_type_id`;
                                    const touched_field_education_type = getIn(touched, field_education_type);
                                    const error_field_education_type = getIn(errors, field_education_type);

                                    const field_institution_name = `employee_educations[${index}].educational_institution_name`;
                                    const touched_field_institution_name = getIn(touched, field_institution_name);
                                    const error_field_institution_name = getIn(errors, field_institution_name);

                                    const field_education_document = `employee_educations[${index}].education_document`;
                                    const touched_field_education_document = getIn(touched, field_education_document);
                                    const error_field_education_document = getIn(errors, field_education_document);

                                    const field_speciality = `employee_educations[${index}].speciality`;
                                    const touched_field_speciality = getIn(touched, field_speciality);
                                    const error_field_speciality = getIn(errors, field_speciality);

                                    const field_end_date = `employee_educations[${index}].end_date`;
                                    const touched_field_end_date = getIn(touched, field_end_date);
                                    const error_field_end_date = getIn(errors, field_end_date);

                                    return (
                <div className={classes.row}>
                    <div style={{width:"100%"}}>
                            <Divider variant="middle" style={{marginTop:0,marginBottom: 16}}/>
                            <div style={{display:"flex", flexDirection:"row",}}>
                                <div style={{width:"100%"}}>
                            <div className={classes.column}>
                                <Typography className={classes.typographyTitle}>
                                    Образование:
                                </Typography>
                                <Typography className={classes.typographyValue}>
                                    <ValidationErrorWrapper
                                        inputClassName="ant-select-selector"
                                        helperText={
                                            touched_field_education_type &&
                                            error_field_education_type
                                                ? error_field_education_type
                                                : ""
                                        }
                                        error={Boolean(
                                            touched_field_education_type &&
                                            error_field_education_type
                                        )}
                                    >
                                        <InputFilterSelectedType
                                            // className={classes.input}
                                            name={field_education_type}
                                            value={education.education_type_id}
                                            handleChange={(value: any) =>
                                                setFieldValue(
                                                    field_education_type,
                                                    value
                                                )
                                            }
                                            options={
                                                assetsOptionsEducationTypes
                                            }
                                            placeholder="Выберите"
                                        />
                                    </ValidationErrorWrapper>
                                </Typography>
                            </div>
                            <div className={classes.column}>
                                <Typography className={classes.typographyTitle}>
                                    Наименование учебного заведения:
                                </Typography>
                                <Typography className={classes.typographyValue}>
                                    <ValidationErrorWrapper
                                        inputClassName="ant-select-selector"
                                        helperText={
                                            touched_field_institution_name &&
                                            error_field_institution_name
                                                ? error_field_institution_name
                                                : ""
                                        }
                                        error={Boolean(
                                            touched_field_institution_name &&
                                            error_field_institution_name
                                        )}
                                    >
                                    <Input
                                        name={field_institution_name}
                                        value={education.educational_institution_name}
                                        onChange={handleChange}
                                        placeholder="Наименование учебного заведения" />
                                    </ValidationErrorWrapper>
                                </Typography>
                            </div>
                            <div className={classes.column}>
                                <Typography className={classes.typographyTitle}>
                                    Документ об образовании:
                                </Typography>
                                <Typography className={classes.typographyValue}>
                                    <ValidationErrorWrapper
                                        inputClassName="ant-input"
                                        helperText={
                                            touched_field_education_document &&
                                            error_field_education_document
                                                ? error_field_education_document
                                                : ""
                                        }
                                        error={Boolean(
                                            touched_field_education_document &&
                                            error_field_education_document
                                        )}
                                    >
                                        <Input
                                            name={field_education_document}
                                            value={education.education_document}
                                            onChange={handleChange}
                                            placeholder="Документ об образовании" />
                                    </ValidationErrorWrapper>
                                </Typography>
                            </div>
                            <div className={classes.column}>
                                <Typography className={classes.typographyTitle}>
                                    Специальность:
                                </Typography>
                                <Typography className={classes.typographyValue}>
                                    <ValidationErrorWrapper
                                        inputClassName="ant-input"
                                        helperText={
                                            touched_field_speciality &&
                                            error_field_speciality
                                                ? error_field_speciality
                                                : ""
                                        }
                                        error={Boolean(
                                            touched_field_speciality &&
                                            error_field_speciality
                                        )}
                                    >
                                        <Input
                                            name={field_speciality}
                                            value={education.speciality}
                                            onChange={handleChange}
                                            placeholder="Специальность" />
                                    </ValidationErrorWrapper>
                                </Typography>
                            </div>
                            <div className={classes.column}>
                                <Typography className={classes.typographyTitle}>
                                    Дата окончания:
                                </Typography>
                                <Typography className={classes.typographyValue}>
                                    <ValidationErrorWrapper
                                        inputClassName="ant-picker"
                                        helperText={
                                            touched_field_end_date &&
                                            error_field_end_date
                                                ? error_field_end_date
                                                : ""
                                        }
                                        error={Boolean(
                                            touched_field_end_date &&
                                            error_field_end_date
                                        )}
                                    >
                                        <InputFilterDatePicker
                                            name={field_end_date}
                                            value={
                                                education.end_date
                                                    ? moment(education.end_date, "YYYY-MM-DD")
                                                    : null
                                            }
                                            handleChange={(date: any) =>
                                                setFieldValue(
                                                    field_end_date,
                                                    moment(date).format("YYYY-MM-DD")
                                                )
                                            }
                                            className={classes.inputData}
                                            placeholder="01.01.1970"
                                            format="DD.MM.YYYY"
                                        />
                                    </ValidationErrorWrapper>
                                </Typography>
                            </div>
                                </div >
                                <div style={{marginLeft:16}}
                                     onClick={() => remove(index)}>
                                    <TrashIcon/>
                                </div>
                            </div>
                    </div>
                </div>
                                        )
                                    })}
                                <div className={classes.column} style={{marginRight:42}}>
                                    <div style={{width:"50%"}}></div>
                                    <div style={{width:"50%"}}>
                                        <div
                                            className={classes.addItem}
                                            onClick={() => push( {
                                                education_type_id:null,
                                                educational_institution_name:"",
                                                education_document:"",
                                                speciality:"",
                                                end_date:""
                                            })}
                                        >
                                            + Добавить ВУЗ
                                        </div>
                                    </div>
                                </div>
                                    </div>
                                )}}
                        </FieldArray>
            </Paper>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default EmployeeEducationForm;
