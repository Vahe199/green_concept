import React, {useEffect, useRef, useState} from "react";
import {FieldArray, Form, Formik, getIn} from "formik";
import {Button, Checkbox, Paper, Radio} from "@material-ui/core";
import {CheckSquareChecked} from "../../../IMG/SVG/CheckSquareChecked";
import {CheckSquareUnChecked} from "../../../IMG/SVG/CheckSquareUnChecked";
import InputFilterSelectedType from "../../Utils/FilterInputs/InputFilterSelect";
import InputFilterSelect from "../../Utils/FilterInputs/InputFilterSelect";
import {TrashIcon} from "../../../IMG/SVG/TrashIcon";
import Divider from "@material-ui/core/Divider";
import {useStylesContactPersons} from "./TabsForUtil/ContactPersonsForCreatingStyles";
import {useTypedSelector} from "../../../redux/type_redux_hook/useTypedSelector";
import InputFilterDatePicker from "../../Utils/FilterInputs/InputFilterDatePicker";
import moment from "moment";
import {validationSchemaContactPerson} from "./TabsForUtil/ContactPersonsForCreatingValidate";
import {useActions} from "../../../redux/type_redux_hook/useAction";
import ModalListOfContacts from "../Core/Modals/ModalListOfContacts";
import ValidationErrorWrapper from "../../Utils/utils_options/ValidationErrorWrapper";
import {Input} from "antd";
import MaskedInput from "antd-mask-input";
import {InputAssetsOptions} from "../../Utils/utils_options/InputAssetsOptions";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {notifyError, notifySuccess,} from "../../Utils/utils_options/ToastNotify";
import {SearchContactPerson} from "../../Utils/utils_options/SearchContactPerson";
import {MagnifyingGlass} from "../../../IMG/SVG/MagnifyingGlass";
import BackToAddress from "../../Utils/BackToAddress";
import get from "lodash/get";
import pick from "lodash/pick";

