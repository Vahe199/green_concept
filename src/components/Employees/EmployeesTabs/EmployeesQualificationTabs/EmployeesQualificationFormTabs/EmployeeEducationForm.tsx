import React from "react";
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

const EmployeeEducationForm:React.FC = () => {
    const initialValues = {
        contact_employees:[{direction_id: '', employee_id: '', info: ''}]
    }
    let EducationState = [1,2,3]
    const classes = useStylesEmployeeQualificationForm();
    return(
        <div className={classes.root}>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchemaContactsFromGreen}
                onSubmit={async (values,action) => {
                    console.log(values,"values")


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
                    // onClick={() => console.log(errors)}
                >
                    Сохранить
                </Button>
            </div>

            <Paper elevation={0} className={classes.paper}>
                <div className={classes.column} style={{marginBottom:0}}>
                    <Typography className={classes.typographyTitle}>
                        Стаж работы по специальности
                    </Typography>
                    <Typography className={classes.typographyValue}>
                        12 лет 11 месяцев
                    </Typography>
                </div>
                <FieldArray name="contact_employees">
                    {({ remove, push }) => {
                        return (<div>
                                {values.contact_employees.length > 0 &&
                                values.contact_employees?.map((employees, index) => {
                                    const fieldDirection = `contact_employees[${index}].direction_id`;
                                    const touchedFieldDirection = getIn(touched, fieldDirection);
                                    const errorFieldDirection = getIn(errors, fieldDirection);
                                    const fieldEmployee = `contact_employees[${index}].employee_id`;
                                    const touchedFieldEmployee = getIn(touched, fieldEmployee);
                                    const errorFieldEmployee = getIn(errors, fieldEmployee);
                                    const fieldInfo = `contact_employees[${index}].info`;
                                    const touchedFieldInfo = getIn(touched, fieldInfo);
                                    const errorFieldInfo = getIn(errors, fieldInfo);
                                    return (
                <div className={classes.row}>
                    <div style={{width:"100%"}}>
                            <Divider variant="middle" style={{marginBottom: 24, marginTop: 24}}/>
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
                                            touchedFieldDirection &&
                                            errorFieldDirection
                                                ? errorFieldDirection
                                                : ""
                                        }
                                        error={Boolean(
                                            touchedFieldDirection &&
                                            errorFieldDirection
                                        )}
                                    >
                                        <InputFilterSelectedType
                                            // className={classes.input}
                                            name={fieldDirection}
                                            value={employees.direction_id}
                                            handleChange={(value: any) =>
                                                setFieldValue(
                                                    fieldDirection,
                                                    value
                                                )
                                            }
                                            // options={
                                            //     assetsOptionsDirections
                                            // }
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
                                            touchedFieldDirection &&
                                            errorFieldDirection
                                                ? errorFieldDirection
                                                : ""
                                        }
                                        error={Boolean(
                                            touchedFieldDirection &&
                                            errorFieldDirection
                                        )}
                                    >
                                    <Input
                                        name={fieldDirection}
                                        value={employees.direction_id}
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
                                        inputClassName="ant-select-selector"
                                        helperText={
                                            touchedFieldDirection &&
                                            errorFieldDirection
                                                ? errorFieldDirection
                                                : ""
                                        }
                                        error={Boolean(
                                            touchedFieldDirection &&
                                            errorFieldDirection
                                        )}
                                    >
                                        <Input
                                            name={fieldDirection}
                                            value={employees.direction_id}
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
                                        inputClassName="ant-select-selector"
                                        helperText={
                                            touchedFieldDirection &&
                                            errorFieldDirection
                                                ? errorFieldDirection
                                                : ""
                                        }
                                        error={Boolean(
                                            touchedFieldDirection &&
                                            errorFieldDirection
                                        )}
                                    >
                                        <Input
                                            name={fieldDirection}
                                            value={employees.direction_id}
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
                                            touchedFieldDirection &&
                                            errorFieldDirection
                                                ? errorFieldDirection
                                                : ""
                                        }
                                        error={Boolean(
                                            touchedFieldDirection &&
                                            errorFieldDirection
                                        )}
                                    >
                                        <InputFilterDatePicker
                                            value={
                                                employees.direction_id
                                                    ? moment(employees.direction_id, "YYYY-MM-DD")
                                                    : null
                                            }
                                            handleChange={(date: any) =>
                                                setFieldValue(
                                                    "birthdate",
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
                                        <div
                                             className={classes.addItem}
                                            onClick={() => push({direction_id: '', employee_id: '', info: ''})}
                                        >
                                            + Добавить ВУЗ
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
