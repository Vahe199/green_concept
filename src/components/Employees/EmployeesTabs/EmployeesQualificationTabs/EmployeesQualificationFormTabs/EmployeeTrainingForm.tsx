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

    const {recoveryEmployeesQualificationState,updateEmployeeSkillsDataAC,fetchEmployeeByIdtAC } = useActions()
    const {error, success} = useTypedSelector(state => state.employeesQualification)
    const {employeeById} = useTypedSelector(state => state.employees)
    const {employee}:any =employeeById;
    const {skills}:any =employee;
    useEffect(()=>{
        if(error){
            notifyError("некорректные данные");
            recoveryEmployeesQualificationState()
        }
        if(success){
            notifySuccess("Изменение прошло успешно");
            recoveryEmployeesQualificationState()
            fetchEmployeeByIdtAC(employee.id)
            setEmployeeTraining(true)
        }
    },[error, success])
    const initialValues = {
        employee_skills:[{
            educational_institution_name:skills.length > 0 ? skills[0].educational_institution_name:"",
            education_document:skills.length > 0 ? skills[0].education_document:"",
            expire_date:skills.length > 0 ? skills[0].expire_date:""
        }]
    }
    const classes = useStylesEmployeeQualificationForm();
    return(
        <div className={classes.root}>
            <ToastContainer style={{ fontSize: 20, marginTop: "5%" }} />
            <Formik
                initialValues={initialValues}
                // validationSchema={validationSchemaContactsFromGreen}
                onSubmit={async (values,action) => {
                     updateEmployeeSkillsDataAC(values,employee.id)
                    // setEmployeeTraining(true) gevor
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
                >
                    Сохранить
                </Button>
            </div>
            <Paper elevation={0} className={classes.paper}>
                    <FieldArray name="employee_skills">
                        {({ remove, push }) => {
                            return (<div>
                                    {values.employee_skills.length > 0 &&
                                    values.employee_skills?.map((skills:any, index:number) => {

                                        const field_institution_name = `employee_skills[${index}].educational_institution_name`;
                                        const touched_field_institution_name = getIn(touched, field_institution_name);
                                        const error_field_institution_name = getIn(errors, field_institution_name);

                                        const field_document = `employee_skills[${index}].education_document`;
                                        const touched_field_document = getIn(touched, field_document);
                                        const error_field_document = getIn(errors, field_document);

                                        const field_expire_date = `employee_skills[${index}].expire_date`;
                                        const touched_field_expire_date = getIn(touched, field_expire_date);
                                        const error_field_expire_date = getIn(errors, field_expire_date);

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
                                                                            value={skills.educational_institution_name}
                                                                            onChange={handleChange}
                                                                            className={classes.input2}
                                                                            autoComplete={'off'}
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
                                                                            touched_field_document &&
                                                                            error_field_document
                                                                                ? error_field_document
                                                                                : ""
                                                                        }
                                                                        error={Boolean(
                                                                            touched_field_document &&
                                                                            error_field_document
                                                                        )}
                                                                    >
                                                                        <Input
                                                                            name={field_document}
                                                                            value={skills.education_document}
                                                                            onChange={handleChange}
                                                                            className={classes.input2}
                                                                            autoComplete={'off'}
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
                                                                            touched_field_expire_date &&
                                                                            error_field_expire_date
                                                                                ? error_field_expire_date
                                                                                : ""
                                                                        }
                                                                        error={Boolean(
                                                                            touched_field_expire_date &&
                                                                            error_field_expire_date
                                                                        )}
                                                                    >
                                                                        <InputFilterDatePicker
                                                                            name={field_expire_date}
                                                                            value={
                                                                                skills.expire_date
                                                                                    ? moment(skills.expire_date, "YYYY-MM-DD")
                                                                                    : ""
                                                                            }
                                                                            handleChange={(date: any) =>
                                                                                setFieldValue(
                                                                                    field_expire_date,
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
                                                    educational_institution_name:"",
                                                    education_document:"",
                                                    expire_date:""
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
