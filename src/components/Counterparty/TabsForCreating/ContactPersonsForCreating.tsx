import React, { useState, useRef, useEffect } from "react";
import { FieldArray, Form, Formik, getIn } from "formik";
import {
  Button,
  Checkbox,
  InputAdornment,
  Paper,
  Radio,
  TextField,
} from "@material-ui/core";
import { CheckSquareChecked } from "../../../IMG/SVG/CheckSquareChecked";
import { CheckSquareUnChecked } from "../../../IMG/SVG/CheckSquareUnChecked";
import InputFilterSelectedType from "../Core/FilterInputs/InputFilterSelect";
import { TrashIcon } from "../../../IMG/SVG/TrashIcon";
import SearchIcon from "@material-ui/icons/Search";
import Divider from "@material-ui/core/Divider";
import { useStylesContactPersons } from "./TabsForUtil/ContactPersonsForCreatingStyles";
import { useTypedSelector } from "../../../redux/type_redux_hook/useTypedSelector";
import InputFilterDatePicker from "../Core/FilterInputs/InputFilterDatePicker";
import moment from "moment";
import { validationSchemaContactPerson } from "./TabsForUtil/ContactPersonsForCreatingValidate";
import { useActions } from "../../../redux/type_redux_hook/useAction";
import ModalListOfContacts from "../../Modals/ModalListOfContacts";
import ValidationErrorWrapper from "../Core/utils/ValidationErrorWrapper";
import { Modal } from "antd";
import { InputAssetsOptions } from "../Core/utils/InputAssetsOptions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notifyError, notifySuccess } from "../Core/utils/ToastNotify";
import { SearchContactPerson } from "../Core/utils/SearchContactPerson";
import { MagnifyingGlass } from "../../../IMG/SVG/MagnifyingGlass";
import InputFilterSelect from "../Core/FilterInputs/InputFilterSelect";

