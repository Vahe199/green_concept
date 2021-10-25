import React, {useState} from "react";
import EmployeeInfoItemForm from "../EmployeesGeneralTabs/EmployeesGeneralFormTabs/EmployeeInfoItemForm";
import EmployeeGeneralInfoForm from "../EmployeesGeneralTabs/EmployeesGeneralFormTabs/EmployeeGeneralInfoForm";
import EmployeeAboutItemForm from "../EmployeesGeneralTabs/EmployeesGeneralFormTabs/EmployeeAboutItemForm";
import {useStylesNewEmployee} from "./newEmployeeStyles";
import {FieldArray, Form, Formik, getIn} from 'formik';
import {Avatar, Button, Paper, Typography} from "@material-ui/core";
import ValidationErrorWrapper from "../../../Utils/utils_options/ValidationErrorWrapper";
import {Input} from "antd";
import InputFilterDatePicker from "../../../Utils/FilterInputs/InputFilterDatePicker";
import moment from "moment";
import {TrashIcon} from "../../../../IMG/SVG/TrashIcon";
import {InputAssetsOptions} from "../../../Utils/utils_options/InputAssetsOptions";
import InputFilterSelectedType from "../../../Utils/FilterInputs/InputFilterSelect";
import {InputEmployeesAssetsOptions} from "../../../Utils/utils_options/InputEmployeesAssetsOptions";
import {employeesApi} from "../../../../api/api";
import {ToastContainer} from "react-toastify";
import {notifyError, notifySuccess} from "../../../Utils/utils_options/ToastNotify";



const NewEmployeesGeneralInformation:React.FC = () => {

    const classes = useStylesNewEmployee()

    const [avatarPreview,setAvatarPreview] = useState<any>()
    const { assetsOptionsCompanies, assetsOptionsRegions, assetsOptionsEmployeePositions} = InputEmployeesAssetsOptions()
    const {assetsOptionsDirections} = InputAssetsOptions()
    const [employeeGeneralInfo, setEmployeeGeneralInfo] = useState<boolean>(true)
    const initialValues = {
        firstname: "",
        middlename: "",
        surname: "",
        photo:"",
        birthdate: "",
        emails: [""],
        phones:[""],
        about:"",
        region_id:null,
        green_legal_id: null,
        position_id:null,
        start_work_date:"",
        end_work_date:"",
        directions:[null],

    };
    return(
        <div className={classes.root}>
            <ToastContainer style={{ fontSize: 20, marginTop: "5%" }} />
        <Formik
            initialValues={initialValues}
            onSubmit={async (values,action) => {

                let formData = new FormData();
                // @ts-ignore
                Object.entries(values).forEach(([key, value]) => {formData.append(key, value)})
                console.log(values,)
                employeesApi.creatNewEmployee(formData).then(res =>{
                    notifySuccess();
                    action.resetForm()
                    return res
                })
                    .catch((e)=>{
                        notifyError();
                        return e
                    })
            }}
        >
            {({ values,setFieldValue, touched,handleChange,errors }) => (
                <Form encType={"multipart/form-data"}>
                    <Button
                        // onClick={()=>console.log(errors)}
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.btn}
                    >
                        Сохранить Новый Сотрудник
                    </Button>
        <div className={classes.container}>

            <div style={{width:'42%',marginLeft:32,marginRight:"1%"}}>
                    <div>
                        <div className={classes.title} >
                            <Typography  className={classes.typographyTitle}>
                                Данные сотрудника
                            </Typography>
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
                                                                            <Input
                                                                                name={fieldName}
                                                                                placeholder={"+79999999999"}
                                                                                value={phone}
                                                                                onChange={handleChange}
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
                                                                        />
                                                                    </ValidationErrorWrapper>
                                                                    <div style={{marginLeft:"10%"}}
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
                    </div>

             <div>
                 <div className={classes.title} >
                     <Typography  className={classes.typographyTitle}>
                         Данные сотрудника
                     </Typography>
                 </div>
                 <div >
                <textarea
                    className={classes.textArea}
                    name="about"
                    placeholder={"Расскажите о себе"}
                    value={values.about}
                    onChange={handleChange}
                    // error={touched.about && Boolean(errors.about)}
                    // helperText={touched.about && errors.about}
                >Расскажите о себе</textarea>
                 </div>
             </div>
            </div>
            <div style={{width:'52%',marginRight:32}}>
             <div>
                 <div className={classes.title} >
                     <Typography  className={classes.typographyTitle}>
                         Общие сведения
                     </Typography>
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
             </div>
            </div>

        </div>
                </Form>
            )}
        </Formik>
        </div>
    )

}
export default NewEmployeesGeneralInformation;