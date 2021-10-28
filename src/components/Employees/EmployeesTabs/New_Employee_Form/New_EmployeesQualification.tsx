import React, {useState} from "react";
import EmployeeEducationForm from "../EmployeesQualificationTabs/EmployeesQualificationFormTabs/EmployeeEducationForm";
import EmployeeSpecializedRegistersForm
    from "../EmployeesQualificationTabs/EmployeesQualificationFormTabs/EmployeeSpecializedRegistersForm";
import EmployeeTrainingForm from "../EmployeesQualificationTabs/EmployeesQualificationFormTabs/EmployeeTrainingForm";
import {useStylesNewEmployee} from "./newEmployeeStyles";
import {FieldArray, Form, Formik, getIn} from "formik";
import {Button, Divider, Paper, Typography} from "@material-ui/core";
import {DatePicker, Input} from "antd";
import moment from "moment";
import locale from "antd/es/date-picker/locale/ru_RU";
import ValidationErrorWrapper from "../../../Utils/utils_options/ValidationErrorWrapper";
import InputFilterSelectedType from "../../../Utils/FilterInputs/InputFilterSelect";
import InputFilterDatePicker from "../../../Utils/FilterInputs/InputFilterDatePicker";
import {TrashIcon} from "../../../../IMG/SVG/TrashIcon";
import {InputEmployeesAssetsOptions} from "../../../Utils/utils_options/InputEmployeesAssetsOptions";
import BackToAddress from "../../../Utils/BackToAddress";
import {employeesApi} from "../../../../api/api";
import {notifyError, notifySuccess} from "../../../Utils/utils_options/ToastNotify";
import {ToastContainer} from "react-toastify";
import {validationSchemaEmployeesQualificationForm} from "./employeesFormValidationSchema";


const NewEmployeesQualification:React.FC = () => {
    const classes = useStylesNewEmployee()
    const {assetsOptionsEducationTypes} = InputEmployeesAssetsOptions()

    const initialValues = {

        employee_educations:[{
            education_type_id:null,
            educational_institution_name:"",
            education_document:"",
            speciality:"",
            end_date:""
        }],
        experience_months:"",
        experience_years:"",
        construction_branch_register:"",
        engineering_surveys_construction_design_register:"",
        employee_skills:[{
            educational_institution_name:"",
            education_document:"",
            expire_date:""
        }]
    }
    return(
        <div className={classes.root}>
            <BackToAddress address="/employees" title="списку" />
            <ToastContainer style={{ fontSize: 20, marginTop: "5%" }} />
            <Formik
                initialValues={initialValues}
                 validationSchema={validationSchemaEmployeesQualificationForm}
                onSubmit={async ({experience_years, experience_months,...values},action) => {
                    // console.log (111, {...values, experience_months: moment(month).format("MM"), experience_years: 222})
                    console.log (111, {...values})
                    employeesApi.createNewEmployeeQualification(9,values ).then(res =>{
                        notifySuccess();
                        action.resetForm()
                        console.log(res.data, "res data")
                        return res
                    })
                        .catch((e)=>{
                            notifyError();
                            return e
                        })
                }}
            >
                {({ values, touched, handleChange,errors,setFieldValue }) => (
                    <Form>
                        <Button
                            // onClick={()=>console.log(errors)}
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.btn}
                        >
                            Сохранить карточку
                        </Button>
        <div className={classes.containerQualification}>
            <div style={{width:'48%',marginLeft:32}}>
            <div>
                <div className={classes.title} >
                    <Typography  className={classes.typographyTitle}>
                        Образование
                    </Typography>

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
                                                                            className={classes.input2}
                                                                            autoComplete={'off'}
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
                                                                            className={classes.input2}
                                                                            autoComplete={'off'}
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
                                                                            className={classes.input2}
                                                                            autoComplete={'off'}
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
                                        <div className={classes.typographyTitle}></div>

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
                            )}}
                    </FieldArray>
                </Paper>
            </div>

               <div>
                   <div className={classes.title} >
                       <Typography  style={{fontSize: 16, fontWeight:500,
                           color: '#3B4750'}}>
                           Данные о включении в специализированные реестры
                       </Typography>
                   </div>
                   <Paper elevation={0} className={classes.paper}>
                       <div className={classes.row}>
                           <div style={{width: "100%"}}>

                               <div className={classes.column}>
                                   <Typography className={classes.typographyTitle} style={{width:"calc(50% - 20px)"}}>
                                       Национальный реестр специалистов в области строительства:
                                   </Typography>
                                   <Typography className={classes.typographyValue} style={{width:"calc(50% + 20px)"}}>
                                       <ValidationErrorWrapper
                                           inputClassName="ant-input"
                                           error={
                                               touched.construction_branch_register &&
                                               Boolean(errors.construction_branch_register)
                                           }
                                           helperText={
                                               touched.construction_branch_register &&
                                               errors.construction_branch_register
                                           }
                                       >
                                           <Input
                                               name={"construction_branch_register"}
                                               value={values.construction_branch_register}
                                               onChange={handleChange}
                                               className={classes.input2}
                                               autoComplete={'off'}
                                               placeholder="Введите номер реестра" />
                                       </ValidationErrorWrapper>
                                   </Typography>
                               </div>
                               <div className={classes.column}>
                                   <Typography className={classes.typographyTitle} style={{width:"calc(50% - 20px)"}}>
                                       Национальный реестр специалистов в области инженерных изысканий и архитектурно-строительного проектирования:
                                   </Typography>
                                   <Typography className={classes.typographyValue} style={{width:"calc(50% + 20px)"}}>
                                       <ValidationErrorWrapper
                                           inputClassName="ant-input"
                                           error={
                                               touched.engineering_surveys_construction_design_register &&
                                               Boolean(errors.engineering_surveys_construction_design_register)
                                           }
                                           helperText={
                                               touched.engineering_surveys_construction_design_register &&
                                               errors.engineering_surveys_construction_design_register
                                           }
                                       >
                                           <Input
                                               name={"engineering_surveys_construction_design_register"}
                                               value={values.engineering_surveys_construction_design_register}
                                               onChange={handleChange}
                                               className={classes.input2}
                                               autoComplete={'off'}
                                               placeholder="Введите номер реестра" />
                                       </ValidationErrorWrapper>
                                   </Typography>
                               </div>

                           </div>
                       </div>
                   </Paper>
               </div>
            </div>
            <div style={{width:'45%',marginRight:32}}>
             <div>
                 <div className={classes.title} >
                     <Typography  className={classes.typographyTitle}>
                         Повышение квалификации
                     </Typography>

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
                                                                                     : null
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
             </div>
            </div>

        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )

}
export default NewEmployeesQualification;