export const ContactPersonsForCreating: React.FC = () => {
  const {
    insertContractorContactData,
    recoveryContractorContactState,
  } = useActions();
  const { assets, load: assetsLoading } = useTypedSelector(
    (state) => state.assets
  );
  const {fetchContactPerson,searchOptions,searchFilter} = SearchContactPerson()
  const { types_and_services }: any = assets;
  const { AuthorData } = useTypedSelector((state) => state.author);
  const id: any = get(AuthorData, "contractor.id", "");
  const { error, success } = useTypedSelector(
    (state) => state.contactPerson
  );

  const parentRef = useRef<any>({});
  const formikRef = useRef<any>({});
  const classes = useStylesContactPersons();
  const Options = InputAssetsOptions();
  const { TextArea } = Input;
  useEffect(() => {
    if (error) {
      notifyError(error);
       recoveryContractorContactState();
    }
    if (success) {
       notifySuccess("???????????? ?????????????? ??????????????????");
      formikRef.current.resetForm();
      recoveryContractorContactState();
    }
  },[success, error]);

  const [contractorId, setContractorId] = useState(1);
  const [attachedContact, onAttachedContact] = useState<any>({});
  const [showModal, setShowModal] = useState(false);
  const assetsOptionsServiceType = get(
    types_and_services,
    `${contractorId - 1}.services`,
    []
  )?.map((option: any) => ({
    key: option.id,
    value: option?.id ? option?.id : 0,
    label: option.name,
  }));

  const defaultValues = {
    firstname: "",
    middlename: "",
    surname: "",
    contractor_type_id: "",
    sex: "??????",
    birthdate: "",
    delivery_address: "",
    emails: [{ email: "" }],
    phones: [
      { phone: "", phone_type: "??????????????" },
      { phone: "", phone_type: "??????????????????" },
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

  const initialValues = {
    // @ts-ignore
    ...pick(attachedContact, [
      "firstname",
      "middlename",
      "surname",
      "contractor_type_id",
      "sex",
      "birthdate",
      "delivery_address",
      "service_type_id",
      "status_id",
    ]),

    // @ts-ignore
    branches: get(attachedContact, "branches", []).map((branch: any) =>
      get(branch, "id", "")
    ),
    contact_contractors: {
      ...pick(get(attachedContact, "contractors[0]", {}), [
        "main",
        "role_id",
        "position",
        "contractor_id",
      ]),
      contractor_id: get(attachedContact, "contractors[0]id", id),
    },
    contact_employees: get(attachedContact, "employees", []).map(
      (employee: any) => pick(employee, ["direction_id", "employee_id", "info"])
    ),
    contact_congratulations: get(
        attachedContact,
      "congratulations",
      []
    ).map((congratulation: any) =>
      pick(congratulation, ["name", "congratulation_type_id", "other"])
    ),
    emails: get(attachedContact, "emails", []).map((email: any) =>
      pick(email, ["email"])
    ),
    phones: get(attachedContact, "phones", []).map((phone: any) =>
      pick(phone, ["phone", "phone_type"])
    ),
  };

  // useEffect(() => {
  //   if (attachedContact) {
  //     getContactPersonsDataWithId(+attachedContact);
  //   }
  //
  //   return () => {
  //      getContactPersonsDataWithId(null);
  //   };
  // }, [attachedContact]);

  useEffect(() => {
    if (get(initialValues, "firstname", false)) {
      formikRef.current.setValues(initialValues);
    }
  }, [initialValues]);

  return (
    <div
      className={classes.mainContainer}
      style={{ height: "max-content", position: "relative" }}
      ref={parentRef}
    >
      <ToastContainer style={{ fontSize: 20, marginTop: "5%" }} />
      <BackToAddress address="/counterparties" title="????????????" />
      <Formik
        innerRef={formikRef}
        initialValues={defaultValues}
        validationSchema={() => validationSchemaContactPerson(contractorId)}
        onSubmit={async (values) => {
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
                ?????????????????? ????????????????
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
                    ?????????????? ???? ????????????
                  </span>
                </span>
              </span>
            </div>
            <div className={classes.root}>
              <div className={classes.BasicInformation}>
                <div className={classes.flexInitial}>
                  <span className={classes.val}>???????????????? ????????????????</span>
                </div>
                <Paper className={classes.paper}>
                  <div className={classes.label}>
                    <div className={classes.topDiv}>
                      <span style={{ width: "40%" }}>
                        ???????????????? ???????????????????? ????????
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
                          <span className={classes.statusText}>????????????</span>
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
                                placeholder="???????????????? ??????????????"
                                loading={assetsLoading}
                              />
                            </ValidationErrorWrapper>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={classes.label}>
                    <span>??????????????:</span>
                    <div style={{ width: "60%" }}>
                      <ValidationErrorWrapper
                        inputClassName="ant-input"
                        error={touched.surname && Boolean(errors.surname)}
                        helperText={touched.surname && errors.surname}
                      >
                        <Input
                          name="surname"
                          value={values.surname}
                          onChange={handleChange}
                          className={classes.input2}
                          autoComplete={"off"}
                          placeholder={"??????????????"}
                        />
                      </ValidationErrorWrapper>
                    </div>
                  </div>
                  <div className={classes.label}>
                    <span>??????</span>
                    <div style={{ width: "60%" }}>
                      <ValidationErrorWrapper
                        inputClassName="ant-input"
                        error={touched.firstname && Boolean(errors.firstname)}
                        helperText={touched.firstname && errors.firstname}
                      >
                        <Input
                          name="firstname"
                          value={values.firstname}
                          onChange={handleChange}
                          autoComplete={"off"}
                          className={classes.input2}
                          placeholder={"??????"}
                        />
                      </ValidationErrorWrapper>
                    </div>
                  </div>
                  <div className={classes.label}>
                    <span>????????????????</span>
                    <div style={{ width: "60%" }}>
                      <ValidationErrorWrapper
                        inputClassName="ant-input"
                        error={touched.middlename && Boolean(errors.middlename)}
                        helperText={touched.middlename && errors.middlename}
                      >
                        <Input
                          name="middlename"
                          value={values.middlename}
                          onChange={handleChange}
                          autoComplete={"off"}
                          className={classes.input2}
                          placeholder={"????????????????"}
                        />
                      </ValidationErrorWrapper>
                    </div>
                  </div>
                  <div className={classes.label}>
                    <span>??????</span>
                    <div style={{ width: "60%", display: "flex" }}>
                      <div>
                        <span>??????????????</span>
                        <Radio
                          checked={values.sex === "??????"}
                          onChange={() => setFieldValue("sex", "??????")}
                          color="default"
                          size="medium"
                          inputProps={{ "aria-label": "A" }}
                        />
                      </div>
                      <div>
                        <span>??????????????</span>
                        <Radio
                          checked={values.sex === "??????"}
                          onChange={() => setFieldValue("sex", "??????")}
                          color="default"
                          name="radio-button-demo"
                          size="medium"
                          inputProps={{ "aria-label": "B" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={classes.label}>
                    <span>???????? ????????????????</span>
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
                    <span>????????</span>
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
                                placeholder="????????????????"
                                loading={assetsLoading}
                              />
                            </ValidationErrorWrapper>
                          );
                        }}
                      </FieldArray>
                    </div>
                  </div>
                  <div className={classes.label}>
                    <span>??????????????????</span>
                    <FieldArray name="contact_contractors">
                      {() => {
                        const fieldName = `contact_contractors.position`;
                        const touchedFieldName = getIn(touched, fieldName);
                        const errorFieldName = getIn(errors, fieldName);

                        return (
                          <div style={{ width: "60%" }}>
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
                                value={values.contact_contractors.position}
                                onChange={handleChange}
                                autoComplete={"off"}
                                className={classes.input2}
                                placeholder={"??????????????????"}
                              />
                            </ValidationErrorWrapper>
                          </div>
                        );
                      }}
                    </FieldArray>
                  </div>
                  <div className={classes.label}>
                    <span>?????? ??????????????????????</span>
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
                          placeholder="????????????????"
                          loading={assetsLoading}
                        />
                      </ValidationErrorWrapper>
                    </div>
                  </div>
                  {contractorId !== 1 && (
                    <div className={classes.label}>
                      <span>?????? ??????????</span>
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
                            placeholder="????????????????"
                            loading={assetsLoading}
                          />
                        </ValidationErrorWrapper>
                      </div>
                    </div>
                  )}
                  <div className={classes.label}>
                    <span>??????????????</span>
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
                                placeholder="????????????????"
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
                    <span>?????????????? ??????????????</span>
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
                                {values?.phones?.length > 0 &&
                                  values?.phones?.map((phone, index) => {
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
                                      phone.phone_type === "??????????????" && (
                                        <div
                                          key={index}
                                          style={{
                                            display: "flex",
                                            flexDirection: "row",
                                          }}
                                        >
                                          <div
                                            style={{
                                              width: "100%",
                                              marginBottom: 16,
                                            }}
                                          >
                                            <ValidationErrorWrapper
                                              inputClassName="ant-input"
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
                                            >
                                              <MaskedInput
                                                name={fieldName}
                                                value={phone.phone}
                                                style={{
                                                  width: "100%",
                                                }}
                                                onChange={(e) => {
                                                  setFieldValue(
                                                    fieldName,
                                                    e.target.value.replace(
                                                      /[^0-9]/g,
                                                      ""
                                                    )
                                                  );
                                                }}
                                                className={classes.inputMask}
                                                autoComplete={"off"}
                                                placeholder={"7 999 999 99 99"}
                                                mask="1 111 111 11 11"
                                                prefix={<>+</>}
                                              />
                                            </ValidationErrorWrapper>
                                          </div>
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
                                    push({ phone: "", phone_type: "??????????????" })
                                  }
                                >
                                  + ???????????????? ??????????????
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
                    <span>?????????????? ??????????????????</span>
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
                                {values?.phones?.length > 0 &&
                                  values?.phones?.map((phone, index) => {
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
                                      phone.phone_type === "??????????????????" && (
                                        <div
                                          key={index}
                                          style={{
                                            display: "flex",
                                            flexDirection: "row",
                                          }}
                                        >
                                          <div
                                            style={{
                                              width: "100%",
                                              marginBottom: 16,
                                            }}
                                          >
                                            <ValidationErrorWrapper
                                              inputClassName="ant-input"
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
                                            >
                                              <MaskedInput
                                                name={fieldName}
                                                value={phone.phone}
                                                style={{
                                                  width: "100%",
                                                }}
                                                onChange={(e) => {
                                                  setFieldValue(
                                                    fieldName,
                                                    e.target.value.replace(
                                                      /[^0-9]/g,
                                                      ""
                                                    )
                                                  );
                                                }}
                                                className={classes.inputMask}
                                                autoComplete={"off"}
                                                placeholder={"7 999 999 99 99"}
                                                mask="1 111 111 11 11"
                                                prefix={<>+</>}
                                              />
                                            </ValidationErrorWrapper>
                                          </div>
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
                                    push({ phone: "", phone_type: "??????????????????" })
                                  }
                                >
                                  + ???????????????? ??????????????
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
                              {values?.emails?.length > 0 &&
                                values?.emails.map((email, index) => {
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
                                      <div
                                        style={{
                                          width: "100%",
                                          marginBottom: 16,
                                        }}
                                      >
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
                                            className={classes.input2}
                                            value={email.email}
                                            type="email"
                                            style={{
                                              width: "100%",
                                            }}
                                            onChange={handleChange}
                                            autoComplete={"off"}
                                            placeholder={`email${
                                              index + 1
                                            }@email.com`}
                                          />
                                        </ValidationErrorWrapper>
                                      </div>
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
                                + ???????????????? email
                              </div>
                            </div>
                          )}
                        </FieldArray>
                      </div>
                    </span>
                  </div>

                  <div className={classes.label}>
                    <span>?????????? ????????????????</span>
                    <div style={{ width: "60%" }}>
                      <ValidationErrorWrapper
                        inputClassName="ant-input"
                        error={
                          touched.delivery_address &&
                          Boolean(errors.delivery_address)
                        }
                        helperText={
                          touched.delivery_address && errors.delivery_address
                        }
                      >
                        <TextArea
                          name="delivery_address"
                          value={values.delivery_address}
                          onChange={handleChange}
                          className={classes.input2}
                          style={{ height: "80px" }}
                          //multiline
                          //rows={2}
                          autoSize={false}
                          //className={classes.textAreaCN}
                          autoComplete={"off"}
                          placeholder={"?????????? ???????????????? ?????????? ???????????? ??????????"}
                        />
                      </ValidationErrorWrapper>
                    </div>
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
                        ???????????????? ???? ?????????????? GREEN
                      </span>
                    </div>
                    <Paper className={classes.paper}>
                      <FieldArray name="contact_employees">
                        {({ remove, push }) => {
                          return (
                            <div>
                              {values.contact_employees?.length > 0 &&
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
                                        {index === 0 ? (
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
                                                  index === 0
                                                    ? { width: "35%" }
                                                    : { width: "37%" }
                                                }
                                              >
                                                ??????????????????????
                                              </span>
                                              <div
                                                style={
                                                  index === 0
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
                                                    placeholder="????????????????"
                                                    loading={assetsLoading}
                                                  />
                                                </ValidationErrorWrapper>
                                              </div>
                                            </div>
                                            <div className={classes.label}>
                                              <span
                                                style={
                                                  index === 0
                                                    ? { width: "35%" }
                                                    : { width: "37%" }
                                                }
                                              >
                                                ???????????????????? ????????
                                              </span>
                                              <div
                                                style={
                                                  index === 0
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
                                                        "?????????????? ?????????? ?????? ?????????? ??????????"
                                                      }
                                                      value={
                                                        employees.employee_id
                                                      }
                                                      onFocus={()=>fetchContactPerson()}
                                                      options={searchOptions}
                                                      onSearch={(val:any)=> {
                                                        searchFilter(val)
                                                      }}
                                                      filterOption={false}

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
                                                  index === 0
                                                    ? { width: "35%" }
                                                    : { width: "37%" }
                                                }
                                              >
                                                ???????????????????????????? ????????????????????
                                              </span>
                                              <div
                                                style={
                                                  index === 0
                                                    ? { width: "65%" }
                                                    : { width: "63%" }
                                                }
                                              >
                                                <div style={{ width: "100%" }}>
                                                  <ValidationErrorWrapper
                                                    inputClassName="ant-input"
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
                                                    <TextArea
                                                      name={fieldInfo}
                                                      value={employees.info}
                                                      onChange={handleChange}
                                                      className={classes.input2}
                                                      style={{
                                                        height: "233px",
                                                      }}
                                                      //multiline
                                                      //rows={2}
                                                      autoSize={false}
                                                      //className={classes.textAreaCN}
                                                      autoComplete={"off"}
                                                      placeholder={
                                                        "?????????????? ??????????"
                                                      }
                                                    />
                                                  </ValidationErrorWrapper>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          {index === 0 ? (
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
                                + ?????????? ??????????????
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
                      ???????????????? ?? ??????????????????????????
                    </span>
                  </div>
                  <Paper className={classes.paper} style={{ marginBottom: 50 }}>
                    <FieldArray name="contact_congratulations">
                      {({ remove, push }) => {
                        return (
                          <div>
                            {values.contact_congratulations?.length > 0 &&
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
                                      {index === 0 ? (
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
                                                index === 0
                                                  ? { width: "35%" }
                                                  : { width: "37%" }
                                              }
                                            >
                                              ????????????????
                                            </span>
                                            <div
                                              style={
                                                index === 0
                                                  ? { width: "65%" }
                                                  : { width: "63%" }
                                              }
                                            >
                                              <div style={{ width: "100%" }}>
                                                <ValidationErrorWrapper
                                                  inputClassName="ant-input"
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
                                                >
                                                  <Input
                                                    name={fieldName}
                                                    value={congratulations.name}
                                                    className={classes.input2}
                                                    onChange={handleChange}
                                                    autoComplete={"off"}
                                                    placeholder={
                                                      "???????????????? ??????????????????"
                                                    }
                                                  />
                                                </ValidationErrorWrapper>
                                              </div>
                                            </div>
                                          </div>
                                          <div className={classes.label}>
                                            <span
                                              style={
                                                index === 0
                                                  ? { width: "35%" }
                                                  : { width: "37%" }
                                              }
                                            >
                                              ?????? ????????????????????????
                                            </span>
                                            <div
                                              style={
                                                index === 0
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
                                                  placeholder="????????????????"
                                                  loading={assetsLoading}
                                                />
                                              </ValidationErrorWrapper>
                                            </div>
                                          </div>
                                          <div className={classes.label}>
                                            <span
                                              style={
                                                index === 0
                                                  ? { width: "35%" }
                                                  : { width: "37%" }
                                              }
                                            >
                                              ????????????
                                            </span>
                                            <div
                                              style={
                                                index === 0
                                                  ? { width: "65%" }
                                                  : { width: "63%" }
                                              }
                                            >
                                              <div style={{ width: "100%" }}>
                                                <ValidationErrorWrapper
                                                  inputClassName="ant-input"
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
                                                >
                                                  <Input
                                                    name={fieldOther}
                                                    className={classes.input2}
                                                    onChange={handleChange}
                                                    style={{ width: "100%" }}
                                                    autoComplete={"off"}
                                                    value={
                                                      congratulations.other
                                                    }
                                                    placeholder={"????????????"}
                                                  />
                                                </ValidationErrorWrapper>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        {index === 0 ? (
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
                              + ?????????? ????????????????
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
