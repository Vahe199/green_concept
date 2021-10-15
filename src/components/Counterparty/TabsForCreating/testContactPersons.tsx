import React, {useState} from "react";
import {FieldArray, Form, Formik, getIn} from "formik";
import {validationSchema} from "./TabsForUtil/GeneralInformationForValidate";
import {Button, Checkbox, InputAdornment, Paper, Radio, TextField} from "@material-ui/core";
import {CheckSquareChecked} from "../../../IMG/SVG/CheckSquareChecked";
import {CheckSquareUnChecked} from "../../../IMG/SVG/CheckSquareUnChecked";
import InputFilterSelectedStatus from "../Core/FilterInputs/InputFilterSelectedStatus";
import InputFilterSelectedRoles from "../Core/FilterInputs/InputFilterSelectedRoles";
import InputFilterSelectedType from "../Core/FilterInputs/InputFilterSelect";
import InputFilterSelectedServicesType from "../Core/FilterInputs/InputFilterSelectedServicesType";
import InputFilterSelectedBranches from "../Core/FilterInputs/InputFilterSelectedBranches";
import {TrashIcon} from "../../../IMG/SVG/TrashIcon";
import {
    InputFilterSelectedCongratulationsType,
    InputFilterSelectedDirection
} from "../Core/FilterInputs/InputFilterSelectedDirection";
import SearchIcon from "@material-ui/icons/Search";
import Divider from "@material-ui/core/Divider";
import {useStylesContactPersons} from "./TabsForUtil/ContactPersonsForCreatingStyles";
import {useTypedSelector} from "../../../redux/type_redux_hook/useTypedSelector";
import InputFilterDatePicker from "../Core/FilterInputs/InputFilterDatePicker";
import moment from "moment";
import {validationSchemaContactPerson} from "./TabsForUtil/ContactPersonsForCreatingValidate";
import {useActions} from "../../../redux/type_redux_hook/useAction";


