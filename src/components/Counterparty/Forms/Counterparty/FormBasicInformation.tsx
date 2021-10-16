import {Button, Checkbox, Paper, Radio, TextField,} from "@material-ui/core";
import {FieldArray, Form, Formik, getIn} from "formik";
import React, {useState} from "react";
import {CheckSquareChecked} from "../../../../IMG/SVG/CheckSquareChecked";
import {CheckSquareUnChecked} from "../../../../IMG/SVG/CheckSquareUnChecked";
import InputFilterSelectedType from "../../Core/FilterInputs/InputFilterSelect";
import moment from "moment";
import InputFilterDatePicker from "../../Core/FilterInputs/InputFilterDatePicker";
import {useTypedSelector} from "../../../../redux/type_redux_hook/useTypedSelector";
import {TrashIcon} from "../../../../IMG/SVG/TrashIcon";
import {useStylesBasicInformation} from "./BasicInformationFormStyles";
import {validationSchemaBasicInformation} from "./BasicInformationFormValidationSchema";

type InfoProps = {
  // change: boolean;
  setChangeBasicInformation: (val: boolean) => void;
};
export const FormBasicInformation: React.FC<InfoProps> = ({
  setChangeBasicInformation,
}) => {
  const classes = useStylesBasicInformation();
  const { assets, load: assetsLoading } = useTypedSelector((state) => state.assets);
  const { branches,types_and_services, contact_roles }: any = assets;
  const [birthdate, setBirthdatet] = useState<any>(moment('2015-01-01', 'YYYY-MM-DD'));
  const [contractorId, setContractorId] = React.useState(1);


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
  const initialValues = {
    birthdate:birthdate,
    contractor_type_id: "",
    delivery_address: "",
    emails:[{ email: '' }],
    firstname: "",
    middlename: "",
    phones:[{phone: '', phone_type: 'Рабочий'},{phone: '', phone_type: 'Мобильный'}],
    service_type_id: "",
    sex: "Муж",
    surname: "",
    contractors_main:1,
    contractors_role_id:"",
    contractors_position:"",
    branches:""
  }

  return (
    <div className={classes.root}>
      <Formik
           initialValues={initialValues}
          validationSchema={validationSchemaBasicInformation}
          onSubmit={async (values,action) => {
            console.log(values,"values")
            // insertContractorContactData(values);
          }}
      >
        {({ values, touched, handleChange,errors,setFieldValue }) => (
            <Form>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span className={classes.spanTitle}>Основные сведения</span>
          <Button
            color="primary"
            onClick={() => setChangeBasicInformation(true)}
            type="submit"
            style={{ textTransform: "none", boxShadow: "none" }}
          >
            Сохранить
          </Button>
        </div>
        <Paper className={classes.paper}>
          <div className={classes.label}>
            <span className={classes.spanTitle}>Основное контактное лицо </span>
            <span style={{ width: "61%" }}>

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
          </div>
          <div className={classes.label}>
            <span className={classes.spanTitle}>Фамилия:</span>
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
            <span className={classes.spanTitle}>Имя</span>
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
            <span className={classes.spanTitle}>Отчество</span>
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
            <span className={classes.spanTitle}>Пол</span>
            <div style={{ width: "60%", display: "flex" }}>
              <div>
                <span style={{fontSize:16}}>Мужчина</span>
                <Radio
                    checked={values.sex === "Муж"}
                    onChange={() => setFieldValue("sex", "Муж")}
                    color="default"
                    size="medium"
                    inputProps={{ "aria-label": "A" }}
                />
              </div>
              <div>
                <span style={{fontSize:16}}>Женщина</span>
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
            <span className={classes.spanTitle}>Дата рождения</span>
            <div style={{ width: "60%", display: "flex" }}>
              <InputFilterDatePicker
                  name="birthdate"
                  value={birthdate}
                  handleChange={(_:any,value:string)=> {
                    // setBirthdatet(value)

                    console.log(value, "data value")
                  }}
                  className={classes.input} />
            </div>
          </div>
          <div className={classes.label}>
            <span className={classes.spanTitle}>Роль</span>
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
            <span className={classes.spanTitle}>Должность</span>
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
            <span className={classes.spanTitle}>Тип контрагента</span>
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
            <span className={classes.spanTitle}>Тип услуг</span>
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
            <span className={classes.spanTitle}>Отрасль</span>
            <div
              style={{
                width: "60%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
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
            </div>
          </div>
          <div className={classes.label} style={{alignItems:"flex-start"}}>
            <span className={classes.spanTitle}>Телефон рабочий</span>
            <span style={{ width: "60%" }}>
              <div
                style={{
                  width: "70%",
                  display: "flex",
                  flexDirection: "column",
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
                                                            style={{width: "100%", marginBottom: 16}}
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
            <span className={classes.spanTitle}>Телефон мобильный</span>
            <span style={{ width: "60%" }}>
              <div
                style={{
                  width: "70%",
                  display: "flex",
                  flexDirection: "column",
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
                                                            style={{ width: "100%", marginBottom:16}}
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
          <div className={classes.label}>
            <span className={classes.spanTitle}>E-mail</span>
            <span style={{ width: "60%" }}>
              <div
                style={{
                  width: "70%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <FieldArray name="emails">
                                        {({  remove, push }) => (
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
            <span className={classes.spanTitle}>Адрес доставки</span>

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
            </Form>
        )}
      </Formik>
    </div>
  );
};