export const ContactPersonsForCreating: React.FC = () => {
  const {
    insertContractorContactData,
    recoveryContractorContactState,
    getContactPersonsDataWithId,
  } = useActions();
  const { assets, load: assetsLoading } = useTypedSelector(
    (state) => state.assets
  );
  const { types_and_services }: any = assets;
  const { AuthorData } = useTypedSelector((state) => state.author);
  const { id }: any = AuthorData;
  const { PersonContact, error, success } = useTypedSelector(
    (state) => state.contactPerson
  );

  const parentRef = useRef<any>({});
  const classes = useStylesContactPersons();
  const Options = InputAssetsOptions();

  const search = SearchContactPerson();
  useEffect(() => {
    if (error) {
      notifyError();
      recoveryContractorContactState();
    }
    if (success) {
      notifySuccess();
      recoveryContractorContactState();
    }
  }, [success, error]);
  const [contractorId, setContractorId] = useState(1);
  const [attachedContact, onAttachedContact] = useState("");
  const [showModal, setShowModal] = useState(false);
  const searchOptions = SearchContactPerson();

  const [branch, setBranch] = useState("");
  // const filteredBranches = branches.filter(({ name }: { name: string }) => name.includes(branch))

  const assetsOptionsServiceType = types_and_services[
    contractorId - 1
  ]?.services?.map((option: any) => ({
    key: option.id,
    value: option.id ? option.id : 0,
    label: option.name,
  }));

  const initialValues = {
    firstname: "",
    middlename: "",
    surname: "",
    contractor_type_id: "",
    sex: "Муж",
    birthdate: "",
    delivery_address: "",
    emails: [{ email: "" }],
    phones: [
      { phone: "", phone_type: "Рабочий" },
      { phone: "", phone_type: "Мобильный" },
    ],
    contact_contractors: {
      main: 1,
      role_id: null,
      position: "",
      contractor_id: id,
    },
    contact_employees: [{ direction_id: "", employee_id: null, info: "" }],
    contact_congratulations: [
      { name: "", congratulation_type_id: null, other: "" },
    ],
    status_id: null,
    service_type_id: null,
    branches: [""],
  };
  console.log(PersonContact, initialValues);

  useEffect(() => {
    if (attachedContact) {
      getContactPersonsDataWithId(+attachedContact);
    }
  }, [attachedContact]);

  return (
    <div
      className={classes.mainContainer}
      style={{ height: "max-content", position: "relative" }}
      ref={parentRef}
    >
      <ToastContainer style={{ fontSize: 20, marginTop: "5%" }} />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchemaContactPerson}
        onSubmit={async (values, action) => {
          console.log(values, "values");
          insertContractorContactData(values);
        }}
      >
        {({ values, touched, handleChange, errors, setFieldValue }) => (
          <Form>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Button
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
                  <span
                    onClick={() => {
                      setShowModal(true);
                    }}
                    className={classes.selectItem}
                    style={{ marginTop: 15, cursor: "pointer" }}
                  >
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
                      <span style={{ width: "40%" }}>
                        Основное контактное лицо
                      </span>
                      <div
                        className={classes.flexInitial}
                        style={{ width: "60%" }}
                      >
                        <span>
                          <FieldArray name="contact_contractors">
                            {() => {
                              const fieldName = `contact_contractors.main`;

                              return (
                                <Checkbox
                                  name={fieldName}
                                  icon={<CheckSquareChecked color="#5B6770" />}
                                  checkedIcon={
                                    <CheckSquareUnChecked color="#5B6770" />
                                  }
                                  inputProps={{
                                    "aria-label": "checkbox with default color",
                                  }}
                                  value={
                                    values.contact_contractors.main === 1
                                      ? true
                                      : false
                                  }
                                  onChange={(e: any) => {
                                    setFieldValue(
                                      fieldName,
                                      e.target.checked ? 0 : 1
                                    );
                                    console.log(
                                      values.contact_contractors.main
                                    );
                                  }}
                                />
                              );
                            }}
                          </FieldArray>
                        </span>
                        <div
                          className={classes.flexInitial}
                          style={{ width: "170px" }}
                        >
                          <span className={classes.statusText}>Статус</span>
                          <div style={{ width: 120 }}>
                            <ValidationErrorWrapper
                              inputClassName="ant-select-selector"
                              error={
                                touched.status_id && Boolean(errors.status_id)
                              }
                              helperText={touched.status_id && errors.status_id}
                            >
                              <InputFilterSelectedType
                                name="status_id"
                                handleChange={(value: any) =>
                                  setFieldValue("status_id", value)
                                }
                                value={values.status_id}
                                options={Options.assetsOptionsStatus}
                                placeholder="Выберите отрасль"
                                loading={assetsLoading}
                              />
                            </ValidationErrorWrapper>
                          </div>
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
                      helperText={touched.middlename && errors.middlename}
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
                    <div style={{ width: "60%" }}>
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
                          className={classes.input}
                          placeholder="01.01.1970"
                          format="DD.MM.YYYY"
                        />
                      </ValidationErrorWrapper>
                    </div>
                  </div>
                  <div className={classes.label}>
                    <span>Роль</span>
                    <div style={{ width: "60%" }}>
                      <FieldArray name="contact_contractors">
                        {() => {
                          const fieldName = `contact_contractors.role_id`;
                          const touchedFieldName = getIn(touched, fieldName);
                          const errorFieldName = getIn(errors, fieldName);

                          return (
                            <ValidationErrorWrapper
                              inputClassName="ant-select-selector"
                              error={Boolean(
                                touchedFieldName && errorFieldName
                              )}
                              helperText={
                                touchedFieldName && errorFieldName
                                  ? errorFieldName
                                  : ""
                              }
                            >
                              <InputFilterSelectedType
                                name={fieldName}
                                handleChange={(value: any) =>
                                  setFieldValue(fieldName, value)
                                }
                                value={values.contact_contractors.role_id}
                                options={Options.assetsOptionsRoles}
                                placeholder="Выберите"
                                loading={assetsLoading}
                              />
                            </ValidationErrorWrapper>
                          );
                        }}
                      </FieldArray>
                    </div>
                  </div>
                  <div className={classes.label}>
                    <span>Должность</span>
                    <FieldArray name="contact_contractors">
                      {() => {
                        const fieldName = `contact_contractors.position`;
                        const touchedFieldName = getIn(touched, fieldName);
                        const errorFieldName = getIn(errors, fieldName);

                        return (
                          <TextField
                            variant={"outlined"}
                            name={fieldName}
                            placeholder={"Должность"}
                            value={values.contact_contractors.position}
                            onChange={handleChange}
                            error={Boolean(touchedFieldName && errorFieldName)}
                            helperText={
                              touchedFieldName && errorFieldName
                                ? errorFieldName
                                : ""
                            }
                          />
                        );
                      }}
                    </FieldArray>
                  </div>
                  <div className={classes.label}>
                    <span>Тип контрагента</span>
                    <div style={{ width: "60%" }}>
                      <ValidationErrorWrapper
                        inputClassName="ant-select-selector"
                        error={
                          touched.contractor_type_id &&
                          Boolean(errors.contractor_type_id)
                        }
                        helperText={
                          touched.contractor_type_id &&
                          errors.contractor_type_id
                        }
                      >
                        <InputFilterSelectedType
                          // className={classes.input}
                          name="contractor_type_id"
                          handleChange={(value: any) => {
                            setFieldValue("contractor_type_id", value);
                            setContractorId(value);
                          }}
                          value={values.contractor_type_id}
                          options={Options.assetsOptionsCounterpartyType}
                          placeholder="Выберите"
                          loading={assetsLoading}
                        />
                      </ValidationErrorWrapper>
                    </div>
                  </div>
                  <div className={classes.label}>
                    <span>Тип услуг</span>
                    <div style={{ width: "60%" }}>
                      <ValidationErrorWrapper
                        inputClassName="ant-select-selector"
                        error={
                          touched.service_type_id &&
                          Boolean(errors.service_type_id)
                        }
                        helperText={
                          touched.service_type_id && errors.service_type_id
                        }
                      >
                        <InputFilterSelectedType
                          // className={classes.input}
                          name="service_type_id"
                          handleChange={(value: any) =>
                            setFieldValue("service_type_id", value)
                          }
                          value={values.service_type_id}
                          options={assetsOptionsServiceType}
                          placeholder="Выберите"
                          loading={assetsLoading}
                        />
                      </ValidationErrorWrapper>
                    </div>
                  </div>
                  <div className={classes.label}>
                    <span>Отрасль</span>
                    <div style={{ width: "60%" }}>
                      <FieldArray name="branches">
                        {() => {
                          const fieldName = `branches[${0}]`;
                          const touchedFieldName = getIn(touched, fieldName);
                          const errorFieldName = getIn(errors, fieldName);

                          return (
                            <ValidationErrorWrapper
                              inputClassName="ant-select-selector"
                              helperText={
                                touchedFieldName && errorFieldName
                                  ? errorFieldName
                                  : ""
                              }
                              error={Boolean(
                                touchedFieldName && errorFieldName
                              )}
                            >
                              <InputFilterSelectedType
                                // className={classes.input}
                                name={fieldName}
                                handleChange={(value: any) =>
                                  setFieldValue(fieldName, value)
                                }
                                value={values.branches[0]}
                                options={Options.assetsOptionsBranches}
                                placeholder="Выберите"
                                loading={assetsLoading}
                              />
                            </ValidationErrorWrapper>
                          );
                        }}
                      </FieldArray>
                    </div>
                  </div>
                  <div
                    className={classes.label}
                    style={{ alignItems: "flex-start" }}
                  >
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
                            return (
                              <div>
                                {values.phones.length > 0 &&
                                  values.phones?.map((phone, index) => {
                                    const fieldName = `phones[${index}].phone`;
                                    const touchedFieldName = getIn(
                                      touched,
                                      fieldName
                                    );
                                    const errorFieldName = getIn(
                                      errors,
                                      fieldName
                                    );
                                    return (
                                      phone.phone_type == "Рабочий" && (
                                        <div
                                          key={index}
                                          style={{
                                            display: "flex",
                                            flexDirection: "row",
                                          }}
                                        >
                                          <TextField
                                            fullWidth
                                            style={{
                                              width: "100%",
                                              marginBottom: 16,
                                            }}
                                            placeholder={"+79999999999"}
                                            variant={"outlined"}
                                            name={fieldName}
                                            value={phone.phone}
                                            onChange={handleChange}
                                            error={Boolean(
                                              touchedFieldName && errorFieldName
                                            )}
                                            helperText={
                                              touchedFieldName && errorFieldName
                                                ? errorFieldName
                                                : ""
                                            }
                                          />
                                          <div
                                            style={{ marginLeft: 16 }}
                                            onClick={() => remove(index)}
                                          >
                                            <TrashIcon />
                                          </div>
                                        </div>
                                      )
                                    );
                                  })}
                                <div
                                  className={classes.addItemCRM}
                                  onClick={() =>
                                    push({ phone: "", phone_type: "Рабочий" })
                                  }
                                >
                                  + Добавить телефон
                                </div>
                              </div>
                            );
                          }}
                        </FieldArray>
                      </div>
                    </span>
                  </div>

                  <div
                    className={classes.label}
                    style={{ alignItems: "flex-start" }}
                  >
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
                            return (
                              <div>
                                {values.phones.length > 0 &&
                                  values.phones?.map((phone, index) => {
                                    const fieldName = `phones[${index}].phone`;
                                    const touchedFieldName = getIn(
                                      touched,
                                      fieldName
                                    );
                                    const errorFieldName = getIn(
                                      errors,
                                      fieldName
                                    );
                                    return (
                                      phone.phone_type == "Мобильный" && (
                                        <div
                                          key={index}
                                          style={{
                                            display: "flex",
                                            flexDirection: "row",
                                          }}
                                        >
                                          <TextField
                                            fullWidth
                                            style={{
                                              width: "90%",
                                              marginBottom: 16,
                                            }}
                                            placeholder={"+79999999999"}
                                            variant={"outlined"}
                                            name={fieldName}
                                            value={phone.phone}
                                            onChange={handleChange}
                                            error={Boolean(
                                              touchedFieldName && errorFieldName
                                            )}
                                            helperText={
                                              touchedFieldName && errorFieldName
                                                ? errorFieldName
                                                : ""
                                            }
                                          />
                                          <div
                                            style={{ marginLeft: 16 }}
                                            onClick={() => remove(index)}
                                          >
                                            <TrashIcon />
                                          </div>
                                        </div>
                                      )
                                    );
                                  })}
                                <div
                                  className={classes.addItemCRM}
                                  onClick={() =>
                                    push({ phone: "", phone_type: "Мобильный" })
                                  }
                                >
                                  + Добавить телефон
                                </div>
                              </div>
                            );
                          }}
                        </FieldArray>
                      </div>
                    </span>
                  </div>

                  <div
                    className={classes.label}
                    style={{ alignItems: "flex-start" }}
                  >
                    <span>E-mail</span>
                    <span style={{ width: "60%" }}>
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <FieldArray name="emails">
                          {({ remove, push }) => (
                            <div>
                              {values.emails.length > 0 &&
                                values.emails.map((email, index) => {
                                  const fieldName = `emails[${index}].email`;
                                  const touchedFieldName = getIn(
                                    touched,
                                    fieldName
                                  );
                                  const errorFieldName = getIn(
                                    errors,
                                    fieldName
                                  );
                                  return (
                                    <div
                                      key={index}
                                      style={{
                                        display: "flex",
                                        flexDirection: "row",
                                      }}
                                    >
                                      <TextField
                                        fullWidth
                                        style={{
                                          width: "100%",
                                          marginBottom: 16,
                                        }}
                                        placeholder={`email${
                                          index + 1
                                        }@email.com`}
                                        variant={"outlined"}
                                        name={fieldName}
                                        type="email"
                                        value={email.email}
                                        onChange={handleChange}
                                        error={Boolean(
                                          touchedFieldName && errorFieldName
                                        )}
                                        helperText={
                                          touchedFieldName && errorFieldName
                                            ? errorFieldName
                                            : ""
                                        }
                                      />
                                      <div
                                        style={{ marginLeft: 16 }}
                                        onClick={() => remove(index)}
                                      >
                                        <TrashIcon />
                                      </div>
                                    </div>
                                  );
                                })}
                              <div
                                className={classes.addItemCRM}
                                onClick={() => push({ email: "" })}
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
                      error={
                        touched.delivery_address &&
                        Boolean(errors.delivery_address)
                      }
                      helperText={
                        touched.delivery_address && errors.delivery_address
                      }
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
                       // marginBottom: 8,
                      }}
                    >
                      <span className={classes.val}>
                        Контакты со стороны GREEN
                      </span>
                    </div>
                    <Paper className={classes.paper}>
                      <FieldArray name="contact_employees">
                        {({ remove, push }) => {
                          return (
                            <div>
                              {values.contact_employees.length > 0 &&
                                values.contact_employees?.map(
                                  (employees, index) => {
                                    const fieldDirection = `contact_employees[${index}].direction_id`;
                                    const touchedFieldDirection = getIn(
                                      touched,
                                      fieldDirection
                                    );
                                    const errorFieldDirection = getIn(
                                      errors,
                                      fieldDirection
                                    );
                                    const fieldEmployee = `contact_employees[${index}].employee_id`;
                                    const touchedFieldEmployee = getIn(
                                      touched,
                                      fieldEmployee
                                    );
                                    const errorFieldEmployee = getIn(
                                      errors,
                                      fieldEmployee
                                    );
                                    const fieldInfo = `contact_employees[${index}].info`;
                                    const touchedFieldInfo = getIn(
                                      touched,
                                      fieldInfo
                                    );
                                    const errorFieldInfo = getIn(
                                      errors,
                                      fieldInfo
                                    );
                                    return (
                                      <div>
                                        {index == 0 ? (
                                          ""
                                        ) : (
                                          <Divider
                                            style={{ marginBottom: 16 }}
                                          />
                                        )}
                                        <div
                                          key={index}
                                          style={{
                                            display: "flex",
                                            flexDirection: "row",
                                          }}
                                        >
                                          <div style={{ width: "100%" }}>
                                            <div className={classes.label}>
                                              <span
                                                style={
                                                  index == 0
                                                    ? { width: "35%" }
                                                    : { width: "37%" }
                                                }
                                              >
                                                Направление
                                              </span>
                                              <div
                                                style={
                                                  index == 0
                                                    ? { width: "65%" }
                                                    : { width: "63%" }
                                                }
                                              >
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
                                                    value={
                                                      employees.direction_id
                                                    }
                                                    handleChange={(
                                                      value: any
                                                    ) =>
                                                      setFieldValue(
                                                        fieldDirection,
                                                        value
                                                      )
                                                    }
                                                    options={
                                                      Options.assetsOptionsDirections
                                                    }
                                                    placeholder="Выберите"
                                                    loading={assetsLoading}
                                                  />
                                                </ValidationErrorWrapper>
                                              </div>
                                            </div>
                                            <div className={classes.label}>
                                              <span
                                                style={
                                                  index == 0
                                                    ? { width: "35%" }
                                                    : { width: "37%" }
                                                }
                                              >
                                                Контактное лицо
                                              </span>
                                              <div
                                                style={
                                                  index == 0
                                                    ? { width: "65%" }
                                                    : { width: "63%" }
                                                }
                                              >
                                                <ValidationErrorWrapper
                                                  inputClassName="ant-select-selector"
                                                  error={Boolean(
                                                    touchedFieldEmployee &&
                                                      errorFieldEmployee
                                                  )}
                                                  helperText={
                                                    touchedFieldEmployee &&
                                                    errorFieldEmployee
                                                      ? errorFieldEmployee
                                                      : ""
                                                  }
                                                >
                                                  <div
                                                    className={
                                                      classes.searchWraper
                                                    }
                                                  >
                                                    <MagnifyingGlass className="searchIcon" />
                                                    <InputFilterSelect
                                                      name={fieldEmployee}
                                                      placeholder={
                                                        "Введите слово или часть слова"
                                                      }
                                                      value={
                                                        employees.employee_id
                                                      }
                                                      onFocus={() =>
                                                        searchOptions.fetchContactPerson()
                                                      }
                                                      options={
                                                        searchOptions.searchOptions
                                                      }
                                                      filterOption={false}
                                                      onSearch={setBranch}
                                                      onSelect={(
                                                        id: number
                                                      ) => {
                                                        setFieldValue(
                                                          fieldEmployee,
                                                          id
                                                        );
                                                      }}
                                                      notFoundContent={null}
                                                      className={"searchMode "}
                                                      prefix={
                                                        <MagnifyingGlass
                                                          className={
                                                            classes.icon
                                                          }
                                                        />
                                                      }
                                                      showSearch
                                                    />
                                                  </div>
                                                </ValidationErrorWrapper>
                                              </div>
                                            </div>
                                            <div
                                              className={classes.label}
                                              style={{
                                                alignItems: "flex-start",
                                              }}
                                            >
                                              <span
                                                style={
                                                  index == 0
                                                    ? { width: "35%" }
                                                    : { width: "37%" }
                                                }
                                              >
                                                Дополнительная информация
                                              </span>
                                              <div
                                                style={
                                                  index == 0
                                                    ? { width: "65%" }
                                                    : { width: "63%" }
                                                }
                                              >
                                                <ValidationErrorWrapper
                                                  inputClassName="makeStyles-textAreas"
                                                  error={Boolean(
                                                    touchedFieldInfo &&
                                                      errorFieldInfo
                                                  )}
                                                  helperText={
                                                    touchedFieldInfo &&
                                                    errorFieldInfo
                                                      ? errorFieldInfo
                                                      : ""
                                                  }
                                                >
                                                  <textarea
                                                    className={
                                                      classes.textAreas
                                                    }
                                                    name={fieldInfo}
                                                    placeholder={
                                                      "Введите текст"
                                                    }
                                                    value={employees.info}
                                                    onChange={handleChange}
                                                  >
                                                    Расскажите о себе
                                                  </textarea>
                                                </ValidationErrorWrapper>
                                              </div>
                                            </div>
                                          </div>
                                          {index == 0 ? (
                                            ""
                                          ) : (
                                            <div
                                              style={{ marginLeft: 16 }}
                                              onClick={() => remove(index)}
                                            >
                                              <TrashIcon />
                                            </div>
                                          )}
                                        </div>
                                      </div>
                                    );
                                  }
                                )}
                              <div
                                className={classes.addItemCRM}
                                onClick={() =>
                                  push({
                                    direction_id: "",
                                    employee_id: "",
                                    info: "",
                                  })
                                }
                              >
                                + Новый контакт
                              </div>
                            </div>
                          );
                        }}
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
                      marginBottom: 8,
                    }}
                  >
                    <span className={classes.val}>
                      Сведения о поздравлениях
                    </span>
                  </div>
                  <Paper className={classes.paper} style={{ marginBottom: 50 }}>
                    <FieldArray name="contact_congratulations">
                      {({ remove, push }) => {
                        return (
                          <div>
                            {values.contact_congratulations.length > 0 &&
                              values.contact_congratulations?.map(
                                (congratulations, index) => {
                                  const fieldName = `contact_congratulations[${index}].name`;
                                  const touchedFieldName = getIn(
                                    touched,
                                    fieldName
                                  );
                                  const errorFieldName = getIn(
                                    errors,
                                    fieldName
                                  );
                                  const fieldCongratulation_type = `contact_congratulations[${index}].congratulation_type_id`;
                                  const touchedFieldCongratulation_type = getIn(
                                    touched,
                                    fieldCongratulation_type
                                  );
                                  const errorFieldCongratulation_type = getIn(
                                    errors,
                                    fieldCongratulation_type
                                  );
                                  const fieldOther = `contact_congratulations[${index}].other`;
                                  const touchedFieldOther = getIn(
                                    touched,
                                    fieldOther
                                  );
                                  const errorFieldOther = getIn(
                                    errors,
                                    fieldName
                                  );
                                  return (
                                    <div>
                                      {index == 0 ? (
                                        ""
                                      ) : (
                                        <Divider style={{ marginBottom: 16 }} />
                                      )}
                                      <div
                                        key={index}
                                        style={{
                                          display: "flex",
                                          flexDirection: "row",
                                        }}
                                      >
                                        <div style={{ width: "100%" }}>
                                          <div className={classes.label}>
                                            <span
                                              style={
                                                index == 0
                                                  ? { width: "35%" }
                                                  : { width: "37%" }
                                              }
                                            >
                                              Праздник
                                            </span>
                                            <div
                                              style={
                                                index == 0
                                                  ? { width: "65%" }
                                                  : { width: "63%" }
                                              }
                                            >
                                              <TextField
                                                style={{ width: "100%" }}
                                                variant={"outlined"}
                                                name={fieldName}
                                                value={congratulations.name}
                                                placeholder={
                                                  "Название праздника"
                                                }
                                                onChange={handleChange}
                                                error={Boolean(
                                                  touchedFieldName &&
                                                    errorFieldName
                                                )}
                                                helperText={
                                                  touchedFieldName &&
                                                  errorFieldName
                                                    ? errorFieldName
                                                    : ""
                                                }
                                              />
                                            </div>
                                          </div>
                                          <div className={classes.label}>
                                            <span
                                              style={
                                                index == 0
                                                  ? { width: "35%" }
                                                  : { width: "37%" }
                                              }
                                            >
                                              Тип поздравления
                                            </span>
                                            <div
                                              style={
                                                index == 0
                                                  ? { width: "65%" }
                                                  : { width: "63%" }
                                              }
                                            >
                                              <ValidationErrorWrapper
                                                inputClassName="ant-select-selector"
                                                helperText={
                                                  touchedFieldCongratulation_type &&
                                                  errorFieldCongratulation_type
                                                    ? errorFieldCongratulation_type
                                                    : ""
                                                }
                                                error={Boolean(
                                                  touchedFieldCongratulation_type &&
                                                    errorFieldCongratulation_type
                                                )}
                                              >
                                                <InputFilterSelectedType
                                                  // className={classes.input}
                                                  name={
                                                    fieldCongratulation_type
                                                  }
                                                  value={
                                                    congratulations.congratulation_type_id
                                                  }
                                                  handleChange={(value: any) =>
                                                    setFieldValue(
                                                      fieldCongratulation_type,
                                                      value
                                                    )
                                                  }
                                                  options={
                                                    Options.assetsOptionsCongratulation
                                                  }
                                                  placeholder="Выберите"
                                                  loading={assetsLoading}
                                                />
                                              </ValidationErrorWrapper>
                                            </div>
                                          </div>
                                          <div className={classes.label}>
                                            <span
                                              style={
                                                index == 0
                                                  ? { width: "35%" }
                                                  : { width: "37%" }
                                              }
                                            >
                                              Другое
                                            </span>
                                            <div
                                              style={
                                                index == 0
                                                  ? { width: "65%" }
                                                  : { width: "63%" }
                                              }
                                            >
                                              <TextField
                                                style={{ width: "100%" }}
                                                variant={"outlined"}
                                                name={fieldOther}
                                                placeholder={"Другое"}
                                                value={congratulations.other}
                                                onChange={handleChange}
                                                error={Boolean(
                                                  touchedFieldOther &&
                                                    errorFieldOther
                                                )}
                                                helperText={
                                                  touchedFieldOther &&
                                                  errorFieldOther
                                                    ? errorFieldOther
                                                    : ""
                                                }
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        {index == 0 ? (
                                          ""
                                        ) : (
                                          <div
                                            style={{ marginLeft: 16 }}
                                            onClick={() => remove(index)}
                                          >
                                            <TrashIcon />
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  );
                                }
                              )}
                            <div
                              className={classes.addItemCRM}
                              style={{ marginLeft: "35%" }}
                              onClick={() =>
                                push({
                                  name: "",
                                  congratulation_type_id: "",
                                  other: "",
                                })
                              }
                            >
                              + Новый праздник
                            </div>
                          </div>
                        );
                      }}
                    </FieldArray>
                  </Paper>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      {showModal ? (
        <ModalListOfContacts
          visible={showModal}
          getContainer={parentRef.current}
          onCancel={() => setShowModal(false)}
          footer={null}
          closable={false}
          onAttachedContact={onAttachedContact}
          attachedContact={attachedContact}
        />
      ) : null}
    </div>
  );
};
