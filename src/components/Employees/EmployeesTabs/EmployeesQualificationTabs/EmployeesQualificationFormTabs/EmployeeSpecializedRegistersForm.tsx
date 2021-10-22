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

type EmployeeSpecializedFormProps = {
    setEmployeeSpecialized:(val:boolean)=>void
}

const EmployeeSpecializedRegistersForm:React.FC<EmployeeSpecializedFormProps> = ({setEmployeeSpecialized}) => {
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
            setEmployeeSpecialized(true)
        }
    },[error, success])
    const initialValues = {
        roster_specialists:"",
        register_specialists_engineering:""
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
                    setEmployeeSpecialized(true)
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
                                        touched.roster_specialists &&
                                        Boolean(errors.roster_specialists)
                                    }
                                    helperText={
                                        touched.roster_specialists &&
                                        errors.roster_specialists
                                    }
                                >
                                    <Input
                                        name={"roster_specialists"}
                                        value={values.roster_specialists}
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
                                        touched.register_specialists_engineering &&
                                        Boolean(errors.register_specialists_engineering)
                                    }
                                    helperText={
                                        touched.register_specialists_engineering &&
                                        errors.register_specialists_engineering
                                    }
                                >
                                    <Input
                                        name={"register_specialists_engineering"}
                                        value={values.register_specialists_engineering}
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
