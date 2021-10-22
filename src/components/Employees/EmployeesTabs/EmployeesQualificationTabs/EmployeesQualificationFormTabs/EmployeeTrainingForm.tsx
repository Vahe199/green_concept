import React, {useEffect} from "react";
import {Button, Divider, Paper, Typography} from "@material-ui/core";
import {useStylesEmployeeQualificationForm} from "./EmployeesQualificationFormStyles";
import {FieldArray, Form, Formik, getIn} from "formik";
import {employeesApi} from "../../../../../api/api";
import ValidationErrorWrapper from "../../../../Utils/utils_options/ValidationErrorWrapper";
import InputFilterSelectedType from "../../../../Utils/FilterInputs/InputFilterSelect";
import {Input} from "antd";
import InputFilterDatePicker from "../../../../Utils/FilterInputs/InputFilterDatePicker";
import moment from "moment";
import {TrashIcon} from "../../../../../IMG/SVG/TrashIcon";
import {useActions} from "../../../../../redux/type_redux_hook/useAction";
import {useTypedSelector} from "../../../../../redux/type_redux_hook/useTypedSelector";
import {notifyError, notifySuccess} from "../../../../Utils/utils_options/ToastNotify";
import {ToastContainer} from "react-toastify";

type TrainingFormProps = {
    setEmployeeTraining:(val:boolean)=>void
}

const EmployeeTrainingForm:React.FC<TrainingFormProps> = ({setEmployeeTraining}) => {

    const {recoveryEmployeesQualificationState} = useActions()
    const {error, success} = useTypedSelector(state => state.employeesQualification)
    useEffect(()=>{
        if(error){
            notifyError();
            recoveryEmployeesQualificationState()
        }
        if(success){
            notifySuccess();
            recoveryEmployeesQualificationState()
            setEmployeeTraining(true)
        }
    },[error, success])
    const initialValues = {

        employee_educations:[{
            education_type_id:null,
            educational_institution_name:"",
            education_document:"",
            speciality:"",
            end_date:""
        }],
        experience_months:"",
        experience_years:""
    }
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
                    setEmployeeTraining(true)
                }}
            >
                {({ values, touched, handleChange,errors,setFieldValue }) => (
                    <Form>
            <div className={classes.title} >
                <Typography  className={classes.typographyTitle}>
                    Повышение квалификации
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
                    <FieldArray name="employee_educations">
                        {({ remove, push }) => {
                            return (<div>
                                    {values.employee_educations.length > 0 &&
                                    values.employee_educations?.map((education:any, index:number) => {

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
                                                    {index != 0 && <Divider variant="middle"
                                                              style={{marginTop: 0, marginBottom: 16}}/>}
                                                    <div style={{display:"flex", flexDirection:"row",}}>
                                                        <div style={{width:"100%"}}>

                                                            <div className={classes.column} >
                                                                <Typography className={classes.typographyTitleEnh} style={index != 0 ?{width:"calc(40% + 16px)"}:{}}>
                                                                    Наименование учебного заведения:
                                                                </Typography>
                                                                <Typography className={classes.typographyValueEnh}  style={index != 0 ?{width:"calc(60% - 16px)"}:{}}>
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
                                                                            placeholder="Наименование учебного заведения" />
                                                                    </ValidationErrorWrapper>
                                                                </Typography>
                                                            </div>
                                                            <div className={classes.column}>
                                                                <Typography className={classes.typographyTitleEnh} style={index != 0 ?{width:"calc(40% + 16px)"}:{}}>
                                                                    Документ:
                                                                </Typography>
                                                                <Typography className={classes.typographyValueEnh}  style={index != 0 ?{width:"calc(60% - 16px)"}:{}}>
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
                                                                            placeholder="Впишите название документа" />
                                                                    </ValidationErrorWrapper>
                                                                </Typography>
                                                            </div>
                                                            <div className={classes.column}>
                                                                <Typography className={classes.typographyTitleEnh} style={index != 0 ?{width:"calc(40% + 16px)"}:{}}>
                                                                    Срок действия документа:
                                                                </Typography>
                                                                <Typography className={classes.typographyValueEnh}
                                                                            style={index != 0 ?{width:"calc(60% - 16px)"}:{}}
                                                                >
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
                                                        {index != 0 && <div style={{marginLeft: 16}}
                                                              onClick={() => remove(index)}>
                                                            <TrashIcon/>
                                                        </div>}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                    <div className={classes.column} style={{marginRight:42}}>
                                        <div className={classes.typographyTitleEnh}></div>
                                        <div className={classes.typographyValueEnh}>
                                            <div
                                                className={classes.addItem} style={{marginLeft:16}}
                                                onClick={() => push( {
                                                    education_type_id:null,
                                                    educational_institution_name:"",
                                                    education_document:"",
                                                    speciality:"",
                                                    end_date:""
                                                })}
                                            >
                                                + Добавить повышение квалификации
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

export default EmployeeTrainingForm;
