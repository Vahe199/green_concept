import React, {useEffect} from "react";
import {Button, Paper, Typography} from "@material-ui/core";
import {FieldArray, Formik,Form, getIn} from 'formik';

import {useStylesEmployeeForm} from "./EmployeesFormStyles";
import ValidationErrorWrapper from "../../../../Utils/utils_options/ValidationErrorWrapper";
import InputFilterDatePicker from "../../../../Utils/FilterInputs/InputFilterDatePicker";
import moment from "moment";
import InputFilterSelectedType from "../../../../Utils/FilterInputs/InputFilterSelect";
import {InputAssetsOptions} from "../../../../Utils/utils_options/InputAssetsOptions";
import {useTypedSelector} from "../../../../../redux/type_redux_hook/useTypedSelector";
import {useActions} from "../../../../../redux/type_redux_hook/useAction";
import {notifyError, notifySuccess} from "../../../../Utils/utils_options/ToastNotify";
import {ToastContainer} from "react-toastify";
import {InputEmployeesAssetsOptions} from "../../../../Utils/utils_options/InputEmployeesAssetsOptions";


type EmployeeFormDataProps = {
    setEmployeeGeneralInfo:(val:boolean)=>void
}
const EmployeeGeneralInfoForm:React.FC<EmployeeFormDataProps> = ({setEmployeeGeneralInfo}) => {
  const { assetsOptionsCompanies, assetsOptionsRegions, assetsOptionsEmployeePositions} = InputEmployeesAssetsOptions()
    const {updateEmployeeGeneralListAC,recoveryEmployeesState} = useActions()
    const {employeeById, error,success_update} = useTypedSelector(state => state.employees)
    let {employee}:any = employeeById
    let {region,company,directions,position,end_work_date ,start_work_date, id}:any = employee;
    useEffect( ()=>{
        if(error){
            notifyError("некорректные данные");
            recoveryEmployeesState()
        }
        if(success_update === "GENERAL_INFO"){
            notifySuccess("Изменение прошло успешно");
            recoveryEmployeesState()
            setEmployeeGeneralInfo(true)

        }
    },[error,success_update])
    const initialValues = {
        region_id:region ? region.id :null,
        green_legal_id:company ? company.id : null,
        position_id:position ? position.id :null,
        start_work_date:start_work_date ? start_work_date : "",
        end_work_date:end_work_date? end_work_date : "",
        directions:[directions ? directions[0]?.id :null],
    };

    const {assetsOptionsDirections} = InputAssetsOptions()
    const classes = useStylesEmployeeForm();
    return(
        <div className={classes.root}>
            <ToastContainer style={{ fontSize: 20, marginTop: "5%" }} />
            <Formik
                initialValues={initialValues}
                onSubmit={async (values) => {

                    updateEmployeeGeneralListAC(values,id)
                }}
            >
                {({ values, setFieldValue,touched,handleChange,errors }) => (
                    <Form>
            <div className={classes.title} >
                <Typography  className={classes.typographyTitle}>
                    Общие сведения
                </Typography>
                <Button color="primary" type="submit"
                        // onClick={()=>console.log(values,"values")}
                        className={classes.saveButton}>
                    Сохранить
                </Button>
            </div>
            <Paper elevation={0} className={classes.paper}>
                <div className={classes.row}>
                    <div style={{width:"100%"}}>
                        <div className={classes.column}>
                            <Typography className={classes.typographyTitle}>
                                Статус:
                            </Typography>
                            <Typography className={classes.typographyValue}>

                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.typographyTitle}>
                                Регион:
                            </Typography>
                            <Typography className={classes.typographyValue}>

                                <ValidationErrorWrapper
                                    inputClassName="ant-select-selector"
                                    error={
                                        touched.region_id &&
                                        Boolean(errors.region_id)
                                    }
                                    helperText={
                                        touched.region_id &&
                                        errors.region_id
                                    }
                                >
                                    <InputFilterSelectedType
                                        name="region_id"
                                        handleChange={(value: any) => {
                                            setFieldValue("region_id", value);
                                        }}
                                        value={values.region_id}
                                         options={assetsOptionsRegions}
                                        placeholder="Выберите"
                                    />
                                </ValidationErrorWrapper>
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.typographyTitle}>
                                Компания трудоустройства
                            </Typography>
                            <Typography className={classes.typographyValue}>
                                <ValidationErrorWrapper
                                    inputClassName="ant-select-selector"
                                    error={
                                        touched.green_legal_id &&
                                        Boolean(errors.green_legal_id)
                                    }
                                    helperText={
                                        touched.green_legal_id &&
                                        errors.green_legal_id
                                    }
                                >
                                    <InputFilterSelectedType
                                        name="green_legal_id"
                                        handleChange={(value: any) => {
                                            setFieldValue("green_legal_id", value);
                                        }}
                                        value={values.green_legal_id}
                                         options={assetsOptionsCompanies}
                                        placeholder="Выберите"
                                    />
                                </ValidationErrorWrapper>
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.typographyTitle}>
                                Направление:
                            </Typography>
                            <Typography className={classes.typographyValue}>
                                <FieldArray name="directions">
                                    {() => {
                                        return (
                                            <div>
                                                {
                                                    values.directions?.map((direction, index) => {
                                                        const fieldName = `directions[${index}]`;
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
                                                                inputClassName="ant-select-selector"
                                                                helperText={
                                                                    touchedFieldName &&
                                                                    errorFieldName
                                                                        ? errorFieldName
                                                                        : ""
                                                                }
                                                                error={Boolean(
                                                                    touchedFieldName &&
                                                                    errorFieldName
                                                                )}
                                                            >
                                                                <InputFilterSelectedType
                                                                    // className={classes.input}
                                                                    name={fieldName}
                                                                    value={direction}
                                                                    handleChange={(
                                                                        value: any
                                                                    ) =>
                                                                        setFieldValue(
                                                                            fieldName,
                                                                            value
                                                                        )
                                                                    }
                                                                    options={
                                                                        assetsOptionsDirections
                                                                    }
                                                                    placeholder="Выберите"
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
                        <div className={classes.column}>
                            <Typography className={classes.typographyTitle}>
                                Категория (роль в системе)
                            </Typography>
                            <Typography className={classes.typographyValue}>
                                Руководитель непроизводственного подразделения
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.typographyTitle}>
                                Должность:
                            </Typography>
                            <Typography className={classes.typographyValue}>
                                <ValidationErrorWrapper
                                    inputClassName="ant-select-selector"
                                    error={
                                        touched.position_id &&
                                        Boolean(errors.position_id)
                                    }
                                    helperText={
                                        touched.position_id &&
                                        errors.position_id
                                    }
                                >
                                    <InputFilterSelectedType
                                        name="position_id"
                                        handleChange={(value: any) => {
                                            setFieldValue("position_id", value);
                                        }}
                                        value={values.position_id}
                                        options={assetsOptionsEmployeePositions}
                                        placeholder="Выберите"
                                    />
                                </ValidationErrorWrapper>
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.typographyTitle}>
                                Дата приема на работу:
                            </Typography>
                            <Typography className={classes.typographyValue}>
                                <ValidationErrorWrapper
                                    inputClassName="ant-picker"
                                    error={touched.start_work_date && Boolean(errors.start_work_date)}
                                    helperText={touched.start_work_date && errors.start_work_date}
                                >
                                    <InputFilterDatePicker
                                        name={"start_work_date"}
                                        value={
                                            values.start_work_date
                                                ? moment(values.start_work_date, "YYYY-MM-DD")
                                                : null
                                        }
                                        handleChange={(date: any) =>
                                            setFieldValue(
                                                "start_work_date",
                                                moment(date).format("YYYY-MM-DD")
                                            )
                                        }
                                        placeholder="01.01.1970"
                                        format="DD.MM.YYYY"
                                        className={classes.input}
                                    />
                                </ValidationErrorWrapper>
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.typographyTitle}>
                                Дата увольнения:
                            </Typography>
                            <Typography className={classes.typographyValue}>
                                <ValidationErrorWrapper
                                    inputClassName="ant-picker"
                                    error={touched.end_work_date && Boolean(errors.end_work_date)}
                                    helperText={touched.end_work_date && errors.end_work_date}
                                >
                                    <InputFilterDatePicker
                                        name={"end_work_date"}
                                        value={
                                            values.end_work_date
                                                ? moment(values.end_work_date, "YYYY-MM-DD")
                                                : null
                                        }
                                        handleChange={(date: any) =>
                                            setFieldValue(
                                                "end_work_date",
                                                moment(date).format("YYYY-MM-DD")
                                            )
                                        }
                                        placeholder="01.01.1970"
                                        format="DD.MM.YYYY"
                                        className={classes.input}
                                    />
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

export default EmployeeGeneralInfoForm;