export const TestContactPersons:React.FC = () => {
    const classes = useStylesContactPersons();

    const [birthdate, setBirthdatet] = useState<any>(moment('2015-01-01', 'YYYY-MM-DD'));
    const [contractorId, setContractorId] = React.useState(1);
    const { assets, load: assetsLoading } = useTypedSelector((state) => state.assets);
    const { crms,congratulation_types, branches,types_and_services, contact_roles ,contact_statuses}: any = assets;
    const { insertContractorContactData } = useActions();
    const initialValues = {
        birthdate:birthdate,
        contact_congratulations:[{name: '', congratulation_type_id: '', other: ''}],
        contact_employees: [ {direction_id: '', employee_id: '', info: ''}],
        contractor_type_id: "",
        delivery_address: "",
        emails:[{ email: '' }],
        firstname: "",
        middlename: "",
        phones:[{phone: '', phone_type: 'Рабочий'},{phone: '', phone_type: 'Мобильный'}],
        service_type_id: "",
        sex: "Муж",
        status_id: "",
        surname: "",

        contractors_main:1,
        contractors_role_id:"",
        contractors_position:"",
        branches:""
    }
    const assetsOptionsStatus = contact_statuses?.map((option: any) => ({
        key: option.id,
        value: option.id ? option.id : 0,
        label: option.name,
    }));
    const assetsOptionsRoles = contact_roles?.map((option: any) => ({
        key: option.id,
        value: option.id ? option.id : 0,
        label: option.name,
    }));
    const assetsOptionsCounterpartyType = types_and_services?.map((option: any) => ({
        key: option.id,
        value: option.id ? option.id : 0,
        label: option.name,
    }));
    const assetsOptionsServiceType = types_and_services[contractorId -1]?.services?.map((option: any) => ({
        key: option.id,
        value: option.id ? option.id : 0,
        label: option.name,
    }));
    const assetsOptionsBranches = branches?.map((option: any) => ({
        key: option.id,
        value: option.id ? option.id : 0,
        label: option.name,
    }));
    const assetsOptionsDirections = branches?.map((option: any) => ({
        key: option.id,
        value: option.id ? option.id : 0,
        label: option.name,
    }));
    const assetsOptionsCongratulation = congratulation_types?.map((option: any) => ({
        key: option.id,
        value: option.id ? option.id : 0,
        label: option.name,
    }));
    return(
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchemaContactPerson}
                onSubmit={async (values,action) => {
                    console.log(values,"values")
                    insertContractorContactData(values);
                }}
            >
                {({ values, touched, handleChange,errors,setFieldValue }) => (
                    <Form>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <Button
                                onClick={()=>console.log(errors,'errors')}
                                type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.btn}
                            >
                                Сохранить карточку
                            </Button>
                            <span className={classes.selectListItem}>
            <span className={classes.addListItem}>
              <span style={{ fontSize: 17, marginTop: 15 }}> + </span>
              <span className={classes.selectItem} style={{ marginTop: 15 }}>
                Выбрать из списка
              </span>
            </span>
          </span>
                        </div>
                        <div className={classes.root}>
                            <div className={classes.BasicInformation}>
                                <div className={classes.flexInitial}>
                                    <span className={classes.val}>Основные сведения</span>
                                </div>
                                <Paper className={classes.paper}>
                                    <div className={classes.label}>
                                        <div className={classes.topDiv}>
                                            <span style={{ width: "40%" }}>Основное контактное лицо</span>
                                            <div className={classes.flexInitial} style={{width: "60%"}}>
                    <span>
                      <Checkbox
                          name="contractors_main"
                          icon={<CheckSquareChecked color="#5B6770" />}
                          checkedIcon={<CheckSquareUnChecked color="#5B6770" />}
                          inputProps={{
                              "aria-label": "checkbox with default color",
                          }}
                          value={
                             values.contractors_main === 1 ? true : false
                          }
                          onChange={(e: any) =>
                              setFieldValue(
                                  "contractors_main",
                                  e.target.checked ? 0 : 1
                              )
                          }
                      />
                    </span>
                                                <div className={classes.flexInitial} style={{ width: "170px"}}>
                                                    <span className={classes.statusText}>Статус</span>
                                                    <InputFilterSelectedType
                                                        className={classes.inputStatus}
                                                        name="status_id"
                                                        handleChange={(value: any) =>
                                                            setFieldValue("status_id", value)
                                                        }
                                                        value={values.status_id}
                                                        options={assetsOptionsStatus}
                                                        placeholder="Выберите отрасль"
                                                        loading={assetsLoading}
                                                        error={touched.status_id && Boolean(errors.status_id)}
                                                        helperText={touched.status_id && errors.status_id}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={classes.label}>
                                        <span>Фамилия:</span>
                                        <TextField
                                            variant={"outlined"}
                                            name="surname"
                                            placeholder={"Фамилия"}
                                            value={values.surname}
                                            onChange={handleChange}
                                            error={touched.surname && Boolean(errors.surname)}
                                            helperText={touched.surname && errors.surname}
                                        />
                                    </div>
                                    <div className={classes.label}>
                                        <span>Имя</span>
                                        <TextField
                                            variant={"outlined"}
                                            name="firstname"
                                            placeholder={"Имя"}
                                            value={values.firstname}
                                            onChange={handleChange}
                                            error={touched.firstname && Boolean(errors.firstname)}
                                            helperText={touched.firstname && errors.firstname}
                                        />
                                    </div>
                                    <div className={classes.label}>
                                        <span>Отчество</span>
                                        <TextField
                                            variant={"outlined"}
                                            name="middlename"
                                            placeholder={"Отчество"}
                                            value={values.middlename}
                                            onChange={handleChange}
                                            error={touched.middlename && Boolean(errors.middlename)}
                                            helperText={touched.middlename && errors.middlename }
                                        />
                                    </div>
                                    <div className={classes.label}>
                                        <span>Пол</span>
                                        <div style={{ width: "60%", display: "flex" }}>
                                            <div>
                                                <span>Мужчина</span>
                                                <Radio
                                                    checked={values.sex === "Муж"}
                                                    onChange={() => setFieldValue("sex", "Муж")}
                                                    color="default"
                                                    size="medium"
                                                    inputProps={{ "aria-label": "A" }}
                                                />
                                            </div>
                                            <div>
                                                <span>Женщина</span>
                                                <Radio
                                                    checked={values.sex === "Жен"}
                                                    onChange={() => setFieldValue("sex", "Жен")}
                                                    color="default"
                                                    name="radio-button-demo"
                                                    size="medium"
                                                    inputProps={{ "aria-label": "B" }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={classes.label}>
                                        <span>Дата рождения</span>
                                        <div style={{ width: "60%", display: "flex" }}>
                                            <InputFilterDatePicker
                                                name="birthdate"
                                                value={birthdate}
                                                handleChange={(value:any)=> {
                                                    setBirthdatet(value)

                                                    console.log(value, "data value")
                                                }}
                                                className={classes.input} />
                                        </div>
                                    </div>
                                    <div className={classes.label}>
                                        <span>Роль</span>
                                        <InputFilterSelectedType
                                            name="contractors_role_id"
                                            handleChange={(value: any) =>
                                                setFieldValue("contractors_role_id", value)
                                            }
                                            value={values.contractors_role_id}
                                            options={assetsOptionsRoles}
                                            placeholder="Выберите"
                                            loading={assetsLoading}
                                            error={touched.contractors_role_id && Boolean(errors.contractors_role_id)}
                                            helperText={touched.contractors_role_id && errors.contractors_role_id}
                                            className={classes.input}
                                        />
                                    </div>
                                    <div className={classes.label}>
                                        <span>Должность</span>
                                        <TextField
                                            variant={"outlined"}
                                            name="contractors_position"
                                            placeholder={"Должность"}
                                            value={values.contractors_position}
                                            onChange={handleChange}
                                            error={touched.contractors_position &&Boolean(errors.contractors_position)}
                                            helperText={ touched.contractors_position && errors.contractors_position}
                                        />
                                    </div>
                                    <div className={classes.label}>
                                        <span>Тип контрагента</span>
                                        <span style={{ width: "60%" }}>
                                            <InputFilterSelectedType
                                                 // className={classes.input}
                                                name="contractor_type_id"
                                                handleChange={(value:any) => {
                                                    setFieldValue("contractor_type_id", value)
                                                    setContractorId(value)
                                                }
                                                }
                                                value={values.contractor_type_id}
                                                options={assetsOptionsCounterpartyType}
                                                placeholder="Выберите"
                                                loading={assetsLoading}
                                                error={touched.contractor_type_id && Boolean(errors.contractor_type_id)}
                                                helperText={touched.contractor_type_id && errors.contractor_type_id}
                                            />
                </span>
                                    </div>
                                    <div className={classes.label}>
                                        <span>Тип услуг</span>
                                        <span style={{ width: "60%" }}>

                                            <InputFilterSelectedType
                                                // className={classes.input}
                                                name="service_type_id"
                                                handleChange={(value:any) => setFieldValue("service_type_id", value)}
                                                value={values.service_type_id}
                                                options={assetsOptionsServiceType}
                                                placeholder="Выберите"
                                                loading={assetsLoading}
                                                error={touched.service_type_id && Boolean(errors.service_type_id)}
                                                helperText={touched.service_type_id && errors.service_type_id}
                                            />
                </span>
                                    </div>
                                    <div className={classes.label}>
                                        <span>Отрасль</span>
                                        <span style={{ width: "60%" }}>
                                            <InputFilterSelectedType
                                                // className={classes.input}
                                                name="branches"
                                                handleChange={(value:any) => setFieldValue("branches", value)}
                                                value={values.branches}
                                                options={assetsOptionsBranches}
                                                placeholder="Выберите"
                                                loading={assetsLoading}
                                                error={touched.branches && Boolean(errors.branches)}
                                                helperText={touched.branches && errors.branches}
                                            />
                </span>
                                    </div>
                                    <div className={classes.label} style={{alignItems:"flex-start"}}>
                                        <span>Телефон рабочий</span>
                                        <span style={{ width: "60%" }}>
                  <div
                      style={{
                          width: "80%",
                          display: "flex",
                          justifyContent: "space-between",
                      }}
                  >

                      <FieldArray name="phones">
                                        {({ remove, push }) => {
                                            return (<div>
                                                    {values.phones.length > 0 &&
                                                    values.phones?.map((phone, index) => {
                                                        const fieldName = `phones[${index}].phone`;
                                                        const touchedFieldName = getIn(touched, fieldName);
                                                        const errorFieldName = getIn(errors, fieldName);
                                                        return (phone.phone_type == 'Рабочий' &&
                                                            <div key={index}
                                                                 style={{display: "flex", flexDirection: "row"}}>
                                                                <TextField
                                                                    fullWidth
                                                                    style={{width: "90%", marginBottom: 16}}
                                                                    placeholder={"+79999999999"}
                                                                    variant={"outlined"}
                                                                    name={fieldName}
                                                                    value={phone.phone}
                                                                    onChange={handleChange}
                                                                    error={Boolean(touchedFieldName && errorFieldName)}
                                                                    helperText={touchedFieldName && errorFieldName ? errorFieldName : ""}
                                                                />
                                                                <div style={{marginLeft: 16}}
                                                                     onClick={() => remove(index)}>
                                                                    <TrashIcon/>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                    <div
                                                        className={classes.addItemCRM}
                                                        onClick={() => push({phone: '', phone_type: 'Рабочий'})}
                                                    >
                                                        + Добавить телефон
                                                    </div>
                                                </div>
                                        )}}
                                    </FieldArray>
                  </div>
                </span>
                                    </div>

                                    <div className={classes.label} style={{alignItems:"flex-start"}}>
                                        <span>Телефон мобильный</span>
                                        <span style={{ width: "60%" }}>
                  <div
                      style={{
                          width: "80%",
                          display: "flex",
                          justifyContent: "space-between",
                      }}
                  >

                      <FieldArray name="phones">
                                        {({ remove, push }) => {

                                            return(
                                                <div>
                                                    {values.phones.length > 0 &&
                                                    values.phones?.map(( phone, index) => {
                                                        const fieldName = `phones[${index}].phone`;
                                                        const touchedFieldName = getIn(touched, fieldName);
                                                        const errorFieldName = getIn(errors, fieldName);
                                                        return( phone.phone_type == 'Мобильный' &&
                                                            <div key={index} style={{display:"flex",flexDirection:"row"}}>
                                                                <TextField
                                                                    fullWidth
                                                                    style={{ width: "90%", marginBottom:16}}
                                                                    placeholder={"+79999999999"}
                                                                    variant={"outlined"}
                                                                    name={fieldName}
                                                                    value={phone.phone}
                                                                    onChange={handleChange}
                                                                    error={Boolean(touchedFieldName && errorFieldName)}
                                                                    helperText={touchedFieldName && errorFieldName ? errorFieldName : ""}
                                                                />
                                                                <div style={{marginLeft:16}}
                                                                     onClick={() => remove(index)}>
                                                                    <TrashIcon />
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                    <div
                                                        className={classes.addItemCRM}
                                                        onClick={() => push({phone: '', phone_type: 'Мобильный'})}
                                                    >
                                                        + Добавить телефон
                                                    </div>
                                                </div>
                                            )
                                        }}
                                    </FieldArray>
                  </div>
                </span>
                                    </div>

                                    <div className={classes.label} style={{alignItems:"flex-start"}}>
                                        <span>E-mail</span>
                                        <span style={{ width: "60%" }}>
                  <div
                      style={{
                          width: "80%",
                          display: "flex",
                          justifyContent: "space-between",
                      }}
                  >

                      <FieldArray name="emails">
                                        {({ insert, remove, push }) => (
                                            <div>
                                                {values.emails.length > 0 &&
                                                values.emails.map(( email, index) => {
                                                    const fieldName = `emails[${index}].email`;
                                                    const touchedFieldName = getIn(touched, fieldName);
                                                    const errorFieldName = getIn(errors, fieldName);
                                                    return(
                                                        <div key={index} style={{display:"flex",flexDirection:"row"}}>
                                                            <TextField
                                                                fullWidth
                                                                style={{ width: "90%", marginBottom:16}}
                                                                placeholder={`email${index + 1}@email.com`}
                                                                variant={"outlined"}
                                                                name={fieldName}
                                                                type="email"
                                                                value={email.email}
                                                                onChange={handleChange}
                                                                error={Boolean(touchedFieldName && errorFieldName)}
                                                                helperText={touchedFieldName && errorFieldName ? errorFieldName : ""}
                                                            />
                                                            <div style={{marginLeft:16}}
                                                                 onClick={() => remove(index)}>
                                                                <TrashIcon />
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                                <div
                                                    className={classes.addItemCRM}
                                                    onClick={() => push({ email: '' })}
                                                >
                                                    + Добавить email
                                                </div>
                                            </div>
                                        )}
                                    </FieldArray>
                  </div>
                </span>
                                    </div>

                                    <div className={classes.label}>
                                        <span>Адрес доставки</span>

                                        <TextField
                                            variant={"outlined"}
                                            className={classes.textArea}
                                            multiline
                                            rows={3}
                                            name="delivery_address"
                                            placeholder={"Адрес доставки адрес вторая линия"}
                                            value={values.delivery_address}
                                            onChange={handleChange}
                                            error={touched.delivery_address && Boolean(errors.delivery_address)}
                                            helperText={touched.delivery_address && errors.delivery_address}
                                        />
                                    </div>
                                </Paper>
                            </div>
                            <div className={classes.rightPanel}>
                                <div style={{ width: "100%" }}>
                                    <div className={classes.ContactsFromGreen}>
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                                width: "100%",
                                            }}
                                        >
                                            <span className={classes.val}>Контакты со стороны GREEN</span>
                                        </div>
                                        <Paper className={classes.paper}>
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
                                                                    <div>
                                                                        {index == 0 ? "" : <Divider style={{marginBottom: 16}}/>}
                                                                    <div key={index} style={{display:"flex",flexDirection:"row"}}>
                                                                      <div style={{width:"100%"}}>

                                                                        <div className={classes.label}>
                                                                            <span style={index == 0 ?{width:"35%"}:{width:"37%"}}>Направление</span>
                                                                            <div style={index == 0 ?{width:"65%"}:{width:"63%"}}>
                                                                            <InputFilterSelectedType
                                                                                 // className={classes.input}
                                                                                name={fieldDirection}
                                                                                value={employees.direction_id}
                                                                                handleChange={(value:any) => setFieldValue(fieldDirection, value)}
                                                                                options={assetsOptionsDirections}
                                                                                placeholder="Выберите"
                                                                                loading={assetsLoading}
                                                                                helperText={touchedFieldDirection && errorFieldDirection ? errorFieldDirection : ""}
                                                                                error={Boolean(touchedFieldDirection && errorFieldDirection)}
                                                                            />
                                                                            </div>
                                                                        </div>
                                                                        <div className={classes.label}>
                                                                            <span style={index == 0 ?{width:"35%"}:{width:"37%"}}>Контактное лицо</span>
                                                                            <div style={index == 0 ?{width:"65%"}:{width:"63%"}}>
                                                                            <TextField style={{width:"100%"}}
                                                                                variant={"outlined"}
                                                                                 name={fieldEmployee}
                                                                                placeholder={"Введите слово или часть слова"}
                                                                                value={employees.employee_id}
                                                                                onChange={handleChange}
                                                                                InputProps={{
                                                                                    startAdornment: (
                                                                                        <InputAdornment position="start">
                                                                                            <SearchIcon
                                                                                                fontSize={"small"}
                                                                                                className={classes.icon}
                                                                                            />
                                                                                        </InputAdornment>
                                                                                    ),
                                                                                }}
                                                                                error={Boolean(touchedFieldEmployee && errorFieldEmployee)}
                                                                                helperText={touchedFieldEmployee && errorFieldEmployee ? errorFieldEmployee : ""}
                                                                            />
                                                                            </div>

                                                                        </div>
                                                                        <div className={classes.label} style={{alignItems:"flex-start"}}>
                                                                            <span style={index == 0 ?{width:"35%"}:{width:"37%"}}>Дополнительная информация</span>
                                                                            <div style={index == 0 ?{width:"65%"}:{width:"63%"}}>

                                                                                <textarea
                                                                                    className={classes.textAreas}
                                                                                    name={fieldInfo}
                                                                                    placeholder={"Введите текст"}
                                                                                    value={employees.info}
                                                                                    onChange={handleChange}
                                                                                    // error={Boolean(touchedFieldInfo && errorFieldInfo)}
                                                                                    // helperText={touchedFieldInfo && errorFieldInfo ? errorFieldInfo : ""}
                                                                                >Расскажите о себе</textarea>
                                                                            </div>
                                                                        </div>
                                                                      </div>
                                                                        {index == 0 ? ""
                                                                       : <div style={{marginLeft:16}}
                                                                              onClick={() => remove(index)}>
                                                                            <TrashIcon/>
                                                                        </div>}
                                                                    </div>
                                                                    </div>
                                                                )
                                                            })}
                                                            <div
                                                                className={classes.addItemCRM}
                                                                onClick={() => push({direction_id: '', employee_id: '', info: ''})}
                                                            >
                                                                + Новый контакт
                                                            </div>
                                                        </div>
                                                    )}}
                                            </FieldArray>

                                        </Paper>
                                    </div>
                                </div>
                                <div>
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            width: "100%",
                                            marginTop: "2%",
                                        }}
                                    >
                                        <span className={classes.val}>Сведения о поздравлениях</span>
                                    </div>
                                    <Paper className={classes.paper} style={{marginBottom:50}}>
                                        <FieldArray name="contact_congratulations">
                                            {({ remove, push }) => {
                                                return (<div>
                                                        {values.contact_congratulations.length > 0 &&
                                                        values.contact_congratulations?.map((congratulations, index) => {
                                                            const fieldName = `contact_congratulations[${index}].name`;
                                                            const touchedFieldName = getIn(touched, fieldName);
                                                            const errorFieldName = getIn(errors, fieldName);
                                                            const fieldCongratulation_type = `contact_congratulations[${index}].congratulation_type_id`;
                                                            const touchedFieldCongratulation_type = getIn(touched, fieldCongratulation_type);
                                                            const errorFieldCongratulation_type = getIn(errors, fieldCongratulation_type);
                                                            const fieldOther = `contact_congratulations[${index}].other`;
                                                            const touchedFieldOther = getIn(touched, fieldOther);
                                                            const errorFieldOther = getIn(errors, fieldName);
                                                            return (<div>
                                                                {index == 0 ? "" : <Divider style={{marginBottom: 16}}/>}
                                                                <div key={index}
                                                                     style={{display: "flex", flexDirection: "row"}}>
                                                                    <div style={{width:"100%"}}>
                                                                    <div className={classes.label}>
                                                                        <span style={index == 0 ?{width:"35%"}:{width:"37%"}}>Праздник</span>
                                                                        <div style={index == 0 ?{width:"65%"}:{width:"63%"}}>
                                                                        <TextField style={{width:"100%"}}
                                                                            variant={"outlined"}
                                                                            name={fieldName}
                                                                            value={congratulations.name}
                                                                            placeholder={"Название праздника"}
                                                                            onChange={handleChange}
                                                                            error={Boolean(touchedFieldName && errorFieldName)}
                                                                            helperText={touchedFieldName && errorFieldName ? errorFieldName : ""}
                                                                        />
                                                                        </div>
                                                                    </div>
                                                                    <div className={classes.label}>
                                                                        <span style={index == 0 ?{width:"35%"}:{width:"37%"}}>Тип поздравления</span>
                                                                        <div style={index == 0 ?{width:"65%"}:{width:"63%"}}>
                                                                        <InputFilterSelectedType
                                                                            // className={classes.input}
                                                                            name={fieldCongratulation_type}
                                                                            value={congratulations.congratulation_type_id}
                                                                            handleChange={(value:any) => setFieldValue(fieldCongratulation_type, value)}
                                                                            options={assetsOptionsCongratulation}
                                                                            placeholder="Выберите"
                                                                            loading={assetsLoading}
                                                                            helperText={touchedFieldCongratulation_type && errorFieldCongratulation_type ? errorFieldCongratulation_type : ""}
                                                                            error={Boolean(touchedFieldCongratulation_type && errorFieldCongratulation_type)}
                                                                        />
                                                                        </div>
                                                                    </div>
                                                                    <div className={classes.label}>
                                                                        <span style={index == 0 ?{width:"35%"}:{width:"37%"} }>Другое</span>
                                                                        <div style={index == 0 ?{width:"65%"}:{width:"63%"}}>
                                                                        <TextField style={{width:"100%"}}
                                                                            variant={"outlined"}
                                                                            name={fieldOther}
                                                                            placeholder={"Другое"}
                                                                            value={congratulations.other}
                                                                            onChange={handleChange}
                                                                            error={Boolean(touchedFieldOther && errorFieldOther)}
                                                                            helperText={touchedFieldOther && errorFieldOther ?errorFieldOther : ""}
                                                                        />
                                                                        </div>
                                                                    </div>
                                                                    </div>
                                                                    {index == 0 ? "" :<div style={{marginLeft: 16}}
                                                                          onClick={() => remove(index)}>
                                                                        <TrashIcon/>
                                                                    </div>}
                                                                </div>
                                                                </div>
                                                            )
                                                        })}
                                                        <div
                                                            className={classes.addItemCRM} style={{ marginLeft:"35%"}}
                                                            onClick={() => push({name: '', congratulation_type_id: '', other: ''})}
                                                        >
                                                            + Новый праздник
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
