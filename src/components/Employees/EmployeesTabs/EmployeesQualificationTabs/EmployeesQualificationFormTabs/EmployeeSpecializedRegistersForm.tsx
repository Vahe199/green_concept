import React, {useEffect} from "react";
import {Button, Paper, Typography} from "@material-ui/core";
import {useStylesEmployeeQualificationForm} from "./EmployeesQualificationFormStyles";
import { Form, Formik} from "formik";
import ValidationErrorWrapper from "../../../../Utils/utils_options/ValidationErrorWrapper";
import {Input} from "antd";
import {useTypedSelector} from "../../../../../redux/type_redux_hook/useTypedSelector";
import {notifyError, notifySuccess} from "../../../../Utils/utils_options/ToastNotify";
import {useActions} from "../../../../../redux/type_redux_hook/useAction";
import {ToastContainer} from "react-toastify";
import {updateEmployeeRegisterDataAC} from "../../../../../redux/store/action_creator/employees_action-creator/employees_qualification_action_creator";

type EmployeeSpecializedFormProps = {
    setEmployeeSpecialized:(val:boolean)=>void
}

const EmployeeSpecializedRegistersForm:React.FC<EmployeeSpecializedFormProps> = ({setEmployeeSpecialized}) => {
const {recoveryEmployeesQualificationState,updateEmployeeRegisterDataAC} = useActions()
    const {error, success} = useTypedSelector(state => state.employeesQualification)
    const {employeeById} = useTypedSelector(state => state.employees)
    const {employee}:any =employeeById;
debugger
    useEffect(()=>{
        if(error){
            notifyError();
            recoveryEmployeesQualificationState()
        }
        if(success){
            notifySuccess();
            recoveryEmployeesQualificationState()
            setEmployeeSpecialized(true)
        }
    },[error, success])
    const initialValues = {
        construction_branch_register:"",
        engineering_surveys_construction_design_register:"",
    }
    const classes = useStylesEmployeeQualificationForm();
    return(
        <div className={classes.root}style={{marginBottom:50}}>
            <ToastContainer style={{ fontSize: 20, marginTop: "5%" }} />
            <Formik
                initialValues={initialValues}
                // validationSchema={validationSchemaContactsFromGreen}
                onSubmit={async (values,action) => {
                    console.log (111, values)
                    updateEmployeeRegisterDataAC(values,17)
                }}
            >
                {({ values, touched, handleChange,errors,setFieldValue }) => (
                    <Form>
            <div className={classes.title} >
                <Typography  style={{fontSize: 16, fontWeight:500,
                    color: '#3B4750'}}>
                    Данные о включении в специализированные реестры
                </Typography>
                <div onClick={() => console.log('true 11')}>
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
                                        placeholder="Введите номер реестра" />
                                </ValidationErrorWrapper>
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

export default EmployeeSpecializedRegistersForm;
